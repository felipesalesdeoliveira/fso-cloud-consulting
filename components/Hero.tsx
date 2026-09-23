"use client";

import Image from "next/image";
import { useState, type ComponentType, type MouseEvent, type SVGProps } from "react";
import { FaAws } from "react-icons/fa6";
import {
  SiDocker,
  SiGithubactions,
  SiGrafana,
  SiKubernetes,
  SiPrometheus,
  SiTerraform,
} from "react-icons/si";
import { heroStats } from "@/data/content";
import { ArrowIcon, AutomationIcon, CloudIcon, InfrastructureIcon, ObservabilityIcon } from "@/components/icons/CustomIcons";
import brandIcon from "@/app/icon.png";

type HeroPillar = {
  title: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  position: string;
  animation: string;
  depth: number;
  accent: "blue" | "violet" | "cyan";
};

type HeroTool = {
  name: string;
  layer: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
  secondaryIcon?: ComponentType<{ className?: string }>;
  color: string;
  position: string;
  animation: string;
  depth: number;
  path: string;
  gradient: "blue" | "violet" | "cyan";
};

const heroPillars: HeroPillar[] = [
  { title: "Cloud", icon: CloudIcon, position: "left-[8%] top-[7%]", animation: "float-a", depth: 0.9, accent: "blue" },
  { title: "Infraestrutura", icon: InfrastructureIcon, position: "right-[4%] top-[13%]", animation: "float-b", depth: 1, accent: "violet" },
  { title: "Automação", icon: AutomationIcon, position: "left-[6%] bottom-[9%]", animation: "float-c", depth: 0.8, accent: "cyan" },
  { title: "Observabilidade", icon: ObservabilityIcon, position: "right-[2%] bottom-[7%]", animation: "float-a", depth: 1.05, accent: "blue" },
];

const heroTools: HeroTool[] = [
  { name: "AWS", layer: "Cloud", description: "Serviços cloud escaláveis e seguros", icon: FaAws, color: "#FF9900", position: "left-[5%] top-[10%]", animation: "float-a", depth: 1.05, path: "M310 280 L115 95", gradient: "blue" },
  { name: "Kubernetes", layer: "Platform", description: "Orquestração e confiabilidade de workloads", icon: SiKubernetes, color: "#326CE5", position: "right-[3%] top-[12%]", animation: "float-b", depth: 0.9, path: "M310 280 L514 104", gradient: "violet" },
  { name: "Terraform", layer: "IaC", description: "Infraestrutura versionada e reproduzível", icon: SiTerraform, color: "#844FBA", position: "left-[2%] top-[40%]", animation: "float-c", depth: 0.75, path: "M310 280 L80 281", gradient: "cyan" },
  { name: "Docker", layer: "Containers", description: "Aplicações portáveis e padronizadas", icon: SiDocker, color: "#2496ED", position: "right-[0%] top-[43%]", animation: "float-a", depth: 0.8, path: "M310 280 L545 289", gradient: "blue" },
  { name: "Grafana + Prometheus", layer: "Observabilidade", description: "Métricas, alertas e dashboards operacionais", icon: SiGrafana, secondaryIcon: SiPrometheus, color: "#F46800", position: "left-[3%] bottom-[7%]", animation: "float-b", depth: 0.95, path: "M310 280 L128 460", gradient: "violet" },
  { name: "GitHub Actions", layer: "CI/CD", description: "Pipelines automatizados e entregas consistentes", icon: SiGithubactions, color: "#2088FF", position: "right-[4%] bottom-[7%]", animation: "float-c", depth: 1.05, path: "M310 280 L500 456", gradient: "cyan" },
];

