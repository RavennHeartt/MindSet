const minimalistaData = {
    setup: "minimalista",
    cor: "#333333",
    ranks: [
        "Excedente",      // Nível 01: O estado de sobrecarga e acúmulo.
        "Simples",        // Nível 02: A remoção do óbvio e do inútil.
        "Essencial",      // Nível 03: A descoberta do que realmente importa.
        "Perene",         // Nível 04: O que resiste ao tempo e às tendências.
        "Linear",         // Nível 05: A organização do fluxo e da rotina.
        "Consciente",     // Nível 06: O fim do automatismo de consumo.
        "Intencional",    // Nível 07: O propósito por trás de cada posse.
        "Pragmatista",    // Nível 08: A utilidade prática acima da estética.
        "Objetivista",    // Nível 09: A clareza absoluta de fatos e metas.
        "Minimalista",    // Nível 10: O auge da clareza e elegância vital.
    ],
    quotes: [
        "A perfeição não é alcançada quando não há mais nada a acrescentar, mas quando não há mais nada a retirar.",
        "Ter menos é ter mais espaço para ser.",
        "Minimalismo não é sobre o que você perde, é sobre o que você ganha.",
        "A felicidade não consiste em adquirir e desfrutar, mas em não desejar.",
        "O excesso de posses é um peso para a alma.",
        "Limpe o seu espaço, limpe a sua mente.",
        "Diga não ao bom para poder dizer sim ao ótimo.",
        "Sua casa deve ser o refúgio para o seu eu, não o depósito para o seu passado.",
        "Consuma para viver, não viva para consumir.",
        "A simplicidade é o último grau da sofisticação.",
        "O que você possui acaba possuindo você.",
        "A liberdade mora em uma mochila leve.",
        "Reduza a complexidade para aumentar a clareza.",
        "Valorize as experiências acima dos objetos.",
        "O silêncio é o minimalismo da fala.",
        "Fazer menos é o único caminho para fazer melhor.",
        "Organização não é sobre onde guardar as coisas, mas sobre o que manter.",
        "Uma vida intencional começa com a eliminação do supérfluo.",
        "A clareza mental é o subproduto de um ambiente ordenado.",
        "Não deixe o barulho das opiniões alheias abafar sua voz interior.",
        "Qualidade sempre acima da quantidade.",
        "O minimalista foca no essencial; o resto é distração.",
        "Sua energia é limitada; não a desperdice com o que não importa.",
        "Aprenda a desfrutar das coisas sem precisar possuí-las.",
        "Um espaço vazio é uma oportunidade para a criatividade.",
        "O segredo da felicidade não está em buscar mais, mas em desenvolver a capacidade de desfrutar de menos.",
        "Elimine o que te distrai do que você ama.",
        "Viva de tal forma que se você perdesse tudo amanhã, sua essência continuaria intacta.",
        "A paz começa quando você decide que já tem o suficiente.",
        "Seja o curador da sua própria vida.",
        "Compre menos, escolha melhor e faça durar.",
        "Uma agenda lotada é um sinal de uma vida sem prioridades.",
        "O minimalismo é a busca constante pelo essencial.",
        "Descarte a dúvida; se não é um 'sim' absoluto, é um 'não'.",
        "Menos correria, mais presença.",
        "Sua atenção é o seu recurso mais valioso. Não o venda barato.",
        "Onde há ordem, há liberdade.",
        "Simplifique sua rotina para libertar sua mente.",
        "O consumo consciente é um ato de rebeldia em um mundo de excessos.",
        "Mantenha apenas o que te traz alegria ou utilidade real.",
        "A beleza mora na ausência do desnecessário.",
        "Uma vida simples é uma vida rica em significado.",
        "Não confunda o seu valor com as suas posses.",
        "A pressa é o excesso de tarefas; o minimalismo é o remédio.",
        "Desapegue-se da necessidade de impressionar os outros.",
        "O minimalista viaja leve através da existência.",
        "A clareza de propósito dissolve a necessidade de acúmulo.",
        "Seja dono das suas coisas, não escravo delas.",
        "O vazio não é falta de nada; é presença de espaço.",
        "A nobreza da vida está na pureza das intenções.",
        "Quem tem muito, tem muito a perder. Quem é pleno, nada tem a temer.",
        "O minimalismo é a estética da alma.",
        "A sabedoria consiste na eliminação do que não é verdade.",
        "Trate seu tempo como o seu ativo mais escasso.",
        "Menos tecnologia, mais conexão real.",
        "A gratidão pelo pouco transforma o pouco em tudo.",
        "O auge da maestria é simplificar o complexo.",
        "Não acumule tesouros na terra que o tempo possa corroer.",
        "A verdadeira riqueza é a liberdade de não precisar de nada.",
        "O minimalista é aquele que encontrou o seu centro."
    ],
    habitos: {
        nivel1: [ // EXCEDENTE
            { id: "mn1_1", task: "Descartar ou doar 5 itens que não usa há um ano", xp: 50 },
            { id: "mn1_2", task: "Limpar e organizar uma gaveta por completo", xp: 30 },
            { id: "mn1_3", task: "Não comprar nada supérfluo hoje", xp: 60 },
            { id: "mn1_4", task: "Arrumar a cama imediatamente ao acordar", xp: 30 },
            { id: "mn1_5", task: "Excluir 10 e-mails ou arquivos inúteis", xp: 20 },
            { id: "mn1_6", task: "Lavar a louça logo após o uso", xp: 40 }
        ],
        nivel2: [ // SIMPLES
            { id: "mn2_1", task: "Limpar a superfície de um móvel (deixá-lo vazio)", xp: 60 },
            { id: "mn2_2", task: "Reduzir o tempo de tela em 30 minutos", xp: 50 },
            { id: "mn2_3", task: "Lavar e guardar as roupas sem deixá-las acumular", xp: 70 },
            { id: "mn2_4", task: "Fazer uma refeição com ingredientes simples e naturais", xp: 40 },
            { id: "mn2_5", task: "Organizar o desktop do computador", xp: 50 },
            { id: "mn2_6", task: "Caminhar por 10 min sem distrações digitais", xp: 60 }
        ],
        nivel3: [ // ESSENCIAL
            { id: "mn3_1", task: "Identificar e listar as 3 prioridades do dia", xp: 100 },
            { id: "mn3_2", task: "Remover 3 aplicativos que te roubam tempo", xp: 60 },
            { id: "mn3_3", task: "Doar um item de valor que você não usa mais", xp: 80 },
            { id: "mn3_4", task: "Dizer 'não' a um convite por conveniência", xp: 120 },
            { id: "mn3_5", task: "Manter apenas uma aba aberta no navegador", xp: 40 },
            { id: "mn3_6", task: "Substituir um hábito de consumo por uma leitura", xp: 50 }
        ],
        nivel4: [ // PERENE
            { id: "mn4_1", task: "Investir em um item de alta qualidade (em vez de vários baratos)", xp: 100 },
            { id: "mn4_2", task: "Estudar um clássico (livro/filosofia) por 20 min", xp: 70 },
            { id: "mn4_3", task: "Cuidar e dar manutenção a algo que você já possui", xp: 60 },
            { id: "mn4_4", task: "Ignorar uma tendência ou moda passageira", xp: 150 },
            { id: "mn4_5", task: "Praticar a gratidão por algo que você tem há anos", xp: 80 },
            { id: "mn4_6", task: "Eliminar uma 'assinatura' ou serviço que você não usa", xp: 90 }
        ],
        nivel5: [ // LINEAR
            { id: "mn5_1", task: "Organizar todos os cabos e conexões da casa", xp: 80 },
            { id: "mn5_2", task: "Criar um processo de 'um entra, um sai' para objetos", xp: 120 },
            { id: "mn5_3", task: "Simplificar a rotina matinal para apenas 4 passos", xp: 100 },
            { id: "mn5_4", task: "Consolidar todas as suas tarefas em uma única lista", xp: 70 },
            { id: "mn5_5", task: "Manter o fluxo de e-mails em 'Zero Inbox'", xp: 150 },
            { id: "mn5_6", task: "Otimizar uma tarefa doméstica recorrente", xp: 60 }
        ],
        nivel6: [ // CONSCIENTE
            { id: "mn6_1", task: "Fazer um jejum de compras de 24 horas", xp: 200 },
            { id: "mn6_2", task: "Silenciar todas as notificações do celular", xp: 100 },
            { id: "mn6_3", task: "Deixar o celular fora do quarto ao dormir", xp: 150 },
            { id: "mn6_4", task: "Identificar um gatilho emocional de consumo", xp: 120 },
            { id: "mn6_5", task: "Consumir um conteúdo longo e denso sem interrupções", xp: 80 },
            { id: "mn6_6", task: "Avaliar o impacto ambiental de um produto", xp: 50 }
        ],
        nivel7: [ // INTENCIONAL
            { id: "mn7_1", task: "Justificar a existência de cada item em sua mesa", xp: 200 },
            { id: "mn7_2", task: "Passar um dia sem usar redes sociais", xp: 400 },
            { id: "mn7_3", task: "60 min de foco total em uma única tarefa vital", xp: 300 },
            { id: "mn7_4", task: "Eliminar um vício de consumo diário", xp: 350 },
            { id: "mn7_5", task: "Agir de acordo com o seu manifesto pessoal", xp: 250 },
            { id: "mn7_6", task: "Fazer uma escolha baseada em valor, não em preço", xp: 150 }
        ],
        nivel8: [ // PRAGMATISTA
            { id: "mn8_1", task: "Resolver 3 pendências práticas de forma direta", xp: 500 },
            { id: "mn8_2", task: "Eliminar um excesso burocrático da sua vida", xp: 400 },
            { id: "mn8_3", task: "Trocar uma posse por uma habilidade prática", xp: 300 },
            { id: "mn8_4", task: "Descartar algo que 'pode ser útil um dia'", xp: 600 },
            { id: "mn8_5", task: "Reduzir uma ferramenta complexa à sua versão básica", xp: 250 },
            { id: "mn8_6", task: "Viver um dia focado em utilidade absoluta", xp: 450 }
        ],
        nivel9: [ // OBJETIVISTA
            { id: "mn9_1", task: "Remover toda distração emocional do ambiente", xp: 800 },
            { id: "mn9_2", task: "Tomar uma decisão baseada apenas em fatos e lógica", xp: 900 },
            { id: "mn9_3", task: "Limpar 100% do ruído digital da sua semana", xp: 700 },
            { id: "mn9_4", task: "Comunicar-se de forma breve, clara e direta", xp: 500 },
            { id: "mn9_5", task: "Manter o foco inabalável na meta mestre", xp: 1000 },
            { id: "mn9_6", task: "Demonstrar que a eficácia nasce da simplicidade", xp: 600 }
        ],
        nivel10: [ // MINIMALISTA
            { id: "mn10_1", task: "Manter a maestria da simplicidade por 30 dias", xp: 2000 },
            { id: "mn10_2", task: "Ser a referência de clareza no seu círculo", xp: 1500 },
            { id: "mn10_3", task: "Possuir apenas o que é vital para sua missão", xp: 1800 },
            { id: "mn10_4", task: "Viver em estado de fluxo contínuo e sem ruídos", xp: 1200 },
            { id: "mn10_5", task: "Libertar-se totalmente da ansiedade do 'ter'", xp: 1300 },
            { id: "mn10_6", task: "Inspirar outros através da sua leveza de ser", xp: 2000 }
        ]
    }
};
