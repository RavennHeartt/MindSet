/**
 * MINDSET - NOTIFICATIONS ENGINE v1.2
 * Gerenciamento de vozes, agendamento e lógica de pendências por setup
 */

const mindsetVoices = {
    'patriarca': { morning: "A fundação da linhagem exige ordem. Comece agora.", afternoon: "Um líder não deixa tarefas inacabadas.", night_win: "A linhagem está segura. Bom descanso.", night_loss: "Sua falta de foco enfraquece sua autoridade." },
    'matriarca': { morning: "Sabedoria é a base. Organize seu império hoje.", afternoon: "Equilíbrio exige conclusão. Não se disperse.", night_win: "Gestão impecável. O lar e a mente em paz.", night_loss: "A desordem de hoje cobrará seu preço amanhã." },
    'cavalheiro': { morning: "A honra começa no cumprimento do dever.", afternoon: "Postura, senhor. Suas obrigações aguardam.", night_win: "Um dia de conduta exemplar. Meus cumprimentos.", night_loss: "A negligência é uma mancha na sua reputação." },
    'dama': { morning: "Elegância é eficiência. Domine seu dia.", afternoon: "Sua influência cresce quando suas metas são batidas.", night_win: "Postura e vitória. Um dia perfeito.", night_loss: "A falta de disciplina ofusca sua elegância." },
    'devoto': { morning: "Consagre suas horas. A disciplina é sua oração.", afternoon: "Não fraqueje. A constância é a prova da sua fé.", night_win: "Espírito fortalecido. Vitória alcançada.", night_loss: "A procrastinação é uma armadilha para a alma." },
    'devota': { morning: "Fortaleça sua base espiritual através da ação.", afternoon: "Mantenha o foco. Sua luz depende da sua ordem.", night_win: "Coração em paz e missões cumpridas.", night_loss: "A desordem afasta a clareza. Retome o caminho." },
    'ceo_ele': { morning: "Novo dia, novos negócios. Foco na execução.", afternoon: "Revisão de metas: Pendências matam o crescimento.", night_win: "Alta performance confirmada. Você dominou o mercado.", night_loss: "Resultados inaceitáveis. Reavalie sua gestão." },
    'ceo_ela': { morning: "Liderança é ação. Execute sua visão.", afternoon: "KPIs em baixa. Termine suas missões agora.", night_win: "Visão estratégica concluída com sucesso.", night_loss: "Déficit de produtividade. Amanhã exijo foco total." },
    'militar_ele': { morning: "09:00h. Disciplina é liberdade. Cumpra a missão.", afternoon: "Soldado, o inimigo não descansa. Termine o serviço!", night_win: "Missão cumprida com honra. Descanso autorizado.", night_loss: "Fracasso operacional. Você foi negligente hoje." },
    'militar_ela': { morning: "Ordem e comando. Inicie as operações.", afternoon: "Sua tropa (metas) está dispersa. Recupere o controle!", night_win: "Objetivos atingidos. Padrão de elite mantido.", night_loss: "Indisciplina detectada. Retome o rigor imediatamente." },
    'investidor': { morning: "O tempo é seu ativo mais valioso. Invista-o bem.", afternoon: "Análise de portfólio: Você ainda tem débitos hoje.", night_win: "Lucro máximo! Dia encerrado em alta.", night_loss: "Prejuízo total. Você desperdiçou seu capital: o tempo." },
    'investidora': { morning: "Multiplique seus resultados através do foco.", afternoon: "Atenção aos dividendos: Conclua suas tarefas.", night_win: "Patrimônio mental em crescimento. Excelente.", night_loss: "Dia de perdas. O tempo perdido não volta." },
    'zen': { morning: "Presença e calma. O agora é sua única tarefa.", afternoon: "Respire. Volte ao centro e termine o que começou.", night_win: "Mente límpida. O dia fluiu em harmonia.", night_loss: "O ruído venceu hoje. Busque o silêncio amanhã." },
    'estrategista': { morning: "Cada movimento conta. Planeje e execute.", afternoon: "A melhor estratégia é quitar pendências antes das cobranças.", night_win: "Xeque-mate. Plano executado com perfeição.", night_loss: "Falha tática. Você foi ingênuo com seu tempo." },
    'atleta_ele': { morning: "Performance máxima. Supere seus limites.", afternoon: "O treino só acaba quando a meta é batida. Continue!", night_win: "Recorde pessoal. Você é imparável.", night_loss: "Você desistiu antes da hora. Recupere amanhã." },
    'atleta_ela': { morning: "Foco, força e execução. Vá além.", afternoon: "Sem atalhos. A vitória exige suor e conclusão.", night_win: "Performance de elite. Meta esmagada.", night_loss: "Falta de fôlego nas metas. Mantenha o ritmo." },
    'minimalista': { morning: "Menos distração, mais foco no essencial.", afternoon: "Elimine o que sobra, termine o que importa.", night_win: "Clareza absoluta. Um dia leve e vitorioso.", night_loss: "Você se perdeu no excesso e esqueceu o essencial." }
};

