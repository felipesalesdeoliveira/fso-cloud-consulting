import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Sections";
import { Header } from "@/components/Header";
import { publicAsset } from "@/lib/paths";

type Locale = "pt" | "en";

const services = [
  ["cognito.svg", "Amazon Cognito", "Identidade e emissão de tokens"],
  ["api-gateway.svg", "Amazon API Gateway", "REST API e authorizer"],
  ["lambda.svg", "AWS Lambda", "Catálogo, pedidos e processamento"],
  ["dynamodb.svg", "Amazon DynamoDB", "Produtos, estoque e pedidos"],
  ["s3.svg", "Amazon S3", "Imagens privadas dos produtos"],
  ["sqs.svg", "Amazon SQS", "Fila de pedidos e DLQ"],
  ["cloudwatch.svg", "Amazon CloudWatch", "Logs, métricas e tentativas"],
  ["xray.svg", "AWS X-Ray", "Rastreamento distribuído"],
];

const copy = {
  pt: {
    title: "Marketplace serverless com identidade e eventos",
    description: "Evolução do frontend publicado na Sprint 01 para uma arquitetura de aplicação com autenticação, APIs, persistência e processamento assíncrono na AWS.",
    back: "Voltar para projetos",
    status: "Em implementação",
    category: "AWS & Serverless",
    live: "Abrir frontend publicado ↗",
    architecture: "Arquitetura planejada",
    architectureTitle: "Uma requisição autenticada e duas velocidades de processamento",
    architectureText: "O navegador continua recebendo a SPA pelo CloudFront. Para usar as funções do marketplace, a pessoa se autentica no Cognito; a SPA envia o ID token à API, e o authorizer valida o JWT antes de a rota acionar a Lambda correta.",
    inherited: "Sprint 01 · já publicado",
    current: "Sprint 02 · em implementação",
    diagramLabel: "Fluxo animado",
    diagramTitle: "Identidade, catálogo e pedidos no mesmo fluxo",
    diagramText: "O diagrama percorre autenticação, operações de catálogo e recebimento assíncrono dos pedidos. As áreas coloridas separam responsabilidades e as setas numeradas mostram quando cada serviço entra no processamento.",
    diagramAlt: "Fluxo animado da Sprint 02 com Cognito, API Gateway, Lambda, DynamoDB, S3, SQS, DLQ, CloudWatch e X-Ray",
    diagramFrame: "Sprint 02 · Backend serverless",
    diagramZoom: "Abrir em tamanho real ↗",
    frontend: "SPA no navegador",
    frontendDetail: "S3 privado + CloudFront + Route 53",
    authFlow: "Fluxo de acesso",
    authTitle: "O API Gateway não faz login nem escolhe uma tela",
    authText: "Cognito administra identidade e sessão. Depois do login, a própria SPA chama uma rota da API conforme a ação do usuário. O API Gateway valida o token, aplica o contrato HTTP e encaminha a requisição ao backend responsável.",
    steps: [
      "A pessoa abre o domínio e recebe a SPA publicada na Sprint 01.",
      "A SPA conduz cadastro ou login pelo Cognito User Pool.",
      "Após autenticar, o Cognito devolve tokens; a aplicação usa o ID token nas chamadas previstas pelo projeto.",
      "A SPA envia Authorization: Bearer <ID token> ao API Gateway.",
      "O Cognito authorizer valida assinatura, expiração e audiência do JWT.",
      "A rota solicitada aciona a Lambda correspondente; uma requisição inválida não alcança a função.",
    ],
    speeds: "Duas velocidades",
    speedsTitle: "Catálogo responde agora; pedidos continuam depois",
    sync: "Fluxo síncrono · catálogo",
    syncText: "Operações de produtos consultam a Lambda de catálogo, persistem dados no DynamoDB e geram URLs pré-assinadas para upload ou download de imagens no S3 privado.",
    async: "Fluxo assíncrono · pedidos",
    asyncText: "A API recebe e persiste o pedido, publica uma mensagem no SQS e devolve a resposta. Outra Lambda processa o evento, com novas tentativas e isolamento na DLQ quando a falha persiste.",
    decisions: "Decisões técnicas",
    decisionsTitle: "Responsabilidades separadas por comportamento operacional",
    decisionItems: [
      ["Identidade antes da lógica", "O authorizer bloqueia tokens ausentes ou inválidos antes de qualquer execução de negócio."],
      ["Lambdas distintas", "Catálogo, recebimento e processamento escalam e falham de maneiras diferentes; por isso não compartilham uma única função."],
      ["Imagens fora da API", "URLs pré-assinadas permitem até oito imagens por produto sem tornar o bucket público nem transportar binários pela Lambda."],
      ["Fila como fronteira", "SQS desacopla a confirmação da compra do processamento e absorve variações de volume."],
      ["Falha isolada", "Após o limite de tentativas planejado, mensagens problemáticas seguem para a DLQ sem bloquear as demais."],
      ["Visibilidade operacional", "CloudWatch e X-Ray compõem o plano de investigação de erros, latência e tentativas do fluxo."],
    ],
    statusLabel: "Estado real da entrega",
    statusTitle: "O desenho está definido; a validação em nuvem ainda está aberta",
    doneTitle: "Concluído até aqui",
    done: ["Frontend da Sprint 01 permanece publicado", "Arquitetura e responsabilidades documentadas", "Estrutura local da aplicação e das funções preparada", "Case técnico publicado com status transparente"],
    pendingTitle: "Ainda precisa ser comprovado",
    pending: ["User Pool, app client e authorizer provisionados", "Rotas e Lambdas integradas na AWS", "Tabelas, bucket de imagens, fila e DLQ configurados", "Falha induzida acompanhada no CloudWatch até a DLQ", "Fluxo ponta a ponta validado com evidências"],
    validation: "Plano de validação",
    validationTitle: "O case só será marcado como concluído com evidência reproduzível",
    validationItems: [
      ["Identidade", "Login válido retorna tokens; token ausente, expirado ou inválido é recusado pela API."],
      ["Catálogo", "CRUD persiste dados e as URLs pré-assinadas respeitam quantidade, validade e bucket privado."],
      ["Pedidos", "A API confirma o recebimento sem esperar o processamento completo da compra."],
      ["Resiliência", "Uma falha provocada percorre as tentativas definidas e chega à DLQ sem impedir outras mensagens."],
      ["Observabilidade", "Logs e traces permitem correlacionar requisição, mensagem, pedido e causa da falha."],
    ],
    notice: "Este case acompanha uma implementação em andamento. Resultados pendentes não são apresentados como evidência concluída.",
    other: "Ver outros projetos",
    contact: "Conversar sobre uma solução",
  },
  en: {
    title: "Serverless marketplace with identity and events",
    description: "An evolution of the Sprint 01 frontend into an AWS application architecture with authentication, APIs, persistence, and asynchronous processing.",
    back: "Back to projects", status: "In progress", category: "AWS & Serverless", live: "Open the published frontend ↗",
    architecture: "Planned architecture", architectureTitle: "One authenticated request and two processing speeds",
    architectureText: "The browser still receives the SPA through CloudFront. To use marketplace features, the user authenticates with Cognito; the SPA sends the ID token to the API, and the authorizer validates the JWT before the route invokes the appropriate Lambda.",
    inherited: "Sprint 01 · already live", current: "Sprint 02 · in progress", frontend: "SPA in the browser", frontendDetail: "Private S3 + CloudFront + Route 53",
    diagramLabel: "Animated flow", diagramTitle: "Identity, catalog, and orders in one flow",
    diagramText: "The diagram follows authentication, catalog operations, and asynchronous order intake. Colored areas separate responsibilities, while numbered arrows show when each service joins the processing path.",
    diagramAlt: "Animated Sprint 02 flow with Cognito, API Gateway, Lambda, DynamoDB, S3, SQS, DLQ, CloudWatch, and X-Ray",
    diagramFrame: "Sprint 02 · Serverless backend", diagramZoom: "Open at full size ↗",
    authFlow: "Access flow", authTitle: "API Gateway does not perform the login or choose a screen",
    authText: "Cognito manages identity and session. After login, the SPA calls an API route based on the user action. API Gateway validates the token, applies the HTTP contract, and forwards the request to the responsible backend.",
    steps: ["The user opens the domain and receives the Sprint 01 SPA.", "The SPA starts sign-up or sign-in through the Cognito User Pool.", "After authentication, Cognito returns tokens; the application uses the ID token for the calls defined by this project.", "The SPA sends Authorization: Bearer <ID token> to API Gateway.", "The Cognito authorizer validates the JWT signature, expiration, and audience.", "The requested route invokes the matching Lambda; an invalid request never reaches the function."],
    speeds: "Two speeds", speedsTitle: "Catalog requests finish now; orders continue afterward",
    sync: "Synchronous · catalog", syncText: "Product operations use the catalog Lambda, persist data in DynamoDB, and create pre-signed URLs for uploading or downloading images from private S3.",
    async: "Asynchronous · orders", asyncText: "The API receives and persists the order, publishes a message to SQS, and returns. Another Lambda processes the event, with retries and DLQ isolation for persistent failures.",
    decisions: "Technical decisions", decisionsTitle: "Responsibilities separated by operational behavior",
    decisionItems: [["Identity before logic", "The authorizer blocks missing or invalid tokens before business code runs."], ["Separate Lambdas", "Catalog, intake, and processing scale and fail differently, so they do not share one function."], ["Images outside the API", "Pre-signed URLs allow up to eight product images without making the bucket public or moving binaries through Lambda."], ["Queue as a boundary", "SQS separates purchase acknowledgement from processing and absorbs demand variation."], ["Failure isolation", "After the planned retry limit, problematic messages move to the DLQ without blocking the rest."], ["Operational visibility", "CloudWatch and X-Ray form the investigation plan for errors, latency, and retries."]],
    statusLabel: "Actual delivery status", statusTitle: "The design is defined; cloud validation is still open",
    doneTitle: "Completed so far", done: ["Sprint 01 frontend remains live", "Architecture and responsibilities documented", "Local application and function structure prepared", "Technical case published with a transparent status"],
    pendingTitle: "Still to be proven", pending: ["User Pool, app client, and authorizer provisioned", "Routes and Lambdas integrated on AWS", "Tables, image bucket, queue, and DLQ configured", "Injected failure followed in CloudWatch through the DLQ", "End-to-end flow validated with evidence"],
    validation: "Validation plan", validationTitle: "The case will only be marked complete with reproducible evidence",
    validationItems: [["Identity", "A valid login returns tokens; missing, expired, or invalid tokens are rejected by the API."], ["Catalog", "CRUD persists data and pre-signed URLs respect quantity, expiration, and private-bucket constraints."], ["Orders", "The API acknowledges intake without waiting for the complete purchase processing."], ["Resilience", "An injected failure exhausts the configured attempts and reaches the DLQ without stopping other messages."], ["Observability", "Logs and traces correlate the request, message, order, and failure cause."]],
    notice: "This case follows an implementation in progress. Pending outcomes are not presented as completed evidence.", other: "View other projects", contact: "Discuss a solution",
  },
};

