const devotoData = {
    setup: "devoto",
    cor: "#4a0e0e",
    ranks: [
        "Disperso", "Buscador", "Praticante", "Asceta", "Servidor",
        "Discípulo", "Guardião do Rito", "Contemplativo", "Iluminado", "Mestre de Si"
    ],
        quotes: [
        // --- CONEXÃO E PROPÓSITO ---
        "A verdadeira conexão começa onde o ruído do ego termina.",
        "Sua prática diária é o altar onde você sacrifica suas fraquezas.",
        "Não busque apenas o silêncio, busque a voz da consciência dentro dele.",
        "A transcendência não é fugir do mundo, é agir nele com uma mente elevada.",
        "Cada respiração consciente é uma pequena prece de gratidão à vida.",
        "Sê fiel ao seu propósito, mesmo quando as sombras da dúvida surgirem.",
        "O invisível sustenta o visível; cuide do seu espírito para fortalecer sua realidade.",
        "A fé é a disciplina de manter o coração firme no que a razão ainda não alcança.",
        "Sua vida é o reflexo da sua comunhão interna com o infinito.",
        "A verdadeira devoção se prova na paciência, não no êxtase.",
        "Busque a luz, não para fugir da escuridão, mas para iluminá-la.",
        "O sagrado habita nos detalhes de uma vida vivida com intenção.",
        "A oração da alma é o desejo sincero de tornar-se melhor para o mundo.",
        "Mantenha uma chama acesa internamente, onde o vento do mundo não alcance.",
        "A jornada espiritual é o caminho de volta para a sua essência mais pura.",

        // --- VIRTUDE E COMBATE INTERNO ---
        "O maior templo é o caráter; a maior prática é a retidão.",
        "Domine seus desejos ou eles se tornarão seus senhores.",
        "A disciplina espiritual é a armadura que protege a alma nas batalhas da vida.",
        "Vencer a si mesmo é uma vitória maior do que conquistar mil cidades.",
        "Onde há virtude, há uma força que nenhuma autoridade humana pode dar.",
        "Não fale sobre sua fé; deixe que sua conduta a torne evidente.",
        "O ego é um véu; rasgue-o através do serviço e da humildade.",
        "A retidão na fala é o primeiro degrau da escada para o alto.",
        "A firmeza de um devoto nasce da sua rendição a um princípio superior.",
        "O jejum da alma é recusar-se a alimentar pensamentos de ódio ou inveja.",
        "Sê pequeno diante da grandeza da vida para que a sabedoria possa entrar.",
        "A tentação recua diante de uma mente ocupada com o bem.",
        "Sua vontade deve ser o aço temperado no fogo da disciplina diária.",
        "A integridade é a prece mais alta que um homem pode realizar.",
        "Não temas a solidão; nela o espírito se fortalece para o convívio.",

        // --- SERVIÇO E ENTREGA ---
        "Servir ao próximo é a forma mais rápida de tocar o absoluto.",
        "A caridade desinteressada é o combustível que eleva a consciência.",
        "Onde você colocar suas mãos, coloque também o seu coração e sua fé.",
        "Seja o instrumento da paz onde houver conflito.",
        "O verdadeiro devoto não pede facilidades, pede forças para suportar o fardo.",
        "A entrega não é desistência, é confiança absoluta na ordem das coisas.",
        "Nada é seu, tudo lhe foi emprestado para que você aprenda a cuidar.",
        "O ato de perdoar é a libertação de uma corrente que prendia seu espírito ao passado.",
        "Sê o consolo para a dor alheia e encontrará o seu próprio alívio.",
        "O trabalho feito com devoção transforma o suor em oferenda.",
        "Não busque ser servido, busque ser útil; nisso reside a verdadeira grandeza.",
        "A compaixão é a linguagem que todos os corações espirituais compreendem.",
        "Sacrifique o seu conforto se isso for necessário para proteger a verdade.",
        "A bondade é a prova real de que sua prática está dando frutos.",
        "O mundo se cura através de cada indivíduo que decide curar a si mesmo.",

        // --- SABEDORIA E PERSEVERANÇA ---
        "A paciência é a prova de fogo daquele que confia no tempo do universo.",
        "O conhecimento informa, mas a prática transforma.",
        "Mantenha a mente no alto enquanto seus pés caminham firmes no chão.",
        "A adversidade é a ferramenta que o destino usa para lapidar sua alma.",
        "Não se deixe abalar pelo aplauso ou pela crítica; ambos são fumaça.",
        "O silêncio é o útero onde as grandes decisões e clarezas nascem.",
        "A constância na prática pequena vale mais que o esforço heróico isolado.",
        "Estude os mestres, mas torne-se o mestre da sua própria existência.",
        "A clareza espiritual vem para aqueles que não têm medo da verdade.",
        "Viva de tal forma que sua morte seja apenas uma mudança de morada.",
        "O temor da consciência é a bússola que impede o homem de se perder.",
        "Nada pode ferir o espírito de quem já entregou tudo ao propósito.",
        "A gratidão transforma o pouco em suficiente e o comum em sagrado.",
        "A perseverança é a oração que nunca fica sem resposta.",
        "No final, restarão apenas as pegadas de luz que você deixou no caminho."
    ], // Espaço reservado para a próxima interação
    habitos: {
        nivel1: [ // DISPERSO
            { id: "d1_1", task: "5 minutos de silêncio absoluto ao acordar", xp: 40 },
            { id: "d1_2", task: "Anotar 3 coisas pelas quais é grato", xp: 30 },
            { id: "d1_3", task: "Evitar telas nos primeiros 15 min do dia", xp: 50 },
            { id: "d1_4", task: "Ler 2 páginas de um texto de sabedoria", xp: 40 },
            { id: "d1_5", task: "Sentar-se em postura de meditação por 2 min", xp: 30 },
            { id: "d1_6", task: "Beber água com intenção de purificação", xp: 20 }
        ],
        nivel2: [ // BUSCADOR
            { id: "d2_1", task: "10 minutos de prática contemplativa", xp: 60 },
            { id: "d2_2", task: "Identificar um vício de linguagem e evitá-lo", xp: 50 },
            { id: "d2_3", task: "Refletir sobre o seu propósito por 5 min", xp: 40 },
            { id: "d2_4", task: "Realizar uma tarefa comum com atenção plena", xp: 60 },
            { id: "d2_5", task: "Evitar julgamentos mentais por 1 hora", xp: 70 },
            { id: "d2_6", task: "Fazer uma breve conexão com o sagrado ao deitar", xp: 50 }
        ],
        nivel3: [ // PRATICANTE
            { id: "d3_1", task: "Praticar 15 min de meditação profunda", xp: 80 },
            { id: "d3_2", task: "Estudar 20 min sobre virtudes ou filosofia", xp: 70 },
            { id: "d3_3", task: "Manter o jejum de algo que você gosta (doce/café)", xp: 100 },
            { id: "d3_4", task: "Agradecer verbalmente a três pessoas hoje", xp: 60 },
            { id: "d3_5", task: "Não reclamar de nenhum imprevisto", xp: 90 },
            { id: "d3_6", task: "Limpar seu espaço de prática ou estudo", xp: 40 }
        ],
        nivel4: [ // ASCETA
            { id: "d4_1", task: "Banho frio para temperar a vontade", xp: 120 },
            { id: "d4_2", task: "Permanecer em silêncio total por 30 min", xp: 100 },
            { id: "d4_3", task: "Alimentar-se apenas o necessário (sem excessos)", xp: 110 },
            { id: "d4_4", task: "Abster-se de redes sociais por 4 horas", xp: 150 },
            { id: "d4_5", task: "Realizar um esforço físico em estado de entrega", xp: 130 },
            { id: "d4_6", task: "Observar um impulso e não agir sobre ele", xp: 140 }
        ],
        nivel5: [ // SERVIDOR
            { id: "d5_1", task: "Realizar um ato de caridade anônimo", xp: 200 },
            { id: "d5_2", task: "Ouvir o problema de alguém sem dar conselhos", xp: 150 },
            { id: "d5_3", task: "Ajudar em uma tarefa pesada sem que peçam", xp: 180 },
            { id: "d5_4", task: "Dedicar seus esforços do dia a alguém querido", xp: 120 },
            { id: "d5_5", task: "Palavras de encorajamento a um desconhecido", xp: 100 },
            { id: "d5_6", task: "Ceder o crédito de uma conquista sua", xp: 250 }
        ],
        nivel6: [ // DISCÍPULO
            { id: "d6_1", task: "Memorizar um ensinamento ou verso profundo", xp: 150 },
            { id: "d6_2", task: "Aplicar uma virtude difícil em um conflito", xp: 250 },
            { id: "d6_3", task: "Ensinar um conceito de sabedoria a alguém", xp: 200 },
            { id: "d6_4", task: "Escrever uma reflexão sobre seus erros do dia", xp: 180 },
            { id: "d6_5", task: "Manter a paz interior em ambiente caótico", xp: 300 },
            { id: "d6_6", task: "Estudar a vida de uma grande figura espiritual", xp: 150 }
        ],
        nivel7: [ // GUARDIÃO DO RITO
            { id: "d7_1", task: "Cumprir sua rotina de conexão sem falhas", xp: 400 },
            { id: "d7_2", task: "Defender um valor moral sob pressão social", xp: 500 },
            { id: "d7_3", task: "Organizar um ritual ou momento coletivo de paz", xp: 350 },
            { id: "d7_4", task: "Permanecer 1h em meditação ou vigília", xp: 450 },
            { id: "d7_5", task: "Liderar pelo exemplo de serenidade", xp: 400 },
            { id: "d7_6", task: "Fazer um sacrifício pessoal por um princípio", xp: 600 }
        ],
        nivel8: [ // CONTEMPLATIVO
            { id: "d8_1", task: "Ver a beleza em uma situação adversa", xp: 400 },
            { id: "d8_2", task: "Agir sem esperar frutos ou reconhecimento", xp: 500 },
            { id: "d8_3", task: "Manter o estado de presença por 3 horas", xp: 600 },
            { id: "d8_4", task: "Dissolver um sentimento de raiva meditando", xp: 700 },
            { id: "d8_5", task: "Agradecer por um desafio difícil", xp: 500 },
            { id: "d8_6", task: "Sentir a conexão com o todo por 15 min", xp: 450 }
        ],
        nivel9: [ // ILUMINADO
            { id: "d9_1", task: "Ser a fonte de conforto para alguém em dor", xp: 700 },
            { id: "d9_2", task: "Demonstrar paciência absoluta com o erro alheio", xp: 600 },
            { id: "d9_3", task: "Irradiar pensamentos de paz para o mundo", xp: 500 },
            { id: "d9_4", task: "Agir com compaixão onde há ódio", xp: 800 },
            { id: "d9_5", task: "Manter a mente vazia de desejos por 1h", xp: 700 },
            { id: "d9_6", task: "Inspirar serenidade em um grupo em crise", xp: 900 }
        ],
        nivel10: [ // MESTRE DE SI
            { id: "d10_1", task: "Perdão completo a um inimigo ou ofensor", xp: 1500 },
            { id: "d10_2", task: "Viver um dia em total estado de entrega", xp: 1000 },
            { id: "d10_3", task: "Transcender uma dor física ou emocional", xp: 1200 },
            { id: "d10_4", task: "Ser o exemplo vivo da virtude escolhida", xp: 1000 },
            { id: "d10_5", task: "Silenciar o ego diante de uma injustiça", xp: 1100 },
            { id: "d10_6", task: "Garantir que sua presença eleve o ambiente", xp: 1200 }
        ]
    }
};
