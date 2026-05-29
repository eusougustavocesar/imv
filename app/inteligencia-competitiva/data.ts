// ── RESUMO EXECUTIVO ──────────────────────────────────────────────────────────

export const KEY_FINDINGS = [
  {
    label: "Campo aberto no Meta",
    value: "0 concorrentes diretos rodando anúncios",
    detail: "Nenhuma das 7 pós-graduações mapeadas investe em paid media. A janela de entrada é agora.",
  },
  {
    label: "Categoria própria, sem disputa",
    value: "Único em Metabologia Aplicada ao Emagrecimento",
    detail: "Nenhum concorrente usa esse posicionamento. O IMV Academy criou e ocupa sozinho essa categoria.",
  },
  {
    label: "Timing de mercado excepcional",
    value: "Patente do Ozempic vence em março/2026",
    detail: "Biossimilares nacionais entram no mercado. A turma de setembro/2026 se forma no pico da demanda por GLP-1.",
  },
  {
    label: "Prêmio de preço sem concorrente",
    value: "R$ 41.000 (56% acima do topo presencial)",
    detail: "Não há concorrente equivalente no nicho de metabologia e emagrecimento nessa faixa.",
  },
];

export const TURMA_DADOS = [
  ["Início",      "1º de setembro de 2026"],
  ["Duração",     "12 meses"],
  ["Vagas",       "130 a 180 médicos"],
  ["Ticket",      "R$ 41.000 (uso interno)"],
  ["Formato",     "12 módulos gravados + 3 presenciais em SP + Congresso de Encerramento"],
  ["Acesso",      "12 meses após o início"],
  ["Certificação","MEC"],
  ["Comercial",   "VD Brasil"],
];

// ── PRÓXIMOS PASSOS ───────────────────────────────────────────────────────────

export type Passo = {
  acao: string;
  responsavel: string;
  prazo: string;
  entrega: string | null; // null = pendente, "DD/MM/AAAA" = concluído
};

export const PROXIMOS_PASSOS: Passo[] = [
  {
    acao: "Definir orçamento de mídia paga para Junho, Julho e Agosto",
    responsavel: "Gustavo Fortkamp",
    prazo: "05/06/2026",
    entrega: null,
  },
  {
    acao: "Briefar VD Brasil: framing de candidatura, script de abordagem e régua de follow-up",
    responsavel: "Gustavo Fortkamp",
    prazo: "06/06/2026",
    entrega: null,
  },
  {
    acao: "Configurar pixel Meta, audiências-semente e lookalike do público do Dr. Gabriel Almeida",
    responsavel: "Gustavo Fortkamp",
    prazo: "10/06/2026",
    entrega: null,
  },
  {
    acao: "Gravar vídeos de topo de funil com Dr. Diogo (GLP-1, epidemia de obesidade, metabologia)",
    responsavel: "Gustavo Fortkamp + Dr. Diogo",
    prazo: "13/06/2026",
    entrega: null,
  },
  {
    acao: "Subir campanhas Fase 1: educação e conscientização (Junho)",
    responsavel: "Gustavo Fortkamp",
    prazo: "16/06/2026",
    entrega: null,
  },
  {
    acao: "Produzir criativos Fase 2: corpo docente, módulos e bastidores do produto",
    responsavel: "Gustavo Fortkamp",
    prazo: "30/06/2026",
    entrega: null,
  },
  {
    acao: "Subir campanhas Fase 2: consideração e prova de profundidade (Julho)",
    responsavel: "Gustavo Fortkamp",
    prazo: "01/07/2026",
    entrega: null,
  },
  {
    acao: "Abrir formulário de candidatura à Turma 2026",
    responsavel: "Gustavo Fortkamp + Dr. Diogo",
    prazo: "01/08/2026",
    entrega: null,
  },
  {
    acao: "Ativar retargeting de conversão e escassez real de vagas (Agosto)",
    responsavel: "Gustavo Fortkamp",
    prazo: "04/08/2026",
    entrega: null,
  },
];

// ── PRODUTO ───────────────────────────────────────────────────────────────────

