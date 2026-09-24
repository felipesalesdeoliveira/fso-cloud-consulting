export const servicesEn = [
  { slug: "infrastructure-reliability-assessment", title: "Infrastructure & reliability assessment", description: "A focused review of your environment to uncover operational risks, performance bottlenecks, recurring failures, and opportunities to improve." },
  { slug: "observability-monitoring", title: "Observability & monitoring", description: "Metrics, logs, traces, dashboards, and actionable alerts that make systems easier to understand and incidents faster to resolve." },
  { slug: "infrastructure-automation-cicd", title: "Infrastructure automation & CI/CD", description: "Repeatable infrastructure, delivery pipelines, and operational workflows designed to make changes safer and more consistent." },
  { slug: "cloud-cost-optimization", title: "Cloud architecture & cost optimization", description: "Architecture and usage reviews that reduce unnecessary cloud spend without trading away performance or reliability." },
  { slug: "kubernetes-container-platforms", title: "Kubernetes & container platforms", description: "Design, improvement, and troubleshooting of clusters and workloads for dependable day-to-day production operations." },
  { slug: "sre-reliability-management", title: "SRE & reliability management", description: "Service-level objectives, reliability indicators, incident practices, and continuous improvement grounded in operational data." },
];

export const processEn = [
  { step: "01", title: "Discovery", text: "I learn how the environment works today, where the risks are, and what the business needs to achieve." },
  { step: "02", title: "Planning", text: "I define the priorities, technical approach, responsibilities, risks, and expected deliverables." },
  { step: "03", title: "Delivery", text: "I implement the solution in controlled stages, with validation, documentation, and clear communication throughout." },
  { step: "04", title: "Handover", text: "I review the outcome, share the operational knowledge, and make sure the team is ready to own the solution." },
];

export const projectsEn = [
  {
    slug: "frontend-cdn-s3-tls-custom-domain",
    category: "AWS & CDN",
    title: "Secure frontend delivery on AWS",
    description: "A React SPA served from a private S3 origin through CloudFront, with managed TLS and DNS in Route 53.",
    challenge: "Deliver a low-latency SPA on a custom domain without exposing the origin or breaking client-side routing.",
    solution: "A private S3 origin protected by OAC, fronted by CloudFront, ACM, and Route 53, with a dedicated SPA routing fallback.",
    result: "Fast global delivery, HTTPS by default, reliable client-side routes, and no direct public access to the bucket.",
    status: "Completed", technologies: ["React", "Amazon S3", "CloudFront", "ACM", "Route 53", "OAC"],
  },
  { slug: null, category: "Kubernetes", title: "Observability for distributed systems", description: "Centralized metrics, logs, and operational signals designed to speed up incident investigation.", status: "Coming soon", challenge: null, solution: null, result: null, technologies: [] },
  { slug: null, category: "Cloud & IaC", title: "Cloud infrastructure as code", description: "Repeatable, standardized cloud environments delivered through infrastructure as code and automation.", status: "Coming soon", challenge: null, solution: null, result: null, technologies: [] },
];

export const articlesEn = [
  { category: "Observability", title: "Monitoring is not observability", description: "A practical view of metrics, logs, traces and visibility across distributed systems.", readingTime: "8 min read", status: "Coming soon" },
  { category: "SRE", title: "How to define useful SLOs", description: "Turning technical indicators into reliability objectives aligned with business needs.", readingTime: "10 min read", status: "Coming soon" },
  { category: "Cloud & FinOps", title: "FinOps beyond cost reduction", description: "Optimizing cloud environments without compromising performance, stability or growth.", readingTime: "7 min read", status: "Coming soon" },
];

export const highlightsEn = ["3+ years in DevOps and SRE", "Hands-on production experience", "AWS, Terraform, Kubernetes, CI/CD, and GitOps", "Observability, incident response, and reliability"];

export const technologyCopyEn: Record<string, { title: string; description: string }> = {
  Cloud: { title: "Cloud", description: "Platforms used to build and operate secure, scalable and highly available environments." },
  "Containers e plataforma": { title: "Containers and platforms", description: "Technologies for application runtime, orchestration and consistent delivery." },
  Observabilidade: { title: "Observability", description: "Tools for metrics, logs, traces, availability, alerting and incident investigation." },
  "Infraestrutura e automação": { title: "Infrastructure and automation", description: "Provisioning, configuration and automation with consistency and traceability." },
  "CI/CD e versionamento": { title: "CI/CD and version control", description: "Automated integration, validation, software delivery and change control." },
};
