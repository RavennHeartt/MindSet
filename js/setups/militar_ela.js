const militarElaData = {
    setup: "militar_ela",
    cor: "#2d3b2d",
    ranks: [
        "Recruta",      // Nível 1: Fase de adaptação e quebra de resistências
        "Soldada",      // Nível 2: Domínio da rotina e prontidão
        "Cabo",         // Nível 3: Execução padrão e vigor físico
        "Sargento",     // Nível 4: Liderança de campo e exemplo de conduta
        "Tenente",      // Nível 5: Gestão tática e comando de pelotão
        "Capitã",       // Nível 6: Comando de companhia e visão estratégica
        "Major",        // Nível 7: Planejamento logístico e análise de risco
        "Coronel",      // Nível 8: Autoridade máxima de regimento
        "General",      // Nível 9: Estrategista de alto escalão e influência
        "Marechal",     // Nível 10: Lenda viva, soberania e legado
    ],
    quotes: [
        // --- DOUTRINA E FORÇA ---
        "O suor no treinamento poupa o sangue no campo de batalha.",
        "Missão dada é missão cumprida. Sem desculpas e sem hesitação.",
        "Sua competência deve ser tão grande que o respeito se torne a única opção.",
        "A disciplina é a liberdade de não ser escrava das circunstâncias.",
        "O medo é um informante, não um mestre. Domine-o.",
        "A ordem é a fundação de todo o poder real.",
        "Quem não governa a si mesma, não está apta para comandar ninguém.",
        "Uma militar não pede espaço; ela ocupa seu posto com autoridade.",
        "A dor é temporária, mas a glória de cumprir o dever é eterna.",
        "Honra é o que você cultiva no silêncio das suas escolhas mais difíceis.",
        "Padrão é a assinatura da sua excelência pessoal.",
        "O cansaço é apenas uma barreira mental aguardando ser rompida.",
        "Vença a sua mente e você vencerá qualquer adversário.",
        "Sua farda deve ser o reflexo de uma alma organizada.",
        "A lealdade é o vínculo que transforma indivíduos em uma unidade invencível.",

        // --- RESILIÊNCIA E CONQUISTA DE RESPEITO ---
        "A excelência é o argumento final contra qualquer preconceito.",
        "Seja firme como o aço e precisa como uma lâmina.",
        "O respeito é conquistado no campo de batalha, não em discursos.",
        "Não espere facilidades; treine para ser mais forte que qualquer obstáculo.",
        "A postura de uma líder comunica autoridade antes mesmo da primeira palavra.",
        "Saber obedecer com dignidade é o primeiro passo para comandar com sabedoria.",
        "Sua força não vem do que você pode fazer, mas de superar o que você achou que não podia.",
        "Mantenha a calma sob fogo cruzado; a clareza é sua melhor arma.",
        "O exemplo de uma mulher decidida arrasta batalhões.",
        "A retidão de caráter é o calibre mais pesado que você pode carregar.",
        "Liderar é assumir a responsabilidade total e dividir os méritos.",
        "A sentinela que não dorme protege o futuro de todos.",
        "Seja a rocha onde a desordem se quebra.",
        "A moral elevada é o combustível da vitória.",
        "Onde houver dúvida sobre sua capacidade, responda com resultados impecáveis.",

        // --- ESTRATÉGIA E COMANDO ---
        "A antecipação é a chave para a sobrevivência tática.",
        "Economia de forças: foque no que realmente altera o resultado da guerra.",
        "Conheça o terreno da sua vida e você nunca será pega de surpresa.",
        "O silêncio operacional protege os seus planos e a sua energia.",
        "A logística pessoal é o que sustenta as grandes conquistas.",
        "Não gaste munição com quem não está no seu nível de combate.",
        "Uma líder não cria seguidores; ela forma novas líderes.",
        "A decisão rápida e firme é superior à hesitação perfeita.",
        "Mantenha a visão no objetivo estratégico, custe o que custar.",
        "A inteligência emocional é o radar da comandante.",
        "Adapte-se, supere e vença. A estagnação é o inimigo.",
        "Seja a última a se cansar e a primeira a agir.",
        "O rigor com o padrão evita a falha na execução da missão.",
        "Sua integridade deve ser o norte da sua bússola.",
        "A vitória pertence àquela que persevera um minuto a mais que a adversidade.",

        // --- VALORES E LEGADO ---
        "Brasil acima de tudo; o dever acima de todos.",
        "Honrar a farda é honrar a própria história de superação.",
        "Sê herdeira de glórias e construtora de novos horizontes.",
        "A irmandade de armas é o laço sagrado daquelas que servem juntas.",
        "Viver com honra é o único caminho para uma paz duradoura.",
        "Sua trajetória pavimenta o caminho para as que virão depois.",
        "Seja um baluarte de ordem e justiça em um mundo confuso.",
        "O sacrifício presente é o alicerce da liberdade futura.",
        "Uma oficial é, antes de tudo, uma educadora de mentes e corações.",
        "A tradição é o fogo que mantém a unidade acesa.",
        "Mantenha a verticalidade moral em qualquer ambiente.",
        "A verdadeira autoridade nasce da coerência entre o que se diz e o que se faz.",
        "O legado de uma marechal é escrito na fibra das suas lideradas.",
        "A glória é o eco de um trabalho bem feito no anonimato.",
        "Cumpra a missão com dignidade absoluta."
    ],
    habitos: {
        nivel1: [ // RECRUTA
            { id: "me1_1", task: "Alvorada: Acordar imediatamente ao toque do alarme", xp: 50 },
            { id: "me1_2", task: "TFM: Realizar 10 minutos de caminhada firme", xp: 40 },
            { id: "me1_3", task: "Alojamento: Cama impecável e ambiente em ordem", xp: 30 },
            { id: "me1_4", task: "Apresentação: Cabelo alinhado e imagem profissional", xp: 30 },
            { id: "me1_5", task: "Higiene: Banho rápido (foco em eficiência)", xp: 40 },
            { id: "me1_6", task: "Zero atrasos: Estar pronta 5 min antes do horário", xp: 60 }
        ],
        nivel2: [ // SOLDADA
            { id: "me2_1", task: "Manutenção: Organizar sua mesa ou área de trabalho", xp: 40 },
            { id: "me2_2", task: "Disciplina: Zero redes sociais durante o serviço", xp: 70 },
            { id: "me2_3", task: "Resistência: 15 minutos de atividade física constante", xp: 60 },
            { id: "me2_4", task: "Doutrina: Estudar 15 min sobre história ou tática", xp: 50 },
            { id: "me2_5", task: "Postura: Coluna ereta e olhar focado", xp: 40 },
            { id: "me2_6", task: "Comunicação: Responder de forma clara e objetiva", xp: 50 }
        ],
        nivel3: [ // CABO
            { id: "me3_1", task: "Intendência: Organizar o suprimento/estoque doméstico", xp: 60 },
            { id: "me3_2", task: "Vigília: Revisar a segurança e metas do dia", xp: 40 },
            { id: "me3_3", task: "TFM: 20 minutos de exercício aeróbico", xp: 80 },
            { id: "me3_4", task: "Foco: Concluir 3 tarefas críticas sem pausas", xp: 100 },
            { id: "me3_5", task: "Cortesia Militar: Ser exemplar no trato com todos", xp: 50 },
            { id: "me3_6", task: "Resiliência: Zero reclamações por 24 horas", xp: 90 }
        ],
        nivel4: [ // SARGENTO
            { id: "me4_1", task: "Liderança: Ensinar um processo ou padrão a alguém", xp: 150 },
            { id: "me4_2", task: "Operação: Comandar a organização de um espaço comum", xp: 100 },
            { id: "me4_3", task: "Estudo: Ler 30 min sobre liderança militar feminina", xp: 80 },
            { id: "me4_4", task: "Vontade: Banho gelado para temperar o espírito", xp: 120 },
            { id: "me4_5", task: "Logística: Preparar todo o material de amanhã hoje", xp: 60 },
            { id: "me4_6", task: "Conduta: Ser o centro de calma em uma discussão", xp: 150 }
        ],
        nivel5: [ // TENENTE
            { id: "me5_1", task: "Missão: Planejar e executar um projeto complexo", xp: 250 },
            { id: "me5_2", task: "Iniciativa: Resolver um problema sem ser solicitada", xp: 200 },
            { id: "me5_3", task: "Tática: Eliminar uma distração que atrasa a missão", xp: 150 },
            { id: "me5_4", task: "Saúde: Dieta estrita (Zero açúcar e lixo alimentar)", xp: 100 },
            { id: "me5_5", task: "Análise: Revisar falhas e acertos do dia", xp: 120 },
            { id: "me5_6", task: "Moral: Incentivar o seu time ou família", xp: 180 }
        ],
        nivel6: [ // CAPITÃ
            { id: "me6_1", task: "Comando: Liderar uma reunião com foco total", xp: 300 },
            { id: "me6_2", task: "Estratégia: Definir as prioridades táticas do mês", xp: 200 },
            { id: "me6_3", task: "Firmeza: Resolver uma conversa difícil sem recuar", xp: 250 },
            { id: "me6_4", task: "Resistência: 30 minutos de treino físico intenso", xp: 200 },
            { id: "me6_5", task: "Administração: Otimizar o fluxo de uma tarefa", xp: 150 },
            { id: "me6_6", task: "Honra: Agir com integridade mesmo sob pressão", xp: 400 }
        ],
        nivel7: [ // MAJOR
            { id: "me7_1", task: "Logística: Gestão financeira com rigor militar", xp: 400 },
            { id: "me7_2", task: "Planejamento: Documentar plano de ação trimestral", xp: 350 },
            { id: "me7_3", task: "Delegação: Passar uma tarefa e auditar o padrão", xp: 200 },
            { id: "me7_4", task: "Visão: Identificar um risco antes dele se tornar real", xp: 300 },
            { id: "me7_5", task: "Cultura: Reforçar os valores morais da sua casa/trabalho", xp: 150 },
            { id: "me7_6", task: "Foco: 4 horas de produção em estado de fluxo", xp: 300 }
        ],
        nivel8: [ // CORONEL
            { id: "me8_1", task: "Autoridade: Tomar uma decisão de alto impacto", xp: 600 },
            { id: "me8_2", task: "Alianças: Networking estratégico com outros líderes", xp: 400 },
            { id: "me8_3", task: "Patrimônio: Fortalecer a segurança do seu 'quartel'", xp: 500 },
            { id: "me8_4", task: "Influência: Mentorar uma subordinada promissora", xp: 350 },
            { id: "me8_5", task: "Estratégia: Analisar táticas de grandes comandantes", xp: 300 },
            { id: "me8_6", task: "Dignidade: Manter a imagem impecável em público", xp: 200 }
        ],
        nivel9: [ // GENERAL
            { id: "me9_1", task: "Governança: Gerir múltiplos projetos de grande porte", xp: 700 },
            { id: "me9_2", task: "Poder: Executar uma mudança estrutural necessária", xp: 900 },
            { id: "me9_3", task: "Legado: Definir a visão estratégica de longo prazo", xp: 600 },
            { id: "me9_4", task: "Calma: Serenidade total em meio ao caos externo", xp: 1000 },
            { id: "me9_5", task: "Justiça: Aplicar o mérito com imparcialidade", xp: 500 },
            { id: "me9_6", task: "Presença: Ser a referência inabalável de conduta", xp: 800 }
        ],
        nivel10: [ // MARECHAL
            { id: "me10_1", task: "Conquista: Finalizar o objetivo mestre do seu ano", xp: 2000 },
            { id: "me10_2", task: "Maestria: Domínio soberano sobre sua agenda e mente", xp: 1200 },
            { id: "me10_3", task: "Exemplo: Ser reconhecida como autoridade suprema", xp: 1000 },
            { id: "me10_4", task: "Sucessão: Garantir que seus valores sejam perpetuados", xp: 1500 },
            { id: "me10_5", task: "Poder: Liderar com sabedoria, firmeza e bondade", xp: 1300 },
            { id: "me10_6", task: "Eternidade: Selar o seu legado como Marechal", xp: 1800 }
        ]
    }
};