export const CORPO_DOCENTE = [
  ["Dr. Diogo Antonielo",                 "Coordenação Científica · Medicina Metabólica"],
  ["Dra. Adriane Pitta",                  "Clínica Geral · Endocrinologia · Certificação Internacional em Obesidade"],
  ["Dr. André Lage",                      "Medicina Esportiva · Ortopedia"],
  ["Douglas Barão",                       "Nutrição Clínica e Esportiva"],
  ["Dra. Loreta Canivilo",               "Ginecologia Endócrina · Endocrinologia · Nutrologia"],
  ["Dra. Mariana Lara Batista de Oliveira","Medicina Esportiva · Nutrologia"],
  ["Dr. Willian Komatsu",                 "Fisiologia e Exercício"],
  ["Dr. Wilmar Jorge Accursio",           "Endocrinologia · Metabologia · Nutrologia"],
  ["Biohacker Tonton",                    "Biohacking · Farmacologia · Alta Performance"],
];

export const MODULOS = [
  ["01", "Fundamentos do Metabolismo Humano"],
  ["02", "Hormônios e Controle Metabólico"],
  ["03", "Fisiopatologia e Farmacologia da Obesidade"],
  ["04", "Farmacologia Avançada e Peptídeos"],
  ["05", "Eixo Intestino Cérebro e Microbiota"],
  ["06", "Medicina de Precisão e Exames Avançados"],
  ["07", "Estratégias Nutricionais para Emagrecimento e Hipertrofia"],
  ["08", "Recursos Ergogênicos e Performance"],
  ["09", "Ciclos de Vida e Metabolismo"],
  ["10", "Inflamação, Longevidade e Medicina Regenerativa"],
  ["11", "Medicina de Aventura e Performance Extrema"],
  ["12", "Gestão, Posicionamento e Clínica Premium"],
];

export const DIFERENCIAIS_LP = [
  "12 módulos clínicos com casos práticos e protocolos prontos para aplicação imediata",
  "3 encontros presenciais em São Paulo/SP",
  "Congresso IMV de Metabologia como encerramento da formação",
  "Acesso direto ao corpo docente ao longo de toda a formação",
  "Módulo de gestão e posicionamento de clínica de excelência",
  "Domínio profundo de metabolismo, hormônios e emagrecimento com aplicação clínica real",
  "Segurança e critério completo para prescrever GLP-1 e tirzepatida",
  "Posicionamento como referência em metabologia na sua cidade ou região",
  "Pertencimento a uma rede de profissionais que operam na fronteira da medicina moderna",
  "Aulas gravadas com acesso por 12 meses",
  "Certificado de Pós-Graduação aprovado pelo MEC",
  "Certificado institucional IMV + Hall de Formados permanente no site",
];

// ── MERCADO ───────────────────────────────────────────────────────────────────

export const MERCADO_DADOS = [
  ["Médicos ativos no Brasil (2024)", "575.930", "CFM / Agência Brasil"],
  ["Sem título de especialista", "~244 mil (40,9%)", "FMUSP / Demo. Médica 2025"],
  ["Cursos ativos de pós-grad. médica", "2.148 em 373 instituições", "e-MEC / FMUSP 2025"],
  ["Endocrinologia e Metabologia", "147 cursos, 1º lugar nacional", "FMUSP 2025"],
  ["Prescrições de GLP-1 emitidas (2018 a 2025)", ">10 milhões", "ANVISA"],
  ["Vencimento da patente do Ozempic", "Março/2026", "fontes diversas"],
  ["Mercado de emagrecimento médico BR (2024)", "US$ 188,6 mi", "trade.gov"],
  ["Projeção 2030", "US$ 531,5 mi (+182%)", "trade.gov"],
];

export const EPIDEMIOLOGIA = [
  ["Prevalência de obesidade adulta (2024)", "26,7%", "Vigitel / Min. Saúde"],
  ["Crescimento da obesidade (2006 a 2024)", "+118%", "CNN Brasil / Min. Saúde"],
  ["Excesso de peso (grau 1+, 2024)", "34,66% da população", "SISVAN/MS 2024"],
  ["Obesidade grau 3+ (2024)", "9 milhões de brasileiros", "SBCBM"],
  ["1 em cada 3 brasileiros (2025)", "Relatório global de obesidade", "Agência Brasil"],
  ["Projeção para 2044", "~48% dos adultos com obesidade", "Fiocruz"],
];

