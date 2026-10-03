import { siteConfig } from "@/config/site";
import type { FaqItem, HomePageDefinition, SeoPageDefinition } from "@/config/types";
import { absoluteUrl } from "./urls";

type Schema = Record<string, unknown>;

function breadcrumbItems(slug: string, title: string) {
  const segments = slug.split("/").filter(Boolean);
  const items: Schema[] = [
    { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl() },
  ];

  segments.forEach((segment, index) => {
    const partial = segments.slice(0, index + 1).join("/");
    items.push({
      "@type": "ListItem",
      position: index + 2,
      name: index === segments.length - 1 ? title : segment.replace(/-/g, " "),
      item: absoluteUrl(partial),
    });
  });

  return items;
}

function faqSchema(faq: FaqItem[]): Schema {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

function videoGameSchema(): Schema {
  const game: Schema = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    name: siteConfig.game.name,
    gamePlatform: siteConfig.game.platform,
  };
  if (siteConfig.game.genre.trim()) game.genre = siteConfig.game.genre.trim();
  if (siteConfig.game.developer.trim()) {
    const studio = { "@type": "Organization", name: siteConfig.game.developer.trim() };
    game.author = studio;
    game.publisher = studio;
  }
  if (siteConfig.game.officialUrl) {
    game.url = siteConfig.game.officialUrl;
    game.sameAs = [
      siteConfig.game.officialUrl,
      "https://www.roblox.com/communities/12851171/Ouw-Productions",
    ];
  }
  return game;
}

export function homeSchemas(page: HomePageDefinition): Schema[] {
  return [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: siteConfig.siteName,
      url: absoluteUrl(),
      description: siteConfig.description,
      inLanguage: siteConfig.language,
    },
    videoGameSchema(),
    faqSchema(page.faq),
  ];
}

export function pageSchemas(page: SeoPageDefinition): Schema[] {
  const schemas: Schema[] = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: page.title,
      description: page.description,
      url: absoluteUrl(page.slug),
      dateModified: page.lastReviewed,
      inLanguage: siteConfig.language,
      isPartOf: { "@type": "WebSite", name: siteConfig.siteName, url: absoluteUrl() },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbItems(page.slug, page.hero.heading),
    },
  ];

  if (page.faq?.length) schemas.push(faqSchema(page.faq));

  const steps = page.sections.flatMap((section) => section.steps ?? []);
  if (steps.length && page.pageType === "guide") {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: page.hero.heading,
      description: page.description,
      step: steps.map((step, index) => ({
        "@type": "HowToStep",
        position: index + 1,
        name: step.heading,
        text: step.description,
      })),
    });
  }

  return schemas;
}
