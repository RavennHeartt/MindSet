const axios = require('axios');

const app_id = process.env.ONESIGNAL_APP_ID;
const rest_key = process.env.ONESIGNAL_REST_KEY;

async function sendPush() {
    try {
        const response = await axios.post(
            "https://onesignal.com/api/v1/notifications",
            {
                app_id: app_id,
                // Mudamos de segments para filters para pegar qualquer um que tenha a tag 'overall'
                filters: [
                    {"field": "tag", "key": "overall", "relation": "exists"}
                ],
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
