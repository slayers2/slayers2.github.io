import type { SeoPageDefinition } from "@/config/types";

export const raidChestsPage = {
  enabled: true,
  slug: "raid-chests",
  pageType: "guide",
  navLabel: "Raid Chests",
  title: "Slayers 2 Raid Chests Guide: Raids, Rewards & Unlocks",
  description:
    "Learn how Slayers 2 raids work, how to unlock them, what Raid Chests can reward, how tiers differ and what to prepare before farming raids.",
  keywords: [
    "slayers 2 raid chests",
    "slayers 2 raids",
    "how to do raids in slayers 2",
    "slayers 2 raid guide",
    "slayers 2 raid chest",
  ],
  primaryKeyword: "slayers 2 raid chests",
  secondaryKeywords: [
    "slayers 2 raids",
    "how to do raids in slayers 2",
    "how to unlock raids in slayers 2",
    "slayers 2 raid guide",
    "slayers 2 raid chest",
    "sealed cache slayers 2",
  ],
  searchIntent: "Start Slayers 2 raids, clear guarded raid chests, and open the right Sealed Cache tier.",
  priority: "P0",
  navVisible: true,
  factsStatus: "verified",
  wordCountTarget: 1200,
  lastReviewed: "2026-10-07",
  sourceNotes: [
    "Open-world raid chest versus dungeon portal, tier by region: https://slayers2game.wiki/guides/raid-chests/",
    "September 16 weapon routes tie Spear to Tier 2 and Tanto to Tier 3 snow chests: https://allthings.how/slayers-2-how-to-get-every-slayer-weapon/",
    "September 23 Iceveil Tier 3 cache loop and cold prep: https://allthings.how/project-slayers-2-best-way-to-farm-sealed-cache-t3-in-iceveil-valley/",
    "September 25 Tanto route: clear the guarded Tier 3 chest, then open the Sealed Cache from inventory: https://allthings.how/slayers-2-how-to-get-the-tanto-knife-from-sealed-caches/",
    "Exact drop percentages and a single landmark map disagree across writeups, so this page keeps the tier label and the Archives screen as the check.",
  ],
  hero: {
    heading: "Slayers 2 Raid Chests Guide",
    lead: "Slayers 2 raid chests are open-world fights on a guarded chest. You start a raid by defeating the enemies around that chest. You do not queue it from the Ouwigahara hub, and the clear does not register the dungeon portal. The payout is often a Sealed Cache with a tier on the item. Early regions pay materials and coin items. Butterfly Mansion routes are the ones tied to the Spear. Snow routes are the ones tied to the Tanto. Open the cache from your inventory and read the tier before you farm the wrong region.",
  },
  relatedSlugs: ["dungeons", "weapons", "forge"],
  sections: [
    {
      id: "quick-answer",
      heading: "Slayers 2 Raid Chests Quick Answer",
      paragraphs: [
        "Clear the pack on a Slayers 2 raid chest, including a captain if one is standing there, then take the chest or the Sealed Cache. The tier on that cache is the loot table. A Tier 1 cache from an early circuit is not a snow-region Tier 3 cache.",
        "Slayers 2 raids are not the dungeon. Ouwigahara is a queued run with its own unlock. Loot the world chest for the cache. It does not pay Dungeon Points.",
      ],
      table: {
        caption: "Raid chest tiers players are farming. Confirm the label on the cache.",
        columns: ["Cache", "Where routes look", "Why players open it"],
        rows: [
          ["Sealed Cache T1", "Earlier regions and starter circuits", "Materials and coin items. Not the Spear or the Tanto."],
          ["Sealed Cache T2", "Butterfly Mansion and Butterfly Estate routes", "The Spear. The cache should read T2."],
          ["Sealed Cache T3", "Snow regions, including Snow Village and Iceveil Valley", "The Tanto. Some snow routes also name the Scythe. The cache should read T3."],
        ],
      },
    },
    {
      id: "unlock",
      heading: "How to Unlock Raids",
      paragraphs: [
        "How to unlock raids in Slayers 2 is not Blacksmith Togane's level 65 forge quest. World raids turn on when you can reach a guarded chest and live through the fight. There is no hub button named Raid. If you are searching a menu, look at the chest in the world instead.",
        "Landmark lists disagree by a town or two. One route says a starter village for Tier 1, another says Bamboo Grove. Snow Village, Iceveil Valley, and a snow island all show up for Tier 3. The printed tier is the check. A cache that says T1 is a T1 farm, whatever the nearby sign says.",
      ],
    },
    {
      id: "start",
      heading: "How to Start a Raid",
      paragraphs: [
        "How to do raids in Slayers 2 is a short loop. Pick the region for the tier, find the chest with hostiles on it, kill that pack, and claim the reward. A colored aura can mark the chest. The guards are the reliable sign. A chest with nobody fighting you is not the raid you walked there for.",
        "Leave once the cache is in your bag. A captain still standing means the chest stays locked. Clear that guard, then interact.",
      ],
      steps: [
        {
          heading: "Choose the region for the tier",
          description: "Early circuits for T1 materials and coins. Butterfly Mansion routes for T2. Snow regions for T3.",
        },
        {
          heading: "Find the guarded chest",
          description: "Look for hostile NPCs on a chest. An aura can mark it. The guards are the check.",
        },
        {
          heading: "Defeat the pack",
          description: "Kill the guards, including a captain if one is present. The chest stays locked until that fight ends.",
        },
        {
          heading: "Take the reward",
          description: "Open the chest on the spot or pick up the Sealed Cache it awards.",
        },
        {
          heading: "Open the cache from inventory",
          description: "The tier roll happens when the Sealed Cache opens. Read the tier in the item name first.",
        },
      ],
    },
    {
      id: "how-chests-work",
      heading: "How Raid Chests Work",
      paragraphs: [
        "Each Slayers 2 raid chest is one clear. Routes name Cache Lancers or a captain on the higher chests. Empty that ring, then take the loot. The world chest ends the raid. The Sealed Cache in your bag, marked T1, T2, or T3, is the second click, and that click rolls the weapon and the coins. Bring the kit you already win fights with, plus healing. The style does not change the tier. The region does.",
      ],
    },
    {
      id: "tiers",
      heading: "Raid Chest Tiers",
      paragraphs: [
        "Raid chest tiers follow the place you cleared, not a luck roll on an end screen. Sealed Cache T1 is the early farm for materials and coin items. Sealed Cache T2 is the Butterfly Mansion and Butterfly Estate farm, and the Spear is the weapon those routes name. Sealed Cache T3 is the snow farm, and the Tanto is the weapon those routes name. A snow route also puts the Scythe on that high tier.",
        "Read the Archives row for the cache in your bag when you want the current list.",
      ],
    },
    {
      id: "rewards",
      heading: "Raid Rewards",
      paragraphs: [
        "Slayers 2 raid chests pay weapons, coin items, materials, and utility drops. The Spear is the Tier 2 Butterfly reward. The Tanto is the Tier 3 snow reward. The Scythe shows up on those high-tier lists too. Other weapons and forge crafts stay on the weapons guide.",
        "Coin, Coin Stack, Coin Pile, and Coin Pouch are sale goods. The Wen is the number on the sell screen. Frozen Heart is the cache drop players spend on the Yeti. If a forge recipe names a material in the same pile, check that recipe before you vendor it.",
      ],
      links: [
        {
          label: "Weapons",
          slug: "weapons",
          description: "Where each weapon comes from, including raid weapons.",
        },
        {
          label: "Forge",
          slug: "forge",
          description: "Togane's crafting and the later V2 forge. A different reward loop.",
        },
      ],
    },
    {
      id: "sealed-cache",
      heading: "Sealed Cache",
      paragraphs: [
        "A Sealed Cache is the bag item a raid chest pays. Open Sealed Cache T1, T2, or T3 after the fight. The weapon claim happens on that open.",
        "A full bag is how players lose it. Make room before the next pack. Open T3 for the Tanto, T2 for the Spear, and T1 for materials and coins.",
      ],
    },
    {
      id: "preparation",
      heading: "Best Preparation for Raids",
      paragraphs: [
        "Healing matters more than a weapon you cannot swing yet. A captain on a Tier 3 chest is a real fight. Snow tiers add cold. Iceveil routes use the Emberheart Lantern from the Yeti and a campfire to top up warmth. If that lantern is not in your bag, stay on a tier you can clear. Butterfly is the Spear trip, snow is the Tanto trip, and early circuits are the coin trip.",
      ],
    },
    {
      id: "versus-dungeons",
      heading: "Raid Chests vs Dungeons",
      paragraphs: [
        "Slayers 2 raids are the guarded chests and their Sealed Caches. The dungeon is Ouwigahara. It opens at level 65 through Blacksmith Togane's other-forge quest, you register a purple portal once, and clears pay Dungeon Points. A raid chest does not register that portal, and a dungeon queue does not change a snow chest's tier. Use the dungeon guide for the point bank. Stay here for the cache.",
      ],
      links: [
        {
          label: "Dungeons",
          slug: "dungeons",
          description: "Ouwigahara unlock, cards, and Dungeon Points.",
        },
      ],
    },
    {
      id: "mistakes",
      heading: "Common Raid Mistakes",
      paragraphs: [
        "A Slayers 2 raid chest is not an Ouwigahara clear, and starter chests will not roll the Tanto. A closed Sealed Cache, a full bag, or a snow fight you start while already freezing all make a clear look empty. Open the cache, and farm a tier you can finish.",
      ],
    },
  ],
  faq: [
    {
      question: "How do raids work in Slayers 2?",
      answer:
        "Find a guarded raid chest, defeat the enemies on it, and claim the chest or the Sealed Cache. Open that cache from your inventory. The tier printed on it is the loot table.",
    },
    {
      question: "How do you unlock raids in Slayers 2?",
      answer:
        "World raids are not locked behind the Ouwigahara quest. You start one by clearing a guarded chest. Higher tiers sit in later regions. The gate is surviving that region, not a separate raid menu.",
    },
    {
      question: "What is a Sealed Cache in Slayers 2?",
      answer:
        "It is the tiered item a raid chest puts in your inventory. Sealed Cache T1, T2, and T3 open from the bag. Weapon and coin rolls happen on that open.",
    },
    {
      question: "Which raid chest is used for the Tanto?",
      answer:
        "Tier 3 caches from snow regions, including Snow Village and Iceveil Valley routes. Confirm the cache says T3. Tier 1 caches are the wrong farm for that weapon.",
    },
    {
      question: "Are Slayers 2 raid chests the same as dungeons?",
      answer:
        "No. Slayers 2 raid chests are open-world guarded chests. The dungeon is Ouwigahara, unlocked through Blacksmith Togane at level 65, and it pays Dungeon Points.",
    },
    {
      question: "What should you do with raid coin drops?",
      answer:
        "Coin, Coin Stack, Coin Pile, and Coin Pouch are sale items. Keep sealed caches until you open them, and keep any material a forge recipe still names. The Wen a coin pays is the number on the sell offer.",
    },
  ],
} satisfies SeoPageDefinition;
