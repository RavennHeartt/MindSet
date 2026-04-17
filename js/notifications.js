/**
 * NOTIFICATIONS.JS - MOTOR DE PERSONALIDADE PARA APK (PRIORIDADE MÁXIMA)
 */
window.NotificationsManager = {
    
    getStyle() {
        const setup = userData.setup;
        const nome = userData.nome;
        
        const estilos = {
            patriarca: { quote: `Um legado exige honra, ${nome}. Reflita: `, pendente: `Não negligencie seus deveres. Sua palavra é sua lei.`, vitoria: `Honra mantida. Você liderou com o exemplo hoje.`, derrota: `Um homem sem disciplina falha com os seus.` },
            matriarca: { quote: `A força da base vem da constância, ${nome}: `, pendente: `Cuide do seu alicerce. Conclua suas missões pendentes.`, vitoria: `Equilíbrio e força demonstrados. Dia concluído.`, derrota: `Mesmo as mais fortes oscilam. Descanse.` },
            militar_ele: { quote: `RECRUTA ${nome.toUpperCase()}! Ordem do dia: `, pendente: `Soldado, o campo de batalha não tolera hesitação! Execute!`, vitoria: `Missão cumprida! Excelente desempenho no front.`, derrota: `Baixa detectada. Pague 50 flexões mentais.` },
            militar_ela: { quote: `GUERREIRA ${nome.toUpperCase()}! Atenção: `, pendente: `Não baixe a guarda. O inimigo está à espreita!`, vitoria: `Vitória tática! Você dominou o dia com disciplina.`, derrota: `Retirada estratégica? Não. Recomece.` },
            ceo_ele: { quote: `Sr. ${nome}, visão estratégica para hoje: `, pendente: `Gargalos operacionais detectados. Conclua as metas.`, vitoria: `Metas batidas. Seu valor de mercado subiu.`, derrota: `Dia de prejuízo. Analise as falhas.` },
            ceo_ela: { quote: `Dra. ${nome}, foco no roadmap: `, pendente: `Sua autoridade depende da sua entrega. Finalize.`, vitoria: `Performance de alto nível. Você está no topo.`, derrota: `KPIs abaixo do esperado. Reajuste.` },
            investidor: { quote: `${nome}, análise de dividendos temporais: `, pendente: `Seu ROI de tempo está caindo. Garanta o lucro.`, vitoria: `Capital de disciplina investido com sucesso.`, derrota: `Prejuízo total. Você desperdiçou seu ativo.` },
            investidora: { quote: `${nome}, o mercado não espera: `, pendente: `Suas ações diárias estão em queda. Recupere.`, vitoria: `Portfólio de hábitos estável. Ótimo fechamento.`, derrota: `Crash de produtividade detectado. Estude.` },
            devoto: { quote: `Irmão ${nome}, medite nestas palavras: `, pendente: `A preguiça é o desvio do caminho. Retorne.`, vitoria: `Fé e obras caminham juntas. Dever cumprido.`, derrota: `O espírito fraquejou. Peça perdão a si mesmo.` },
            devota: { quote: `Irmã ${nome}, luz para o seu caminho: `, pendente: `Mantenha sua lâmpada acesa. Termine as tarefas.`, vitoria: `Graça e disciplina. Jornada concluída.`, derrota: `A noite chegou e as obras ficaram incompletas.` },
            zen: { quote: `${nome}, a paz reside na ação consciente: `, pendente: `A procrastinação gera ruído mental. Silencie-a.`, vitoria: `Fluxo perfeito. Você e o dia são um só.`, derrota: `A mente se dispersou. Volte ao centro.` },
            cavalheiro: { quote: `Caro ${nome}, a elegância da disciplina: `, pendente: `Um homem de palavra não deixa compromissos.`, vitoria: `Postura impecável. Suas tarefas foram honradas.`, derrota: `A desorganização é deselegante. Recupere.` },
            dama: { quote: `${nome}, a virtude está na constância: `, pendente: `Sua melhor versão exige dedicação. Termine.`, vitoria: `Graciosidade e eficiência. Dia dominado.`, derrota: `Um deslize não define você. Reerga-se.` },
            atleta_ele: { quote: `${nome}, sem dor não há ganho: `, pendente: `O treino só acaba quando as metas morrem.`, vitoria: `Shape mental fortalecido. Venceu o round.`, derrota: `Overload de desculpas. Treine com mais peso.` },
            atleta_ela: { quote: `${nome}, foco na performance: `, pendente: `A disciplina é o músculo principal. Não falhe.`, vitoria: `Recorde pessoal batido. Imparável.`, derrota: `Day off não planejado? Volte ao jogo.` },
            estrategista: { quote: `${nome}, o plano de ataque é claro: `, pendente: `Inconsistência detectada. Corrija executando.`, vitoria: `Xeque-mate. Seguiu exatamente o plano.`, derrota: `Erro de cálculo. O inimigo venceu esta.` },
            minimalista: { quote: `${nome}, menos é mais. O essencial: `, pendente: `Livre-se do peso acumulado. Faça agora.`, vitoria: `Dia limpo. Apenas o que importa foi feito.`, derrota: `Excesso de distrações. Simplifique.` }
        };
        return estilos[setup] || estilos['patriarca'];
    },

    async requestPermission() {
        if (!('Notification' in window)) return false;
        const permission = await Notification.requestPermission();
        if (permission === 'granted') {
            this.scheduleDailyCycle();
            return true;
        }
        return false;
    },

    scheduleDailyCycle() {
        if (!navigator.serviceWorker || !navigator.serviceWorker.controller) return;
        const style = this.getStyle();
        navigator.serviceWorker.controller.postMessage({
            type: 'SET_DAILY_CONFIG',
            config: {
                startHour: 7,
                endHour: 22,
                nome: userData.nome,
                quote: userData.dailyQuote,
                style: style,
                tasksDone: userData.tasksDoneToday,
                streak: userData.streak,
                showDonate: (Math.random() < 0.15)
            }
        });
    },

    // ENVIO COM ATRASO DE 2 SEGUNDOS E ALTA PRIORIDADE
    sendNow(label, message) {
        if (Notification.permission === 'granted') {
            setTimeout(() => {
                navigator.serviceWorker.ready.then(reg => {
                    reg.showNotification("MindSet", {
                        body: `${label}: ${message}`,
                        icon: 'assets/icon.png',
                        badge: 'assets/icon.png',
                        vibrate: [500, 110, 500, 110, 450], // Vibração longa para chamar atenção
                        tag: 'mindset-high-priority',
                        renotify: true,
                        requireInteraction: true, // Mantém a notificação até o usuário interagir
                        priority: 'high', // Tentativa de forçar prioridade máxima
                        data: { priority: 'high' }
                    });
                });
            }, 2000); // 2 segundos de atraso
        }
    }
};
