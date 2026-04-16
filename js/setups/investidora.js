const investidoraData = {
    setup: "investidora",
    cor: "#1e4d2b",
    ranks: [
        "Escassa",        // Nível 1: Mentalidade de escassez e falta de reservas
        "Poupadora",      // Nível 2: Disciplina para reter capital e formar base
        "Rentista",       // Nível 3: Foco em juros e preservação de poder de compra
        "Acionista",      // Nível 4: Mentalidade de sócia de grandes negócios
        "Cotista",        // Nível 5: Foco em renda passiva recorrente
        "Especuladora",   // Nível 6: Domínio de ciclos e operações táticas
        "Visionária",     // Nível 7: Antecipação de tendências e inovação
        "Venture",        // Nível 8: Fomento ao risco calculado e novos negócios
        "Investidora",    // Nível 9: Maestria em alocação e gestão de ativos
        "Independente"    // Nível 10: Soberania financeira e liberdade de escolha
    ],
    quotes: [
        // --- FILOSOFIA E ESTRATÉGIA ---
        "O mercado financeiro transfere dinheiro dos impacientes para os pacientes.",
        "Não teste a profundidade do rio com os dois pés.",
        "O risco vem de você não saber o que está fazendo.",
        "Investir deve ser como ver a grama crescer; exige tempo e paciência.",
        "O juro composto é a força mais poderosa do universo financeiro.",
        "O preço é o que você paga; o valor é o que você recebe.",
        "A maioria das pessoas compra na euforia; a investidora compra no silêncio.",
        "Se você não ganha dinheiro enquanto dorme, trabalhará até morrer.",
        "Investir não é sobre bater o mercado, é sobre dominar a si mesma.",
        "Grandes fortunas são sementes plantadas em tempos de crise.",
        "Não coloque todos os ovos na mesma cesta; diversifique sua segurança.",
        "A riqueza real é o que você não vê: são os ativos que trabalham por você.",
        "A disciplina no aporte é o segredo que supera qualquer golpe de sorte.",
        "O lucro é decidido no momento da compra, não na venda.",
        "Seja uma mestre da alocação, não uma escrava da cotação diária.",

        // --- MENTALIDADE E RISCO ---
        "Tenha coragem quando os outros têm medo, e cautela quando todos têm pressa.",
        "O melhor momento para investir foi ontem; o segundo melhor é agora.",
        "O mercado pode ser irracional, mas o seu método deve ser inabalável.",
        "Não tente prever o tempo; aprenda a construir uma arca sólida.",
        "A volatilidade é apenas o preço que se paga pelo crescimento superior.",
        "Nunca invista em algo que você não consiga explicar com simplicidade.",
        "Patrimônio não se olha todo dia; valor se constrói em décadas.",
        "A liquidez é o seu oxigênio em tempos de sufoco no mercado.",
        "Informação é abundante, mas o discernimento é o que vale ouro.",
        "A melhor proteção contra a inflação é a sua capacidade de gerar valor.",
        "Dinheiro é um excelente escravo, mas um mestre impiedoso.",
        "Riqueza não é ter muito dinheiro; é ter muitas opções de escolha.",
        "A liberdade financeira é a habilidade de viver sob seus próprios termos.",
        "O investidor inteligente foca no processo, não na sorte do evento.",
        "Sua mentalidade dita o tamanho da sua carteira.",

        // --- COMPORTAMENTO E PODER ---
        "O conhecimento aplicado paga os melhores dividendos.",
        "Mantenha a mente fria quando os gráficos estiverem vermelhos.",
        "A independência começa com o primeiro real que você decide não gastar.",
        "Vença o impulso do consumo hoje para conquistar a soberania amanhã.",
        "O mercado testa sua convicção a cada oscilação brusca.",
        "Não trabalhe pelo dinheiro; faça o capital trabalhar para você.",
        "A simplicidade na estratégia vence a complexidade na execução.",
        "O sucesso financeiro exige dizer muitos 'nãos' para o imediato.",
        "Seja a capitã do seu capital e a guardiã do seu futuro.",
        "A verdadeira riqueza é o tempo que o dinheiro permite que você recupere.",
        "Construa um legado familiar, não apenas uma conta bancária volumosa.",
        "Sua integridade é o único ativo que não pode ser recomprado.",
        "Invista em seu conhecimento antes de colocar seu dinheiro no jogo.",
        "A sabedoria financeira é a bússola para atravessar tempestades.",
        "Mantenha sua ética tão sólida quanto sua análise de fundamentos.",

        // --- EXCELÊNCIA E LIBERDADE ---
        "A generosidade é o dividendo de uma vida próspera e equilibrada.",
        "O topo da montanha financeira é silencioso e exige sobriedade.",
        "Blindagem patrimonial começa com a blindagem das suas emoções.",
        "O mercado é justo com quem estuda e severo com quem aposta.",
        "Sua carteira de investimentos é o mapa da sua liberdade.",
        "Respeite o dinheiro e ele trabalhará para você com lealdade.",
        "O jogo só termina quando você alcança a independência total.",
        "Investir é a arte de transformar esforço presente em liberdade futura.",
        "Seja a referência de inteligência financeira do seu círculo.",
        "O patrimônio líquido é importante, mas a paz de espírito é o objetivo final.",
        "Aprenda com os ciclos; nada sobe para sempre, nada cai para sempre.",
        "A sobriedade é a marca registrada da investidora de elite.",
        "Mantenha o foco na sua estratégia, não na opinião da manada.",
        "Sua independência é o maior projeto que você executará na vida.",
        "O capital segue a inteligência; torne-se alguém que o capital queira habitar."
    ],
    habitos: {
        nivel1: [ // ESCASSA
            { id: "ia1_1", task: "Registrar todos os gastos do dia", xp: 50 },
            { id: "ia1_2", task: "Identificar e cortar um gasto supérfluo", xp: 60 },
            { id: "ia1_3", task: "Ler 10 páginas de um livro sobre educação financeira", xp: 40 },
            { id: "ia1_4", task: "Estudar a diferença entre ativo e passivo", xp: 50 },
            { id: "ia1_5", task: "Definir um valor fixo para o próximo aporte", xp: 70 },
            { id: "ia1_6", task: "Não utilizar o crédito para gastos de consumo hoje", xp: 40 }
        ],
        nivel2: [ // POUPADORA
            { id: "ia2_1", task: "Transferir capital para a reserva de emergência", xp: 100 },
            { id: "ia2_2", task: "Pesquisar o rendimento do seu banco vs CDI", xp: 50 },
            { id: "ia2_3", task: "Organizar as finanças em uma planilha ou app", xp: 60 },
            { id: "ia2_4", task: "Negar um desejo de compra imediata", xp: 80 },
            { id: "ia2_5", task: "Assistir a uma aula sobre fundamentos financeiros", xp: 40 },
            { id: "ia2_6", task: "Revisar assinaturas e taxas bancárias inúteis", xp: 70 }
        ],
        nivel3: [ // RENTISTA
            { id: "ia3_1", task: "Realizar aporte em Renda Fixa (CDB, Tesouro)", xp: 150 },
            { id: "ia3_2", task: "Comparar taxas entre duas corretoras", xp: 80 },
            { id: "ia3_3", task: "Entender o impacto da inflação no seu poder de compra", xp: 60 },
            { id: "ia3_4", task: "Calcular seu patrimônio líquido total atual", xp: 100 },
            { id: "ia3_5", task: "Reinvestir um rendimento recebido", xp: 120 },
            { id: "ia3_6", task: "Estudar o conceito de marcação a mercado", xp: 90 }
        ],
        nivel4: [ // ACIONISTA
            { id: "ia4_1", task: "Analisar o balanço simplificado de uma empresa", xp: 150 },
            { id: "ia4_2", task: "Comprar uma ação com foco no longo prazo", xp: 200 },
            { id: "ia4_3", task: "Estudar setores perenes (Energia, Bancos, Saneamento)", xp: 100 },
            { id: "ia4_4", task: "Definir sua estratégia: foco em dividendos ou valor?", xp: 120 },
            { id: "ia4_5", task: "Não checar cotações durante o horário de pregão", xp: 150 },
            { id: "ia4_6", task: "Entender o significado de P/L e Dividend Yield", xp: 80 }
        ],
        nivel5: [ // COTISTA
            { id: "ia5_1", task: "Ler o relatório gerencial de um fundo imobiliário", xp: 150 },
            { id: "ia5_2", task: "Comprar cotas de um FII para gerar renda passiva", xp: 200 },
            { id: "ia5_3", task: "Diversificar a carteira em uma nova classe de ativos", xp: 250 },
            { id: "ia5_4", task: "Calcular seu 'número da liberdade' (quanto precisa para parar)", xp: 100 },
            { id: "ia5_5", task: "Ignorar notícias sensacionalistas sobre o mercado", xp: 200 },
            { id: "ia5_6", task: "Revisar o percentual de cada ativo na carteira", xp: 150 }
        ],
        nivel6: [ // ESPECULADORA
            { id: "ia6_1", task: "Estudar análise técnica ou ciclos de mercado por 30 min", xp: 200 },
            { id: "ia6_2", task: "Definir um limite de perda (Stop) para uma operação", xp: 250 },
            { id: "ia6_3", task: "Realizar uma operação tática de curto prazo", xp: 300 },
            { id: "ia6_4", task: "Manter o equilíbrio emocional após uma oscilação negativa", xp: 400 },
            { id: "ia6_5", task: "Estudar o funcionamento de opções ou derivativos", xp: 150 },
            { id: "ia6_6", task: "Anotar o aprendizado de um erro operacional", xp: 180 }
        ],
        nivel7: [ // VISIONÁRIA
            { id: "ia7_1", task: "Estudar um novo setor disruptivo (IA, Cripto, Tech)", xp: 300 },
            { id: "ia7_2", task: "Realizar um aporte em moeda estrangeira (Dolarizar)", xp: 400 },
            { id: "ia7_3", task: "Identificar uma megatendência econômica global", xp: 350 },
            { id: "ia7_4", task: "Trocar teses de investimento com outra investidora", xp: 200 },
            { id: "ia7_5", task: "Planejar uma nova fonte de renda extra para aporte", xp: 500 },
            { id: "ia7_6", task: "Estudar os grandes ciclos econômicos da história", xp: 250 }
        ],
        nivel8: [ // VENTURE
            { id: "ia8_1", task: "Avaliar o Business Plan de um novo projeto ou startup", xp: 500 },
            { id: "ia8_2", task: "Investir em um curso ou mentoria de alto nível", xp: 600 },
            { id: "ia8_3", task: "Assumir um risco calculado com potencial assimétrico", xp: 700 },
            { id: "ia8_4", task: "Mentorizar alguém que deseja começar a investir", xp: 400 },
            { id: "ia8_5", task: "Analisar oportunidades no mercado de 'Private Equity'", xp: 450 },
            { id: "ia8_6", task: "Praticar o desapego emocional do montante investido", xp: 500 }
        ],
        nivel9: [ // INVESTIDORA
            { id: "ia9_1", task: "Realizar o rebalanceamento técnico da carteira", xp: 800 },
            { id: "ia9_2", task: "Ajustar alocação para maior preservação de capital", xp: 600 },
            { id: "ia9_3", task: "Tomar uma decisão financeira estratégica para 10 anos", xp: 900 },
            { id: "ia9_4", task: "Manter a calma absoluta em um dia de 'Crash'", xp: 1500 },
            { id: "ia9_5", task: "Estudar estruturas jurídicas de proteção patrimonial", xp: 700 },
            { id: "ia9_6", task: "Manter a discrição total sobre seus ganhos", xp: 1000 }
        ],
        nivel10: [ // INDEPENDENTE
            { id: "ia10_1", task: "Alcançar a meta de patrimônio para viver de rendimentos", xp: 5000 },
            { id: "ia10_2", task: "Exercer soberania total sobre a agenda e o tempo", xp: 3000 },
            { id: "ia10_3", task: "Ser fonte de capital para projetos de alto impacto", xp: 2000 },
            { id: "ia10_4", task: "Consolidar a blindagem e sucessão do legado", xp: 2500 },
            { id: "ia10_5", task: "Influenciar o mercado com sua visão ética e técnica", xp: 1500 },
            { id: "ia10_6", task: "Manter o estado de espírito inabalável e próspero", xp: 2000 }
        ]
    }
};
