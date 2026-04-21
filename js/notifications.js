/**
 * MINDSET - NOTIFICATIONS ENGINE v4.5
 * Estratégia: Marmita Pronta (Tag 'overall' + Tag 'pendentes')
 * Recursos: Hard Reset de Subscrição e Sincronia de Veteranos
 */

const mindsetVoices = {
    'patriarca': { morning: "A fundação da linhagem exige ordem.", afternoon: "Um líder não deixa tarefas inacabadas.", night_win: "A linhagem está segura. Bom descanso.", night_loss: "Sua falta de foco enfraquece sua autoridade." },
    'matriarca': { morning: "Sabedoria é a base. Organize seu império.", afternoon: "Equilíbrio exige conclusão. Não se disperse.", night_win: "Gestão impecável. Mente em paz.", night_loss: "A desordem de hoje cobrará seu preço." },
    'cavalheiro': { morning: "A honra começa no cumprimento do dever.", afternoon: "Postura, senhor. Suas obrigações aguardam.", night_win: "Um dia de conduta exemplar.", night_loss: "A negligência é uma mancha na reputação." },
    'dama': { morning: "Elegância é eficiência. Domine seu dia.", afternoon: "Sua influência cresce com metas batidas.", night_win: "Postura e vitória. Um dia perfeito.", night_loss: "A falta de disciplina ofusca sua elegância." },
    'devoto': { morning: "Consagre suas horas. Disciplina é oração.", afternoon: "Não fraqueje. A constância é a prova.", night_win: "Espírito fortalecido. Vitória alcançada.", night_loss: "A procrastinação é uma armadilha." },
    'devota': { morning: "Fortaleça sua base através da ação.", afternoon: "Mantenha o foco. Sua luz depende da ordem.", night_win: "Coração em paz e missões cumpridas.", night_loss: "A desordem afasta a clareza." },
    'ceo_ele': { morning: "Novo dia, novos lucros. Foco na execução.", afternoon: "KPIs em baixa. Termine suas missões.", night_win: "Alta performance confirmada.", night_loss: "Resultados inaceitáveis. Reavalie." },
    'ceo_ela': { morning: "Liderança é ação. Execute sua visão.", afternoon: "Revisão de metas: Pendências matam o crescimento.", night_win: "Visão estratégica concluída.", night_loss: "Déficit de produtividade. Foco total." },
    'militar_ele': { morning: "09:00h. Disciplina é liberdade.", afternoon: "Soldado, o inimigo não descansa!", night_win: "Missão cumprida. Descanso autorizado.", night_loss: "Fracasso operacional. Negligência detectada." },
    'militar_ela': { morning: "Ordem e comando. Inicie as operações.", afternoon: "Sua tropa está dispersa. Recupere o controle!", night_win: "Objetivos atingidos. Padrão mantido.", night_loss: "Indisciplina detectada. Retome o rigor." },
    'investidor': { morning: "O tempo é seu ativo. Invista-o bem.", afternoon: "Análise de portfólio: Você tem débitos.", night_win: "Lucro máximo! Dia encerrado em alta.", night_loss: "Prejuízo total. Desperdiçou capital." },
    'investidora': { morning: "Multiplique seus resultados pelo foco.", afternoon: "Atenção aos dividendos: Conclua as tarefas.", night_win: "Patrimônio mental em crescimento.", night_loss: "Dia de perdas. O tempo não volta." },
    'zen': { morning: "Presença e calma. O agora é a tarefa.", afternoon: "Respire. Volte ao centro e termine.", night_win: "Mente límpida. O dia fluiu em harmonia.", night_loss: "O ruído venceu hoje. Busque silêncio." },
    'estrategista': { morning: "Cada movimento conta. Planeje e execute.", afternoon: "A melhor estratégia é quitar as pendências.", night_win: "Xeque-mate. Perfeição.", night_loss: "Falha tática. Foi ingênuo com seu tempo." },
    'atleta_ele': { morning: "Performance máxima. Supere limites.", afternoon: "O treino só acaba com a meta batida.", night_win: "Recorde pessoal. Imparável.", night_loss: "Desistiu antes da hora. Recupere amanhã." },
    'atleta_ela': { morning: "Foco, força e execução. Vá além.", afternoon: "Sem atalhos. Vitória exige suor.", night_win: "Performance de elite. Meta esmagada.", night_loss: "Falta de fôlego. Mantenha o ritmo." },
    'minimalista': { morning: "Menos distração, mais foco no essencial.", afternoon: "Elimine o que sobra, termine o que importa.", night_win: "Clareza absoluta. Leve e vitorioso.", night_loss: "Perdeu-se no excesso. Esqueceu o essencial." }
};

