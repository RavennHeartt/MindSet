const admin = require('firebase-admin');
const axios = require('axios');

// Inicializa Firebase com o Secret do GitHub
const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });
const db = admin.firestore();

// Importamos a lógica das vozes (Copie o objeto mindsetVoices do seu notifications.js aqui)
const mindsetVoices = { /* ... cole aqui o objeto mindsetVoices completo ... */ };

async function syncUsers() {
    const usersSnapshot = await db.collection('usuarios').get();
    const hora = new Date().getHours();

    for (const doc of usersSnapshot.docs) {
        const user = doc.data();
        const voice = mindsetVoices[user.setup] || mindsetVoices['patriarca'];
        
        // Lógica de montagem do texto (Exatamente igual ao seu notifications.js)
        let marmita = "";
        // ... (monta a frase baseada na hora e tarefas pendentes) ...

        // Atualiza a tag no OneSignal via API
        await axios.put(
            `https://onesignal.com/api/v1/apps/${process.env.ONESIGNAL_APP_ID}/users/${doc.id}`,
            { tags: { overall: marmita } },
            { headers: { "Authorization": `Basic ${process.env.ONESIGNAL_REST_KEY}` } }
        );
    }
}

syncUsers();
