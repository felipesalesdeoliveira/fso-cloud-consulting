export const navItems = [
  { label: "Início", href: "/" },
  { label: "Serviços", href: "/#servicos" },
  { label: "Como funciona", href: "/#processo" },
  { label: "Sobre", href: "/#sobre" },
  { label: "Projetos", href: "/#projetos" },
  { label: "Artigos", href: "/#artigos" },
  { label: "Tecnologias", href: "/#tecnologias" },
  { label: "Contato", href: "/#contato" },
];

export const heroStats = [
  "Ambientes de produção",
  "Cloud & Kubernetes",
  "SRE e confiabilidade",
  "Automação de infraestrutura",
];

export const services = [
  {
    slug: "diagnostico-de-infraestrutura-e-confiabilidade",
    title: "Diagnóstico de infraestrutura e confiabilidade",
    description:
      "Avaliação técnica do ambiente para identificar riscos, gargalos, falhas recorrentes e oportunidades de melhoria.",
    introduction:
      "Uma análise estruturada do ambiente atual para entender arquitetura, operação, riscos e prioridades antes de investir em mudanças. O diagnóstico conecta os problemas técnicos aos impactos percebidos pelo negócio.",
    idealFor:
      "Empresas que enfrentam instabilidade, crescimento desorganizado, falhas recorrentes ou falta de clareza sobre onde começar a evolução da infraestrutura.",
    deliverables: [
      "Levantamento da arquitetura, dependências e processos operacionais",
      "Avaliação de disponibilidade, desempenho, segurança, custos e capacidade",
      "Mapa de riscos, gargalos e pontos únicos de falha",
      "Plano de ação priorizado com recomendações técnicas e próximos passos",
    ],
    benefits: [
      "Visão objetiva do estado atual do ambiente",
      "Priorização de investimentos baseada em risco e impacto",
      "Base técnica para decisões e projetos posteriores",
    ],
  },
  {
    slug: "observabilidade-e-monitoramento",
    title: "Observabilidade e monitoramento",
    description:
      "Implementação de métricas, logs, traces, dashboards e alertas para ampliar a visibilidade do ambiente e acelerar a identificação de problemas.",
    introduction:
      "Construção de visibilidade técnica sobre aplicações e infraestrutura para detectar comportamentos anormais, investigar incidentes e acompanhar a experiência dos serviços em produção.",
    idealFor:
      "Ambientes em que falhas são descobertas pelos usuários, investigações demoram ou as equipes não possuem dados suficientes para entender o comportamento dos sistemas.",
    deliverables: [
      "Estratégia de métricas, logs e traces alinhada aos serviços críticos",
      "Dashboards operacionais e indicadores de saúde do ambiente",
      "Alertas acionáveis, health checks e monitoramento sintético",
      "Documentação da solução e orientações para investigação de incidentes",
    ],
    benefits: [
      "Detecção mais rápida de falhas e degradações",
      "Redução do tempo de investigação e recuperação",
      "Decisões técnicas orientadas por dados confiáveis",
    ],
  },
  {
    slug: "automacao-de-infraestrutura-e-cicd",
    title: "Automação de infraestrutura e CI/CD",
    description:
      "Automação de ambientes, pipelines, deploys e processos operacionais com mais padronização e segurança.",
    introduction:
      "Transformação de tarefas manuais e configurações frágeis em processos versionados, reproduzíveis e auditáveis, da criação da infraestrutura até a entrega das aplicações.",
    idealFor:
      "Equipes que dependem de procedimentos manuais, possuem ambientes inconsistentes ou enfrentam lentidão e risco elevado em mudanças e deploys.",
    deliverables: [
      "Infraestrutura como código e automação de configurações",
      "Pipelines de integração, validação e entrega contínua",
      "Padronização de ambientes, variáveis, segredos e controles de mudança",
      "Documentação dos fluxos automatizados e procedimentos de recuperação",
    ],
    benefits: [
      "Entregas mais rápidas, consistentes e rastreáveis",
      "Redução de erros causados por atividades manuais",
      "Ambientes reproduzíveis e mais simples de manter",
    ],
  },
  {
    slug: "cloud-e-otimizacao-de-custos",
    title: "Cloud e otimização de custos",
    description:
      "Análise de arquitetura, consumo e desperdícios para otimizar recursos cloud sem comprometer desempenho e confiabilidade.",
    introduction:
      "Análise técnica e financeira do consumo em nuvem para aumentar a transparência dos gastos e identificar otimizações sustentáveis, preservando desempenho e confiabilidade.",
    idealFor:
      "Empresas com crescimento de custos cloud, dificuldade de atribuir gastos ou recursos superdimensionados e pouco utilizados.",
    deliverables: [
      "Mapeamento de custos, recursos, contas, tags e centros de responsabilidade",
      "Identificação de desperdícios, ociosidade e oportunidades de rightsizing",
      "Dashboards, alertas de orçamento e indicadores de acompanhamento",
      "Plano priorizado de otimização com riscos e economia potencial",
    ],
    benefits: [
      "Maior previsibilidade e transparência sobre os gastos",
      "Redução de desperdícios sem decisões isoladas de corte",
      "Cultura de responsabilidade compartilhada sobre custos cloud",
    ],
  },
  {
    slug: "kubernetes-e-plataformas-de-containers",
    title: "Kubernetes e plataformas de containers",
    description:
      "Implantação, evolução e troubleshooting de clusters e workloads, com foco em segurança, estabilidade e operação em produção.",
    introduction:
      "Planejamento e evolução de plataformas de containers considerando disponibilidade, segurança, capacidade, observabilidade e a real necessidade do ambiente.",
    idealFor:
      "Empresas que utilizam ou avaliam Kubernetes e precisam reduzir riscos, estabilizar workloads ou estabelecer padrões adequados para produção.",
    deliverables: [
      "Avaliação da arquitetura, dos clusters e dos workloads",
      "Configuração de recursos, probes, escalabilidade e políticas de segurança",
      "Estruturação de deploys, observabilidade e troubleshooting",
      "Padrões operacionais, documentação e recomendações de evolução",
    ],
    benefits: [
      "Workloads mais estáveis e preparados para crescimento",
      "Uso mais eficiente dos recursos da plataforma",
      "Operação padronizada e com maior visibilidade",
    ],
  },
  {
    slug: "praticas-de-sre-e-gestao-da-confiabilidade",
    title: "Práticas de SRE e gestão da confiabilidade",
    description:
      "Definição de indicadores e objetivos de confiabilidade, gestão de incidentes e práticas de evolução contínua orientadas por dados.",
    introduction:
      "Aplicação progressiva de práticas de Site Reliability Engineering para transformar dados operacionais em objetivos claros, decisões de engenharia e melhoria contínua da confiabilidade.",
    idealFor:
      "Equipes que já possuem algum nível de monitoramento, mas precisam definir metas de confiabilidade, melhorar a resposta a incidentes e equilibrar estabilidade com evolução do produto.",
    deliverables: [
      "Definição de SLIs, SLOs e critérios de medição",
      "Estruturação de error budgets e indicadores de confiabilidade",
      "Processos de resposta a incidentes e post-mortems sem culpabilização",
      "Backlog de melhorias orientado por risco, recorrência e impacto",
    ],
    benefits: [
      "Expectativas de confiabilidade mensuráveis e compartilhadas",
      "Decisões mais equilibradas entre velocidade e estabilidade",
      "Aprendizado contínuo a partir de incidentes e dados operacionais",
    ],
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Diagnóstico",
    text: "Entendimento do ambiente, dos desafios, das limitações e dos objetivos do negócio.",
  },
  {
    step: "02",
    title: "Planejamento",
    text: "Definição das prioridades, da abordagem técnica, dos riscos e dos entregáveis.",
  },
  {
    step: "03",
    title: "Implementação",
    text: "Execução das melhorias com validação, documentação e acompanhamento técnico.",
  },
  {
    step: "04",
    title: "Evolução",
    text: "Análise dos resultados e definição dos próximos passos para evolução contínua.",
  },
];

