import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Sections";
import { Header } from "@/components/Header";
import { publicAsset } from "@/lib/paths";

type Locale = "pt" | "en";

const copy = {
  pt: {
    back: "Voltar para projetos",
    status: "Implementado e validado",
    category: "AWS · Serverless · Dados",
    title: "PostgreSQL com RDS Proxy e rede privada",
    description:
      "Evolução de um marketplace serverless para operar com PostgreSQL privado sem abandonar o DynamoDB nem as integrações assíncronas construídas anteriormente.",
    architectureLink: "Explorar a arquitetura",
    contextLabel: "Desafio",
    contextTitle: "Adicionar persistência relacional sem abrir o banco para a Internet",
    contextText:
      "As três funções Lambda já atendiam catálogo e pedidos com DynamoDB, S3 e SQS. A nova etapa precisava acrescentar PostgreSQL e transações SQL, preservar o modo anterior e evitar conexão pública, NAT Gateway ou credenciais no código.",
    requirements: [
      "Selecionar RDS ou DynamoDB de forma explícita, sem fallback e sem dual write.",
      "Manter PostgreSQL, RDS Proxy e interfaces de rede em subnets privadas.",
      "Preservar S3, SQS e DynamoDB sem criar uma rota padrão para a Internet.",
      "Validar catálogo, pedido, processamento e baixa de estoque nos dois modos.",
    ],
    environmentLabel: "Ambiente validado",
    environmentTitle: "Topologia privada comprovada antes da limpeza",
    environmentText:
      "A implementação foi verificada por testes funcionais e consultas somente leitura. Depois das validações, os recursos com cobrança contínua foram removidos de forma controlada; a arquitetura, o código e os resultados permanecem documentados.",
    environment: [
      ["Rede", "VPC /24 com DNS habilitado e duas subnets privadas em AZs distintas"],
      ["Banco", "PostgreSQL 16.15, Single-AZ, 20 GiB gp3 e acesso público desabilitado"],
      ["Conexões", "RDS Proxy com TLS obrigatório, duas subnets e credencial no Secrets Manager"],
      ["Execução", "Três Lambdas associadas às duas subnets privadas"],
      ["Saída privada", "Gateway Endpoints para DynamoDB/S3 e Interface Endpoints para SQS/Secrets Manager"],
      ["Roteamento", "Sem Internet Gateway, NAT Gateway ou rota 0.0.0.0/0"],
    ],
    architectureLabel: "Arquitetura e fluxo",
    architectureTitle: "Do adapter escolhido ao destino correto",
    architectureText:
      "A função Lambda continua sendo um serviço gerenciado fora da VPC. Quando o código precisa usar a rede privada, a chamada passa por Hyperplane ENIs nas subnets selecionadas. A partir daí, o caminho depende do adapter e do serviço acessado.",
    diagramFrame: "Sprint 03 · PostgreSQL e rede privada",
    diagramZoom: "Abrir em tamanho real ↗",
    diagramAlt:
      "Diagrama da Sprint 03 com escolha de adapter, Hyperplane ENIs, RDS Proxy, PostgreSQL e VPC Endpoints",
    modesLabel: "Dois modos de persistência",
    modesTitle: "A configuração troca o adapter; o contrato da aplicação permanece",
    modes: [
      {
        name: "DATA_SOURCE=rds",
        text: "A Lambda consulta a credencial pelo endpoint privado do Secrets Manager e abre a conexão TLS no endpoint do RDS Proxy. O Proxy gerencia o pool e encaminha as sessões ao PostgreSQL.",
        color: "blue",
      },
      {
        name: "DATA_SOURCE=dynamodb",
        text: "A mesma função instancia o adapter DynamoDB. O tráfego segue pela route table privada e pelo Gateway Endpoint, preservando a implementação da Sprint 02.",
        color: "violet",
      },
    ],
    networkLabel: "Controles de rede",
    networkTitle: "Acesso permitido por identidade, porta e destino",
    networkItems: [
      ["Lambda → Proxy", "TCP 5432 permitido somente do security group das Lambdas para o security group do Proxy."],
      ["Proxy → PostgreSQL", "TCP 5432 permitido somente do security group do Proxy para o security group do banco."],
      ["Lambda → endpoints", "HTTPS 443 permitido somente das Lambdas para as ENIs de SQS e Secrets Manager."],
      ["Banco sem atalho", "O PostgreSQL não aceita origem pública nem acesso direto do security group das Lambdas."],
      ["Gateway endpoints", "DynamoDB e S3 são alcançados por prefix lists na route table, sem ENI dedicada e sem custo horário."],
      ["Sem rota de Internet", "As subnets privadas mantêm somente a rota local e as rotas dos Gateway Endpoints."],
    ],
    transactionLabel: "Consistência",
    transactionTitle: "Pedido e estoque mudam como uma única operação",
    transactionText:
      "No adapter PostgreSQL, a processadora bloqueia o produto dentro de uma transação, verifica o estoque, atualiza a quantidade e confirma o pedido. Se qualquer etapa falhar, o rollback impede um estado parcial. No modo DynamoDB, a garantia equivalente continua sendo feita com TransactWriteItems.",
    transactionSteps: [
      "Abrir a transação e bloquear o produto selecionado.",
      "Validar estoque e impedir uma segunda baixa para pedido já processado.",
      "Atualizar estoque e status do pedido dentro da mesma unidade atômica.",
      "Confirmar a transação ou desfazer todas as mudanças em caso de erro.",
    ],
    validationLabel: "Validação ponta a ponta",
    validationTitle: "O mesmo fluxo foi comprovado nos dois adapters",
    validations: [
      ["PostgreSQL", "Produto criado e editado, pedido processado, estoque reduzido e tabelas products/orders conferidas diretamente com psql."],
      ["DynamoDB", "Adapter reativado somente por configuração; produto da Sprint 02 comprado, pedido processado e estoque atualizado."],
      ["Assíncrono", "SQS acionou a processadora; fila principal e DLQ terminaram vazias, sem erro persistente no fluxo validado."],
      ["Retorno ao RDS", "As três funções voltaram para DATA_SOURCE=rds e uma nova compra confirmou leitura e escrita pelo PostgreSQL."],
    ],
    decisionsLabel: "Decisões técnicas",
    decisionsTitle: "Escolhas que reduziram exposição e acoplamento",
    decisions: [
      ["RDS Proxy entre Lambda e banco", "O Proxy absorve a variação de conexões do ambiente serverless e evita que cada invocação trate o banco como um destino público."],
      ["Secret referenciado, não copiado", "As funções recebem somente o ARN autorizado e consultam usuário e senha em tempo de execução."],
      ["Adapter explícito", "A mudança de persistência acontece por DATA_SOURCE; não existe fallback silencioso nem escrita simultânea nos dois bancos."],
      ["Dois tipos de endpoint", "Gateway Endpoints atendem S3/DynamoDB; Interface Endpoints criam ENIs privadas para SQS/Secrets Manager."],
      ["Duas AZs para a camada de rede", "As Lambdas, endpoints Interface, DB subnet group e Proxy usam subnets em zonas distintas, mesmo com o banco de laboratório em Single-AZ."],
      ["Recursos temporários", "O laboratório foi dimensionado para validação e removido após os testes para interromper custos recorrentes."],
    ],
    costLabel: "Custos e encerramento",
    costTitle: "Arquitetura validada sem deixar cobrança contínua esquecida",
    costText:
      "A estimativa parcial confirmou que RDS Proxy e Interface Endpoints têm peso relevante mesmo com uma instância pequena. Após concluir os vinte passos e testar os dois adapters, PostgreSQL, Proxy, secret e endpoints Interface foram removidos sem snapshot final. VPC, subnets, route table, security groups, IAM, Lambdas e endpoints Gateway foram preservados.",
    resultLabel: "Resultado",
    resultTitle: "Um backend serverless com duas persistências verificáveis",
    resultText:
      "A Sprint 03 terminou com os mesmos fluxos de catálogo e pedidos executados em DynamoDB e PostgreSQL, banco sem acesso público, conexões intermediadas pelo RDS Proxy e integrações AWS alcançadas por caminhos privados. A limpeza posterior encerrou o laboratório, não a evidência da implementação.",
    completed: "20 de 20 etapas técnicas concluídas e validadas em 04/11/2026.",
    other: "Ver outros projetos",
    contact: "Conversar sobre uma solução",
  },
  en: {
    back: "Back to projects",
    status: "Implemented and validated",
    category: "AWS · Serverless · Data",
    title: "Private PostgreSQL with RDS Proxy and Amazon VPC",
    description:
      "An evolution of a serverless marketplace to run on private PostgreSQL without abandoning DynamoDB or the asynchronous integrations delivered earlier.",
    architectureLink: "Explore the architecture",
    contextLabel: "Challenge",
    contextTitle: "Add relational persistence without exposing the database",
    contextText:
      "Three Lambda functions already served catalog and order flows through DynamoDB, S3, and SQS. The next step had to add PostgreSQL and SQL transactions, keep the original mode, and avoid public connectivity, NAT Gateway, or credentials in code.",
    requirements: [
      "Choose RDS or DynamoDB explicitly, with no fallback and no dual write.",
      "Keep PostgreSQL, RDS Proxy, and network interfaces in private subnets.",
      "Preserve S3, SQS, and DynamoDB without adding a default Internet route.",
      "Validate catalog, order processing, and stock updates in both modes.",
    ],
    environmentLabel: "Validated environment",
    environmentTitle: "A private topology proven before cleanup",
    environmentText:
      "The implementation was checked through functional tests and read-only inspection. After validation, continuously billed resources were removed in a controlled cleanup; the architecture, code, and results remain documented.",
    environment: [
      ["Network", "A /24 VPC with DNS enabled and two private subnets across separate Availability Zones"],
      ["Database", "PostgreSQL 16.15, Single-AZ, 20 GiB gp3, and no public access"],
      ["Connections", "RDS Proxy with required TLS, two subnets, and credentials in Secrets Manager"],
      ["Runtime", "Three Lambda functions attached to both private subnets"],
      ["Private egress", "Gateway Endpoints for DynamoDB/S3 and Interface Endpoints for SQS/Secrets Manager"],
      ["Routing", "No Internet Gateway, NAT Gateway, or 0.0.0.0/0 route"],
    ],
    architectureLabel: "Architecture and flow",
    architectureTitle: "From the selected adapter to the correct destination",
    architectureText:
      "Lambda remains a managed service outside the VPC. When code needs private networking, the call uses Hyperplane ENIs in the selected subnets. From there, the path depends on the adapter and destination service.",
    diagramFrame: "Sprint 03 · PostgreSQL and private networking",
    diagramZoom: "Open at full size ↗",
    diagramAlt: "Sprint 03 diagram with adapter selection, Hyperplane ENIs, RDS Proxy, PostgreSQL, and VPC Endpoints",
    modesLabel: "Two persistence modes",
    modesTitle: "Configuration changes the adapter; the application contract remains",
    modes: [
      { name: "DATA_SOURCE=rds", text: "Lambda retrieves credentials through the private Secrets Manager endpoint and opens a TLS connection to RDS Proxy. The Proxy manages the pool and forwards sessions to PostgreSQL.", color: "blue" },
      { name: "DATA_SOURCE=dynamodb", text: "The same function creates the DynamoDB adapter. Traffic follows the private route table and Gateway Endpoint, preserving the Sprint 02 implementation.", color: "violet" },
    ],
    networkLabel: "Network controls",
    networkTitle: "Access allowed by identity, port, and destination",
    networkItems: [
      ["Lambda → Proxy", "TCP 5432 is allowed only from the Lambda security group to the Proxy security group."],
      ["Proxy → PostgreSQL", "TCP 5432 is allowed only from the Proxy security group to the database security group."],
      ["Lambda → endpoints", "HTTPS 443 is allowed only from Lambda to the SQS and Secrets Manager endpoint ENIs."],
      ["No database shortcut", "PostgreSQL accepts neither public sources nor direct access from the Lambda security group."],
      ["Gateway endpoints", "DynamoDB and S3 use prefix lists in the route table, with no dedicated ENI or hourly endpoint charge."],
      ["No Internet route", "Private subnets keep only the local route and Gateway Endpoint routes."],
    ],
    transactionLabel: "Consistency",
    transactionTitle: "Order and stock change as one operation",
    transactionText:
      "The PostgreSQL adapter locks the product inside a transaction, checks stock, updates quantity, and confirms the order. If any step fails, rollback prevents partial state. DynamoDB keeps the equivalent guarantee through TransactWriteItems.",
    transactionSteps: [
      "Start the transaction and lock the selected product.",
      "Validate stock and prevent a second deduction for an already processed order.",
      "Update stock and order status inside the same atomic unit.",
      "Commit the transaction or roll back every change on error.",
    ],
    validationLabel: "End-to-end validation",
    validationTitle: "The same flow was proven through both adapters",
    validations: [
      ["PostgreSQL", "A product was created and edited, an order was processed, stock decreased, and products/orders were inspected directly with psql."],
      ["DynamoDB", "The adapter was restored through configuration only; a Sprint 02 product was purchased, processed, and updated."],
      ["Asynchronous path", "SQS invoked the processor; the main queue and DLQ ended empty, with no persistent error in the validated flow."],
      ["Back to RDS", "All three functions returned to DATA_SOURCE=rds and a new purchase confirmed PostgreSQL reads and writes."],
    ],
    decisionsLabel: "Technical decisions",
    decisionsTitle: "Choices that reduced exposure and coupling",
    decisions: [
      ["RDS Proxy between Lambda and the database", "The Proxy absorbs connection variation from the serverless runtime and keeps the database off public paths."],
      ["Reference the secret, do not copy it", "Functions receive only the authorized ARN and retrieve username and password at runtime."],
      ["Explicit adapter", "Persistence changes through DATA_SOURCE; there is no silent fallback or simultaneous write to both databases."],
      ["Two endpoint types", "Gateway Endpoints serve S3/DynamoDB; Interface Endpoints create private ENIs for SQS/Secrets Manager."],
      ["Two AZs for the network layer", "Lambda, Interface Endpoints, the DB subnet group, and Proxy use subnets in separate zones, while the lab database remains Single-AZ."],
      ["Temporary resources", "The lab was sized for validation and removed after testing to stop recurring cost."],
    ],
    costLabel: "Cost and cleanup",
    costTitle: "A validated architecture without forgotten recurring charges",
    costText:
      "The partial estimate showed that RDS Proxy and Interface Endpoints remain meaningful cost drivers even with a small database instance. After all twenty steps and both adapter tests, PostgreSQL, Proxy, the managed secret, and Interface Endpoints were removed without a final snapshot. The VPC, private subnets, route table, security groups, IAM, Lambda, and Gateway Endpoints were preserved.",
    resultLabel: "Result",
    resultTitle: "A serverless backend with two verifiable persistence modes",
    resultText:
      "Sprint 03 completed the same catalog and order flows on DynamoDB and PostgreSQL, with no public database access, connections mediated by RDS Proxy, and AWS integrations reached through private paths. The later cleanup ended the lab, not the evidence of implementation.",
    completed: "20 of 20 technical steps completed and validated on November 4, 2026.",
    other: "View other projects",
    contact: "Discuss a solution",
  },
};

