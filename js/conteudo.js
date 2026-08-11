/* ============================================================
   CONTEÚDO DO SITE — edite este arquivo para atualizar o site
   ------------------------------------------------------------
   ✅ Textos, contatos, serviços, fotos e galeria ficam aqui.
   ✅ Fotos: coloque os arquivos na pasta  "conteudo/fotos"
      e referencie o caminho aqui (ex.: "conteudo/fotos/minha.jpg").
   ✅ Não precisa saber programar: altere apenas os textos
      entre aspas "..." e salve o arquivo.
   ============================================================ */

const CONTEUDO = {

  /* -------- Identidade -------- */
  nome: "Amanda Caroline",
  nomeCompleto: "Amanda Caroline Silva Moura", // 💡 Ajuste aqui o nome completo se preferir
  crp: "CRP 14/07368-1",
  titulo: "Neuropsicóloga e psicoterapeuta para crianças, adolescentes e mulheres",
  local: "Campo Grande – MS",

  // Frase curta exibida sob o nome no topo
  subtitulo: "Neuropsicóloga &amp; Psicoterapeuta",

  // Descrição principal (hero)
  descricao:
    "Acolhimento, escuta e cuidado baseado em evidências para crianças, adolescentes e mulheres em diferentes fases da vida — incluindo a maternidade e o puerpério.",

  // Pequenos selos exibidos no hero
  chips: [
    "🧠 Avaliação neuropsicológica",
    "🌱 Psicoterapia infantojuvenil",
    "🤍 Psicoterapia para mulheres",
    "👶 Saúde mental materna"
  ],

  /* -------- Contato -------- */
  // WhatsApp: só números, com DDI (55) e DDD
  whatsapp: "5567992556307",
  instagram: "https://www.instagram.com/amandacarolinepsi/",
  instagramEscola: "https://www.instagram.com/psiconaescola/",
  linkedin: "https://www.linkedin.com/in/psiamandacaroline/",
  // Link do Google Maps (o do consultório)
  maps: "https://share.google/EduyBFZOfGrY5teoW",
  // Nome da empresa conforme aparece no Google
  mapsNome: "Psicóloga Clínica de Crianças e Adolescentes | Amanda Caroline",

  /* -------- Foto de perfil / retrato --------
     Coloque uma foto profissional em conteudo/fotos/ (ex.: sobre.jpg)
     e troque o caminho abaixo. */
  fotoPerfil: "conteudo/fotos/perfil.jpeg",
  fotoSobre: "conteudo/fotos/perfil.jpeg",

  /* -------- Destaques (faixa sob o hero) -------- */
  destaques: [
    { icone: "🧠", titulo: "Neuropsicologia", legenda: "avaliação e reabilitação" },
    { icone: "🌱", titulo: "Infância & adolescência", legenda: "psicoterapia" },
    { icone: "🤍", titulo: "Saúde mental materna", legenda: "puerpério & maternidade" },
    { icone: "🎓", titulo: "Psicologia escolar", legenda: "orientação e palestras" }
  ],

  /* -------- Sobre -------- */
  sobreParagrafos: [
    "Sou Amanda Caroline, psicóloga clínica e neuropsicóloga com atuação em Campo Grande – MS. Desde a minha formação estou imersa na jornada de muitas famílias: crescer não é apenas amadurecer e ser saudável fisicamente. Amadurecer emocional e psicologicamente é fundamental para a construção de adultos saudáveis — e isso começa desde a infância.",
    "Atendo crianças, adolescentes e seus cuidadores, além de mulheres que atravessam momentos de profunda transformação, como a gestação, o puerpério e a maternidade atípica. Acredito que cuidar de si não é egoísmo: é a forma de garantir recursos emocionais para cuidar de quem amamos.",
    "Meu trabalho é pautado no acolhimento, na ética e na ciência, respeitando o tempo e a história de cada pessoa que chega até mim."
  ],

  // Links adicionais na seção Sobre (equipe / redes)
  sobreLinks: [
    { texto: "🤍 Equipe @amare.infantil", url: "https://www.instagram.com/amare.infantil/" },
    { texto: "📚 Psicologia Escolar (Instagram)", url: "https://www.instagram.com/psiconaescola/" }
  ],

  /* -------- Especialidades / Serviços -------- */
  servicosLead:
    "Atendimentos presenciais e online, pensados para cada fase da vida. Cada serviço é conduzido com escuta qualificada e olhar integral sobre a pessoa e sua família.",

  servicos: [
    {
      icone: "🧠",
      titulo: "Avaliação Neuropsicológica",
      descricao:
        "Compreensão do funcionamento cognitivo e emocional (atenção, memória, funções executivas, aprendizagem), auxiliando em diagnósticos e orientações para a família e a escola.",
      itens: ["Investigações de dificuldades de aprendizagem", "Auxílio em diagnósticos (TDAH, TEA e outros)", "Devolutiva acolhedora e relatório"]
    },
    {
      icone: "🌱",
      titulo: "Psicoterapia Infantil e Adolescente",
      descricao:
        "Um espaço seguro para a criança e o adolescente se expressarem e se desenvolverem emocionalmente, com a participação e orientação dos cuidadores.",
      itens: ["Ansiedade, medos e inseguranças", "Dificuldades escolares e comportamentais", "Apoio aos pais e cuidadores"]
    },
    {
      icone: "🤍",
      titulo: "Psicoterapia para Mulheres",
      descricao:
        "Escuta e acolhimento para mulheres em diferentes fases da vida: saúde emocional, relações, autoestima, transições e projetos de vida.",
      itens: ["Ansiedade, depressão e estresse", "Autoconhecimento e autoestima", "Relações e fases de transição"]
    },
    {
      icone: "👶",
      titulo: "Saúde Mental Materna",
      descricao:
        "O puerpério é considerado o 4º trimestre da gestação — um período de intensas emoções e transformações. Mães também merecem cuidado e acolhimento.",
      itens: ["Acolhimento no puerpério", "Transtornos perinatais (ansiedade e depressão)", "Maternidade atípica — mães de crianças com deficiência"]
    },
    {
      icone: "🎓",
      titulo: "Psicologia Escolar e Educacional",
      descricao:
        "Orientação a famílias e escolas sobre desenvolvimento, aprendizagem e comportamento, apoiando uma trajetória escolar mais saudável e feliz.",
      itens: ["Dificuldades de aprendizagem (ex.: discalculia)", "Orientação a pais e professores", "Intervenção junto à escola"]
    },
    {
      icone: "💬",
      titulo: "Supervisão e Palestras",
      descricao:
        "Supervisão para profissionais da psicologia e palestras sobre educação, desenvolvimento infantil e saúde mental para escolas e empresas.",
      itens: ["Supervisão clínica", "Palestras para escolas e famílias", "Formação para educadores"]
    }
  ],

  /* -------- Como funciona (passos) -------- */
  passos: [
    { titulo: "Contato", texto: "Envie uma mensagem pelo WhatsApp contando um pouco do seu momento." },
    { titulo: "Primeira conversa", texto: "Uma escuta inicial para entender as necessidades e esclarecer dúvidas." },
    { titulo: "Plano de cuidado", texto: "Definimos juntos o melhor caminho: psicoterapia e/ou avaliação neuropsicológica." },
    { titulo: "Acompanhamento", texto: "Sessões acolhedoras, no seu ritmo, com evolução acompanhada de perto." }
  ],

  /* -------- Valores / abordagem -------- */
  valores: [
    { icone: "🤝", titulo: "Acolhimento", texto: "Um espaço seguro para ser ouvida(o) sem julgamentos." },
    { icone: "⚖️", titulo: "Ética e sigilo", texto: "Condução ética e confidencial em todas as etapas." },
    { icone: "🔬", titulo: "Base em evidências", texto: "Prática fundamentada na ciência e na experiência clínica." },
    { icone: "🌿", titulo: "Olhar integral", texto: "Cuidado com a pessoa e com quem cuida dela." }
  ],

  /* -------- Conteúdos / Instagram (galeria) --------
     Para importar automaticamente, use o script importar_conteudo.py
     ou adicione itens manualmente neste formato. */
  conteudosLead:
    "Conteúdo educativo e reflexões sobre desenvolvimento, maternidade, neuropsicologia e educação. Siga e acompanhe de perto.",
  conteudos: [
    {
      img: "conteudo/fotos/post-1.jpg",
      data: "Jul 2026",
      legenda: "Reflexões e trocas para compartilhar o cuidado e a informação.",
      link: "https://www.instagram.com/p/Dav3PsPFoC-/"
    },
    {
      img: "conteudo/fotos/post-2.jpg",
      data: "Jul 2026",
      legenda: "Sobre maternidade de crianças com deficiência e a importância do acolhimento à mãe.",
      link: "https://www.instagram.com/p/Dalq7nWli2l/"
    },
    {
      img: "conteudo/fotos/post-3.jpg",
      data: "Jul 2026",
      legenda: "O 4º trimestre da gestação: ansiedade e depressão também são comuns no puerpério.",
      link: "https://www.instagram.com/p/Dai9wANlsiW/"
    },
    {
      img: "conteudo/fotos/post-4.jpg",
      data: "Jul 2026",
      legenda: "Desenvolvimento infantojuvenil: uma trajetória saudável e feliz começa na infância.",
      link: "https://www.instagram.com/p/DaicAeDOVMd/"
    }
  ],

  /* -------- Depoimentos --------
     💡 Substitua pelos depoimentos reais de pacientes.
     As entradas atuais são apenas exemplos/placeholders. */
  depoimentos: [
    {
      estrelas: "★★★★★",
      texto: "“Espaço aqui para o depoimento real de uma paciente sobre o atendimento.”",
      autor: "Nome da paciente",
      detalhe: "Psicoterapia para mulheres"
    },
    {
      estrelas: "★★★★★",
      texto: "“Espaço aqui para o depoimento real de uma mãe ou cuidadora.”",
      autor: "Nome da mãe",
      detalhe: "Atendimento infantojuvenil"
    },
    {
      estrelas: "★★★★★",
      texto: "“Espaço aqui para o depoimento real sobre a avaliação neuropsicológica.”",
      autor: "Nome do familiar",
      detalhe: "Avaliação neuropsicológica"
    }
  ],

  /* -------- Dúvidas frequentes -------- */
  faq: [
    {
      pergunta: "Como agendar um atendimento?",
      resposta: "É simples: envie uma mensagem pelo WhatsApp (botão flutuante ou na seção de contato) contando um pouco do seu momento. Em seguida, alinhamos o melhor dia e horário para você."
    },
    {
      pergunta: "A partir de qual idade as crianças são atendidas?",
      resposta: "O atendimento infantil é planejado de acordo com cada fase do desenvolvimento. Em geral, atendemos crianças a partir da primeira infância até a adolescência, sempre com a participação dos responsáveis."
    },
    {
      pergunta: "O que é e como funciona a avaliação neuropsicológica?",
      resposta: "É um processo de investigação do funcionamento cognitivo e emocional por meio de entrevistas, testes e observações. Ajuda a compreender dificuldades de atenção, memória, aprendizagem e comportamento, orientando diagnósticos e intervenções. Ao final, há uma devolutiva acolhedora com a família."
    },
    {
      pergunta: "Os atendimentos são presenciais ou online?",
      resposta: "O consultório fica em Campo Grande – MS, com atendimento presencial. Também é possível avaliarmos a possibilidade de atendimento online, conforme o serviço e a necessidade."
    },
    {
      pergunta: "O atendimento é particular? Aceita convênio?",
      resposta: "Os atendimentos são particulares. Em caso de dúvida sobre reembolso ou valores, entre em contato pelo WhatsApp que esclarecemos tudo com transparência."
    },
    {
      pergunta: "A primeira sessão já é um atendimento?",
      resposta: "A primeira conversa é um momento de escuta inicial, em que conhecemos o motivo da procura e combinamos os próximos passos — sempre no seu ritmo e com total sigilo."
    }
  ],

  /* -------- Contato (cartões) -------- */
  contatoLead:
    "Agende sua consulta pelo WhatsApp, acompanhe os conteúdos nas redes sociais ou visite o consultório em Campo Grande – MS.",

  contatoCartoes: [
    {
      icone: "💬",
      titulo: "WhatsApp",
      valor: "+55 67 99255-6307",
      dica: "Agendamentos, supervisões e palestras",
      link: "https://wa.me/5567992556307"
    },
    {
      icone: "📸",
      titulo: "Instagram — Clínica",
      valor: "@amandacarolinepsi",
      dica: "Neuropsicologia e psicoterapia",
      link: "https://www.instagram.com/amandacarolinepsi/"
    },
    {
      icone: "🎓",
      titulo: "Instagram — Psicologia Escolar",
      valor: "@psiconaescola",
      dica: "Educação e psicologia escolar",
      link: "https://www.instagram.com/psiconaescola/"
    },
    {
      icone: "💼",
      titulo: "LinkedIn",
      valor: "Amanda Caroline",
      dica: "Perfil profissional",
      link: "https://www.linkedin.com/in/psiamandacaroline/"
    },
    {
      icone: "📍",
      titulo: "Consultório",
      valor: "Campo Grande – MS",
      dica: "Psicóloga Clínica de Crianças e Adolescentes",
      link: "https://share.google/EduyBFZOfGrY5teoW"
    }
  ],

  /* -------- Rodapé -------- */
  rodapeBase: "© 2026 Amanda Caroline · Psicóloga Clínica e Neuropsicóloga · Todos os direitos reservados."
};
