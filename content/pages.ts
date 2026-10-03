import type { SeoPageDefinition } from "@/config/types";
import { blackMarketPage } from "./site-pages/black-market";
import { bdaPage } from "./site-pages/bda";
import { breathingPage } from "./site-pages/breathing";
import { codesPage } from "./site-pages/codes";
import { dungeonsPage } from "./site-pages/dungeons";
import { finalSelectionPage } from "./site-pages/final-selection";
import { fishingPage } from "./site-pages/fishing";
import { weaponsPage } from "./site-pages/weapons";

export const corePages: SeoPageDefinition[] = [
  codesPage,
  fishingPage,
  weaponsPage,
  blackMarketPage,
  breathingPage,
  bdaPage,
  finalSelectionPage,
  dungeonsPage,
];
