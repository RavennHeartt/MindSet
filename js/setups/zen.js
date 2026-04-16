const zenData = {
    setup: "zen",
    cor: "#1a4a44", // Branco puro (clareza e vacuidade)
    ranks: [
        "Caos",           // Nível 01: Ruído mental total e reatividade.
        "Agitação",       // Nível 02: Inquietude e busca incessante.
        "Observação",     // Nível 03: O início da percepção dos próprios pensamentos.
        "Quietude",       // Nível 04: A calmaria que surge ao pausar o movimento.
        "Resiliência",    // Nível 05: Estabilidade emocional diante do externo.
        "Equilíbrio",     // Nível 06: Harmonia entre o ser e o agir.
        "Presença",       // Nível 07: Estar inteiramente no aqui e agora.
        "Serenidade",     // Nível 08: Paz profunda que não depende de circunstâncias.
        "Transcendência", // Nível 09: Conexão com o todo e desapego do ego.
        "Zen",            // Nível 10: O estado de iluminação e vacuidade plena.
    ],
    quotes: [
        "A paz vem de dentro. Não a procure à sua volta.",
        "Onde quer que você esteja, esteja por inteiro.",
        "O silêncio é uma fonte de grande poder.",
        "Não deixe o comportamento dos outros destruir a sua paz interior.",
        "A mente é como a água: quando está agitada, é difícil ver. Quando calma, tudo fica claro.",
        "Sente-se. Apenas sente-se e observe.",
        "O segredo da saúde mental e física é não lamentar o passado nem se preocupar com o futuro.",
        "Um momento de paciência em um momento de raiva evita cem dias de sofrimento.",
        "A flor não sonha com a abelha. Ela floresce e a abelha vem.",
        "O caminho não está no céu. O caminho está no coração.",
        "Seja como o bambu: firme, mas flexível.",
        "A resistência ao momento presente é a causa de todo sofrimento.",
        "Não procure a verdade, apenas deixe de lado suas opiniões.",
        "Para entender tudo, é preciso esquecer tudo.",
        "Apenas quando você não deseja nada, você é verdadeiramente livre.",
        "A respiração é a ponte que conecta a vida à consciência.",
        "Nada é permanente, exceto a mudança.",
        "Sua consciência é o céu; os pensamentos são apenas nuvens passando.",
        "Se você está com pressa, sente-se.",
        "O destino é a própria jornada.",
        "Cada passo é uma chegada.",
        "O agora é o único tempo que existe.",
        "Não tente controlar o rio, apenas aprenda a nadar.",
        "A verdadeira iluminação é o fim do sofrimento.",
        "Simplifique o seu interior e o exterior se organizará.",
        "O silêncio não é vazio, é cheio de respostas.",
        "Sua mente é sua maior ferramenta ou sua maior prisão.",
        "Solte a necessidade de ter razão.",
        "A compaixão começa com você mesmo.",
        "Sorria para o seu medo e ele perderá o poder.",
        "O mestre não faz nada, e nada fica sem ser feito.",
        "A clareza nasce da pausa.",
        "Não lute contra a escuridão, apenas acenda a luz.",
        "Aceitar é o primeiro passo para transformar.",
        "O que você resiste, persiste.",
        "Mantenha a mente de principiante.",
        "A gota de água não se perde no oceano; ela se torna o oceano.",
        "A montanha não se move porque o vento sopra.",
        "O barulho do mundo só te afeta se você tiver barulho por dentro.",
        "Seja a calma no centro do furacão.",
        "Viver zen é viver sem porquês.",
        "A sabedoria é saber quando agir e quando não fazer nada.",
        "A beleza está na imperfeição.",
        "O apego é o oposto do amor.",
        "Deixe ir o que já foi. Deixe vir o que será.",
        "Respire. Você está vivo.",
        "O ego diz: 'Quando tudo estiver no lugar, eu encontrarei paz'. A alma diz: 'Encontre paz e tudo ficará no lugar'.",
        "Não fale a menos que suas palavras sejam melhores que o silêncio.",
        "A paciência é a forma mais elevada de coragem.",
        "A raiz do sofrimento é o desejo de que as coisas sejam diferentes do que são.",
        "Apenas observe sem julgar.",
        "A paz é o seu estado natural.",
        "O universo não tem pressa, no entanto, tudo é realizado.",
        "Toda resposta que você busca está no silêncio entre dois pensamentos.",
        "Seja um canal, não um obstáculo.",
        "A vida é o que acontece enquanto você respira.",
        "A iluminação é descobrir que não há nada a ser alcançado.",
        "Desperte para o milagre do ordinário.",
        "O Zen é o retorno à sua própria natureza.",
        "O fim da busca é o começo da vida."
    ],
    habitos: {
        nivel1: [ // CAOS
            { id: "ze1_1", task: "Respirar fundo 3 vezes em um momento de tensão", xp: 40 },
            { id: "ze1_2", task: "Beber um copo de água com total atenção", xp: 30 },
            { id: "ze1_3", task: "Anotar 3 coisas que estão gerando estresse", xp: 50 },
            { id: "ze1_4", task: "Ficar 5 minutos sem nenhum estímulo sonoro", xp: 60 },
            { id: "ze1_5", task: "Alongar o pescoço e ombros por 2 minutos", xp: 30 },
            { id: "ze1_6", task: "Organizar um pequeno canto do seu espaço visual", xp: 40 }
        ],
        nivel2: [ // AGITAÇÃO
            { id: "ze2_1", task: "Fazer uma refeição sem celular ou televisão", xp: 80 },
            { id: "ze2_2", task: "Observar a própria respiração por 3 minutos", xp: 60 },
            { id: "ze2_3", task: "Caminhar devagar, sentindo o contato dos pés com o chão", xp: 70 },
            { id: "ze2_4", task: "Não reclamar de nada durante 4 horas", xp: 100 },
            { id: "ze2_5", task: "Ouvir alguém sem interromper ou pensar na resposta", xp: 90 },
            { id: "ze2_6", task: "Limpar as abas abertas na mente e no navegador", xp: 50 }
        ],
        nivel3: [ // OBSERVAÇÃO
            { id: "ze3_1", task: "Identificar um pensamento recorrente sem julgá-lo", xp: 100 },
            { id: "ze3_2", task: "Meditar por 5 minutos (apenas observar)", xp: 120 },
            { id: "ze3_3", task: "Perceber uma emoção surgindo e não reagir a ela", xp: 150 },
            { id: "ze3_4", task: "Descrever o ambiente ao seu redor com objetividade", xp: 60 },
            { id: "ze3_5", task: "Praticar o desapego de uma pequena opinião", xp: 80 },
            { id: "ze3_6", task: "Escrever o que sentiu durante o dia em um diário", xp: 70 }
        ],
        nivel4: [ // QUIETUDE
            { id: "ze4_1", task: "Passar 10 minutos em silêncio absoluto", xp: 150 },
            { id: "ze4_2", task: "Realizar uma tarefa manual com foco total e calma", xp: 100 },
            { id: "ze4_3", task: "Não checar notificações na primeira hora do dia", xp: 130 },
            { id: "ze4_4", task: "Deixar o celular no 'Não Perturbe' por 2 horas", xp: 120 },
            { id: "ze4_5", task: "Ler um texto filosófico/espiritual com calma", xp: 80 },
            { id: "ze4_6", task: "Apreciar a natureza por 5 minutos (mesmo que um vaso)", xp: 90 }
        ],
        nivel5: [ // RESILIÊNCIA
            { id: "ze5_1", task: "Manter a calma diante de um imprevisto", xp: 250 },
            { id: "ze5_2", task: "Transformar uma crítica em um objeto de estudo", xp: 200 },
            { id: "ze5_3", task: "Aceitar uma situação que você não pode mudar", xp: 300 },
            { id: "ze5_4", task: "Praticar a escuta empática com alguém difícil", xp: 180 },
            { id: "ze5_5", task: "Finalizar o dia sem carregar mágoas", xp: 220 },
            { id: "ze5_6", task: "Meditar em um local barulhento sem se irritar", xp: 280 }
        ],
        nivel6: [ // EQUILÍBRIO
            { id: "ze6_1", task: "Equilibrar o tempo de trabalho e repouso", xp: 200 },
            { id: "ze6_2", task: "Fazer 15 minutos de Yoga ou alongamento consciente", xp: 150 },
            { id: "ze6_3", task: "Comer apenas o necessário, com consciência", xp: 180 },
            { id: "ze6_4", task: "Manter a postura ereta e a respiração fluida", xp: 120 },
            { id: "ze6_5", task: "Não se deixar levar por picos de euforia ou tristeza", xp: 250 },
            { id: "ze6_6", task: "Simplificar uma escolha difícil usando a intuição", xp: 200 }
        ],
        nivel7: [ // PRESENÇA
            { id: "ze7_1", task: "Passar uma hora inteira em estado de fluxo (Flow)", xp: 400 },
            { id: "ze7_2", task: "Sentir cada detalhe de uma atividade banal (ex: banho)", xp: 300 },
            { id: "ze7_3", task: "Olhar nos olhos das pessoas enquanto fala", xp: 200 },
            { id: "ze7_4", task: "Não planejar o futuro pelos próximos 30 minutos", xp: 350 },
            { id: "ze7_5", task: "Perceber a vida pulsando em seu próprio corpo", xp: 300 },
            { id: "ze7_6", task: "Eliminar a pressa de chegar ao próximo destino", xp: 350 }
        ],
        nivel8: [ // SERENIDADE
            { id: "ze8_1", task: "Meditar por 30 minutos em silêncio", xp: 600 },
            { id: "ze8_2", task: "Irradiar calma para as pessoas ao seu redor", xp: 500 },
            { id: "ze8_3", task: "Sorrir internamente para os seus problemas", xp: 550 },
            { id: "ze8_4", task: "Agir com doçura e firmeza simultaneamente", xp: 450 },
            { id: "ze8_5", task: "Sentir gratidão incondicional pela existência", xp: 700 },
            { id: "ze8_6", task: "Viver um dia inteiro sem julgamentos mentais", xp: 800 }
        ],
        nivel9: [ // TRANSCENDÊNCIA
            { id: "ze9_1", task: "Reconhecer-se em tudo o que vê", xp: 1000 },
            { id: "ze9_2", task: "Praticar um ato de bondade anônimo e desinteressado", xp: 900 },
            { id: "ze9_3", task: "Soltar a identificação com o próprio nome e história", xp: 1200 },
            { id: "ze9_4", task: "Sentir a paz que excede todo o entendimento", xp: 1500 },
            { id: "ze9_5", task: "Permanecer imóvel e pleno no vazio", xp: 1300 },
            { id: "ze9_6", task: "Inspirar outros apenas com a sua presença", xp: 1100 }
        ],
        nivel10: [ // ZEN
            { id: "ze10_1", task: "Manter a mente vazia e o coração aberto por 24h", xp: 5000 },
            { id: "ze10_2", task: "Ser o silêncio no meio do barulho", xp: 3000 },
            { id: "ze10_3", task: "Viver a não-dualidade em cada ação", xp: 2500 },
            { id: "ze10_4", task: "Agir sem esforço (Wu Wei)", xp: 4000 },
            { id: "ze10_5", task: "Tornar-se o exemplo vivo da iluminação cotidiana", xp: 2000 },
            { id: "ze10_6", task: "Simplesmente Ser", xp: 3000 }
        ]
    }
};