export const MERCADO_FINANCEIRO = [
  ["Ticket médio lato sensu", "R$ 15.782", "FMUSP 2025"],
  ["Ticket mediano lato sensu", "R$ 2.800", "FMUSP 2025"],
  ["Presenciais/semipresenciais (média)", ">R$ 26.000", "FMUSP 2025"],
  ["Carga horária média", "507 horas", "FMUSP 2025"],
  ["Duração média", "13,3 meses", "FMUSP 2025"],
  ["IMV Academy: R$ 41.000", "+56% acima do topo presencial mapeado", "Análise Recon"],
];

export const FRASES_CRIATIVOS = [
  "+118% de crescimento da obesidade no Brasil nos últimos 18 anos",
  "1 em cada 3 brasileiros vive com obesidade hoje",
  "Mais de 10 milhões de prescrições de GLP-1 emitidas. Médicos precisam saber manejar",
  "244 mil médicos brasileiros ainda não têm especialização formal",
  "Endocrinologia e Metabologia é a especialidade com mais cursos no Brasil: sinal de demanda crescente",
  "O mercado de emagrecimento médico vai crescer 182% até 2030",
];

// ── CONCORRENTES ──────────────────────────────────────────────────────────────

export const CONCORRENTES_DIRETOS = [
  ["Santa Casa SP",     "Nutrologia",              "R$ 49.000",     "Presencial + online", "Média"],
  ["SLMandic",          "Nutrologia",              "~R$ 30k+",      "Híbrido",             "Alta"],
  ["ABMFI",             "End. e Metab. Funcional", "R$ 18.720",     "EaD",                 "Alta (turma esgotada)"],
  ["IBCmed/Inspirali",  "End. e Metabologia",      "N/D",           "Híbrido trimestral",  "Média"],
  ["Einstein Ensino",   "Obesidade e Emagrecimento","N/D",          "Semipresencial",      "Média"],
  ["Faculdade Unimed",  "Nutrologia",              "R$ 22.320",     "EaD",                 "Baixa"],
  ["Sanar Pós",         "Nutrologia",              "N/D",           "EaD",                 "Baixa"],
];

export const CONCORRENTES_INDIRETOS = [
  ["Dr. Gabriel Almeida",  "Mentoria 2 dias GLP-1",       "~R$ 2 a 5k",       "30 ads ativos, principal referência"],
  ["GAFlix (Dr. Gabriel)", "Assinatura científica mensal", "N/D",              "LTV do mesmo público"],
  ["MedPrime",             "Cursos Medicina Intensiva",    "N/D",              "5 ads ativos, nicho diferente"],
  ["SBEMO Certificação",   "Extensão universitária",       "R$ 2.880 a 3.880", "Credencial internacional, sem profundidade"],
  ["CBOSM",                "Congresso anual 3 dias",       "N/D",              "Networking, não formação"],
];

export const DIFERENCIAIS = [
  ["Framing de seleção: candidatura, não compra",      "❌ Nenhum concorrente usa"],
  ["Módulo 12: Gestão e Posicionamento de Clínica",    "❌ Apenas SLMandic menciona negócios"],
  ["3 encontros presenciais + Congresso de Encerramento","❌ Nenhum com essa estrutura"],
  ["Hall de Formados permanente no site",               "❌ Nenhum"],
  ["Comunidade exclusiva com coordenador ativo",        "❌ Nenhum"],
  ["9 especialistas confirmados no corpo docente",      "❌ Nenhum com esse volume"],
  ["Kit de boas-vindas físico premium",                 "❌ Nenhum"],
  ["Categoria própria: Metabologia Aplicada ao Emagrecimento", "❌ Nenhum. É o único"],
];

export const POSICIONAMENTO_SANTACASA = [
  ["Ticket",            "R$ 49.000 (maior do mercado)",  "R$ 41.000"],
  ["Foco",              "Nutrologia (ampla)",             "Metabologia + emagrecimento (específico)"],
  ["Posicionamento",    "Prestígio institucional",        "Resultado clínico + consultório premium"],
  ["Formato",           "Presencial + síncrono",          "Gravado + 3 encontros presenciais"],
  ["Módulo de negócio", "Não mencionado",                 "Módulo 12: Gestão e Posicionamento de Clínica"],
  ["Framing comercial", "Compra de vaga",                 "Candidatura, seleção"],
];

// ── ANÚNCIOS ──────────────────────────────────────────────────────────────────

export const COBERTURA_ADS = [
  ["Dr. Gabriel Almeida",                                    "30",     "✅ Analisados"],
  ["MedPrime",                                               "5",      "✅ Analisados (nicho diferente)"],
  ["SLMandic, ABMFI, Einstein, IBCmed, Unimed, Santa Casa", "0 cada", "Sem paid media identificado"],
];

