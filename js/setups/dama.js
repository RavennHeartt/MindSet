const damaData = {
    setup: "dama",
    cor: "#f4c2c2",
    ranks: [
        "Desleixada",   // Nível 1: Falta de cuidado pessoal e etiqueta
        "Iniciante",    // Nível 2: Primeiros passos em postura e imagem
        "Polida",       // Nível 3: Domínio da civilidade e cortesia
        "Elegante",     // Nível 4: Apresentação e vestuário impecáveis
        "Distinta",     // Nível 5: Destaque pela educação e presença
        "Diplomata",    // Nível 6: Maestria em conversação e tato social
        "Nobre",        // Nível 7: Integridade e honra pessoal
        "Dama",         // Nível 8: O equilíbrio entre classe e caráter
        "Eminência",    // Nível 9: Referência de sofisticação e influência
        "Soberana",     // Nível 10: Nobreza de espírito e exemplo máximo
    ],
    quotes: [
        // --- ELEGÂNCIA E CONDUTA ---
        "A elegância é a única beleza que nunca desaparece.",
        "Uma dama sabe que a simplicidade é o último grau da sofisticação.",
        "A verdadeira classe não é ser notada, mas sim ser lembrada.",
        "Educação é o traje mais bonito que uma mulher pode vestir.",
        "Maneiras abrem portas que a beleza sozinha não consegue.",
        "O luxo deve ser confortável, caso contrário, não é luxo.",
        "Sua postura diz ao mundo como você deseja ser tratada.",
        "Uma dama nunca eleva a voz; ela eleva o nível da conversa.",
        "Estar bem vestida é uma forma de respeito por si mesma e pelos outros.",
        "A graça está nos detalhes e no cuidado com o próximo.",
        "Elegância é o equilíbrio entre autoconfiança e humildade.",
        "O perfume de uma dama deve ser sentido, nunca anunciado.",
        "A verdadeira nobreza é ser superior ao seu eu de ontem.",
        "Saber ouvir é o segredo de uma companhia inesquecível.",
        "A discrição é a melhor aliada da distinção.",

        // --- CARÁTER E VALORES ---
        "Honra não é algo que se ganha, é algo que se cultiva.",
        "Uma dama é firme nos seus princípios e suave nas suas palavras.",
        "A integridade é a joia mais rara que alguém pode possuir.",
        "Respeito próprio é a base de toda a etiqueta.",
        "Seja a luz que ilumina o ambiente, não o barulho que o perturba.",
        "O caráter é o que resta quando a estética é deixada de lado.",
        "Uma dama protege a reputação alheia como se fosse a sua.",
        "A bondade é a forma mais refinada de inteligência social.",
        "Nunca comprometa os seus valores por conveniência.",
        "A coragem de uma dama é silenciosa e persistente.",
        "A verdade dita com doçura nunca perde o seu valor.",
        "A paciência é o adorno final de uma mente educada.",
        "Sê fiel à tua palavra, pois ela é o teu contrato social.",
        "A gratidão transforma o comum em algo extraordinário.",
        "A nobreza de espírito não depende de títulos, mas de ações.",

        // --- PRESENÇA SOCIAL E INFLUÊNCIA ---
        "Saber entrar e sair de qualquer lugar com dignidade é uma arte.",
        "O carisma de uma dama nasce do interesse genuíno pelas pessoas.",
        "A hospitalidade é o dom de fazer os outros se sentirem especiais.",
        "Saber discordar com classe é o ápice da diplomacia.",
        "Uma dama nunca fofoca; ela discute ideias, não pessoas.",
        "A confiança silenciosa é muito mais poderosa que a arrogância barulhenta.",
        "Seja um ponto de paz em meio ao caos social.",
        "Um aperto de mão firme e um olhar gentil valem mais que mil palavras.",
        "A oratória elegante é a ferramenta de quem deseja influenciar.",
        "Lidere pela graça e pelo exemplo, não pela imposição.",
        "A pontualidade é o primeiro sinal de uma dama educada.",
        "Trate o subordinado com a mesma deferência que trata o superior.",
        "A generosidade de espírito atrai a verdadeira prosperidade.",
        "O riso de uma dama é alegre, mas nunca vulgar.",
        "Sua presença deve elevar o nível do ambiente onde você está.",

        // --- MAESTRIA E ESTILO DE VIDA ---
        "Cultive a sua mente tanto quanto cultiva a sua imagem.",
        "O conhecimento é o acessório que nunca sai de moda.",
        "Uma dama é mestre do seu tempo e das suas escolhas.",
        "A organização do seu espaço reflete a clareza da sua mente.",
        "Domine as regras da etiqueta para saber quando ser espontânea.",
        "O lazer de uma dama deve nutrir o intelecto e o espírito.",
        "A saúde é a base da vitalidade e da beleza duradoura.",
        "Não siga modismos; crie um estilo que honre a sua essência.",
        "A curiosidade intelectual mantém a alma jovem.",
        "Seja a anfitriã que todos desejam ter como amiga.",
        "A excelência é um hábito que começa nas pequenas tarefas.",
        "Cuide da sua voz; ela é o instrumento da sua alma.",
        "O segredo da influência é a consistência no bem agir.",
        "Uma dama nunca para de aprender e de se refinar.",
        "A vida é uma tela; pinte-a com as cores da classe e da virtude."
    ],
    habitos: {
        nivel1: [ // DESLEIXADA
            { id: "d1_1", task: "Cuidar da pele e higiene pessoal rigorosamente", xp: 40 },
            { id: "d1_2", task: "Arrumar o cabelo e as unhas", xp: 30 },
            { id: "d1_3", task: "Pedir licença e agradecer (10x hoje)", xp: 50 },
            { id: "d1_4", task: "Sentar-se com as pernas cruzadas ou juntas", xp: 40 },
            { id: "d1_5", task: "Beber água e manter a postura ereta", xp: 30 },
            { id: "d1_6", task: "Eliminar gírias grosseiras do vocabulário", xp: 60 }
        ],
        nivel2: [ // INICIANTE
            { id: "d2_1", task: "Preparar a roupa da manhã na noite anterior", xp: 50 },
            { id: "d2_2", task: "Cumprimentar as pessoas com um sorriso e olhar", xp: 60 },
            { id: "d2_3", task: "Ler 10 min sobre etiqueta ou boas maneiras", xp: 50 },
            { id: "d2_4", task: "Manter a bolsa e carteira organizadas", xp: 40 },
            { id: "d2_5", task: "Chegar 5 min antes a qualquer compromisso", xp: 70 },
            { id: "d2_6", task: "Não mexer no telemóvel à mesa", xp: 80 }
        ],
        nivel3: [ // POLIDA
            { id: "d3_1", task: "Elogiar sinceramente alguém hoje", xp: 50 },
            { id: "d3_2", task: "Manter o tom de voz calmo e melódico", xp: 60 },
            { id: "d3_3", task: "Escrever um agradecimento por algo recebido", xp: 80 },
            { id: "d3_4", task: "Caminhar com elegância e sem pressa", xp: 50 },
            { id: "d3_5", task: "Ouvir alguém sem interromper por 5 min", xp: 70 },
            { id: "d3_6", task: "Manter o seu espaço de trabalho impecável", xp: 40 }
        ],
        nivel4: [ // ELEGANTE
            { id: "d4_1", task: "Vestir-se de acordo com a ocasião (Dress code)", xp: 100 },
            { id: "d4_2", task: "Utilizar acessórios com harmonia e moderação", xp: 60 },
            { id: "d4_3", task: "Praticar exercícios de dicção/oratória", xp: 80 },
            { id: "d4_4", task: "Manter o calçado sempre limpo", xp: 40 },
            { id: "d4_5", task: "Não reclamar de trivialidades hoje", xp: 120 },
            { id: "d4_6", task: "Cuidar da linguagem corporal em público", xp: 70 }
        ],
        nivel5: [ // DISTINTA
            { id: "d5_1", task: "Ajudar alguém com discrição e gentileza", xp: 150 },
            { id: "d5_2", task: "Saber apresentar pessoas umas às outras", xp: 80 },
            { id: "d5_3", task: "Estudar sobre vinhos, flores ou artes", xp: 100 },
            { id: "d5_4", task: "Manter a compostura diante de um erro alheio", xp: 200 },
            { id: "d5_5", task: "Evitar falar da vida pessoal em excesso", xp: 120 },
            { id: "d5_6", task: "Manter o hálito e o perfume sempre frescos", xp: 50 }
        ],
        nivel6: [ // DIPLOMATA
            { id: "d6_1", task: "Mudar o rumo de uma conversa negativa", xp: 250 },
            { id: "d6_2", task: "Saber dizer 'não' com extrema doçura", xp: 200 },
            { id: "d6_3", task: "Mediar um pequeno conflito entre amigos", xp: 300 },
            { id: "d6_4", task: "Fazer uma crítica construtiva em privado", xp: 150 },
            { id: "d6_5", task: "Receber uma visita com hospitalidade", xp: 180 },
            { id: "d6_6", task: "Ignorar uma indelicadeza com classe", xp: 220 }
        ],
        nivel7: [ // NOBRE
            { id: "d7_1", task: "Defender a honra de alguém ausente", xp: 400 },
            { id: "d7_2", task: "Agir com ética sacrificando um interesse", xp: 500 },
            { id: "d7_3", task: "Manter uma promessa difícil de cumprir", xp: 450 },
            { id: "d7_4", task: "Praticar um ato de caridade anónimo", xp: 350 },
            { id: "d7_5", task: "Ser o exemplo de calma sob pressão", xp: 300 },
            { id: "d7_6", task: "Assumir a responsabilidade por uma falha", xp: 250 }
        ],
        nivel8: [ // DAMA
            { id: "d8_1", task: "Organizar um evento/reunião impecável", xp: 400 },
            { id: "d8_2", task: "Mentorizar uma mulher mais jovem em conduta", xp: 500 },
            { id: "d8_3", task: "Demonstrar paciência heroica com os outros", xp: 350 },
            { id: "d8_4", task: "Irradiar confiança e paz no ambiente", xp: 600 },
            { id: "d8_5", task: "Ser a referência de bom gosto e valores", xp: 450 },
            { id: "d8_6", task: "Retribuir um favor de forma elegante", xp: 300 }
        ],
        nivel9: [ // EMINÊNCIA
            { id: "d9_1", task: "Influenciar positivamente uma grande decisão", xp: 700 },
            { id: "d9_2", task: "Manter a elegância absoluta numa derrota", xp: 800 },
            { id: "d9_3", task: "Preservar a cultura e os valores do grupo", xp: 600 },
            { id: "d9_4", task: "Ser consultada como autoridade em etiqueta", xp: 500 },
            { id: "d9_5", task: "Promover a harmonia entre rivais", xp: 900 },
            { id: "d9_6", task: "Deixar um legado de inspiração por onde passa", xp: 1000 }
        ],
        nivel10: [ // SOBERANA
            { id: "d10_1", task: "Perdoar uma ofensa grave com nobreza", xp: 1500 },
            { id: "d10_2", task: "Viver integralmente os seus valores de honra", xp: 1200 },
            { id: "d10_3", task: "Ser a presença que eleva todos ao redor", xp: 1000 },
            { id: "d10_4", task: "Garantir o bem-estar dos seus protegidos", xp: 1100 },
            { id: "d10_5", task: "Transcender o ego em favor do bem comum", xp: 1300 },
            { id: "d10_6", task: "Ser o símbolo vivo da classe e da virtude", xp: 1500 }
        ]
    }
};
