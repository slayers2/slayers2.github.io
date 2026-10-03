import { accentOverrideCss, resolveAccent, templatePack, type TemplateSkin } from "./catalog";
import { SPEC_HTML } from "./spec-html";

export interface TemplateLink {
  slug: string;
  label: string;
  href: string;
}

export interface TemplateEntry {
  href: string;
  title: string;
  text: string;
}

export interface FixedTemplateInput {
  skin: TemplateSkin | string;
  page: "home" | "inner";
  accentColorId?: string | null;
  gameName: string;
  nav: TemplateLink[];
  currentSlug?: string | null;
  homeHref: string;
  logoUrl?: string | null;
  bannerUrl?: string | null;
  heading?: string | null;
  lead?: string | null;
  /** Real SEO body. Replaces the approved inner article demo. */
  articleHtml?: string | null;
  /** Real pages. Replaces demo cards on the home template. */
  entries?: TemplateEntry[] | null;
  /** Extra real copy appended inside <main>, after the approved structure. */
  supplementHtml?: string | null;
  /** Replaces the template kicker, for example an updated date. */
  kicker?: string | null;
  /** HTML inserted immediately after the hero lead. */
  afterLeadHtml?: string | null;
  /** Drops the horror home demo cards and fake stat aside. */
  stripHomeDemo?: boolean | null;
  /** Replaces the horror home hero aside. Used for the fitted cover. */
  heroAsideHtml?: string | null;
}

