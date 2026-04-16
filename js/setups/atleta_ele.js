const atletaEleData = {
    setup: "atleta_ele",
    cor: "#d45d00",
    ranks: [
        "Sedentário",   // Nível 1: Inércia total e falta de consciência corporal
        "Novato",       // Nível 2: Início da adaptação e quebra da preguiça
        "Praticante",   // Nível 3: Estabelecimento de frequência semanal
        "Resiliente",   // Nível 4: Persistência apesar das dores e cansaço
        "Competidor",   // Nível 5: Foco em metas e superação de marcas pessoais
        "Avançado",     // Nível 6: Domínio técnico e disciplina de treino
        "Performance",  // Nível 7: Otimização de sono, dieta e suplementação
        "Elite",        // Nível 8: Referência de vigor físico e foco no grupo
        "Veterano",     // Nível 9: Mentalidade inabalável e quebra de recordes
        "Lenda",        // Nível 10: O auge da potência humana e maestria mental
    ],
    quotes: [
        // --- FOCO E DISCIPILINA ---
        "O corpo alcança o que a mente acredita.",
        "A dor é temporária; a desistência é para sempre.",
        "Treine enquanto eles inventam desculpas.",
        "A disciplina é a ponte entre seus objetivos e suas conquistas.",
        "O suor de hoje é o sucesso de amanhã.",
        "Sua única competição é o homem que você foi ontem.",
        "Não pare quando estiver cansado, pare quando tiver terminado.",
        "Onde a vontade é grande, a dificuldade é pequena.",
        "A motivação te coloca no caminho; o hábito te mantém nele.",
        "Limites existem apenas para serem superados.",
        "O fracasso é apenas um dado; a desistência é a derrota real.",
        "Sê implacável com suas metas e paciente com seu progresso.",
        "A força não vem da capacidade física, mas de uma vontade indomável.",
        "Quem quer, arruma um jeito. Quem não quer, arruma uma desculpa.",
        "A maestria física é a base da liberdade mental.",

        // --- PERFORMANCE E NUTRIÇÃO ---
        "Seu corpo é sua máquina de guerra. Abasteça-o com o melhor.",
        "Nutrição não é sobre comer menos, é sobre comer certo.",
        "O descanso é o momento em que os seus músculos são construídos.",
        "Hidratação é o combustível silencioso da alta performance.",
        "Resultados consistentes vêm de escolhas conscientes.",
        "O sono é o seu melhor suplemento de recuperação.",
        "Pequenas melhorias diárias levam a resultados massivos.",
        "Cada refeição limpa é um passo em direção ao seu objetivo.",
        "O corpo humano foi feito para o movimento; honre essa natureza.",
        "O vigor físico é o sustento da sua autoridade.",
        "Não procure atalhos; procure o caminho da resistência.",
        "A clareza mental nasce de um corpo bem treinado.",
        "Trate seu treinamento como uma reunião inadiável com o sucesso.",
        "A constância bate o talento sempre que o talento se acomoda.",
        "Seja o dono da sua energia, não escravo do seu cansaço.",

        // --- RESILIÊNCIA E CARÁTER ---
        "A resiliência é o músculo que você mais deve treinar.",
        "Cair faz parte do jogo; levantar rápido é a marca do campeão.",
        "Mantenha a mente fria quando o corpo estiver pegando fogo.",
        "Honra é dar o seu máximo quando ninguém está olhando.",
        "A integridade de um atleta está na sua honestidade com o treino.",
        "Seja humilde na vitória e resiliente na derrota.",
        "O caráter de um homem é forjado na repetição exaustiva.",
        "Não dê desculpas; entregue soluções e resultados.",
        "A autoconfiança é o subproduto de uma preparação impecável.",
        "Liderar é arrastar pelo exemplo de suor e esforço.",
        "A paciência estratégica vence a ansiedade do imediatismo.",
        "Respeite o processo, mas nunca aceite a mediocridade.",
        "Sua força deve servir para proteger e inspirar os mais fracos.",
        "A verdadeira vitória é o domínio sobre suas próprias fraquezas.",
        "Mantenha os olhos na meta e os pés em movimento.",

        // --- VISÃO E LEGADO ---
        "A vitória começa na mente muito antes do apito final.",
        "Você é o arquiteto da sua própria força e destino.",
        "Deixe que os seus resultados gritem por você.",
        "O foco absoluto é a marca dos grandes executores.",
        "Viva com um propósito que desafie sua biologia.",
        "A disciplina mental separa os amadores dos profissionais.",
        "Não compare o seu início com o auge de outra pessoa.",
        "O sucesso é uma maratona, não um tiro de 100 metros.",
        "Sua persistência hoje constrói o seu legado de amanhã.",
        "Transforme cada gota de suor em poder pessoal.",
        "A vida começa onde a sua zona de conforto termina.",
        "Seja implacável com seus objetivos, mas mantenha a sua honra.",
        "A força física sem direção é apenas desperdício de energia.",
        "Cada repetição conta; cada escolha soma no placar da vida.",
        "Você nasceu para ser forte, disciplinado e lendário."
    ],
    habitos: {
        nivel1: [ // SEDENTÁRIO
            { id: "ate1_1", task: "Realizar 15 minutos de caminhada firme", xp: 40 },
            { id: "ate1_2", task: "Beber 2,5 litros de água durante o dia", xp: 30 },
            { id: "ate1_3", task: "Realizar 3 séries de 20 segundos de prancha", xp: 50 },
            { id: "ate1_4", task: "Alongar o corpo por 10 minutos", xp: 30 },
            { id: "ate1_5", task: "Dormir 7 horas para recuperação biológica", xp: 50 },
            { id: "ate1_6", task: "Trocar o elevador pelas escadas", xp: 40 }
        ],
        nivel2: [ // NOVATO
            { id: "ate2_1", task: "Realizar 20 minutos de atividade aeróbica", xp: 60 },
            { id: "ate2_2", task: "Eliminar o refrigerante ou sucos artificiais hoje", xp: 50 },
            { id: "ate2_3", task: "Realizar 20 flexões (mesmo que parceladas)", xp: 40 },
            { id: "ate2_4", task: "Registrar o peso e medidas iniciais", xp: 40 },
            { id: "ate2_5", task: "Evitar telas 30 min antes de dormir", xp: 50 },
            { id: "ate2_6", task: "Mobilidade articular ao acordar", xp: 50 }
        ],
        nivel3: [ // PRATICANTE
            { id: "ate3_1", task: "30 minutos de treinamento de força", xp: 80 },
            { id: "ate3_2", task: "Consumir proteína em todas as refeições", xp: 60 },
            { id: "ate3_3", task: "Bater a meta de 8 mil passos diários", xp: 70 },
            { id: "ate3_4", task: "Realizar 10 min de meditação pós-treino", xp: 50 },
            { id: "ate3_5", task: "Não faltar ao treino, independente do humor", xp: 100 },
            { id: "ate3_6", task: "Preparar a marmita ou lanche saudável", xp: 40 }
        ],
        nivel4: [ // RESILIENTE
            { id: "ate4_1", task: "Treinar em um horário que você geralmente evita", xp: 120 },
            { id: "ate4_2", task: "Realizar 15 minutos de HIIT (Alta Intensidade)", xp: 130 },
            { id: "ate4_3", task: "Banho gelado para controle inflamatório", xp: 100 },
            { id: "ate4_4", task: "Negar um alimento processado em público", xp: 150 },
            { id: "ate4_5", task: "Praticar visualização da meta (5 min)", xp: 80 },
            { id: "ate4_6", task: "Aumentar a carga ou tempo de um exercício", xp: 110 }
        ],
        nivel5: [ // COMPETIDOR
            { id: "ate5_1", task: "Cumprir 100% do plano de treino da semana", xp: 200 },
            { id: "ate5_2", task: "Testar um novo limite de força ou tempo", xp: 180 },
            { id: "ate5_3", task: "Ler 20 min sobre biomecânica ou nutrição", xp: 100 },
            { id: "ate5_4", task: "Zero açúcar refinado durante as 24h", xp: 150 },
            { id: "ate5_5", task: "Focar na técnica perfeita em cada série", xp: 120 },
            { id: "ate5_6", task: "Incentivar um parceiro de treino", xp: 130 }
        ],
        nivel6: [ // AVANÇADO
            { id: "ate6_1", task: "Treinar por 60 minutos com foco absoluto", xp: 300 },
            { id: "ate6_2", task: "Manter a calma em um treino de exaustão", xp: 250 },
            { id: "ate6_3", task: "Monitorar e ajustar os horários de sono", xp: 150 },
            { id: "ate6_4", task: "Preparar o 'meal prep' para os próximos dias", xp: 200 },
            { id: "ate6_5", task: "Abstinência total de álcool e fumo", xp: 200 },
            { id: "ate6_6", task: "Executar um movimento de alta complexidade", xp: 180 }
        ],
        nivel7: [ // PERFORMANCE
            { id: "ate7_1", task: "Realizar cardio em jejum ou específico", xp: 400 },
            { id: "ate7_2", task: "Otimizar a hidratação com eletrólitos", xp: 350 },
            { id: "ate7_3", task: "Sessão de liberação miofascial ou massagem", xp: 200 },
            { id: "ate7_4", task: "Zero distrações digitais durante o treino", xp: 400 },
            { id: "ate7_5", task: "Estudar táticas de mentalidade esportiva", xp: 250 },
            { id: "ate7_6", task: "Dormir rigorosamente no horário planejado", xp: 300 }
        ],
        nivel8: [ // ELITE
            { id: "ate8_1", task: "Superar um recorde pessoal de força (PR)", xp: 600 },
            { id: "ate8_2", task: "Mentorizar um iniciante na jornada física", xp: 400 },
            { id: "ate8_3", task: "Manter a dieta rigorosa em situação social", xp: 500 },
            { id: "ate8_4", task: "Realizar um treino de recuperação ativa", xp: 300 },
            { id: "ate8_5", task: "Manter a postura de campeão o dia todo", xp: 350 },
            { id: "ate8_6", task: "Analisar sua técnica via vídeo para ajuste", xp: 250 }
        ],
        nivel9: [ // VETERANO
            { id: "ate9_1", task: "Completar um desafio de resistência extrema", xp: 800 },
            { id: "ate9_2", task: "Manter o foco mental sob fadiga aguda", xp: 1000 },
            { id: "ate9_3", task: "Liderar um grupo em uma atividade física", xp: 600 },
            { id: "ate9_4", task: "Focar na saúde longeva acima da estética", xp: 500 },
            { id: "ate9_5", task: "Viver um dia em estado de presença total", xp: 700 },
            { id: "ate9_6", task: "Garantir o equilíbrio entre força e flexibilidade", xp: 800 }
        ],
        nivel10: [ // LENDA
            { id: "ate10_1", task: "Alcançar a meta mestre de performance do ano", xp: 2000 },
            { id: "ate10_2", task: "Ser a referência inabalável de vigor do clã", xp: 1200 },
            { id: "ate10_3", task: "Viver 100% de acordo com o código do atleta", xp: 1000 },
            { id: "ate10_4", task: "Superar um bloqueio físico histórico", xp: 1500 },
            { id: "ate10_5", task: "Consolidar o legado através da disciplina", xp: 1300 },
            { id: "ate10_6", task: "Inspirar a mudança real em todos ao redor", xp: 1800 }
        ]
    }
};
