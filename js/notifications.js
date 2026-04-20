/**
 * MINDSET - NOTIFICATIONS ENGINE v1.7
 * Sincronização Cloud, Consentimento e Listagem Dinâmica
 */

const mindsetVoices = {
    'patriarca': { morning: "A fundação da linhagem exige ordem. Comece agora.", afternoon: "Um líder não deixa tarefas inacabadas.", night_win: "A linhagem está segura. Bom descanso.", night_loss: "Sua falta de foco enfraquece sua autoridade." },
    'matriarca': { morning: "Sabedoria é a base. Organize seu império hoje.", afternoon: "Equilíbrio exige conclusão. Não se disperse.", night_win: "Gestão impecável. O lar e a mente em paz.", night_loss: "A desordem de hoje cobrará seu preço amanhã." },
    'cavalheiro': { morning: "A honra começa no cumprimento do dever.", afternoon: "Postura, senhor. Suas obrigações aguardam.", night_win: "Um dia de conduta exemplar. Meus cumprimentos.", night_loss: "A negligência é uma mancha na sua reputação." },
    'dama': { morning: "Elegância é eficiência. Domine seu dia.", afternoon: "Sua influência cresce quando suas metas são batidas.", night_win: "Postura e vitória. Um dia perfeito.", night_loss: "A falta de disciplina ofusca sua elegância." },
    'devoto': { morning: "Consagre suas horas. A disciplina é sua oração.", afternoon: "Não fraqueje. A constância é a prova da sua fé.", night_win: "Espírito fortalecido. Vitória alcançada.", night_loss: "A procrastinação é uma armadilha para a alma." },
    'devota': { morning: "Fortaleça sua base espiritual através da ação.", afternoon: "Mantenha o foco. Sua luz depende da sua ordem.", night_win: "Coração em paz e missões cumpridas.", night_loss: "A desordem afasta a clareza. Retome o caminho." },
    'ceo_ele': { morning: "Novo dia, novos lucros. Foco na execução.", afternoon: "Revisão de metas: Pendências matam o crescimento.", night_win: "Alta performance confirmada. Você dominou o mercado.", night_loss: "Resultados inaceitáveis. Reavalie sua gestão." },
    'ceo_ela': { morning: "Liderança é ação. Execute sua visão.", afternoon: "KPIs em baixa. Termine suas missões agora.", night_win: "Visão estratégica concluída com sucesso.", night_loss: "Déficit de produtividade. Amanhã exijo foco total." },
    'militar_ele': { morning: "09:00h. Disciplina é liberdade. Cumpra a missão.", afternoon: "Soldado, o inimigo não descansa. Termine o serviço!", night_win: "Missão cumprida com honra. Descanso autorizado.", night_loss: "Fracasso operacional. Você foi negligente hoje." },
    'militar_ela': { morning: "Ordem e comando. Inicie as operações.", afternoon: "Sua tropa está dispersa. Recupere o controle!", night_win: "Objetivos atingidos. Padrão de elite mantido.", night_loss: "Indisciplina detectada. Retome o rigor imediatamente." },
    'investidor': { morning: "O tempo é seu ativo mais valioso. Invista-o bem.", afternoon: "Análise de portfólio: Você ainda tem débitos hoje.", night_win: "Lucro máximo! Dia encerrado em alta.", night_loss: "Prejuízo total. Você desperdiçou seu capital de tempo." },
    'investidora': { morning: "Multiplique seus resultados através do foco.", afternoon: "Atenção aos dividendos: Conclua suas tarefas.", night_win: "Patrimônio mental em crescimento. Excelente.", night_loss: "Dia de perdas. O tempo desperdiçado não volta." },
    'zen': { morning: "Presença e calma. O agora é sua única tarefa.", afternoon: "Respire. Volte ao centro e termine o que começou.", night_win: "Mente límpida. O dia fluiu em harmoia.", night_loss: "O ruído venceu hoje. Busque o silêncio amanhã." },
    'estrategista': { morning: "Cada movimento conta. Planeje e execute.", afternoon: "A melhor estratégia é quitar as pendências antes das cobranças.", night_win: "Xeque-mate. Plano executado com perfeição.", night_loss: "Falha tática. Você foi ingênuo com seu tempo." },
    'atleta_ele': { morning: "Performance máxima. Supere seus limites.", afternoon: "O treino só acaba quando a meta é batida. Continue!", night_win: "Recorde pessoal. Você é imparável.", night_loss: "Você desistiu antes da hora. Recupere amanhã." },
    'atleta_ela': { morning: "Foco, força e execução. Vá além.", afternoon: "Sem atalhos. A vitória exige suor e conclusão.", night_win: "Performance de elite. Meta esmagada.", night_loss: "Falta de fôlego nas metas. Mantenha o ritmo." },
    'minimalista': { morning: "Menos distração, mais foco no essencial.", afternoon: "Elimine o que sobra, termine o que importa.", night_win: "Clareza absoluta. Um dia leve e vitorioso.", night_loss: "Você se perdeu no excesso e esqueceu o essencial." }
};

