export const WHATSAPP_USERNAME = "yagorangeladv";
export const WHATSAPP_BASE_URL = "https://api.whatsapp.com/send/?text&username=yagorangeladv&type=username&app_absent=0&utm_source=ig";
export const INSTAGRAM_HANDLE = "@yagorangeladv";
export const INSTAGRAM_URL = "https://www.instagram.com/yagorangeladv/";
export const LAWYER_NAME = "Dr. Yago Rangel Ramos";
export const OAB_NUMBER = "OAB/RJ 209.621";

export function getWhatsAppUrl(customMessage?: string): string {
  const text = customMessage 
    ? encodeURIComponent(customMessage)
    : encodeURIComponent("Olá, Dr. Yago! Vi o seu site e gostaria de tirar dúvidas sobre o meu caso.");
  return `https://api.whatsapp.com/send/?text=${text}&username=${WHATSAPP_USERNAME}&type=username&app_absent=0&utm_source=ig`;
}

export interface ServiceItem {
  id: string;
  category: "previdenciario" | "saude";
  title: string;
  shortDescription: string;
  fullDetails: string;
  targetAudience: string;
  keyBenefits: string[];
  documentsNeeded: string[];
  urgencyLevel?: "Alta Prioridade" | "Urgência Imediata" | "Planejamento Estratégico";
  defaultWhatsAppMessage: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "aposentadorias",
    category: "previdenciario",
    title: "Aposentadorias e Planejamento",
    shortDescription: "Aposentadoria por idade, tempo de contribuição, especial (insalubridade) ou por incapacidade permanente com cálculo exato.",
    fullDetails: "Análise minuciosa de todo o seu Cadastro Nacional de Informações Sociais (CNIS), períodos não averbados, conversão de tempo especial em comum e aplicação das regras de transição mais vantajosas pós-Reforma da Previdência.",
    targetAudience: "Trabalhadores urbanos, rurais, autônomos e profissionais expostos a agentes nocivos (médicos, enfermeiros, metalúrgicos, vigilantes, etc.).",
    keyBenefits: [
      "Simulação da melhor regra de transição pós-Reforma",
      "Reconhecimento de atividade especial (PPP e LTCAT)",
      "Retificação de vínculos e contribuições com pendência no INSS",
      "Garantia de que você não perderá dinheiro se aposentando antes da hora certa"
    ],
    documentsNeeded: [
      "Extrato CNIS atualizado",
      "Carteira de Trabalho (todas as páginas com anotações)",
      "Documento de identificação (RG/CPF ou CNH)",
      "PPP (Perfil Profissiográfico Previdenciário) se trabalhou com insalubridade"
    ],
    urgencyLevel: "Planejamento Estratégico",
    defaultWhatsAppMessage: "Olá Dr. Yago, gostaria de uma análise sobre a minha Aposentadoria e cálculo de tempo de contribuição."
  },
  {
    id: "bpc-loas",
    category: "previdenciario",
    title: "BPC / LOAS (Idosos e PCDs)",
    shortDescription: "Benefício de 1 salário mínimo mensal para idosos acima de 65 anos ou pessoas com deficiência e impedimentos de longo prazo.",
    fullDetails: "O Benefício de Prestação Continuada (LOAS) é garantido por lei mesmo para quem nunca contribuiu para o INSS. Exige comprovação do critério socioeconômico e, no caso de PCD, laudos que comprovem impedimento de natureza física, mental, intelectual ou sensorial de longo prazo.",
    targetAudience: "Idosos a partir de 65 anos em situação de vulnerabilidade e pessoas com deficiência de qualquer idade (incluindo autismo, paralisia, visão monocular e doenças graves incapacitantes).",
    keyBenefits: [
      "Não exige contribuições prévias para o INSS",
      "Valor mensal de 1 salário mínimo nacional vigente",
      "Defesa judicial célere contra negativas arbitrárias de renda familiar",
      "Dedução de gastos com remédios, fraldas e alimentação na renda per capita"
    ],
    documentsNeeded: [
      "Cadastro Único (CadÚnico) devidamente atualizado",
      "Documentos de identidade de todos que residem na casa",
      "Laudos médicos, exames e receitas atualizadas (para casos de deficiência)",
      "Comprovantes de gastos com saúde e medicamentos"
    ],
    urgencyLevel: "Alta Prioridade",
    defaultWhatsAppMessage: "Olá Dr. Yago, gostaria de saber se eu ou alguém da minha família tem direito ao BPC/LOAS."
  },
  {
    id: "beneficios-incapacidade",
    category: "previdenciario",
    title: "Auxílio-Doença e Invalidez",
    shortDescription: "Auxílio por incapacidade temporária ou permanente para quem está doente ou sofreu acidente e foi reprovado na perícia médica do INSS.",
    fullDetails: "Quando um trabalhador adoece ou sofre acidente que o impede de exercer suas atividades habituais, o INSS frequentemente indefere o pedido por alegar ausência de incapacidade. Atuamos com perícia médica judicial independente para restabelecer ou conceder o pagamento.",
    targetAudience: "Trabalhadores empregados, autônomos e segurados do INSS que foram considerados 'aptos' indevidamente pela perícia administrativa.",
    keyBenefits: [
      "Contestação imediata do laudo pericial falho do INSS",
      "Pedido de perícia médica judicial com médico especialista",
      "Possibilidade de conversão em aposentadoria por incapacidade com acréscimo de 25% (se necessitar de cuidador)",
      "Cobrança retroativa de todas as parcelas atrasadas desde a data do corte"
    ],
    documentsNeeded: [
      "Atestados médicos detalhados com CID da doença",
      "Exames complementares (ressonâncias, biópsias, relatórios cirúrgicos)",
      "Comunicação de Decisão do INSS (carta de indeferimento)",
      "Comprovante de afastamento do trabalho (se empregado)"
    ],
    urgencyLevel: "Alta Prioridade",
    defaultWhatsAppMessage: "Olá Dr. Yago, tive meu Auxílio-Doença negado ou cortado pelo INSS e preciso de ajuda jurídica."
  },
  {
    id: "medicamentos-alto-custo",
    category: "saude",
    title: "Medicamentos de Alto Custo",
    shortDescription: "Ações judiciais de urgência com pedido liminar para fornecimento imediato de remédios não disponíveis ou negados pelo SUS e Planos.",
    fullDetails: "O direito à vida e à saúde é garantia constitucional inegociável. Quando a Secretaria de Saúde do Estado, o Ministério da Saúde ou a operadora do plano de saúde recusam o fornecimento de medicamentos importados, oncológicos ou de alto custo, ingressamos com ação judicial munida de tutela de urgência (liminar) para cumprimento em até poucas horas ou dias.",
    targetAudience: "Pacientes diagnosticados com câncer, doenças raras, doenças autoimunes, esclerose múltipla, diabetes tipo 1 grave, artrite psoriásica, cardiopatias graves e síndromes neurológicas.",
    keyBenefits: [
      "Pedido de liminar urgente protocolado para decisão rápida do juiz",
      "Bloqueio de verbas públicas ou multa diária em caso de descumprimento pelo Estado/Plano",
      "Atuação inclusive para medicamentos fora do rol da ANS ou da lista do SUS",
      "Acompanhamento humanizado durante toda a fase de entrega do fármaco"
    ],
    documentsNeeded: [
      "Laudo médico detalhado justificando a ineficácia dos remédios comuns do SUS",
      "Receituário médico atualizado com nome genérico e posologia precisa",
      "Negativa formal por escrito do SUS ou do Plano de Saúde (ou protocolo de solicitação)",
      "Orçamentos de drogarias demonstrando a impossibilidade financeira da família de arcar com o custo"
    ],
    urgencyLevel: "Urgência Imediata",
    defaultWhatsAppMessage: "Olá Dr. Yago, preciso urgentemente de uma ação para conseguir um Medicamento de Alto Custo negado."
  },
  {
    id: "tratamentos-planos-sus",
    category: "saude",
    title: "Tratamentos e Cirurgias Negadas",
    shortDescription: "Garantia de cirurgias, internações em UTI, próteses, exames de alta complexidade e terapia domiciliar (Home Care).",
    fullDetails: "Práticas abusivas de planos de saúde que limitam dias de internação, negam stents, válvulas, próteses e órteses, ou recusam tratamentos contínuos como fisioterapia especializada, fonoaudiologia e terapias para TEA (autismo) são ilegais e passíveis de indenização e concessão compulsória.",
    targetAudience: "Beneficiários de planos de saúde e usuários do SUS que necessitam de intervenção médica inadiável e enfrentam fila excessiva ou negativas sem embasamento técnico.",
    keyBenefits: [
      "Liberação compulsória de cirurgias de risco e materiais cirúrgicos",
      "Cobertura integral de Home Care com equipe multidisciplinar quando prescrito pelo médico assistente",
      "Combate ao cancelamento unilateral e reajustes abusivos por faixa etária",
      "Reembolso de despesas médico-hospitalares pagas emergencialmente pelo paciente"
    ],
    documentsNeeded: [
      "Contrato e carteirinha do plano de saúde",
      "Relatório médico minucioso indicando risco à vida ou perda de função do órgão",
      "Comprovante de negativa do plano (e-mail, protocolo ou carta de indeferimento)",
      "Histórico de exames diagnósticos"
    ],
    urgencyLevel: "Urgência Imediata",
    defaultWhatsAppMessage: "Olá Dr. Yago, o plano de saúde ou SUS negou minha cirurgia/tratamento e preciso de orientação jurídica."
  },
  {
    id: "revisoes-previdenciarias",
    category: "previdenciario",
    title: "Revisão de Benefícios e Pensões",
    shortDescription: "Identificação de erros no cálculo inicial da sua aposentadoria ou pensão por morte para elevar o valor mensal e resgatar atrasados.",
    fullDetails: "Milhares de aposentados recebem menos do que deveriam devido a erros na inclusão de salários de contribuição, desconsideração de sentenças trabalhistas ganhas no passado, ou não aplicação das teses revisionais consagradas pelos Tribunais Superiores.",
    targetAudience: "Aposentados e pensionistas que se aposentaram nos últimos 10 anos e desconfiam que o valor pago pelo INSS está defasado.",
    keyBenefits: [
      "Cálculo atuarial preciso antes de qualquer protocolo para não correr risco de diminuir o valor",
      "Recuperação dos valores retroativos dos últimos 5 anos corrigidos com juros e correção",
      "Revisão do buraco negro, teto dos benefícios e inclusão de reclamatória trabalhista",
      "Análise completa sem promessas ilusórias: apenas teses juridicamente sólidas"
    ],
    documentsNeeded: [
      "Carta de Concessão e Memória de Cálculo do benefício",
      "Extrato de Pagamento do Benefício (HISCRE)",
      "Processo Administrativo de concessão do INSS",
      "Cópia da reclamatória trabalhista (se houver)"
    ],
    urgencyLevel: "Planejamento Estratégico",
    defaultWhatsAppMessage: "Olá Dr. Yago, gostaria de solicitar uma análise para Revisão do meu benefício de aposentadoria/pensão."
  }
];

