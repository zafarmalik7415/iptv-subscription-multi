/**
 * Small helpers for hand-authoring Portable Text blocks for the static blog
 * fallback, without needing a Sanity asset for every image. `image()` and
 * `table()` produce custom block types that components/PortableText.tsx
 * knows how to render directly from a plain URL / rows array.
 */

let counter = 0;
const key = (prefix: string) => `${prefix}${counter++}`;

export type TextSegment = string | { text: string; href: string };

function toChildren(segments: TextSegment[]) {
  const markDefs: { _key: string; _type: "link"; href: string }[] = [];
  const children = segments.map((seg) => {
    if (typeof seg === "string") {
      return { _type: "span", _key: key("span"), text: seg, marks: [] };
    }
    const linkKey = key("link");
    markDefs.push({ _key: linkKey, _type: "link", href: seg.href });
    return { _type: "span", _key: key("span"), text: seg.text, marks: [linkKey] };
  });
  return { children, markDefs };
}

export function p(segments: TextSegment | TextSegment[]) {
  const { children, markDefs } = toChildren(
    Array.isArray(segments) ? segments : [segments]
  );
  return { _type: "block", _key: key("block"), style: "normal", markDefs, children };
}

export function h2(text: string) {
  const { children, markDefs } = toChildren([text]);
  return { _type: "block", _key: key("block"), style: "h2", markDefs, children };
}

export function h3(text: string) {
  const { children, markDefs } = toChildren([text]);
  return { _type: "block", _key: key("block"), style: "h3", markDefs, children };
}

export function quote(text: string) {
  const { children, markDefs } = toChildren([text]);
  return { _type: "block", _key: key("block"), style: "blockquote", markDefs, children };
}

export function ul(items: (TextSegment | TextSegment[])[]) {
  return items.map((item) => {
    const { children, markDefs } = toChildren(Array.isArray(item) ? item : [item]);
    return {
      _type: "block",
      _key: key("li"),
      style: "normal",
      listItem: "bullet",
      level: 1,
      markDefs,
      children,
    };
  });
}

export function ol(items: (TextSegment | TextSegment[])[]) {
  return items.map((item) => {
    const { children, markDefs } = toChildren(Array.isArray(item) ? item : [item]);
    return {
      _type: "block",
      _key: key("li"),
      style: "normal",
      listItem: "number",
      level: 1,
      markDefs,
      children,
    };
  });
}

export function image(url: string, alt: string, caption?: string) {
  return { _type: "image", _key: key("img"), url, alt, caption };
}

export function table(rows: string[][]) {
  return { _type: "table", _key: key("table"), rows };
}
