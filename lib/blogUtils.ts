import type { PortableTextBlock } from "@portabletext/types";

type LooseBlock = {
  _type?: string;
  style?: string;
  children?: { text?: string }[];
};

function blockText(block: LooseBlock): string {
  return (block.children ?? []).map((c) => c.text ?? "").join("");
}

/** Rough reading time in minutes, based on an average reading speed. */
export function getReadingTime(body: PortableTextBlock[]): number {
  const words = (body as unknown as LooseBlock[])
    .filter((b) => b._type === "block")
    .map(blockText)
    .join(" ")
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}

/** Extracts h2 headings (text + a slug for anchoring) for a table of contents. */
export function getHeadings(body: PortableTextBlock[]) {
  return (body as unknown as LooseBlock[])
    .filter((b) => b._type === "block" && b.style === "h2")
    .map((b) => {
      const text = blockText(b);
      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
      return { text, id };
    });
}