export function esc(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function templateNavLinks(nav: TemplateLink[], page: "home" | "inner", currentSlug?: string | null): string {
  return nav.map((item) => {
    const slug = item.slug.replace(/^\/+|\/+$/g, "");
    const active = page === "home" ? slug === "" : Boolean(currentSlug && slug === currentSlug.replace(/^\/+|\/+$/g, ""));
    return `<a class="nav-link${active ? " active" : ""}" href="${esc(item.href)}">${esc(item.label)}</a>`;
  }).join("");
}

function brandInner(gameName: string, skin: string, page: "home" | "inner", logoUrl?: string | null): string {
  const logo = logoUrl
    ? skin === "horror"
      ? `<img class="brand-mark" alt="" src="${esc(logoUrl)}" width="452" height="280">`
      : `<img alt="" src="${esc(logoUrl)}" style="height:28px;width:28px;object-fit:cover;vertical-align:middle;margin-right:8px">`
    : "";
  if (skin === "resource") {
    const tag = page === "home" ? "<small>GAME RESOURCE CENTER</small>" : "";
    return `${logo}${esc(gameName)}${tag}`;
  }
  const parts = gameName.trim().split(/\s+/).filter(Boolean);
  const tag = skin === "horror" ? "i" : "span";
  const name = parts.length < 2
    ? esc(gameName)
    : `${esc(parts.slice(0, -1).join(" "))} <${tag}>${esc(parts[parts.length - 1] ?? "")}</${tag}>`;
  if (skin === "horror") return `${logo}<span class="brand-name">${name}</span>`;
  return `${logo}${name}`;
}

function replaceNav(html: string, links: string): string {
  if (html.includes('<nav class="wrap nav">')) {
    return html.replace(/<nav class="wrap nav">[\s\S]*?<\/nav>/, `<nav class="wrap nav">${links}</nav>`);
  }
  if (html.includes('<div class="nav">')) {
    return html.replace(/<div class="nav">[\s\S]*?<\/div>/, `<div class="nav">${links}</div>`);
  }
  return html.replace(/<nav class="nav">[\s\S]*?<\/nav>/, `<nav class="nav">${links}</nav>`);
}

function replaceBrand(html: string, inner: string, homeHref: string): string {
  return html.replace(
    /<a class="(brand|logo)" href="home\.html" aria-label="Back to homepage">[\s\S]*?<\/a>/,
    `<a class="$1" href="${esc(homeHref)}" aria-label="Back to homepage">${inner}</a>`,
  );
}

function replaceCrumbs(html: string, homeHref: string, current: string | null): string {
  const body = current
    ? `<a href="${esc(homeHref)}">Home</a> › ${esc(current)}`
    : `<a href="${esc(homeHref)}">Home</a>`;
  return html
    .replace(/<div class="site-breadcrumb">[\s\S]*?<\/div>/g, `<div class="site-breadcrumb">${body}</div>`)
    .replace(/<div class="crumb">[\s\S]*?<\/div>/g, `<div class="crumb">${body}</div>`);
}

function replaceBalanced(html: string, tag: string, className: string, inner: string): string {
  const marker = `<${tag} class="${className}">`;
  const start = html.indexOf(marker);
  if (start < 0) return html;
  const openEnd = start + marker.length;
  const closer = `</${tag}>`;
  let depth = 1;
  let index = openEnd;
  while (index < html.length && depth > 0) {
    const nextOpen = html.indexOf(`<${tag}`, index);
    const nextClose = html.indexOf(closer, index);
    if (nextClose < 0) return html;
    if (nextOpen !== -1 && nextOpen < nextClose) {
      depth += 1;
      index = nextOpen + tag.length + 1;
    } else {
      depth -= 1;
      if (depth === 0) return `${html.slice(0, openEnd)}${inner}${html.slice(nextClose)}`;
      index = nextClose + closer.length;
    }
  }
  return html;
}

function applyEntries(html: string, skin: string, entries: TemplateEntry[]): string {
  const cards = entries.map((entry, index) => {
    const title = esc(entry.title);
    const text = esc(entry.text);
    const href = esc(entry.href);
    if (skin === "portal") return `<a class="card" href="${href}"><div class="icon">${index + 1}</div><h3>${title}</h3><p>${text}</p></a>`;
    if (skin === "wiki") return `<a class="row" href="${href}"><b>${title}</b><span>${text}</span></a>`;
    if (skin === "editorial") {
      return `<article class="article"><a href="${href}"><div class="thumb"></div><div class="article-body"><h3>${title}</h3><p>${text}</p></div></a></article>`;
    }
    if (skin === "glass") {
      return `<a class="block" href="${href}"><div class="num">0${index + 1}</div><b>${title}</b><p>${text}</p></a>`;
    }
    if (skin === "pixel") return `<a class="tile" href="${href}"><div class="icon">▣</div><b>${title}</b><p>${text}</p></a>`;
    if (skin === "horror") return `<article class="card"><a href="${href}"><div class="tag">GUIDE</div><h3>${title}</h3><p>${text}</p></a></article>`;
    return `<a class="quick" href="${href}"><b>${title}</b><span>${text}</span></a>`;
  }).join("");
  if (skin === "portal") return replaceBalanced(html, "div", "grid", cards);
  if (skin === "wiki") return replaceBalanced(html, "div", "list", cards);
  if (skin === "resource") return replaceBalanced(html, "div", "quick-grid", cards);
  if (skin === "editorial") return replaceBalanced(html, "section", "grid", cards);
  if (skin === "glass") return replaceBalanced(html, "div", "blocks", cards);
  if (skin === "pixel") return replaceBalanced(html, "div", "tiles", cards);
  if (skin === "horror") return replaceBalanced(html, "div", "cards", cards);
  return html;
}

function insertBanner(html: string, bannerUrl: string): string {
  const img = `<img alt="" src="${esc(bannerUrl)}" style="width:100%;height:180px;object-fit:cover;display:block">`;
  if (html.includes('<div class="visual">')) return html.replace('<div class="visual">', `<div class="visual">${img}`);
  if (html.includes('<header class="hero-wrap">')) return html.replace('<header class="hero-wrap">', `<header class="hero-wrap">${img}`);
  if (html.includes('<article class="lead-card">')) return html.replace('<article class="lead-card">', `<article class="lead-card">${img}`);
  if (html.includes('<section class="hero">')) return html.replace('<section class="hero">', `<section class="hero">${img}`);
  if (html.includes('<section class="panel hero">')) return html.replace('<section class="panel hero">', `<section class="panel hero">${img}`);
  return html;
}

function applyCopy(html: string, input: FixedTemplateInput): string {
  let next = html.replaceAll("Riftfall Survival", input.gameName);
  if (input.heading) next = next.replace(/<h1>[\s\S]*?<\/h1>/, `<h1>${esc(input.heading)}</h1>`);
  if (input.lead) {
    const leadHtml = `<p class="lead">${esc(input.lead)}</p>`;
    if (next.includes('<p class="lead">')) next = next.replace(/<p class="lead">[\s\S]*?<\/p>/, leadHtml);
    else if (next.includes('<p class="deck">')) next = next.replace(/<p class="deck">[\s\S]*?<\/p>/, `<p class="deck">${esc(input.lead)}</p>`);
    else {
      next = next.replace(/(<section class="hero">[\s\S]*?<h1>[\s\S]*?<\/h1>\s*)<p>[\s\S]*?<\/p>/, `$1${leadHtml}`);
      next = next.replace(/(<section class="inner-wrap inner-hero">[\s\S]*?<h1>[\s\S]*?<\/h1>\s*)<p>[\s\S]*?<\/p>/, `$1${leadHtml}`);
    }
  }
  if (input.kicker) {
    next = next.replace(/<div class="kicker">[\s\S]*?<\/div>/, `<div class="kicker">${esc(input.kicker)}</div>`);
  }
  if (input.afterLeadHtml) {
    next = next.replace(/<p class="lead">[\s\S]*?<\/p>/, (paragraph) => `${paragraph}${input.afterLeadHtml}`);
  }
  if (input.stripHomeDemo) {
    next = next.replace(/<section class="section">[\s\S]*?<\/section>/, "");
    const aside = input.heroAsideHtml ? `<aside class="hero-art">${input.heroAsideHtml}</aside>` : "";
    next = next.replace(/<section class="hero">[\s\S]*?<\/section>/, (section) => section.replace(/<aside>[\s\S]*?<\/aside>/, aside));
  }
  return next;
}

export function renderFixedTemplate(input: FixedTemplateInput): string {
  const pack = templatePack(input.skin);
  const source = SPEC_HTML[pack.specId]?.[input.page];
  if (!source) throw new Error(`Missing approved HTML for ${pack.specId} ${input.page}`);
  const paint = resolveAccent(pack.skin, input.accentColorId);
  const currentLabel = input.page === "inner"
    ? (input.nav.find((item) => item.slug.replace(/^\/+|\/+$/g, "") === (input.currentSlug || "").replace(/^\/+|\/+$/g, ""))?.label || input.heading || "Guide")
    : null;
  let html = source;
  html = replaceBrand(html, brandInner(input.gameName, pack.skin, input.page, input.logoUrl), input.homeHref);
  html = html.replaceAll('href="home.html"', `href="${esc(input.homeHref)}"`);
  html = replaceNav(html, templateNavLinks(input.nav, input.page, input.currentSlug));
  html = replaceCrumbs(html, input.homeHref, currentLabel);
  html = html.replace(/href="inner\.html#([^"]+)"/g, (_match, id: string) => {
    const linked = input.nav.find((item) => item.slug.replace(/^\/+|\/+$/g, "") === id);
    return `href="${esc(linked?.href || `#${id}`)}"`;
  });
  if (input.bannerUrl) html = insertBanner(html, input.bannerUrl);
  if (input.page === "home" && input.entries?.length) html = applyEntries(html, pack.skin, input.entries);
  if (input.page === "inner" && input.articleHtml) {
    html = replaceArticleBody(html, input.articleHtml);
    html = syncAside(html, input.articleHtml);
  }
  if (input.supplementHtml) html = html.replace("</main>", `${input.supplementHtml}</main>`);
  html = applyCopy(html, input);
  html = html.replace(/--accent:#[0-9A-Fa-f]{6}/, `--accent:${paint.textAccent}`);
  html = html.replace("</style>", `${accentOverrideCss(pack.skin, paint)}</style>`);
  return html;
}

