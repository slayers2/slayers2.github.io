import type { SeoPageDefinition } from "@/config/types";
import { fishingMacroPage } from "./site-pages/fishing-macro";
import { forgePage } from "./site-pages/forge";
import { goldenFishPage } from "./site-pages/golden-fish";
import { permitStampPage } from "./site-pages/permit-stamp";
import { raidChestsPage } from "./site-pages/raid-chests";
import { sellItemsPage } from "./site-pages/sell-items";
import { zenithPage } from "./site-pages/zenith";

// Footer-discovered guides stay separate from the frozen core navigation.
export const moreGuides: SeoPageDefinition[] = [
  zenithPage,
  fishingMacroPage,
  goldenFishPage,
  permitStampPage,
  forgePage,
  raidChestsPage,
  sellItemsPage,
];
