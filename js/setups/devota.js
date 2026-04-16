const devotaData = {
    setup: "devota",
    cor: "#5c2d5c",
    ranks: [
        "Inquieta",      // Nível 1: Mente dispersa e falta de centro
        "Buscadora",     // Nível 2: Início da busca por silêncio e sentido
        "Praticante",    // Nível 3: Estabelecimento de rotina contemplativa
        "Asceta",        // Nível 4: Disciplina dos sentidos e renúncia
        "Servidora",     // Nível 5: O foco no auxílio e amor ao próximo
        "Discípula",     // Nível 6: Estudo profundo e aplicação de virtudes
        "Guardiã",       // Nível 7: Consistência e proteção dos valores
        "Contemplativa", // Nível 8: Domínio emocional e presença constante
        "Iluminada",     // Nível 9: Referência de paz e sabedoria
        "Mestra de Si"   // Nível 10: Transcendência do ego e união espiritual
    ],
    quotes: [
        // --- CONEXÃO E INTERIORIDADE ---
        "A verdadeira paz não é a ausência de ruído, mas a ordem interna.",
        "Sua conexão com o sagrado é o que sustenta seus pés no chão.",
        "O silêncio é o útero onde a sabedoria é gerada.",
        "Cada ato de bondade é uma prece sem palavras.",
        "A devoção é a disciplina de manter o coração voltado para o alto.",
        "Busque a luz dentro de si para poder iluminar os que estão ao redor.",
        "A gratidão é a chave que abre as portas do contentamento real.",
        "Não busque o sagrado apenas nos templos, mas em cada respiração consciente.",
        "Sua vida é o altar; sua conduta é a oferenda.",
        "A fé é a certeza do que a alma já sabe, mas os olhos ainda não veem.",
        "A paciência com o tempo do universo é a prova da sua entrega.",
        "Mantenha-se centrada quando o mundo ao redor estiver em caos.",
        "Onde houver verdade, ali habita a presença do absoluto.",
        "A prática diária é o que diferencia o desejo da verdadeira transformação.",
        "A beleza da alma reflete a profundidade da sua conexão espiritual.",

        // --- VIRTUDE E AUTODOMÍNIO ---
        "Domar o ego é a batalha mais nobre que uma mulher pode lutar.",
        "A força de uma devota nasce da sua submissão a princípios superiores.",
        "A retidão no agir vale mais que mil discursos sobre a fé.",
        "O jejum da mente é recusar-se a nutrir pensamentos de discórdia.",
        "A disciplina é a liberdade de não ser escrava dos próprios impulsos.",
        "Sê firme como a montanha e fluida como o rio.",
        "A integridade é o único solo onde a paz duradoura pode florescer.",
        "Onde há humildade, a sabedoria encontra espaço para morar.",
        "A verdade é o escudo que protege o espírito em tempos de ilusão.",
        "Mantenha sua lâmpada acesa através da vigília e da oração interna.",
        "Não temas as provas; elas são o fogo que purifica o ouro da alma.",
        "O autocontrole é o adorno mais precioso de uma devota.",
        "A palavra dita com intenção pura tem o poder de curar ambientes.",
        "Sê pequena para o mundo e grande para o seu propósito.",
        "A constância nas pequenas virtudes constrói a santidade do caráter.",

        // --- AMOR E SERVIÇO ---
        "O amor desinteressado é a forma mais alta de inteligência espiritual.",
        "Servir ao próximo é tocar a face do infinito.",
        "Seja o consolo para a dor alheia e encontrará o seu próprio alívio.",
        "O trabalho feito com amor transforma o suor em luz.",
        "A compaixão é a ponte que une todos os corações.",
        "Não busque ser servida, busque ser útil; nisso reside a verdadeira paz.",
        "O ato de perdoar é a libertação final de um espírito cativo.",
        "A doçura no trato é a prova da sua força interior.",
        "Sacrifique o seu conforto se isso for necessário para agir com justiça.",
        "Onde houver ódio, sê tu o instrumento que semeia a concórdia.",
        "A verdadeira caridade não deixa rastro; ela é feita em segredo.",
        "Seja a mão que sustenta e o coração que compreende.",
        "Sua presença deve ser um bálsamo para os que estão aflitos.",
        "A bondade é a linguagem que o espírito fala fluentemente.",
        "No final, seremos julgadas apenas pelo quanto fomos capazes de amar.",

        // --- TRANSCENDÊNCIA E PERSEVERANÇA ---
        "O espírito não envelhece; ele se renova através da conexão diária.",
        "Mantenha os olhos no horizonte eterno enquanto caminha no agora.",
        "A adversidade é a ferramenta que lapida as arestas do ego.",
        "Nada pode abalar aquela que já entregou o seu caminho à verdade.",
        "A perseverança é a forma mais pura de fé em ação.",
        "O silêncio contemplativo é o alimento da alma sedenta.",
        "Não se deixe levar pelo aplauso ou pela crítica; ambos são passageiros.",
        "Estude a sabedoria dos mestres, mas viva a sua própria verdade.",
        "A clareza espiritual é o prêmio daquelas que não temem o próprio vazio.",
        "Viva de tal forma que sua existência seja um convite ao sagrado.",
        "O temor da própria consciência é a bússola que impede o erro.",
        "A gratidão transforma o pouco em suficiente e o deserto em jardim.",
        "A entrega absoluta é a chave para a paz que excede o entendimento.",
        "Seja a rocha de serenidade onde as ondas do mundo se acalmam.",
        "Onde você estiver, que a luz da sua intenção seja sentida por todos."
    ],
    habitos: {
        nivel1: [ // INQUIETA
            { id: "dv1_1", task: "5 min de silêncio absoluto ao acordar", xp: 40 },
            { id: "dv1_2", task: "Anotar 3 motivos de gratidão hoje", xp: 30 },
            { id: "dv1_3", task: "Evitar telas nos primeiros 15 min do dia", xp: 50 },
            { id: "dv1_4", task: "Ler 2 páginas de um texto inspirador/filosófico", xp: 40 },
            { id: "dv1_5", task: "Beber água com a intenção de clareza", xp: 20 },
            { id: "dv1_6", task: "Arrumar seu espaço pessoal de reflexão", xp: 30 }
        ],
        nivel2: [ // BUSCADORA
            { id: "dv2_1", task: "10 min de meditação ou conexão interna", xp: 60 },
            { id: "dv2_2", task: "Identificar um hábito mental ruim e detê-lo", xp: 50 },
            { id: "dv2_3", task: "Refletir sobre sua intenção para o dia (5 min)", xp: 40 },
            { id: "dv2_4", task: "Realizar uma tarefa com total atenção plena", xp: 60 },
            { id: "dv2_5", task: "Evitar palavras de reclamação por 12h", xp: 70 },
            { id: "dv2_6", task: "Conectar-se com o sagrado antes de dormir", xp: 50 }
        ],
        nivel3: [ // PRATICANTE
            { id: "dv3_1", task: "15 min de prática contemplativa profunda", xp: 80 },
            { id: "dv3_2", task: "Estudar 20 min sobre virtudes ou sabedoria", xp: 70 },
            { id: "dv3_3", task: "Jejum de algo supérfluo (doce, rede social)", xp: 100 },
            { id: "dv3_4", task: "Agradecer verbalmente a quem lhe serviu", xp: 60 },
            { id: "dv3_5", task: "Manter a postura e o sorriso diante de um tédio", xp: 50 },
            { id: "dv3_6", task: "Organizar seus pensamentos em um diário", xp: 60 }
        ],
        nivel4: [ // ASCETA
            { id: "dv4_1", task: "Banho frio para fortalecer a vontade", xp: 120 },
            { id: "dv4_2", task: "Permanecer 30 min em silêncio total", xp: 100 },
            { id: "dv4_3", task: "Comer apenas o necessário, sem gulas", xp: 110 },
            { id: "dv4_4", task: "Observar um impulso e não reagir a ele", xp: 140 },
            { id: "dv4_5", task: "Abster-se de futilidades por 6 horas", xp: 150 },
            { id: "dv4_6", task: "Fazer uma renúncia pessoal em favor de outro", xp: 130 }
        ],
        nivel5: [ // SERVIDORA
            { id: "dv5_1", task: "Praticar um ato de caridade anônimo", xp: 200 },
            { id: "dv5_2", task: "Ouvir o desabafo de alguém com total foco", xp: 150 },
            { id: "dv5_3", task: "Ajudar em uma tarefa árdua sem que peçam", xp: 180 },
            { id: "dv5_4", task: "Dedicar suas ações do dia a um bem maior", xp: 120 },
            { id: "dv5_5", task: "Palavras de conforto a um desconhecido", xp: 100 },
            { id: "dv5_6", task: "Ceder a preferência em algo que desejava", xp: 250 }
        ],
        nivel6: [ // DISCÍPULA
            { id: "dv6_1", task: "Memorizar um ensinamento ou verso de luz", xp: 150 },
            { id: "dv6_2", task: "Aplicar paciência extrema em um conflito", xp: 300 },
            { id: "dv6_3", task: "Estudar a vida de uma figura espiritual inspiradora", xp: 200 },
            { id: "dv6_4", task: "Escrever uma autoanálise honesta do dia", xp: 180 },
            { id: "dv6_5", task: "Ensinar um valor a alguém através do exemplo", xp: 250 },
            { id: "dv6_6", task: "Manter a paz interior sob provocação", xp: 300 }
        ],
        nivel7: [ // GUARDIÃ
            { id: "dv7_1", task: "Manter a rotina de prática sem exceções", xp: 400 },
            { id: "dv7_2", task: "Defender um valor moral diante de críticas", xp: 500 },
            { id: "dv7_3", task: "Permanecer 1h em vigília ou meditação", xp: 450 },
            { id: "dv7_4", task: "Organizar um momento de paz coletiva", xp: 350 },
            { id: "dv7_5", task: "Liderar pelo silêncio e pela serenidade", xp: 400 },
            { id: "dv7_6", task: "Fazer um sacrifício pessoal por um princípio", xp: 600 }
        ],
        nivel8: [ // CONTEMPLATIVA
            { id: "dv8_1", task: "Ver o sagrado em uma situação difícil", xp: 500 },
            { id: "dv8_2", task: "Agir sem qualquer desejo de reconhecimento", xp: 600 },
            { id: "dv8_3", task: "Manter estado de presença por 3 horas", xp: 700 },
            { id: "dv8_4", task: "Dissolver sentimentos negativos meditando", xp: 500 },
            { id: "dv8_5", task: "Agradecer por um desafio que lhe fez crescer", xp: 450 },
            { id: "dv8_6", task: "Sentir a conexão com o todo por 20 min", xp: 550 }
        ],
        nivel9: [ // ILUMINADA
            { id: "dv9_1", task: "Ser o porto seguro para alguém em dor", xp: 800 },
            { id: "dv9_2", task: "Paciência absoluta com a ignorância alheia", xp: 700 },
            { id: "dv9_3", task: "Irradiar intenções de paz para o mundo", xp: 600 },
            { id: "dv9_4", task: "Agir com amor onde há falta dele", xp: 900 },
            { id: "dv9_5", task: "Inspirar ordem e calma em um grupo tenso", xp: 800 },
            { id: "dv9_6", task: "Manter a mente livre de julgamentos por 1h", xp: 750 }
        ],
        nivel10: [ // MESTRA DE SI
            { id: "dv10_1", task: "Perdão radical a um ofensor do passado", xp: 1500 },
            { id: "dv10_2", task: "Viver um dia em total entrega ao propósito", xp: 1000 },
            { id: "dv10_3", task: "Transcender o sofrimento através da fé", xp: 1200 },
            { id: "dv10_4", task: "Ser a referência máxima de virtude do clã", xp: 1100 },
            { id: "dv10_5", task: "Silenciar o próprio ego diante do triunfo", xp: 1300 },
            { id: "dv10_6", task: "Garantir que sua luz eleve todos ao redor", xp: 1500 }
        ]
    }
};
