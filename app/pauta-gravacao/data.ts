import type { PautaPost } from "@/components/imv/IMVPautaCard";

export const CONTEXTO_BULLETS = [
  {
    bold: "A patente do Ozempic venceu em março/2026.",
    rest: " Biossimilares chegaram. O custo cai, o acesso sobe, a demanda do paciente explode. Médicos de toda especialidade passam a receber esse paciente sem formação para atendê-lo.",
  },
  {
    bold: "Quase 2 milhões de prescrições de GLP-1 no Brasil.",
    rest: " Crescimento de 17% em apenas 3 meses. O mercado de emagrecimento brasileiro vai crescer 182% até 2030.",
  },
  {
    bold: "Janela de conteúdo crítica: junho = fase de educação e conscientização.",
    rest: " Os posts IMV Academy gravados hoje serão os primeiros criativos de ad rodando em junho. Objetivo: posicionar metabologia, não vender diretamente.",
  },
  {
    bold: "O concorrente mais próximo roda 30 anúncios simultâneos com urgência e datas.",
    rest: " O IMV Academy ainda não está no ar. Gravar hoje é fechar essa diferença.",
  },
  {
    bold: "Turma setembro 2026.",
    rest: " 130 a 180 vagas. O conteúdo gravado hoje alimenta toda a fase de geração de leads.",
  },
];

export const COMO_USAR = [
  { label: "Texto em bloco", desc: "sugestão de fala. Adapte ao seu tom natural" },
  { label: "Bullets", desc: "pontos a cobrir livremente, sem decorar" },
  { label: "Nota do filmmaker", desc: "orientação de visual/cena" },
  { label: "Tom", desc: "médico falando com médico. Autoridade sem didatismo." },
];

export const NOTAS_GRAVACAO = {
  cenario: "IMV · aproveitar o espaço em todos os posts. Fundo em foco suave nos posts de fala; walking shot no I1.",
  formato: "Vertical 9:16 · todos os posts",
  tom: "Médico falando com médico (A1, A2, A3) · médico falando com paciente (I2, I3)",
  adCreatives: "A1 e A2: gravar versão com fundo neutro também, para testar em ad sem ambiente de clínica",
};

export const PRIORIDADE: Array<{
  pos: number;
  tipo: "AD" | "ORG";
  post: string;
  razao: string;
}> = [
  { pos: 1,  tipo: "AD",  post: "A1: O Ozempic Virou Genérico. E Agora?", razao: "Maior urgência, dado de mercado, ad de topo de funil" },
  { pos: 2,  tipo: "AD",  post: "A2: Você Prescreveu. O Paciente Parou de Responder.", razao: "Hook de identificação forte, melhor performance em ad" },
  { pos: 3,  tipo: "ORG", post: "I5: Consulta Real — Faço Tudo Certo e Não Consigo Emagrecer", razao: "Requer 2 pessoas, gravar enquanto energia está alta" },
  { pos: 4,  tipo: "AD",  post: "A5: Consulta ao Especialista — Qual Médico a IMV Academy Vai Transformar?", razao: "Requer interlocutor, ad potential médio/alto" },
  { pos: 5,  tipo: "ORG", post: "I2: O Caso Que Ninguém Resolveu", razao: "Save e share alto, público paciente" },
  { pos: 6,  tipo: "ORG", post: "I3: GLP-1 é o Começo, Não a Solução", razao: "Trending topic, salvar e compartilhar" },
  { pos: 7,  tipo: "AD",  post: "A3: O Que 12 Meses de Formação Real Muda no Consultório", razao: "Diferencial IMV Academy vs concorrentes" },
  { pos: 8,  tipo: "ORG", post: "A4: Caixa de Perguntas — Preciso Ser Especialista para Entrar?", razao: "Dr. Diogo solo, gravar junto com I4" },
  { pos: 9,  tipo: "ORG", post: "I4: Caixa de Perguntas — O Que é Inflexibilidade Metabólica?", razao: "Dr. Diogo solo, mesmo set do A4" },
  { pos: 10, tipo: "ORG", post: "I1: Esse é o IMV", razao: "Institucional de espaço, b-roll de transição" },
];

