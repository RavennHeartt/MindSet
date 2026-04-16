const atletaElaData = {
    setup: "atleta_ela",
    cor: "#d45d00",
    ranks: [
        "Sedentária",   // Nível 1: Inércia e falta de rotina física
        "Amadora",      // Nível 2: Início da movimentação e adaptação
        "Praticante",   // Nível 3: Consistência nos treinos básicos
        "Resiliente",   // Nível 4: Superação do cansaço e dores iniciais
        "Competidora",  // Nível 5: Foco em metas e melhoria de marcas
        "Avançada",     // Nível 6: Maestria técnica e disciplina rigorosa
        "Performance",  // Nível 7: Otimização de sono, nutrição e mente
        "Elite",        // Nível 8: Referência de alto rendimento no grupo
        "Recordista",   // Nível 9: Quebra de limites e mentalidade inabalável
        "Lenda",        // Nível 10: O auge da forma física e mental
    ],
    quotes: [
        // --- MENTALIDADE E SUPERAÇÃO ---
        "O corpo alcança o que a mente acredita.",
        "A dor é temporária; desistir é para sempre.",
        "Não conte os dias, faça os dias contarem.",
        "Sua única competição é a mulher que você foi ontem.",
        "Disciplina é fazer o que precisa ser feito, mesmo quando você não quer.",
        "A motivação te coloca no caminho; o hábito te mantém nele.",
        "Limites existem apenas na sua mente.",
        "Se fosse fácil, todo mundo faria.",
        "O sucesso é o somatório de pequenos esforços repetidos diariamente.",
        "Treine enquanto elas dormem; vença enquanto elas inventam desculpas.",
        "A força não vem da capacidade física, vem de uma vontade indomável.",
        "Onde a vontade é grande, a dor é pequena.",
        "A diferença entre o impossível e o possível reside na sua determinação.",
        "Não pare quando estiver cansada, pare quando tiver terminado.",
        "O suor é o combustível da sua transformação.",

        // --- PERFORMANCE E NUTRIÇÃO ---
        "Seu corpo é seu templo; trate-o com respeito e combustível de elite.",
        "Nutrição não é sobre restrição, é sobre performance.",
        "O descanso faz parte do treino. Recupere para vencer.",
        "Hidratação é a base da clareza mental e do vigor físico.",
        "Resultados não vêm de sorte, vêm de planejamento e execução.",
        "Cada refeição é uma oportunidade de nutrir a sua vitória.",
        "O sono é o momento em que a sua força é construída.",
        "Pequenas melhorias diárias levam a resultados extraordinários.",
        "Sinta orgulho de cada progresso, por menor que seja.",
        "A consistência bate o talento em qualquer dia da semana.",
        "Mantenha o foco no objetivo, não no obstáculo.",
        "Sua energia é o seu ativo mais valioso.",
        "O corpo humano é feito para o movimento; honre essa natureza.",
        "A excelência física é o reflexo da ordem interna.",
        "Não procure atalhos; procure o caminho da maestria.",

        // --- RESILIÊNCIA E CARÁTER ---
        "A resiliência é o músculo mais importante do seu arsenal.",
        "Cair é parte do treino; levantar é a prova da campeã.",
        "Mantenha a calma sob pressão; a mente fria vence o jogo.",
        "Honra é treinar duro quando ninguém está vendo.",
        "A integridade de uma atleta começa na honestidade com o cronômetro.",
        "Seja humilde na vitória e resiliente na derrota.",
        "O caráter de uma campeã é forjado na repetição.",
        "Não dê desculpas para a sua falta de foco; dê soluções.",
        "A autoconfiança nasce da preparação impecável.",
        "Lidere pelo exemplo de suor e dedicação.",
        "A paciência é a chave para o progresso sustentável.",
        "Respeite o seu processo, mas nunca se acomode.",
        "Sua força inspira outras mulheres a serem fortes também.",
        "A verdadeira vitória é o domínio sobre as suas próprias fraquezas.",
        "Mantenha os pés no chão e a mente na meta.",

        // --- FOCO E LEGADO ---
        "A vitória começa na mente, muito antes da linha de chegada.",
        "Você é a arquiteta da sua própria força.",
        "Deixe que os seus resultados façam o barulho por você.",
        "O foco absoluto é a arma secreta da elite.",
        "Viva com um propósito que te faça pular da cama.",
        "A disciplina mental é o que separa as boas das excelentes.",
        "Não compare o seu capítulo 1 com o capítulo 20 de outra pessoa.",
        "O sucesso é uma jornada, não um destino final.",
        "Sua persistência hoje é o seu legado de amanhã.",
        "Transforme a sua dor em poder.",
        "A vida começa no final da sua zona de conforto.",
        "Seja implacável com os seus objetivos e gentil com a sua alma.",
        "A maestria física é a base para a liberdade mental.",
        "Cada repetição conta; cada escolha soma.",
        "Você nasceu para ser forte, resiliente e lendária."
    ],
    habitos: {
        nivel1: [ // SEDENTÁRIA
            { id: "at1_1", task: "Realizar 15 minutos de caminhada leve", xp: 40 },
            { id: "at1_2", task: "Beber 2 litros de água ao longo do dia", xp: 30 },
            { id: "at1_3", task: "Fazer 3 séries de 30 segundos de prancha", xp: 50 },
            { id: "at1_4", task: "Alongar o corpo por 10 minutos", xp: 30 },
            { id: "at1_5", task: "Dormir 7 a 8 horas para recuperação", xp: 50 },
            { id: "at1_6", task: "Subir escadas em vez de usar elevador", xp: 40 }
        ],
        nivel2: [ // AMADORA
            { id: "at2_1", task: "Realizar 20 minutos de atividade aeróbica", xp: 60 },
            { id: "at2_2", task: "Trocar um alimento ultraprocessado por fruta", xp: 50 },
            { id: "at2_3", task: "Fazer 20 agachamentos com postura correta", xp: 40 },
            { id: "at2_4", task: "Anotar o progresso dos treinos no diário", xp: 40 },
            { id: "at2_5", task: "Evitar telas 30 minutos antes de dormir", xp: 50 },
            { id: "at2_6", task: "Realizar mobilidade articular pela manhã", xp: 50 }
        ],
        nivel3: [ // PRATICANTE
            { id: "at3_1", task: "30 minutos de treino de força ou funcional", xp: 80 },
            { id: "at3_2", task: "Consumir proteína em todas as refeições", xp: 60 },
            { id: "at3_3", task: "Bater a meta de passos diários (Ex: 8 mil)", xp: 70 },
            { id: "at3_4", task: "Fazer 10 minutos de meditação para foco", xp: 50 },
            { id: "at3_5", task: "Não pular o treino, mesmo sem motivação", xp: 100 },
            { id: "at3_6", task: "Preparar a mochila de treino na noite anterior", xp: 40 }
        ],
        nivel4: [ // RESILIENTE
            { id: "at4_1", task: "Treinar em um horário desafiador", xp: 120 },
            { id: "at4_2", task: "Realizar um treino de alta intensidade (HIIT)", xp: 130 },
            { id: "at4_3", task: "Banho frio para acelerar a recuperação", xp: 100 },
            { id: "at4_4", task: "Ignorar um desejo de comer 'lixo' alimentar", xp: 150 },
            { id: "at4_5", task: "Praticar visualização da sua meta por 5 min", xp: 80 },
            { id: "at4_6", task: "Aumentar a carga ou tempo de um exercício", xp: 110 }
        ],
        nivel5: [ // COMPETIDORA
            { id: "at5_1", task: "Cumprir 100% do plano de treino semanal", xp: 200 },
            { id: "at5_2", task: "Testar seu limite em um exercício específico", xp: 180 },
            { id: "at5_3", task: "Ler 20 min sobre fisiologia ou nutrição", xp: 100 },
            { id: "at5_4", task: "Eliminar o açúcar refinado totalmente hoje", xp: 150 },
            { id: "at5_5", task: "Focar na técnica perfeita em cada movimento", xp: 120 },
            { id: "at5_6", task: "Auxiliar outra pessoa com incentivo físico", xp: 130 }
        ],
        nivel6: [ // AVANÇADA
            { id: "at6_1", task: "Treinar 60 min com intensidade máxima", xp: 300 },
            { id: "at6_2", task: "Manter a calma em um treino exaustivo", xp: 250 },
            { id: "at6_3", task: "Monitorar batimentos ou métricas de sono", xp: 150 },
            { id: "at6_4", task: "Preparar todas as refeições da semana", xp: 200 },
            { id: "at6_5", task: "Abster-se de álcool por completo", xp: 200 },
            { id: "at6_6", task: "Executar um movimento complexo com maestria", xp: 180 }
        ],
        nivel7: [ // PERFORMANCE
            { id: "at7_1", task: "Realizar um treino em jejum ou específico", xp: 400 },
            { id: "at7_2", task: "Otimizar a suplementação/hidratação exata", xp: 350 },
            { id: "at7_3", task: "Fazer uma sessão de liberação miofascial", xp: 200 },
            { id: "at7_4", task: "Manter a mente blindada contra distrações", xp: 400 },
            { id: "at7_5", task: "Estudar táticas de grandes atletas mundiais", xp: 250 },
            { id: "at7_6", task: "Dormir exatamente no horário planejado", xp: 300 }
        ],
        nivel8: [ // ELITE
            { id: "at8_1", task: "Superar um recorde pessoal (PR)", xp: 600 },
            { id: "at8_2", task: "Agir como mentora para atletas novatas", xp: 400 },
            { id: "at8_3", task: "Manter 100% da dieta em evento social", xp: 500 },
            { id: "at8_4", task: "Executar treino de recuperação ativa", xp: 300 },
            { id: "at8_5", task: "Manter a postura de campeã o dia todo", xp: 350 },
            { id: "at8_6", task: "Analisar vídeos da sua técnica para correção", xp: 250 }
        ],
        nivel9: [ // RECORDISTA
            { id: "at9_1", task: "Realizar uma prova ou desafio de longa duração", xp: 800 },
            { id: "at9_2", task: "Manter foco inabalável sob dor extrema", xp: 1000 },
            { id: "at9_3", task: "Inspirar um grupo através da sua performance", xp: 600 },
            { id: "at9_4", task: "Priorizar a saúde sistêmica acima de tudo", xp: 500 },
            { id: "at9_5", task: "Manter a mente vazia e focada no agora", xp: 700 },
            { id: "at9_6", task: "Garantir a simetria entre corpo e mente", xp: 800 }
        ],
        nivel10: [ // LENDA
            { id: "at10_1", task: "Alcançar a meta física mestre do ano", xp: 2000 },
            { id: "at10_2", task: "Ser a referência máxima de saúde do clã", xp: 1200 },
            { id: "at10_3", task: "Viver integralmente como uma atleta de elite", xp: 1000 },
            { id: "at10_4", task: "Superar um limite que parecia impossível", xp: 1500 },
            { id: "at10_5", task: "Liderar uma comunidade voltada à evolução", xp: 1300 },
            { id: "at10_6", task: "Imortalizar sua rotina através da disciplina", xp: 1800 }
        ]
    }
};