/**
 * Inicializa o OneSignal com Consentimento e Sincronização Cloud
 */
function initNotifications() {
    window.OneSignalDeferred = window.OneSignalDeferred || [];
    window.OneSignalDeferred.push(async function(OneSignal) {
        
        await OneSignal.setConsentGiven(true);

        const localData = JSON.parse(localStorage.getItem('mindset_data'));
        const activeUser = window.userData || localData;

        if (!activeUser || !activeUser.nome) return;

        const cleanName = activeUser.nome.toLowerCase().trim().replace(/\s/g, '_');
        const voice = mindsetVoices[activeUser.setup] || mindsetVoices['patriarca'];

        try {
            await OneSignal.login(cleanName); 

            // ATUALIZAÇÃO: Enviando as frases do setup como Tags para o OneSignal
            await OneSignal.User.addTags({
                "nome_usuario": activeUser.nome,
                "setup_ativo": activeUser.setup,
                "nivel_atual": String(activeUser.level || 1),
                "streak_atual": String(activeUser.streak || 0),
                "msg_morning": voice.morning,
                "msg_afternoon": voice.afternoon
            });

            await OneSignal.Notifications.requestPermission();
            console.log("MindSet Notif: Sistema sincronizado via Cloud para " + cleanName);
        } catch (error) {
            console.error("Erro OneSignal:", error);
        }
    });

    setInterval(checkNotificationSchedule, 60000);
}

/**
 * Verifica horários e monta mensagens com lista de tarefas pendentes
 */
function checkNotificationSchedule() {
    const localData = JSON.parse(localStorage.getItem('mindset_data'));
    const activeUser = window.userData || localData;
    if (!activeUser) return;

    const agora = new Date();
    const h = agora.getHours();
    const m = agora.getMinutes();

    if (m !== 0) return; 

    const voice = mindsetVoices[activeUser.setup] || mindsetVoices['patriarca'];
    
    // IMPORTANTE: Certifique-se que as chaves coincidem com o seu app.js
    const tarefasAtivas = activeUser.dailyTaskIds || []; // IDs das tarefas de hoje
    const concluidasIds = activeUser.completedTodayIds || [];
    
    // Para listar o nome da tarefa, precisamos cruzar os IDs com a biblioteca de hábitos
    // Esta lógica assume que o app.js ou os setups injetaram os dados necessários
    let listaPendentes = [];
    
    // Tentativa de recuperar nomes das tarefas se o setupLibrary estiver disponível
    if (typeof setupLibrary !== 'undefined') {
        const setupData = setupLibrary[activeUser.setup];
        if (setupData) {
            const allHabits = Object.values(setupData.habitos).flat();
            listaPendentes = allHabits
                .filter(h => tarefasAtivas.includes(h.id) && !concluidasIds.includes(h.id))
                .map(h => h.task);
        }
    }

    let titulo = "MINDSET";
    let mensagem = "";

    if (h === 9) {
        titulo = "SISTEMA OPERACIONAL";
        mensagem = voice.morning;
    } 
    else if (h === 14) {
        titulo = "ALERTAS DE PENDÊNCIA";
        if (listaPendentes.length > 0) {
            const listaTxt = listaPendentes.map(t => `• ${t}`).join('\n');
            mensagem = `${activeUser.nome}, ${voice.afternoon}\n\nPENDENTES:\n${listaTxt}`;
        } else {
            mensagem = `${activeUser.nome}, protocolo matinal concluído. Mantenha o foco.`;
        }
    } 
    else if (h === 22) {
        titulo = "ANÁLISE DO DIA";
        const venceuODia = concluidasIds.length >= 3;
        const textoBase = venceuODia ? voice.night_win : voice.night_loss;
        
        if (listaPendentes.length > 0) {
            const listaTxt = listaPendentes.map(t => `• ${t}`).join('\n');
            mensagem = `${textoBase}\n\nFALHAS NO PROTOCOLO:\n${listaTxt}`;
        } else {
            mensagem = textoBase;
        }
    }

    if (mensagem !== "") {
        console.log(`[LOG] ${titulo}: ${mensagem}`);
        
        // Dispara notificação nativa se o app estiver aberto/minimizado
        if (Notification.permission === "granted") {
            new Notification(titulo, { body: mensagem });
        }
    }
}

window.ativarNotificacoesManual = () => {
    window.OneSignalDeferred = window.OneSignalDeferred || [];
    window.OneSignalDeferred.push(async function(OneSignal) {
        await OneSignal.setConsentGiven(true);
        await OneSignal.Notifications.requestPermission();
    });
};