function syncAside(html: string, articleHtml: string): string {
  const sections = [...articleHtml.matchAll(/<section id="([^"]+)">\s*<h2>([\s\S]*?)<\/h2>/g)];
  if (!sections.length || !html.includes("<aside")) return html;
  const links = sections.map((match) => `<a href="#${match[1]}">${match[2]}</a>`).join("");
  return html.replace(/<aside([^>]*)>([\s\S]*?)<\/aside>/, (_full, attrs: string, inner: string) => {
    let used = false;
    const next = inner.replace(/<a\b[^>]*>[\s\S]*?<\/a>/g, () => {
      if (used) return "";
      used = true;
      return links;
    });
    return `<aside${attrs}>${used ? next : `${inner}${links}`}</aside>`;
  });
}

function replaceArticleBody(html: string, articleHtml: string): string {
  const match = html.match(/<article([^>]*)>([\s\S]*?)<\/article>/);
  if (!match) return html;
  const inner = match[2] ?? "";
  const crumb = inner.match(/<div class="(?:crumb|site-breadcrumb)">[\s\S]*?<\/div>/);
  const h1 = inner.match(/<h1>[\s\S]*?<\/h1>/);
  return html.replace(match[0], `<article${match[1] ?? ""}>${crumb?.[0] ?? ""}${h1?.[0] ?? ""}${articleHtml}</article>`);
}

