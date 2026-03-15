

    const mesesNomes = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

const datasComemorativas = {
        // --- JANEIRO (Mês 0) ---
        "0-1": [{ t: "Ano Novo", m: "Feliz Ano Novo! Que seu ciclo comece com muita luz! ✨" }],
        "0-2": [{ t: "Dia do Sanitarista", m: "Homenagem aos profissionais da saúde pública! 🏥" }],
        "0-3": [{ t: "Dia do Juiz de Menores", m: "Parabéns pelo trabalho dedicado à justiça infantil!" }],
        "0-4": [
            { t: "Dia Mundial do Braille", m: "Celebrando a inclusão e o acesso à leitura! 🦯" },
            { t: "Dia do Hemofílico", m: "Conscientização e apoio ao diagnóstico precoce. ❤️" }
        ],
        "0-6": [
            { t: "Dia da Gratidão", m: "Hoje é o dia de agradecer por tudo! 🙏" },
            { t: "Aniversário de Angra dos Reis/RJ", m: "Parabéns Angra! Que cidade maravilhosa! 🌊" }
        ],
        "0-7": [{ t: "Dia do Leitor", m: "Ler é viajar sem sair do lugar. Feliz dia! 📚" }],
        "0-8": [{ t: "Dia do Fotógrafo", m: "Parabéns aos olhos que eternizam momentos! 📸" }],
        "0-9": [{ t: "Dia do Astronauta", m: "Explorando o infinito! Feliz dia! 🚀" }],
        "0-11": [{ t: "Controle da Poluição por Agrotóxicos", m: "Pela preservação da nossa terra e saúde! 🌱" }],
        "0-12": [
            { t: "Empresário Contábil", m: "Parabéns aos parceiros do sucesso das empresas! 📊" },
            { t: "Aniversário de Belém/PA", m: "Parabéns Belém! Muita cultura e história! 🌳" }
        ],
        "0-14": [{ t: "Dia do Enfermo", m: "Desejo força e uma pronta recuperação. 🙏" }],
        "0-15": [
            { t: "Dia do Compositor", m: "Homenagem aos poetas da música! 🎶" },
            { t: "Jogo Limpo e Combate ao Doping", m: "Pela ética e saúde no esporte!" }
        ],
        "0-16": [{ t: "Dia do Cortador de Cana", m: "Homenagem a esse trabalho árduo e essencial!" }],
        "0-17": [{ t: "Tribunais de Conta do Brasil", m: "Homenagem à fiscalização e transparência!" }],
        "0-18": [{ t: "Dia Internacional do Riso", m: "Rir é o melhor remédio! Sorria hoje! 😂" }],
        "0-20": [
            { t: "Dia da Parteira", m: "Parabéns a quem ajuda a vida a chegar! 👶" },
            { t: "Dia do Farmacêutico", m: "Profissionais essenciais para nossa saúde! 💊" },
            { t: "Dia Nacional do Fusca", m: "Uma lenda das estradas brasileiras! 🚗" }
        ],
        "0-21": [{ t: "Dia Mundial da Religião", m: "Celebrando a fé e a diversidade espiritual! ✨" }],
        "0-23": [{ t: "Medicina Integrativa", m: "Saúde e bem-estar de forma completa!" }],
        "0-24": [{ t: "Dia dos Aposentados", m: "Parabéns por tantos anos de dedicação!" }],
        "0-25": [
            { t: "Aniversário de São Paulo/SP", m: "Parabéns à maior metrópole do Brasil! 🏙️" },
            { t: "Dia do Carteiro", m: "Obrigado por conectar tantas pessoas! 📬" },
            { t: "Dia da Bossa Nova", m: "Viva o ritmo que o mundo ama! 🎸" }
        ],
        "0-26": [
            { t: "Aniversário de Santos/SP", m: "Parabéns à cidade portuária e santista! 🌊" },
            { t: "Dia da Gula", m: "Um dia para saborear o que a gente ama! 🍕" }
        ],
        "0-27": [
            { t: "Dia do Orador", m: "A arte de encantar com as palavras!" },
            { t: "Vítimas do Holocausto", m: "Lembrar para nunca esquecer. 🕯️" },
            { t: "Dia do Bolo de Chocolate", m: "Quem resiste a uma fatia hoje? 🍫🎂" }
        ],
        "0-28": [
            { t: "Combate ao Trabalho Escravo", m: "Conscientizar para libertar e respeitar!" },
            { t: "Dia Internacional do LEGO", m: "Dia de montar sonhos bloco por bloco! 🧱" },
            { t: "Dia do Comércio Interior", m: "Homenagem a quem move a nossa economia!" }
        ],
        "0-29": [{ t: "Visibilidade Trans", m: "Respeito e igualdade para todas as identidades! 🏳️‍⚧️" }],
        "0-30": [
            { t: "Dia do Portuário", m: "Homenagem aos trabalhadores dos nossos portos!" },
            { t: "Dia Nacional das HQs", m: "Viva os heróis e as histórias em quadrinhos! 💥" },
            { t: "Não Violência e Cultura de Paz", m: "Seja a paz que você quer no mundo!" }
        ],
        "0-31": [
            { t: "Dia Mundial do Mágico", m: "Que o seu dia tenha um toque de mágica! 🎩" },
            { t: "Dia Nacional da Paçoca", m: "Impossível comer uma só! 🥜" },
            { t: "Dia do Engenheiro Ambiental", m: "Cuidando do futuro do nosso planeta!" }
        ],

        // --- FEVEREIRO (Mês 1) ---
        "1-1": [{ t: "Dia do Publicitário", m: "Transformando ideias em grandes marcas! 💡" }],
        "1-2": [
            { t: "Aniversário de Itu/SP", m: "Parabéns à cidade das coisas grandes! 🏛️" },
            { t: "Dia do Agente Fiscal", m: "Homenagem ao serviço público de fiscalização!" }
        ],
        "1-3": [{ t: "Dia Nacional do Bolo de Cenoura", m: "Com muita cobertura de chocolate! 🥕🍰" }],
        "1-4": [
            { t: "Dia Mundial do Câncer", m: "A prevenção é o melhor caminho para a cura! ❤️" },
            { t: "Aniversário de Macapá/AP", m: "Parabéns à capital do meio do mundo! 🗺️" },
            { t: "Dia do Amigo do Facebook", m: "Marque aquele amigo que você conheceu na rede!" }
        ],
        "1-5": [
            { t: "Dia do Datiloscopista", m: "Peritos na arte da identificação humana!" },
            { t: "Dia Nacional da Mamografia", m: "Saúde da mulher em primeiro lugar! 🏥" },
            { t: "Dia do Dermatologista", m: "Cuide bem do seu maior órgão: a pele! ✨" }
        ],
        "1-6": [
            { t: "Dia do Muay Thai", m: "Disciplina, força e respeito! 🥊" },
            { t: "Agente de Defesa Ambiental", m: "Combatendo crimes contra a natureza! 🌱" }
        ],
        "1-7": [{ t: "Luta dos Povos Indígenas", m: "Reconhecimento e proteção às raízes do Brasil! 🏹" }],
        "1-10": [{ t: "Dia do Atleta Profissional", m: "Homenagem ao suor e à glória do esporte! 🏅" }],
        "1-11": [
            { t: "Mulheres e Meninas na Ciência", m: "Lugar de mulher é onde ela quiser, inclusive na NASA! 🔬" },
            { t: "Dia do Zelador", m: "Obrigado por cuidar do nosso bem comum! 🧹" }
        ],
        "1-13": [{ t: "Dia Mundial do Rádio", m: "A companhia inseparável de todos os dias! 📻" }],
        "1-14": [
            { t: "Sábado de Carnaval", m: "Abram alas para a alegria! 🎉" },
            { t: "Dia Internacional da Doação de Livros", m: "Mude uma vida, doe um livro! 📚" },
            { t: "Dia do Botonista", m: "Paixão pelo futebol de botão! ⚽" }
        ],
        "1-15": [
            { t: "Domingo de Carnaval", m: "Dia de muita folia e serpentina! 🎭" },
            { t: "Dia Internacional do Câncer na Infância", m: "Pela força e cura dos nossos pequenos! ❤️" }
        ],
        "1-16": [{ t: "Dia do Repórter", m: "Buscando a notícia onde ela estiver! 🎤" }],
        "1-17": [
            { t: "Dia Mundial do Gato", m: "Miau! O dia dos reis da internet e da casa! 🐱" },
            { t: "Terça-feira de Carnaval", m: "O dia oficial da folia! Aproveite! 🎭" }
        ],
        "1-18": [
            { t: "Quarta-feira de Cinzas", m: "Dia de recolhimento e início da Quaresma. 🙏" },
            { t: "Dia da Síndrome de Asperger", m: "Entender para incluir com amor e respeito! 🧩" }
        ],
        "1-19": [
            { t: "Dia do Esportista", m: "Praticar esporte é praticar saúde! 🏅" },
            { t: "Dia Mundial da Baleia", m: "Protejam os gigantes e os oceanos! 🐋" }
        ],
        "1-20": [
            { t: "Dia Mundial da Justiça Social", m: "Por um mundo com menos desigualdade!" },
            { t: "Combate às Drogas e Alcoolismo", m: "Apoio e conscientização para salvar vidas! ❤️" }
        ],
        "1-21": [
            { t: "Dia Nacional do Imigrante Italiano", m: "Homenagem à cultura que enriqueceu o Brasil! 🇮🇹" },
            { t: "Dia Internacional da Língua Materna", m: "Valorizando todas as falas do mundo! 🗣️" }
        ],
        "1-22": [{ t: "Auxiliar de Serviços Gerais", m: "Obrigado por manter tudo em ordem! 🧹" }],
        "1-23": [{ t: "Dia Nacional do Rotary", m: "Dar de si antes de pensar em si! ⚙️" }],
        "1-26": [{ t: "Dia do Comediante", m: "Obrigado pelas gargalhadas que salvam o dia! 😂" }],
        "1-27": [
            { t: "Dia Nacional do Livro Didático", m: "A base da nossa educação escolar! 📖" },
            { t: "Dia do Agente Fiscal da Receita", m: "Importante papel na arrecadação do país!" }
        ],
        "1-28": [
            { t: "Dia Mundial de Combate às LER/DORT", m: "Cuidado com a postura e pausas no trabalho! 💻" },
            { t: "Dia Mundial das Doenças Raras", m: "Raro é ter que lutar sozinho. Apoie! 🎗️" } 
        ], // --- MARÇO (Mês 2 no sistema) ---
        "2-1": [
            { t: "Aniversário do Rio de Janeiro/RJ", m: "Parabéns à Cidade Maravilhosa! 🌊" },
            { t: "Dia Mundial do Elogio", m: "Um elogio pode mudar o dia de alguém! ✨" },
            { t: "Dia do Turismo Ecológico", m: "Viajar respeitando a natureza. 🌱" },
            { t: "Dia de Santo Albino", m: "Fé e proteção. 🙏" },
            { t: "Dia Nacional da Arruda", m: "Contra o mau-olhado e energias negativas! 🌿" }
        ],
        "2-2": [
            { t: "Dia da Oração", m: "Um momento para falar com o Criador. 🙏" },
            { t: "Dia do Quadro em Vidro", m: "Homenagem aos vidraceiros e decoradores!" },
            { t: "Dia de Santa Inês", m: "Pureza e devoção espiritual." },
            { t: "Dia Mundial da Saúde Mental Infantil", m: "Cuidar das nossas crianças é cuidar do futuro!" }
        ],
        "2-3": [
            { t: "Dia do Otorrinolaringologista", m: "Homenagem aos médicos dos sentidos!" },
            { t: "Dia Mundial da Vida Selvagem", m: "Respeito à fauna e flora do planeta! 🐾" },
            { t: "Dia do Dirigente de Sociedades Desportivas", m: "Liderança e gestão no esporte!" },
            { t: "Dia de São Casimiro", m: "Paz e santidade." }
        ],
        "2-4": [
            { t: "Dia Mundial da Obesidade", m: "Saúde e conscientização para todos." },
            { t: "Dia do Filhote", m: "Eles trazem alegria infinita para nossas casas! 🐶" },
            { t: "Dia da Engenharia", m: "Construindo o progresso mundial! 🏗️" },
            { t: "Dia Mundial contra o HPV", m: "Prevenção é o melhor caminho!" }
        ],
        "2-5": [
            { t: "Dia do Filatelista Brasileiro", m: "A arte de colecionar selos e história! ✉️" },
            { t: "Dia da Integração do Telégrafo", m: "Marcos da comunicação no Brasil." },
            { t: "Dia Mundial da Eficiência Energética", m: "Economizar energia é proteger o mundo! 💡" }
        ],
        "2-6": [
            { t: "Data Magna de Pernambuco", m: "Homenagem à Revolução de 1817! 🏛️" },
            { t: "Dia do Optometrista", m: "Cuidando da clareza da nossa visão! 👁️" },
            { t: "Dia Mundial do Luto", m: "Respeito e acolhimento aos que sofrem." }
        ],
        "2-7": [
            { t: "Dia do Fuzileiro Naval", m: "Adsumus! Honra e glória à Marinha! ⚓" },
            { t: "Dia Mundial da Oração", m: "União global pela fé. 🙏" },
            { t: "Dia de Santas Perpétua e Felicidade", m: "Exemplos de coragem e fé." }
        ],
        "2-8": [
            { t: "Dia Internacional da Mulher", m: "Homenagem à força, luta e conquistas das mulheres! 🌹" },
            { t: "Dia do Quadro de Avisos", m: "Para manter a vida sempre organizada!" },
            { t: "Lançamento do Primeiro Navio a Vapor", m: "Um marco na história da navegação!" }
        ],
        "2-9": [
            { t: "Dia Mundial do DJ", m: "O som que agita nossas vidas! 🎧" },
            { t: "Dia do Combate ao Sedentarismo", m: "Levante do sofá, saúde é movimento! 🏃‍♂️" },
            { t: "Dia da Hotelaria", m: "Parabéns aos profissionais do acolhimento!" },
            { t: "Dia de Santa Francisca Romana", m: "Protetora dos motoristas." }
        ],
        "2-10": [
            { t: "Dia do Mario Bros", m: "O encanador mais famoso dos games! 🍄🎮" },
            { t: "Dia do Telefone", m: "Alô! Homenagem à invenção que nos uniu! ☎️" },
            { t: "Dia do Conservador", m: "Respeito às bases, valores e tradições." },
            { t: "Dia do Sogro", m: "Aquele abraço para o 'segundo pai'! 🤝" },
            { t: "Dia de Santa Anastácia", m: "Fé, força e santidade." }
        ],

"2-11": [
            { t: "Dia da Pipoca", m: "Salgada ou doce? O importante é celebrar! 🍿" },
            { t: "Dia dos Direitos do Consumidor (Mundial)", m: "Conhecer para exigir o que é justo!" },
            { t: "Dia de Bento de Núrsia", m: "Homenagem ao santo padroeiro da Europa." },
            { t: "Dia da Mulher e Menina na Ciência", m: "Incentivando o futuro da descoberta! 🔬" }
        ],
        "2-12": [
            { t: "Aniversário de Recife/PE", m: "Parabéns à Veneza Brasileira! 🎭" },
            { t: "Aniversário de Olinda/PE", m: "Parabéns à cidade do frevo e cultura! 🎺" },
            { t: "Dia do Bibliotecário", m: "Homenagem aos guardiões do saber! 📚" },
            { t: "Dia da Industrialização de Mato Grosso", m: "Progresso e desenvolvimento regional!" }
        ],
        "2-13": [
            { t: "Dia Mundial do Rádio (Reconhecimento)", m: "A voz que informa e entretém há gerações! 📻" },
            { t: "Dia de Santa Eufrásia", m: "Exemplo de caridade e silêncio." }
        ],
        "2-14": [
            { t: "Dia Mundial do Careca", m: "Onde o brilho é marca registrada! 👨‍🦲✨" },
            { t: "Dia Nacional dos Animais", m: "Amar e proteger é nosso dever! 🐾" },
            { t: "Dia do Vendedor de Livros", m: "Espalhando cultura por onde passa! 📚" },
            { t: "Dia do Rio", m: "Água limpa é vida para todos! 💧" },
            { t: "Dia da Poesia (Regional)", m: "Celebrando os versos que encantam a alma." }
        ],
        "2-15": [
            { t: "Dia da Escola", m: "Lugar de aprender, crescer e sonhar! 🏫" },
            { t: "Dia Mundial do Sono", m: "Dormir bem é o segredo da longevidade! 💤" },
            { t: "Dia do Consumidor Brasileiro", m: "Homenagem especial ao cliente nacional!" }
        ],
        "2-16": [
            { t: "Dia do Cavalo", m: "Homenagem a esse animal nobre e fiel! 🐎" },
            { t: "Dia Nacional da Conscientização sobre as Mudanças Climáticas", m: "Cuidar do planeta é urgente! 🌍" }
        ],
        "2-17": [
            { t: "Dia Mundial do Gato", m: "Miau! O dia dos donos da casa! 🐱" },
            { t: "Dia de São Patrício (St. Patrick's Day)", m: "Muita sorte e alegria! ☘️" },
            { t: "Dia do Especialista em Gastronomia", m: "Homenagem aos mestres do sabor! 👨‍🍳" }
        ],
        "2-18": [
            { t: "Dia do DeMolay", m: "Liderança e fraternidade para jovens!" },
            { t: "Dia da Imigração Judaica", m: "Contribuição cultural e histórica ao Brasil." }
        ],
        "2-19": [
            { t: "Dia do Artesão", m: "O talento que transforma matéria em arte! 🎨" },
            { t: "Dia de São José", m: "Padroeiro dos trabalhadores e das famílias. 🙏" },
            { t: "Dia do Marceneiro", m: "Homenagem aos mestres da madeira!" }
        ],
        "2-20": [
            { t: "Início do Outono", m: "Bem-vindo ao tempo das folhas e clima ameno! 🍂" },
            { t: "Dia Internacional da Felicidade", m: "Sorria! Ser feliz é um direito de todos! 😊" },
            { t: "Dia Mundial da Saúde Bucal", m: "Seu sorriso merece cuidado! 🪥" },
            { t: "Dia do Contador de Histórias", m: "Homenagem a quem mantém viva a tradição oral! 📖" }
        ],
"2-21": [
            { t: "Dia Mundial da Síndrome de Down", m: "Celebrando a diversidade e a inclusão! ❤️" },
            { t: "Dia do Pão Francês", m: "Quentinho e com manteiga, o melhor do dia! 🥖☕" },
            { t: "Dia Internacional Contra a Discriminação Racial", m: "Por um mundo com mais respeito e igualdade!" },
            { t: "Dia Mundial da Poesia", m: "A arte de traduzir a alma em versos! 📖" },
            { t: "Dia Mundial da Infância", m: "Protegendo os direitos dos nossos pequenos! 🧸" }
        ],
        "2-22": [
            { t: "Dia Mundial da Água", m: "Preservar a água é garantir o futuro da vida! 💧" },
            { t: "Dia do Uber (Extraoficial)", m: "Homenagem aos motoristas de aplicativo! 🚗" }
        ],
        "2-23": [
            { t: "Dia Mundial da Meteorologia", m: "De olho no clima e no tempo! 🌦️" },
            { t: "Aniversário de Florianópolis/SC", m: "Parabéns à Ilha da Magia! 🌊" },
            { t: "Dia do Optometrista (Brasil)", m: "Homenagem aos profissionais da visão! 👁️" }
        ],
        "2-24": [
            { t: "Dia Mundial de Combate à Tuberculose", m: "Conscientização e saúde para todos! 🏥" },
            { t: "Dia da União dos Povos Latino-Americanos", m: "Celebrando a nossa irmandade! 🌎" }
        ],
        "2-25": [
            { t: "Dia da Constituição", m: "Homenagem à Lei Maior do nosso Brasil! ⚖️" },
            { t: "Dia do Especialista em Aeronáutica", m: "Honra aos que garantem a segurança no céu! ✈️" },
            { t: "Dia Nacional do Oficial de Justiça", m: "Peça fundamental no judiciário!" }
        ],
        "2-26": [
            { t: "Aniversário de Porto Alegre/RS", m: "Parabéns à capital dos gaúchos! 🧉" },
            { t: "Dia do Cacau", m: "Onde tudo o que é doce começa! 🍫" },
            { t: "Dia do Mercosul", m: "Fortalecendo as relações entre vizinhos! 🤝" }
        ],
        "2-27": [
            { t: "Dia do Circo", m: "Hoje o dia é de espetáculo e alegria! 🤡🎪" },
            { t: "Dia Mundial do Teatro", m: "Homenagem à arte da interpretação! 🎭" },
            { t: "Dia do Graffiti", m: "Cores e expressões urbanas nas ruas! 🎨" }
        ],
        "2-28": [
            { t: "Dia do Diagramador", m: "Homenagem aos profissionais do design visual!" },
            { t: "Dia do Revisor", m: "Cuidando da perfeição das palavras! ✍️" }
        ],
        "2-29": [
            { t: "Aniversário de Curitiba/PR", m: "Parabéns à Cidade Sorriso! 🌳" },
            { t: "Aniversário de Salvador/BA", m: "Parabéns à primeira capital do Brasil! ☀️" }
        ],
        "2-30": [
            { t: "Dia Mundial do Transtorno Bipolar", m: "Conscientização e combate ao estigma. 🧠" },
            { t: "Dia do Anestesista", m: "Homenagem aos guardiões do conforto cirúrgico! 💊" }
        ],
        "2-31": [
            { t: "Dia da Saúde Nutricional", m: "Você é o que você come. Alimente-se bem! 🍎" },
            { t: "Dia da Integração Nacional", m: "Unindo todos os cantos do nosso Brasil! 🇧🇷" },
            { t: "Dia do Cunhado", m: "Aquele abraço para o 'irmão' que a vida deu! 👊" }
        ],
// --- ABRIL (Mês 3 no sistema) ---
        "3-1": [
            { t: "Dia da Mentira", m: "Cuidado com as notícias hoje! 🤥😜" },
            { t: "Dia do Abolicionismo", m: "Homenagem à luta pela liberdade no Brasil." },
            { t: "Dia de Santo Hugo", m: "Exemplo de caridade e prudência. 🙏" },
            { t: "Dia da Diversão no Trabalho", m: "Leveza e alegria na jornada profissional!" },
            { t: "Aniversário de Joinville/SC (Fundação)", m: "Parabéns à Cidade das Flores!" }
        ],
        "3-2": [
            { t: "Conscientização do Autismo", m: "Respeito e inclusão para todas as mentes! 🧩" },
            { t: "Dia Mundial do Livro Infantil", m: "Celebrando a magia da leitura para crianças! 📚" },
            { t: "Dia do Propagandista", m: "Homenagem aos profissionais da divulgação!" },
            { t: "Dia de São Francisco de Paula", m: "Fundador da Ordem dos Mínimos." },
            { t: "Dia Internacional da Verificação de Factos", m: "Pela verdade na informação! ✅" }
        ],
        "3-3": [
            { t: "Dia do Atuário", m: "Homenagem aos especialistas em riscos e estatísticas!" },
            { t: "Dia de São Ricardo", m: "Bispo conhecido pela sua generosidade." },
            { t: "Dia do Desporto Comunitário", m: "O desporto unindo as comunidades! ⚽" },
            { t: "Aniversário de Araranguá/SC", m: "Parabéns à Cidade das Areias Claras!" }
        ],
        "3-4": [
            { t: "Dia Nacional do Parkinsoniano", m: "Apoio e conscientização sobre a doença. 🧠" },
            { t: "Dia de Santo Isidoro de Sevilha", m: "Padroeiro dos usuários de computador e internet! 💻" },
            { t: "Dia Internacional de Alerta às Minas Terrestres", m: "Por um mundo mais seguro." },
            { t: "Dia do Jipeiro", m: "Aventura e lama sobre quatro rodas! 🚙" }
        ],
        "3-5": [
            { t: "Dia do Filho", m: "Celebrando o amor maior do mundo! ❤️" },
            { t: "Dia do Propagandista Farmacêutico", m: "Homenagem aos parceiros da saúde!" },
            { t: "Dia de São Vicente Ferrer", m: "O anjo do apocalipse e grande pregador." },
            { t: "Dia das Telecomunicações", m: "Conectando o Brasil e o mundo!" },
            { t: "Dia dos Fabricantes de Materiais de Construção", m: "Base de todo o progresso!" }
        ],
        "3-6": [
            { t: "Dia do Internato", m: "Homenagem aos estudantes de medicina em formação!" },
            { t: "Dia de São Guilherme", m: "Fé e dedicação monástica." },
            { t: "Dia Nacional de Mobilização contra a Obesidade Infantil", m: "Cuidar da saúde dos pequenos! 🍎" },
            { t: "Aniversário de Bauru/SP (Emancipação)", m: "Parabéns à cidade do sanduíche famoso!" }
        ],
"3-7": [
            { t: "Dia Mundial da Saúde", m: "Saúde é o nosso maior patrimônio! 🏥" },
            { t: "Dia do Jornalista", m: "Homenagem aos profissionais da notícia! 🎤" },
            { t: "Dia do Corretor de Epau", m: "Homenagem aos profissionais de seguros!" },
            { t: "Dia de São João Batista de La Salle", m: "Padroeiro dos educadores. 📚" },
            { t: "Dia do Médico Legista", m: "Busca pela verdade e justiça!" }
        ],
        "3-8": [
            { t: "Dia Nacional do Sistema Braille", m: "Inclusão e leitura para todos! 🦯" },
            { t: "Dia Mundial do Combate ao Câncer", m: "Prevenção e força na luta pela vida! ❤️" },
            { t: "Dia da Astronomia", m: "Explorando os mistérios do universo! 🌌" },
            { t: "Aniversário de Cuiabá/MT", m: "Parabéns à Cidade Verde! 🌳" },
            { t: "Dia do Correio", m: "Conectando pessoas através de cartas e encomendas!" },
            { t: "Dia de Santo Alberto", m: "Fé e sabedoria." }
        ],
        "3-9": [
            { t: "Dia do Aço", m: "A base da indústria e construção! 🏗️" },
            { t: "Dia Nacional da Biblioteca", m: "Templos do conhecimento e da leitura! 📚" },
            { t: "Dia de Santa Casilda", m: "Exemplo de caridade e milagre." },
            { t: "Dia de São Demétrio", m: "Fé e coragem cristã." }
        ],
        "3-10": [
            { t: "Dia da Engenharia Militar", m: "Homenagem aos engenheiros do Exército! ⚔️" },
            { t: "Dia do Engenheiro Metalurgista", m: "Transformando metais em progresso!" },
            { t: "Dia de Santa Madalena de Canossa", m: "Dedicada à educação e caridade." },
            { t: "Dia do Atleta Profissional (Regional)", m: "Garra e suor no esporte! 🏅" }
        ],
        "3-11": [
            { t: "Dia do Infectologista", m: "Na linha de frente contra as doenças! 🏥" },
            { t: "Dia da Escola de Samba", m: "Ritmo, cor e alegria do nosso Carnaval! 🥁" },
            { t: "Dia do Prefeito", m: "Homenagem aos gestores municipais!" },
            { t: "Dia de Santa Gema Galgani", m: "A flor da Paixão." }
        ],
        "3-12": [
            { t: "Dia do Obstetra", m: "Homenagem a quem cuida do início da vida! 👶" },
            { t: "Dia do Corpo de Engenheiros da Marinha", m: "Tecnologia e defesa nos mares! ⚓" },
            { t: "Dia do Humorista", m: "Obrigado por todas as gargalhadas! 😂" },
            { t: "Dia de São Vitor", m: "Testemunho de fé e santidade." },
            { t: "Dia Nacional do Ar", m: "Conscientização sobre a qualidade do ar que respiramos! 🌬️" }
        ],
"3-13": [
            { t: "Dia do Beijo", m: "Um gesto que vale mais que mil palavras! 💋" },
            { t: "Dia do Hino Nacional Brasileiro", m: "Ouviram do Ipiranga... Homenagem ao nosso símbolo! 🇧🇷" },
            { t: "Aniversário de Fortaleza/CE", m: "Parabéns à Terra da Luz e do Sol! ☀️🌊" },
            { t: "Dia do Office-Boy", m: "Homenagem aos jovens que ajudam no dia a dia das empresas!" },
            { t: "Dia de Santa Ida", m: "Exemplo de caridade e devoção espiritual. 🙏" },
            { t: "Dia do Jovem", m: "Celebrando a energia e o futuro da nossa nação!" }
        ],
        "3-14": [
            { t: "Dia Mundial do Café", m: "A bebida que desperta e move o mundo! Aceita um? ☕" },
            { t: "Dia do Técnico em Serviço de Saúde", m: "Essenciais para o funcionamento dos hospitais!" },
            { t: "Dia de Luta pela Educação Inclusiva", m: "Educação de qualidade para todos! 📚" },
            { t: "Dia do Patrono da Engenharia Brasileira", m: "Homenagem a Richard Hennig." },
            { t: "Dia de Santa Lidvina", m: "Protetora dos doentes crônicos." },
            { t: "Dia Nacional do Neurocirurgião", m: "Homenagem aos mestres da medicina cerebral! 🧠" }
        ],
        "3-15": [
            { t: "Dia Mundial da Arte", m: "A expressão da alma em todas as suas formas! 🎨" },
            { t: "Dia da Conservação do Solo", m: "Cuidar da terra é garantir o alimento de amanhã! 🌱" },
            { t: "Dia do Desarmamento Infantil", m: "Por uma infância de paz e sem violência." },
            { t: "Dia de São Hunna", m: "Conhecida como 'A Lavadeira Sagrada' pela sua caridade." },
            { t: "Dia do Ciclista (Nacional)", m: "Saúde e liberdade sobre duas rodas! 🚲" }
        ],
        "3-16": [
            { t: "Dia Mundial da Voz", m: "Cuide do seu instrumento de comunicação! 🗣️" },
            { t: "Dia Nacional do Policial Rodoviário Federal", m: "Segurança e ordem nas nossas rodovias! 🚔" },
            { t: "Dia de Santa Bernadette", m: "A vidente de Nossa Senhora de Lourdes. 🙏" },
            { t: "Dia do Comercio de Couros e Peles", m: "Homenagem ao setor coureiro!" }
        ],
        "3-17": [
            { t: "Dia Mundial da Hemofilia", m: "Conscientização e apoio ao tratamento. ❤️" },
            { t: "Dia Nacional da Botânica", m: "Estudando e protegendo a nossa flora! 🌿" },
            { t: "Dia de São Roberto", m: "Abade e exemplo de vida monástica." },
            { t: "Dia da Luta Camponesa", m: "Homenagem aos trabalhadores do campo!" }
        ],
        "3-18": [
            { t: "Dia Nacional do Livro Infantil", m: "Homenagem ao nascimento de Monteiro Lobato! 📖" },
            { t: "Dia do Amigo Espírita", m: "Fraternidade e luz no caminho espiritual." },
            { t: "Dia de São Galdino", m: "Bispo e defensor da fé." },
            { t: "Dia do Geólogo", m: "Desvendando a história da Terra através das rochas! 💎" },
            { t: "Dia Nacional do Lions Clube", m: "Servir à comunidade com dedicação!" }
        ],
"3-19": [
            { t: "Dia dos Povos Indígenas", m: "Respeito e proteção à cultura e raízes do Brasil! 🏹" },
            { t: "Dia do Exército Brasileiro", m: "Braço Forte, Mão Amiga! Honra à nossa força terrestre! ⚔️" },
            { t: "Dia do Psicomotricista", m: "Homenagem aos profissionais do movimento e mente!" },
            { t: "Dia de Santo Expedito", m: "O santo das causas justas e urgentes! 🙏" },
            { t: "Dia Mundial dos Simpsons", m: "Homenagem à família mais amarela da TV! 🍩" }
        ],
        "3-20": [
            { t: "Dia do Diplomata", m: "Homenagem aos representantes do Brasil no exterior! 🇧🇷" },
            { t: "Dia do Disco", m: "Celebrando a magia do vinil e da música! 🎶" },
            { t: "Dia de Santa Inês de Montepulciano", m: "Exemplo de santidade e milagres." },
            { t: "Dia Nacional do Policial Civil", m: "Homenagem aos investigadores da nossa segurança!" }
        ],
        "3-21": [
            { t: "Tiradentes", m: "Homenagem ao mártir da Inconfidência Mineira! 🇧🇷" },
            { t: "Aniversário de Brasília/DF", m: "Parabéns à capital de todos os brasileiros! 🏛️" },
            { t: "Dia do Metalúrgico", m: "Homenagem aos trabalhadores da força e do metal!" },
            { t: "Dia da Polícia Militar e Civil", m: "Homenagem aos guardiões da ordem pública!" },
            { t: "Dia de Santo Anselmo", m: "Doutor da Igreja e teólogo." },
            { t: "Dia Mundial da Criatividade e Inovação", m: "O mundo move-se através de novas ideias! 💡" }
        ],
        "3-22": [
            { t: "Descobrimento do Brasil", m: "A chegada dos portugueses em 1500! 🚢" },
            { t: "Dia da Terra", m: "O nosso planeta é o nosso único lar. Cuide dele! 🌍" },
            { t: "Dia da Comunidade Luso-Brasileira", m: "Celebrando os laços entre Brasil e Portugal! 🇧🇷🇵🇹" },
            { t: "Dia da Aviação de Caça", m: "Senta a Pua! Homenagem aos nossos pilotos! ✈️" },
            { t: "Dia de São Sotero e São Caio", m: "Papas e mártires da fé." }
        ],
        "3-23": [
            { t: "Dia de São Jorge", m: "Salve o Santo Guerreiro! Proteção e coragem! 🗡️🐉" },
            { t: "Dia Mundial do Livro e do Direito de Autor", m: "Celebrando a literatura mundial! 📚" },
            { t: "Dia do Escoteiro", m: "Sempre alerta para servir! ⚜️" },
            { t: "Dia do Serralheiro", m: "Homenagem aos profissionais do ferro e aço!" },
            { t: "Dia Nacional do Choro", m: "Viva a música popular brasileira! 🎵" },
            { t: "Dia de Cutucar o Nariz (Curiosidade)", m: "Sim, esta data existe! Mas faça em segredo! 👃😂" }
        ],
        "3-24": [
            { t: "Dia do Penitenciário", m: "Homenagem aos profissionais do sistema prisional!" },
            { t: "Dia do Boi", m: "Homenagem à força da pecuária brasileira! 🐂" },
            { t: "Dia da Família Militar", m: "União e apoio aos nossos militares!" },
            { t: "Dia Nacional da Língua Brasileira de Sinais (Libras)", m: "Inclusão através das mãos! 🤟" },
            { t: "Dia de São Fidélis", m: "Fé e testemunho cristão." },
            { t: "Dia do Churrasco", m: "O prato favorito do brasileiro em festa! 🥩🔥" }
        ],
"3-25": [
            { t: "Dia do Contabilista", m: "Homenagem aos profissionais da precisão e das contas! 📊" },
            { t: "Dia Mundial da Luta contra a Malária", m: "Conscientização e prevenção global. 🏥" },
            { t: "Dia de São Marcos", m: "Padroeiro dos vidraceiros e notários. 🙏" },
            { t: "Dia da DNA", m: "Celebrando a descoberta da estrutura da vida! 🧬" },
            { t: "Dia do Exército da Itália", m: "Homenagem histórica internacional." }
        ],
        "3-26": [
            { t: "Dia do Goleiro", m: "Homenagem aos paredões dos nossos times! ⚽🧤" },
            { t: "Dia da Prevenção e Combate à Hipertensão", m: "Cuide da sua pressão, cuide do seu coração! ❤️" },
            { t: "Dia de Nossa Senhora do Bom Conselho", m: "Luz e guia para as decisões da vida." },
            { t: "Dia do Juiz do Trabalho", m: "Homenagem aos garantidores dos direitos laborais!" },
            { t: "Dia Mundial da Propriedade Intelectual", m: "Protegendo a criatividade humana! 💡" }
        ],
        "3-27": [
            { t: "Dia do Empregado Doméstico", m: "Homenagem a quem cuida do nosso lar com carinho! 🏠" },
            { t: "Dia Nacional do Designer Gráfico", m: "Criatividade que comunica visualmente! 🎨" },
            { t: "Dia de Santa Zita", m: "Padroeira das empregadas domésticas." },
            { t: "Dia do Sacerdote", m: "Homenagem aos guias espirituais das paróquias!" },
            { t: "Dia Mundial da Antas", m: "Conscientização sobre a preservação da nossa fauna! 🐾" }
        ],
        "3-28": [
            { t: "Dia Mundial da Segurança e Saúde no Trabalho", m: "Prevenir acidentes é dever de todos! 👷‍♂️" },
            { t: "Dia da Educação", m: "A base para um mundo mais justo e inteligente! 📚" },
            { t: "Dia do Sorriso", m: "Sorrir é o melhor remédio para a alma! 😊" },
            { t: "Dia de São Vital", m: "Fé e força cristã." },
            { t: "Dia da Sogra", m: "Aquele abraço especial para a mãe do seu amor! 💐" }
        ],
        "3-29": [
            { t: "Dia Internacional da Dança", m: "Quem dança, seus males espanta! 💃🕺" },
            { t: "Dia de Santa Catarina de Sena", m: "Doutora da Igreja e exemplo de fé." },
            { t: "Dia do Cerimonialista", m: "Homenagem aos mestres da organização de eventos!" },
            { t: "Dia da Memória das Vítimas de Armas Químicas", m: "Por um mundo de paz e desarmamento." }
        ],
        "3-30": [
            { t: "Dia do Ferroviário", m: "Homenagem aos trabalhadores das estradas de ferro! 🚂" },
            { t: "Dia Nacional da Mulher", m: "Celebrando as conquistas das mulheres brasileiras! 🇧🇷🌹" },
            { t: "Dia Internacional do Jazz", m: "Ritmo, improviso e cultura musical! 🎷" },
            { t: "Dia de São Pio V", m: "Papa e zelador da fé." },
            { t: "Dia do Profissional de Eventos", m: "Quem faz a festa acontecer nos bastidores!" }
        ],
// --- MAIO (Mês 4 no sistema) ---
        "4-1": [
            { t: "Dia Mundial do Trabalho", m: "Homenagem a quem constrói o futuro todos os dias! 👷‍♂️" },
            { t: "Dia da Literatura Brasileira", m: "Celebrando nossos grandes escritores e poetas! 📚" },
            { t: "Dia de São José Operário", m: "Padroeiro dos trabalhadores. 🙏" },
            { t: "Dia do Vigilante", m: "Homenagem aos guardiões da nossa segurança!" },
            { t: "Aniversário de falecimento de Ayrton Senna", m: "Homenagem ao nosso eterno campeão! 🏎️🇧🇷" },
            { t: "Dia do Classicismo", m: "Celebrando a arte e a cultura clássica." }
        ],
        "4-2": [
            { t: "Dia do Taquígrafo", m: "Homenagem aos profissionais da escrita rápida!" },
            { t: "Dia Mundial do Atum", m: "Conscientização sobre a pesca sustentável. 🐟" },
            { t: "Dia de Santo Atanásio", m: "Bispo e doutor da Igreja." },
            { t: "Dia Nacional de Combate ao Assédio Moral no Trabalho", m: "Por um ambiente profissional respeitoso!" },
            { t: "Dia do Ética", m: "Refletindo sobre valores e conduta na sociedade." }
        ],
        "4-3": [
            { t: "Dia Mundial da Liberdade de Imprensa", m: "A verdade é a base de uma democracia forte! 🎤" },
            { t: "Dia do Sertanejo", m: "Homenagem à música e à cultura do nosso interior! 🎸" },
            { t: "Dia do Pau-Brasil", m: "Celebrando a árvore que deu nome ao nosso país! 🌳" },
            { t: "Dia de São Tiago e São Filipe", m: "Apóstolos de Jesus." },
            { t: "Dia do Sol", m: "A fonte de energia e vida para o nosso planeta! ☀️" }
        ],
        "4-4": [
            { t: "Dia do Calculista Estrutural", m: "Homenagem aos engenheiros que sustentam nossas obras!" },
            { t: "Dia Internacional do Bombeiro", m: "Heróis que arriscam a vida para salvar outras! 👨‍🚒" },
            { t: "Dia de Star Wars (May the 4th)", m: "Que a Força esteja com você! ✨🚀" },
            { t: "Dia Mundial do Sorriso (Data Var.)", m: "Sorrir é o melhor remédio!" },
            { t: "Dia de São Floriano", m: "Padroeiro dos bombeiros." }
        ],
        "4-5": [
            { t: "Dia da Língua Portuguesa", m: "Celebrando o idioma que nos une! 🇵🇹🇧🇷" },
            { t: "Dia das Comunicações", m: "Homenagem ao nascimento de Marechal Rondon!" },
            { t: "Dia do Marechal Rondon", m: "O herói da integração nacional e das comunicações." },
            { t: "Dia Nacional do Uso Racional de Medicamentos", m: "Saúde é coisa séria, não se automedique! 🏥" },
            { t: "Dia do Cartógrafo", m: "Homenagem a quem desenha os caminhos do mundo!" },
            { t: "Dia de São Ângelo", m: "Mártir da fé." }
        ],
"4-6": [
            { t: "Dia do Matemático", m: "Homenagem aos mestres dos números e da lógica! 📐" },
            { t: "Dia do Instrumentador Cirúrgico", m: "Peça fundamental nas salas de operação! 🏥" },
            { t: "Dia da Cartografia", m: "A arte e ciência de mapear o mundo!" },
            { t: "Dia de São Domingos Sávio", m: "Padroeiro dos coroinhas e jovens cantores." },
            { t: "Dia Nacional da Matemática", m: "Celebrando o nascimento de Malba Tahan!" }
        ],
        "4-7": [
            { t: "Dia do Oftalmologista", m: "Cuidando da janela da nossa alma: os olhos! 👁️" },
            { t: "Dia do Silêncio", m: "Um momento para refletir e ouvir o próprio interior. 🤫" },
            { t: "Dia do Engenheiro de Fortificação", m: "Honra aos estrategistas da engenharia militar!" },
            { t: "Dia de Santa Flávia Domitila", m: "Testemunho de fé e coragem." },
            { t: "Dia do Líder Comunitário", m: "Homenagem a quem trabalha pelo bem do bairro!" }
        ],
        "4-8": [
            { t: "Dia da Vitória", m: "Homenagem ao fim da 2ª Guerra Mundial na Europa! 🇧🇷🎖️" },
            { t: "Dia Mundial da Cruz Vermelha", m: "Celebrando a maior rede humanitária do mundo!" },
            { t: "Dia do Profissional de Marketing", m: "Criatividade e estratégia para conectar marcas e pessoas!" },
            { t: "Dia do Artista Plástico", m: "Homenagem a quem transforma visão em arte! 🎨" },
            { t: "Dia de Nossa Senhora de Luján", m: "Padroeira da Argentina." },
            { t: "Dia Nacional do Turismo", m: "Viajar é enriquecer a alma! ✈️" }
        ],
        "4-9": [
            { t: "Dia da Europa", m: "Celebrando a paz e a unidade no continente europeu! 🇪🇺" },
            { t: "Dia do Cozinheiro", m: "Homenagem aos mestres do sabor e do tempero! 👨‍🍳" },
            { t: "Dia de São Pacômio", m: "Pai do monaquismo cenobítico." },
            { t: "Dia do Teste do Pezinho", m: "Saúde preventiva desde os primeiros dias de vida! 👶" }
        ],
        "4-10": [
            { t: "Dia das Mães (Data Simbólica)", m: "Todo dia é dia delas, mas hoje o abraço é especial! ❤️🌹" },
            { t: "Dia da Cavalaria", m: "Homenagem à arma de mobilidade e choque do Exército! 🐎" },
            { t: "Dia do Guia de Turismo", m: "Apresentando as belezas do mundo com conhecimento!" },
            { t: "Dia da Cozinheira", m: "Homenagem ao carinho que vem da cozinha! 🥘" },
            { t: "Dia de São Solange", m: "Padroeira das pastoras e invocada contra a seca." },
            { t: "Dia do Campo", m: "Celebrando a força do setor agropecuário! 🌾" }
        ],

"4-11": [
            { t: "Dia do Reggae", m: "Homenagem ao ritmo que prega paz e amor! 🎸🌈" },
            { t: "Dia da Integração Nacional", m: "Unindo o Brasil de norte a sul!" },
            { t: "Dia de Santo Inácio de Láconi", m: "Exemplo de humildade e oração." },
            { t: "Dia Nacional do Engenheiro de Controle e Automação", m: "Tecnologia que move a indústria!" },
            { t: "Aniversário de Santa Maria/RS", m: "Parabéns ao Coração do Rio Grande! 🏠" }
        ],
        "4-12": [
            { t: "Dia Internacional da Enfermagem", m: "Homenagem aos heróis do cuidado e da saúde! 🏥💉" },
            { t: "Dia do Engenheiro Militar", m: "Construindo caminhos e defendendo a nação!" },
            { t: "Dia de São Pancrácio", m: "Jovem mártir e protetor contra o perjúrio." },
            { t: "Dia do Profissional de Enfermagem", m: "Todo respeito a quem dedica a vida ao próximo!" },
            { t: "Dia Nacional de Conscientização sobre a Fibromialgia", m: "Mais empatia e tratamento para quem tem dor. 🎗️" }
        ],
        "4-13": [
            { t: "Abolição da Escravidão no Brasil", m: "Homenagem à assinatura da Lei Áurea em 1888. ⛓️🚫" },
            { t: "Dia de Nossa Senhora de Fátima", m: "Relembrando a aparição em Portugal. 🙏✨" },
            { t: "Dia do Zootecnista", m: "Cuidando da produção animal e do bem-estar!" },
            { t: "Dia do Automóvel", m: "Celebrando a paixão por quatro rodas! 🚗" },
            { t: "Dia da Fraternidade Brasileira", m: "União e respeito entre todos os cidadãos." },
            { t: "Dia do Chefe de Cozinha", m: "Liderança e sabor na gastronomia! 👨‍🍳" }
        ],
        "4-14": [
            { t: "Dia do Seguro", m: "Garantindo tranquilidade para o futuro!" },
            { t: "Dia Continental do Seguro", m: "Homenagem aos profissionais do setor nas Américas." },
            { t: "Dia de São Matias", m: "O apóstolo escolhido para completar os doze." },
            { t: "Dia Nacional de Alfabetização", m: "O primeiro passo para a liberdade do saber! 📚" },
            { t: "Aniversário de Canela/RS", m: "Parabéns a um dos encantos da Serra Gaúcha! 🌲" }
        ],
        "4-15": [
            { t: "Dia do Assistente Social", m: "Luta por justiça, direitos e igualdade social! 🤝" },
            { t: "Dia do Gerente de Banco", m: "Homenagem aos profissionais das finanças!" },
            { t: "Dia do Combate à Infecção Hospitalar", m: "Segurança e higiene máxima nos hospitais!" },
            { t: "Dia de Santo Isidoro", m: "Padroeiro dos agricultores e trabalhadores rurais. 🌾" },
            { t: "Dia Nacional do Planejamento Familiar", m: "Informação para uma vida com mais qualidade!" },
            { t: "Dia do Astrônomo (Regional)", m: "Observando as estrelas e o infinito! 🔭" }
        ],
"4-16": [
            { t: "Dia do Gari", m: "Homenagem aos heróis que mantêm nossas cidades limpas! 🧹✨" },
            { t: "Dia do Engenheiro de Produção", m: "Otimizando processos e criando eficiência!" },
            { t: "Dia de São Simão", m: "Fé e tradição cristã." },
            { t: "Dia Nacional da Conscientização sobre a Doença Celíaca", m: "Mais informação sobre a vida sem glúten! 🌾" },
            { t: "Dia Internacional da Luz", m: "Celebrando o papel da luz na ciência e na cultura! 💡" }
        ],
        "4-17": [
            { t: "Dia Mundial das Telecomunicações", m: "Celebrando a conexão entre as pessoas! 🌐" },
            { t: "Dia Internacional Contra a Homofobia", m: "Por um mundo com mais respeito e amor! 🌈" },
            { t: "Dia Mundial da Hipertensão", m: "Cuidado com o coração, controle a pressão! ❤️" },
            { t: "Dia de São Pascoal Bailão", m: "Padroeiro das associações eucarísticas." },
            { t: "Dia Internacional da Internet", m: "A ferramenta que mudou o mundo! 💻" }
        ],
        "4-18": [
            { t: "Dia Nacional de Combate ao Abuso Sexual Infantil", m: "Esquecer é permitir, lembrar é combater. Proteja nossas crianças! 🎗️" },
            { t: "Dia dos Museus", m: "Preservando a história e a arte da humanidade! 🏛️" },
            { t: "Dia do Vidreiro", m: "Homenagem aos artesãos e profissionais do vidro!" },
            { t: "Dia do Planejamento Familiar", m: "Consciência para o futuro da família!" },
            { t: "Dia de São Félix de Cantalice", m: "O santo do 'Graças a Deus'." },
            { t: "Dia do Ceramista", m: "A arte de moldar o barro com as mãos! 🏺" }
        ],
        "4-19": [
            { t: "Dia do Físico", m: "Homenagem aos estudiosos das leis do universo! ⚛️" },
            { t: "Dia do Defensor Público", m: "Garantindo o direito de defesa para todos! ⚖️" },
            { t: "Dia de Santo Ivo", m: "Padroeiro dos advogados e juristas. 🙏" },
            { t: "Dia Nacional de Doação de Leite Humano", m: "Um gesto que salva vidas de bebês! 🍼" },
            { t: "Dia do Acadêmico de Direito", m: "Futuros guardiões da justiça!" },
            { t: "Dia Mundial da Doença de Crohn", m: "Conscientização e apoio aos pacientes." }
        ],
        "4-20": [
            { t: "Dia do Pedagogo", m: "Homenagem a quem dedica a vida ao ensinar! 🎓" },
            { t: "Dia do Comissário de Menores", m: "Zelando pelo bem-estar da infância e juventude!" },
            { t: "Dia de São Bernardino de Sena", m: "Grande pregador e missionário." },
            { t: "Dia Mundial das Abelhas", m: "Sem elas, não há vida. Preserve a natureza! 🐝" },
            { t: "Dia do Técnico de Enfermagem", m: "Essenciais no cuidado direto ao paciente! 🏥" },
            { t: "Dia do Geógrafo", m: "Entendendo o espaço e a relação humana com a Terra! 🌍" }
        ],
"4-21": [
            { t: "Dia da Língua Nacional", m: "Celebrando a riqueza do nosso português brasileiro! 🇧🇷" },
            { t: "Dia do Afilhado", m: "Um abraço especial para os filhos que o coração escolheu! ❤️" },
            { t: "Dia Mundial da Diversidade Cultural", m: "Respeito a todas as cores, crenças e povos! 🌍" },
            { t: "Dia de São Cristóvão Magalhães", m: "Mártir da fé e coragem." },
            { t: "Dia do Profissional de Letras", m: "Homenagem aos guardiões da literatura e gramática!" }
        ],
        "4-22": [
            { t: "Dia Internacional da Biodiversidade", m: "Proteger a natureza é proteger a nossa existência! 🌱" },
            { t: "Dia do Apicultor", m: "Homenagem a quem cuida das abelhas e do mel! 🐝" },
            { t: "Dia de Santa Rita de Cássia", m: "A santa das causas impossíveis. 🙏✨" },
            { t: "Dia do Abraço", m: "O melhor lugar do mundo é dentro de um abraço! 🤗" },
            { t: "Dia do Consultor de Reabilitação", m: "Ajudando a reconstruir vidas e autonomias!" }
        ],
        "4-23": [
            { t: "Dia da Juventude Constitucionalista", m: "Homenagem ao movimento de 1932!" },
            { t: "Dia de São João Batista de Rossi", m: "Exemplo de caridade com os pobres." },
            { t: "Dia Mundial da Tartaruga", m: "Preservando essas anciãs dos oceanos! 🐢" },
            { t: "Dia do Solstício de Inverno (Tradição)", m: "Datas astronômicas e culturais." }
        ],
        "4-24": [
            { t: "Dia Nacional do Café", m: "A paixão nacional que não pode faltar na mesa! ☕" },
            { t: "Dia do Datilógrafo", m: "Homenagem a uma profissão que marcou época!" },
            { t: "Dia da Infantaria", m: "A 'Rainha das Armas' do Exército Brasileiro! ⚔️" },
            { t: "Dia de Nossa Senhora Auxiliadora", m: "Auxílio e proteção cristã." },
            { t: "Dia do Telegrafista", m: "Os pioneiros da comunicação rápida!" },
            { t: "Dia do Milho", m: "Celebrando a base de tantas delícias da nossa terra! 🌽" }
        ],
        "4-25": [
            { t: "Dia da Indústria", m: "O motor do progresso e da economia nacional! 🏗️" },
            { t: "Dia do Trabalhador Rural", m: "Homenagem a quem planta e colhe o nosso sustento! 🚜" },
            { t: "Dia do Orgulho Nerd (Dia da Toalha)", m: "Não entre em pânico! Vida longa e próspera! 🖖🤖" },
            { t: "Dia da Indústria Gráfica", m: "Dando vida às cores e ideias no papel!" },
            { t: "Dia Nacional da Adoção", m: "Onde o amor redefine os laços de família. ❤️" },
            { t: "Dia de São Beda", m: "Doutor da Igreja e historiador." },
            { t: "Dia Internacional das Crianças Desaparecidas", m: "Esperança e luta pelo reencontro." }
        ],
"4-26": [
            { t: "Dia Nacional de Combate ao Glaucoma", m: "Cuidar da visão é essencial para o futuro! 👁️" },
            { t: "Dia do Revendedor de Tintas", m: "Homenagem aos profissionais que trazem cor à vida!" },
            { t: "Dia de São Filipe Néri", m: "O santo da alegria e da humildade. 🙏" },
            { t: "Dia do Bombeiro Aeroportuário", m: "Segurança máxima nas pistas e céus! ✈️🚒" },
            { t: "Aniversário de Maceió/AL (Fundação)", m: "Parabéns ao paraíso das águas! 🌊" }
        ],
        "4-27": [
            { t: "Dia do Profissional de TI", m: "Homenagem aos mestres da tecnologia e do suporte! 💻" },
            { t: "Dia do Serviço de Saúde do Exército", m: "Cuidando de quem defende a nossa nação! 🏥" },
            { t: "Dia Nacional da Mata Atlântica", m: "Preservar nossa biodiversidade é urgente! 🌳" },
            { t: "Dia de Santo Agostinho de Cantuária", m: "Apóstolo dos ingleses." },
            { t: "Dia do Corretor de Seguros (Regional)", m: "Protegendo o patrimônio e a vida!" }
        ],
        "4-28": [
            { t: "Dia do Ceramista", m: "Homenagem à arte milenar de moldar a terra! 🏺" },
            { t: "Dia Mundial da Higiene Menstrual", m: "Informação e dignidade para todas as mulheres." },
            { t: "Dia Nacional de Redução da Mortalidade Materna", m: "Saúde e respeito no momento do parto." },
            { t: "Dia de São Germano", m: "Bispo e exemplo de caridade." },
            { t: "Dia do Hambúrguer", m: "Hoje pode! Celebrando o sanduíche mais famoso do mundo! 🍔😋" }
        ],
        "4-29": [
            { t: "Dia do Geógrafo", m: "Homenagem a quem estuda as dinâmicas do nosso planeta! 🌍" },
            { t: "Dia do Estatístico", m: "A ciência dos dados transformando a realidade! 📈" },
            { t: "Dia de São Maximino", m: "Defensor da fé contra o arianismo." },
            { t: "Dia Internacional dos Soldados da Paz da ONU", m: "Homenagem aos Capacetes Azuis! 🕊️" },
            { t: "Aniversário de Ipatinga/MG", m: "Parabéns à força do Vale do Aço! 🏗️" }
        ],
        "4-30": [
            { t: "Dia do Geólogo", m: "Desvendando os segredos das rochas e do solo! 💎" },
            { t: "Dia de Santa Joana d'Arc", m: "Homenagem à heroína e padroeira da França. ⚔️🙏" },
            { t: "Dia do Decorador", m: "Transformando ambientes com estilo e harmonia! 🏠" },
            { t: "Dia Mundial da Esclerose Múltipla", m: "Conscientização e apoio à busca pela cura." },
            { t: "Dia da Mulher Militar", m: "Força, garra e delicadeza servindo à pátria!" }
        ],
        "4-31": [
            { t: "Dia Mundial sem Tabaco", m: "Escolha a vida, escolha respirar melhor! 🚭" },
            { t: "Dia do Comissário de Bordo", m: "Homenagem aos anjos da guarda dos aviões! ✈️" },
            { t: "Dia do Espírito Santo (Data Móvel/Trad.)", m: "Luz e renovação espiritual." },
            { t: "Dia de Santa Petronila", m: "Exemplo de fé cristã." },
            { t: "Dia do Aeromoço", m: "Homenagem à hospitalidade nos céus!" },
            { t: "Dia do Químico (Regional)", m: "A ciência que transforma a matéria!" }
        ],
// --- JUNHO (Mês 5 no sistema) ---
        "5-1": [
            { t: "Dia da Imprensa", m: "Homenagem à liberdade de informação no Brasil! 🎤" },
            { t: "Dia Mundial dos Pais", m: "Celebrando o amor e a dedicação de quem cuida! ❤️" },
            { t: "Dia do Caxixe", m: "Homenagem ao instrumento que dá ritmo ao nosso Brasil! 🪘" },
            { t: "Dia de São Justino", m: "Filósofo e mártir da fé cristã." },
            { t: "Dia Mundial do Leite", m: "Saúde e nutrição para todas as idades! 🥛" }
        ],
        "5-2": [
            { t: "Dia do Pneumologista", m: "Cuidando da nossa respiração e saúde pulmonar! 🫁" },
            { t: "Dia de São Marcelino e São Pedro", m: "Mártires da igreja primitiva." },
            { t: "Dia Internacional da Prostituta", m: "Conscientização sobre direitos e dignidade." },
            { t: "Dia da República Italiana", m: "Homenagem à cultura e história da Itália! 🇮🇹" }
        ],
        "5-3": [
            { t: "Dia Mundial da Bicicleta", m: "Pedalar é saúde para o corpo e para o planeta! 🚲" },
            { t: "Dia do Profissional de RH", m: "Homenagem a quem cuida do maior ativo das empresas: as pessoas!" },
            { t: "Dia de São Carlos Lwanga", m: "Mártir e protetor da juventude africana." },
            { t: "Dia Nacional da Educação Ambiental", m: "Conscientizar hoje para preservar amanhã! 🌱" },
            { t: "Dia do Administrador de Pessoal", m: "Organização e eficiência no trabalho!" }
        ],
        "5-4": [
            { t: "Dia do Engenheiro de Agrimensura", m: "Medindo e mapeando o progresso do nosso solo!" },
            { t: "Dia Internacional das Crianças Vítimas de Agressão", m: "Proteção e paz para a infância." },
            { t: "Dia de Santa Quirina", m: "Fé e devoção espiritual." },
            { t: "Dia do Coroinha", m: "Homenagem aos jovens ajudantes do altar! 🙏" }
        ],
        "5-5": [
            { t: "Dia Mundial do Meio Ambiente", m: "Cuidar da Terra é cuidar de nós mesmos! 🌍🌳" },
            { t: "Dia do Engenheiro de Alimentos", m: "Inovação e segurança no que chega à nossa mesa!" },
            { t: "Dia de São Bonifácio", m: "O apóstolo da Alemanha." },
            { t: "Dia Nacional da Reciclagem", m: "Transforme o lixo em um novo começo! ♻️" },
            { t: "Dia da Cerveja Brasileira", m: "Celebrando a qualidade da nossa gelada! 🍺" }
        ],
        "5-6": [
            { t: "Dia do Teste do Pezinho", m: "Um furinho no pé que garante muita saúde! 👶" },
            { t: "Dia da Logística", m: "Homenagem a quem move o mundo com inteligência!" },
            { t: "Dia de São Norberto", m: "Fundador da Ordem Premonstratense." },
            { t: "Dia Nacional do Engenheiro de Custos", m: "Precisão e planejamento para o sucesso!" },
            { t: "Dia da Língua Russa", m: "Celebrando a cultura e literatura eslava." }
        ],
        "5-7": [
            { t: "Dia da Liberdade de Expressão", m: "O direito fundamental de dizer o que se pensa! 🗣️" },
            { t: "Dia Mundial da Segurança dos Alimentos", m: "Garantindo refeições seguras para todos!" },
            { t: "Dia de Santo Antônio Maria Gianelli", m: "Exemplo de caridade e zelo pastoral." },
            { t: "Dia do Jornalista Auxiliar", m: "Homenagem aos profissionais de apoio à notícia!" },
            { t: "Dia do Funcionário de Escola", m: "Essenciais para o funcionamento da educação!" }
        ],
"5-8": [
            { t: "Dia Mundial dos Oceanos", m: "Proteja o azul do nosso planeta! 🌊" },
            { t: "Dia do Citricultor", m: "Homenagem a quem produz nossas frutas cítricas! 🍊" },
            { t: "Dia de Maria Rainha dos Corações", m: "Devoção e amor espiritual. 🙏" },
            { t: "Dia do Oceanógrafo", m: "Estudando os mistérios das profundezas marinhas!" },
            { t: "Dia Nacional do Oceanógrafo", m: "Homenagem aos guardiões dos mares brasileiros!" }
        ],
        "5-9": [
            { t: "Dia do Porteiro", m: "Homenagem a quem cuida da nossa segurança e recepção! 🏢" },
            { t: "Dia do Tenista", m: "Saúde e foco dentro das quadras! 🎾" },
            { t: "Dia de José de Anchieta", m: "Homenagem ao Apóstolo do Brasil. 🙏" },
            { t: "Dia Nacional da Imunização", m: "Vacinar é um ato de amor e proteção! 💉" },
            { t: "Dia da Biblioteca Escolar", m: "Portas abertas para o saber nas escolas! 📚" }
        ],
        "5-10": [
            { t: "Dia da Artilharia", m: "Homenagem à arma de fogo do Exército! ⚔️" },
            { t: "Dia da Língua Portuguesa (Portugal)", m: "Celebrando Camões e a nossa língua mãe! 🇵🇹" },
            { t: "Dia de São Getúlio", m: "Mártir da fé e coragem." },
            { t: "Dia do Faturista", m: "Homenagem aos profissionais das contas e notas!" }
        ],
        "5-11": [
            { t: "Dia da Marinha Brasileira", m: "Protegendo nossas águas jurisdicionais! ⚓" },
            { t: "Dia do Educador Sanitário", m: "Promovendo saúde e higiene para todos!" },
            { t: "Dia de São Barnabé", m: "Apóstolo conhecido como o 'Filho da Consolação'." },
            { t: "Dia Nacional do Egresso", m: "Apoio à ressocialização e novas oportunidades." }
        ],
        "5-12": [
            { t: "Dia dos Namorados", m: "O amor está no ar! Feliz dia para todos os casais! ❤️🌹" },
            { t: "Dia Mundial contra o Trabalho Infantil", m: "Lugar de criança é na escola e brincando! 🧸" },
            { t: "Dia do Correio Aéreo Nacional", m: "Integrando o Brasil pelos céus! ✈️" },
            { t: "Dia de São Gaspar de Búfalo", m: "O apóstolo do Sangue de Cristo." },
            { t: "Dia do Enxadrista", m: "Estratégia e inteligência no tabuleiro! ♟️" }
        ],
        "5-13": [
            { t: "Dia de Santo Antônio", m: "Salve o Santo Casamenteiro! Muita fé e festa junina! 🔥🙏" },
            { t: "Dia do Turismólogo", m: "Planejando as melhores experiências de viagem!" },
            { t: "Dia do Perito Criminal", m: "A ciência a serviço da justiça! 🔍" },
            { t: "Dia de Santa Felícula", m: "Mártir da pureza e da fé." },
            { t: "Dia do Publicitário (Regional)", m: "Criatividade que comunica e vende!" }
        ],
        "5-14": [
            { t: "Dia Mundial do Doador de Sangue", m: "Doe sangue, doe vida! Um gesto que salva! 🩸❤️" },
            { t: "Dia do Solista", m: "Homenagem ao talento individual na música!" },
            { t: "Dia de São Eliseu", m: "Profeta e sucessor de Elias." },
            { t: "Dia da Manicure", m: "Homenagem às profissionais da beleza das mãos! 💅" }
        ],
        "5-15": [
            { t: "Dia do Paleontólogo", m: "Desvendando o passado através dos fósseis! 🦴" },
            { t: "Dia do Programador (Regional)", m: "Transformando café em código! 💻☕" },
            { t: "Dia de Santa Germana Cousin", m: "Exemplo de paciência e humildade." },
            { t: "Dia Nacional do Idoso (Antigo/Trad.)", m: "Respeito a quem tem muita história para contar!" },
            { t: "Dia da Reforma Agrária", m: "Refletindo sobre a justiça no campo." }
        ],
"5-16": [
            { t: "Dia do Engenheiro de Custos", m: "Precisão e planejamento para o sucesso das obras!" },
            { t: "Dia de São Benno", m: "Padroeiro dos pescadores e de Munique." },
            { t: "Dia Internacional da Convivência em Paz", m: "Por um mundo com mais tolerância e harmonia!" },
            { t: "Dia do Biógrafo", m: "Homenagem a quem imortaliza a história das pessoas! ✍️" }
        ],
        "5-17": [
            { t: "Dia do Funcionário Público Aposentado", m: "Homenagem a quem dedicou anos ao serviço da nação! 🏛️" },
            { t: "Dia Mundial de Combate à Desertificação", m: "Cuidar da terra para evitar a seca extrema! 🌱" },
            { t: "Dia de São Ranieri", m: "Padroeiro dos viajantes." },
            { t: "Dia do Gestor Comercial", m: "Liderança e estratégia no mundo dos negócios!" }
        ],
        "5-18": [
            { t: "Dia do Químico", m: "Homenagem aos profissionais que transformam a matéria! 🧪" },
            { t: "Dia da Imigração Japonesa", m: "Homenagem à cultura e contribuição nipônica no Brasil! 🇯🇵🇧🇷" },
            { t: "Dia de São Gregório Barbarigo", m: "Exemplo de caridade e sabedoria." },
            { t: "Dia do Orgulho Autista", m: "Celebrando a neurodiversidade e o respeito! 🧩" }
        ],
        "5-19": [
            { t: "Dia do Cinema Brasileiro", m: "Luz, câmera, ação! Homenagem à nossa sétima arte! 🎬" },
            { t: "Dia do Migrante", m: "Respeito e acolhimento a quem busca um novo lar." },
            { t: "Dia de São Romualdo", m: "Fundador da Ordem dos Camaldulenses." },
            { t: "Dia Nacional de Luta contra a Anemia Falciforme", m: "Conscientização e cuidado com a saúde!" }
        ],
        "5-20": [
            { t: "Início do Inverno (Solstício)", m: "Bem-vinda, estação do frio e do aconchego! ❄️🧣" },
            { t: "Dia do Vigilante", m: "Homenagem aos guardiões da nossa segurança diária!" },
            { t: "Dia do Revendedor", m: "Parabéns aos parceiros do comércio!" },
            { t: "Dia Mundial do Refugiado", m: "Por dignidade e proteção a todos os povos. 🌍" },
            { t: "Dia de Santa Florentina", m: "Fé e dedicação monástica." }
        ],
        "5-21": [
            { t: "Dia do Intelectual", m: "Homenagem àqueles que movem o mundo com o pensamento!" },
            { t: "Dia da Mídia", m: "Celebrando os canais que nos mantêm informados! 📺" },
            { t: "Dia do Aperto de Mão", m: "Um gesto simples que sela amizades e negócios! 🤝" },
            { t: "Dia de São Luís Gonzaga", m: "Padroeiro da juventude cristã. 🙏" },
            { t: "Dia Universal da Oração", m: "Um momento de conexão espiritual global." }
        ],
        "5-22": [
            { t: "Dia do Orquidófilo", m: "Homenagem aos cultivadores dessas flores magníficas! 🌸" },
            { t: "Dia de São Tomé More", m: "Padroeiro dos políticos e governantes." },
            { t: "Dia do Aeroviário", m: "Homenagem aos profissionais que trabalham em solo nos aeroportos! ✈️" },
            { t: "Dia do Gráfico (Regional)", m: "Dando cor e vida às impressões!" }
        ],
        "5-23": [
            { t: "Dia do Lavrador", m: "Homenagem a quem cultiva o solo com suor e dedicação! 🚜" },
            { t: "Dia das Nações Unidas para o Serviço Público", m: "Homenagem aos servidores do povo!" },
            { t: "Dia de São José Cafasso", m: "Padroeiro dos encarcerados e condenados." },
            { t: "Dia do Atleta Olímpico", m: "Celebrando a superação e o espírito esportivo! 🏅" },
            { t: "Dia Internacional das Viúvas", m: "Conscientização sobre direitos e apoio." }
        ],
"5-24": [
            { t: "Dia de São João", m: "Viva São João! O auge das festas juninas com muita alegria! 🔥🌽" },
            { t: "Dia do Caboclo", m: "Homenagem à figura mística e histórica do folclore brasileiro!" },
            { t: "Dia Internacional do Leite", m: "Celebrando a importância nutricional deste alimento! 🥛" },
            { t: "Dia do Disco Voador", m: "O universo é vasto! Você acredita? 🛸👽" },
            { t: "Dia da Polícia Militar (Regional)", m: "Honra aos protetores da sociedade!" }
        ],
        "5-25": [
            { t: "Dia do Censor", m: "Homenagem aos profissionais que analisam conteúdos!" },
            { t: "Dia do Imigrante", m: "Homenagem a todos que escolheram o Brasil como lar! 🇧🇷" },
            { t: "Dia de São Guilherme de Vercelli", m: "Exemplo de vida eremítica e oração." },
            { t: "Dia Mundial do Vitiligo", m: "Conscientização e respeito à diversidade da pele." },
            { t: "Dia do Marujo", m: "Salve a Marinha e os homens do mar! ⚓" }
        ],
        "5-26": [
            { t: "Dia Internacional contra o Abuso de Drogas", m: "Prevenção e apoio à vida!" },
            { t: "Dia do Metrologista", m: "Homenagem aos mestres das medições e precisão!" },
            { t: "Dia de São Josemaria Escrivá", m: "Fundador do Opus Dei." },
            { t: "Dia Nacional do Diabetes", m: "Conscientização para uma vida mais doce e saudável! ❤️" },
            { t: "Dia do Apoio às Vítimas de Tortura", m: "Pela dignidade e direitos humanos fundamentais." }
        ],
        "5-27": [
            { t: "Dia Nacional do Vôlei", m: "Celebrando um dos esportes que mais traz orgulho ao Brasil! 🏐" },
            { t: "Dia do Mestiço", m: "Homenagem à mistura que forma o povo brasileiro!" },
            { t: "Dia de Nossa Senhora do Perpétuo Socorro", m: "Mãe de amor e auxílio constante. 🙏" },
            { t: "Dia do Técnico em Nutrição", m: "Cuidando da base da nossa saúde: a alimentação!" },
            { t: "Dia das Micro e Pequenas Empresas", m: "O motor da nossa economia! 🏢" }
        ],
        "5-28": [
            { t: "Dia Internacional do Orgulho LGBTQIA+", m: "Respeito, amor e orgulho de ser quem você é! 🏳️‍🌈" },
            { t: "Dia da Renovação Espiritual", m: "Um momento para recarregar as energias da alma." },
            { t: "Dia de Santo Ireneu", m: "Grande teólogo e bispo da igreja primitiva." },
            { t: "Dia da Telefonista", m: "Homenagem à voz que conecta as pessoas!" }
        ],
        "5-29": [
            { t: "Dia de São Pedro e São Paulo", m: "Homenagem aos pilares da igreja e padroeiro dos pescadores! ⚓🙏" },
            { t: "Dia do Pescador", m: "Homenagem a quem tira o sustento das águas! 🎣" },
            { t: "Dia do Telefonista", m: "Comunicação e dedicação profissional!" },
            { t: "Dia do Papa", m: "Homenagem ao sucessor de Pedro e líder da Igreja Católica." },
            { t: "Dia da Engenharia de Petróleo", m: "Tecnologia e energia para o mundo!" }
        ],
        "5-30": [
            { t: "Dia do Caminhoneiro", m: "Homenagem aos heróis das estradas que movem o país! 🚚🛣️" },
            { t: "Dia do Economista (Regional)", m: "Analisando e planejando o futuro financeiro!" },
            { t: "Dia de São Marçal", m: "Padroeiro dos bombeiros e protetor contra incêndios." },
            { t: "Dia Mundial das Redes Sociais", m: "Conectando o mundo em um clique! 📱✨" },
            { t: "Dia do Biotecnologista", m: "Ciência e inovação para a vida!" }
        ],
// --- JULHO (Mês 6 no sistema) ---
        "6-1": [
            { t: "Dia da Vacina contra o BCG", m: "Proteção contra a tuberculose desde o nascimento! 💉" },
            { t: "Dia do Arquiteto (Antiga/Trad.)", m: "Homenagem aos criadores de espaços e formas!" },
            { t: "Dia de São Simão", m: "Fé e devoção cristã." },
            { t: "Dia Mundial das Bibliotecas", m: "Celebrando os templos do conhecimento! 📚" },
            { t: "Aniversário de Bragança Paulista/SP", m: "Parabéns à Cidade Poesia!" }
        ],
        "6-2": [
            { t: "Dia do Hospital", m: "Homenagem às instituições que salvam vidas 24h! 🏥" },
            { t: "Dia do Bombeiro Brasileiro", m: "Heróis do fogo e da vida! Parabéns à corporação! 👨‍🚒" },
            { t: "Independência da Bahia", m: "Marco histórico da luta pela liberdade do Brasil! 🇧🇷" },
            { t: "Dia de São Bernardino Realino", m: "Exemplo de caridade e justiça." }
        ],
        "6-3": [
            { t: "Dia do Algodão", m: "Homenagem à fibra que move a indústria têxtil! ☁️" },
            { t: "Dia Nacional de Combate à Discriminação Racial", m: "Por um mundo com igualdade e respeito! ✊" },
            { t: "Dia de São Tomé", m: "O apóstolo que precisou ver para crer. 🙏" },
            { t: "Dia do Juiz de Menores", m: "Zelando pelo futuro das nossas crianças!" }
        ],
        "6-4": [
            { t: "Dia do Operador de Telemarketing", m: "Paciência e dedicação na voz que nos atende! 🎧" },
            { t: "Dia de Santa Isabel de Portugal", m: "A rainha santa e conciliadora." },
            { t: "Dia da Independência dos EUA (Curiosidade)", m: "4th of July! O feriado mais famoso da cultura pop! 🇺🇸" },
            { t: "Dia do Atleta de Tiro", m: "Precisão e concentração no esporte! 🎯" }
        ],
        "6-5": [
            { t: "Dia da Gastronomia Mineira", m: "Pão de queijo, feijão tropeiro e muito sabor! 🧀🥘" },
            { t: "Dia de Santo Antônio Maria Zaccaria", m: "Médico e fundador dos Barnabitas." },
            { t: "Dia da Fundação das Instituições de Assistência aos Psicopatas", m: "História da saúde mental no Brasil." },
            { t: "Dia do Biquíni", m: "Homenagem à peça que revolucionou a moda praia! 👙" }
        ],
        "6-6": [
            { t: "Dia do Coroinha", m: "Homenagem aos jovens ajudantes no serviço do altar! 🙏" },
            { t: "Dia de Santa Maria Goretti", m: "A mártir da pureza." },
            { t: "Dia Mundial das Zoonoses", m: "Conscientização sobre doenças transmitidas por animais." },
            { t: "Dia da Criação do IBGE", m: "Homenagem aos dados que mapeiam o nosso país! 📊" }
        ],
        "6-7": [
            { t: "Dia Mundial do Chocolate", m: "Hoje a dieta espera! Celebrando a melhor iguaria do mundo! 🍫😋" },
            { t: "Dia do Voluntariado Social", m: "Doar tempo é um dos maiores atos de amor!" },
            { t: "Dia de São Panteno", m: "O mestre da escola de Alexandria." },
            { t: "Dia do Ingresso das Mulheres na Marinha", m: "Homenagem à força feminina nos mares! ⚓" }
        ],
"6-8": [
            { t: "Dia do Panificador", m: "Homenagem aos mestres do pão quentinho de cada dia! 🥖" },
            { t: "Dia Nacional da Ciência", m: "Celebrando o conhecimento e a pesquisa no Brasil! 🔬" },
            { t: "Dia do Pesquisador Científico", m: "Homenagem aos que buscam respostas para o futuro!" },
            { t: "Dia de Santo Adriano III", m: "Fé e história do papado." }
        ],
        "6-9": [
            { t: "Revolução Constitucionalista de 1932", m: "Data Magna do Estado de São Paulo! 🏛️🇧🇷" },
            { t: "Dia do Protético", m: "Homenagem aos artesãos do sorriso!" },
            { t: "Dia de Santa Paulina", m: "Homenagem à primeira santa do Brasil! 🙏" },
            { t: "Dia do Datiloscopista", m: "A ciência da identificação pelas digitais! ☝️" }
        ],
        "6-10": [
            { t: "Dia da Pizza", m: "Com borda ou sem borda? Hoje é dia de celebrar essa delícia! 🍕😋" },
            { t: "Dia do Engenheiro de Minas", m: "Homenagem aos profissionais que exploram as riquezas do solo!" },
            { t: "Dia de Santa Verônica Giuliani", m: "Exemplo de mística e devoção." },
            { t: "Dia Nacional da Saúde Ocular", m: "Cuidar da visão é essencial!" }
        ],
        "6-11": [
            { t: "Dia Mundial da População", m: "Refletindo sobre o futuro do nosso planeta! 🌍" },
            { t: "Dia do Socorrista", m: "Homenagem a quem chega primeiro para salvar vidas! 🚑" },
            { t: "Dia de São Bento", m: "Padroeiro da Europa e mestre da vida monástica. 🙏" },
            { t: "Dia do Rondonista", m: "Homenagem ao espírito de serviço e cidadania!" }
        ],
        "6-12": [
            { t: "Dia do Engenheiro Florestal", m: "Cuidando da preservação das nossas matas e florestas! 🌳" },
            { t: "Dia de São João Gualberto", m: "Protetor dos guardas florestais." },
            { t: "Dia do Outdoor", m: "Homenagem à comunicação que colore as cidades!" }
        ],
        "6-13": [
            { t: "Dia Mundial do Rock", m: "Aumenta o som! Hoje é dia de celebrar o ritmo que mudou o mundo! 🎸🤘" },
            { t: "Dia do Engenheiro de Saneamento", m: "Saúde pública através da engenharia!" },
            { t: "Dia do Cantor", m: "Homenagem à voz que emociona e encanta! 🎤" },
            { t: "Dia de Santo Henrique", m: "Padroeiro dos governantes e das famílias numerosas." },
            { t: "Estatuto da Criança e do Adolescente (ECA)", m: "Aniversário da lei que protege o futuro do Brasil!" }
        ],
        "6-14": [
            { t: "Dia do Propagandista Laboratorial", m: "Conectando a ciência médica ao tratamento!" },
            { t: "Dia do Engenheiro de Aquicultura", m: "Desenvolvendo a produção sustentável nas águas!" },
            { t: "Dia de São Camilo de Lellis", m: "Padroeiro dos doentes e dos hospitais." },
            { t: "Dia da Liberdade de Pensamento", m: "Um dos pilares da dignidade humana." }
        ],
        "6-15": [
            { t: "Dia dos Homens", m: "Homenagem e conscientização sobre a saúde masculina! 🧔" },
            { t: "Dia Nacional dos Clubes", m: "Celebrando o convívio social e esportivo!" },
            { t: "Dia de São Boaventura", m: "Doutor da Igreja e filósofo." },
            { t: "Dia do Pecuarista", m: "Homenagem a quem move a força do campo! 🐂" }
        ],
"6-16": [
            { t: "Dia do Comerciante", m: "Homenagem a quem move a economia e o atendimento! 🛒" },
            { t: "Dia de Nossa Senhora do Carmo", m: "Padroeira da Ordem dos Carmelitas. 🙏" },
            { t: "Dia do Auditor Fiscal", m: "Homenagem aos guardiões da arrecadação e justiça fiscal!" },
            { t: "Dia Nacional do Policial Rodoviário Federal", m: "Segurança e ordem nas nossas rodovias! 🚔" }
        ],
        "6-17": [
            { t: "Dia de Proteção às Florestas", m: "Cuidar das nossas matas é garantir o futuro! 🌳" },
            { t: "Dia do Curupira", m: "Homenagem ao guardião lendário das nossas matas! 👣" },
            { t: "Dia de Santa Marcelina", m: "Exemplo de vida consagrada e educação." },
            { t: "Dia Mundial do Emoji", m: "Expressando emoções na era digital! 😀✨" }
        ],
        "6-18": [
            { t: "Dia Nacional do Fabricante de Sorvete", m: "Homenagem a quem traz doçura e frescor aos nossos dias! 🍦" },
            { t: "Dia Internacional Nelson Mandela", m: "Celebrando a luta pela liberdade e igualdade! 🌍" },
            { t: "Dia de São Francisco Solano", m: "O apóstolo da América do Sul." },
            { t: "Dia do Seguro de Acidentes do Trabalho", m: "Conscientização sobre a proteção do trabalhador." }
        ],
        "6-19": [
            { t: "Dia do Futebol", m: "Homenagem à grande paixão nacional! ⚽🇧🇷" },
            { t: "Dia da Caridade", m: "Pequenos gestos transformam o mundo! ❤️" },
            { t: "Dia de Santo Arsênio", m: "Exemplo de silêncio e oração." },
            { t: "Dia das Juntas Comerciais", m: "Homenagem à organização do comércio brasileiro!" }
        ],
        "6-20": [
            { t: "Dia do Amigo e Internacional da Amizade", m: "Feliz dia para quem torna a vida mais leve! 🤗" },
            { t: "Para o(a) amigo(a): [ Digite o nome aqui ]", m: "Nossa amizade é um presente que eu celebro todos os dias! Obrigado por estar sempre por perto. ❤️" },
            { t: "Dia da Chegada do Homem à Lua", m: "Um pequeno passo para o homem, um salto para a humanidade! 🚀🌕" },
            { t: "Dia do Tatuador", m: "Arte na pele que eterniza histórias! ✒️🎨" },
            { t: "Dia de Santa Margarida de Antioquia", m: "Mártir da fé e coragem." }
        ],
        "6-21": [
            { t: "Dia do Garimpeiro", m: "Homenagem aos trabalhadores das riquezas do solo!" },
            { t: "Dia de São Lourenço de Brindisi", m: "Doutor da Igreja e grande pregador." },
            { t: "Dia Nacional de Combate ao Câncer de Cabeça e Pescoço", m: "Prevenir é sempre o melhor caminho! 🎗️" }
        ],
        "6-22": [
            { t: "Dia do Cantor Lírico", m: "Homenagem à potência e emoção da voz clássica! 🎶" },
            { t: "Dia de Santa Maria Madalena", m: "Apóstola dos apóstolos." },
            { t: "Dia do Trabalho Doméstico", m: "Homenagem a quem cuida do coração da casa! 🏠" }
        ],
        "6-23": [
            { t: "Dia do Guarda Rodoviário", m: "Homenagem aos patrulheiros das nossas estradas!" },
            { t: "Dia de Santa Brígida", m: "Padroeira da Suécia e co-padroeira da Europa." },
            { t: "Dia do Policial Militar (Regional)", m: "Honra e proteção à sociedade!" }
        ],
"6-24": [
            { t: "Dia do Suplicante", m: "Um momento de humildade e pedido de luz." },
            { t: "Dia de São Charbel Makhlouf", m: "Santo eremita do Líbano." },
            { t: "Dia da Polícia Civil (Regional)", m: "Homenagem aos investigadores e protetores da ordem!" }
        ],
        "6-25": [
            { t: "Dia do Escritor", m: "Homenagem a quem eterniza ideias e mundos no papel! ✍️" },
            { t: "Dia do Motorista", m: "Homenagem aos profissionais que movem o progresso nas estradas! 🚚" },
            { t: "Dia do Colono", m: "Celebrando a força de quem trabalha na terra! 🚜" },
            { t: "Dia de São Cristóvão", m: "Padroeiro dos motoristas e viajantes. 🙏" },
            { t: "Dia do Ilustrador", m: "Homenagem aos artistas que dão forma às ideias!" },
            { t: "Dia Mundial da Prevenção do Afogamento", m: "Segurança na água salva vidas! 🌊" }
        ],
        "6-26": [
            { t: "Dia dos Avós", m: "Um beijo carinhoso em quem é amor em dobro! 👵👴❤️" },
            { t: "Dia de São Joaquim e Santa Ana", m: "Homenagem aos avós de Jesus." },
            { t: "Dia do Arqueólogo", m: "Desvendando a história da humanidade através do tempo! 🏺" },
            { t: "Dia Nacional do Intérprete de Libras", m: "Acessibilidade e inclusão através da língua de sinais! 🤟" }
        ],
        "6-27": [
            { t: "Dia do Motociclista", m: "Liberdade sobre duas rodas! Respeito e segurança sempre! 🏍️" },
            { t: "Dia do Pediatra", m: "Cuidando com carinho do futuro do nosso mundo: as crianças! 👶" },
            { t: "Dia de São Pantaleão", m: "Padroeiro dos médicos e das parteiras." },
            { t: "Dia da Prevenção de Acidentes de Trabalho", m: "Segurança em primeiro lugar, sempre! 👷" }
        ],
        "6-28": [
            { t: "Dia do Agricultor", m: "Homenagem a quem planta o sustento da nossa nação! 🌾" },
            { t: "Dia Mundial de Luta contra as Hepatites Virais", m: "Conscientização, teste e tratamento! 🎗️" },
            { t: "Dia de São Pedro Poveda", m: "Educador e mártir da fé." }
        ],
        "6-29": [
            { t: "Dia do Identificador", m: "Homenagem aos profissionais da identificação civil!" },
            { t: "Dia de Santa Marta", m: "Padroeira das cozinheiras e donas de casa. 🙏" },
            { t: "Dia Internacional do Tigre", m: "Preservar as espécies é proteger o planeta! 🐯" }
        ],
        "6-30": [
            { t: "Dia do Administrador de Condomínios", m: "Homenagem a quem cuida da harmonia do nosso lar!" },
            { t: "Dia de São Pedro Crisólogo", m: "Doutor da Igreja e mestre da palavra." },
            { t: "Dia Internacional da Amizade (ONU)", m: "Promovendo a paz entre os povos através da amizade! 🌍" },
            { t: "Dia Mundial contra o Tráfico de Pessoas", m: "Luta pela dignidade e liberdade humana." }
        ],
        "6-31": [
            { t: "Dia do Outdoor", m: "Homenagem à mídia que faz parte da paisagem urbana!" },
            { t: "Dia de Santo Inácio de Loyola", m: "Fundador da Companhia de Jesus." },
            { t: "Dia do Orgasmo", m: "Conscientização sobre saúde sexual e autoconhecimento." }
        ],
// --- AGOSTO (Mês 7 no sistema) ---
        "7-1": [
            { t: "Dia do Selo Postal Brasileiro", m: "Homenagem à história das comunicações no Brasil! ✉️" },
            { t: "Dia do Cerealista", m: "Homenagem a quem trabalha com os grãos que alimentam o país!" },
            { t: "Dia de Santo Afonso de Ligório", m: "Doutor da Igreja e padroeiro dos confessores e moralistas." }
        ],
        "7-2": [
            { t: "Dia do Início da Semana da Cultura Nordestina", m: "Celebrando a riqueza e o orgulho do nosso Nordeste! 🌵☀️" },
            { t: "Dia de Santo Eusébio de Vercelli", m: "Defensor da fé cristã." }
        ],
        "7-3": [
            { t: "Dia do Capoeirista", m: "Ginga, arte e resistência da nossa cultura! 🤸‍♂️" },
            { t: "Dia do Timbreador", m: "Homenagem aos profissionais das artes gráficas!" },
            { t: "Dia de Santa Lídia", m: "A primeira convertida de São Paulo na Europa." }
        ],
        "7-4": [
            { t: "Dia do Padre", m: "Homenagem aos guias espirituais das nossas comunidades! 🙏" },
            { t: "Dia de São João Maria Vianney", m: "Padroeiro dos padres e párocos." }
        ],
        "7-5": [
            { t: "Dia Nacional da Saúde", m: "Celebrando o nascimento de Oswaldo Cruz. Cuide-se! 🏥" },
            { t: "Dia do Médico Sanitarista", m: "Homenagem aos guardiões da saúde pública!" },
            { t: "Dia da Farmácia", m: "Profissionais essenciais para o nosso bem-estar! 💊" }
        ],
        "7-6": [
            { t: "Dia da Revolução de 1924 (Regional)", m: "Memória histórica da cidade de São Paulo." },
            { t: "Dia do Profissional da Educação", m: "Homenagem a quem constrói o futuro através do ensino! 📚" },
            { t: "Dia do Transplante de Medula Óssea", m: "Um gesto que salva vidas. Seja doador! ❤️" }
        ],
        "7-7": [
            { t: "Dia de São Caetano", m: "O santo da providência e padroeiro dos desempregados. 🙏" },
            { t: "Dia do Maratonista", m: "Foco, fôlego e superação a cada quilômetro! 🏃‍♂️" }
        ],
        "7-8": [
            { t: "Dia do Pároco", m: "Homenagem aos pastores das paróquias!" },
            { t: "Dia de São Domingos de Gusmão", m: "Fundador da Ordem dos Pregadores." }
        ],
        "7-9": [
            { t: "Dia Internacional dos Povos Indígenas", m: "Respeito à cultura e aos direitos dos povos originários! 🏹" },
            { t: "Dia do Equitador", m: "Homenagem aos mestres da arte de cavalgar! 🐎" }
        ],
        "7-10": [
            { t: "Dia da Enfermeira", m: "Homenagem ao carinho e dedicação no cuidar! 🏥💉" },
            { t: "Dia de São Lourenço", m: "Padroeiro dos cozinheiros e diáconos." }
        ],
        "7-11": [
            { t: "Dia do Estudante", m: "Homenagem a quem busca no conhecimento a chave para o futuro! 🎓" },
            { t: "Dia do Advogado", m: "Defendendo a justiça e os direitos do cidadão! ⚖️" },
            { t: "Dia do Garçom", m: "Homenagem à simpatia e ao serviço de quem nos atende! 🍽️" },
            { t: "Dia de Santa Clara de Assis", m: "Padroeira da televisão e dos meios de comunicação. ✨" }
        ],
        "7-12": [
            { t: "Dia Nacional das Artes", m: "Celebrando todas as formas de expressão e criatividade! 🎨" },
            { t: "Dia de Santa Joana de Chantal", m: "Exemplo de fé e fundadora da Ordem da Visitação." }
        ],
        "7-13": [
            { t: "Dia do Economista", m: "Homenagem aos profissionais que analisam e planejam o mercado!" },
            { t: "Dia do Canhoto", m: "Homenagem a quem usa o lado esquerdo com muita habilidade! 🙌" },
            { t: "Dia de São Ponciano e Santo Hipólito", m: "Testemunhos de unidade na Igreja." }
        ],
        "7-14": [
            { t: "Dia do Cardiologista", m: "Cuidando do motor da nossa vida: o coração! ❤️" },
            { t: "Dia de São Maximiliano Kolbe", m: "O mártir da caridade em Auschwitz." }
        ],
        "7-15": [
            { t: "Dia da Informática", m: "Celebrando a tecnologia que conecta e move o mundo moderno! 💻" },
            { t: "Dia dos Solteiros", m: "Quem disse que precisa de par para ser feliz? Aproveite! 😉" },
            { t: "Dia de São Tarcísio", m: "Padroeiro dos acólitos e coroinhas." }
        ],
"7-16": [
            { t: "Dia do Filósofo", m: "Homenagem aos que buscam a sabedoria e questionam o mundo! 🧠" },
            { t: "Dia de Santo Estêvão da Hungria", m: "Rei e padroeiro da Hungria." },
            { t: "Dia do Digitador", m: "Homenagem à agilidade e precisão nas teclas!" }
        ],
        "7-17": [
            { t: "Dia do Patrimônio Histórico Nacional", m: "Preservar nossa história é manter viva a nossa identidade! 🏛️" },
            { t: "Dia de São Jacinto", m: "Apóstolo do Norte e exemplo de fé." }
        ],
        "7-18": [
            { t: "Dia do Estagiário", m: "Homenagem a quem está dando os primeiros passos na carreira! 🚀" },
            { t: "Dia de Santa Helena", m: "A imperatriz que buscou a Santa Cruz." }
        ],
        "7-19": [
            { t: "Dia Mundial da Fotografia", m: "Celebrando a arte de eternizar momentos em um clique! 📸" },
            { t: "Dia do Artista de Teatro", m: "Aplausos para quem dá vida aos palcos! 🎭" },
            { t: "Dia de São João Eudes", m: "Promotor da devoção aos Sagrados Corações." }
        ],
        "7-20": [
            { t: "Dia do Maçom", m: "Homenagem à fraternidade e busca pelo aperfeiçoamento!" },
            { t: "Dia de São Bernardo", m: "Doutor da Igreja e místico." }
        ],
        "7-21": [
            { t: "Dia do Catequista", m: "Homenagem a quem dedica a vida a ensinar a fé! 🙏" },
            { t: "Dia de São Pio X", m: "O Papa da Eucaristia." }
        ],
        "7-22": [
            { t: "Dia do Folclore", m: "Celebrando os mitos, lendas e tradições do nosso povo! 🧜‍♀️" },
            { t: "Dia de Nossa Senhora Rainha", m: "A realeza de Maria no céu e na terra. ✨" }
        ],
        "7-23": [
            { t: "Dia do Internauta", m: "Homenagem a quem navega e constrói o mundo digital! 🌐" },
            { t: "Dia de Santa Rosa de Lima", m: "Padroeira da América Latina e das flores." }
        ],
        "7-24": [
            { t: "Dia da Infância", m: "Proteger as crianças é garantir um futuro melhor! 🧸" },
            { t: "Dia do Artista Plástico", m: "Homenagem a quem transforma imaginação em obra! 🎨" },
            { t: "Dia de São Bartolomeu", m: "Um dos doze apóstolos de Jesus." }
        ],
        "7-25": [
            { t: "Dia do Soldado", m: "Homenagem à bravura e dedicação dos defensores da Pátria! 🎖️" },
            { t: "Dia do Feirante", m: "Homenagem a quem traz o frescor do campo para a nossa mesa! 🍎" },
            { t: "Dia de São Luís de França", m: "O rei exemplo de justiça e piedade." }
        ],
        "7-26": [
            { t: "Dia Internacional da Igualdade Feminina", m: "Pela justiça e direitos iguais para todas as mulheres! ✊" },
            { t: "Dia de São Zeferino", m: "Papa e mártir da igreja primitiva." }
        ],
        "7-27": [
            { t: "Dia do Psicólogo", m: "Cuidar da mente é fundamental para uma vida plena! 🧠❤️" },
            { t: "Dia do Corretor de Imóveis", m: "Homenagem a quem ajuda a realizar o sonho da casa própria!" },
            { t: "Dia de Santa Mônica", m: "Exemplo de oração e paciência pela família. 🙏" }
        ],
        "7-28": [
            { t: "Dia do Avicultor", m: "Homenagem aos produtores de aves e ovos!" },
            { t: "Dia de Santo Agostinho", m: "Um dos maiores filósofos e teólogos da história." }
        ],
        "7-29": [
            { t: "Dia Nacional de Combate ao Fumo", m: "Escolha o fôlego, escolha a vida! 🚭" },
            { t: "Dia do Martírio de São João Batista", m: "Memória da coragem do precursor de Cristo." }
        ],
        "7-30": [
            { t: "Dia do Vendedor", m: "Homenagem à garra de quem move o comércio todos os dias! 🤝" },
            { t: "Dia de São Félix e Santo Adauto", m: "Mártires da fé cristã." }
        ],
        "7-31": [
            { t: "Dia do Nutricionista", m: "Alimentar-se bem é investir na sua saúde e longevidade! 🥗" },
            { t: "Dia de São Raimundo Nonato", m: "Padroeiro das gestantes e das parteiras." }
        ],
      // --- SETEMBRO (Mês 8 no sistema) ---
        "8-1": [
            { t: "Dia do Profissional de Educação Física", m: "Saúde e movimento! Homenagem a quem nos coloca em forma! 🏃‍♂️💪" },
            { t: "Dia do Endocrinologista", m: "Cuidando do equilíbrio hormonal do nosso corpo!" },
            { t: "Dia do Caixeiro-Viajante", m: "Homenagem aos pioneiros das vendas e estradas!" },
            { t: "Dia de Santa Beatriz da Silva", m: "Fundadora da Ordem da Imaculada Conceição." },
            { t: "Início do Setembro Amarelo", m: "Mês de prevenção ao suicídio. Falar é a melhor solução! 💛" }
        ],
        "8-2": [
            { t: "Dia do Florista", m: "Homenagem a quem traz cor e perfume para nossas vidas! 🌻" },
            { t: "Dia do Repórter Fotográfico", m: "O olhar que eterniza a notícia em uma imagem! 📸" },
            { t: "Dia de Santa Doroteia", m: "Exemplo de fé e constância." },
            { t: "Aniversário de Blumenau/SC", m: "Parabéns à cidade da Oktoberfest e da cultura alemã! 🍺" }
        ],
        "8-3": [
            { t: "Dia do Biólogo", m: "Homenagem aos guardiões da vida e da biodiversidade! 🔬🌿" },
            { t: "Dia do Guarda Civil", m: "Proteção e serviço à comunidade local!" },
            { t: "Dia de São Gregório Magno", m: "Doutor da Igreja e padroeiro dos músicos." },
            { t: "Dia das Organizações Populares", m: "Celebrando a força da união coletiva!" }
        ],
        "8-4": [
            { t: "Dia do Serventuário da Justiça", m: "Essenciais para o funcionamento do judiciário!" },
            { t: "Dia de Santa Rosália", m: "Padroeira contra a peste e grandes males." },
            { t: "Dia Nacional do Taekwondo", m: "Disciplina e força nesta arte marcial milenar! 🥋" },
            { t: "Dia do Vinho do Porto", m: "Celebrando a tradição e o sabor deste clássico! 🍷" }
        ],
        "8-5": [
            { t: "Dia da Amazônia", m: "Proteger o pulmão do mundo é dever de todos nós! 🌳🦜" },
            { t: "Dia do Oficial de Justiça", m: "A voz da lei chegando onde precisa!" },
            { t: "Dia de Santa Teresa de Calcutá", m: "O maior exemplo de caridade e amor aos pobres. ❤️" },
            { t: "Dia do Irmão", m: "Um abraço especial para aquele que é seu primeiro amigo! 👫" },
            { t: "Dia do Farmacêutico Oficial", m: "Ciência e saúde a serviço da população!" }
        ],
        "8-6": [
            { t: "Dia do Alfaiate", m: "Homenagem à elegância e precisão do corte manual! ✂️" },
            { t: "Dia da Unificação da Bulgária", m: "Data histórica e cultural importante." },
            { t: "Dia de São Zacarias", m: "Profeta da esperança e da justiça." },
            { t: "Dia do Barbeiro", m: "Homenagem aos mestres da barba e do visual! 💈" }
        ],
        "8-7": [
            { t: "Independência do Brasil", m: "O grito de liberdade que marcou a nossa história! 🇧🇷✨" },
            { t: "Dia da Esperança", m: "Um dia para renovar os sonhos e a fé no amanhã!" },
            { t: "Dia de Santa Regina", m: "Mártir da pureza e da fé cristã." },
            { t: "Dia do Radialista (Regional)", m: "Homenagem à voz que nos acompanha em todo lugar! 📻" },
            { t: "Dia Mundial do Reumatismo", m: "Conscientização sobre a saúde das articulações." }
        ],
"8-8": [
            { t: "Dia de Nossa Senhora da Natividade", m: "Celebrando o nascimento da Mãe de Jesus. 🙏" },
            { t: "Dia do Alfabetizador", m: "Homenagem a quem abre as portas do mundo através da leitura!" },
            { t: "Dia Nacional de Luta contra a Esclerose Lateral Amiotrófica (ELA)", m: "Consciencialização e apoio à pesquisa." },
            { t: "Dia de São Sérgio I", m: "Papa e defensor da fé." },
            { t: "Dia Mundial da Fisioterapia", m: "Homenagem aos profissionais que reabilitam o movimento! 🩺" }
        ],
        "8-9": [
            { t: "Dia do Administrador", m: "Homenagem aos estrategistas que gerem o sucesso! 💼" },
            { t: "Dia do Médico Veterinário", m: "Cuidando com amor e ciência dos nossos animais! 🐶🐱" },
            { t: "Dia do Velocipedista", m: "Celebrando a paixão pelas duas rodas!" },
            { t: "Dia de São Pedro Claver", m: "O apóstolo dos escravos." },
            { t: "Dia Nacional das Missões", m: "Fé e serviço ao próximo." }
        ],
        "8-10": [
            { t: "Dia Mundial de Prevenção ao Suicídio", m: "Setembro Amarelo: A tua vida importa! Procure ajuda. 💛" },
            { t: "Dia do Gordo", m: "Luta contra a gordofobia e pelo respeito a todos os corpos! ✨" },
            { t: "Dia de São Nicolau de Tolentino", m: "Padroeiro das almas do purgatório." },
            { t: "Dia da Imprensa Nacional (Tradicional)", m: "A história da notícia no Brasil." }
        ],
        "8-11": [
            { t: "Dia do Cerrado", m: "Preservar a nossa savana brasileira é essencial! 🌳" },
            { t: "Dia do Árbitro Esportivo", m: "Homenagem aos juízes que garantem a regra no desporto! 🏁" },
            { t: "Dia de São João Gabriel Perboyre", m: "Mártir da fé na China." },
            { t: "Dia Nacional do Luto", m: "Um momento de reflexão e respeito." }
        ],
        "8-12": [
            { t: "Dia do Programador", m: "Parabéns aos mestres do código que constroem o futuro digital! 💻⚡" },
            { t: "Dia do Operador de Rastreamento", m: "Segurança e monitorização constante!" },
            { t: "Dia de São Guido", m: "Padroeiro dos sacristães e peregrinos." },
            { t: "Dia Nacional da Recreação", m: "Brincar e divertir-se é fundamental para a saúde!" }
        ],
        "8-13": [
            { t: "Dia da Cachaça", m: "Homenagem à bebida que é património cultural do Brasil! 🍹" },
            { t: "Dia do Agrônomo", m: "Ciência e tecnologia a serviço da produção no campo! 🌾" },
            { t: "Dia de São João Crisóstomo", m: "O santo da 'boca de ouro' pela sua oratória." },
            { t: "Dia Mundial da Sepsis", m: "Alerta e consciencialização para salvar vidas." }
        ],
        "8-14": [
            { t: "Dia do Frevo", m: "Ginga, som e sombrinha: a energia do Carnaval de Pernambuco! 💃" },
            { t: "Dia da Exaltação da Santa Cruz", m: "Símbolo de fé e redenção cristã. ✝️" },
            { t: "Dia do Caminhoneiro (Regional)", m: "Homenagem aos gigantes das estradas!" }
        ],
        "8-15": [
            { t: "Dia do Cliente", m: "Obrigado pela confiança! Você é a razão do nosso trabalho! 🤝✨" },
            { t: "Dia do Musicoterapeuta", m: "Curando através das notas e ritmos!" },
            { t: "Dia de Nossa Senhora das Dores", m: "Devoção à compaixão de Maria. 🙏" },
            { t: "Dia Internacional da Democracia", m: "Celebrando a liberdade e a participação cidadã! 🗳️" },
            { t: "Dia do Engenheiro de Petróleo", m: "Tecnologia e energia para o progresso!" }
        ],
"8-16": [
            { t: "Dia Internacional para a Preservação da Camada de Ozônio", m: "Protegendo o escudo da Terra! 🌍" },
            { t: "Dia do Caminhoneiro (Nacional)", m: "Homenagem aos heróis que movem o Brasil sobre rodas! 🚚" },
            { t: "Dia de São Cornélio e São Cipriano", m: "Mártires e defensores da unidade da igreja." },
            { t: "Dia do Engenheiro de Produção", m: "Eficiência e estratégia em todos os processos!" }
        ],
        "8-17": [
            { t: "Dia da Compreensão Mundial", m: "Por um mundo com mais empatia e menos barreiras! ❤️" },
            { t: "Dia do Transportador Rodoviário de Carga", m: "Homenagem à logística que abastece a nação!" },
            { t: "Dia de São Roberto Belarmino", m: "Doutor da Igreja e mestre da fé." },
            { t: "Dia Nacional de Conscientização sobre a Distrofia Muscular", m: "Informação e apoio para uma vida melhor." }
        ],
        "8-18": [
            { t: "Dia dos Símbolos Nacionais", m: "Respeito à nossa bandeira, hino, selo e brasão! 🇧🇷" },
            { t: "Dia do Quiropraxista", m: "Homenagem aos profissionais que cuidam do nosso alinhamento e saúde!" },
            { t: "Dia de São José de Cupertino", m: "O santo padroeiro dos estudantes e dos aviadores." },
            { t: "Dia Mundial da Limpeza de Rios e Praias", m: "Cuidar da água é garantir o nosso futuro! 🌊" }
        ],
        "8-19": [
            { t: "Dia do Teatro Acessível", m: "Arte e cultura para todos, sem barreiras! 🎭✨" },
            { t: "Dia do Comprador", m: "Homenagem aos mestres da negociação e do estoque!" },
            { t: "Dia de São Januário", m: "Padroeiro de Nápoles e protetor contra erupções." },
            { t: "Dia Nacional do Educador Social", m: "Transformando vidas através do conhecimento e acolhimento!" }
        ],
        "8-20": [
            { t: "Dia do Gaúcho (Revolução Farroupilha)", m: "Homenagem à cultura, tradição e bravura do povo sulista! 🧉🐎" },
            { t: "Dia do Engenheiro Químico", m: "A ciência que transforma matéria em progresso!" },
            { t: "Dia do Funcionário Municipal", m: "Dedicando o trabalho ao dia a dia da nossa cidade!" },
            { t: "Dia de Santo André Kim e Companheiros", m: "Homenagem aos mártires coreanos." }
        ],
        "8-21": [
            { t: "Dia da Árvore", m: "Plante esperança! Proteja o verde do nosso país! 🌳" },
            { t: "Dia Nacional de Luta da Pessoa com Deficiência", m: "Por mais acessibilidade, respeito e inclusão! ♿" },
            { t: "Dia do Radialista (Data oficial)", m: "Homenagem à voz que informa e diverte milhões! 🎙️" },
            { t: "Dia de São Mateus", m: "Apóstolo, evangelista e padroeiro dos bancários." },
            { t: "Dia Mundial da Doença de Alzheimer", m: "Conscientização, carinho e paciência com a memória." }
        ],
        "8-22": [
            { t: "Início da Primavera", m: "A estação das flores chegou para colorir a vida! 🌸🦋" },
            { t: "Dia do Contador", m: "Homenagem aos mestres dos números e da transparência! 📊" },
            { t: "Dia Mundial sem Carro", m: "Experimente um caminho diferente e ajude o planeta! 🚲" },
            { t: "Dia de São Maurício", m: "Líder da Legião Tebana e mártir cristão." },
            { t: "Dia do Técnico em Edificações", m: "Construindo sonhos com segurança e técnica!" }
        ],
        "8-23": [
            { t: "Dia do Técnico Industrial", m: "A força técnica que impulsiona a nossa indústria!" },
            { t: "Dia de São Pio de Pietrelcina (Padre Pio)", m: "Homenagem ao santo das chagas e da oração profunda. 🙏" },
            { t: "Dia Internacional da Linguagem de Sinais", m: "Comunicar é um direito de todos! 🤟" },
            { t: "Dia Nacional do Sorvete", m: "Aproveite o dia com muito sabor e refrescância! 🍦😋" },
            { t: "Dia do Soldador", m: "Homenagem a quem une o ferro com fogo e precisão!" }
        ],
"8-24": [
            { t: "Dia do Motoboy", m: "Homenagem aos heróis das duas rodas que entregam tudo! 🏍️📦" },
            { t: "Dia de São Gerardo", m: "Exemplo de caridade e vida monástica." },
            { t: "Dia Mundial do Coração (Antecipado/Trad.)", m: "Cuide do seu motor principal! ❤️" },
            { t: "Dia do Engenheiro de Minas", m: "Extraindo riquezas com técnica e segurança!" }
        ],
        "8-25": [
            { t: "Dia Nacional do Trânsito", m: "Pela vida, escolha sempre a prudência! 🚦" },
            { t: "Dia do Rádio", m: "Celebrando o nascimento de Roquette-Pinto, pai do rádio no Brasil! 📻" },
            { t: "Dia de São Cleofas", m: "Discípulo de Jesus no caminho de Emaús." },
            { t: "Dia Internacional do Farmacêutico", m: "Homenagem aos profissionais da cura e do cuidado! 💊" },
            { t: "Dia da Lagosta", m: "Uma data curiosa para os amantes da gastronomia! 🦞" }
        ],
        "8-26": [
            { t: "Dia Nacional dos Surdos", m: "Luta por direitos, inclusão e respeito à cultura surda! 🤟" },
            { t: "Dia de São Cosme e São Damião", m: "Salve os protetores das crianças! Muita alegria e doces! 🍬🍭" },
            { t: "Dia Mundial da Prevenção da Gravidez na Adolescência", m: "Informação e responsabilidade para o futuro." },
            { t: "Dia Interamericano das Relações Públicas", m: "Homenagem aos mestres da comunicação institucional!" }
        ],
        "8-27": [
            { t: "Dia Nacional de Doação de Órgãos", m: "Um gesto que pode ser o recomeço de outra vida! 💝" },
            { t: "Dia Mundial do Turismo", m: "Viajar é expandir horizontes e alma! ✈️🌍" },
            { t: "Dia de São Vicente de Paulo", m: "O pai da caridade organizada. 🙏" },
            { t: "Dia do Encanador", m: "Homenagem ao profissional que cuida do nosso saneamento!" },
            { t: "Dia do Turismólogo", m: "Homenagem a quem planeja as melhores experiências!" }
        ],
            "8-28": [
            { t: "Dia do Hidrógrafo", m: "Homenagem a quem mapeia as águas do nosso planeta! 🌊" },
            { t: "Dia Mundial de Luta contra a Raiva", m: "Vacine seu pet e proteja a todos! 🐶" },
            { t: "Dia de São Venceslau", m: "Mártir e padroeiro da República Tcheca." },
            { t: "Dia do Vendedor de Livros", m: "Homenagem a quem espalha cultura e conhecimento! 📚" },
            { t: "Dia da Lei do Ventre Livre", m: "Um marco importante na história da abolição no Brasil." }
        ],
        "8-29": [
            { t: "Dia dos Santos Arcanjos", m: "Miguel, Gabriel e Rafael: Proteção e luz divina! 🛡️✨" },
            { t: "Dia Mundial do Coração", m: "Siga as batidas da saúde: alimente-se bem e exercite-se! ❤️" },
            { t: "Dia do Anunciante", m: "Homenagem aos parceiros do mercado publicitário!" },
            { t: "Dia do Policial Civil (Regional)", m: "Honra e investigação a serviço da justiça!" }
        ],
        "8-30": [
            { t: "Dia da Secretária", m: "Eficiência e organização que fazem toda a diferença! 💼" },
            { t: "Dia do Jornaleiro", m: "Homenagem a quem leva a notícia até você!" },
            { t: "Dia de São Jerônimo", m: "Padroeiro dos bibliotecários e tradutores da Bíblia." },
            { t: "Dia Internacional da Tradução", m: "Pontes entre línguas e culturas! 🌍🗣️" },
            { t: "Dia Mundial do Mar", m: "Preservar os oceanos é garantir a vida na Terra! 🌊" },
            { t: "Dia do Ortopedista", m: "Cuidando da nossa estrutura e movimento!" }
        ],

// --- OUTUBRO (Mês 9 no sistema) ---
        "9-1": [
            { t: "Dia do Idoso / Dia Internacional da Terceira Idade", m: "Respeito e carinho a quem é mestre na escola da vida! 👵👴" },
            { t: "Dia do Vendedor", m: "Homenagem à garra de quem move o comércio! 🤝" },
            { t: "Dia de Santa Teresinha do Menino Jesus", m: "A pequena flor do Carmelo. 🙏" },
            { t: "Dia do Representante Comercial", m: "Conectando produtos e soluções em todos os lugares!" },
            { t: "Dia Nacional do Vereador", m: "Homenagem aos representantes do povo no município." },
            { t: "Início do Outubro Rosa", m: "Mês de conscientização e prevenção ao câncer de mama. Previna-se! 🎀" }
        ],
        "9-2": [
            { t: "Dia do Anjo da Guarda", m: "Santo Anjo do Senhor, meu zeloso guardador! ✨" },
            { t: "Dia Internacional da Não-Violência", m: "Em memória ao nascimento de Mahatma Gandhi. 🕊️" },
            { t: "Dia do Peaceiro (Trabalhador da Construção)", m: "Homenagem à força braçal que constrói cidades!" },
            { t: "Dia de Santo Eleutério", m: "Fé e história da igreja primitiva." },
            { t: "Dia do Dietista", m: "Cuidando da saúde através da alimentação equilibrada!" }
        ],
        "9-3": [
            { t: "Dia Mundial do Dentista", m: "Homenagem aos profissionais que cuidam do nosso sorriso! 🦷" },
            { t: "Dia do Petróleo Brasileiro", m: "Celebrando a fundação da Petrobras e a soberania energética! ⛽" },
            { t: "Dia dos Santos Mártires de Cunhaú e Uruaçu", m: "Homenagem aos mártires brasileiros. 🙏" },
            { t: "Dia do Profissional de Organização (Personal Organizer)", m: "Ordem e harmonia para a sua rotina! ✨" },
            { t: "Dia do Panificador (Regional)", m: "O cheiro de pão fresco que alegra o dia!" }
        ],
        "9-4": [
            { t: "Dia de São Francisco de Assis", m: "Padroeiro dos animais e da natureza. Paz e Bem! 🐕🌿" },
            { t: "Dia dos Animais", m: "Respeite e proteja nossos amigos de quatro patas!" },
            { t: "Dia da Natureza", m: "Celebrando a beleza e a importância do nosso ecossistema!" },
            { t: "Dia do Barman", m: "Homenagem aos mestres da coquetelaria! 🍹" },
            { t: "Dia do Agente Comunitário de Saúde", m: "O elo fundamental entre a comunidade e o SUS!" },
            { t: "Dia do Poeta (Regional)", m: "Transformando sentimentos em rimas e versos." }
        ],
        "9-5": [
            { t: "Dia da Ave", m: "Celebrando o voo e o canto da nossa fauna! 🦜" },
            { t: "Dia do Empreendedor", m: "Para quem tem coragem de transformar ideias em negócios! 💡" },
            { t: "Dia Nacional da Micro e Pequena Empresa", m: "A base da nossa economia e geração de empregos!" },
            { t: "Dia de São Benedito", m: "O santo cozinheiro e padroeiro da humildade. 🙏" },
            { t: "Dia da Promulgação da Constituição de 1988", m: "Aniversário da nossa 'Constituição Cidadã'! 🇧🇷" },
            { t: "Dia do Boia-Fria", m: "Homenagem ao trabalhador rural que é a força do campo!" }
        ],
        "9-6": [
            { t: "Dia do Tecnólogo", m: "Homenagem aos especialistas em soluções técnicas e inovação!" },
            { t: "Dia de São Bruno", m: "Fundador da Ordem dos Cartuxos." },
            { t: "Dia do Prefeito", m: "Homenagem ao gestor do poder executivo municipal!" },
            { t: "Dia Internacional da Geodiversidade", m: "Conhecendo as rochas e solos do nosso planeta! 🌍" },
            { t: "Dia Nacional do Circulista", m: "Homenagem aos trabalhadores dos círculos operários." }
        ],
        "9-7": [
            { t: "Dia do Compositor", m: "Homenagem a quem escreve as trilhas sonoras das nossas vidas! 🎶" },
            { t: "Dia de Nossa Senhora do Rosário", m: "Oração e devoção mariana. 🙏" },
            { t: "Dia do Trabalho de Decoração", m: "Beleza e estilo para os nossos ambientes! ✨" },
            { t: "Dia do Hóquei", m: "Velocidade e adrenalina no esporte!" },
            { t: "Dia Mundial do Algodão", m: "A fibra natural que veste o mundo!" }
        ],

"9-8": [
            { t: "Dia do Nordestino", m: "Orgulho, cultura e a força de um povo arretado! 🌵☀️" },
            { t: "Dia do Direito à Vida", m: "Celebrando o dom mais precioso da humanidade!" },
            { t: "Dia de Santa Pelágia", m: "Exemplo de penitência e conversão." },
            { t: "Dia do Assessor de Imprensa", m: "A ponte fundamental entre a notícia e o público!" },
            { t: "Dia Nacional de Combate ao Colesterol", m: "Cuide da saúde do seu coração! ❤️" }
        ],
        "9-9": [
            { t: "Dia do Atletismo", m: "Homenagem ao desporto base de todas as modalidades! 🏃‍♂️" },
            { t: "Dia de São Dionísio", m: "Bispo de Paris e mártir da fé." },
            { t: "Dia Mundial dos Correios", m: "Conectando pessoas e entregando histórias pelo mundo! ✉️" },
            { t: "Dia do Açougueiro", m: "Homenagem aos profissionais da carne!" },
            { t: "Dia do Profissional de Terceirização", m: "Dedicando trabalho e competência em diversas áreas!" }
        ],
        "9-10": [
            { t: "Dia Mundial da Saúde Mental", m: "Não há saúde sem saúde mental. Cuide-se e peça ajuda! 🧠" },
            { t: "Dia de São Daniel Comboni", m: "O apóstolo da África." },
            { t: "Dia Nacional de Luta contra a Violência à Mulher", m: "Respeito e proteção todos os dias! ✊" },
            { t: "Dia do Guarda Civil Municipal", m: "Segurança e zelo pelo património da cidade!" },
            { t: "Dia do Empresário Brasileiro", m: "Homenagem a quem gera empregos e move o país! 💼" }
        ],
        "9-11": [
            { t: "Dia do Deficiente Físico", m: "Luta por acessibilidade e igualdade de oportunidades! ♿" },
            { t: "Dia de São João XXIII", m: "O 'Papa Bom' que convocou o Concílio Vaticano II." },
            { t: "Dia Internacional da Menina", m: "Pelo empoderamento e direitos de todas as meninas! 👧✨" },
            { t: "Dia do Teatro Municipal", m: "Celebrando os templos da arte e cultura!" },
            { t: "Dia do Prefeito (Data oficial)", m: "Homenagem ao gestor municipal." }
        ],
        "9-12": [
            { t: "Nossa Senhora Aparecida", m: "Padroeira do Brasil. Rogai por nós! 🙏🇧🇷" },
            { t: "Dia das Crianças", m: "Dia de brincar, sorrir e celebrar a pureza da infância! 🧸🍭" },
            { t: "Dia do Engenheiro Agrônomo", m: "A força técnica que alimenta o mundo! 🌾" },
            { t: "Dia do Corretor de Seguros", m: "Homenagem a quem garante a nossa tranquilidade!" },
            { t: "Dia do Mar", m: "Respeito às águas que cercam o nosso país! 🌊" },
            { t: "Dia do Descobrimento da América", m: "Marco histórico de 1492." }
        ],
        "9-13": [
            { t: "Dia do Fisioterapeuta e Terapeuta Ocupacional", m: "Homenagem aos profissionais da reabilitação! 🩺" },
            { t: "Dia do Escritor de Literatura Infantil", m: "Criando mundos mágicos para os pequenos leitores! 📚✨" },
            { t: "Dia de São Eduardo", m: "Rei e exemplo de piedade cristã." },
            { t: "Dia Mundial do Fertilizante", m: "Nutrindo a terra para garantir a colheita!" }
        ],
        "9-14": [
            { t: "Dia do Meteorologista", m: "Homenagem a quem prevê o tempo e protege vidas! ☀️🌧️" },
            { t: "Dia de São Calixto I", m: "Papa e mártir da igreja cristã." },
            { t: "Dia Mundial da Normalização", m: "Garantindo qualidade e padrões globais!" },
            { t: "Dia da Pecuária", m: "Homenagem a um dos pilares do agronegócio!" }
        ],
        "9-15": [
            { t: "Dia do Professor", m: "A profissão que forma todas as outras. Obrigado, mestre! 🍎📚" },
            { t: "Dia do Educador Ambiental", m: "Ensinando a cuidar do futuro do nosso planeta! 🌍" },
            { t: "Dia de Santa Teresa de Ávila", m: "Doutora da Igreja e mestre da oração." },
            { t: "Dia Mundial da Lavagem das Mãos", m: "Um hábito simples que salva milhões de vidas! 🧼" },
            { t: "Dia do Auxiliar de Enfermagem", m: "Homenagem à dedicação e cuidado constante!" }
        ],
"9-16": [
            { t: "Dia Mundial da Alimentação", m: "Comer bem é um direito e uma necessidade de todos! 🍎" },
            { t: "Dia do Anestesiologista", m: "Homenagem aos guardiões do sono e do alívio da dor na medicina!" },
            { t: "Dia do Chefe", m: "Homenagem aos líderes que inspiram e guiam suas equipes! 💼" },
            { t: "Dia de Santa Edwiges", m: "Padroeira dos pobres e endividados. 🙏" },
            { t: "Dia do Engenheiro de Alimentos", m: "Ciência e tecnologia para a nossa nutrição!" },
            { t: "Dia Nacional da Ciência e Tecnologia", m: "Inovação para o progresso do Brasil! 🔬" }
        ],
        "9-17": [
            { t: "Dia do Eletricista", m: "Homenagem aos profissionais que iluminam o nosso dia a dia! ⚡" },
            { t: "Dia da Indústria Aeronáutica Brasileira", m: "Celebrando a excelência dos nossos céus!" },
            { t: "Dia de Santo Inácio de Antioquia", m: "Mártir e grande bispo da igreja primitiva." },
            { t: "Dia Internacional para a Erradicação da Pobreza", m: "Por um mundo com mais justiça e igualdade! 🌍" },
            { t: "Dia do Profissional da Propaganda", m: "Criatividade que move o mercado e as ideias!" }
        ],
        "9-18": [
            { t: "Dia do Médico", m: "Homenagem a quem dedica a vida a cuidar da saúde e salvar vidas! 🩺❤️" },
            { t: "Dia de São Lucas", m: "Padroeiro dos médicos e dos pintores." },
            { t: "Dia do Estivador", m: "Homenagem aos trabalhadores que movem os nossos portos!" },
            { t: "Dia do Pintor", m: "Colorindo o mundo e transformando ambientes! 🎨" },
            { t: "Dia do Securitário", m: "Profissionais que cuidam da nossa proteção e garantias." }
        ],
        "9-19": [
            { t: "Dia do Profissional de TI", m: "Homenagem a quem mantém o mundo digital funcionando! 💻" },
            { t: "Dia do Guarda Rodoviário", m: "Segurança e ordem nas estradas brasileiras!" },
            { t: "Dia de São Paulo da Cruz", m: "Fundador da Congregação dos Passionistas." },
            { t: "Dia da Inovação", m: "Celebrando a capacidade humana de criar o novo! 💡" },
            { t: "Dia do Operador de Caixa", m: "Homenagem à paciência e agilidade no atendimento!" }
        ],
        "9-20": [
            { t: "Dia do Maquinista Ferroviário", m: "Homenagem aos heróis que conduzem os trilhos do progresso! 🚂" },
            { t: "Dia do Poeta", m: "Celebrando a arte de transformar palavras em alma! ✍️📖" },
            { t: "Dia de São Pedro de Alcântara", m: "Padroeiro do Brasil (ao lado de N. Sra. Aparecida) e da monarquia brasileira." },
            { t: "Dia do Arquivista", m: "Guardando a memória e a organização dos dados!" },
            { t: "Dia Mundial da Osteoporose", m: "Conscientização sobre a saúde dos nossos ossos!" }
        ],
        "9-21": [
            { t: "Dia do Ecumenismo", m: "Pela união e respeito entre todas as religiões! 🙏" },
            { t: "Dia do Podcast", m: "Homenagem à mídia que informa e entretém nossos ouvidos! 🎙️" },
            { t: "Dia de Santa Úrsula", m: "Padroeira das educadoras e das jovens." },
            { t: "Dia do Contato Publicitário", m: "A ponte entre as marcas e as grandes ideias!" },
            { t: "Dia Nacional do Economista Doméstico", m: "Planejamento para o bem-estar das famílias." }
        ],
        "9-22": [
            { t: "Dia do Enólogo", m: "Homenagem aos mestres que conhecem a alma do vinho! 🍷" },
            { t: "Dia do Paraquedista", m: "Coragem e adrenalina cruzando os céus! 🪂" },
            { t: "Dia de São João Paulo II", m: "Memória do Papa que conquistou o mundo com sua fé. 🙏" },
            { t: "Dia do Representante Comercial (Regional)", m: "A força de vendas do nosso país!" },
            { t: "Dia do Pára-quedismo Brasileiro", m: "Honra à brigada de infantaria paraquedista!" }
        ],
        "9-23": [
            { t: "Dia do Aviador / Dia da Força Aérea Brasileira", m: "Homenagem a Santos Dumont e a todos que dominam os céus! ✈️🎖️" },
            { t: "Dia de São João da Capistrano", m: "Padroeiro dos capelães militares." },
            { t: "Dia do Comerciário", m: "Homenagem aos profissionais que movem o nosso comércio! 🛒" },
            { t: "Dia da Aviação Civil", m: "Conectando o mundo através dos ares!" },
            { t: "Dia do Sapateiro", m: "Homenagem a quem cuida dos nossos passos com arte!" }
        ],
"9-24": [
            { t: "Dia das Nações Unidas (ONU)", m: "Celebrando a paz, a união e a cooperação global! 🌍🕊️" },
            { t: "Dia do Designer Gráfico", m: "Homenagem aos artistas que dão forma e cor às ideias!" },
            { t: "Dia de Santo Antônio Maria Claret", m: "Fundador da congregação dos Claretianos." },
            { t: "Aniversário de Goiânia/GO", m: "Parabéns à bela capital do Cerrado! 🏙️" },
            { t: "Dia Mundial do Desenvolvimento da Informação", m: "Tecnologia a serviço da evolução humana!" }
        ],
        "9-25": [
            { t: "Dia do Sapateiro", m: "Homenagem aos artesãos que cuidam dos nossos passos! 👞" },
            { t: "Dia do Engenheiro Civil", m: "Construindo as bases e o futuro das nossas cidades! 🏗️" },
            { t: "Dia do Dentista Brasileiro", m: "Homenagem a quem cuida do sorriso da nossa nação! 🦷" },
            { t: "Dia de São Frei Galvão", m: "Homenagem ao primeiro santo nascido no Brasil! 🙏" },
            { t: "Dia do Macarrão", m: "Hoje é dia de uma massa deliciosa! 🍝😋" },
            { t: "Dia da Saúde Ciclista", m: "Pedalar é saúde para o corpo e para o planeta!" }
        ],
        "9-26": [
            { t: "Dia do Trabalhador da Construção Civil", m: "Homenagem à força que ergue o nosso país!" },
            { t: "Dia de Santo Evaristo", m: "Papa e mártir da igreja primitiva." },
            { t: "Dia Nacional da Cruz Vermelha", m: "Humanidade e auxílio nos momentos mais difíceis! 🚑" },
            { t: "Dia do Esporte Amador", m: "Celebrando a paixão pelo esporte em todas as idades!" }
        ],
        "9-27": [
            { t: "Dia do Engenheiro Agrícola", m: "Tecnologia e inovação no coração do agronegócio!" },
            { t: "Dia de São Gonçalo do Amarante", m: "Devoção e tradição na fé popular." },
            { t: "Dia Nacional de Mobilização pela Saúde da População Negra", m: "Equidade e cuidado para todos!" },
            { t: "Dia Mundial do Patrimônio Audiovisual", m: "Preservando as imagens e sons da nossa história! 🎞️" }
        ],
        "9-28": [
            { t: "Dia do Servidor Público", m: "Homenagem a quem dedica seu trabalho ao serviço da sociedade! 🏛️" },
            { t: "Dia de São Simão e São Judas Tadeu", m: "Homenagem ao santo das causas impossíveis! 🙏" },
            { t: "Dia da Engenharia da Aeronáutica", m: "Ciência e precisão nos céus brasileiros!" },
            { t: "Dia Mundial do Judô", m: "Caminho suave: disciplina e respeito no tatame! 🥋" }
        ],
        "9-29": [
            { t: "Dia Nacional do Livro", m: "Celebrando a fundação da Biblioteca Nacional! Leia um livro hoje! 📚" },
            { t: "Dia do Cerimonialista", m: "Homenagem aos mestres da organização e dos grandes eventos!" },
            { t: "Dia de São Narciso", m: "Bispo de Jerusalém e exemplo de longevidade na fé." },
            { t: "Dia Mundial do AVC", m: "Sinais de alerta: agir rápido salva vidas! 🧠" }
        ],
        "9-30": [
            { t: "Dia do Balconista", m: "Homenagem a quem nos atende com dedicação todos os dias! 🤝" },
            { t: "Dia do Comerciário", m: "Parabéns aos profissionais que fazem o comércio pulsar!" },
            { t: "Dia do Ginecologista", m: "Cuidando da saúde integral da mulher! 🩺" },
            { t: "Dia de São Geraldo", m: "Exemplo de santidade e obediência." },
            { t: "Dia do Fisiculturista", m: "Homenagem à disciplina e superação física! 💪" }
        ],
        "9-31": [
            { t: "Halloween", m: "Doces ou Travessuras? É hora de celebrar essa tradição divertida! 🎃👻" },
            { t: "Dia do Saci", m: "Valorizando o folclore e a cultura nacional brasileira! 🌪️" },
            { t: "Dia da Reforma Protestante", m: "Marco histórico da fé cristã em 1517." },
            { t: "Dia da Dona de Casa", m: "Homenagem a quem cuida do coração do nosso lar! 🏠❤️" },
            { t: "Dia do Engenheiro de Custos", m: "Gestão e precisão financeira nas obras!" },
            { t: "Dia Mundial da Poupança", m: "Planejar o hoje para garantir o amanhã! 💰" }
        ],
// --- NOVEMBRO (Mês 10 no sistema) ---
        "10-1": [
            { t: "Dia de Todos os Santos", m: "Homenagem a todos os que alcançaram a glória eterna! 🙏" },
            { t: "Dia Mundial do Veganismo", m: "Respeito aos animais e ao planeta através da alimentação! 🌱" },
            { t: "Dia do Romeiro", m: "Homenagem à fé e caminhada dos peregrinos!" },
            { t: "Dia de Santo Haroldo", m: "Rei e mártir da igreja cristã." }
        ],
        "10-2": [
            { t: "Dia de Finados", m: "Um dia de saudade e respeito à memória de quem já partiu. ✨" },
            { t: "Dia de todos os Fiéis Defuntos", m: "Oração e luz para as almas queridas! 🙏" },
            { t: "Dia de São Victorino", m: "Bispo e mártir da história cristã." },
            { t: "Dia Mundial pelo Fim da Impunidade dos Crimes contra Jornalistas", m: "Pela liberdade de expressão e segurança da imprensa!" }
        ],
        "10-3": [
            { t: "Dia da Instituição do Direito de Voto Feminino no Brasil", m: "Marco histórico da cidadania e igualdade! 🗳️✊" },
            { t: "Dia do Cabeleireiro", m: "Homenagem aos profissionais que cuidam da nossa autoestima! ✂️✨" },
            { t: "Dia de São Martinho de Porres", m: "Padroeiro da justiça social e dos barbeiros." },
            { t: "Dia do Manicure e Pedicure", m: "Cuidado e arte na ponta dos dedos!" }
        ],
        "10-4": [
            { t: "Dia do Inventor", m: "Homenagem às mentes que criam o futuro! 💡" },
            { t: "Dia do Orientador Educacional", m: "Guiando os alunos no caminho do conhecimento!" },
            { t: "Dia de São Carlos Borromeu", m: "Padroeiro dos catequistas e seminaristas." },
            { t: "Dia da Organização das Nações Unidas para a Educação, Ciência e Cultura (UNESCO)", m: "Pela paz mundial!" }
        ],
        "10-5": [
            { t: "Dia da Cultura e da Ciência", m: "Celebrando o saber e a identidade brasileira! 📚🔬" },
            { t: "Dia do Designer", m: "Criatividade que transforma o mundo visual!" },
            { t: "Dia do Radioamador", m: "Homenagem à paixão pelas ondas de rádio!" },
            { t: "Dia de São Zacarias e Santa Isabel", m: "Pais de São João Batista. 🙏" },
            { t: "Dia Nacional da Língua Portuguesa", m: "Celebrando a nossa última flor do Lácio!" }
        ],
        "10-6": [
            { t: "Dia Nacional do Riso", m: "Rir é o melhor remédio! Espalhe alegria hoje! 😄" },
            { t: "Dia de São Leonardo", m: "Padroeiro dos prisioneiros e das parturientes." },
            { t: "Dia do Casamento", m: "Homenagem à união e ao amor compartilhado! 💍" }
        ],
        "10-7": [
            { t: "Dia do Radialista (Data oficial)", m: "Homenagem à voz que informa e emociona em todo o país! 🎙️" },
            { t: "Dia de São Ernesto", m: "Abade e mártir da fé cristã." },
            { t: "Dia Internacional da Gestão de Projetos", m: "Eficiência e organização em cada etapa!" }
        ],
        "10-8": [
            { t: "Dia do Radiologista", m: "Homenagem aos olhos da medicina! 🩻" },
            { t: "Dia do Aposentado", m: "Respeito a quem já dedicou anos de trabalho à sociedade!" },
            { t: "Dia de São Godofredo", m: "Exemplo de caridade e vida religiosa." },
            { t: "Dia Mundial do Urbanismo", m: "Planeando cidades melhores para todos!" }
        ],
        "10-9": [
            { t: "Dia do Hoteleiro", m: "Homenagem a quem nos recebe com hospitalidade e conforto! 🏨" },
            { t: "Dia de São Teodoro", m: "Mártir da fé cristã." },
            { t: "Dia do Praticante de Taekwondo", m: "Disciplina e força no desporto!" }
        ],
        "10-10": [
            { t: "Dia Nacional de Prevenção e Combate à Surdez", m: "Cuide da sua saúde auditiva! 👂" },
            { t: "Dia de São Daniel e Companheiros", m: "Mártires da ordem franciscana." },
            { t: "Dia do Trigo", m: "Homenagem à base do nosso pão de cada dia! 🌾" },
            { t: "Dia de São Leão Magno", m: "Papa e doutor da Igreja." }
        ],
"10-11": [
            { t: "Dia do Diretor Escolar", m: "Homenagem a quem lidera com sabedoria o futuro da educação! 🏫" },
            { t: "Dia de São Martinho de Tours", m: "Exemplo de caridade e soldado da fé." },
            { t: "Dia Mundial da Qualidade", m: "Busca pela excelência em todos os processos!" },
            { t: "Dia do Supermercado", m: "Homenagem ao setor que abastece as nossas casas! 🛒" }
        ],
        "10-12": [
            { t: "Dia do Pantanal", m: "Preservar o maior santuário ecológico do mundo é vital! 🐆🌿" },
            { t: "Dia do Diretor de Escola", m: "Reconhecimento à gestão que transforma o ensino!" },
            { t: "Dia de São Josafá", m: "Bispo e mártir pela unidade da Igreja." },
            { t: "Dia Nacional da Alfabetização", m: "A base para o conhecimento e a cidadania! 📚" },
            { t: "Dia do Hip Hop", m: "Celebrando a cultura e a expressão das ruas! 🎤🎧" }
        ],
        "10-13": [
            { t: "Dia Mundial da Gentileza", m: "Um pequeno gesto pode mudar o dia de alguém! Seja gentil. ✨" },
            { t: "Dia de Santo Estanislau Kostka", m: "Padroeiro dos novicinhos e da juventude." },
            { t: "Dia do Mau Humor", m: "Um dia para rir das nossas próprias carrancas! 😉" }
        ],
        "10-14": [
            { t: "Dia Mundial do Diabetes", m: "Conscientização e cuidado para uma vida equilibrada! 🎗️" },
            { t: "Dia do Bandeirante", m: "Homenagem aos exploradores da nossa história!" },
            { t: "Dia de São Nicolau Tavelic", m: "Mártir da ordem franciscana." },
            { t: "Dia do Alfabetizador", m: "Homenagem a quem ensina o caminho das letras!" }
        ],
        "10-15": [
            { t: "Proclamação da República", m: "Celebrando a democracia e o marco da nossa nação! 🇧🇷✨" },
            { t: "Dia do Joalheiro", m: "Homenagem aos mestres que transformam metais em arte! 💎" },
            { t: "Dia de São Alberto Magno", m: "Doutor da Igreja e padroeiro dos cientistas." },
            { t: "Dia do Esporte Amador", m: "Celebrando a saúde e a superação em todas as idades! 🏃" }
        ],
        "10-16": [
            { t: "Dia Nacional de Atenção à Dislexia", m: "Informação e apoio para uma educação inclusiva!" },
            { t: "Dia de Santa Gertrudes", m: "Mística e grande devota do Sagrado Coração." },
            { t: "Dia Internacional da Tolerância", m: "Respeitar as diferenças é o caminho para a paz! 🤝" },
            { t: "Dia do Policial Federal", m: "Honra e proteção à nossa nação! 🚔" }
        ],
        "10-17": [
            { t: "Dia da Criatividade", m: "Homenagem às mentes que inventam novos mundos! 💡🎨" },
            { t: "Dia Mundial da Prematuridade", m: "Conscientização e apoio aos pequenos guerreiros! 💜" },
            { t: "Dia de Santa Isabel de Hungria", m: "Padroeira das viúvas e dos doentes." },
            { t: "Dia do Tribunal de Contas", m: "Fiscalizando com transparência o bem público!" }
        ],
        "10-18": [
            { t: "Dia do Conselheiro Tutelar", m: "Protegendo os direitos das nossas crianças e adolescentes! 🛡️" },
            { t: "Dia de Santa Rosa Filipina Duchesne", m: "Missionária e educadora incansável." },
            { t: "Dia do Colecionador", m: "Homenagem a quem guarda histórias e paixões em objetos!" }
        ],
        "10-19": [
            { t: "Dia do Empreendedorismo Feminino", m: "Mulheres que lideram e transformam o mercado! 🚀💼" },
            { t: "Dia da Bandeira", m: "Respeito e amor ao maior símbolo da nossa pátria! 🇧🇷" },
            { t: "Dia de São Roque González e Companheiros", m: "Mártires das missões na América do Sul." },
            { t: "Dia do Cordelista", m: "Homenagem à poesia popular que encanta o Brasil! 📖" }
        ],
        "10-20": [
            { t: "Dia Nacional da Consciência Negra", m: "Reflexão, respeito e luta pela igualdade. Viva Zumbi dos Palmares! ✊🏿" },
            { t: "Dia do Biomédico", m: "Ciência e pesquisa em prol da saúde humana! 🔬" },
            { t: "Dia do Esteticista", m: "Cuidando da beleza e do bem-estar com dedicação! ✨" },
            { t: "Dia de São Félix de Valois", m: "Fundador da Ordem da Santíssima Trindade." },
            { t: "Dia Mundial da Criança (ONU)", m: "Pelo futuro e bem-estar de todas as crianças! 🌍🧸" }
        ],
"10-21": [
            { t: "Dia da Homeopatia", m: "Homenagem à medicina que busca o equilíbrio vital! 🌱" },
            { t: "Dia de Nossa Senhora da Apresentação", m: "Celebrando a entrega de Maria ao serviço de Deus. 🙏" },
            { t: "Dia do Saudismo", m: "Um dia para celebrar as boas lembranças!" },
            { t: "Dia Mundial da Saudação", m: "Um simples 'olá' pode construir pontes entre as pessoas! 👋" }
        ],
        "10-22": [
            { t: "Dia do Músico", m: "Homenagem a quem transforma silêncio em arte e emoção! 🎶🎸" },
            { t: "Dia de Santa Cecília", m: "Padroeira dos músicos e da harmonia celeste." },
            { t: "Dia da Comunidade Libanesa no Brasil", m: "Celebrando a forte influência e cultura libanesa!" }
        ],
        "10-23": [
            { t: "Dia do Engenheiro de Segurança do Trabalho", m: "Homenagem a quem garante a integridade física do trabalhador! 👷‍♂️" },
            { t: "Dia Nacional de Combate ao Câncer Infantil", m: "Informação e amor para salvar os pequenos guerreiros! 🎗️" },
            { t: "Dia de São Clemente I", m: "Papa e mártir da igreja primitiva." },
            { t: "Dia do Consultor de Alimentos", m: "Segurança e qualidade na nossa alimentação!" }
        ],
        "10-24": [
            { t: "Dia do Rio", m: "Preservar as nossas águas é garantir a vida! 🌊" },
            { t: "Dia de Santo André Dung-Lac e Companheiros", m: "Mártires do Vietnã." },
            { t: "Dia do Quadro Auxiliar de Oficiais", m: "Homenagem ao apoio essencial nas forças armadas!" }
        ],
        "10-25": [
            { t: "Dia Nacional do Doador de Sangue", m: "Um gesto simples que salva até 4 vidas! Seja um herói. ❤️🩸" },
            { t: "Dia Internacional pela Eliminação da Violência contra a Mulher", m: "Respeito e segurança são direitos fundamentais! ✊" },
            { t: "Dia de Santa Catarina de Alexandria", m: "Padroeira dos filósofos e estudantes." },
            { t: "Dia do Baiano", m: "Homenagem à alegria e cultura do povo da Bahia! 🥥☀️" }
        ],
        "10-26": [
            { t: "Dia do Ministério Público", m: "Defendendo a lei e os interesses da sociedade!" },
            { t: "Dia de São Leonardo de Porto Maurício", m: "Grande pregador e devoto da Via-Sacra." },
            { t: "Dia Nacional de Mobilização dos Homens pelo Fim da Violência contra as Mulheres", m: "Conscientização e atitude!" }
        ],
        "10-27": [
            { t: "Dia do Técnico de Segurança do Trabalho", m: "Prevenção é a base de um trabalho seguro! 👷" },
            { t: "Dia de Nossa Senhora das Graças", m: "Medalha Milagrosa: Rogai por nós! 🙏✨" },
            { t: "Dia Nacional de Luta contra o Câncer", m: "Prevenir e informar para vencer essa batalha!" }
        ],
        "10-28": [
            { t: "Dia do Soldado Desconhecido", m: "Homenagem aos heróis que deram a vida pela pátria sem deixar nomes." },
            { t: "Dia de São Tiago das Marcas", m: "Exemplo de pobreza e oração." },
            { t: "Dia do Guardião de Presídios", m: "Homenagem aos profissionais do sistema penal!" }
        ],
        "10-29": [
            { t: "Dia Nacional do Livro", m: "Celebrando a fundação da Biblioteca Nacional. Leia mais! 📚" },
            { t: "Dia de São Saturnino", m: "Bispo e mártir da igreja cristã." },
            { t: "Dia Internacional da Solidariedade com o Povo Palestino", m: "Pela paz e reconhecimento internacional." }
        ],
        "10-30": [
            { t: "Dia do Teólogo", m: "Homenagem aos estudiosos da fé e das coisas divinas! 📖🙏" },
            { t: "Dia do Estatístico", m: "Homenagem aos mestres da análise de dados!" },
            { t: "Dia de Santo André", m: "Apóstolo e padroeiro dos pescadores." },
            { t: "Dia da Amizade Brasil-Argentina", m: "Celebrando a união entre os povos vizinhos! 🇧🇷🇦🇷" }
        ],
// --- DEZEMBRO (Mês 11 no sistema) ---
        "11-1": [
            { t: "Dia Mundial de Luta contra a AIDS", m: "Prevenção, respeito e solidariedade! 🎗️" },
            { t: "Dia do Numismata", m: "Homenagem aos colecionadores de moedas e medalhas!" },
            { t: "Dia de Santo Elígio", m: "Padroeiro dos ferreiros e ourives." },
            { t: "Início do Dezembro Vermelho", m: "Mês de conscientização sobre o HIV/Aids e outras ISTs." }
        ],
        "11-2": [
            { t: "Dia Nacional do Samba", m: "O ritmo que é a alma e o coração do Brasil! 🥁💃" },
            { t: "Dia da Astronomia", m: "Homenagem aos exploradores do cosmos! 🔭✨" },
            { t: "Dia de Santa Viviana", m: "Exemplo de coragem e fé cristã." },
            { t: "Dia Pan-Americano da Saúde", m: "Promovendo o bem-estar em todo o continente!" }
        ],
        "11-3": [
            { t: "Dia Internacional das Pessoas com Deficiência", m: "Por um mundo com mais acessibilidade e inclusão! ♿" },
            { t: "Dia do Delegado de Polícia", m: "Homenagem aos profissionais da justiça e segurança!" },
            { t: "Dia de São Francisco Xavier", m: "O grande missionário do Oriente. 🙏" },
            { t: "Dia Nacional de Combate à Pirataria", m: "Valorize o produto original e o trabalho honesto!" }
        ],
        "11-4": [
            { t: "Dia do Perito Criminal", m: "A ciência a serviço da justiça! 🔍" },
            { t: "Dia de Santa Bárbara", m: "Protetora contra raios, trovões e tempestades. 🙏⚡" },
            { t: "Dia do Podólogo", m: "Cuidando da saúde e do bem-estar dos nossos pés!" },
            { t: "Dia da Propaganda", m: "Homenagem à criatividade que move o mercado!" }
        ],
        "11-5": [
            { t: "Dia Internacional do Voluntário", m: "Homenagem a quem dedica tempo e amor ao próximo! ❤️" },
            { t: "Dia do Médico Fitoterapeuta", m: "A cura através das plantas e da natureza!" },
            { t: "Dia de São Sabas", m: "Exemplo de vida eremítica e oração." },
            { t: "Dia Mundial do Solo", m: "Preservar a terra é garantir a vida!" }
        ],
        "11-6": [
            { t: "Dia da Extensão Rural no Brasil", m: "Levando conhecimento e desenvolvimento ao campo!" },
            { t: "Dia de São Nicolau", m: "O santo que deu origem à tradição do Papai Noel! 🎅🙏" },
            { t: "Dia Nacional de Mobilização dos Homens pelo Fim da Violência contra as Mulheres", m: "Conscientização e atitude!" }
        ],
        "11-7": [
            { t: "Dia do Médico Cirurgião Plástico", m: "Homenagem aos mestres da reconstrução e autoestima!" },
            { t: "Dia Internacional da Aviação Civil", m: "Conectando povos através dos céus! ✈️" },
            { t: "Dia de Santo Ambrósio", m: "Doutor da Igreja e padroeiro dos apicultores." },
            { t: "Dia do Silvicultor", m: "Homenagem a quem cuida das nossas florestas!" }
        ],
        "11-8": [
            { t: "Dia da Imaculada Conceição", m: "Celebrando a pureza de Maria. Rogai por nós! 🙏✨" },
            { t: "Dia da Família", m: "Homenagem ao nosso porto seguro e maior tesouro! 🏠❤️" },
            { t: "Dia da Justiça", m: "Homenagem aos profissionais que garantem o direito e a ordem!" },
            { t: "Dia do Colunista Social", m: "Registrando os eventos e a história da nossa sociedade!" }
        ],
        "11-9": [
            { t: "Dia do Fonoaudiólogo", m: "Homenagem a quem cuida da nossa comunicação e audição! 🗣️" },
            { t: "Dia do Alcoólico Recuperado", m: "Celebrando a vitória da superação e do recomeço!" },
            { t: "Dia de São Juan Diego", m: "O vidente de Nossa Senhora de Guadalupe. 🙏" },
            { t: "Dia Internacional contra a Corrupção", m: "Por um mundo mais ético e transparente!" }
        ],
        "11-10": [
            { t: "Dia do Palhaço", m: "Homenagem a quem faz da alegria a sua profissão! 🤡❤️" },
            { t: "Dia Internacional dos Direitos Humanos", m: "Dignidade e liberdade para todos os seres humanos! 🌍" },
            { t: "Dia de São Melquíades", m: "Papa e mártir da igreja cristã." },
            { t: "Dia da Inclusão Social", m: "Celebrando a igualdade e o respeito às diferenças!" }
        ],
"11-11": [
            { t: "Dia do Engenheiro", m: "Homenagem aos profissionais que constroem e transformam o mundo! 🏗️" },
            { t: "Dia do Agrimensor", m: "Homenagem aos mestres da medição e divisão de terras!" },
            { t: "Dia de São Dâmaso I", m: "Papa e defensor da unidade da Igreja." },
            { t: "Dia Nacional das APAEs", m: "Celebrando o amor e a inclusão social! ❤️" }
        ],
        "11-12": [
            { t: "Dia da Nossa Senhora de Guadalupe", m: "Padroeira da América Latina. 🙏✨" },
            { t: "Dia do Marinheiro", m: "Homenagem aos guardiões dos nossos mares! ⚓" },
            { t: "Dia do Metalúrgico", m: "Homenagem à força e dedicação da classe operária!" },
            { t: "Dia de Santa Joana de Chantal", m: "Exemplo de vida consagrada e amor ao próximo." }
        ],
        "11-13": [
            { t: "Dia do Cego", m: "Por um mundo com mais acessibilidade e empatia! 🦯" },
            { t: "Dia de Santa Luzia", m: "Protetora dos olhos e da visão. 🙏" },
            { t: "Dia do Marinheiro (Data Oficial)", m: "Honra e glória à Marinha do Brasil!" },
            { t: "Dia do Óptico", m: "Homenagem a quem cuida da saúde dos nossos olhos!" },
            { t: "Dia do Lapidador", m: "Transformando pedras brutas em verdadeiras joias! 💎" }
        ],
        "11-14": [
            { t: "Dia do Engenheiro de Pesca", m: "Tecnologia e sustentabilidade nas nossas águas! 🐟" },
            { t: "Dia Nacional do Ministério Público", m: "Defendendo os direitos do cidadão e a lei!" },
            { t: "Dia de São João da Cruz", m: "Doutor da Igreja e mestre da espiritualidade." },
            { t: "Dia do Médico Infectologista", m: "Homenagem aos especialistas na prevenção e cura de infeções!" }
        ],
        "11-15": [
            { t: "Dia do Arquiteto e Urbanista", m: "Homenagem a quem projeta sonhos e cidades melhores! 📐🏛️" },
            { t: "Dia do Jardineiro", m: "Cuidando da beleza e do verde do nosso planeta! 🌿🌸" },
            { t: "Dia da Mulher Operadora de Máquina", m: "Força e competência feminina na indústria!" },
            { t: "Dia de São Valeriano", m: "Mártir da fé cristã." }
        ],
        "11-16": [
            { t: "Dia do Teatro Amador", m: "Celebrando a paixão pela arte dramática em todos os palcos! 🎭" },
            { t: "Dia do Reservista", m: "Homenagem a quem está sempre pronto para servir a pátria!" },
            { t: "Dia de Santa Adelaide", m: "Rainha e exemplo de caridade e humildade." },
            { t: "Dia Nacional do Oceanógrafo", m: "Desvendando os mistérios e riquezas dos oceanos! 🌊" }
        ],
        "11-17": [
            { t: "Dia do Pastor Evangélico", m: "Homenagem aos guias espirituais das comunidades! 🙏" },
            { t: "Dia de São Lázaro", m: "Amigo de Jesus e símbolo de ressurreição e fé." },
            { t: "Dia Nacional do Engenheiro de Produção", m: "Eficiência e estratégia em todos os processos!" }
        ],
        "11-18": [
            { t: "Dia do Museólogo", m: "Preservando a memória e a cultura da humanidade! 🏛️" },
            { t: "Dia de São Galdino", m: "Exemplo de caridade e vida santa." },
            { t: "Dia do Estagiário de Direito", m: "Dando os primeiros passos na busca pela justiça! ⚖️" }
        ],
        "11-19": [
            { t: "Dia do Atleta Profissional", m: "Homenagem à disciplina e superação no desporto! 🏆🏃‍♂️" },
            { t: "Dia de Santo Urbano", m: "Papa e mártir da igreja primitiva." },
            { t: "Dia Mundial do Empreendedorismo Feminino (ONU)", m: "Mulheres que transformam o mundo dos negócios! 💼✨" }
        ],
        "11-20": [
            { t: "Dia do Mecânico", m: "Homenagem aos profissionais que mantêm o mundo em movimento! 🛠️🚘" },
            { t: "Dia do Esteticista", m: "Cuidando da beleza e bem-estar com dedicação!" },
            { t: "Dia de São Domingos de Silos", m: "Padroeiro dos pastores e das grávidas." },
            { t: "Dia Internacional da Solidariedade Humana", m: "Pequenos gestos de união transformam o mundo! ❤️" }
        ],
"11-21": [
            { t: "Dia do Atleta", m: "Homenagem à dedicação, suor e superação de todos os esportistas! 🏅" },
            { t: "Dia de São Pedro Canísio", m: "Doutor da Igreja e mestre da catequese." },
            { t: "Início do Verão", m: "A estação do sol, calor e alegria chegou! ☀️🌊" }
        ],
        "11-22": [
            { t: "Dia do Empregado Doméstico", m: "Homenagem a quem cuida com tanto carinho do nosso lar! 🏠" },
            { t: "Dia de Santa Francisca Xavier Cabrini", m: "Padroeira dos imigrantes." }
        ],
        "11-23": [
            { t: "Dia do Vizinho", m: "Homenagem a quem compartilha o dia a dia e a vida ao nosso lado! 🤝" },
            { t: "Dia de São João da Kety", m: "Exemplo de caridade e ciência." }
        ],
        "11-24": [
            { t: "Véspera de Natal", m: "Noite de luz, união e espera pelo nascimento de Jesus! ✨🎄" },
            { t: "Dia do Órfão", m: "Um dia de olhar com mais amor e cuidado para quem precisa de amparo." }
        ],
        "11-25": [
            { t: "Natal", m: "Feliz Natal! Que o amor e a paz de Cristo reinem em todos os lares! 🎅🎁📖" },
            { t: "Dia de Santa Anastácia", m: "Mártir da fé cristã." }
        ],
        "11-26": [
            { t: "Dia de Santo Estêvão", m: "Homenagem ao primeiro mártir do cristianismo. 🙏" },
            { t: "Dia da Lembrança", m: "Um momento para recordar momentos e pessoas especiais." }
        ],
        "11-27": [
            { t: "Dia de São João Evangelista", m: "O discípulo amado e autor do quarto Evangelho." },
            { t: "Dia do Corretor de Imóveis (Regional)", m: "Homenagem a quem ajuda a realizar o sonho da casa própria!" }
        ],
        "11-28": [
            { t: "Dia dos Santos Inocentes", m: "Memória das crianças que deram a vida por Cristo. 🙏" },
            { t: "Dia da Marinha Mercante", m: "Homenagem aos navegantes que movem o comércio mundial!" }
        ],
        "11-29": [
            { t: "Dia de São Tomás Becket", m: "Mártir da liberdade da Igreja." },
            { t: "Dia do Biólogo (Regional)", m: "Homenagem aos guardiões da vida!" }
        ],
        "11-30": [
            { t: "Dia de São Silvestre", m: "Celebrando o Papa que marcou a paz na Igreja primitiva. 🙏" },
            { t: "Dia da Esperança", m: "Preparando o coração para as novas oportunidades que virão!" }
        ],
        "11-31": [
            { t: "Véspera de Ano-Novo", m: "Gratidão pelo que passou e esperança pelo que virá! Feliz virada! 🥂🎆" },
            { t: "Dia de São Silvestre (Festa e Corrida)", m: "Homenagem ao santo e aos atletas que fecham o ano com garra! 🏃‍♂️" }
         ], //

 // --- SISTEMA DE EXPLORAÇÃO ---
let progresso = JSON.parse(localStorage.getItem('progresso_mensageiro')) || {
    visitas: 0,
    tempoTotal: 0,
    itens: []
};

// 1. ENTREGA A MOCHILA NA HORA
if (!progresso.itens.includes('mochila')) {
    progresso.itens.push('mochila');
    localStorage.setItem('progresso_mensageiro', JSON.stringify(progresso));
    alert("🎒 O Bom Mensageiro: Tome esta MOCHILA para sua jornada!");
}

// 2. CONTA O TEMPO (Saco de Dormir)
setInterval(() => {
    progresso.tempoTotal += 1;
    localStorage.setItem('progresso_mensageiro', JSON.stringify(progresso));

    if (progresso.tempoTotal >= 15 && !progresso.itens.includes('saco_dormir')) {
        progresso.itens.push('saco_dormir');
        localStorage.setItem('progresso_mensageiro', JSON.stringify(progresso));
        alert("💤 Você ganhou o SACO DE DORMIR!");
    }
}, 60000);
