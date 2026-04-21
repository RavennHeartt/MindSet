/**
 * MINDSET - NOTIFICATIONS ENGINE v3.1
 * Ponte Ativa: LocalStorage/Firebase -> OneSignal Tags
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
    'zen': { morning: "Presença e calma. O agora é sua única tarefa.", afternoon: "Respire. Volte ao centro e termine o que começou.", night_win: "Mente límpida. O dia fluiu em harmonia.", night_loss: "O ruído venceu hoje. Busque o silêncio amanhã." },
    'estrategista': { morning: "Cada movimento conta. Planeje e execute.", afternoon: "A melhor estratégia é quitar as pendências antes das cobranças.", night_win: "Xeque-mate. Plano executado com perfeição.", night_loss: "Falha tática. Você foi ingênuo com seu tempo." },
    'atleta_ele': { morning: "Performance máxima. Supere seus limites.", afternoon: "O treino só acaba quando a meta é batida. Continue!", night_win: "Recorde pessoal. Você é imparável.", night_loss: "Você desistiu antes da hora. Recupere amanhã." },
    'atleta_ela': { morning: "Foco, força e execução. Vá além.", afternoon: "Sem atalhos. A vitória exige suor e conclusão.", night_win: "Performance de elite. Meta esmagada.", night_loss: "Falta de fôlego nas metas. Mantenha o ritmo." },
    'minimalista': { morning: "Menos distração, mais foco no essencial.", afternoon: "Elimine o que sobra, termine o que importa.", night_win: "Clareza absoluta. Um dia leve e vitorioso.", night_loss: "Você se perdeu no excesso e esqueceu o essencial." }
};

/**
 * Função Principal: Sincroniza TUDO com OneSignal
 */
async function sendOneSignalTags(user) {
    if (!user || !user.nome || !user.setup) return;

    window.OneSignalDeferred = window.OneSignalDeferred || [];
    window.OneSignalDeferred.push(async function(OneSignal) {
        try {
            const cleanId = user.nome.toLowerCase().trim().replace(/\s/g, '_');
            
            // EVITA O ERRO "OP FAILED": Só faz login se o ID mudar
            if (OneSignal.User.externalId !== cleanId) {
                await OneSignal.login(cleanId);
            }

            const totalTasks = (user.dailyTaskIds || []).length;
            const completedTasks = (user.completedTodayIds || []).length;
            const pendentes = totalTasks - completedTasks;
            const voice = mindsetVoices[user.setup] || mindsetVoices['patriarca'];

            // Envia as tags
            await OneSignal.User.addTags({
                "usuario_nome": String(user.nome),
                "setup_ativo": String(user.setup),
                "nivel_atual": String(user.level || 1),
                "streak_dias": String(user.streak || 0),
                "tarefas_pendentes": String(pendentes),
                "msg_morning": String(voice.morning),
                "msg_afternoon": String(voice.afternoon),
                "msg_night_win": String(voice.night_win),
                "msg_night_loss": String(voice.night_loss)
            });

            console.log(`✅ OneSignal: Sincronizado com ${pendentes} tarefas pendentes.`);
        } catch (err) {
            // Se falhar, apenas silenciamos o erro no console para não poluir
            console.warn("OneSignal: Sincronização em segundo plano.");
        }
    });
}

/**
 * Verificação de Notificações Locais (Backup)
 */
function checkNotificationSchedule() {
    const rawData = localStorage.getItem('mindset_data');
    if (!rawData) return;
    
    const localData = JSON.parse(rawData);
    const agora = new Date();
    const h = agora.getHours();
    const m = agora.getMinutes();

    if (m !== 0) return; 

    const voice = mindsetVoices[localData.setup] || mindsetVoices['patriarca'];
    let titulo = "SISTEMA MINDSET";
    let mensagem = "";

    if (h === 9) mensagem = voice.morning;
    else if (h === 14) mensagem = voice.afternoon;
    else if (h === 22) {
        // Se o usuário fez as 3 tarefas
        const venceu = (localData.completedTodayIds || []).length >= 3;
        mensagem = venceu ? voice.night_win : voice.night_loss;
    }

    if (mensagem && Notification.permission === "granted") {
        new Notification(titulo, { 
            body: mensagem, 
            icon: 'assets/icone-ios.png' 
        });
    }
}

//setInterval(checkNotificationSchedule, 60000);