export function extractStyle(html: string): string {
  return [...html.matchAll(/<style>([\s\S]*?)<\/style>/g)].map((match) => match[1] ?? "").join("\n");
}

export function extractBody(html: string): string {
  const match = html.match(/<body[^>]*>([\s\S]*)<\/body>/i);
  return (match?.[1] ?? html).replace(/<script[\s\S]*?<\/script>/g, "");
}

export function splitFixedChrome(body: string, skin: string): { chrome: string; rest: string } {
  const source = body.trim();
  const pattern = skin === "editorial"
    ? /^<div class="topline">[\s\S]*?<\/header>/
    : skin === "resource"
      ? /^<header[\s\S]*?<\/header>\s*<div class="navbar">[\s\S]*?<\/div>/
      : skin === "glass"
        ? /^<nav class="floating">[\s\S]*?<\/nav>/
        : /^<header[\s\S]*?<\/header>/;
  const match = source.match(pattern);
  if (!match) return { chrome: "", rest: source };
  return { chrome: match[0], rest: source.slice(match[0].length) };
}

function scopeSelectorList(selector: string, scope: string): string {
  return selector.split(",").map((part) => {
    const sel = part.trim();
    if (!sel || sel.startsWith("@")) return sel;
    if (sel === ":root" || sel === "html" || sel === "body") return scope;
    return `${scope} ${sel}`;
  }).join(",");
}

export function scopeTemplateCss(css: string, scope: string): string {
  let index = 0;
  let out = "";
  const source = css.trim();
  while (index < source.length) {
    while (source[index] === " " || source[index] === "\n") index += 1;
    if (index >= source.length) break;
    if (source.startsWith("@media", index) || source.startsWith("@supports", index)) {
      const brace = source.indexOf("{", index);
      if (brace < 0) break;
      const header = source.slice(index, brace + 1);
      let depth = 1;
      let cursor = brace + 1;
      while (cursor < source.length && depth > 0) {
        if (source[cursor] === "{") depth += 1;
        else if (source[cursor] === "}") depth -= 1;
        cursor += 1;
      }
      const inner = source.slice(brace + 1, cursor - 1);
      out += `${header}${scopeTemplateCss(inner, scope)}}`;
      index = cursor;
      continue;
    }
    const brace = source.indexOf("{", index);
    if (brace < 0) break;
    const selector = source.slice(index, brace).trim();
    const close = source.indexOf("}", brace);
    if (close < 0) break;
    const body = source.slice(brace + 1, close);
    out += `${scopeSelectorList(selector, scope)}{${body}}`;
    index = close + 1;
  }
  return out;
}

export function scopedTemplateCss(skin: string, accentColorId?: string | null): string {
  const pack = templatePack(skin);
  const home = SPEC_HTML[pack.specId]?.home ?? "";
  const inner = SPEC_HTML[pack.specId]?.inner ?? "";
  const paint = resolveAccent(pack.skin, accentColorId);
  const raw = `${extractStyle(home)}\n${extractStyle(inner)}\n${accentOverrideCss(pack.skin, paint)}`;
  const scoped = scopeTemplateCss(raw, `body[data-fixed-template="${pack.skin}"]`);
  return pack.skin === "horror" ? `${scoped}\n${horrorReadingCss()}` : scoped;
}

