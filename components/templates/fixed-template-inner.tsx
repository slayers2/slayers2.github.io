import { JsonLd } from "@/components/site/json-ld";
import { siteConfig } from "@/config/site";
import { siteSkin } from "@/config/skin";
import type { SeoPageDefinition } from "@/config/types";
import { getRelatedPages } from "@/content/registry";
import { insertFixedAdSlots } from "@/lib/fixed-template/ad-slots";
import { renderFixedDocument } from "@/lib/fixed-template/render";
import { formatReviewed, renderFaq, renderRelated, renderSections, renderToc } from "@/lib/rich-html";
import { pageSchemas } from "@/lib/schema";
import { routePath } from "@/lib/urls";

export function FixedTemplateInner({ page }: { page: SeoPageDefinition }) {
  const skin = siteSkin();
  const nav = page.navVisible
    ? [{ slug: page.slug, label: page.navLabel, href: routePath(page.slug) }]
    : [];
  const articleHtml = `${renderToc(page.sections, Boolean(page.faq?.length))}${renderSections(page.sections)}${renderFaq(page.slug, page.faq)}${renderRelated(getRelatedPages(page).map((item) => ({ slug: item.slug, label: item.navLabel })))}`;
  const rendered = renderFixedDocument({
    skin,
    page: "inner",
    accentColorId: siteConfig.theme.accentColorId,
    gameName: siteConfig.game.name || siteConfig.shortName,
    nav,
    currentSlug: page.slug,
    homeHref: "/",
    heading: page.hero.heading,
    lead: page.hero.lead,
    kicker: formatReviewed(page.lastReviewed),
    articleHtml,
  });
  return (
    <>
      <JsonLd data={pageSchemas(page)} />
      <div dangerouslySetInnerHTML={{ __html: insertFixedAdSlots(rendered.rest) }} />
    </>
  );
}
