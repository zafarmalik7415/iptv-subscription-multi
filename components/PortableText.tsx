import Image from "next/image";
import Link from "next/link";
import {
  PortableText as BasePortableText,
  type PortableTextComponents,
} from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";
import { urlForImage } from "@/lib/sanity/image";

function headingId(value: unknown) {
  const children = (value as { children?: { text?: string }[] })?.children ?? [];
  const text = children.map((c) => c.text ?? "").join("");
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

const components: PortableTextComponents = {
  block: {
    h2: ({ children, value }) => (
      <h2
        id={headingId(value)}
        className="mt-12 scroll-mt-28 font-[family-name:var(--font-poppins)] text-2xl font-bold text-white sm:text-3xl"
      >
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-8 font-[family-name:var(--font-poppins)] text-xl font-semibold text-white">
        {children}
      </h3>
    ),
    normal: ({ children }) => (
      <p className="mt-5 text-base leading-relaxed text-slate-300">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="mt-6 border-l-2 border-cyan-400/60 pl-5 text-lg italic leading-relaxed text-slate-200">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mt-5 list-disc space-y-2 pl-6 text-base leading-relaxed text-slate-300">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="mt-5 list-decimal space-y-2 pl-6 text-base leading-relaxed text-slate-300">
        {children}
      </ol>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold text-white">{children}</strong>
    ),
    link: ({ children, value }) => {
      const href = (value?.href as string) ?? "#";
      const external = /^https?:\/\//.test(href);
      return external ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-300 underline underline-offset-2 hover:text-cyan-200"
        >
          {children}
        </a>
      ) : (
        <Link
          href={href}
          className="text-cyan-300 underline underline-offset-2 hover:text-cyan-200"
        >
          {children}
        </Link>
      );
    },
  },
  types: {
    image: ({ value }) => {
      const url = (value?.url as string) ?? urlForImage(value)?.width(1200).url();
      if (!url) return null;
      const isSvg = url.endsWith(".svg");
      return (
        <figure className="mt-8">
          <span className="block overflow-hidden rounded-2xl border border-white/10">
            {isSvg ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={url}
                alt={(value?.alt as string) ?? ""}
                className="h-auto w-full"
              />
            ) : (
              <Image
                src={url}
                alt={(value?.alt as string) ?? ""}
                width={1200}
                height={675}
                className="h-auto w-full"
              />
            )}
          </span>
          {value?.caption ? (
            <figcaption className="mt-2 text-center text-sm text-slate-500">
              {value.caption as string}
            </figcaption>
          ) : null}
        </figure>
      );
    },
    table: ({ value }) => {
      const rows = (value?.rows as string[][]) ?? [];
      if (rows.length === 0) return null;
      const [header, ...body] = rows;
      return (
        <div className="mt-8 overflow-x-auto rounded-2xl border border-white/10">
          <table className="w-full min-w-[420px] border-collapse text-left text-sm">
            <thead>
              <tr className="bg-white/5">
                {header.map((cell, i) => (
                  <th
                    key={i}
                    className="border-b border-white/10 px-4 py-3 font-semibold text-white"
                  >
                    {cell}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {body.map((row, i) => (
                <tr key={i} className="odd:bg-white/[0.02]">
                  {row.map((cell, j) => (
                    <td
                      key={j}
                      className="border-b border-white/5 px-4 py-3 text-slate-300"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    },
  },
};

export default function PortableText({ value }: { value: PortableTextBlock[] }) {
  return <BasePortableText value={value} components={components} />;
}
