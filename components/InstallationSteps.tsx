"use client";

import { useState } from "react";
import { devices } from "@/lib/installationGuide";

export default function InstallationSteps() {
  const [activeId, setActiveId] = useState(devices[0].id);
  const active = devices.find((d) => d.id === activeId) ?? devices[0];

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-3">
        {devices.map((device) => {
          const isActive = device.id === activeId;
          return (
            <button
              key={device.id}
              onClick={() => setActiveId(device.id)}
              aria-pressed={isActive}
              className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition ${
                isActive
                  ? "glow border-cyan-400/40 bg-gradient-to-r from-cyan-400 to-indigo-500 text-white"
                  : "border-white/10 bg-white/5 text-slate-300 hover:bg-white/10"
              }`}
            >
              <span aria-hidden>{device.icon}</span>
              {device.name}
            </button>
          );
        })}
      </div>

      <div className="glass mt-10 rounded-3xl p-8">
        <h3 className="font-[family-name:var(--font-poppins)] text-xl font-bold text-white">
          Setting Up On {active.name}
        </h3>

        <ol className="mt-6 space-y-5">
          {active.steps.map((step, index) => (
            <li key={index} className="flex gap-4">
              <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10 text-sm font-bold text-cyan-300">
                {index + 1}
              </span>
              <p className="pt-1 text-base leading-relaxed text-slate-300">{step}</p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
