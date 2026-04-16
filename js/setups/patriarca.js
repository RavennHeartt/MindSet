const patriarcaData = {
    setup: "patriarca",
    cor: "#002b5c",
    ranks: [
        "Garoto",            // Nível 1: Correção de vícios e dependência
        "Aspirante",         // Nível 2: Busca por direção e autodomínio
        "Vigia",             // Nível 3: Proteção do ambiente imediato
        "Provedor",          // Nível 4: Geração de valor e sustento
        "Guardião",          // Nível 5: Defesa da moral e segurança
        "Pilar",             // Nível 6: Suporte e estrutura emocional
        "Líder de Clã",      // Nível 7: Gestão de pessoas e justiça
        "Mentor",            // Nível 8: Transmissão de experiência
        "Legatário",         // Nível 9: Referência viva da linhagem
        "Patriarca"          // Nível 10: Fundação do legado e rocha final
    ],
        quotes: [
        // --- FUNDAMENTOS E HONRA ---
        "Um homem que não cuida de sua família nunca será um homem de verdade.",
        "O exemplo move mais que as palavras.",
        "Sua palavra deve ser um contrato inquebrável.",
        "Honra não é o que dizem de você, mas o que você sabe sobre si mesmo.",
        "A força de um homem é medida pelo que ele suporta, não pelo que ele esmaga.",
        "O caráter é o que você faz quando ninguém está olhando.",
        "Homens medíocres culpam o mundo; patriarcas constroem o seu próprio.",
        "A integridade de um lar começa na disciplina do seu líder.",
        "Sê firme como a rocha e justo como a balança.",
        "A liberdade de um homem termina onde começa sua responsabilidade.",
        "Um patriarca não busca aplausos, busca resultados para os seus.",
        "A maior herança é o nome limpo e a virtude sólida.",
        "Trabalhe em silêncio; deixe que a estabilidade da sua casa seja o seu ruído.",
        "O tempo é o recurso mais caro de um provedor; não o desperdice com futilidades.",
        "A dignidade não se compra, conquista-se com constância.",

        // --- FAMÍLIA E LEGADO ---
        "O patriarca não governa para o presente, mas para gerações que ainda não nasceram.",
        "Proteja o sono daqueles que dependem de você.",
        "A mesa de um patriarca é o lugar onde a ordem se estabelece.",
        "O legado não é o que você deixa para eles, mas o que deixa neles.",
        "Seja o porto seguro em meio à tempestade familiar.",
        "Um lar sem direção é uma nau à deriva.",
        "Educar pelo medo é fraqueza; educar pelo respeito é autoridade.",
        "Sua esposa deve ser sua rainha, não sua serva; seu filho, seu sucessor, não sua cópia.",
        "A árvore que dá sombra hoje foi plantada por alguém que não se importou em não colher os frutos.",
        "O nome da sua família é o seu maior patrimônio.",
        "Seja a referência que você não teve.",
        "Onde há um patriarca presente, a desordem não cria raízes.",
        "Não basta prover o pão; é preciso prover a direção.",
        "O afeto de um pai é o alicerce da coragem de um filho.",
        "Uma família forte é a unidade básica de uma nação indestrutível.",

        // --- DISCIPLINA E LIDERANÇA ---
        "Liderar é servir àqueles que dependem de você.",
        "A disciplina é a liberdade de não ser escravo dos próprios desejos.",
        "Domine a si mesmo antes de tentar dominar o seu destino.",
        "O cansaço é temporário; a negligência é permanente.",
        "Seja o primeiro a acordar e o último a descansar.",
        "Um líder de clã ouve o dobro do que fala.",
        "A justiça sem misericórdia é tirania; a misericórdia sem justiça é fraqueza.",
        "Mantenha a calma quando todos ao seu redor perderem a deles.",
        "A rotina é a armadura do homem de propósito.",
        "Pequenas renúncias diárias constroem grandes destinos.",
        "Onde quer que você esteja, esteja lá por inteiro.",
        "A dúvida recua diante da ação disciplinada.",
        "Não espere por motivação; apoie-se na disciplina.",
        "O verdadeiro comando nasce do exemplo, não do grito.",
        "O fracasso é apenas um dado; a desistência é o fim da linha.",

        // --- PROVIMENTO E SABEDORIA ---
        "A sabedoria edifica a casa; a prudência a mantém em pé.",
        "Prover não é apenas pagar contas; é garantir a paz.",
        "O silêncio é o ornamento de um homem prudente.",
        "Saiba quando lutar e, mais importante, saiba por quem lutar.",
        "O excesso de conforto amolece o espírito do sucessor.",
        "A economia é o fundamento da independência.",
        "Não se deixe levar pelas emoções do momento; olhe para o horizonte.",
        "A maturidade é aceitar que nem tudo é sobre você.",
        "Um homem sábio constrói sobre a rocha; o tolo, sobre a aprovação alheia.",
        "A coragem não é a ausência de medo, mas o domínio sobre ele.",
        "Fale a verdade, mesmo que sua voz trema.",
        "A cortesia é o óleo que lubrifica as engrenagens da convivência.",
        "O patriarca é o arquiteto do futuro da sua linhagem.",
        "Não confunda ser amado com ser respeitado; busque o segundo e terá o primeiro.",
        "Sua casa deve ser um templo de ordem em um mundo de caos.",

        // [Repetir e variar temas até completar os 300 IDs...]
    ],
    habitos: {
        nivel1: [ // GAROTO
            { id: "p1_1", task: "Acordar antes de todos da casa", xp: 50 },
            { id: "p1_2", task: "Arrumar a cama perfeitamente", xp: 30 },
            { id: "p1_3", task: "Higiene pessoal impecável (Barba/Dentes)", xp: 30 },
            { id: "p1_4", task: "Arrumar uma bagunça que não fez", xp: 40 },
            { id: "p1_5", task: "Não reclamar de tarefas domésticas", xp: 50 },
            { id: "p1_6", task: "Beber 500ml de água em jejum", xp: 20 }
        ],
        nivel2: [ // ASPIRANTE
            { id: "p2_1", task: "Elogiar sinceramente um familiar", xp: 50 },
            { id: "p2_2", task: "Ler 15 min sobre história ou valores", xp: 40 },
            { id: "p2_3", task: "Manter postura ereta o dia todo", xp: 30 },
            { id: "p2_4", task: "Escutar sem interromper ninguém", xp: 50 },
            { id: "p2_5", task: "Planejar as 3 metas do próximo dia", xp: 40 },
            { id: "p2_6", task: "Evitar gírias e palavras de baixo calão", xp: 60 }
        ],
        nivel3: [ // VIGIA
            { id: "p3_1", task: "Checar trancas e segurança à noite", xp: 40 },
            { id: "p3_2", task: "Limpar ou organizar um cômodo comum", xp: 60 },
            { id: "p3_3", task: "Praticar 20 min de exercício físico", xp: 70 },
            { id: "p3_4", task: "Identificar uma necessidade da casa e suprir", xp: 80 },
            { id: "p3_5", task: "Sentar-se à mesa sem o celular", xp: 60 },
            { id: "p3_6", task: "Observar o humor de cada familiar hoje", xp: 50 }
        ],
        nivel4: [ // PROVEDOR
            { id: "p4_1", task: "Registrar todos os gastos da casa", xp: 100 },
            { id: "p4_2", task: "Eliminar um desperdício financeiro", xp: 120 },
            { id: "p4_3", task: "Trabalhar 1h extra focado no futuro", xp: 150 },
            { id: "p4_4", task: "Comprar algo útil para alguém sem pedirem", xp: 100 },
            { id: "p4_5", task: "Organizar a despensa ou estoque", xp: 80 },
            { id: "p4_6", task: "Pagar uma conta antes do vencimento", xp: 70 }
        ],
        nivel5: [ // GUARDIÃO
            { id: "p5_1", task: "Treinar vigor físico ou defesa (40min)", xp: 150 },
            { id: "p5_2", task: "Conversa difícil com autoridade e calma", xp: 180 },
            { id: "p5_3", task: "Proibir um hábito ruim no seu ambiente", xp: 200 },
            { id: "p5_4", task: "Proteger o sono da família (Silêncio)", xp: 120 },
            { id: "p5_5", task: "Assumir a responsabilidade por um erro", xp: 200 },
            { id: "p5_6", task: "Manter-se firme diante de um imprevisto", xp: 250 }
        ],
        nivel6: [ // PILAR
            { id: "p6_1", task: "Ser o último a comer e o primeiro a servir", xp: 150 },
            { id: "p6_2", task: "Calma absoluta em discussão familiar", xp: 200 },
            { id: "p6_3", task: "Dar suporte a alguém que falhou", xp: 180 },
            { id: "p6_4", task: "Sacrifício pessoal em favor do bem comum", xp: 200 },
            { id: "p6_5", task: "Manter a palavra em algo difícil hoje", xp: 250 },
            { id: "p6_6", task: "Consertar algo quebrado no lar", xp: 100 }
        ],
        nivel7: [ // LÍDER DE CLÃ
            { id: "p7_1", task: "Resolver um conflito com justiça", xp: 350 },
            { id: "p7_2", task: "Ensinar habilidade prática a um mais novo", xp: 200 },
            { id: "p7_3", task: "Planejar orçamento familiar (6 meses)", xp: 400 },
            { id: "p7_4", task: "Honrar a memória de um antepassado", xp: 150 },
            { id: "p7_5", task: "Tomar decisão difícil de longo prazo", xp: 500 },
            { id: "p7_6", task: "Reunir o clã para alinhamento/refeição", xp: 300 }
        ],
        nivel8: [ // MENTOR
            { id: "p8_1", task: "Corrigir alguém com sabedoria (Privado)", xp: 300 },
            { id: "p8_2", task: "Delegar responsabilidade e supervisionar", xp: 250 },
            { id: "p8_3", task: "Estudar sobre psicologia ou liderança", xp: 200 },
            { id: "p8_4", task: "Dar conselho a quem precisa de direção", xp: 300 },
            { id: "p8_5", task: "Identificar talentos em um familiar", xp: 150 },
            { id: "p8_6", task: "Estar disponível para ouvir por 1h", xp: 200 }
        ],
        nivel9: [ // LEGATÁRIO
            { id: "p9_1", task: "Documentar uma tradição ou receita", xp: 400 },
            { id: "p9_2", task: "Investir em algo que não colherá hoje", xp: 600 },
            { id: "p9_3", task: "Agir como o referencial de paz da casa", xp: 500 },
            { id: "p9_4", task: "Preservar o patrimônio material do clã", xp: 450 },
            { id: "p9_5", task: "Demonstrar conduta impecável sob pressão", xp: 700 },
            { id: "p9_6", task: "Fortalecer o nome da família na comunidade", xp: 300 }
        ],
        nivel10: [ // PATRIARCA
            { id: "p10_1", task: "Ato de perdão supremo (Limpar o passado)", xp: 1000 },
            { id: "p10_2", task: "Definir a visão da linhagem (Próximos anos)", xp: 800 },
            { id: "p10_3", task: "Sustentar a todos com sua presença", xp: 900 },
            { id: "p10_4", task: "Garantir a sucessão de seus valores", xp: 700 },
            { id: "p10_5", task: "Exercer autoridade máxima com amor", xp: 800 },
            { id: "p10_6", task: "Ser a rocha inabalável do ambiente", xp: 1000 }
        ]
    }
};