function HexagonPillarCard({
  title,
  icon: Icon,
  position,
  animation,
  depth,
  accent,
  cursorX,
  cursorY,
}: HeroPillar & { cursorX: number; cursorY: number }) {
  const accentClass =
    accent === "violet"
      ? "text-violet-600 border-violet-200/80"
      : accent === "cyan"
        ? "text-cyan-600 border-cyan-200/80"
        : "text-blue-600 border-blue-200/80";

  const isObservability = title === "Observabilidade";

  return (
    <div
      className={`hero-pillar absolute ${position} ${animation} z-20 flex items-center justify-center border bg-white/90 shadow-[0_16px_42px_rgba(15,23,42,0.09)] backdrop-blur-xl transition duration-300 hover:z-30 hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(37,99,235,0.16)] ${accentClass} ${isObservability ? "h-[126px] w-[138px]" : "h-[122px] w-[122px]"}`}
      style={{
        clipPath:
          "polygon(25% 6.7%,75% 6.7%,100% 50%,75% 93.3%,25% 93.3%,0% 50%)",
        translate: `${cursorX * depth}px ${cursorY * depth}px`,
      }}
    >
      <div className={`flex flex-col items-center justify-center gap-2 px-3 text-center ${isObservability ? "max-w-[112px]" : "max-w-[94px]"}`}>
        <Icon className="h-7 w-7 shrink-0" />
        <span className={`font-bold leading-4 text-slate-700 ${isObservability ? "text-[12px]" : "text-[13px]"}`}>
          {title}
        </span>
      </div>
    </div>
  );
}

function ToolLogoCard({
  name,
  layer,
  description,
  icon: Icon,
  secondaryIcon: SecondaryIcon,
  color,
  position,
  animation,
  depth,
  cursorX,
  cursorY,
  active,
  onActivate,
  onDeactivate,
}: HeroTool & {
  cursorX: number;
  cursorY: number;
  active: boolean;
  onActivate: () => void;
  onDeactivate: () => void;
}) {
  return (
    <button
      type="button"
      aria-label={`${name}: ${description}`}
      onMouseEnter={onActivate}
      onMouseLeave={onDeactivate}
      onFocus={onActivate}
      onBlur={onDeactivate}
      onClick={onActivate}
      className={`hero-tool-card absolute ${position} ${animation} z-20 flex min-w-[136px] items-center gap-3 rounded-2xl border bg-white/90 px-4 py-3 text-left backdrop-blur-xl transition duration-300 ${active ? "z-30 -translate-y-1 border-blue-300 shadow-[0_24px_55px_rgba(37,99,235,0.20)]" : "border-white/90 shadow-[0_16px_40px_rgba(15,23,42,0.08)] hover:z-30 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-[0_22px_48px_rgba(37,99,235,0.14)]"}`}
      style={{
        translate: `${cursorX * depth}px ${cursorY * depth}px`,
      }}
    >
      <span
        className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-slate-50"
        style={{ color }}
      >
        <Icon className="h-5 w-5" />
        {SecondaryIcon && (
          <SecondaryIcon className="absolute -bottom-1 -right-1 h-4 w-4 rounded-md bg-white p-0.5 text-[#E6522C] shadow-sm" />
        )}
      </span>
      <span>
        <span className="block text-[13px] font-bold leading-none text-slate-900">{name}</span>
        <span className="mt-1 block text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">{layer}</span>
      </span>
    </button>
  );
}