export const LAWYER_STATS = [
  { value: "10+", label: "Anos de Advocacia Especializada", detail: "Foco exclusivo em Previdenciário e Saúde" },
  { value: "+500", label: "Famílias e Segurados Atendidos", detail: "Casos analisados com rigor técnico e humanização" },
  { value: "98%", label: "Índice de Avaliação Positiva", detail: "Transparência total e retorno rápido em cada etapa" },
  { value: "100%", label: "Conformidade Ética OAB", detail: "OAB/RJ 209.621 - Atuação em todo o estado do Rio" },
];

export const FAQ_DATA = [
  {
    question: "Quem tem direito ao benefício BPC/LOAS?",
    category: "Previdenciário",
    answer: "Têm direito ao BPC/LOAS duas categorias de cidadãos: 1) Idosos com 65 anos ou mais; e 2) Pessoas com deficiência de qualquer idade que possuam impedimento de longo prazo (mínimo de 2 anos) de natureza física, mental, intelectual ou sensorial. O critério econômico básico exige renda familiar por pessoa igual ou inferior a 1/4 do salário mínimo, mas a Justiça já consolidou o entendimento de que despesas com remédios, fraldas, tratamentos e alimentação especial podem ser deduzidas desse cálculo, permitindo a concessão mesmo para quem ultrapassa ligeiramente esse teto."
  },
  {
    question: "O que fazer se o INSS negar o meu auxílio-doença ou aposentadoria?",
    category: "Previdenciário",
    answer: "Não se desespere nem espere passivamente. O indeferimento administrativo é muito comum devido ao tempo reduzido das perícias do INSS. Você deve guardar a Carta de Indeferimento (Comunicação de Decisão) e procurar imediatamente um advogado especialista. Ingressaremos com uma ação na Justiça Federal solicitando uma nova perícia médica com um perito judicial especialista na sua doença exata. Se o direito for comprovado, o INSS é obrigado a pagar o benefício retroativo desde o dia em que você fez o primeiro pedido."
  },
  {
    question: "Como conseguir remédios de alto custo na Justiça pelo SUS ou Plano?",
    category: "Saúde & Medicamentos",
    answer: "Para obter medicamentos de alto custo judicialmente, é necessário preencher três requisitos fixados pelo Superior Tribunal de Justiça (Tema 106): 1) Laudo médico circunstanciado emitido pelo médico assistente justificando a necessidade e a ineficácia dos fármacos fornecidos pelo SUS; 2) Incapacidade financeira do paciente em arcar com o custo do tratamento; 3) Registro do remédio na ANVISA. Com esses documentos, ingressamos com pedido liminar de urgência, no qual o juiz pode ordenar o fornecimento sob pena de bloqueio de verbas públicas ou multa diária."
  },
  {
    question: "Quanto tempo demora para sair uma liminar de medicamento urgente?",
    category: "Saúde & Medicamentos",
    answer: "Em casos de urgência médica com risco iminente de agravamento da doença ou morte, o pedido de tutela de urgência (liminar) é apreciado pelo juiz plantonista ou titular em prazos muito curtos, frequentemente entre 24 a 72 horas após a distribuição da ação. O advogado acompanha em tempo real para despachar diretamente com a vara responsável."
  },
  {
    question: "O atendimento com o Dr. Yago pode ser feito 100% online?",
    category: "Geral",
    answer: "Sim! Hoje os processos no INSS e no Poder Judiciário são 100% digitais. Você pode realizar todo o atendimento pelo WhatsApp ou chamada de vídeo, enviar fotos nítidas ou PDFs dos seus documentos com segurança e assinar procurações e declarações direto pelo celular, sem precisar sair de casa ou pegar filas, esteja você no Rio de Janeiro ou em qualquer estado do Brasil."
  },
  {
    question: "Preciso pagar antecipado para avaliar se tenho direito?",
    category: "Geral",
    answer: "A triagem inicial de viabilidade do seu caso é feita de forma clara e acessível pelo WhatsApp. Nosso compromisso é com a transparência ética: analisamos seus documentos previamente e orientamos se há fundamento jurídico sólido antes de qualquer protocolo, sem promessas vazias e sempre de acordo com a tabela de honorários e o Código de Ética e Disciplina da OAB."
  }
];

