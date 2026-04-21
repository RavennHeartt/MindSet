/**
 * MINDSET - NOTIFICATIONS ENGINE v11.1
 * Foco: Correção de ExternalID Empty + Vínculo de Identidade Seguro
 */

const mindsetVoices = {
    'patriarca': { morning: "a fundação da sua linhagem hoje depende da sua ordem.", afternoon: "um líder mantém a visão clara enquanto executa o necessário.", night_win: "Dever cumprido, $. A linhagem está segura sob sua guarda.", night_loss: "Você falhou com sua autoridade hoje, $. A desordem enfraquece seu legado." },
    'matriarca': { morning: "sua sabedoria é o que mantém o império de pé.", afternoon: "o equilíbrio exige atenção constante aos detalhes que importam.", night_win: "Gestão impecável, $. Sua casa e mente estão em harmonia.", night_loss: "A negligência de hoje cobrará seu preço amanhã, $." },
    'cavalheiro': { morning: "a honra do seu nome começa no primeiro compromisso do dia.", afternoon: "a etiqueta exige que suas obrigações sejam tratadas com prioridade.", night_win: "Um dia de conduta exemplar, $. Você honrou sua palavra.", night_loss: "Sua falta de disciplina manchou sua reputação hoje, $." },
    'dama': { morning: "sua elegância se manifesta através da sua autodisciplina.", afternoon: "mantenha a postura e a influência através da execução constante.", night_win: "Vitória e classe, $. Você dominou o dia com maestria.", night_loss: "A procrastinação ofuscou sua luz hoje, $. Retome o brilho." },
    'devoto': { morning: "consagre cada hora deste dia; a disciplina é sua oração.", afternoon: "mantenha a constância no bem e no dever, sem desviar o olhar.", night_win: "Espírito fortalecido e dever cumprido, $. Vá em paz.", night_loss: "Você cedeu às tentações da preguiça, $. Sua base fraquejou." },
    'devota': { morning: "sua força interior é refletida na ordem do seu dia.", afternoon: "persista no seu propósito com fé e dedicação total.", night_win: "Coração em paz e missões cumpridas, $. Você venceu.", night_loss: "A desordem afastou sua clareza hoje, $. Reze e recomece." },
    'ceo_ele': { morning: "o mercado não perdoa os lentos. Inicie a operação.", afternoon: "performance é o único KPI que importa agora. Execute.", night_win: "Alta performance confirmada, $. Lucro mental máximo.", night_loss: "Resultados inaceitáveis, $. Você operou em prejuízo hoje." },
    'ceo_ela': { morning: "liderança não é cargo, é action. Comande seu destino.", afternoon: "estratégia sem execução é alucinação. Foque no que importa.", night_win: "Visão estratégica concluída, $. Você liderou com sucesso.", night_loss: "Déficit de produtividade, $. Sua gestão foi falha hoje." },
    'militar_ele': { morning: "disciplina é liberdade. Assuma o seu posto.", afternoon: "mantenha o padrão e a cadência. O objetivo está à vista.", night_win: "Missão cumprida, $. Padrão mantido. Descanso autorizado.", night_loss: "Fracasso operacional por negligência, $. Durma com isso." },
    'militar_ela': { morning: "ordem e comando. Estabeleça as prioridades agora.", afternoon: "o terreno é hostil para os indisciplinados. Mantenha o foco.", night_win: "Objetivos atingidos, $. Comando respeitado. Excelente.", night_loss: "Indisciplina detectada, $. Você quebrou o padrão hoje." },
    'investidor': { morning: "seu tempo é o ativo mais escasso. Aloque-o com precisão.", afternoon: "não desperdice capital intelectual com distrações baratas.", night_win: "Patrimônio mental em alta, $. Ótimo fechamento de dia.", night_loss: "Você queimou seu tempo em futilidades, $. Prejuízo total." },
    'investidora': { morning: "multiplique seus resultados através de uma rotina blindada.", afternoon: "foco no longo prazo exige execução impecável no agora.", night_win: "Dividendos de disciplina recebidos, $. Parabéns.", night_loss: "Saldo negativo de esforço, $. Seu dia foi um passivo." },
    'zen': { morning: "a paz que você busca está na tarefa que você evita.", afternoon: "respire, volte ao centro e flua com o que deve ser feito.", night_win: "Mente límpida e harmonia alcançada, $. O dia foi luz.", night_loss: "O ruído externo venceu seu silêncio, $. Você se perdeu." },
    'estrategista': { morning: "cada movimento hoje é uma peça para o seu xeque-mate.", afternoon: "analise, adapte e execute. O plano não se cumpre sozinho.", night_win: "Xeque-mate, $. O tabuleiro do dia foi dominado.", night_loss: "Você foi joguete das circunstâncias hoje, $. Falha tática." },
    'atleta_ele': { morning: "a vitória de hoje é construída na primeira hora de suor.", afternoon: "o cansaço é psicológico; a meta é real. Continue avançando.", night_win: "Performance de elite, $. Recorde pessoal batido.", night_loss: "Você desistiu antes da linha de chegada, $. Vergonhoso." },
    'atleta_ela': { morning: "performance máxima exige disciplina inabalável.", afternoon: "não negocie com sua mente; cumpra o cronograma.", night_win: "Meta esmagada, $. Você provou sua força mais uma vez.", night_loss: "Faltou fôlego e vontade, $. Você foi medíocre hoje." },
    'minimalista': { morning: "ignore o ruído e foque apenas no que é essencial.", afternoon: "simplicidade é o último grau da sofisticação. Execute.", night_win: "Clareza absoluta e dia leve, $. Essencial cumprido.", night_loss: "Você se perdeu no excesso e no nada, $. Dia desperdiçado." }
};