export function ServerlessMarketplaceCase({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const english = locale === "en";
  const projectHome = english ? "/en/#projects" : "/#projetos";
  return <>
    <a href="#content" className="skip-link">{english ? "Skip to main content" : "Ir para o conteúdo principal"}</a>
    <Header locale={locale} />
    <main id="content" tabIndex={-1} className="bg-[#F8FAFD] pt-24 text-[#101828]">
      <section className="relative overflow-hidden border-b border-slate-200 px-6 py-20 md:py-28">
        <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-blue-200/35 blur-[110px]" />
        <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-amber-200/35 blur-[110px]" />
        <div className="relative mx-auto max-w-6xl">
          <Link href={projectHome} className="text-sm font-semibold text-blue-600 hover:text-blue-700">← {t.back}</Link>
          <div className="mt-10 flex flex-wrap gap-3"><span className="rounded-full bg-amber-100 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-amber-800">{t.status}</span><span className="rounded-full bg-blue-100 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-blue-700">{t.category}</span></div>
          <h1 className="mt-7 max-w-5xl text-4xl font-bold leading-[1.08] tracking-[-0.04em] text-slate-950 md:text-6xl">{t.title}</h1>
          <p className="mt-7 max-w-3xl text-xl leading-9 text-slate-600">{t.description}</p>
          <a href="https://residencia.fsocloudconsulting.com" target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex rounded-xl bg-blue-600 px-6 py-4 text-sm font-bold text-white shadow-lg transition hover:bg-blue-700">{t.live}</a>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white px-6 py-20">
        <div className="mx-auto max-w-6xl"><p className="section-label">{t.architecture}</p><h2 className="section-title">{t.architectureTitle}</h2><p className="mt-6 max-w-4xl text-lg leading-8 text-slate-600">{t.architectureText}</p>
          <div className="mt-10 overflow-hidden rounded-[32px] border border-slate-300 bg-slate-50 shadow-sm">
            <div className="bg-[#232f3e] px-6 py-4 text-lg font-bold text-white">AWS Cloud</div>
            <div className="p-5 md:p-8">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-emerald-700">{t.inherited}</p>
              <div className="grid gap-4 rounded-3xl border border-emerald-200 bg-emerald-50/60 p-5 md:grid-cols-[1fr_auto_1fr] md:items-center">
                <ArchitectureNode icon="cloudfront.svg" name="Amazon CloudFront" detail="CDN · HTTPS" /><Flow label="HTML · CSS · JavaScript" /><div className="rounded-2xl border border-slate-200 bg-white p-6 text-center"><p className="font-bold text-slate-900">{t.frontend}</p><p className="mt-2 text-sm text-slate-500">{t.frontendDetail}</p></div>
              </div>
              <p className="mb-4 mt-8 text-xs font-bold uppercase tracking-[0.14em] text-amber-800">{t.current}</p>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">{services.map(([icon, name, detail]) => <ArchitectureNode key={name} icon={icon} name={name} detail={detail} />)}</div>
              <div className="mt-6 grid gap-4 md:grid-cols-2"><div className="rounded-2xl border border-blue-200 bg-blue-50 p-5"><p className="font-bold text-blue-800">1 · {t.sync}</p><p className="mt-2 text-sm leading-6 text-slate-600">SPA → Cognito → API Gateway → Lambda → DynamoDB / S3</p></div><div className="rounded-2xl border border-violet-200 bg-violet-50 p-5"><p className="font-bold text-violet-800">2 · {t.async}</p><p className="mt-2 text-sm leading-6 text-slate-600">SPA → API Gateway → Lambda → SQS → Lambda → DynamoDB · DLQ</p></div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="section-label">{t.diagramLabel}</p>
          <h2 className="section-title">{t.diagramTitle}</h2>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-600">{t.diagramText}</p>
          <figure className="mt-10 overflow-hidden rounded-[32px] border border-slate-300 bg-white shadow-sm">
            <figcaption className="flex flex-wrap items-center justify-between gap-3 bg-[#232f3e] px-6 py-4 text-lg font-bold text-white">
              <span>{t.diagramFrame}</span>
              <a href={publicAsset("/diagrams/sprint-02-backend.svg")} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-blue-200 transition hover:text-white">{t.diagramZoom}</a>
            </figcaption>
            <div className="p-3 md:p-5">
              <Image src={publicAsset("/diagrams/sprint-02-backend.svg")} alt={t.diagramAlt} width={2321} height={1122} unoptimized className="h-auto w-full" />
            </div>
          </figure>
        </div>
      </section>

      <section className="bg-[#F3F6FB] px-6 py-20"><div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.85fr_1.15fr]"><div><p className="section-label">{t.authFlow}</p><h2 className="section-title">{t.authTitle}</h2><p className="mt-6 text-lg leading-8 text-slate-600">{t.authText}</p></div><ol className="grid gap-4">{t.steps.map((step, index) => <li key={step} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 leading-7 text-slate-700"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-xs font-bold text-blue-700">{index + 1}</span>{step}</li>)}</ol></div></section>

      <section className="bg-white px-6 py-20"><div className="mx-auto max-w-6xl"><p className="section-label">{t.speeds}</p><h2 className="section-title">{t.speedsTitle}</h2><div className="mt-10 grid gap-6 md:grid-cols-2"><article className="rounded-3xl border border-blue-200 bg-blue-50/60 p-8"><h3 className="text-xl font-bold text-blue-900">{t.sync}</h3><p className="mt-4 leading-7 text-slate-700">{t.syncText}</p></article><article className="rounded-3xl border border-violet-200 bg-violet-50/60 p-8"><h3 className="text-xl font-bold text-violet-900">{t.async}</h3><p className="mt-4 leading-7 text-slate-700">{t.asyncText}</p></article></div></div></section>

      <section className="border-y border-slate-200 bg-[#F3F6FB] px-6 py-20"><div className="mx-auto max-w-6xl"><p className="section-label">{t.decisions}</p><h2 className="section-title">{t.decisionsTitle}</h2><div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{t.decisionItems.map(([name, text]) => <article key={name} className="rounded-3xl border border-slate-200 bg-white p-7"><h3 className="text-lg font-bold text-slate-900">{name}</h3><p className="mt-4 leading-7 text-slate-600">{text}</p></article>)}</div></div></section>

      <section className="bg-white px-6 py-20"><div className="mx-auto max-w-6xl"><p className="section-label">{t.statusLabel}</p><h2 className="section-title">{t.statusTitle}</h2><div className="mt-10 grid gap-6 md:grid-cols-2"><StatusList title={t.doneTitle} items={t.done} done /><StatusList title={t.pendingTitle} items={t.pending} /></div></div></section>

      <section className="border-y border-slate-200 bg-[#F3F6FB] px-6 py-20"><div className="mx-auto max-w-6xl"><p className="section-label">{t.validation}</p><h2 className="section-title">{t.validationTitle}</h2><div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-5">{t.validationItems.map(([name, text]) => <article key={name} className="rounded-3xl border border-amber-200 bg-white p-6"><span className="rounded-full bg-amber-100 px-3 py-1.5 text-xs font-bold uppercase text-amber-800">{english ? "To validate" : "A validar"}</span><h3 className="mt-5 font-bold text-slate-900">{name}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{text}</p></article>)}</div></div></section>

      <section className="bg-white px-6 py-20"><div className="mx-auto max-w-6xl rounded-[36px] bg-[#101C3C] p-8 text-white md:p-12"><p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-300">{t.status}</p><h2 className="mt-5 max-w-4xl text-3xl font-bold tracking-[-0.035em] md:text-5xl">{t.notice}</h2><div className="mt-8 flex flex-wrap gap-3"><Link href={projectHome} className="rounded-xl bg-white px-6 py-4 text-sm font-bold text-blue-700">{t.other}</Link><Link href={english ? "/en/#contact" : "/#contato"} className="rounded-xl border border-blue-300/40 px-6 py-4 text-sm font-bold text-white">{t.contact}</Link></div></div></section>
    </main><Footer locale={locale} />
  </>;
}

