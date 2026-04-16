const cavalheiroData = {
    setup: "cavalheiro",
    cor: "#3d2b1f",
    ranks: [
        "Bruto",         // Nível 1: Higiene e civilidade básica
        "Aprendiz",      // Nível 2: Observação e pontualidade
        "Cortês",        // Nível 3: Gentileza e escuta ativa
        "Ajustado",      // Nível 4: Apresentação e ordem pessoal
        "Distinto",      // Nível 5: Presença e destaque social
        "Diplomata",     // Nível 6: Resolução de conflitos e tato
        "Honrado",       // Nível 7: Integridade e valor da palavra
        "Cavalheiro",    // Nível 8: O equilíbrio entre força e doçura
        "Eminência",     // Nível 9: Referência de classe e influência
        "Lorde"          // Nível 10: Nobreza de espírito e exemplo máximo
    ],
        quotes: [
        // --- CONDUTA E ETIQUETA ---
        "Maneiras fazem o homem.",
        "A verdadeira nobreza é ser superior ao seu antigo eu.",
        "Estar bem vestido é uma forma de boas maneiras.",
        "Um cavalheiro é alguém que nunca fere os sentimentos de ninguém sem querer.",
        "A cortesia é o óleo que lubrifica as engrenagens da sociedade.",
        "Sua postura diz quem você é antes mesmo de você abrir a boca.",
        "A elegância não é notar que você chegou, mas sim lembrar que você esteve lá.",
        "Maneiras são a hipocrisia das nações, mas a decência dos indivíduos.",
        "O respeito é a base de toda influência duradoura.",
        "Saber ouvir é uma arte que poucos cavalheiros dominam.",
        "A pontualidade é a cortesia dos reis e o dever dos homens de honra.",
        "Trate o porteiro com o mesmo respeito que trata o presidente.",
        "A mesa revela o nível de civilidade de um homem.",
        "A verdadeira classe é silenciosa; o desespero por atenção é barulhento.",
        "Sê impecável nas palavras e discreto nas ações.",

        // --- CARÁTER E HONRA ---
        "Honra é fazer o que é certo, não o que é fácil.",
        "Um cavalheiro mantém sua palavra mesmo que isso lhe custe caro.",
        "A integridade de um homem não está no que ele diz, mas no que ele sustenta.",
        "A coragem de um cavalheiro é calma; seu medo é privado.",
        "Defenda quem não pode se defender.",
        "Sua reputação é o que os outros pensam; seu caráter é quem você é.",
        "Um homem de classe não se rebaixa a discussões inúteis.",
        "A força sem polimento é apenas brutalidade.",
        "A justiça deve ser a bússola de toda conduta social.",
        "Humildade não é pensar menos de si, mas pensar menos em si.",
        "O perdão é a forma mais alta de elegância espiritual.",
        "Não busque ser melhor que os outros, busque ser melhor que ontem.",
        "A dignidade é o único traje que nunca sai de moda.",
        "Um lorde é mestre de seus impulsos, não escravo deles.",
        "A honra perdida raramente é recuperada pelo mesmo caminho.",

        // --- PRESENÇA E INFLUÊNCIA ---
        "Fale com suavidade, mas carregue um caráter firme.",
        "A paciência é o adorno final de um homem de classe.",
        "O silêncio é, muitas vezes, a resposta mais elegante disponível.",
        "Influência se ganha com exemplo, não com imposição.",
        "Um cavalheiro sabe entrar e sair de qualquer ambiente com a mesma dignidade.",
        "A discrição é a melhor parte da inteligência social.",
        "O carisma de um cavalheiro nasce do interesse genuíno pelo próximo.",
        "Mantenha a calma quando todos ao seu redor estiverem perdendo a deles.",
        "Saber discordar sem ser desagradável é o ápice da diplomacia.",
        "A confiança é silenciosa; a arrogância é escandalosa.",
        "Sua presença deve trazer ordem e paz ao ambiente.",
        "O vestuário é a armadura para sobreviver à realidade da vida cotidiana.",
        "Um aperto de mão diz mais sobre um homem do que mil currículos.",
        "Sê breve na fala e profundo no significado.",
        "A autoridade de um lorde é sentida, nunca anunciada.",

        // --- ESTILO DE VIDA E MAESTRIA ---
        "Elegância é a única beleza que nunca mofará.",
        "A simplicidade é o último grau da sofisticação.",
        "Um cavalheiro cuida do seu corpo como o templo da sua vontade.",
        "O conhecimento é o melhor acessório que um homem pode carregar.",
        "Domine a etiqueta para saber exatamente quando quebrá-la.",
        "O lazer de um cavalheiro deve ser tão refinado quanto o seu trabalho.",
        "Cultura e educação são as moedas que não desvalorizam.",
        "Seja o anfitrião que todos desejam visitar.",
        "O bom gosto é uma questão de educação e observação.",
        "Não se deixe levar por modismos; a tradição é a âncora do estilo.",
        "A clareza mental é o resultado de um ambiente e rotina organizados.",
        "A excelência é um hábito, não um ato isolado.",
        "Cuide dos detalhes, e o todo cuidará de si mesmo.",
        "Um cavalheiro nunca se sente grande demais para aprender algo novo.",
        "A vida é muito curta para não ser vivida com classe."
    ],
    habitos: {
        nivel1: [ // BRUTO
            { id: "c1_1", task: "Engraxar ou limpar os calçados", xp: 40 },
            { id: "c1_2", task: "Pentear o cabelo e alinhar a barba", xp: 30 },
            { id: "c1_3", task: "Pedir licença, por favor e obrigado (10x)", xp: 50 },
            { id: "c1_4", task: "Não usar gírias grosseiras hoje", xp: 60 },
            { id: "c1_5", task: "Manter unhas limpas e aparadas", xp: 30 },
            { id: "c1_6", task: "Higiene bucal impecável (Fio dental)", xp: 40 }
        ],
        nivel2: [ // APRENDIZ
            { id: "c2_1", task: "Cumprimentar as pessoas pelo nome", xp: 50 },
            { id: "c2_2", task: "Chegar 5 minutos antes em compromissos", xp: 60 },
            { id: "c2_3", task: "Sentar-se com a coluna ereta", xp: 40 },
            { id: "c2_4", task: "Ler 10 min sobre etiqueta ou oratória", xp: 50 },
            { id: "c2_5", task: "Organizar carteira e documentos", xp: 40 },
            { id: "c2_6", task: "Celular guardado durante conversas", xp: 70 }
        ],
        nivel3: [ // CORTÊS
            { id: "c3_1", task: "Abrir a porta para alguém passar", xp: 50 },
            { id: "c3_2", task: "Oferecer o lugar a quem precisa", xp: 60 },
            { id: "c3_3", task: "Elogiar o trabalho de alguém sinceramente", xp: 50 },
            { id: "c3_4", task: "Escutar sem interromper ninguém hoje", xp: 80 },
            { id: "c3_5", task: "Manter tom de voz baixo e controlado", xp: 60 },
            { id: "c3_6", task: "Ceder a vez em filas ou no trânsito", xp: 50 }
        ],
        nivel4: [ // AJUSTADO
            { id: "c4_1", task: "Combinar as cores do cinto e sapato", xp: 50 },
            { id: "c4_2", task: "Escrever uma nota/mensagem de gratidão", xp: 80 },
            { id: "c4_3", task: "Manter o ambiente pessoal organizado", xp: 60 },
            { id: "c4_4", task: "Não se queixar de trivialidades", xp: 70 },
            { id: "c4_5", task: "Utilizar uma fragrância discreta", xp: 40 },
            { id: "c4_6", task: "Preparar a roupa do dia seguinte à noite", xp: 50 }
        ],
        nivel5: [ // DISTINTO
            { id: "c5_1", task: "Ajudar alguém com pacotes ou malas", xp: 80 },
            { id: "c5_2", task: "Manter contato visual firme e gentil", xp: 60 },
            { id: "c5_3", task: "Vestir-se um nível acima do ambiente", xp: 100 },
            { id: "c5_4", task: "Fazer um aperto de mão seguro e breve", xp: 40 },
            { id: "c5_5", task: "Não falar mal de ninguém ausente", xp: 150 },
            { id: "c5_6", task: "Beber água entre outras bebidas", xp: 50 }
        ],
        nivel6: [ // DIPLOMATA
            { id: "c6_1", task: "Mediar uma discordância com calma", xp: 200 },
            { id: "c6_2", task: "Ignorar uma ofensa ou grosseria alheia", xp: 250 },
            { id: "c6_3", task: "Encontrar um ponto comum em uma discussão", xp: 180 },
            { id: "c6_4", task: "Fazer uma crítica construtiva em particular", xp: 150 },
            { id: "c6_5", task: "Pedir desculpas por um erro imediatamente", xp: 120 },
            { id: "c6_6", task: "Saber dizer 'não' com extrema cortesia", xp: 200 }
        ],
        nivel7: [ // HONRADO
            { id: "c7_1", task: "Cumprir uma promessa difícil hoje", xp: 400 },
            { id: "c7_2", task: "Defender alguém que está sendo injustiçado", xp: 350 },
            { id: "c7_3", task: "Agir com ética onde ninguém está vendo", xp: 500 },
            { id: "c7_4", task: "Recusar uma vantagem desonesta", xp: 600 },
            { id: "c7_5", task: "Honrar um compromisso mesmo sem vontade", xp: 300 },
            { id: "c7_6", task: "Assumir a culpa por uma falha própria", xp: 250 }
        ],
        nivel8: [ // CAVALHEIRO
            { id: "c8_1", task: "Proteger o bem-estar de alguém vulnerável", xp: 300 },
            { id: "c8_2", task: "Retribuir um favor sem que esperem", xp: 200 },
            { id: "c8_3", task: "Liderar pelo exemplo de conduta", xp: 400 },
            { id: "c8_4", task: "Pagar a conta de alguém anonimamente", xp: 500 },
            { id: "c8_5", task: "Demonstrar paciência heroica sob pressão", xp: 350 },
            { id: "c8_6", task: "Ser o anfitrião impecável em um encontro", xp: 250 }
        ],
        nivel9: [ // EMINÊNCIA
            { id: "c9_1", task: "Inspirar alguém a melhorar sua conduta", xp: 500 },
            { id: "c9_2", task: "Agir como referencial de classe no grupo", xp: 600 },
            { id: "c9_3", task: "Mencionar as qualidades de um rival", xp: 450 },
            { id: "c9_4", task: "Preservar a reputação alheia", xp: 400 },
            { id: "c9_5", task: "Dominar um assunto complexo para conversa", xp: 300 },
            { id: "c9_6", task: "Manter a elegância em uma derrota", xp: 700 }
        ],
        nivel10: [ // LORDE
            { id: "c10_1", task: "Perdoar uma ofensa grave com dignidade", xp: 1000 },
            { id: "c10_2", task: "Ser a presença que acalma o ambiente", xp: 800 },
            { id: "c10_3", task: "Garantir que todos ao redor se sintam bem", xp: 900 },
            { id: "c10_4", task: "Viver integralmente seus valores de honra", xp: 1000 },
            { id: "c10_5", task: "Deixar um ambiente melhor do que o encontrou", xp: 700 },
            { id: "c10_6", task: "Agir com nobreza sem esperar reconhecimento", xp: 900 }
        ]
    }
};
