export const servicesEn = [
  { slug: "infrastructure-reliability-assessment", title: "Infrastructure and reliability assessment", description: "Technical assessment to identify risks, bottlenecks, recurring failures and improvement opportunities." },
  { slug: "observability-monitoring", title: "Observability and monitoring", description: "Metrics, logs, traces, dashboards and actionable alerts for greater visibility and faster incident investigation." },
  { slug: "infrastructure-automation-cicd", title: "Infrastructure automation and CI/CD", description: "Automated environments, pipelines, deployments and operational processes with greater consistency and safety." },
  { slug: "cloud-cost-optimization", title: "Cloud and cost optimization", description: "Architecture and consumption analysis to optimize cloud resources without compromising performance or reliability." },
  { slug: "kubernetes-container-platforms", title: "Kubernetes and container platforms", description: "Implementation, evolution and troubleshooting of clusters and workloads for stable production operations." },
  { slug: "sre-reliability-management", title: "SRE practices and reliability management", description: "Reliability indicators and objectives, incident management and data-driven continuous improvement." },
];

export const processEn = [
  ["01", "Assessment", "Understanding the environment, technical challenges, constraints and business objectives."],
  ["02", "Planning", "Defining priorities, technical approach, risks, responsibilities and deliverables."],
  ["03", "Implementation", "Controlled execution with validation, documentation and technical follow-up."],
  ["04", "Continuous evolution", "Reviewing outcomes, transferring knowledge and defining the next steps."],
];

export const projectsEn = {
  featured: {
    slug: "frontend-cdn-s3-tls-custom-domain",
    category: "AWS & CDN",
    title: "Frontend with CDN, S3, TLS and custom domain",
    description: "React SPA hosted in a private S3 bucket and globally distributed through CloudFront, with ACM TLS and Route 53 DNS.",
    challenge: "Publish a low-latency SPA on a custom domain while protecting the origin and preserving client-side routes.",
    solution: "Private S3 origin, CloudFront, ACM, Route 53, OAC and SPA route fallback to index.html.",
    result: "Global CDN delivery, enforced HTTPS, working SPA routes and blocked direct access to the bucket.",
  },
  upcoming: [
    ["Kubernetes", "Observability in distributed environments", "Centralized metrics, logs and operational indicators for faster incident investigation."],
    ["Cloud & IaC", "Automated cloud infrastructure", "Provisioning and standardization through infrastructure as code and automation practices."],
  ],
};

export const articlesEn = [
  ["Observability", "Monitoring is not observability", "A practical view of metrics, logs, traces and visibility across distributed systems."],
  ["SRE", "How to define useful SLOs", "Turning technical indicators into reliability objectives aligned with business needs."],
  ["Cloud & FinOps", "FinOps beyond cost reduction", "Optimizing cloud environments without compromising performance, stability or growth."],
];
