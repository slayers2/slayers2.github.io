import type { SeoPageDefinition } from "@/config/types";
import { legalPages } from "./legal";
import { corePages } from "./pages";
import { moreGuides } from "./more-guides";

export const allPages: SeoPageDefinition[] = [...corePages, ...moreGuides, ...legalPages];
export const enabledPages = allPages.filter((page) => page.enabled);
export const enabledCorePages = corePages.filter((page) => page.enabled);
export const enabledMoreGuides = moreGuides.filter((page) => page.enabled);
export const visibleCorePages = enabledCorePages.filter((page) => page.navVisible);
export const enabledLegalPages = legalPages.filter((page) => page.enabled);

export function getPageBySlug(slug: string) {
  return enabledPages.find((page) => page.slug === slug);
}

export function getRelatedPages(page: SeoPageDefinition) {
  return (page.relatedSlugs ?? [])
    .map((slug) => getPageBySlug(slug))
    .filter((related): related is SeoPageDefinition => Boolean(related));
}