// ── PARTE 1 · IMV ACADEMY ─────────────────────────────────────────────────────

export const POSTS_ACADEMY: PautaPost[] = [
  {
    code: "A1",
    title: "O Ozempic Virou Genérico. E Agora?",
    isAd: true,
    stars: 3,
    duration: 60,
    filmmakerNote: "Dr. Diogo falando direto para câmera, postura firme. Fundo IMV em foco suave. Primeiro 4s sem corte.",
    sections: [
      {
        label: "HOOK",
        timing: "0–4s",
        type: "speech",
        text: "Em março de 2026, a patente do Ozempic venceu no Brasil. Biossimilares chegaram. O que isso significa para o seu consultório nos próximos 12 meses?",
      },
      {
        label: "R.1 RETENÇÃO",
        timing: "5–40s",
        type: "bullets",
        items: [
          "Quase 2 milhões de prescrições de GLP-1 no Brasil, crescimento de 17% em 3 meses",
          "Com biossimilares nacionais, o custo cai. O acesso cresce. O volume de pacientes explode.",
          "Médicos de toda especialidade, clínico geral, ginecologista, ortopedista, vão receber esse paciente",
          "A maioria não tem formação para acompanhar o que vem depois da prescrição",
          "O mercado de emagrecimento brasileiro vai crescer 182% até 2030",
        ],
      },
      {
        label: "R.2 REVELAÇÃO",
        timing: "40–50s",
        type: "speech",
        text: "O médico que dominar o metabolismo de verdade não vai competir. Vai atender quem os outros não sabem como resolver.",
      },
      {
        label: "AÇÃO",
        timing: "50–60s",
        type: "speech",
        text: "A IMV Academy existe para isso. Turma inicia em setembro. Saiba mais no link da bio.",
      },
    ],
  },
  {
    code: "A2",
    title: "Você Prescreveu. O Paciente Parou de Responder.",
    isAd: true,
    stars: 3,
    duration: 55,
    filmmakerNote: "Pode usar recurso de texto na tela nos primeiros 4s para reforçar o hook. Dr. Diogo mais próximo da câmera, tom confidencial.",
    sections: [
      {
        label: "HOOK",
        timing: "0–4s",
        type: "speech",
        text: "Você prescreveu GLP-1. O paciente perdeu peso nos primeiros meses. Depois parou. E você não sabia exatamente por quê. Se isso já aconteceu no seu consultório, tem uma causa clínica.",
      },
      {
        label: "R.1 RETENÇÃO",
        timing: "5–35s",
        type: "bullets",
        items: [
          "GLP-1 sem diagnóstico metabólico profundo gera resultado parcial",
          "Inflexibilidade metabólica, resistência insulínica subclínica, composição corporal: o que precisa ser resolvido em paralelo",
          "Quando o paciente perde peso mas perde músculo junto, o metabolismo basal cai e o efeito do GLP-1 diminui",
          "Esse é o gap que cursos rápidos de GLP-1 não ensinam",
        ],
      },
      {
        label: "R.2 REVELAÇÃO",
        timing: "35–47s",
        type: "speech",
        text: "O médico que resolve o caso que o GLP-1 não completou é o médico que o paciente indica. Esse nível de resolução tem nome: formação metabólica real.",
      },
      {
        label: "AÇÃO",
        timing: "47–55s",
        type: "speech",
        text: "IMV Academy. Candidaturas abertas. Link na bio.",
      },
    ],
  },
  {
    code: "A3",
    title: "O Que 12 Meses de Formação Real Muda no Consultório",
    isAd: true,
    stars: 2,
    duration: 50,
    filmmakerNote: "Pode ser gravado no espaço IMV com ambiente visível ao fundo. O espaço premium reforça o argumento do diferencial.",
    sections: [
      {
        label: "HOOK",
        timing: "0–4s",
        type: "speech",
        text: "O que muda no consultório de um médico depois de 12 meses de formação real em metabolismo? Não em teoria. Em prática clínica com casos reais ao lado de especialistas.",
      },
      {
        label: "R.1 RETENÇÃO",
        timing: "5–35s",
        type: "bullets",
        items: [
          "Você começa a resolver os pacientes que outros médicos não resolveram",
          "Retenção de pacientes muda: o resultado clínico faz o marketing",
          "Você tem 9 especialistas de referência como rede permanente",
          "Três encontros presenciais: você resolve casos reais ao lado de especialistas, não vê slides",
          "Certificação MEC e framing de candidatura: você não compra uma vaga, você é selecionado",
        ],
      },
      {
        label: "R.2 REVELAÇÃO",
        timing: "35–43s",
        type: "speech",
        text: "A IMV Academy não é atualização de carreira. É a transição para um posicionamento de mercado diferente.",
      },
      {
        label: "AÇÃO",
        timing: "43–50s",
        type: "speech",
        text: "Turma setembro 2026. Candidaturas abertas. Link na bio.",
      },
    ],
  },
  {
    code: "A4",
    title: "Caixa de Perguntas: Preciso Ser Especialista para Entrar?",
    isAd: false,
    duration: 45,
    filmmakerNote: "Dr. Diogo segurando o celular como se estivesse lendo a caixa de perguntas. Mostrar a tela por 1-2s, depois cortar para ele respondendo. Tom descontraído, conversacional.",
    pergunta: {
      label: "PERGUNTA DA AUDIÊNCIA",
      role: "CAIXA DE PERGUNTAS",
      text: "Preciso ser especialista em endocrinologia ou nutrologia para entrar na IMV Academy?",
    },
    sections: [
      {
        label: "HOOK",
        timing: "0–3s",
        type: "speech",
        text: "Ótima pergunta. E a resposta vai surpreender muita gente.",
      },
      {
        label: "R.1 RETENÇÃO",
        timing: "3–30s",
        type: "bullets",
        items: [
          "Não. Qualquer médico com CRM ativo pode se candidatar.",
          "A formação parte do fundamento clínico e vai até o protocolo avançado",
          "Cirurgião, ginecologista, clínico geral: todos já passaram por aqui",
          "O que muda com a especialidade não é o acesso: é a velocidade de aplicação no consultório",
          "O pré-requisito real não é a especialidade. É querer dominar metabolismo de verdade.",
        ],
      },
      {
        label: "R.2 REVELAÇÃO",
        timing: "30–38s",
        type: "speech",
        text: "A IMV Academy forma do zero. O que você traz é a sua prática. O que você leva é o protocolo.",
      },
      {
        label: "AÇÃO",
        timing: "38–45s",
        type: "speech",
        text: "Tem mais dúvidas? Manda aqui na caixa. E se quiser conhecer a formação, link na bio.",
      },
    ],
  },
  {
    code: "A5",
    title: "Consulta ao Especialista: Qual Médico a IMV Academy Vai Transformar?",
    isAd: true,
    stars: 2,
    duration: 60,
    filmmakerNote: "Dois ângulos: close no interlocutor fazendo a pergunta, close no Dr. Diogo respondendo. Pode ser colega, produtor ou alguém da equipe. Não precisa aparecer o rosto do interlocutor se preferir. Tom de conversa real, não roteirizada.",
    pergunta: {
      label: "PERGUNTA DO INTERLOCUTOR (COLEGA MÉDICO)",
      role: "COLEGA",
      text: "Diogo, me diz em um minuto: qual é o perfil do médico que vai mudar de verdade com a IMV Academy?",
    },
    sections: [
      {
        label: "R.1 RESPOSTA DR. DIOGO",
        timing: "5–45s",
        type: "bullets",
        items: [
          "O médico que está vendo a demanda crescer no consultório e sente que falta profundidade para atender",
          "Quem já prescreveu GLP-1 e percebeu que o resultado parou, e não sabia por quê",
          "O médico que tem paciente que faz tudo certo e não responde, e quer entender o mecanismo",
          "Quem quer se tornar referência em metabolismo, não mais um profissional genérico no mercado",
        ],
      },
      {
        label: "R.2 REVELAÇÃO",
        timing: "45–53s",
        type: "speech",
        text: "Esse médico já existe. Ele só ainda não tem o protocolo. A IMV Academy é onde ele encontra.",
      },
      {
        label: "AÇÃO",
        timing: "53–60s",
        type: "speech",
        text: "Se você é esse médico, candidaturas abertas. Link na bio.",
      },
    ],
  },
];