/**
 * SINCRONIA REATIVA (Chamada pelo app.js)
 */
window.sincronizarMindsetOneSignal = (user) => {
    if (!user) return;
    
    // Fallback de ID caso o UID não exista no objeto
    const targetId = user.uid || (user.nome ? user.nome.toLowerCase().trim().replace(/\s/g, '_') : null);
    if (!targetId) return;

    window.OneSignalDeferred = window.OneSignalDeferred || [];
    window.OneSignalDeferred.push(async function(OneSignal) {
        try {
            await OneSignal.login(targetId);

            const voice = mindsetVoices[user.setup] || mindsetVoices['patriarca'];
            const total = (user.dailyTaskIds || []).length;
            const feitas = (user.completedTodayIds || []).length;
            const pendentes = total - feitas;
            const hora = new Date().getHours();
            
            let marmita = "";
            if (hora >= 5 && hora < 12) marmita = `${user.nome}, ${voice.morning}`;
            else if (hora >= 12 && hora < 18) marmita = `${user.nome}, ${voice.afternoon}`;
            else marmita = (pendentes === 0) ? voice.night_win.replace("$", user.nome) : voice.night_loss.replace("$", user.nome);

            await OneSignal.User.addTags({
                "overall": String(marmita),
                "pendentes": String(pendentes),
                "uid": String(targetId)
            });
            console.log("🔄 Sincronizado para ID:", targetId);
        } catch (e) {
            console.warn("Falha na sincronia:", e);
        }
    });
};

/**
 * RECOMPILAR ALERTAS (Botão do Menu)
 */
window.ativarNotificacoesManual = async () => {
    console.log("🚀 Solicitando permissão OneSignal...");
    
    const raw = localStorage.getItem('mindset_data');
    if (!raw) return;
    const user = JSON.parse(raw);

    // Validação de ID para evitar erro "externalId is empty"
    const targetId = user.uid || (user.nome ? user.nome.toLowerCase().trim().replace(/\s/g, '_') : null);

    if (!targetId) {
        console.error("❌ Erro: ID de vínculo não encontrado.");
        if (window.showModal) window.showModal("ERRO", "Perfil incompleto. Tente reiniciar o app.");
        return;
    }

    window.OneSignalDeferred = window.OneSignalDeferred || [];
    window.OneSignalDeferred.push(async function(OneSignal) {
        try {
            console.log("🔑 Vinculando ID:", targetId);
            await OneSignal.login(targetId);

            const permission = await OneSignal.Notifications.permission;
            
            if (permission === "denied") {
                if (window.showModal) window.showModal("BLOQUEADO", "Permissões negadas. Limpe as configurações do seu navegador.");
                return;
            }

            await OneSignal.Notifications.requestPermission();
            
            // Força sincronia após pedido de permissão
            window.sincronizarMindsetOneSignal(user);

            if (window.showModal) window.showModal("SISTEMA", "Verifique se o navegador solicitou permissão.");
        } catch (e) {
            console.error("Erro manual OneSignal:", e);
        }
    });
};

window.resetarNotificacoesTotal = window.ativarNotificacoesManual;
