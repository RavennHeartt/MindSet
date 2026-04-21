const admin = require('firebase-admin');
const axios = require('axios');

if (!admin.apps.length) {
    const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
    admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });
}
const db = admin.firestore();

// Importante: Copie o objeto mindsetVoices EXATAMENTE como está no seu notifications.js
const mindsetVoices = {
    'patriarca': { morning: "...", afternoon: "...", night: "...", night_win: "...", night_loss: "..." },
    // ... complete com todos os outros ...
};

async function updateAllUsers() {
    console.log("🤖 Iniciando Processamento em Background...");
    const usersSnapshot = await db.collection('usuarios').get();
    
    // Ajuste de fuso horário para Brasília (UTC-3)
    const agora = new Date();
    const horaBR = new Date(agora.getTime() - (3 * 60 * 60 * 1000)).getHours();
    
    let periodo = 'night';
    if (horaBR >= 5 && horaBR < 12) periodo = 'morning';
    else if (horaBR >= 12 && horaBR < 18) periodo = 'afternoon';

    for (const doc of usersSnapshot.docs) {
        const user = doc.data();
        const uid = doc.id; // O ID do documento no Firebase

        try {
            const voice = mindsetVoices[user.setup] || mindsetVoices['patriarca'];
            const tarefas = user.tarefas || [];
            const pendentes = tarefas.filter(t => !t.concluida).map(t => t.nome);
            
            // Montagem da Marmita
            let saudacao = voice[periodo] || "Foco no objetivo.";
            let marmita = `${user.nome || 'Guerreiro'}, ${saudacao}`;
            
            if (periodo === 'night') {
                marmita = (pendentes.length === 0) 
                    ? voice.night_win.replace("$", user.nome) 
                    : voice.night_loss.replace("$", user.nome);
            }
            if (pendentes.length > 0) marmita += `\n\nPendente: ${pendentes.join(', ')}`;

            // Tenta injetar a tag no OneSignal por baixo dos panos
            await axios.put(
                `https://onesignal.com/api/v1/apps/${process.env.ONESIGNAL_APP_ID}/users/${uid}`,
                { tags: { overall: String(marmita) } },
                { headers: { "Authorization": `Basic ${process.env.ONESIGNAL_REST_KEY}`, "Content-Type": "application/json" } }
            );
            console.log(`✅ Sincronizado: ${user.nome}`);
        } catch (e) {
            // Se der erro aqui, é porque o usuário ainda não abriu o app novo. 
            // O robô ignora e passa para o próximo.
            console.log(`[Background] Usuário ${uid} ainda não vinculado. Pulando...`);
        }
    }
}
updateAllUsers();
