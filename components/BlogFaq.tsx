"use client";

import { useState } from "react";
import type { Faq } from "@/lib/sanity/types";

export default function BlogFaq({ faqs }: { faqs: Faq[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (faqs.length === 0) return null;

  return (
    <div className="mt-6 space-y-3">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={faq.question} className="glass overflow-hidden rounded-2xl">
            <button
              className="flex w-full items-center justify-between px-5 py-4 text-left"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <span className="font-medium text-white">{faq.question}</span>
              <span
                className={`ml-4 flex-none text-xl text-cyan-400 transition-transform ${
                  isOpen ? "rotate-45" : ""
                }`}
                aria-hidden
              >
                +
              </span>
            </button>
            {isOpen && (
              <p className="px-5 pb-4 text-base leading-relaxed text-slate-400">
                {faq.answer}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
