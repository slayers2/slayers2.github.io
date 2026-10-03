export const BANNER_SLOT_HTML = '<aside class="ad-slot ad-banner"><p class="ad-label">Advertisement</p><div class="ad-banner-frame" data-ad-banner-frame=""></div></aside>';
export const NATIVE_SLOT_HTML = '<aside class="ad-slot ad-native"><p class="ad-label">Advertisement</p><div class="ad-native-frame" data-ad-native-frame=""></div></aside>';

const HERO_MARKERS = ['<section class="inner-wrap inner-hero">', '<section class="hero">'];

function isTagBoundary(source: string, index: number) {
  const ch = source[index] ?? "";
  return ch === ">" || ch === "/" || /\s/.test(ch);
}

function elementEnd(html: string, openIndex: number) {
  const name = /^<([A-Za-z][\w-]*)/.exec(html.slice(openIndex))?.[1];
  if (!name) return null;
  const lower = html.toLowerCase();
  const tag = name.toLowerCase();
  const openToken = `<${tag}`;
  const closeToken = `</${tag}>`;
  let depth = 0;
  let cursor = openIndex;
  while (cursor < html.length) {
    const nextOpen = lower.indexOf(openToken, cursor);
    const nextClose = lower.indexOf(closeToken, cursor);
    if (nextClose < 0) return null;
    if (nextOpen !== -1 && nextOpen < nextClose && isTagBoundary(lower, nextOpen + openToken.length)) {
      depth += 1;
      cursor = nextOpen + openToken.length;
      continue;
    }
    depth -= 1;
    cursor = nextClose + closeToken.length;
    if (depth === 0) return cursor;
  }
  return null;
}

function findHeroOpen(html: string) {
  for (const marker of HERO_MARKERS) {
    const index = html.indexOf(marker);
    if (index >= 0) return index;
  }
  return -1;
}

export function insertFixedAdSlots(html: string) {
  if (html.includes("data-ad-banner-frame")) return html;
  const heroOpen = findHeroOpen(html);
  if (heroOpen < 0) return html;
  const heroEnd = elementEnd(html, heroOpen);
  if (heroEnd == null) return html;

  const afterHero = html.slice(heroEnd);
  const mainMatch = /<main\b[^>]*>/i.exec(afterHero);
  const bannerAt = mainMatch && mainMatch.index < 2000 ? heroEnd + mainMatch.index + mainMatch[0].length : heroEnd;
  let next = `${html.slice(0, bannerAt)}${BANNER_SLOT_HTML}${html.slice(bannerAt)}`;

  const searchFrom = bannerAt + BANNER_SLOT_HTML.length;
  const sectionMatch = /<section\b/i.exec(next.slice(searchFrom));
  if (!sectionMatch) return next;
  const sectionOpen = searchFrom + sectionMatch.index;
  const sectionEnd = elementEnd(next, sectionOpen);
  if (sectionEnd == null) return next;
  const sectionHtml = next.slice(sectionOpen, sectionEnd);
  if (!/<h2\b/i.test(sectionHtml)) return next;
  next = `${next.slice(0, sectionEnd)}${NATIVE_SLOT_HTML}${next.slice(sectionEnd)}`;
  return next;
}