function horrorReadingCss() {
  return `
html[data-fixed-template="horror"],body[data-fixed-template="horror"]{overflow-x:clip}
body[data-fixed-template="horror"]{font-family:Inter,sans-serif;font-size:16px;line-height:1.7;color:#e8e2da}
body[data-fixed-template="horror"] p,
body[data-fixed-template="horror"] li,
body[data-fixed-template="horror"] a,
body[data-fixed-template="horror"] button,
body[data-fixed-template="horror"] th,
body[data-fixed-template="horror"] td,
body[data-fixed-template="horror"] caption,
body[data-fixed-template="horror"] h3,
body[data-fixed-template="horror"] .nav-link,
body[data-fixed-template="horror"] .kicker,
body[data-fixed-template="horror"] .site-breadcrumb,
body[data-fixed-template="horror"] .onpage,
body[data-fixed-template="horror"] .cta,
body[data-fixed-template="horror"] .guide-card,
body[data-fixed-template="horror"] .guide-card h3,
body[data-fixed-template="horror"] .guide-card span,
body[data-fixed-template="horror"] .card,
body[data-fixed-template="horror"] .card .tag,
body[data-fixed-template="horror"] .warning,
body[data-fixed-template="horror"] footer,
body[data-fixed-template="horror"] footer p,
body[data-fixed-template="horror"] footer a,
body[data-fixed-template="horror"] footer li{font-family:Inter,sans-serif}
body[data-fixed-template="horror"] h1,
body[data-fixed-template="horror"] h2{font-family:"Cormorant Garamond",serif;font-weight:600}
body[data-fixed-template="horror"] h3{font-weight:700}
body[data-fixed-template="horror"] .code-value{font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace}
body[data-fixed-template="horror"] .wrap,
body[data-fixed-template="horror"] .inner-wrap{width:min(1160px,calc(100% - 32px));min-width:0;max-width:100%}
body[data-fixed-template="horror"] main,
body[data-fixed-template="horror"] article,
body[data-fixed-template="horror"] .supplement{min-width:0;max-width:100%}
body[data-fixed-template="horror"] header{min-height:0;overflow:visible}
body[data-fixed-template="horror"] header .head{display:flex;align-items:center;flex-wrap:wrap;height:auto;min-height:56px;max-width:100%;gap:4px 16px;min-width:0}
body[data-fixed-template="horror"] header .nav{display:flex;flex-wrap:wrap;justify-content:flex-end;overflow:visible;min-width:0;max-width:100%;height:auto;margin-left:auto}
body[data-fixed-template="horror"] .nav-link:nth-child(n+4){display:flex}
body[data-fixed-template="horror"] .brand{display:inline-flex;align-items:center;gap:8px;flex:0 0 auto;max-width:100%;font-family:Inter,sans-serif;font-size:16px;font-weight:700;letter-spacing:.01em;line-height:1;white-space:nowrap}
body[data-fixed-template="horror"] .brand-mark{display:block;height:34px;width:auto;max-width:78px;object-fit:contain;flex:none}
body[data-fixed-template="horror"] .brand-name{font-family:Inter,sans-serif;font-size:16px;line-height:1}
body[data-fixed-template="horror"] header .nav-link{flex:0 0 auto;display:flex;align-items:center;padding:8px 6px;font-size:12px;font-weight:600;letter-spacing:0;white-space:nowrap}
body[data-fixed-template="horror"] .kicker,
body[data-fixed-template="horror"] .onpage-label,
body[data-fixed-template="horror"] .section-index,
body[data-fixed-template="horror"] .card .tag{font-size:12px;letter-spacing:.12em;font-weight:700}
body[data-fixed-template="horror"] .site-breadcrumb{font-size:13px;padding-top:12px}
body[data-fixed-template="horror"] .hero{min-height:0;display:grid;grid-template-columns:minmax(0,1.15fr) minmax(260px,.82fr);align-items:stretch;gap:28px;padding:16px 0 8px;overflow:visible}
body[data-fixed-template="horror"] .hero:after{display:none}
body[data-fixed-template="horror"] .hero aside.hero-art{display:block;position:relative;margin:0;padding:0;border:0;min-width:0;min-height:200px}
body[data-fixed-template="horror"] .hero-art img{position:absolute;inset:0;display:block;width:100%;height:100%;object-fit:cover;object-position:center;border:1px solid #3a2e2c}
body[data-fixed-template="horror"] .inner-hero{min-height:0;padding:18px 0 8px}
body[data-fixed-template="horror"] .hero h1{font-size:clamp(42px,5vw,58px);line-height:1.02;margin:8px 0 12px}
body[data-fixed-template="horror"] .inner-hero h1{font-size:clamp(36px,4.5vw,50px);line-height:1.05;margin:8px 0 10px}
body[data-fixed-template="horror"] .lead{font-size:18px;line-height:1.65;color:#f3eee8;max-width:72ch}
body[data-fixed-template="horror"] .article,
body[data-fixed-template="horror"] .supplement{padding-bottom:8px}
body[data-fixed-template="horror"] .article section,
body[data-fixed-template="horror"] .supplement section{padding:8px 0 4px}
body[data-fixed-template="horror"] .article h2,
body[data-fixed-template="horror"] .supplement h2{font-size:31px;line-height:1.15;margin:52px 0 12px}
body[data-fixed-template="horror"] .article section:first-of-type h2,
body[data-fixed-template="horror"] .supplement section:first-of-type h2{margin-top:18px}
body[data-fixed-template="horror"] .article h3,
body[data-fixed-template="horror"] .supplement h3{font-family:Inter,sans-serif;font-size:20px;font-weight:700;line-height:1.3;margin:22px 0 8px}
body[data-fixed-template="horror"] .article p,
body[data-fixed-template="horror"] .article li,
body[data-fixed-template="horror"] .supplement p,
body[data-fixed-template="horror"] .supplement li{color:#e4ddd4;font-size:16px;line-height:1.72;max-width:72ch;overflow-wrap:anywhere}
body[data-fixed-template="horror"] .article p,
body[data-fixed-template="horror"] .supplement p{margin:0 0 14px}
body[data-fixed-template="horror"] .article ul,
body[data-fixed-template="horror"] .article ol,
body[data-fixed-template="horror"] .supplement ul,
body[data-fixed-template="horror"] .supplement ol{margin:0 0 14px;padding-left:1.25em;max-width:72ch}
body[data-fixed-template="horror"] .article li,
body[data-fixed-template="horror"] .supplement li{margin:0 0 8px}
body[data-fixed-template="horror"] a:focus-visible,
body[data-fixed-template="horror"] button:focus-visible{outline:2px solid #f0c9c6;outline-offset:2px}
body[data-fixed-template="horror"] .cta-row{display:flex;flex-wrap:wrap;gap:10px;margin:14px 0 4px}
body[data-fixed-template="horror"] .cta{display:inline-flex;align-items:center;min-height:44px;padding:10px 14px;font-size:13px;font-weight:700;letter-spacing:.02em;text-decoration:none;background:#b3131b;color:#fff;border:1px solid #b3131b}
body[data-fixed-template="horror"] .cta.cta-secondary{background:transparent;color:#f4efe8;border-color:#6a4542}
body[data-fixed-template="horror"] .guide-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:12px 0 4px;max-width:none}
body[data-fixed-template="horror"] .guide-card{display:block;min-height:0;padding:16px 18px;background:#141010;border:1px solid #3a2e2c;text-decoration:none;color:#f4efe8}
body[data-fixed-template="horror"] .guide-card h3{margin:0 0 6px;font-size:18px;font-weight:700;line-height:1.25}
body[data-fixed-template="horror"] .guide-card span{display:block;color:#c9c1b8;font-size:14.5px;line-height:1.5;max-width:none}
body[data-fixed-template="horror"] .card h3{margin:0 0 8px;font-size:18px}
body[data-fixed-template="horror"] .text-links{margin:8px 0 0;padding-left:18px}
body[data-fixed-template="horror"] .text-links a{color:#f0c9c6}
body[data-fixed-template="horror"] .callout{border-left:3px solid #b3131b;background:#140d0d;padding:12px 14px;margin:0 0 14px}
body[data-fixed-template="horror"] .onpage{display:block;margin:2px 0 18px;max-width:none}
body[data-fixed-template="horror"] .article .onpage-label,
body[data-fixed-template="horror"] .onpage-label{margin:0 0 8px;max-width:none;font-size:12px;line-height:1.4;letter-spacing:.12em;text-transform:uppercase;color:#f0c2be}
body[data-fixed-template="horror"] .onpage-links{display:flex;flex-wrap:wrap;gap:8px 14px}
body[data-fixed-template="horror"] .onpage a{color:#f0c9c6;font-size:13px;line-height:1.4;text-decoration:none}
body[data-fixed-template="horror"] .table-wrap{overflow-x:auto;max-width:100%;margin:14px 0 18px;-webkit-overflow-scrolling:touch}
body[data-fixed-template="horror"] table{width:100%;border-collapse:collapse;min-width:640px}
body[data-fixed-template="horror"] caption{caption-side:bottom;text-align:left;font-size:12px;color:#b7b0a8;padding-top:8px}
body[data-fixed-template="horror"] th,
body[data-fixed-template="horror"] td{border-bottom:1px solid #3a2e2c;padding:10px 12px;text-align:left;vertical-align:top;font-size:14.5px;line-height:1.45;color:#f3eee8;max-width:none}
body[data-fixed-template="horror"] th{font-size:14px;font-weight:700;letter-spacing:.01em;color:#f6d6d4;background:#161010}
body[data-fixed-template="horror"] .code-value{font-weight:700;color:#fff}
body[data-fixed-template="horror"] .copy-code{margin-left:8px;font-size:12px;color:#f0c9c6;background:transparent;border:1px solid #6a3030;padding:4px 8px;cursor:pointer}
body[data-fixed-template="horror"] .cover{margin:16px 0}
body[data-fixed-template="horror"] .cover img{width:100%;height:auto;display:block;object-fit:cover;border:1px solid #3a2e2c}
body[data-fixed-template="horror"] article a,
body[data-fixed-template="horror"] .supplement a{color:#f0c9c6}
body[data-fixed-template="horror"] .section{padding:52px 0}
@media(min-width:821px) and (max-width:1099px){
  body[data-fixed-template="horror"] header .nav-link{padding-inline:3px}
}
@media(max-width:820px){
  body[data-fixed-template="horror"] header .head{flex-direction:column;align-items:stretch;width:min(1160px,calc(100% - 24px));min-height:0;gap:0;padding-top:8px;padding-bottom:4px}
  body[data-fixed-template="horror"] header .nav{width:100%;margin:2px 0 4px;justify-content:flex-start;row-gap:0}
  body[data-fixed-template="horror"] .nav-link:nth-child(n+4){display:flex}
  body[data-fixed-template="horror"] header .nav-link{padding:6px;font-size:12px}
  body[data-fixed-template="horror"] .brand-mark{height:30px;max-width:70px}
  body[data-fixed-template="horror"] .hero h1{font-size:42px}
  body[data-fixed-template="horror"] .inner-hero h1{font-size:36px}
  body[data-fixed-template="horror"] .article h2,
  body[data-fixed-template="horror"] .supplement h2{font-size:26px;margin-top:36px}
  body[data-fixed-template="horror"] .article h3,
  body[data-fixed-template="horror"] .supplement h3{font-size:18.5px}
  body[data-fixed-template="horror"] .lead{font-size:17px}
  body[data-fixed-template="horror"] .guide-grid{grid-template-columns:1fr}
  body[data-fixed-template="horror"] .hero{grid-template-columns:1fr;padding:12px 0 4px}
  body[data-fixed-template="horror"] .hero aside.hero-art{display:block;height:140px;min-height:140px}
  body[data-fixed-template="horror"] .hero-art img{max-height:140px}
  body[data-fixed-template="horror"] .onpage-links{flex-wrap:nowrap;overflow-x:auto;scrollbar-width:none;padding-bottom:2px}
  body[data-fixed-template="horror"] .onpage-links::-webkit-scrollbar{display:none}
  body[data-fixed-template="horror"] .onpage a{white-space:nowrap;border:1px solid #3a2e2c;padding:6px 10px}
  body[data-fixed-template="horror"] .section{padding:36px 0}
}
@media(min-width:1100px){
  body[data-fixed-template="horror"] .guide-grid{grid-template-columns:repeat(4,minmax(0,1fr))}
}
`;
}

export function renderFixedDocument(input: FixedTemplateInput): { html: string; body: string; chrome: string; rest: string } {
  const html = renderFixedTemplate(input);
  const body = extractBody(html);
  const parts = splitFixedChrome(body, templatePack(input.skin).skin);
  return { html, body, ...parts };
}