/**
 * SINCRONIZAÇÃO DE TAGS (Respeitando limite de 2 tags do Plano Gratuito)
 */
async function sendOneSignalTags(user) {
    if (!user || !user.nome) return;

    window.OneSignalDeferred = window.OneSignalDeferred || [];
    window.OneSignalDeferred.push(async function(OneSignal) {
        try {
            const cleanId = user.nome.toLowerCase().trim().replace(/\s/g, '_');
            
            if (OneSignal.User.externalId !== cleanId) {
                await OneSignal.login(cleanId);
            }

            const voice = mindsetVoices[user.setup] || mindsetVoices['patriarca'];
            const pendentes = (user.dailyTaskIds || []).length - (user.completedTodayIds || []).length;
            
            // Montagem da Marmita (overall) baseada no horário atual
            const hora = new Date().getHours();
            let marmita = "";

            if (hora < 12) {
                marmita = `${user.nome}, ${voice.morning}`;
            } else if (hora < 18) {
                marmita = `${voice.afternoon} Falta(m) ${pendentes} missão(ões).`;
            } else {
                marmita = (pendentes === 0) ? voice.night_win : `${voice.night_loss} (${pendentes} falhas)`;
            }

            // Enviando apenas as 2 Tags permitidas no plano Free
            await OneSignal.User.addTags({
                "overall": String(marmita),
                "pendentes": String(pendentes)
            });

            console.log(`✅ OneSignal: Marmita pronta para ${user.nome}.`);
        } catch (err) {
            console.warn("OneSignal: Erro de Tags ou Login.");
        }
    });
}

/**
 * HARD RESET: Força o navegador a reiniciar a conexão
 * Útil para usuários veteranos que não estão recebendo a tag 'overall'
 */
window.resetarNotificacoesTotal = async () => {
    window.OneSignalDeferred = window.OneSignalDeferred || [];
    window.OneSignalDeferred.push(async function(OneSignal) {
        console.log("⚠️ MindSet: Iniciando Hard Reset de Alertas...");

        try {
            // 1. Limpa subscrição antiga
            await OneSignal.User.PushSubscription.optOut();
            
            // 2. Solicita permissão novamente (se já tiver, ele apenas valida)
            await OneSignal.Notifications.requestPermission();
            
            const rawData = localStorage.getItem('mindset_data');
            if (rawData) {
                const user = JSON.parse(rawData);
                const cleanId = user.nome.toLowerCase().trim().replace(/\s/g, '_');
                
                // 3. Força Re-login
                await OneSignal.login(cleanId);
                
                // 4. Re-habilita e envia tags
                await OneSignal.User.PushSubscription.optIn();
                sendOneSignalTags(user);
                
                window.showModal("SISTEMA", "Protocolo de Alertas reiniciado com sucesso!");
            }
        } catch (e) {
            console.error("Erro no Hard Reset:", e);
        }
    });
};

/**
 * VERIFICAÇÃO LOCAL (Backup para app aberto)
 */
function checkNotificationSchedule() {
    const rawData = localStorage.getItem('mindset_data');
    if (!rawData) return;
    const localData = JSON.parse(rawData);
    const h = new Date().getHours();
    const m = new Date().getMinutes();
    if (m !== 0) return; 

    const voice = mindsetVoices[localData.setup] || mindsetVoices['patriarca'];
    let msg = (h === 9) ? voice.morning : (h === 14) ? voice.afternoon : (h === 22) ? ((localData.completedTodayIds.length >= 3) ? voice.night_win : voice.night_loss) : "";

    if (msg && Notification.permission === "granted") {
        new Notification("MINDSET", { body: msg, icon: 'assets/icone-ios.png' });
    }
}
setInterval(checkNotificationSchedule, 60000);
