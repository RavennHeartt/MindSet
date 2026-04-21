const axios = require('axios');

const ONESIGNAL_APP_ID = process.env.ONESIGNAL_APP_ID;
const ONESIGNAL_REST_KEY = process.env.ONESIGNAL_REST_KEY;

async function sendPush() {
    const data = {
        app_id: ONESIGNAL_APP_ID,
        included_segments: ["All Subscriptions"],
        // Aqui está o segredo: ele manda o OneSignal ler a tag que o seu JS salvou
        contents: {
            "en": "{{ overall }}",
            "pt": "{{ overall }}"
        },
        // Opcional: Título dinâmico
        headings: {
            "en": "MindSet Update",
            "pt": "MindSet: Status do Ciclo"
        }
    };

    const config = {
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            "Authorization": `Basic ${ONESIGNAL_REST_KEY}`
        }
    };

    try {
        const response = await axios.post('https://onesignal.com/api/v1/notifications', data, config);
        console.log("✅ Pushes disparados com sucesso:", response.data);
    } catch (error) {
        console.error("❌ Erro ao disparar:", error.response ? error.response.data : error.message);
        process.exit(1);
    }
}

sendPush();
