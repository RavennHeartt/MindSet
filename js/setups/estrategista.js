const estrategistaData = {
    setup: "estrategista",
    cor: "#1c2e3d",
    ranks: [
        "Pueril",         // Nível 1
        "Previsível",     // Nível 2
        "Analista",       // Nível 3
        "Perspicaz",      // Nível 4
        "Enigma",         // Nível 5
        "Artífice",       // Nível 6
        "Influente",      // Nível 7
        "Implacável",     // Nível 8
        "Referência",     // Nível 9
        "Estrategista",   // Nível 10
    ],
    quotes: [
        "Vença seus oponentes antes mesmo de encontrá-los.",
        "A vitória não é sorte; é uma questão de matemática e psicologia.",
        "Nunca entre em uma luta de igual para igual; crie a vantagem primeiro.",
        "A maioria das pessoas reage; o estrategista antecipa.",
        "O silêncio é uma ferramenta de extração de dados.",
        "Não olhe para o que eles fazem; olhe para o que eles tentam esconder.",
        "O detalhe que todos ignoram é onde a resposta costuma estar.",
        "Em um mundo de ruído, a clareza é a maior vantagem competitiva.",
        "A primeira regra de qualquer jogo: saiba em qual jogo você está.",
        "Quem controla as informações, controla as opções.",
        "O caos é apenas um padrão que você ainda não compreendeu.",
        "Saber o que não fazer é tão importante quanto saber o que fazer.",
        "A paciência é a arma de quem sabe que o tempo trabalha a seu favor.",
        "Toda ação deve ter um propósito; o movimento inútil é um erro fatal.",
        "A inteligência é ver o que ninguém mais vê antes de todo mundo.",
        "Mantenha a mente fria quando o ambiente estiver em chamas.",
        "A melhor mentira é aquela que contém 90% de verdade.",
        "Não busque aprovação; busque o controle dos resultados.",
        "Quem se emociona primeiro, perde a mesa primeiro.",
        "A manipulação é para amadores; a influência é para mestres.",
        "Deixe que eles pensem que a ideia foi deles.",
        "Sua reputação deve preceder sua entrada, mas sua intenção deve ser secreta.",
        "O ego é o calcanhar de Aquiles de qualquer adversário.",
        "Nunca mostre todas as suas cartas, nem mesmo para seus aliados.",
        "A confiança é uma ferramenta; use-a para desarmar as defesas alheias.",
        "Seja o espelho que reflete o que os outros querem ver.",
        "O carisma é a arte de fazer os outros se sentirem importantes na sua presença.",
        "Um aperto de mão é um contrato de intenções subliminares.",
        "Mantenha seus amigos perto e suas opções mais perto ainda.",
        "A autoridade não é barulhenta; a insegurança é.",
        "Eu não tenho problemas, eu tenho soluções que ainda não apliquei.",
        "A única forma de ganhar é recusar-se a perder.",
        "A lealdade é um ativo caro; não a desperdice com quem não a merece.",
        "O sucesso é o resultado de uma preparação invisível.",
        "Estratégia sem execução é apenas uma alucinação.",
        "Não lute com porcos; você se suja e eles se divertem.",
        "A melhor defesa é um ataque que o oponente nem percebeu que começou.",
        "Seja implacável com os fatos e elegante com as pessoas.",
        "Onde todos veem um beco sem saída, o estrategista vê uma nova rota.",
        "Ganhe o dia antes de sair da cama através do planejamento mental.",
        "O risco é apenas a medida da sua falta de informação.",
        "Nunca deixe que saibam o que você está pensando até que seja tarde demais.",
        "O poder não é dado; é tomado através de mérito e estratégia.",
        "A excelência é o hábito de quem não aceita o mediano.",
        "O estrategista não espera a oportunidade; ele a fabrica.",
        "A vida é um tabuleiro; aprenda a mover as peças ou será movido por elas.",
        "A verdade é subjetiva; o resultado é absoluto.",
        "Domine o seu interior e o exterior se curvará à sua vontade.",
        "A simplicidade é o último grau da sofisticação estratégica.",
        "Seja um eterno aprendiz dos comportamentos humanos.",
        "A solidão do topo é o preço da visão panorâmica.",
        "Cada erro é uma lição tática paga com o tempo.",
        "Não tema a derrota; tema a falta de aprendizado nela.",
        "A ética é o limite que protege a sua inteligência de tornar-se vil.",
        "A coragem é a execução da estratégia sob fogo cruzado.",
        "Onde houver um impasse, há uma terceira via oculta.",
        "Mantenha a verticalidade mental em qualquer circunstância.",
        "A disciplina é o que separa os visionários dos sonhadores.",
        "O tempo é o seu maior aliado ou o seu pior inimigo; decida agora.",
        "O estrategista final é aquele que vence sem precisar lutar."
    ],
    habitos: {
        nivel1: [ // PUERIL
            { id: "es1_1", task: "Identificar uma situação onde você foi ingênuo(a)", xp: 50 },
            { id: "es1_2", task: "Duvidar de uma informação antes de aceitá-la", xp: 40 },
            { id: "es1_3", task: "Não contar um segredo ou plano para ninguém", xp: 60 },
            { id: "es1_4", task: "Observar uma conversa sem expressar opinião", xp: 40 },
            { id: "es1_5", task: "Anotar uma lição aprendida com um erro bobo", xp: 50 },
            { id: "es1_6", task: "Identificar quando alguém tenta te agradar", xp: 40 }
        ],
        nivel2: [ // PREVISÍVEL
            { id: "es2_1", task: "Anotar 3 previsões simples para o dia", xp: 50 },
            { id: "es2_2", task: "Observar a linguagem corporal de alguém por 5 min", xp: 40 },
            { id: "es2_3", task: "Evitar reações impulsivas por 12h", xp: 60 },
            { id: "es2_4", task: "Arrumar o ambiente para evitar distrações", xp: 30 },
            { id: "es2_5", task: "Ouvir 80% e falar 20% em uma conversa", xp: 50 },
            { id: "es2_6", task: "Identificar um gatilho emocional próprio", xp: 40 }
        ],
        nivel3: [ // ANALISTA
            { id: "es3_1", task: "Analisar as métricas do seu progresso semanal", xp: 80 },
            { id: "es3_2", task: "Dizer 'não' a um pedido que não gera valor", xp: 100 },
            { id: "es3_3", task: "Prever o resultado de um conflito antes dele acabar", xp: 70 },
            { id: "es3_4", task: "Organizar informações complexas em tópicos simples", xp: 60 },
            { id: "es3_5", task: "Identificar a falha lógica em um argumento alheio", xp: 90 },
            { id: "es3_6", task: "Manter a neutralidade em uma discussão de grupo", xp: 50 }
        ],
        nivel4: [ // PERSPICAZ
            { id: "es4_1", task: "Antecipar e resolver um problema antes que ocorra", xp: 150 },
            { id: "es4_2", task: "Descobrir uma informação útil através de perguntas", xp: 120 },
            { id: "es4_3", task: "Planejar 3 passos à frente de uma meta difícil", xp: 130 },
            { id: "es4_4", task: "Detectar uma mentira ou omissão em uma conversa", xp: 200 },
            { id: "es4_5", task: "Manter o controle absoluto da própria expressão", xp: 100 },
            { id: "es4_6", task: "Utilizar o silêncio para forçar o outro a falar", xp: 150 }
        ],
        nivel5: [ // ENIGMA
            { id: "es5_1", task: "Mudar sua imagem/postura para influenciar alguém", xp: 180 },
            { id: "es5_2", task: "Não revelar seus planos para ninguém hoje", xp: 250 },
            { id: "es5_3", task: "Agir com calma absoluta sob uma provocação", xp: 200 },
            { id: "es5_4", task: "Utilizar uma 'âncora' mental para focar", xp: 100 },
            { id: "es5_5", task: "Observar e espelhar sutilmente o interlocutor", xp: 120 },
            { id: "es5_6", task: "Manter sua rotina intacta apesar de imprevistos", xp: 150 }
        ],
        nivel6: [ // ARTÍFICE
            { id: "es6_1", task: "Posicionar uma ideia de forma que outros a adotem", xp: 300 },
            { id: "es6_2", task: "Mover o foco de uma conversa para o seu interesse", xp: 350 },
            { id: "es6_3", task: "Delegar uma tarefa e garantir o resultado planejado", xp: 200 },
            { id: "es6_4", task: "Moldar um ambiente para que ele favoreça sua meta", xp: 400 },
            { id: "es6_5", task: "Convencer alguém através da lógica e benefício mútuo", xp: 250 },
            { id: "es6_6", task: "Utilizar o carisma para mover uma peça difícil", xp: 200 }
        ],
        nivel7: [ // INFLUENTE
            { id: "es7_1", task: "Moldar a opinião de um grupo sem ser notado", xp: 500 },
            { id: "es7_2", task: "Estabelecer uma parceria estratégica de alto nível", xp: 450 },
            { id: "es7_3", task: "Ser a voz de razão em uma crise coletiva", xp: 400 },
            { id: "es7_4", task: "Networking: Conectar-se com uma nova autoridade", xp: 350 },
            { id: "es7_5", task: "Ditar o ritmo de uma negociação ou conversa", xp: 600 },
            { id: "es7_6", task: "Manter sua reputação impecável em uma polêmica", xp: 300 }
        ],
        nivel8: [ // IMPLACÁVEL
            { id: "es8_1", task: "Executar um plano de longo prazo sem desvios", xp: 700 },
            { id: "es8_2", task: "Eliminar uma fraqueza crítica da sua estratégia", xp: 600 },
            { id: "es8_3", task: "Tomar uma decisão de alto risco com mente fria", xp: 800 },
            { id: "es8_4", task: "Sacrificar um ganho imediato por um maior no futuro", xp: 500 },
            { id: "es8_5", task: "Dominar completamente um novo campo de estudo", xp: 400 },
            { id: "es8_6", task: "Não aceitar nada menos que a vitória planejada", xp: 900 }
        ],
        nivel9: [ // REFERÊNCIA
            { id: "es9_1", task: "Ensinar estratégia complexa para alguém promissor", xp: 600 },
            { id: "es9_2", task: "Ser a referência final para solução de problemas", xp: 800 },
            { id: "es9_3", task: "Prever e evitar uma crisis em larga escala", xp: 1000 },
            { id: "es9_4", task: "Garantir a ordem em um sistema instável", xp: 700 },
            { id: "es9_5", task: "Agir com soberania e precisão cirúrgica", xp: 900 },
            { id: "es9_6", task: "Manter a invisibilidade dos seus métodos reais", xp: 500 }
        ],
        nivel10: [ // ESTRATEGISTA
            { id: "es10_1", task: "Alcançar a 'Grande Meta' definida no início", xp: 2000 },
            { id: "es10_2", task: "Dominar completamente o seu tabuleiro de vida", xp: 1200 },
            { id: "es10_3", task: "Criar um legado de resultados inatacáveis", xp: 1500 },
            { id: "es10_4", task: "Vencer sem a necessidade de conflito direto", xp: 1800 },
            { id: "es10_5", task: "Manter o controle total sobre o próprio destino", xp: 1300 },
            { id: "es10_6", task: "Inspirar ordem e visão em todos ao redor", xp: 1500 }
        ]
    }
};