function HexagonHeroGraphic({ cursorX, cursorY }: { cursorX: number; cursorY: number }) {
  const [activeToolName, setActiveToolName] = useState<string | null>(null);
  const activeTool = heroTools.find((tool) => tool.name === activeToolName);

  return (
    <div className="relative mx-auto hidden h-[560px] w-full max-w-[620px] lg:block">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-200/25 blur-[100px]" />
      <div className="pointer-events-none absolute left-[10%] top-[12%] h-36 w-36 rounded-full bg-cyan-200/20 blur-[75px]" />
      <div className="pointer-events-none absolute bottom-[8%] right-[7%] h-40 w-40 rounded-full bg-violet-200/25 blur-[85px]" />

      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[390px] w-[390px] rounded-full border border-blue-200/55"
        style={{ transform: `translate(-50%, -50%) translate3d(${cursorX * 0.12}px, ${cursorY * 0.12}px, 0)` }}
      />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[300px] rounded-full border border-violet-200/45"
        style={{ transform: `translate(-50%, -50%) translate3d(${cursorX * -0.08}px, ${cursorY * -0.08}px, 0)` }}
      />

      <svg viewBox="0 0 620 560" aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full">
        <defs>
          <linearGradient id="line-blue" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.08" />
            <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.48" />
            <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.08" />
          </linearGradient>
          <linearGradient id="line-violet" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.08" />
            <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.08" />
          </linearGradient>
          <linearGradient id="line-cyan" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.08" />
            <stop offset="50%" stopColor="#06B6D4" stopOpacity="0.38" />
            <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.08" />
          </linearGradient>
        </defs>
        {heroTools.map((tool, index) => {
          const isActive = activeToolName === tool.name;
          const isDimmed = activeToolName !== null && !isActive;

          return (
            <g key={tool.name} className="transition-opacity duration-300" opacity={isDimmed ? 0.2 : 1}>
              <path
                d={tool.path}
                stroke={`url(#line-${tool.gradient})`}
                strokeWidth={isActive ? 4 : 2}
                className="transition-all duration-300"
              />
              <circle className="connection-particle" r={isActive ? 5 : 3.5} fill={tool.color}>
                <animateMotion dur={isActive ? "1.6s" : "3.8s"} begin={`${index * -0.55}s`} repeatCount="indefinite" path={tool.path} />
              </circle>
            </g>
          );
        })}
        <circle cx="310" cy="280" r="4" fill="#3B82F6" opacity="0.7" />
        <circle cx="115" cy="95" r="3" fill="#60A5FA" opacity="0.65" />
        <circle cx="514" cy="104" r="3" fill="#8B5CF6" opacity="0.65" />
        <circle cx="80" cy="281" r="3" fill="#06B6D4" opacity="0.65" />
        <circle cx="545" cy="289" r="3" fill="#3B82F6" opacity="0.65" />
        <circle cx="128" cy="460" r="3" fill="#8B5CF6" opacity="0.65" />
        <circle cx="500" cy="456" r="3" fill="#06B6D4" opacity="0.65" />
      </svg>

      <div
        className="central-hexagon absolute left-1/2 top-1/2 z-10 flex h-[210px] w-[210px] items-center justify-center border border-blue-200/90 bg-white/90 shadow-[0_28px_75px_rgba(37,99,235,0.14)] backdrop-blur-xl"
        style={{
          clipPath:
            "polygon(25% 6.7%,75% 6.7%,100% 50%,75% 93.3%,25% 93.3%,0% 50%)",
          transform: `translate(-50%, -50%) translate3d(${cursorX * 0.28}px, ${cursorY * 0.28}px, 0)`,
        }}
      >
        <div className="relative flex h-32 w-32 items-center justify-center">
          <div className="core-ring core-ring-outer absolute h-28 w-28 rounded-full border border-blue-200/80" />
          <div className="core-ring core-ring-inner absolute h-20 w-20 rounded-full border border-violet-200/80" />
          <div
            className="core-glow absolute h-24 w-24 rounded-full bg-gradient-to-br from-blue-400 via-cyan-300 to-violet-400 opacity-30 blur-xl transition duration-300"
            style={activeTool ? { background: activeTool.color } : undefined}
          />
          <Image
            src={brandIcon}
            alt=""
            className="relative h-20 w-20 object-contain drop-shadow-[0_10px_18px_rgba(37,99,235,0.20)]"
          />
          <div className="pulse-node absolute left-[-5px] top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-blue-500 shadow-[0_0_16px_rgba(37,99,235,0.42)]" />
          <div className="pulse-node delay-one absolute right-[-5px] top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-violet-500 shadow-[0_0_16px_rgba(124,58,237,0.42)]" />
          <div className="pulse-node delay-two absolute bottom-[-5px] left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-cyan-500 shadow-[0_0_16px_rgba(6,182,212,0.42)]" />
          <div className="pulse-node delay-three absolute left-1/2 top-[-5px] h-3 w-3 -translate-x-1/2 rounded-full bg-blue-400 shadow-[0_0_16px_rgba(96,165,250,0.42)]" />
        </div>
      </div>

      <div className="pointer-events-none absolute left-1/2 top-[60%] z-20 -translate-x-1/2 whitespace-nowrap rounded-full border border-blue-100 bg-white/90 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-blue-600 shadow-sm backdrop-blur">
        Observar • Automatizar • Escalar
      </div>

      <div className={`pointer-events-none absolute left-1/2 top-[68%] z-20 w-[270px] -translate-x-1/2 rounded-xl border border-white/90 bg-white/85 px-4 py-2 text-center text-[11px] font-semibold leading-4 text-slate-600 shadow-sm backdrop-blur transition duration-300 ${activeTool ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0"}`}>
        {activeTool?.description ?? ""}
      </div>

      {heroTools.map((tool) => (
        <ToolLogoCard
          key={tool.name}
          {...tool}
          cursorX={cursorX}
          cursorY={cursorY}
          active={activeToolName === tool.name}
          onActivate={() => setActiveToolName(tool.name)}
          onDeactivate={() => setActiveToolName(null)}
        />
      ))}
    </div>
  );
}