function ArchitectureNode({ icon, name, detail }: { icon: string; name: string; detail: string }) {
  return <div className="flex min-h-44 flex-col items-center justify-center rounded-3xl border border-slate-200 bg-white p-5 text-center shadow-sm"><Image src={publicAsset(`/aws-icons/${icon}`)} alt="" width={72} height={72} className="h-[72px] w-[72px]" /><p className="mt-4 font-bold text-slate-900">{name}</p><p className="mt-1 text-sm leading-5 text-slate-500">{detail}</p></div>;
}

function Flow({ label }: { label: string }) { return <div className="text-center text-xs font-bold text-slate-500"><span className="md:hidden">↓</span><span className="hidden md:inline">← {label} →</span></div>; }

function StatusList({ title, items, done = false }: { title: string; items: string[]; done?: boolean }) {
  return <article className={`rounded-3xl border p-8 ${done ? "border-emerald-200 bg-emerald-50/60" : "border-amber-200 bg-amber-50/60"}`}><h3 className={`text-xl font-bold ${done ? "text-emerald-900" : "text-amber-950"}`}>{title}</h3><ul className="mt-6 grid gap-4">{items.map((item) => <li key={item} className="flex gap-3 leading-7 text-slate-700"><span className={`font-bold ${done ? "text-emerald-600" : "text-amber-700"}`}>{done ? "✓" : "○"}</span>{item}</li>)}</ul></article>;
}
