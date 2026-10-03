import type { SeoPageDefinition } from "@/config/types";
import { fishingMacroPage } from "./site-pages/fishing-macro";
import { forgePage } from "./site-pages/forge";
import { permitStampPage } from "./site-pages/permit-stamp";
import { zenithPage } from "./site-pages/zenith";

// Footer-discovered guides stay separate from the frozen core navigation.
export const moreGuides: SeoPageDefinition[] = [
  zenithPage,
  fishingMacroPage,
  permitStampPage,
  forgePage,
];