function MobileHexagonHeroBackground() {
  return (
    <div className="pointer-events-none absolute left-1/2 top-[-46px] z-0 h-[560px] w-[620px] origin-top -translate-x-1/2 scale-[0.52] opacity-[0.12] sm:scale-[0.6] lg:hidden">
      <div className="relative h-full w-full">
        <div className="absolute left-1/2 top-1/2 h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-200/35 blur-[100px]" />
        <div className="absolute bottom-[8%] right-[7%] h-40 w-40 rounded-full bg-violet-200/35 blur-[85px]" />

        <div className="absolute left-1/2 top-1/2 h-[390px] w-[390px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-300/70" />
        <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-300/60" />

        <svg viewBox="0 0 620 560" aria-hidden="true" className="absolute inset-0 h-full w-full">
          <defs>
            <linearGradient id="mobile-line-blue" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.08" />
              <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.08" />
            </linearGradient>
            <linearGradient id="mobile-line-violet" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.08" />
              <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.48" />
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.08" />
            </linearGradient>
            <linearGradient id="mobile-line-cyan" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.08" />
              <stop offset="50%" stopColor="#06B6D4" stopOpacity="0.46" />
              <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.08" />
            </linearGradient>
          </defs>
          <path d="M310 280 L125 105" stroke="url(#mobile-line-blue)" strokeWidth="2" />
          <path d="M310 280 L510 125" stroke="url(#mobile-line-violet)" strokeWidth="2" />
          <path d="M310 280 L125 455" stroke="url(#mobile-line-cyan)" strokeWidth="2" />
          <path d="M310 280 L515 445" stroke="url(#mobile-line-blue)" strokeWidth="2" />
        </svg>

        <div
          className="central-hexagon absolute left-1/2 top-1/2 z-10 flex h-[210px] w-[210px] -translate-x-1/2 -translate-y-1/2 items-center justify-center border border-blue-200/90 bg-white/90 shadow-[0_28px_75px_rgba(37,99,235,0.14)] backdrop-blur-xl"
          style={{
            clipPath:
              "polygon(25% 6.7%,75% 6.7%,100% 50%,75% 93.3%,25% 93.3%,0% 50%)",
          }}
        >
          <div className="relative flex h-28 w-28 items-center justify-center">
            <div className="core-ring core-ring-outer absolute h-28 w-28 rounded-full border border-blue-200/80" />
            <div className="core-ring core-ring-inner absolute h-20 w-20 rounded-full border border-violet-200/80" />
            <div className="core-glow absolute h-24 w-24 rounded-full bg-gradient-to-br from-blue-400 via-cyan-300 to-violet-400 opacity-30 blur-xl" />
            <Image
              src={brandIcon}
              alt=""
              className="relative h-20 w-20 object-contain drop-shadow-[0_10px_18px_rgba(37,99,235,0.20)]"
            />
          </div>
        </div>

        {heroPillars.map((pillar) => (
          <HexagonPillarCard key={pillar.title} {...pillar} cursorX={0} cursorY={0} />
        ))}
      </div>
    </div>
  );
}

