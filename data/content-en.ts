export const servicesEn = [
  { slug: "infrastructure-reliability-assessment", title: "Infrastructure and reliability assessment", description: "Technical assessment to identify risks, bottlenecks, recurring failures and improvement opportunities." },
  { slug: "observability-monitoring", title: "Observability and monitoring", description: "Metrics, logs, traces, dashboards and actionable alerts for greater visibility and faster incident investigation." },
  { slug: "infrastructure-automation-cicd", title: "Infrastructure automation and CI/CD", description: "Automated environments, pipelines, deployments and operational processes with greater consistency and safety." },
  { slug: "cloud-cost-optimization", title: "Cloud and cost optimization", description: "Architecture and consumption analysis to optimize cloud resources without compromising performance or reliability." },
  { slug: "kubernetes-container-platforms", title: "Kubernetes and container platforms", description: "Implementation, evolution and troubleshooting of clusters and workloads for stable production operations." },
  { slug: "sre-reliability-management", title: "SRE practices and reliability management", description: "Reliability indicators and objectives, incident management and data-driven continuous improvement." },
];

export const processEn = [
  { step: "01", title: "Assessment", text: "Understanding the environment, technical challenges, constraints and business objectives." },
  { step: "02", title: "Planning", text: "Defining priorities, technical approach, risks, responsibilities and deliverables." },
  { step: "03", title: "Implementation", text: "Controlled execution with validation, documentation and technical follow-up." },
  { step: "04", title: "Continuous evolution", text: "Reviewing outcomes, transferring knowledge and defining the next steps." },
];

export const projectsEn = [
  {
    slug: "frontend-cdn-s3-tls-custom-domain",
    category: "AWS & CDN",
    title: "Frontend with CDN, S3, TLS and custom domain",
    description: "React SPA hosted in a private S3 bucket and globally distributed through CloudFront, with ACM TLS and Route 53 DNS.",
    challenge: "Publish a low-latency SPA on a custom domain while protecting the origin and preserving client-side routes.",
    solution: "Private S3 origin, CloudFront, ACM, Route 53, OAC and SPA route fallback to index.html.",
    result: "Global CDN delivery, enforced HTTPS, working SPA routes and blocked direct access to the bucket.",
    status: "Completed", technologies: ["React", "Amazon S3", "CloudFront", "ACM", "Route 53", "OAC"],
  },
  { slug: null, category: "Kubernetes", title: "Observability in distributed environments", description: "Centralized metrics, logs and operational indicators for faster incident investigation.", status: "Coming soon", challenge: null, solution: null, result: null, technologies: [] },
  { slug: null, category: "Cloud & IaC", title: "Automated cloud infrastructure", description: "Provisioning and standardization through infrastructure as code and automation practices.", status: "Coming soon", challenge: null, solution: null, result: null, technologies: [] },
];

export const articlesEn = [
  { category: "Observability", title: "Monitoring is not observability", description: "A practical view of metrics, logs, traces and visibility across distributed systems.", readingTime: "8 min read", status: "Coming soon" },
  { category: "SRE", title: "How to define useful SLOs", description: "Turning technical indicators into reliability objectives aligned with business needs.", readingTime: "10 min read", status: "Coming soon" },
  { category: "Cloud & FinOps", title: "FinOps beyond cost reduction", description: "Optimizing cloud environments without compromising performance, stability or growth.", readingTime: "7 min read", status: "Coming soon" },
];

export const highlightsEn = ["3+ years of experience in DevOps and SRE", "Hands-on work in production environments", "AWS, Terraform, Kubernetes, CI/CD and GitOps", "Observability, troubleshooting and reliability"];

export const technologyCopyEn: Record<string, { title: string; description: string }> = {
  Cloud: { title: "Cloud", description: "Platforms used to build and operate secure, scalable and highly available environments." },
  "Containers e plataforma": { title: "Containers and platforms", description: "Technologies for application runtime, orchestration and consistent delivery." },
  Observabilidade: { title: "Observability", description: "Tools for metrics, logs, traces, availability, alerting and incident investigation." },
  "Infraestrutura e automação": { title: "Infrastructure and automation", description: "Provisioning, configuration and automation with consistency and traceability." },
  "CI/CD e versionamento": { title: "CI/CD and version control", description: "Automated integration, validation, software delivery and change control." },
};
