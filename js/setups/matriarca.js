const matriarcaData = {
    setup: "matriarca",
    cor: "#e35336",
    ranks: [
        "Moça", "Aprendiz", "Zeladora", "Gestora", "Guardiã",
        "Anfitriã", "Conselheira", "Mentora", "Legatária", "Matriarca"
    ],
        quotes: [
        // --- SABEDORIA E EQUILÍBRIO ---
        "A sabedoria da mulher edifica o lar; a imaturidade o destrói.",
        "Uma matriarca não grita para ser ouvida; sua presença impõe o silêncio necessário.",
        "Onde há uma mulher sábia, a desordem não encontra lugar para crescer.",
        "O coração da matriarca é o centro de gravidade da família.",
        "Ser forte não é ser dura; é ser o pilar que sustenta sem quebrar.",
        "A calma é a forma mais alta de autoridade feminina.",
        "As palavras de uma matriarca devem ser mel para a alma e limites para o caos.",
        "Domine suas emoções para que elas não governem sua casa.",
        "A intuição é a bússola; a prudência é o mapa.",
        "O silêncio sábio vale mais do que mil argumentos baseados no ego.",
        "A verdadeira elegância nasce da paz interior.",
        "Uma mente clara resolve problemas; um coração agitado os cria.",
        "Sua casa é o reflexo do seu estado de espírito.",
        "A paciência é a ferramenta que molda o caráter dos que você ama.",
        "A maturidade começa quando você decide ser a solução, não parte do conflito.",

        // --- HARMONIA E NUTRIÇÃO ---
        "Nutrir não é apenas alimentar o corpo, é fortalecer a alma.",
        "A mesa é o altar onde a união da família é celebrada.",
        "Uma matriarca transforma uma casa em um lar e uma refeição em um rito.",
        "Sua doçura é sua força, não sua fraqueza.",
        "O acolhimento é o poder de fazer qualquer um se sentir em casa na sua presença.",
        "Beleza sem virtude é como uma flor sem perfume.",
        "Cuidar dos detalhes é uma forma silenciosa de dizer 'eu te amo'.",
        "A harmonia do lar é a música que a matriarca rege.",
        "Não permita que a fofoca ou a discórdia cruzem o seu umbral.",
        "O lar deve ser o porto seguro para onde todos desejam voltar.",
        "Pequenos gestos de cuidado constroem grandes muralhas de lealdade.",
        "O riso de uma família é o melhor indicador da saúde da matriarca.",
        "Seja o exemplo de conduta que você deseja ver em seus filhos.",
        "A generosidade de espírito é o maior luxo de uma mulher de classe.",
        "Saber servir é a arte de liderar através do amor.",

        // --- LEGADO E TRADIÇÃO ---
        "Você é o elo entre o que seus antepassados foram e o que seus filhos serão.",
        "O legado de uma matriarca é escrito no caráter de sua descendência.",
        "Preserve as tradições; elas são as raízes que impedem a família de voar com o vento.",
        "Uma matriarca investe em valores que o tempo não pode corroer.",
        "Sua história é a fundação sobre a qual os novos membros construirão suas vidas.",
        "Honre as gerações passadas vivendo com dignidade no presente.",
        "O nome da família deve ser protegido como um tesouro sagrado.",
        "Educar um homem é educar um indivíduo; educar uma mulher é educar uma linhagem.",
        "O tempo passa, mas os valores ensinados no colo de uma mãe permanecem.",
        "Sê a guardiã das memórias e a arquiteta do futuro familiar.",
        "Um clã forte nasce de uma mulher que sabe o valor da sua linhagem.",
        "Sua influência é silenciosa, mas seu impacto é eterno.",
        "O exemplo arrasta gerações; as palavras apenas informam.",
        "Construa uma história da qual seus netos se orgulhem de contar.",
        "A maior herança não é material, é a sabedoria transmitida.",

        // --- DISCIPLINA E PODER ---
        "A disciplina pessoal é a base da liberdade da matriarca.",
        "Uma mulher que governa a si mesma é capaz de gerir um império.",
        "O vigor físico sustenta o vigor mental; cuide do seu templo.",
        "Onde há ordem, há espaço para a alegria florescer.",
        "Não confunda ser amável com ser permissiva; o respeito exige limites.",
        "A constância é o segredo de todos os lares vitoriosos.",
        "A autoridade da matriarca nasce da sua integridade impecável.",
        "Saiba quando recuar e quando avançar com a firmeza de uma leoa.",
        "A rotina organizada é o escudo contra a ansiedade do dia a dia.",
        "Nunca perca sua dignidade em busca de aprovação alheia.",
        "O autocontrole é a joia mais cara que uma mulher pode usar.",
        "Seja firme nos princípios e suave nas palavras.",
        "A verdade dita com amor é a única que transforma o ambiente.",
        "Ocupar-se da própria evolução é o melhor serviço que você presta aos outros.",
        "Uma matriarca é a rocha final; nela, a tempestade encontra o fim."
    ]
, // Reservado para a próxima interação
    habitos: {
        nivel1: [ // MOÇA
            { id: "m1_1", task: "Arrumar o próprio quarto perfeitamente", xp: 40 },
            { id: "m1_2", task: "Cuidar da higiene e estética pessoal", xp: 30 },
            { id: "m1_3", task: "Evitar reclamações sobre tarefas hoje", xp: 50 },
            { id: "m1_4", task: "Organizar suas roupas e pertences", xp: 40 },
            { id: "m1_5", task: "Beber 2L de água para clareza mental", xp: 20 },
            { id: "m1_6", task: "Dormir e acordar em horários fixos", xp: 50 }
        ],
        nivel2: [ // APRENDIZ
            { id: "m2_1", task: "Elogiar sinceramente um familiar", xp: 50 },
            { id: "m2_2", task: "Ler 15 min sobre desenvolvimento ou família", xp: 40 },
            { id: "m2_3", task: "Identificar e controlar um impulso emocional", xp: 70 },
            { id: "m2_4", task: "Anotar as metas domésticas da semana", xp: 50 },
            { id: "m2_5", task: "Escutar alguém sem dar opiniões rápidas", xp: 60 },
            { id: "m2_6", task: "Manter a mesa de refeições organizada", xp: 30 }
        ],
        nivel3: [ // ZELADORA
            { id: "m3_1", task: "Trazer um elemento de beleza para a casa", xp: 60 },
            { id: "m3_2", task: "Preparar uma refeição com atenção plena", xp: 80 },
            { id: "m3_3", task: "Cuidar de uma planta ou pet com dedicação", xp: 40 },
            { id: "m3_4", task: "Limpar um espaço comum sem que peçam", xp: 70 },
            { id: "m3_5", task: "Não permitir fofocas no seu ambiente", xp: 100 },
            { id: "m3_6", task: "Organizar a despensa e itens básicos", xp: 50 }
        ],
        nivel4: [ // GESTORA
            { id: "m4_1", task: "Registrar e otimizar os gastos do lar", xp: 120 },
            { id: "m4_2", task: "Planejar o cardápio saudável da família", xp: 100 },
            { id: "m4_3", task: "Resolver uma pendência burocrática da casa", xp: 80 },
            { id: "m4_4", task: "Garantir que todos tenham o que precisam", xp: 150 },
            { id: "m4_5", task: "Organizar documentos e histórico familiar", xp: 90 },
            { id: "m4_6", task: "Delegar uma tarefa e supervisionar com calma", xp: 110 }
        ],
        nivel5: [ // GUARDIÃ
            { id: "m5_1", task: "Mediar um conflito com doçura e firmeza", xp: 200 },
            { id: "m5_2", task: "Proteger o tempo de descanso da família", xp: 150 },
            { id: "m5_3", task: "Impor um limite saudável em uma relação", xp: 180 },
            { id: "m5_4", task: "Manter o ambiente em paz durante crises", xp: 250 },
            { id: "m5_5", task: "Cultivar um momento de espiritualidade", xp: 120 },
            { id: "m5_6", task: "Zelar pela reputação da sua casa", xp: 200 }
        ],
        nivel6: [ // ANFITRIÃ
            { id: "m6_1", task: "Promover um jantar ou encontro especial", xp: 300 },
            { id: "m6_2", task: "Receber alguém com hospitalidade máxima", xp: 200 },
            { id: "m6_3", task: "Praticar a arte da conversação elegante", xp: 150 },
            { id: "m6_4", task: "Conectar duas pessoas que podem se ajudar", xp: 180 },
            { id: "m6_5", task: "Servir aos outros com alegria genuína", xp: 150 },
            { id: "m6_6", task: "Tornar o ambiente acolhedor através do aroma/luz", xp: 100 }
        ],
        nivel7: [ // CONSELHEIRA
            { id: "m7_1", task: "Dar um conselho prudente a quem precisa", xp: 350 },
            { id: "m7_2", task: "Analisar uma situação sob vários ângulos", xp: 300 },
            { id: "m7_3", task: "Manter o silêncio sábio em uma discussão", xp: 400 },
            { id: "m7_4", task: "Ser o ponto de equilíbrio em um impasse", xp: 500 },
            { id: "m7_5", task: "Estudar sobre psicologia ou temperamentos", xp: 200 },
            { id: "m7_6", task: "Discernir a verdade por trás das palavras", xp: 450 }
        ],
        nivel8: [ // MENTORA
            { id: "m8_1", task: "Ensinar uma virtude a um mais novo", xp: 400 },
            { id: "m8_2", task: "Corrigir alguém com amor e autoridade", xp: 350 },
            { id: "m8_3", task: "Investir tempo na formação de outra mulher", xp: 450 },
            { id: "m8_4", task: "Compartilhar experiências de superação", xp: 300 },
            { id: "m8_5", task: "Supervisionar o crescimento dos herdeiros", xp: 500 },
            { id: "m8_6", task: "Criar um hábito positivo para o grupo", xp: 250 }
        ],
        nivel9: [ // LEGATÁRIA
            { id: "m9_1", task: "Documentar tradições e memórias do clã", xp: 600 },
            { id: "m9_2", task: "Garantir que a cultura familiar seja respeitada", xp: 500 },
            { id: "m9_3", task: "Preservar objetos ou histórias de valor", xp: 400 },
            { id: "m9_4", task: "Agir como a referência de conduta da linhagem", xp: 700 },
            { id: "m9_5", task: "Planejar o futuro emocional da família", xp: 800 },
            { id: "m9_6", task: "Fortalecer a união entre os membros distantes", xp: 500 }
        ],
        nivel10: [ // MATRIARCA
            { id: "m10_1", task: "Sustentar a unidade do clã com sua presença", xp: 1500 },
            { id: "m10_2", task: "Exercer o perdão absoluto para curar o clã", xp: 1200 },
            { id: "m10_3", task: "Ser a rocha de sabedoria final do ambiente", xp: 1100 },
            { id: "m10_4", task: "Garantir a sucessão dos valores da linhagem", xp: 1000 },
            { id: "m10_5", task: "Viver integralmente como o centro do lar", xp: 1000 },
            { id: "m10_6", task: "Inspirar paz e ordem através do seu ser", xp: 1200 }
        ]
    }
};
