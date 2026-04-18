/**
 * MINDSET - NOTIFICATIONS ENGINE v1.3 (FULL ROBUST)
 * Gestão de vozes, IDs externos, Tags e monitorização de missões
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
 * Inicializa a ligação ao OneSignal com sincronização de perfil
 */
function initNotifications() {
    window.OneSignalDeferred = window.OneSignalDeferred || [];
    window.OneSignalDeferred.push(async function(OneSignal) {
        
        // 1. Gera um ID único para este utilizador (External ID)
        const cleanName = userData.nome.toLowerCase().replace(/\s/g, '_');
        await OneSignal.login(cleanName); 

        // 2. Sincroniza as Tags (Informação de HUD para o servidor)
        await OneSignal.User.addTags({
            "nome_usuario": userData.nome,
            "setup_ativo": userData.setup,
            "nivel_atual": userData.level,
            "streak_atual": userData.streak
        });

        console.log("MindSet Notif: Perfil sincronizado para " + cleanName);
    });

    // Inicia a verificação de missões em tempo real
    setInterval(checkNotificationSchedule, 60000);
}

/**
 * Monitoriza o relógio para disparar as vozes do sistema
 */
function checkNotificationSchedule() {
    const agora = new Date();
    const h = agora.getHours();
    const m = agora.getMinutes();

    // Executa apenas na "hora cheia" (ex: 14:00)
    if (m !== 0) return;

    const voice = mindsetVoices[userData.setup] || mindsetVoices['patriarca'];
    const todasHabitos = Object.values(currentSetup.habitos).flat();
    
    // Filtra apenas as missões que deveriam ser feitas hoje e NÃO foram concluídas
    const pendentes = todasHabitos.filter(h => 
        userData.dailyTaskIds.includes(h.id) && 
        !userData.completedTodayIds.includes(h.id)
    );

    let titulo = "MINDSET";
    let mensagem = "";

    // GATILHOS DE HORÁRIO
    if (h === 9) {
        titulo = "SISTEMA OPERACIONAL";
        mensagem = voice.morning;
    } 
    else if (h === 14) {
        if (pendentes.length > 0) {
            titulo = "ALERTAS DE PENDÊNCIA";
            const listaTxt = pendentes.map(p => `• ${p.task}`).join('\n');
            mensagem = `${userData.nome}, ${voice.afternoon}\nFalta cumprir:\n${listaTxt}`;
        }
    } 
    else if (h === 22) {
        titulo = "ANÁLISE DO DIA";
        mensagem = (userData.tasksDoneToday >= 3) ? voice.night_win : voice.night_loss;
    }

    // Apenas para log interno. O envio PUSH real é gerido pelo servidor.
    if (mensagem !== "") {
        console.log(`[PUSH SCHEDULED] ${titulo}: ${mensagem}`);
    }
}

/**
 * Função do Botão "ATIVAR NOTIFICAÇÕES" (Feedback Visual)
 */
window.ativarNotificacoesManual = () => {
    console.log("A solicitar permissão...");
    
    window.OneSignalDeferred = window.OneSignalDeferred || [];
    window.OneSignalDeferred.push(async function(OneSignal) {
        try {
            // Abre o prompt nativo do Android/Chrome
            await OneSignal.Notifications.requestPermission();
            
            // Verifica o resultado
            if (OneSignal.Notifications.permission) {
                window.showModal(
                    "SISTEMA ATIVO", 
                    "As notificações foram autorizadas. O MindSet agora pode enviar alertas para o seu HUD."
                );
            } else {
                window.showModal(
                    "AVISO", 
                    "Permissão negada. Para receber alertas, por favor ative as notificações nas definições do seu navegador/telemóvel."
                );
            }
        } catch (error) {
            console.error("Erro OneSignal:", error);
            window.showModal("ERRO", "Não foi possível conectar ao motor de notificações.");
        }
    });
};
