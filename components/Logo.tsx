import { useId } from "react";

export default function Logo({ className = "h-9 w-9" }: { className?: string }) {
  const gradientId = useId();

  return (
    <svg viewBox="0 0 40 40" className={`flex-none ${className}`} aria-hidden>
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="50%" stopColor="#818cf8" />
          <stop offset="100%" stopColor="#f472b6" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="11" fill={`url(#${gradientId})`} />
      <path
        d="M11.5 12.3c0-1.6 1.75-2.58 3.12-1.75l12.3 7.4a2.04 2.04 0 0 1 0 3.5l-12.3 7.4c-1.37.83-3.12-.15-3.12-1.75z"
        fill="white"
        fillOpacity="0.96"
      />
      <path
        d="M27 12.8a9.6 9.6 0 0 1 0 14.4"
        stroke="white"
        strokeOpacity="0.55"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
