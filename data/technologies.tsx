import type { ComponentType } from "react";
import { FaAws } from "react-icons/fa6";
import { VscAzure } from "react-icons/vsc";
import {
  SiAnsible,
  SiArgo,
  SiDatadog,
  SiDocker,
  SiDynatrace,
  SiElastic,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiGitlab,
  SiGnubash,
  SiGooglecloud,
  SiGrafana,
  SiHelm,
  SiJenkins,
  SiKubernetes,
  SiLinux,
  SiOpensearch,
  SiOpentelemetry,
  SiPrometheus,
  SiPython,
  SiTerraform,
} from "react-icons/si";
import { LokiIcon, OracleCloudIcon, ZabbixIcon } from "@/components/icons/CustomIcons";

export type BasicIcon = ComponentType<{
  className?: string;
}>;

export type Technology = {
  name: string;
  icon: BasicIcon;
  color: string;
};

export type TechnologyCategory = {
  title: string;
  description: string;
  technologies: Technology[];
  featured?: boolean;
};

export const technologyCategories: TechnologyCategory[] = [
  {
    title: "Cloud",
    description:
      "Plataformas utilizadas para construir e operar ambientes seguros, escaláveis e disponíveis.",
    technologies: [
      { name: "AWS", icon: FaAws, color: "#FF9900" },
      { name: "Azure", icon: VscAzure, color: "#0078D4" },
      { name: "Google Cloud", icon: SiGooglecloud, color: "#4285F4" },
      { name: "Oracle Cloud", icon: OracleCloudIcon, color: "#F80000" },
    ],
  },
  {
    title: "Containers e plataforma",
    description:
      "Tecnologias para execução, orquestração e entrega consistente de aplicações.",
    technologies: [
      { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Helm", icon: SiHelm, color: "#0F1689" },
      { name: "Argo CD", icon: SiArgo, color: "#EF7B4D" },
    ],
  },
  {
    title: "Observabilidade",
    description:
      "Ferramentas para métricas, logs, traces, disponibilidade, alertas e investigação de incidentes.",
    featured: true,
    technologies: [
      { name: "Prometheus", icon: SiPrometheus, color: "#E6522C" },
      { name: "Grafana", icon: SiGrafana, color: "#F46800" },
      { name: "Loki", icon: LokiIcon, color: "#F46800" },
      { name: "Elastic Stack", icon: SiElastic, color: "#005571" },
      { name: "OpenTelemetry", icon: SiOpentelemetry, color: "#425CC7" },
      { name: "OpenSearch", icon: SiOpensearch, color: "#005EB8" },
      { name: "Datadog", icon: SiDatadog, color: "#632CA6" },
      { name: "Dynatrace", icon: SiDynatrace, color: "#1496FF" },
      { name: "Zabbix", icon: ZabbixIcon, color: "#D40000" },
    ],
  },
  {
    title: "Infraestrutura e automação",
    description:
      "Provisionamento, configuração e automação de ambientes com padronização e rastreabilidade.",
    technologies: [
      { name: "Terraform", icon: SiTerraform, color: "#844FBA" },
      { name: "Ansible", icon: SiAnsible, color: "#EE0000" },
      { name: "Linux", icon: SiLinux, color: "#333333" },
      { name: "Bash", icon: SiGnubash, color: "#4EAA25" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
    ],
  },
  {
    title: "CI/CD e versionamento",
    description:
      "Automação de integração, validação, entrega de software e controle de mudanças.",
    technologies: [
      { name: "GitHub Actions", icon: SiGithubactions, color: "#2088FF" },
      { name: "GitLab CI", icon: SiGitlab, color: "#FC6D26" },
      { name: "Jenkins", icon: SiJenkins, color: "#D24939" },
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#181717" },
      { name: "GitLab", icon: SiGitlab, color: "#FC6D26" },
    ],
  },
];
