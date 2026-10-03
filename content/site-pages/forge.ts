import type { SeoPageDefinition } from "@/config/types";

export const forgePage = {
  enabled: true,
  slug: "forge",
  pageType: "guide",
  navLabel: "Forge",
  title: "Slayers 2 Forge Guide: Blacksmith Togane & V2 Weapons",
  description: "Find the Slayers 2 Forge and Blacksmith Togane, check crafting materials, and follow the other-forge quest into V2 weapon upgrades.",
  keywords: ["slayers 2 forge", "blacksmith togane", "blacksmith togane slayers 2", "where is the forge slayers 2", "slayers 2 v2 weapons"],
  primaryKeyword: "slayers 2 forge",
  secondaryKeywords: ["blacksmith togane", "blacksmith togane slayers 2", "where is the forge slayers 2", "slayers 2 blacksmith", "slayers 2 v2 weapons", "crude iron ingot slayers 2"],
  searchIntent: "Locate Blacksmith Togane, distinguish his village crafting from the later V2 forge, and prepare the recipe-specific materials.",
  priority: "P1",
  navVisible: false,
  factsStatus: "verified",
  wordCountTarget: 1100,
  lastReviewed: "2026-10-03",
  sourceNotes: [
    "September 27 village route and crafting walkthrough: https://nerdschalk.com/project-slayers-2-forge-location-nightfall-gear-and-v2-weapons/",
    "Togane gameplay frame inspected: https://cdn.nerdschalk.com/wp-content/uploads/2026/09/how-to-find-forge-project-slayers-2-step12-102s.jpg",
    "Independent September 24 V2 route: https://techwiser.com/slayers-2-forge-v2-weapons/",
    "Level-labelled quest and V2 crafting footage references: https://allthings.how/slayers-2-how-to-forge-v2-weapons-and-endgame-sets/",
    "Specific counts, currency totals, drop odds and universal material costs omitted. Recipe checking and purchase prioritisation are advice, not hidden game requirements.",
  ],
  hero: {
    heading: "Slayers 2 Forge Guide",
    lead: "Start the Slayers 2 Forge route with Blacksmith Togane in the upper part of Hidden Mist Village, near the Verdant Cliffs. He handles crafting and offers the other-forge quest at level 65. That later route leads to Ouwigahara and the Nichirin Forge used for V2 weapon upgrades. Visit the village blacksmith for his dialogue and crafting board; use the later forge for its own V2 recipe. Before farming or spending, open the exact recipe and check its base weapon, materials and currency rather than treating every forge menu as the same shop.",
  },
  relatedSlugs: ["weapons", "dungeons", "final-selection"],
  sections: [
    {
      id: "quick-answer",
      heading: "Slayers 2 Forge Quick Answer",
      paragraphs: [
        "There are two destinations to distinguish: Togane's village workshop and the later forge reached through his quest. If you want the blacksmith or ordinary crafting dialogue, start in Hidden Mist Village. If you want a V2 reforge, check the other-forge progression and the recipe at the Nichirin Forge.",
        "Make the item name your first checkpoint. A Nightfall crafting request and a V2 katana upgrade do not necessarily use the same ingredients or currency. Read the selected item at the top of the panel, then note the missing requirements before leaving to farm.",
      ],
      table: {
        caption: "Which forge task are you trying to complete?",
        columns: ["Goal", "Starting point", "Check before spending"],
        rows: [
          ["Find the blacksmith", "Hidden Mist Village, upper workshop", "NPC name: Blacksmith Togane."],
          ["Craft village gear", "Togane's crafting board", "The named recipe and its ingredient counters."],
          ["Start the later forge route", "Togane's other-forge dialogue", "Level 65 and the active quest."],
          ["Reforge a V2 weapon", "Nichirin Forge in the Ouwigahara route", "Base weapon, materials and Dungeon Points."],
        ],
      },
    },
    {
      id: "location",
      heading: "Where Is the Forge?",
      paragraphs: [
        "The village forge is in Hidden Mist Village's raised buildings. Use the region name on the map, then look up towards the workshop rather than checking only the lower streets. Togane stands inside beside the forge hearth. Confirm his name when you interact so you know you have reached the crafting NPC.",
        "For the later destination, begin the quest at that workshop first. A video showing a V2 recipe inside Ouwigahara is showing a different stage from a video introducing the village blacksmith. Match the destination to your objective before travelling between the harbor and village.",
      ],
    },
    {
      id: "find-togane",
      heading: "How to Find Blacksmith Togane",
      paragraphs: [
        "The overland approach goes through Bamboo Grove and the Wilderness towards Hidden Mist Village. At the village, use the stairs and raised walkways to reach the upper forge building. Keep the map area and the building in mind; an NPC on a nearby platform may handle a different service.",
      ],
      steps: [
        { heading: "Reach Hidden Mist Village", description: "Locate the village on your map. Use an available travel route or approach through Bamboo Grove and the Wilderness." },
        { heading: "Go to the upper workshop", description: "Follow the village's raised paths and stairs towards the forge building. Look inside near the hearth." },
        { heading: "Confirm Blacksmith Togane", description: "Read the NPC name and open his dialogue. Choose the crafting or quest option that matches the item you came for." },
        { heading: "Read the selected recipe", description: "Note its base item, blueprint if listed, material counters and currency. Keep that list before leaving the workshop." },
      ],
    },
    {
      id: "purpose",
      heading: "What the Forge Is Used For",
      paragraphs: [
        "Togane's menus include crafted equipment and the quest that leads to the other forge. Use the crafting panel to inspect an item before committing resources. A familiar weapon name is not enough: verify the version, the item type and any drawing or blueprint requirement shown for it.",
        "Crafting a new item and refining an existing one are different operations. The village also has Refiner Hagane, so check the NPC and menu title when a walkthrough discusses refinement. Do not assume a refinement material automatically satisfies a crafting ingredient with a similar name.",
      ],
    },
    {
      id: "requirements",
      heading: "Forge Requirements",
      paragraphs: [
        "Level 65 applies to Togane's other-forge quest. It does not describe every item on every crafting board. If you came for that later route, read the level-labelled dialogue and accept the quest before heading to its destination. If you came for a village recipe, inspect that recipe's own requirements.",
        "Prepare a checklist for one craft at a time. Write down the base equipment, any required drawing, each material and the currency type. Mark what you already own. That prevents a nearly complete recipe from being delayed because you spent a shared resource on another item.",
      ],
    },
    {
      id: "materials",
      heading: "Materials Used at the Forge",
      paragraphs: [
        "Later crafting panels can ask for a base weapon, metal materials, Silk Thread and Mythic Refinement Ore. The exact selection belongs to the recipe. Check full item names, not just the icon: an ingot, scraps and refinement ore are different inputs even when they all look like metal resources.",
        "Crude Iron Ingot is associated with the earlier Final Selection crafting route. It is not a universal substitute for the ingredients on a V2 panel. Keep the early ingot route separate from the other-forge quest and read which item the NPC is actually requesting.",
        "Ingredient counters should be read as what you hold versus what the recipe needs. Compare every row before confirming. If a material is missing, decide how to obtain that named material; do not sell or exchange the rest of your inventory simply because the craft button is unavailable.",
      ],
    },
    {
      id: "v2",
      heading: "V2 Weapon Progression",
      paragraphs: [
        "The V2 route uses the base weapon named by the Nichirin Forge recipe and the required materials, alongside Dungeon Points. Open the intended upgrade before collecting a large point balance. Confirm that you have the correct base weapon rather than a different blade from the same general category.",
        "Before the final confirmation, read what the forge says about the base item and refinement. Upgrading equipment can involve consuming an input, so decide whether this is the weapon you intend to use. Check the resulting item's name and inventory entry after crafting rather than assuming a click completed it.",
        "If you are still choosing which weapon to pursue, use the weapon overview first. Return here when you have a specific forge target and want to complete its recipe. That keeps the material budget attached to an actual upgrade rather than an open-ended shopping list.",
      ],
      links: [
        { label: "Weapons guide", slug: "weapons", description: "Choose the equipment target before committing to a forge recipe." },
      ],
    },
    {
      id: "dungeon-relationship",
      heading: "Forge and Dungeon Progression",
      paragraphs: [
        "Ouwigahara supplies the Dungeon Points used in later forging. Treat the dungeon as the resource activity and the forge as the recipe destination. Once you know the upgrade cost on your panel, reserve that amount before spending points on other purchases.",
        "The other-forge quest connects the two systems, but unlocking the route does not mean you already own the ingredients for a weapon. Track access and affordability separately. The dungeon guide covers registering the route and running the activity; this page focuses on turning your materials into the intended craft.",
      ],
      links: [
        { label: "Dungeons guide", slug: "dungeons", description: "Follow the access and point-farming route once Togane gives you the quest." },
      ],
    },
    {
      id: "problems",
      heading: "Common Forge Problems",
      paragraphs: [
        "If the desired recipe is missing, first confirm the destination and the selected tab. Village crafting, later V2 forging and refinement are different screens. Next read any drawing or quest requirement attached to the item. A missing option should not immediately send you farming unrelated materials.",
        "If the other-forge dialogue is blocked, compare your level and active quest with Togane's response. If crafting is blocked, check every material counter and the currency type. These two failures need different fixes; having enough Wen does not answer a recipe that asks for Dungeon Points.",
        "If the menu appears out of date after a change, close it and reopen the correct NPC interaction. Keep a screenshot of the item name and unmet requirement if the problem persists. Use that exact information in a bug report rather than describing every crafting issue as a broken forge.",
      ],
    },
  ],
  faq: [
    { question: "Where is Blacksmith Togane in Slayers 2?", answer: "Start in Hidden Mist Village and reach the upper forge workshop near the Verdant Cliffs. Confirm the Blacksmith Togane name when you interact." },
    { question: "What level opens the other-forge quest?", answer: "Level 65. Speak to Togane and select his other-forge dialogue; that later route connects to Ouwigahara and V2 forging." },
    { question: "Is the village forge the V2 forge?", answer: "They are different stages. Visit the village workshop to speak to Togane and begin the route; inspect V2 upgrades at the later Nichirin Forge." },
    { question: "What materials do V2 weapons need?", answer: "Read the selected recipe for its base weapon, metal materials, Silk Thread, Mythic Refinement Ore and Dungeon Point requirements. Quantities and ingredients belong to the specific upgrade." },
    { question: "Can Crude Iron Ingot replace V2 materials?", answer: "Do not substitute it unless the recipe explicitly lists it. Crude Iron belongs to the earlier Final Selection crafting route; the later forge has its own ingredient list." },
  ],
} satisfies SeoPageDefinition;
