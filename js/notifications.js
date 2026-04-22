/**
 * MINDSET - NOTIFICATIONS ENGINE v13.3
 * ARQUIVO INTEGRAL: Fix PWA Chrome (Forced Tag Sync) + Reset + Firebase
 */

const mindsetVoices = {
    'patriarca': { 
        morning: "Honre seu sangue. A direção de hoje é:", 
        afternoon: "Um líder mantém a visão clara enquanto executa o necessário.", 
        night_win: "Dever cumprido, $. A linhagem está segura sob sua guarda.", 
        night_loss: "Você falhou com sua autoridade hoje, $. A desordem enfraquece seu legado." 
    },
    'matriarca': { 
        morning: "O lar prospera sob sua ordem. Reflita:", 
        afternoon: "O equilíbrio da família exige sua attention constante aos detalhes.", 
        night_win: "Gestão impecável, $. Sua casa e sua linhagem estão em harmonia.", 
        night_loss: "A negligência de hoje cobrará seu preço amanhã, $." 
    },
    'cavalheiro': { 
        morning: "A honra precede a ação. Sua bússola hoje é:", 
        afternoon: "A etiqueta exige que suas obrigações sejam tratadas com prioridade.", 
        night_win: "Um dia de conduta exemplar, $. Você honrou sua palavra.", 
        night_loss: "Sua falta de disciplina manchou sua reputação hoje, $." 
    },
    'dama': { 
        morning: "Sua postura define o tom do dia. Veja:", 
        afternoon: "Governe suas ações com a classe de quem conhece o próprio valor.", 
        night_win: "Vitória e maestria, $. Você dominou o dia com elegância.", 
        night_loss: "A procrastinação ofuscou seu brilho hoje, $. Retome a postura." 
    },
    'ceo_ele': { 
        morning: "O mercado abriu. Sua estratégia hoje é:", 
        afternoon: "Performance é o único KPI que importa agora. Execute!", 
        night_win: "Alta performance confirmada, $. Lucro máximo.", 
        night_loss: "Resultados inaceitáveis, $. Você operou em prejuízo hoje." 
    },
    'ceo_ela': { 
        morning: "Liderança é ação. Seu comando hoje é:", 
        afternoon: "Estratégia sem execução é alucinação. Foque no que importa.", 
        night_win: "Visão estratégica concluída, $. Você liderou com sucesso.", 
        night_loss: "Déficit de produtividade, $. Sua gestão foi falha hoje." 
    },
    'militar_ele': { 
        morning: "ALVORADA! Assuma o seu posto. Sua doutrina hoje é:", 
        afternoon: "O inimigo é disciplinado e não descansa. Mantenha o padrão!", 
        night_win: "Missão cumprida, $. Padrão mantido. Descanso autorizado.", 
        night_loss: "Fracasso operacional por negligência, $. Durma com isso." 
    },
    'militar_ela': { 
        morning: "ALVORADA! Estabeleça as prioridades. A diretriz é:", 
        afternoon: "O terreno é hostil para os indisciplinados. Mantenha o foco.", 
        night_win: "Objetivos atingidos, $. Comando respeitado. Excelente.", 
        night_loss: "Indisciplina detectada, $. Você quebrou o padrão hoje." 
    },
    'investidor': { 
        morning: "Proteja seu tempo. O dividendo de hoje vem disto:", 
        afternoon: "Não desperdice capital intelectual com distrações baratas.", 
        night_win: "Patrimônio de conquistas em alta, $. Ótimo fechamento.", 
        night_loss: "Você queimou seu tempo em futilidades, $. Prejuízo total." 
    },
    'investidora': { 
        morning: "Multiplique sua força. O aporte de hoje é:", 
        afternoon: "O sucesso de amanhã depende da sua execução impecável agora.", 
        night_win: "Dividendos de disciplina recebidos, $. Parabéns.", 
        night_loss: "Saldo negativo de esforço, $. Seu dia foi um passivo." 
    },
    'zen': { 
        morning: "Encontre o centro. A verdade de hoje é:", 
        afternoon: "Respire, volte ao foco e flua com o que deve ser feito.", 
        night_win: "Mente límpida e harmonia alcançada, $. O dia foi luz.", 
        night_loss: "O caos externo venceu seu silêncio, $. Você se perdeu." 
    },
    'estrategista': { 
        morning: "Prepare o tabuleiro. O conceito estratégico de hoje é:", 
        afternoon: "Analise, adapte e execute, $. O plano não se cumpre sozinho.", 
        night_win: "Xeque-mate, $. O tabuleiro do dia foi dominado.", 
        night_loss: "Você foi dominado pelas circunstâncias hoje, $. Falha tática." 
    },
    'atleta_ele': { 
        morning: "Vença a si mesmo. O treino de hoje começa aqui:", 
        afternoon: "O cansaço é psicológico; a meta é real. Continue avançando.", 
        night_win: "Performance de elite, $. Recorde pessoal batido.", 
        night_loss: "Você desistiu antes da linha de chegada, $. Vergonhoso." 
    },
    'atleta_ela': { 
        morning: "Sem desculpas hoje. Sua força vem disto:", 
        afternoon: "Não negocie com sua mente; cumpra o cronograma.", 
        night_win: "Meta esmagada, $. Você provou sua força mais uma vez.", 
        night_loss: "Faltou fôlego e vontade, $. Você foi medíocre hoje." 
    },
    'minimalista': { 
        morning: "Subtraia o desnecessário. A essência hoje é:", 
        afternoon: "A clareza vem de fazer apenas o que realmente importa.", 
        night_win: "Clareza absoluta e dia leve, $. Essencial cumprido.", 
        night_loss: "Você se perdeu no excesso, $. Dia desperdiçado." 
    },
    'devoto': { 
        morning: "Consagre suas horas. O propósito hoje é:", 
        afternoon: "Mantenha a constância no dever, sem desviar o olhar.", 
        night_win: "Espírito fortalecido e dever cumprido, $. Siga firme.", 
        night_loss: "Você cedeu às tentações da preguiça, $. Sua base fraquejou." 
    },
    'devota': { 
        morning: "Consagre suas horas. O propósito hoje é:", 
        afternoon: "Mantenha a constância no dever, sem desviar o olhar.", 
        night_win: "Espírito fortalecido e dever cumprido, $. Siga firme.", 
        night_loss: "Você cedeu às tentações da preguiça, $. Sua base fraquejou." 
    }
};