export const highlights = [
  "Atuação com ambientes de produção",
  "Experiência em DevOps e SRE desde 2023",
  "Foco em observabilidade e confiabilidade",
  "Experiência com cloud, Kubernetes e automação",
];

export const projects = [
  {
    category: "Observabilidade",
    title: "Monitoramento de disponibilidade",
    description:
      "Estruturação de health checks, monitores sintéticos, alertas e dashboards para acompanhamento de serviços críticos.",
  },
  {
    category: "Kubernetes",
    title: "Observabilidade em ambientes distribuídos",
    description:
      "Centralização de métricas, logs e indicadores operacionais para melhorar a investigação de incidentes.",
  },
  {
    category: "Cloud & IaC",
    title: "Infraestrutura cloud automatizada",
    description:
      "Provisionamento e padronização de ambientes utilizando infraestrutura como código e práticas de automação.",
  },
];

export const articles = [
  {
    category: "Observabilidade",
    title: "Monitoramento não é observabilidade: entenda a diferença",
    description:
      "Uma visão prática sobre métricas, logs, traces e como construir visibilidade real sobre sistemas distribuídos.",
    readingTime: "8 min de leitura",
    status: "Em breve",
  },
  {
    category: "SRE",
    title: "Como definir SLOs que realmente ajudam a operação",
    description:
      "Como transformar indicadores técnicos em objetivos de confiabilidade alinhados às necessidades do negócio.",
    readingTime: "10 min de leitura",
    status: "Em breve",
  },
  {
    category: "Cloud & FinOps",
    title: "FinOps além da redução de custos",
    description:
      "Como otimizar ambientes cloud sem comprometer desempenho, estabilidade ou capacidade de crescimento.",
    readingTime: "7 min de leitura",
    status: "Em breve",
  },
];
