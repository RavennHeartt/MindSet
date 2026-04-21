const admin = require('firebase-admin');
const axios = require('axios');

// 1. Inicializa Firebase
if (!admin.apps.length) {
    const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
    });
}
const db = admin.firestore();

// 2. Lógica das Vozes (Igual ao seu notifications.js)
const mindsetVoices = {
    patriarca: { morning: "Bom dia, herdeiro.", afternoon: "Mantenha o foco.", night: "Relatório do dia." },
    militar: { morning: "Sentido! Alvorada.", afternoon: "Sem desculpas.", night: "Missão cumprida?" },
    // Adicione os outros setups que você usa aqui...
};

async function updateAllUsers() {
    try {
        console.log("Iniciando sincronia com Firebase...");
        const usersSnapshot = await db.collection('usuarios').get();
        
        const agora = new Date();
        const hora = agora.getHours();
        let periodo = 'night';
        if (hora >= 5 && hora < 12) periodo = 'morning';
        else if (hora >= 12 && hora < 18) periodo = 'afternoon';

        for (const doc of usersSnapshot.docs) {
            const userData = doc.data();
            const externalId = doc.id; // O ID do documento no Firebase deve ser o ID do usuário

            // Monta a Marmita (Lógica simplificada para o robô)
            const setup = userData.setup || 'patriarca';
            const saudacao = mindsetVoices[setup][periodo];
            const nome = userData.nome || "Guerreiro";
            
            // Pega tarefas pendentes do array no Firebase
            const tarefas = userData.tarefas || [];
            const pendentes = tarefas.filter(t => !t.concluida).map(t => t.nome);
            
            let marmita = `${nome}, ${saudacao} `;
            if (pendentes.length > 0) {
                marmita += `Pendentes: ${pendentes.join(', ')}`;
            } else {
                marmita += "Tudo em dia por aqui!";
            }

            console.log(`Atualizando usuário ${nome}...`);

            // 3. Envia para o OneSignal via API de Tags
            // Usamos edit_tags para garantir que a tag seja criada se não existir
            await axios.put(
                `https://onesignal.com/api/v1/apps/${process.env.ONESIGNAL_APP_ID}/users/${externalId}`,
                { tags: { overall: marmita, pendentes: pendentes.length } },
                {
                    headers: {
                        "Content-Type": "application/json; charset=utf-8",
                        "Authorization": `Basic ${process.env.ONESIGNAL_REST_KEY}`
                    }
                }
            ).catch(e => console.log(`Erro ao atualizar tags de ${nome}: ${e.message}`));
        }
        console.log("✅ Sincronia concluída!");
    } catch (error) {
        console.error("❌ Falha na sincronia:", error);
    }
}

updateAllUsers();
