import type { SeoPageDefinition } from "@/config/types";

export const fishingPage = {
  enabled: true,
  slug: "fishing",
  pageType: "guide",
  navLabel: "Fishing",
  title: "Slayers 2 Fishing Guide: Rods, Permit & Legendary Rod",
  description: "Learn Slayers 2 fishing from permit and rod basics to the Legendary Fishing Rod route, with clear steps, verified requirements and practical fishing tips.",
  keywords: ["slayers 2 fishing", "slayers 2 fishing macro", "how to get legendary fishing rod slayers 2", "slayers 2 legendary fishing rod", "slayers 2 fishing rod"],
  primaryKeyword: "slayers 2 fishing",
  secondaryKeywords: ["slayers 2 fishing macro", "how to get legendary fishing rod slayers 2", "slayers 2 legendary fishing rod", "slayers 2 fishing rod"],
  searchIntent: "Unlock Slayers 2 fishing, buy the first rod, and follow the Legendary Fishing Rod route.",
  priority: "P0",
  navVisible: true,
  factsStatus: "verified",
  wordCountTarget: 1100,
  hero: {
    heading: "Slayers 2 Fishing Guide",
    lead: "Slayers 2 fishing opens at level 45 in Mistfall Harbor. Dock Master Sofen starts the permit. Fisherman Jeso sells the first rod. The Legendary Fishing Rod is a later quest, not the first purchase.",
  },
  lastReviewed: "2026-09-26",
  relatedSlugs: ["weapons", "black-market"],
  sections: [
    {
      id: "quick-answer",
      heading: "Slayers 2 Fishing Quick Answer",
      paragraphs: [
        "Hit level 45, talk to Dock Master Sofen at the Mistfall docks, return the permit paperwork he sends you for, and buy the first rod from Fisherman Jeso. Pay the Wen on each dialog. The item you receive is a Fishing Permit, also called a Permit Stamp. That stamp lets Jeso sell rods. It is not a Final Selection item.",
        "Mistfall Docks and Mistfall Harbor are the same waterfront. Jeso stands near Sofen. He is not a second harbor.",
      ],
      table: {
        caption: "Rod line. Shop prices and fish counts are the numbers on the NPC.",
        columns: ["Rod", "How to get it", "What to read in game"],
        rows: [
          ["Basic", "Jeso, after Sofen's permit", "The shop price on his line. Equip this rod for the lure step if the quest names it."],
          ["Rare", "Jeso, traded for Golden Fish", "His trade window. A better daily rod, not the end of the chain."],
          ["Legendary", "Drowned Lure at night, then Isao, then a second spot", "Quest text. Guides that print the card list 3x bite speed, 95% catch chance, and +0.5 fish luck."],
        ],
      },
    },
    {
      id: "unlock-fishing",
      heading: "How to Unlock Fishing",
      paragraphs: [
        "Sofen will not start the errand below level 45. Do the trip on the character you want to fish with. He sends you for paperwork. Guides put those papers on crates by a building across the docks, against the cliff, or in a nearby house. The pins are not identical. Follow his objective marker and bring the papers back.",
        "Bring Wen before the conversation. His dialog shows the permit fee. Jeso's shop shows the rod price after the permit is done. Pay those lines. Bait, when he offers it, is a separate purchase. Wait until the rod is equipped and you have seen a bite.",
      ],
    },
    {
      id: "how-fishing-works",
      heading: "How Fishing Works",
      paragraphs: [
        "Equip the rod, cast at the dock Sofen and Jeso already use, and clear the reel prompt when the bite hits. Stay there until ordinary catches make sense. The legendary chain sends you to named spots later.",
        "Missing the prompt loses the catch. It does not break the rod. Mobile players can change button size and shift lock from the settings on the official experience page. Use a button size you can hit during the reel.",
        "The basic loop gives fish and the materials that rod's catch tier allows. Golden Fish are the trade for the Rare rod at Jeso. Refinement Ore is a crafting item. Spend it when a rod upgrade line asks for it. Night fishing matters for the legendary chain, not for the first dock casts.",
      ],
    },
    {
      id: "legendary-rod",
      heading: "How to Get the Legendary Fishing Rod",
      paragraphs: [
        "The route is the permit, a rod, a night window, the Drowned Lure, and a ghost fisherman named Isao near the red bridge at Mistfall. After Isao, fish a later downstream or ledge spot with the Drowned Lure equipped. That catch is the Legendary Fishing Rod.",
        "Several routes want the basic rod equipped to catch the lure. Keep that rod in your inventory until the lure is caught, even if you already bought the Rare rod. Fish counts differ between guides. Read Isao and Jeso.",
        "Guides that print the Legendary Fishing Rod card list a 3x bite-speed multiplier, a 95% catch chance, and +0.5 fish luck. Cast range is less consistent, so leave it to the tooltip. Enhancing the rod with Refinement Ore is a later prompt. Catching it is the milestone.",
        "Sofen can sell a hint about Isao once you own a better rod. Buy that hint only at the price on his dialog. The routes describe one red bridge with water beside it, and a rock ledge or a spot across from a spout.",
      ],
      steps: [
        { heading: "Finish the permit and equip a rod", description: "Be level 45, turn Sofen's paperwork in, and buy Jeso's basic rod. Equip the rod the lure step names." },
        { heading: "Wait for night at the red bridge", description: "Fish the ledge at the Mistfall red bridge for the Drowned Lure. You are not fishing for the rod itself yet." },
        { heading: "Talk to Isao", description: "Isao is the ghost fisherman at that bridge. Turn in what his dialog asks." },
        { heading: "Fish the second spot with the lure equipped", description: "The later spot is downstream or on a ledge. Equip the Drowned Lure before you cast. The catch is the Legendary Fishing Rod." },
        { heading: "Read the tooltip", description: "Check the rod card for the 3x bite speed, 95% catch chance, and +0.5 fish luck. The tooltip is the card that matters." },
      ],
    },
    {
      id: "fishing-macro",
      heading: "Slayers 2 Fishing Macro",
      paragraphs: [
        "A fishing macro search means players want the cast and reel to run while they are away. This site does not host a macro, a script, an executor, or a download, and it does not link to one. Roblox can suspend accounts that automate gameplay.",
        "Fish the minigame yourself: permit, rod, then the lure chain when you are ready to watch the spot. For Wen or spins without the harbor grind, use the codes page.",
      ],
      links: [
        { label: "Codes", slug: "codes", description: "Active codes, including spin rewards." },
        { label: "Weapons", slug: "weapons", description: "Buy a weapon you can equip before you sink Wen into bait." },
      ],
    },
  ],
  faq: [
    {
      question: "What level is Slayers 2 fishing?",
      answer: "Level 45. Dock Master Sofen at Mistfall Harbor starts the permit. Fisherman Jeso sells the first rod after you turn the paperwork in. Final Selection uses the same level and is a different trip.",
    },
    {
      question: "How do you get the Legendary Fishing Rod in Slayers 2?",
      answer: "Finish the permit, catch the Drowned Lure at night near the red bridge at Mistfall, deal with Isao, then fish the later spot with the lure equipped. Several routes want the basic rod equipped for the lure. Read Isao's dialog for the fish he wants.",
    },
    {
      question: "Is a Slayers 2 fishing macro allowed?",
      answer: "This guide does not provide a macro, and Roblox can suspend automated play. Cast and reel the minigame yourself. The permit and the rod chain above are the manual route.",
    },
    {
      question: "What is the Permit Stamp in Slayers 2?",
      answer: "It is the fishing permit Sofen sends you to collect and return. It lets Jeso sell rods. It is not a stamp for the Final Selection exam.",
    },
    {
      question: "What rods are there in Slayers 2?",
      answer: "Basic from Jeso after the permit, Rare from Jeso's Golden Fish trade, and the Legendary Fishing Rod from the Drowned Lure chain. Pay the shop line he shows. The legendary card in current guides lists 3x bite speed, a 95% catch chance, and +0.5 fish luck.",
    },
  ],
} satisfies SeoPageDefinition;
