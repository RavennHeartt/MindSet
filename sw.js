let dailyConfig = null;

self.addEventListener('message', event => {
    if (event.data.type === 'SET_DAILY_CONFIG') {
        dailyConfig = event.data.config;
        console.log("Configuração de notificações recebida.");
    }
});

// O navegador tenta rodar esse evento periodicamente
self.addEventListener('periodicsync', event => {
    if (event.tag === 'check-tasks') {
        checkAndSend();
    }
});

function checkAndSend() {
    if (!dailyConfig) return;

    const agora = new Date();
    const hora = agora.getHours();

    // Bloqueio de horário: 07:00 às 22:00
    if (hora < dailyConfig.startHour || hora > dailyConfig.endHour) return;

    // Lógica de sorteio para notificação aleatória (Ex: 20% de chance a cada check do sistema)
    if (Math.random() > 0.2) return; 

    let title = "MINDSET";
    let body = dailyConfig.style.pendente;

    // Primeira notificação do dia (perto das 07:00) enviando a Quote
    if (hora === 7 && agora.getMinutes() < 30) {
        title = "ORDEM DO DIA";
        body = dailyConfig.style.quote + dailyConfig.quote;
    }
    
    // Notificação de Streak
    if (hora > 12 && hora < 18 && Math.random() < 0.3) {
        title = "CONSISTÊNCIA";
        body = `🔥 ${dailyConfig.nome}, você está com ${dailyConfig.streak} dias de sequência! Mantenha o ritmo.`;
    }

    // Notificação de Doação (Rara)
    if (dailyConfig.showDonate && hora === 20) {
        title = "APOIE O PROJETO";
        body = "Gostando da sua evolução? Considere apoiar o desenvolvedor com qualquer valor.";
    }

    // Notificação de Final de Dia (Perto das 22h)
    if (hora === 21 && agora.getMinutes() > 30) {
        title = "RELATÓRIO FINAL";
        body = dailyConfig.tasksDone >= 3 ? dailyConfig.style.vitoria : dailyConfig.style.derrota;
    }

    self.registration.showNotification(title, {
        body: body,
        icon: 'assets/icon.png',
        vibrate: [200, 100, 200]
    });
}
