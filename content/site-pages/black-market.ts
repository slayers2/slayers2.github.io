import type { SeoPageDefinition } from "@/config/types";

export const blackMarketPage = {
  enabled: true,
  slug: "black-market",
  pageType: "guide",
  navLabel: "Black Market",
  title: "Slayers 2 Black Market Guide: Locations, Times & Items",
  description: "Find how the Slayers 2 Black Market works, how to locate the Black Marketer, what can appear there and what to check before spending your Wen.",
  keywords: ["black market slayers 2", "black marketer slayers 2", "slayers 2 black market", "black market project slayers 2"],
  primaryKeyword: "black market slayers 2",
  secondaryKeywords: ["black marketer slayers 2", "slayers 2 black market", "black market project slayers 2"],
  searchIntent: "Find the Slayers 2 Black Marketer, know when he appears, and decide what is worth the Wen.",
  priority: "P0",
  navVisible: true,
  factsStatus: "verified",
  wordCountTarget: 1000,
  hero: {
    heading: "Slayers 2 Black Market Guide",
    lead: "The Black Market is the Black Marketer, a traveling NPC. He is on an even-hour cycle about every two hours, at one of about ten spots. Move when the notice says he has slipped into town, and pay the Wen in his window.",
  },
  lastReviewed: "2026-09-26",
  relatedSlugs: ["weapons", "fishing"],
  sections: [
    {
      id: "quick-answer",
      heading: "Slayers 2 Black Market Quick Answer",
      table: {
        caption: "Search the notice, then the closest cluster. Stock changes every visit.",
        columns: ["Fact", "What to do"],
        rows: [
          ["Spawn", "About every two hours, on even hours, one spot at a time"],
          ["Locations", "About ten, across Butterfly Estate, Windy Peak, Hidden Mist Village, Mistfall Harbor, and the snow settlement"],
          ["How to identify him", "The notice that the black marketer has slipped into town"],
          ["What you spend", "Wen. The price is the number in his window."],
          ["What changes", "The live spot and the shelf. A screenshot is that visit only."],
        ],
      },
      paragraphs: [
        "No shared level requirement shows up. If you can reach the area, you can look. A paid locator exists in the experience store. You do not need it. Use the notice and the clusters below.",
      ],
    },
    {
      id: "how-it-works",
      heading: "How the Black Market Works",
      paragraphs: [
        "Players say Black Market and Black Marketer for the same NPC. He is not a building that stays open. Project Slayers 2 is the old search name for this same vendor in Slayers 2.",
        "His stock changes between appearances. Location routes that opened the shop on camera show accessories, weapons, outfits, and materials, and they do not show the same shelf twice. The Akatsuki Straw Hat is the exclusive those routes name. It is a reason to make the trip. It is not a promise that the hat is on the shelf tonight.",
      ],
    },
    {
      id: "spawn-times",
      heading: "Spawn Times",
      paragraphs: [
        "The cycle guides repeat is every two hours, on even hours, for a limited window. They list 2:00, 4:00, 6:00, and 8:00 as the pattern. They do not attach a time zone a second source confirms. The notice is the clock. An odd hour is a gap.",
        "Stay on the server that posted the message. A fresh server can be on a different point in the cycle, or the window there may already be over. Park near a cluster if you want a head start, then move when the text appears.",
      ],
    },
    {
      id: "location-route",
      heading: "Location Route",
      paragraphs: [
        "Pin lists are close and not identical. One route adds an edge by the Final Selection plains that another list skips. Search the cluster, not a single rock. The snow settlement is spelled Iceveil, Icevell, or Iceville depending on the page. Check the houses.",
      ],
      subsections: [
        {
          heading: "Search clusters",
          paragraphs: ["Sweep the group you can reach before the window ends."],
          bullets: [
            "Butterfly Estate: a corner inside the fence, the ledge past the south fence, the far side of a bridge, and a pit to the east. This cluster has the most spots.",
            "Windy Peak: the left side of the Akaza cave, a narrow crevice, the edge of the beginner village, and behind a house that takes a wall climb.",
            "Hidden Mist Village: by Yagane, often indoors in the wooden shop rather than on the road.",
            "Mistfall Harbor: under the bridge or under the pier, not on the road above the water.",
            "Snow settlement: behind or beside a house. Check the buildings first.",
          ],
        },
      ],
      steps: [
        { heading: "Read the notice", description: "The line that the black marketer has slipped into town starts the window. A clock without that text is not a spawn." },
        { heading: "Pick the closest cluster", description: "Butterfly Estate and Windy Peak hold several spots. Hidden Mist, Mistfall, and the snow houses are single areas. Go to the group you can reach." },
        { heading: "Check the hidden layer", description: "Look under bridges, inside shops, over fences, and in pits. The road through town is the part players already walked." },
        { heading: "Read the price, then buy or leave", description: "His inventory is this visit. Buy only if you can equip the item or the material is already on a recipe. Leave when the window is short." },
      ],
    },
    {
      id: "what-it-sells",
      heading: "What It Sells",
      paragraphs: [
        "Expect a mixed shelf: a weapon, a cosmetic, a material, or an accessory. The straw hat is the named exclusive. Nothing in the location routes fixes one stock list per region.",
        "Materials are the quiet value. If your forge or your trainer dialog is already asking for something he is holding, that stack beats a weapon for the other path. Outfits and the hat are fine when the practical bills are paid.",
      ],
    },
    {
      id: "worth-buying",
      heading: "What Is Worth Buying",
      paragraphs: [
        "Buy a weapon you can equip, or a material the next forge recipe or trainer dialog already names. The price has to leave you enough Wen for the bills you are about to hit: a breathing trainer, Sofen's fishing permit and Jeso's rod around level 45, and the bandage inside Final Selection.",
        "Skip gear for the other path. Skip the hat when a named material is unaffordable because of it. The Black Marketer returns on a later notice. The trainer in front of you will not discount himself because you bought a cosmetic.",
      ],
      links: [
        { label: "Weapons", slug: "weapons", description: "Which blades and fans are worth a rotating price." },
        { label: "Fishing", slug: "fishing", description: "The permit and the first rod can cost more than a hat." },
      ],
    },
    {
      id: "not-appearing",
      heading: "Why It Is Not Appearing",
      paragraphs: [
        "You are searching on an odd hour, or after the notice has already expired. Arriving at a spot with no message on screen wastes the window.",
        "You checked the road and not the layer under it. Mistfall under the bridge, the Hidden Mist shop by Yagane, the Butterfly pit, and the cave left of Akaza are easy to miss from the main path. Sweep the closest cluster again before you cross the map.",
        "You changed servers after the message. The announcement belonged to the server you left. You are also in the wrong game if the route uses a vendor path from the first Project Slayers. Stay inside the five clusters above.",
      ],
    },
  ],
  faq: [
    {
      question: "What time does the Black Market spawn in Slayers 2?",
      answer: "About every two hours, on even hours, with one spot active. Guides list 2:00, 4:00, 6:00, and 8:00 and do not agree on a time zone. Wait for the notice that the black marketer has slipped into town, then search.",
    },
    {
      question: "Where is the Black Marketer in Slayers 2?",
      answer: "About ten spots across Butterfly Estate, Windy Peak, Hidden Mist Village near Yagane, Mistfall Harbor under the bridge or pier, and the snow settlement's houses. Sweep the cluster you are closest to, including indoors, under bridges, and in pits.",
    },
    {
      question: "What does the Black Market sell?",
      answer: "A rotating mix of weapons, accessories, outfits, and materials. The Akatsuki Straw Hat is the exclusive location routes name. The shelf in a screenshot is that visit. Read the window.",
    },
    {
      question: "Is the Black Market worth it?",
      answer: "Yes when the item is a weapon you can equip or a material your next recipe already asks for, and you can pay without skipping a trainer, the fishing permit, or the exam bandage. No when it is the other path's gear or a cosmetic that empties your Wen.",
    },
    {
      question: "Why can't I find the Black Marketer?",
      answer: "The usual causes are an odd hour, a notice that already ended, a server hop after the message, or a search that stays on the road. Check the hidden spots in the nearest cluster. You do not need the paid locator.",
    },
  ],
} satisfies SeoPageDefinition;