export const ANATOMIA_CRIATIVO = [
  ["🚨 + CAPS no início",       "Scroll stop: sinal visual de urgência"],
  ["'Se você é médico...'",     "Qualificação do avatar por identidade"],
  ["Checklist com ✅",           "Prova de método, tangibiliza o conteúdo"],
  ["Data específica",            "Deadline hard, elimina procrastinação"],
  ["'Exclusivo para médicos'",   "Exclusividade, filtro social"],
  ["'Garanta sua vaga'",         "Escassez implícita"],
  ["CRM + RQE no fechamento",    "Credencial regulatória, legitimidade"],
];

export const FUNIL_GABRIEL = [
  ["Ver detalhes",  "LP da Mentoria",  "Formulário de inscrição"],
  ["WhatsApp",      "Conversa direta", "Venda consultiva imediata"],
  ["Saiba mais",    "LP GAFlix",       "Assinatura recorrente (LTV)"],
];

export const GABRIEL_VS_IMV = [
  ["Ads rodando continuamente",          "✅ 30 ads ativos",            "❌ 0 ads ativos"],
  ["Produto de entrada (baixo ticket)",  "✅ Mentoria R$ 2 a 5k",      "❌ Sem equivalente"],
  ["Produto de LTV (recorrência)",       "✅ GAFlix assinatura",        "❌ Sem equivalente"],
  ["Funil WhatsApp direto",              "✅ CTA direto nos ads",       "❌ Sem funil estruturado"],
  ["Credencial técnica em anúncios",     "✅ CREMESP + RQE em todo ad", "Não aplicado ainda"],
];

export const CRIATIVOS = [
  {
    advertiser: "Dr. Gabriel Almeida",
    product: "Mentoria de Emagrecimento",
    type: "video" as const,
    daysRunning: 7,
    variations: 1,
    cta: "Ver detalhes",
    body: `🚨 INSCRIÇÕES ABERTAS\n\nMentoria de Emagrecimento com o Dr. Gabriel Almeida.\n\nSe você é médico e quer aprender as estratégias mais atuais, seguras e baseadas em evidências científicas no tratamento da obesidade, essa mentoria é para você.\n\nSerão 2 dias de imersão com foco em:\n✅ Fisiopatologia da obesidade\n✅ Mecanismos de ação de medicações\n✅ Construção de condutas personalizadas e seguras\n✅ Casos clínicos reais\n\n📆 Dias 30 e 31 de Maio\n\nExclusivo para médicos inscritos no CRM.\nGaranta sua vaga antes que elas se esgotem.`,
    thumbnail: "https://eajqpivrggvisuqfrvid.supabase.co/storage/v1/object/public/ad-thumbnails/00000000-0000-0000-0000-000000000001/1215643120587793.jpg",
    insight: "Hook de urgência com 🚨 + data hard deadline. Checklist ✅ prova o método. Credencial CRM/RQE ao final gera legitimidade regulatória.",
    tags: ["Urgência", "Checklist", "Deadline hard", "Exclusividade"],
    snapshotUrl: "https://www.facebook.com/ads/library/?id=1215643120587793",
  },
  {
    advertiser: "Dr. Gabriel Almeida",
    product: "GAFlix: Assinatura Científica",
    type: "image" as const,
    daysRunning: 15,
    variations: 1,
    cta: "Saiba mais",
    body: `GAFlix, uma plataforma com atualizações científicas semanais!\n\nMédico, já imaginou ter acesso a conteúdos científicos relevantes e atualizados sem perder horas lendo artigos?\n\nCom o GAFlix, você tem acesso a uma curadoria de artigos científicos atualizados, transformados em vídeos rápidos e didáticos.\n\n⚜️ Emagrecimento ⚜️ Implantes ⚜️ Hormônios ⚜️ Lipedema\n\n⚠️ Exclusivo para médicos com CRM ativo`,
    thumbnail: "https://eajqpivrggvisuqfrvid.supabase.co/storage/v1/object/public/ad-thumbnails/00000000-0000-0000-0000-000000000001/3199107606928397.jpg",
    insight: "Produto de LTV rodando em paralelo à mentoria. 15 dias ativo = validado pelo algoritmo. Apelo de conveniência: sem perder horas lendo artigos.",
    tags: ["LTV", "Conveniência", "15d ativo", "Assinatura"],
    snapshotUrl: "https://www.facebook.com/ads/library/?id=3199107606928397",
  },
  {
    advertiser: "MedPrime",
    product: "Cursos de Medicina Intensiva",
    type: "image" as const,
    daysRunning: 1,
    variations: 7,
    cta: "WhatsApp",
    body: `Seu paciente está chocando no plantão e você ainda fica inseguro entre noradrenalina, vasopressina, dobutamina e volume na prática clínica?\n\nCursos completos de Medicina Intensiva: Sepse, Choque, Ventilação Mecânica, Drogas Vasoativas, Sedação, UTI Cardiológica.\n\nNos chame no WhatsApp que te enviamos a lista completa de cursos para você avaliar antes de qualquer pagamento.`,
    thumbnail: "https://eajqpivrggvisuqfrvid.supabase.co/storage/v1/object/public/ad-thumbnails/00000000-0000-0000-0000-000000000001/987875853606550.jpg",
    insight: "Hook de cenário clínico real de insegurança do médico. 7 variações do mesmo copy, testando criativo visual. Funil 100% WhatsApp, sem LP.",
    tags: ["Dor clínica", "WhatsApp", "7 variações", "Sem LP"],
    snapshotUrl: "https://www.facebook.com/ads/library/?id=987875853606550",
  },
];

