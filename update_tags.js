const admin = require('firebase-admin');
const axios = require('axios');

if (!admin.apps.length) {
    const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
    admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });
}
const db = admin.firestore();

// Coloque TODOS os seus setups aqui. Adicionei uma proteção caso falte algum.
const mindsetVoices = {
    patriarca: { morning: "Bom dia, herdeiro.", afternoon: "Mantenha o foco.", night: "Relatório do dia." },
    militar: { morning: "Sentido! Alvorada.", afternoon: "Sem desculpas.", night: "Missão cumprida?" },
    // Adicione os outros aqui...
};

async function updateAllUsers() {
    try {
        console.log("Iniciando sincronia com Firebase...");
        const usersSnapshot = await db.collection('usuarios').get();
        
        const hora = new Date().getHours() - 3; // Ajuste para Brasília se o server for UTC
        let periodo = 'night';
        if (hora >= 5 && hora < 12) periodo = 'morning';
        else if (hora >= 12 && hora < 18) periodo = 'afternoon';

        for (const doc of usersSnapshot.docs) {
            const userData = doc.data();
            const externalId = doc.id; // O ID do documento no Firebase

            // PROTEÇÃO: Se o setup não existir, usa 'patriarca'
            const setup = userData.setup || 'patriarca';
            const vozes = mindsetVoices[setup] || mindsetVoices['patriarca'];
            const saudacao = vozes[periodo] || "Foco no objetivo!"; // Backup final
            
            const nome = userData.nome || "Guerreiro";
            const tarefas = userData.tarefas || [];
            const pendentes = tarefas.filter(t => !t.concluida).map(t => t.nome);
            
            let marmita = `${nome}, ${saudacao} `;
            if (pendentes.length > 0) marmita += `Pendentes: ${pendentes.join(', ')}`;
            else marmita += "Tudo em dia!";

            console.log(`Tentando atualizar: ${nome} (ID: ${externalId})`);

            // Tenta atualizar no OneSignal
            try {
                await axios.put(
                    `https://onesignal.com/api/v1/apps/${process.env.ONESIGNAL_APP_ID}/users/${externalId}`,
                    { tags: { overall: marmita } },
                    { headers: { "Authorization": `Basic ${process.env.ONESIGNAL_REST_KEY}` } }
                );
                console.log(`✅ ${nome} atualizado.`);
            } catch (e) {
                console.log(`⚠️ Pulei ${nome}: Usuário não vinculado no OneSignal ainda.`);
            }
        }
    } catch (error) {
        console.error("❌ Erro crítico:", error.message);
    }
}
updateAllUsers();