export interface TriageOption {
  id: string;
  label: string;
  area: "previdenciario" | "saude";
  problems: {
    title: string;
    description: string;
    recommendedAction: string;
    suggestedMessage: string;
  }[];
}

export const TRIAGE_CASES = [
  {
    id: "bpc",
    icon: "HeartHandshake",
    title: "Preciso do BPC/LOAS (Idoso ou Deficiência)",
    subtitle: "Nunca contribuí ou recebo menos de 1 salário",
    scenarios: [
      {
        id: "bpc-negado",
        label: "Dei entrada no INSS e foi Negado",
        outcome: "Caso altamente viável para ação judicial com revisão de despesas médicas e perícia social independente.",
        message: "Olá Dr. Yago, tive o meu pedido de BPC/LOAS negado pelo INSS e gostaria de reverter na Justiça."
      },
      {
        id: "bpc-novo",
        label: "Ainda não dei entrada e quero orientação",
        outcome: "Realizamos o planejamento e montagem correta do requerimento para evitar negativas desnecessárias.",
        message: "Olá Dr. Yago, gostaria de orientação para dar entrada no BPC/LOAS com a documentação correta."
      }
    ]
  },
  {
    id: "auxilio",
    icon: "ShieldAlert",
    title: "Estou Doente / Auxílio-Doença Cortado",
    subtitle: "Incapacidade para trabalhar ou perícia reprovada",
    scenarios: [
      {
        id: "aux-cortado",
        label: "Benefício cancelado no Pente-Fino do INSS",
        outcome: "Ação judicial imediata para restabelecimento com pedido de tutela de urgência e cobrança de atrasados.",
        message: "Olá Dr. Yago, meu Auxílio-Doença foi cortado no pente-fino e continuo sem condições de trabalhar."
      },
      {
        id: "aux-reprovado",
        label: "Fui à perícia e o perito disse que estou apto",
        outcome: "Contestação judicial com perito especialista na sua patologia para contrapor o laudo sumário do INSS.",
        message: "Olá Dr. Yago, o perito do INSS me deu como apto, mas tenho laudos atestando minha incapacidade."
      }
    ]
  },
  {
    id: "remedio",
    icon: "Pill",
    title: "Preciso de Medicamento de Alto Custo",
    subtitle: "SUS ou Plano de Saúde se recusou a entregar",
    scenarios: [
      {
        id: "med-urgente",
        label: "Medicamento oncológico ou para doença rara negado",
        outcome: "Ação de obrigação de fazer com pedido liminar imediato (resposta judicial esperada entre 24h e 72h).",
        message: "Olá Dr. Yago, preciso urgentemente de uma liminar para obter um medicamento de alto custo negado pelo SUS/Plano."
      },
      {
        id: "med-fora-rol",
        label: "Plano alegou que o remédio não está no Rol da ANS",
        outcome: "Tese jurídica consolidada pelo STJ: havendo indicação médica precisa, o rol não pode limitar a cura.",
        message: "Olá Dr. Yago, o plano de saúde negou meu medicamento alegando que está fora do rol da ANS."
      }
    ]
  },
  {
    id: "aposentadoria",
    icon: "FileCheck",
    title: "Quero me Aposentar ou Revisar Valor",
    subtitle: "Idade, tempo de contribuição ou trabalho insalubre",
    scenarios: [
      {
        id: "apo-planejar",
        label: "Quero saber quando e como me aposentar melhor",
        outcome: "Cálculo atuarial completo comparando todas as regras pós-Reforma para não aceitar um benefício menor.",
        message: "Olá Dr. Yago, gostaria de um cálculo previdenciário para planejar a minha aposentadoria da forma mais vantajosa."
      },
      {
        id: "apo-revisar",
        label: "Já sou aposentado e acho que o valor veio errado",
        outcome: "Conferência da Carta de Concessão e salários de contribuição para verificar se há direito a aumento e atrasados.",
        message: "Olá Dr. Yago, já sou aposentado e gostaria de saber se tenho direito à revisão do meu benefício."
      }
    ]
  }
];