// ── SÍNTESE ESTRATÉGICA ───────────────────────────────────────────────────────

export const VANTAGENS = [
  ["Categoria própria",             "Nenhum concorrente usa 'Metabologia Aplicada ao Emagrecimento Saudável'. O IMV Academy nomeou e ocupa uma categoria nova, sem disputa direta."],
  ["Framing de seleção exclusivo",  "Nenhum concorrente usa 'candidatura, não compra'. É o maior diferencial de comunicação disponível e deve ser protegido em todos os materiais."],
  ["Timing de mercado excepcional", "Patente do Ozempic vence em março/2026. Turma inicia em setembro/2026. Formandos entram no mercado no exato pico da demanda por GLP-1."],
];

export const APRENDIZADOS = [
  ["Vídeo domina (57% dos ads)",        "Priorizar vídeos do Dr. Diogo na Fase 1 (Junho)"],
  ["Urgência + data hard converte",     "Reservar para Fase 3 (Agosto): escassez real de vagas"],
  ["WhatsApp como CTA direto funciona", "Testar em leads de alta intenção na abordagem VD Brasil"],
  ["Preço não aparece em nenhum ad",    "Padrão confirmado: R$ 41k nunca no material digital"],
  ["Hook de dor clínica ativa o avatar","'Seu paciente pergunta sobre GLP-1 e você ainda não tem resposta?'"],
  ["Checklist de conteúdo tangibiliza", "Usar nos criativos de meio de funil (Julho)"],
];

export const FASES_CAMPANHA = [
  ["Junho",  "Educação e Conscientização",       "Topo de funil. Conteúdo sobre GLP-1, epidemia de obesidade, metabologia. Sem CTA de venda. Objetivo: qualificar o avatar e criar demanda de informação.", "Vídeos Dr. Diogo · Posts de dado · Reels educativos"],
  ["Julho",  "Consideração e Prova de Profundidade", "Meio de funil. Corpo docente, módulos, método, bastidores. Leads se identificam como candidatos. Retargeting de quem interagiu em Junho.", "Checklist de copy · Depoimentos · Conteúdo de módulos"],
  ["Agosto", "Conversão e Escassez Real",        "Fundo de funil. Retargeting agressivo. CTA: candidatar-se. VD Brasil em modo intensivo de fechamento. Escassez real, não simulada.", "Urgência + data · Candidatura · O que significa ser da 1ª turma"],
];

export const PUBLICO_GABRIEL = [
  ["Quem é esse público", "Médico que já pagou para aprender sobre GLP-1. Validou o problema. É o lead mais qualificado disponível no mercado."],
  ["Por que é relevante",  "Quem faz mentoria de 2 dias com Gabriel está pronto para a próxima etapa: a formação completa. O IMV Academy é essa etapa."],
  ["Ação recomendada",     "Ativar lookalike/retargeting do público do Dr. Gabriel como audiência semente na Fase 1 (Junho). Ele aquece, o IMV converte."],
];
