const ceoElaData = {
    setup: "ceo_ela",
    cor: "#1a1a1a",
    ranks: [
        "Aprendiz",      // Nível 1: Organização e fundamentos
        "Estagiária",    // Nível 2: Execução assistida e processos
        "Assistente",    // Nível 3: Autonomia operacional básica
        "Júnior",        // Nível 4: Entrega de resultados e métricas
        "Analista",      // Nível 5: Otimização e análise de dados
        "Sênior",        // Nível 6: Maestria técnica e referência
        "Gerente",       // Nível 7: Gestão de recursos e pessoas
        "Diretora",      // Nível 8: Decisão estratégica e impacto
        "Presidente",    // Nível 9: Governança e cultura
        "CEO"            // Nível 10: Visão máxima e expansão
    ],
    quotes: [
        "Resultados não mentem; intenções, sim.",
        "Trabalhe enquanto eles dormem, mas produza enquanto eles apenas trabalham.",
        "O que não pode ser medido, não pode ser gerenciado.",
        "Eficiência é fazer as coisas certo; eficácia é fazer as coisas certas.",
        "O tempo é o único recurso que você não pode comprar ou recuperar.",
        "Foco é dizer 'não' para mil boas ideias para focar na ideia excelente.",
        "A disciplina é a ponte entre metas e realizações.",
        "Seja ocupada com o que importa, não apenas ocupada.",
        "A execução é a única estratégia que o mercado realmente entende.",
        "Feito é melhor que perfeito, desde que seja funcional e escalável.",
        "Sua agenda reflete suas prioridades reais, não seus desejos.",
        "A procrastinação é o imposto que você paga por não ter clareza.",
        "A excelência operacional é a base de qualquer monopólio.",
        "Não confunda movimento com progresso.",
        "O trabalho duro vence o talento quando o talento não trabalha duro.",
        "Lidere pelo exemplo, ou não lidere de forma alguma.",
        "Uma líder não cria seguidores, ela cria outras líderes.",
        "Cultura come estratégia no café da manhã.",
        "Se você é a pessoa mais inteligente da mesa, você está na mesa errada.",
        "Contrate caráter, treine habilidade.",
        "O sucesso é o somatório de pequenos esforços repetidos dia após dia.",
        "Assuma a responsabilidade total; culpar os outros é perder o poder de mudar.",
        "Grandes líderes são, antes de tudo, grandes ouvintes.",
        "A coragem de uma CEO é testada na hora de tomar decisões impopulares.",
        "Mantenha a visão no longo prazo, mas os pés no operacional de curto prazo.",
        "O medo de falhar é o maior obstáculo para a inovação.",
        "Resiliência é a capacidade de ir de fracasso em fracasso sem perder o entusiasmo.",
        "Sua rede de contatos é o seu patrimônio líquido.",
        "Liderança é a arte de fazer as pessoas quererem fazer o que precisa ser feito.",
        "Seja firme nos princípios e flexível nos métodos.",
        "Antecipe o futuro criando-o.",
        "A melhor forma de prever o futuro é entendendo os dados do presente.",
        "No mundo dos negócios, você é paga pelo valor que gera, não pelo tempo que gasta.",
        "Estratégia é a arte de sacrificar o bom para atingir o ótimo.",
        "A inovação diferencia uma líder de uma seguidora.",
        "Esteja disposta a ser mal interpretada por um longo tempo se quiser inovar.",
        "O risco vem de não saber o que você está fazendo.",
        "Mantenha seus custos fixos baixos e sua visão alta.",
        "O mercado é um mecanismo que transfere dinheiro dos impacientes para os pacientes.",
        "Seu produto deve resolver um problema real, ou ele é apenas um hobby caro.",
        "A vantagem competitiva nasce da consistência que ninguém consegue copiar.",
        "Não tente ser tudo para todos; seja a melhor para o seu público-alvo.",
        "O crescimento sem rentabilidade é o caminho mais rápido para o abismo.",
        "A escala exige processos; processos exigem disciplina.",
        "Adapte-se ou morra; a evolução não perdoa as estagnadas.",
        "Alta performance exige recuperação de alta qualidade.",
        "Domine suas manhãs e você dominará o seu dia.",
        "O sucesso sem felicidade é o maior fracasso de todos.",
        "Sua mente é seu ativo mais valioso; invista nela constantemente.",
        "A clareza é o poder que permite agir com velocidade máxima.",
        "Aprenda a delegar o que você faz bem para focar no que só você pode fazer.",
        "O silêncio estratégico é uma arma poderosa em negociações.",
        "A ética é o único modelo de negócio sustentável no longo prazo.",
        "Aprenda com os erros dos outros; você não terá tempo de cometer todos sozinha.",
        "Seja uma eterna aprendiz, não importa quão alto você chegue.",
        "O verdadeiro luxo é ter controle total sobre o próprio tempo.",
        "A disciplina mental é a raiz de toda riqueza material.",
        "Vença o dia antes mesmo dele começar através do planejamento.",
        "A CEO de sucesso não busca problemas, busca soluções que geram escala.",
        "O destino do seu negócio é determinado pelas decisões que você toma hoje."
    ],
    habitos: {
        nivel1: [ // APRENDIZ
            { id: "cea1_1", task: "Listar 3 tarefas cruciais do dia", xp: 50 },
            { id: "cea1_2", task: "Arrumar a mesa (Zero papel)", xp: 30 },
            { id: "cea1_3", task: "Checar e-mails em horários fixos", xp: 40 },
            { id: "cea1_4", task: "Beber 2L de água para foco mental", xp: 30 },
            { id: "cea1_5", task: "Dormir 7h para manter performance", xp: 50 },
            { id: "cea1_6", task: "Anotar toda distração para evitar agir nela", xp: 40 }
        ],
        nivel2: [ // ESTAGIÁRIA
            { id: "cea2_1", task: "Preparar agenda de amanhã à noite", xp: 60 },
            { id: "cea2_2", task: "Zero redes sociais durante o trabalho", xp: 80 },
            { id: "cea2_3", task: "Ler 15 min sobre produtividade", xp: 40 },
            { id: "cea2_4", task: "Finalizar uma tarefa antes do prazo", xp: 60 },
            { id: "cea2_5", task: "Organizar arquivos digitais/desktop", xp: 30 },
            { id: "cea2_6", task: "Responder mensagens importantes rápido", xp: 50 }
        ],
        nivel3: [ // ASSISTENTE
            { id: "cea3_1", task: "Dizer 'não' a uma reunião inútil", xp: 100 },
            { id: "cea3_2", task: "Automatizar uma tarefa repetitiva", xp: 80 },
            { id: "cea3_3", task: "Focar 60 min sem interrupções", xp: 70 },
            { id: "cea3_4", task: "Arrumar a própria agenda (Google Cal)", xp: 50 },
            { id: "cea3_5", task: "Identificar um gargalo na rotina", xp: 60 },
            { id: "cea3_6", task: "Fazer revisão do dia em 5 min", xp: 40 }
        ],
        nivel4: [ // JÚNIOR
            { id: "cea4_1", task: "Bater a meta principal do dia", xp: 150 },
            { id: "cea4_2", task: "Medir o tempo gasto em cada tarefa", xp: 80 },
            { id: "cea4_3", task: "Estudar 20 min sobre seu mercado", xp: 100 },
            { id: "cea4_4", task: "Limpar a caixa de entrada (Inbox Zero)", xp: 90 },
            { id: "cea4_5", task: "Encontrar uma solução sem pedir ajuda", xp: 120 },
            { id: "cea4_6", task: "Manter a postura ereta na cadeira", xp: 40 }
        ],
        nivel5: [ // ANALISTA
            { id: "cea5_1", task: "Analisar métricas semanais de progresso", xp: 200 },
            { id: "cea5_2", task: "Deep Work (90 min de foco total)", xp: 180 },
            { id: "cea5_3", task: "Otimizar um processo que estava lento", xp: 150 },
            { id: "cea5_4", task: "Cortar um gasto supérfluo na planilha", xp: 120 },
            { id: "cea5_5", task: "Ler relatório ou notícia estratégica", xp: 100 },
            { id: "cea5_6", task: "Documentar um passo a passo de tarefa", xp: 80 }
        ],
        nivel6: [ // SÊNIOR
            { id: "cea6_1", task: "Delegar uma tarefa operacional", xp: 200 },
            { id: "cea6_2", task: "Resolver um problema complexo sozinha", xp: 300 },
            { id: "cea6_3", task: "Refinar a qualidade de uma entrega", xp: 150 },
            { id: "cea6_4", task: "Ensinar algo para alguém da área", xp: 200 },
            { id: "cea6_5", task: "Manter a calma em um 'incêndio'", xp: 250 },
            { id: "cea6_6", task: "Planejar a semana com foco em ROI", xp: 180 }
        ],
        nivel7: [ // GERENTE
            { id: "cea7_1", task: "Conduzir uma conversa objetiva/reunião", xp: 250 },
            { id: "cea7_2", task: "Gerir um conflito com foco em resultado", xp: 300 },
            { id: "cea7_3", task: "Revisar o desempenho do 'time' (ou pessoal)", xp: 200 },
            { id: "cea7_4", task: "Bloquear tempo para pensar na agenda", xp: 150 },
            { id: "cea7_5", task: "Dar um feedback honesto e direto", xp: 180 },
            { id: "cea7_6", task: "Garantir que os prazos sejam cumpridos", xp: 200 }
        ],
        nivel8: [ // DIRETORA
            { id: "cea8_1", task: "Tomar uma decisão de alto impacto", xp: 500 },
            { id: "cea8_2", task: "Fazer um networking estratégico", xp: 400 },
            { id: "cea8_3", task: "Planejar a estratégia do próximo mês", xp: 450 },
            { id: "cea8_4", task: "Analisar riscos de um novo projeto", xp: 350 },
            { id: "cea8_5", task: "Aprimorar o pitch/oratória", xp: 300 },
            { id: "cea8_6", task: "Identificar uma nova oportunidade", xp: 400 }
        ],
        nivel9: [ // PRESIDENTE
            { id: "cea9_1", task: "Refinar a visão de longo prazo", xp: 600 },
            { id: "cea9_2", task: "Tomar decisão difícil sob pressão", xp: 800 },
            { id: "cea9_3", task: "Investir em conhecimento de elite", xp: 500 },
            { id: "cea9_4", task: "Manter o ecossistema em equilíbrio", xp: 600 },
            { id: "cea9_5", task: "Ser a voz final em um dilema", xp: 700 },
            { id: "cea9_6", task: "Proteger os ativos mais valiosos", xp: 500 }
        ],
        nivel10: [ // CEO
            { id: "cea10_1", task: "Expandir o império (Nova meta/projeto)", xp: 1500 },
            { id: "cea10_2", task: "Dominar completamente a própria agenda", xp: 1000 },
            { id: "cea10_3", task: "Atingir a meta financeira anual", xp: 1200 },
            { id: "cea10_4", task: "Gerar valor massivo para o mercado", xp: 1100 },
            { id: "cea10_5", task: "Viver integralmente sua estratégia", xp: 1000 },
            { id: "cea10_6", task: "Ser a referência máxima de execução", xp: 1200 }
        ]
    }
};