// ── PARTE 2 · IMV ─────────────────────────────────────────────────────────────

export const POSTS_IMV: PautaPost[] = [
  {
    code: "I1",
    title: "Esse é o IMV",
    isAd: false,
    duration: 40,
    filmmakerNote: "Reel de espaço: Dr. Diogo caminhando pelo IMV, câmera seguindo. Mostrar o ambiente, a estética, os detalhes. Pode ser mais audiovisual do que verbal. Gravar como b-roll enquanto muda de set.",
    sections: [
      {
        label: "HOOK",
        timing: "0–3s",
        type: "speech",
        text: "Quando a gente criou o IMV, a ideia era simples: construir o espaço que eu gostaria de levar o meu próprio familiar para tratar.",
      },
      {
        label: "R.1 RETENÇÃO",
        timing: "3–25s",
        type: "bullets",
        items: [
          "Medicina metabólica, longevidade, estética e bem-estar num único espaço",
          "Equipe multidisciplinar escolhida por resultado clínico",
          "Protocolo de diagnóstico metabólico profundo: não o exame padrão, a leitura funcional",
        ],
      },
      {
        label: "R.2 REVELAÇÃO",
        timing: "25–33s",
        type: "speech",
        text: "Medicina de vanguarda não é tendência. É o que a ciência já permite e a maioria ainda não aplica.",
      },
      {
        label: "AÇÃO",
        timing: "33–40s",
        type: "speech",
        text: "Esse é o IMV. Acompanha.",
      },
    ],
  },
  {
    code: "I2",
    title: "O Caso Que Ninguém Resolveu",
    isAd: false,
    duration: 60,
    filmmakerNote: "Dr. Diogo sentado ou apoiado, tom mais íntimo. Iluminação quente. Este é o post de maior poder de identificação emocional do paciente.",
    sections: [
      {
        label: "HOOK",
        timing: "0–4s",
        type: "speech",
        text: "Toda semana atendo pelo menos um paciente que já passou por três, quatro, cinco profissionais diferentes sem resultado. E o problema nunca era o paciente.",
      },
      {
        label: "R.1 RETENÇÃO",
        timing: "5–40s",
        type: "bullets",
        items: [
          "A falha terapêutica tem uma causa clínica específica: ausência de diagnóstico metabólico profundo",
          "O que o IMV faz diferente: avalia o metabolismo como um sistema, substrato, mitocôndria, hormônio, inflamação",
          "Não o exame que mostra o que o médico quer ver. A leitura que mostra o que está errado.",
          "O paciente que faz tudo certo e não tem resultado não está mentindo. Ele está com inflexibilidade metabólica.",
        ],
      },
      {
        label: "R.2 REVELAÇÃO",
        timing: "40–50s",
        type: "speech",
        text: "Quando você entende o mecanismo, o resultado muda. E o paciente que antes desistia passa a confiar.",
      },
      {
        label: "AÇÃO",
        timing: "50–60s",
        type: "speech",
        text: "Acompanha o perfil do IMV para mais sobre como trabalhamos.",
      },
    ],
  },
  {
    code: "I3",
    title: "GLP-1 é o Começo, Não a Solução",
    isAd: false,
    duration: 55,
    filmmakerNote: "Tom assertivo. Esse post vai ser muito salvo e compartilhado. Capturar uma versão com fundo neutro para usar como ad de topo de funil para o público paciente.",
    sections: [
      {
        label: "HOOK",
        timing: "0–4s",
        type: "speech",
        text: "O GLP-1 é a ferramenta mais poderosa que a medicina de emagrecimento teve nos últimos 20 anos. E também é a mais mal utilizada.",
      },
      {
        label: "R.1 RETENÇÃO",
        timing: "5–38s",
        type: "bullets",
        items: [
          "GLP-1 sem avaliação de composição corporal: o paciente perde gordura e músculo juntos",
          "GLP-1 sem diagnóstico de inflexibilidade metabólica: resultado parcial ou temporário",
          "GLP-1 sem protocolo de força: quando para a medicação, o metabolismo está mais lento que antes",
          "No IMV, GLP-1 é parte de um protocolo metabólico, não o protocolo inteiro",
        ],
      },
      {
        label: "R.2 REVELAÇÃO",
        timing: "38–47s",
        type: "speech",
        text: "A ferramenta certa, no contexto errado, gera o resultado errado. GLP-1 só funciona de verdade quando o metabolismo está sendo tratado.",
      },
      {
        label: "AÇÃO",
        timing: "47–55s",
        type: "speech",
        text: "Salva esse vídeo. Se você usa GLP-1 ou acompanha alguém que usa, isso é importante.",
      },
    ],
  },
  {
    code: "I4",
    title: "Caixa de Perguntas: O Que é Inflexibilidade Metabólica?",
    isAd: false,
    duration: 45,
    filmmakerNote: "Mesmo formato do A4: celular em mão, mostrar a pergunta na tela. Tom mais acolhedor aqui, a audiência é paciente, não médico. Pode gravar no mesmo set do A4 para otimizar.",
    pergunta: {
      label: "PERGUNTA DA AUDIÊNCIA",
      role: "CAIXA DE PERGUNTAS",
      text: "O que é inflexibilidade metabólica e como sei se tenho esse problema?",
    },
    sections: [
      {
        label: "HOOK",
        timing: "0–3s",
        type: "speech",
        text: "Essa pergunta chegou três vezes essa semana na caixa. Vou responder de um jeito que faz sentido fora do consultório.",
      },
      {
        label: "R.1 RETENÇÃO",
        timing: "3–30s",
        type: "bullets",
        items: [
          "Inflexibilidade metabólica é quando o corpo perde a capacidade de usar gordura como combustível",
          "Fica preso só usando açúcar. Quando acaba, você fica sem energia, com fome, irritado.",
          "Sintomas: faz dieta e não perde. Faz exercício e não emagrece. Cansa fácil. Compulsão por carboidrato.",
          "Não é falta de força de vontade. É biologia. O metabolismo travou.",
        ],
      },
      {
        label: "R.2 REVELAÇÃO",
        timing: "30–38s",
        type: "speech",
        text: "Se você se reconheceu em algum desses sintomas, isso tem nome clínico. E tem solução quando você trata o que está errado de verdade.",
      },
      {
        label: "AÇÃO",
        timing: "38–45s",
        type: "speech",
        text: "Manda mais perguntas aqui. E se quiser saber como o IMV trata isso, link na bio.",
      },
    ],
  },
  {
    code: "I5",
    title: "Consulta Real: Faço Tudo Certo e Não Consigo Emagrecer",
    isAd: false,
    duration: 60,
    filmmakerNote: "Formato de consulta: Dr. Diogo sentado em frente a uma pessoa (paciente real ou encenado). Câmera alternando entre os dois. A pessoa faz a pergunta de forma natural, não lendo. Ambiente IMV ao fundo. Este é o post de maior identificação emocional.",
    pergunta: {
      label: "PERGUNTA DO PACIENTE",
      role: "PACIENTE",
      text: "Doutor, eu acordo cedo, faço dieta, malho, não como açúcar. Tudo certo. Como é possível que o meu corpo não responda?",
    },
    sections: [
      {
        label: "R.1 RESPOSTA DR. DIOGO",
        timing: "8–42s",
        type: "bullets",
        items: [
          "O que você está descrevendo é exatamente o que vejo na maioria dos casos que chegam aqui",
          "O problema não está no que você faz. Está no que o seu metabolismo consegue fazer com o que você faz.",
          "Com inflexibilidade metabólica, o corpo não usa gordura como combustível, mesmo em déficit calórico",
          "Ele prefere preservar gordura e consumir músculo. Por isso você não perde, fica sem energia e continua com compulsão, mesmo fazendo tudo certo",
        ],
      },
      {
        label: "R.2 REVELAÇÃO",
        timing: "42–52s",
        type: "speech",
        text: "Você não falhou. O seu metabolismo travou. E quando a gente entende onde travou, a gente consegue destravar.",
      },
      {
        label: "AÇÃO",
        timing: "52–60s",
        type: "speech",
        text: "Salva esse vídeo. Manda para alguém que você conhece que está vivendo exatamente isso.",
      },
    ],
  },
];
