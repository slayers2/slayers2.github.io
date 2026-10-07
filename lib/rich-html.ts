import { siteConfig } from "@/config/site";
import type { DataTable, FaqItem, InternalLink, PageSection } from "@/config/types";
import { esc } from "@/lib/fixed-template/render";
import { routePath } from "@/lib/urls";

const FAQ_HEADINGS: Record<string, string> = {
  "": "Slayers 2 FAQ",
  codes: "Slayers 2 Codes FAQ",
  fishing: "Fishing FAQ",
  weapons: "Slayers 2 Weapons FAQ",
  "black-market": "Black Market FAQ",
  "breathing-styles": "Breathing Styles FAQ",
  "blood-demon-arts": "BDA FAQ",
  "final-selection": "Final Selection FAQ",
  dungeons: "Dungeons FAQ",
  "golden-fish": "Slayers 2 Golden Fish FAQ",
  "raid-chests": "Slayers 2 Raid Chests FAQ",
  "sell-items": "Slayers 2 Selling FAQ",
};

export function formatReviewed(iso: string) {
  const [year, month, day] = iso.split("-").map(Number);
  const name = new Date(Date.UTC(year, (month || 1) - 1, day || 1)).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
  return `Updated ${name}`;
}

function linkEmails(html: string) {
  return html.split(/(<[^>]+>)/).map((part) => {
    if (part.startsWith("<")) return part;
    return part.replace(/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/gi, (email) => `<a href="mailto:${email}">${email}</a>`);
  }).join("");
}

function inline(text: string) {
  const linked = esc(text).replace(/https:\/\/[^\s<&]+/g, (raw) => {
    const url = raw.replace(/[),.;]+$/, "");
    const tail = raw.slice(url.length);
    try {
      const host = new URL(url).hostname;
      const siteHost = new URL(siteConfig.hosting.siteUrl).hostname;
      if (host !== siteHost && !siteConfig.allowedExternalDomains.includes(host)) return raw;
      return `<a href="${url}" rel="noopener noreferrer">${url}</a>${tail}`;
    } catch {
      return raw;
    }
  });
  return linkEmails(linked);
}

function renderTable(table: DataTable) {
  const codeIndex = table.columns.findIndex((column) => column.toLowerCase() === "code");
  const head = table.columns.map((column) => `<th scope="col">${esc(column)}</th>`).join("");
  const body = table.rows.map((row) => {
    const cells = row.map((cell, index) => {
      if (index === codeIndex && /^[A-Za-z0-9]+$/.test(cell)) {
        return `<td><span class="code-value">${esc(cell)}</span> <button type="button" class="copy-code" data-code="${esc(cell)}" onclick="navigator.clipboard.writeText(this.getAttribute('data-code'))">Copy</button></td>`;
      }
      return `<td>${inline(cell)}</td>`;
    }).join("");
    return `<tr>${cells}</tr>`;
  }).join("");
  return `<div class="table-wrap"><table><caption>${esc(table.caption)}</caption><thead><tr>${head}</tr></thead><tbody>${body}</tbody></table></div>`;
}

function renderLinks(links: InternalLink[], prominent: boolean) {
  if (prominent) {
    return `<div class="guide-grid">${links.map((link) => `<a class="guide-card" href="${esc(routePath(link.slug))}"><h3>${esc(link.label)}</h3>${link.description ? `<span>${esc(link.description)}</span>` : ""}</a>`).join("")}</div>`;
  }
  return `<ul class="text-links">${links.map((link) => `<li><a href="${esc(routePath(link.slug))}">${esc(link.label)}</a>${link.description ? ` — ${esc(link.description)}` : ""}</li>`).join("")}</ul>`;
}

function renderSection(section: PageSection) {
  const eyebrow = section.eyebrow ? `<p class="kicker">${esc(section.eyebrow)}</p>` : "";
  const intro = section.intro ? `<p class="callout">${inline(section.intro)}</p>` : "";
  const paragraphs = (section.paragraphs ?? []).map((paragraph) => `<p>${inline(paragraph)}</p>`).join("");
  const subsections = (section.subsections ?? []).map((subsection) => {
    const body = subsection.paragraphs.map((paragraph) => `<p>${inline(paragraph)}</p>`).join("");
    const bullets = subsection.bullets?.length ? `<ul>${subsection.bullets.map((bullet) => `<li>${inline(bullet)}</li>`).join("")}</ul>` : "";
    const table = subsection.table ? renderTable(subsection.table) : "";
    return `<h3>${esc(subsection.heading)}</h3>${body}${bullets}${table}`;
  }).join("");
  const steps = section.steps?.length
    ? `<ol>${section.steps.map((step) => `<li><b>${esc(step.heading)}</b> ${inline(step.description)}</li>`).join("")}</ol>`
    : "";
  const table = section.table ? renderTable(section.table) : "";
  const links = section.links?.length ? renderLinks(section.links, section.id === "start-here") : "";
  return `<section id="${esc(section.id)}">${eyebrow}<h2>${esc(section.heading)}</h2>${intro}${paragraphs}${table}${subsections}${steps}${links}</section>`;
}

export function renderSections(sections: PageSection[]) {
  return sections.map(renderSection).join("");
}

export function renderFaq(slug: string, items: FaqItem[] | undefined) {
  if (!items?.length) return "";
  const heading = FAQ_HEADINGS[slug] ?? "FAQ";
  const body = items.map((item) => `<h3>${esc(item.question)}</h3><p>${inline(item.answer)}</p>`).join("");
  return `<section id="faq"><h2>${esc(heading)}</h2>${body}</section>`;
}

export function renderToc(sections: PageSection[], includeFaq: boolean) {
  const links = [
    ...sections.map((section) => `<a href="#${esc(section.id)}">${esc(section.heading)}</a>`),
    includeFaq ? `<a href="#faq">FAQ</a>` : "",
  ].join("");
  return `<nav class="onpage" aria-label="On this page"><p class="onpage-label">On this page</p><div class="onpage-links">${links}</div></nav>`;
}

export function renderRelated(items: Array<{ slug: string; label: string }>) {
  if (!items.length) return "";
  return `<section id="related"><h2>Related guides</h2><ul class="text-links">${items.map((item) => `<li><a href="${esc(routePath(item.slug))}">${esc(item.label)}</a></li>`).join("")}</ul></section>`;
}