/**
 * SINCRONIZAÇÃO COMPLETA (CORREÇÃO CHROME PWA)
 */
window.sincronizarMindsetOneSignal = async (user) => {
    if (!user || !user.uid) return;

    const voice = mindsetVoices[user.setup] || mindsetVoices['patriarca'];
    const pendentes = (user.dailyTaskIds || []).length - (user.completedTodayIds || []).length;
    const hora = new Date().getHours();
    
    let marmita = (hora >= 5 && hora < 12) ? `${user.nome}, ${voice.morning}` : 
                  (hora >= 12 && hora < 18) ? `${user.nome}, ${voice.afternoon}` : 
                  (pendentes === 0) ? voice.night_win.replace("$", user.nome) : voice.night_loss.replace("$", user.nome);

    window.OneSignalDeferred = window.OneSignalDeferred || [];
    window.OneSignalDeferred.push(async function(OneSignal) {
        try {
            // Força o login ANTES de mandar as tags para garantir o External ID no Chrome
            await OneSignal.login(user.uid);
            
            // Pequeno delay para garantir que a sessão foi assumida
            setTimeout(async () => {
                await OneSignal.User.addTags({
                    "overall": String(marmita),
                    "uid": String(user.uid),
                    "pendentes": String(pendentes),
                    "last_app_sync": new Date().toISOString()
                });
                console.log("✅ Tags OneSignal sincronizadas para: " + user.uid);
            }, 500);
        } catch (e) { console.error("Erro OneSignal Tags:", e); }
    });

    try {
        if (window.db) {
            const { doc, updateDoc } = await import("https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js");
            await updateDoc(doc(window.db, "users", user.uid), {
                setup: user.setup,
                nome: user.nome,
                pendentes: pendentes,
                marmitaAtual: marmita,
                lastSync: new Date().toISOString()
            });
            console.log("🔥 Firebase atualizado.");
        }
    } catch (e) { console.warn("Erro Firebase Sync:", e); }
};

/**
 * ATIVAR NOTIFICAÇÕES (HARD RESET INTEGRAL)
 */
window.ativarNotificacoesManual = async () => {
    if (window.showModal) {
        window.showModal("SISTEMA", "Resetando drivers de notificação... Por favor, autorize no navegador.");
    }

    (async () => {
        console.log("🧨 LIMPANDO INSTÂNCIAS ANTIGAS...");

        if ('serviceWorker' in navigator) {
            const registrations = await navigator.serviceWorker.getRegistrations();
            for (let reg of registrations) {
                if (reg.active && reg.active.scriptURL.includes('OneSignal')) {
                    await reg.unregister();
                }
            }
        }

        ['OneSignalSDK', 'OneSignalSDK_IDB', 'next-auth.pkce.state'].forEach(db => indexedDB.deleteDatabase(db));
        Object.keys(localStorage).forEach(key => {
            if (key.includes('os_ls_') || key.includes('OneSignal')) localStorage.removeItem(key);
        });

        window.OneSignalDeferred = window.OneSignalDeferred || [];
        window.OneSignalDeferred.push(async function(OneSignal) {
            try {
                // Reset de inscrição
                await OneSignal.User.PushSubscription.optOut();
                await OneSignal.User.PushSubscription.optIn();
                
                console.log("🚀 Disparando Popup...");
                await OneSignal.Notifications.requestPermission();
                
                const checkInterval = setInterval(async () => {
                    if (Notification.permission === "granted") {
                        clearInterval(checkInterval);
                        const raw = localStorage.getItem('mindset_data');
                        if (raw) {
                            const userData = JSON.parse(raw);
                            await window.sincronizarMindsetOneSignal(userData);
                        }
                        if (window.showModal) window.showModal("SUCESSO", "Conectado com sucesso!");
                    } else if (Notification.permission === "denied") {
                        clearInterval(checkInterval);
                    }
                }, 1000);

            } catch (e) { console.error("Erro OneSignal:", e); }
        });
    })();
};

window.resetarNotificacoesTotal = window.ativarNotificacoesManual;
