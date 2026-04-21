const axios = require('axios');

const app_id = process.env.ONESIGNAL_APP_ID;
const rest_key = process.env.ONESIGNAL_REST_KEY;

async function sendPush() {
    console.log("Iniciando disparo para App ID:", app_id);
    
    try {
        const response = await axios.post(
            "https://onesignal.com/api/v1/notifications",
            {
                app_id: app_id,
                included_segments: ["Total Subscriptions"], // "Total" costuma ser mais preciso que "All" em algumas versões
                contents: { "pt": "{{ overall }}", "en": "{{ overall }}" },
                headings: { "pt": "MindSet", "en": "MindSet" }
            },
            {
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                    "Authorization": `Basic ${rest_key}`
                }
            }
        );
        console.log("✅ Resposta do OneSignal:", response.data);
    } catch (error) {
        if (error.response) {
            console.error("❌ Erro da API OneSignal:", error.response.data);
        } else {
            console.error("❌ Erro de Conexão:", error.message);
        }
        process.exit(1);
    }
}

sendPush();
