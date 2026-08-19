import type { SVGProps } from "react";

export function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5">
      <path d="M5 12H19M14 7L19 12L14 17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CloudIcon({ className }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M7.5 18.5H16.5C19.2614 18.5 21.5 16.4853 21.5 14C21.5 11.7432 19.6548 9.86962 17.25 9.55694C16.6542 6.97874 14.3451 5.05 11.5 5.05C8.37638 5.05 5.86667 7.37693 5.59155 10.2979C3.80637 10.7577 2.5 12.261 2.5 14.05C2.5 16.5057 4.73858 18.5 7.5 18.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function InfrastructureIcon({ className }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="4" y="4" width="16" height="5" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
      <rect x="4" y="10" width="16" height="5" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
      <rect x="4" y="16" width="16" height="4" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="8" cy="6.5" r="0.8" fill="currentColor" />
      <circle cx="8" cy="12.5" r="0.8" fill="currentColor" />
      <circle cx="8" cy="18" r="0.8" fill="currentColor" />
    </svg>
  );
}

export function AutomationIcon({ className }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M7 7H15.5M15.5 7L13 4.5M15.5 7L13 9.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17 17H8.5M8.5 17L11 14.5M8.5 17L11 19.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="6" cy="7" r="1.4" fill="currentColor" />
      <circle cx="18" cy="17" r="1.4" fill="currentColor" />
    </svg>
  );
}

export function ObservabilityIcon({ className }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M4 17L8 13L11 15.5L16 9L20 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 19.5H20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="8" cy="13" r="1.2" fill="currentColor" />
      <circle cx="16" cy="9" r="1.2" fill="currentColor" />
    </svg>
  );
}

export function OracleCloudIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <path
        d="M19 6C9.6 6 2 12.3 2 20s7.6 14 17 14h26c9.4 0 17-6.3 17-14S54.4 6 45 6H19Zm0 7h26c4.7 0 8.5 3.1 8.5 7S49.7 27 45 27H19c-4.7 0-8.5-3.1-8.5-7S14.3 13 19 13Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function LokiIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <path d="M5 17.5V6.5M9.5 17.5V10M14 17.5V4.5M18.5 17.5V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M3.5 19.5H20.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function ZabbixIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <rect x="7" y="10" width="50" height="44" rx="10" stroke="currentColor" strokeWidth="5" />
      <path d="M19 23H45L20 41H45" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