export function Hero() {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  function handleHeroMouseMove(event: MouseEvent<HTMLElement>) {
    const bounds = event.currentTarget.getBoundingClientRect();
    const normalizedX = (event.clientX - bounds.left) / bounds.width - 0.5;
    const normalizedY = (event.clientY - bounds.top) / bounds.height - 0.5;
    setCursor({ x: normalizedX * 10, y: normalizedY * 10 });
  }

  function resetHeroPosition() {
    setCursor({ x: 0, y: 0 });
  }

  return (
    <section
      id="inicio"
      onMouseMove={handleHeroMouseMove}
      onMouseLeave={resetHeroPosition}
      className="relative flex min-h-[calc(100svh-96px)] scroll-mt-24 items-center overflow-hidden px-6 py-16 lg:py-20"
    >
      <MobileHexagonHeroBackground />
      <div className="pointer-events-none absolute -left-48 top-8 h-[480px] w-[480px] rounded-full bg-blue-200/25 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-[520px] w-[520px] rounded-full bg-violet-200/25 blur-[130px]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(148,163,184,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(148,163,184,0.15) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
          maskImage: "linear-gradient(to bottom, black 0%, transparent 90%)",
        }}
      />

      <div className="relative mx-auto grid min-w-0 w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.04fr_0.96fr]">
        <div className="hero-content relative z-20 min-w-0 max-w-full">
          <div className="mb-7 inline-flex max-w-full items-center gap-3 rounded-full border border-blue-200/90 bg-white/80 px-4 py-2 shadow-sm backdrop-blur">
            <span className="pulse-dot h-2 w-2 rounded-full bg-blue-500" />
            <span className="text-center text-[11px] font-bold uppercase tracking-[0.12em] text-slate-600 sm:text-xs sm:tracking-[0.17em]">
              DevOps & Reliability Engineering
            </span>
          </div>

          <h1 className="max-w-4xl text-4xl font-bold leading-[1.07] tracking-[-0.045em] text-slate-950 md:text-6xl lg:text-[58px]">
            Transformo complexidade operacional em{" "}
            <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-violet-600 bg-clip-text text-transparent">
              infraestrutura confiável e escalável.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
            Consultoria especializada em DevOps, SRE, Cloud e Observabilidade
            para empresas que precisam aumentar a estabilidade, automatizar
            operações e ter mais visibilidade sobre seus ambientes.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#servicos"
              className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-blue-600 px-6 py-4 text-center text-sm font-semibold text-white shadow-[0_14px_32px_rgba(37,99,235,0.25)] transition duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-[0_18px_40px_rgba(37,99,235,0.32)] sm:w-auto"
            >
              Conheça nossos serviços
              <ArrowIcon />
            </a>

            <a
              href="#contato"
              className="inline-flex w-full items-center justify-center rounded-xl border border-slate-300 bg-white/80 px-6 py-4 text-center text-sm font-semibold text-slate-700 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:text-blue-700 hover:shadow-lg sm:w-auto"
            >
              Vamos conversar
            </a>
          </div>

          <div className="mt-12 grid max-w-2xl grid-cols-2 gap-4 border-t border-slate-200 pt-7 sm:grid-cols-4">
            {heroStats.map((item) => (
              <div key={item}>
                <span className="mb-2 block h-1 w-7 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400" />
                <span className="text-sm font-medium text-slate-500">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <HexagonHeroGraphic cursorX={cursor.x} cursorY={cursor.y} />
      </div>
    </section>
  );
}
