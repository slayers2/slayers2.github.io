import { JsonLd } from "@/components/site/json-ld";
import { siteConfig } from "@/config/site";
import { siteSkin } from "@/config/skin";
import type { HomePageDefinition } from "@/config/types";
import { enabledCorePages } from "@/content/registry";
import { insertFixedAdSlots } from "@/lib/fixed-template/ad-slots";
import { renderFixedDocument } from "@/lib/fixed-template/render";
import { formatReviewed, renderFaq, renderSections } from "@/lib/rich-html";
import { homeSchemas } from "@/lib/schema";
import { esc } from "@/lib/fixed-template/render";
import { assetPath, routePath } from "@/lib/urls";

export function FixedTemplateHome({ home }: { home: HomePageDefinition }) {
  const skin = siteSkin();
  const nav = enabledCorePages.map((page) => ({ slug: page.slug, label: page.navLabel, href: routePath(page.slug) }));
  const cover = home.screenshots[0];
  const heroAsideHtml = cover
    ? `<img src="${esc(assetPath(cover.src))}" alt="${esc(cover.alt)}" width="768" height="432">`
    : "";
  const sectionHtml = home.sections.map((section) => renderSections([section])).join("");
  const supplementHtml = `<div class="supplement">${sectionHtml}${renderFaq("", home.faq)}</div>`;
  const actions = `<p class="cta-row"><a class="cta" href="${routePath("codes")}">View codes</a>${siteConfig.game.officialUrl ? `<a class="cta cta-secondary" href="${siteConfig.game.officialUrl}" rel="noopener noreferrer">Play on Roblox</a>` : ""}</p>`;
  const rendered = renderFixedDocument({
    skin,
    page: "home",
    accentColorId: siteConfig.theme.accentColorId,
    gameName: siteConfig.game.name || siteConfig.shortName,
    nav,
    homeHref: "/",
    logoUrl: assetPath(siteConfig.assets.logo),
    heading: home.hero.heading,
    lead: `${home.hero.lead} ${home.hero.supportingText}`.trim(),
    kicker: formatReviewed(home.lastReviewed),
    afterLeadHtml: actions,
    stripHomeDemo: true,
    heroAsideHtml,
    supplementHtml,
  });
  return (
    <>
      <JsonLd data={homeSchemas(home)} />
      <div dangerouslySetInnerHTML={{ __html: insertFixedAdSlots(rendered.rest) }} />
    </>
  );
}