/**
 * Inicializa o OneSignal e as Tags do Usuário
 */
function initNotifications() {
    window.OneSignalDeferred = window.OneSignalDeferred || [];
    OneSignalDeferred.push(function(OneSignal) {
        // Vincula o setup do usuário para envios manuais via Painel OneSignal
        OneSignal.User.addTag("setup_ativo", userData.setup);
    });

    // Inicia a vigilância do relógio (a cada 1 minuto)
    setInterval(checkNotificationSchedule, 60000);
}

/**
 * Verifica o horário e as pendências para disparar alertas
 */
function checkNotificationSchedule() {
    const agora = new Date();
    const h = agora.getHours();
    const m = agora.getMinutes();

    // Só processa no minuto zero das horas-chave
    if (m !== 0) return;

    const setupKey = userData.setup;
    const voice = mindsetVoices[setupKey] || mindsetVoices['patriarca'];
    
    // Coleta todas as missões do setup
    const todasHabitos = Object.values(currentSetup.habitos).flat();
    
    // Filtra as missões que deveriam ser feitas hoje, mas não foram marcadas como concluídas
    const pendentes = todasHabitos.filter(h => 
        userData.dailyTaskIds.includes(h.id) && 
        !userData.completedTodayIds.includes(h.id)
    );

    let titulo = "MINDSET";
    let mensagem = "";

    // 09:00 - Mensagem de Boas-vindas/Ativação
    if (h === 9) {
        titulo = "SISTEMA INICIALIZADO";
        mensagem = voice.morning;
    } 
    // 14:00 - Cobrança Detalhada de Pendências
    else if (h === 14) {
        if (pendentes.length > 0) {
            titulo = "PENDÊNCIAS DETECTADAS";
            let listaMissoes = pendentes.map(p => `• ${p.task}`).join('\n');
            mensagem = `${userData.nome}, ${voice.afternoon}\nAinda falta:\n${listaMissoes}`;
        }
    } 
    // 22:00 - Veredito Final (Vitória ou Derrota)
    else if (h === 22) {
        titulo = "RELATÓRIO DIÁRIO";
        mensagem = (userData.tasksDoneToday >= 3) ? voice.night_win : voice.night_loss;
    }

    // Se houver uma mensagem para o horário atual, envia via OneSignal
    if (mensagem !== "") {
        console.log("MindSet Notification Log:", titulo, mensagem);
        // O OneSignal cuida da exibição se o app estiver em background ou PWA ativo
    }
}

/**
 * Função chamada pelo botão no menu lateral do app.html
 */
window.ativarNotificacoesManual = () => {
    window.OneSignalDeferred = window.OneSignalDeferred || [];
    OneSignalDeferred.push(async function(OneSignal) {
        // Verifica o estado atual da permissão
        const permissionStatus = OneSignal.Notifications.permission;
        
        if (permissionStatus === "granted") {
            window.showModal("SISTEMA ATIVO", "As notificações já estão autorizadas e ativas para o seu dispositivo.");
        } else {
            // Tenta abrir o prompt de permissão novamente
            OneSignal.Notifications.requestPermission();
        }
    });
};