export function PrivatePostgresCase({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const english = locale === "en";
  const projectHome = english ? "/en/#projects" : "/#projetos";

  return (
    <>
      <a href="#content" className="skip-link">{english ? "Skip to main content" : "Ir para o conteúdo principal"}</a>
      <Header locale={locale} />
      <main id="content" tabIndex={-1} className="bg-[#F8FAFD] pt-24 text-[#101828]">
        <section className="relative overflow-hidden border-b border-slate-200 px-6 py-20 md:py-28">
          <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-blue-200/35 blur-[110px]" />
          <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-violet-200/35 blur-[110px]" />
          <div className="relative mx-auto max-w-6xl">
            <Link href={projectHome} className="text-sm font-semibold text-blue-600 hover:text-blue-700">← {t.back}</Link>
            <div className="mt-10 flex flex-wrap gap-3">
              <span className="rounded-full bg-emerald-100 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-emerald-800">{t.status}</span>
              <span className="rounded-full bg-blue-100 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-blue-700">{t.category}</span>
            </div>
            <h1 className="mt-7 max-w-5xl text-4xl font-bold leading-[1.08] tracking-[-0.04em] text-slate-950 md:text-6xl">{t.title}</h1>
            <p className="mt-7 max-w-3xl text-xl leading-9 text-slate-600">{t.description}</p>
            <a href="#arquitetura" className="mt-8 inline-flex rounded-xl bg-blue-600 px-6 py-4 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-blue-700">{t.architectureLink}</a>
          </div>
        </section>

        <section id="arquitetura" className="scroll-mt-24 border-b border-slate-200 bg-white px-6 py-20">
          <div className="mx-auto max-w-6xl"><p className="section-label">{t.architectureLabel}</p><h2 className="section-title">{t.architectureTitle}</h2><p className="mt-6 max-w-4xl text-lg leading-8 text-slate-600">{t.architectureText}</p><figure className="mt-10 overflow-hidden rounded-[32px] border border-slate-300 bg-white shadow-sm"><figcaption className="flex flex-wrap items-center justify-between gap-3 bg-[#232f3e] px-6 py-4 text-lg font-bold text-white"><span>{t.diagramFrame}</span><a href={publicAsset("/diagrams/sprint-03-visao-completa-rede.gif")} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-blue-200 transition hover:text-white">{t.diagramZoom}</a></figcaption><div className="p-3 md:p-5"><Image src={publicAsset("/diagrams/sprint-03-visao-completa-rede.gif")} alt={t.diagramAlt} width={3522} height={2500} unoptimized className="h-auto w-full" /></div></figure></div>
        </section>

        <section className="bg-[#F3F6FB] px-6 py-20">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div><p className="section-label">{t.contextLabel}</p><h2 className="section-title">{t.contextTitle}</h2><p className="mt-6 text-lg leading-8 text-slate-600">{t.contextText}</p></div>
            <ol className="grid gap-4">{t.requirements.map((item, index) => <li key={item} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 leading-7 text-slate-700"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-xs font-bold text-blue-700">0{index + 1}</span>{item}</li>)}</ol>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-white px-6 py-20">
          <div className="mx-auto max-w-6xl"><p className="section-label">{t.environmentLabel}</p><h2 className="section-title">{t.environmentTitle}</h2><p className="mt-6 max-w-4xl text-lg leading-8 text-slate-600">{t.environmentText}</p><dl className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{t.environment.map(([name, value]) => <div key={name} className="rounded-2xl border border-slate-200 bg-[#F8FAFD] p-6 shadow-sm"><dt className="text-xs font-bold uppercase tracking-[0.14em] text-blue-600">{name}</dt><dd className="mt-3 font-semibold leading-7 text-slate-800">{value}</dd></div>)}</dl></div>
        </section>

        <section className="border-y border-slate-200 bg-[#F3F6FB] px-6 py-20"><div className="mx-auto max-w-6xl"><p className="section-label">{t.modesLabel}</p><h2 className="section-title">{t.modesTitle}</h2><div className="mt-10 grid gap-6 md:grid-cols-2">{t.modes.map((mode) => <article key={mode.name} className={`rounded-3xl border p-8 ${mode.color === "blue" ? "border-blue-200 bg-blue-50/70" : "border-violet-200 bg-violet-50/70"}`}><h3 className={`font-mono text-xl font-bold ${mode.color === "blue" ? "text-blue-900" : "text-violet-900"}`}>{mode.name}</h3><p className="mt-5 leading-8 text-slate-700">{mode.text}</p></article>)}</div></div></section>

        <section className="bg-white px-6 py-20"><div className="mx-auto max-w-6xl"><p className="section-label">{t.networkLabel}</p><h2 className="section-title">{t.networkTitle}</h2><div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{t.networkItems.map(([name, text]) => <article key={name} className="rounded-3xl border border-slate-200 bg-[#F8FAFD] p-7"><h3 className="text-lg font-bold text-slate-900">{name}</h3><p className="mt-4 leading-7 text-slate-600">{text}</p></article>)}</div></div></section>

        <section className="border-y border-slate-200 bg-[#101C3C] px-6 py-20 text-white"><div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr]"><div><p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-300">{t.transactionLabel}</p><h2 className="mt-5 text-3xl font-bold tracking-[-0.035em] md:text-5xl">{t.transactionTitle}</h2><p className="mt-6 text-lg leading-8 text-slate-300">{t.transactionText}</p></div><ol className="grid gap-4">{t.transactionSteps.map((step, index) => <li key={step} className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 leading-7 text-slate-200"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-blue-400/15 text-xs font-bold text-blue-200">{index + 1}</span>{step}</li>)}</ol></div></section>

        <section className="bg-white px-6 py-20"><div className="mx-auto max-w-6xl"><p className="section-label">{t.validationLabel}</p><h2 className="section-title">{t.validationTitle}</h2><div className="mt-10 grid gap-5 md:grid-cols-2">{t.validations.map(([name, text]) => <article key={name} className="rounded-3xl border border-emerald-200 bg-emerald-50/55 p-7"><span className="text-xs font-bold uppercase tracking-[0.14em] text-emerald-700">✓ {t.status}</span><h3 className="mt-5 text-lg font-bold text-emerald-950">{name}</h3><p className="mt-4 leading-7 text-slate-700">{text}</p></article>)}</div></div></section>

        <section className="border-y border-slate-200 bg-[#F3F6FB] px-6 py-20"><div className="mx-auto max-w-6xl"><p className="section-label">{t.decisionsLabel}</p><h2 className="section-title">{t.decisionsTitle}</h2><div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{t.decisions.map(([name, text]) => <article key={name} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"><h3 className="text-lg font-bold text-slate-900">{name}</h3><p className="mt-4 leading-7 text-slate-600">{text}</p></article>)}</div></div></section>

        <section className="bg-white px-6 py-20"><div className="mx-auto max-w-6xl rounded-[36px] border border-amber-200 bg-amber-50 p-8 md:p-12"><p className="text-sm font-bold uppercase tracking-[0.18em] text-amber-800">{t.costLabel}</p><h2 className="mt-5 max-w-4xl text-3xl font-bold tracking-[-0.035em] text-amber-950 md:text-5xl">{t.costTitle}</h2><p className="mt-6 max-w-4xl text-lg leading-8 text-slate-700">{t.costText}</p></div></section>

        <section className="border-t border-slate-200 bg-[#F3F6FB] px-6 py-20"><div className="mx-auto max-w-6xl rounded-[36px] bg-[#101C3C] p-8 text-white md:p-12"><p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-300">{t.resultLabel}</p><h2 className="mt-5 max-w-4xl text-3xl font-bold tracking-[-0.035em] md:text-5xl">{t.resultTitle}</h2><p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">{t.resultText}</p><p className="mt-6 font-bold text-emerald-300">{t.completed}</p><div className="mt-8 flex flex-wrap gap-3"><Link href={projectHome} className="rounded-xl bg-white px-6 py-4 text-sm font-bold text-blue-700">{t.other}</Link><Link href={english ? "/en/#contact" : "/#contato"} className="rounded-xl border border-blue-300/40 px-6 py-4 text-sm font-bold text-white">{t.contact}</Link></div></div></section>
      </main>
      <Footer locale={locale} />
    </>
  );
}
