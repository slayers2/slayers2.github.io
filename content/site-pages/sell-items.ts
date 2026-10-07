import type { SeoPageDefinition } from "@/config/types";

export const sellItemsPage = {
  enabled: true,
  slug: "sell-items",
  pageType: "guide",
  navLabel: "Sell Items",
  title: "Where to Sell Items in Slayers 2: Ginzo & Selling Guide",
  description:
    "Find where to sell items in Slayers 2, how to reach Ginzo, what must be unlocked first, which items can be sold and what to do with fish or spare loot.",
  keywords: [
    "where to sell items in slayers 2",
    "where to sell in slayers 2",
    "slayers 2 sell items",
    "ginzo slayers 2",
    "slayers 2 ginzo",
  ],
  primaryKeyword: "where to sell items in slayers 2",
  secondaryKeywords: [
    "where to sell in slayers 2",
    "where to sell stuff in slayers 2",
    "slayers 2 sell items",
    "slayers 2 selling",
    "where to sell fish in slayers 2",
    "ginzo slayers 2",
    "slayers 2 ginzo",
  ],
  searchIntent: "Find Ginzo, finish the Jewelry Box quest, and sell spare loot for Wen.",
  priority: "P1",
  navVisible: true,
  factsStatus: "verified",
  wordCountTarget: 1200,
  lastReviewed: "2026-10-07",
  sourceNotes: [
    "September 24 Ginzo unlock: level 45, Jewelry Box from Hidden Mist Village, stall in Mistfall Harbor: https://allthings.how/project-slayers-2-how-to-unlock-ginzo-the-seller/",
    "October 1 NPC roundup places Ginzo in Mistfall Harbor and the Jewelry Box in the Village Hidden in the Mist: https://allthings.how/slayers-2-every-npc-location-and-what-they-do/",
    "Coin items sold to Ginzo, with the live offer as the price: https://sportsrant.indiatimes.com/gaming/slayers-2-best-wen-farm-raid-chest-coin-locations-ginzo-requirements-and-selling-guide/articleshow/134453264.html",
    "October 5, 2026 item list: Ginzo buys fish, and Golden Fish is one of them. Keep the first ones for the Rare rod: https://progameguides.com/roblox/all-items-in-slayers-2-how-to-get-them/",
    "Ginzo sell grid includes fish. Prices have moved between builds, so the current offer is the Wen value: https://slayers2guide.wiki/selling",
    "Pouch prices in guides moved from 750 to 1,000 Wen across September patches, so this page does not freeze a sale price. A conflicting Dreamfall Hollow placement is not used; the later NPC roundup and the majority of routes keep the stall in Mistfall Harbor.",
  ],
  hero: {
    heading: "Where to Sell Items in Slayers 2",
    lead: "Where to sell items in Slayers 2 is Ginzo's stall in Mistfall Harbor, near the shrine if you already have that teleport. He is the buyer. The Black Marketer is not. His sell menu opens at level 45 after you return his Jewelry Box from Hidden Mist Village. Carry the box back without dropping it, talk to him again, and sell from the menu. Coin pouches and the other coin items are the usual sale. Ginzo can also buy fish, but keep the Golden Fish you still need for Fisherman Jeso's Rare Fishing Rod trade. Use Ginzo's current sell offer for the live Wen value.",
  },
  relatedSlugs: ["black-market", "fishing", "golden-fish"],
  sections: [
    {
      id: "quick-answer",
      heading: "Where to Sell Items — Quick Answer",
      paragraphs: [
        "Where to sell in Slayers 2, and where to sell stuff in Slayers 2, is the same stall. Reach level 45, finish the Jewelry Box quest, speak to Ginzo again, and sell what his menu lists. The offer on that screen is the Wen you get.",
        "Slayers 2 Ginzo buys. The Black Marketer sells. If the NPC is offering you hats and weapons, you are in the wrong conversation.",
      ],
      table: {
        caption: "Selling at a glance. Prices stay on Ginzo's offer.",
        columns: ["Question", "Answer"],
        rows: [
          ["Seller", "Ginzo"],
          ["Where", "Stall in Mistfall Harbor, near the shrine"],
          ["Unlock", "Level 45, then return his Jewelry Box"],
          ["Box", "His house in Hidden Mist Village. Follow the quest marker."],
          ["Usual sales", "Coin, Coin Stack, Coin Pile, Coin Pouch, and other loot his menu lists"],
          ["Fish", "Ginzo can buy fish; keep the Golden Fish needed for Jeso's Rare Rod trade before selling extras."],
        ],
      },
    },
    {
      id: "find-ginzo",
      heading: "How to Find Ginzo",
      paragraphs: [
        "Ginzo stands at a wooden stall in Mistfall Harbor, a short walk from the shrine once that teleport is yours. Read his name before you talk. A dock worker is not the seller. Some routes place the stall toward Forgotten Ruins and still in the harbor. Use the region and the name. After you accept the quest, the marker points at Hidden Mist Village. That walk is the box, not a second Ginzo.",
      ],
    },
    {
      id: "unlock",
      heading: "How to Unlock Selling",
      paragraphs: [
        "Slayers 2 selling stays locked until you are level 45 and Ginzo has the Jewelry Box back. Below 45 the quest line does not appear. At 45, take the dialog that names the jewelry box. Guides quote it as finding the box at level 45.",
        "The box is in his house in Hidden Mist Village. Follow the marker. Routes put a glowing box inside, near a shelf. Carry it home equipped. Players who unequip it or drop it have to collect it again. Hand it to Ginzo, then talk once more. That second talk opens the sell menu.",
      ],
      subsections: [
        {
          heading: "Jewelry Box quest",
          paragraphs: [
            "The Jewelry Box quest is the unlock. Take the box from the house, bring it back still in hand, and the next conversation is the shop. Coin items farmed before level 45 can wait in the bag until the menu exists.",
          ],
        },
      ],
    },
    {
      id: "how-to-sell",
      heading: "How to Sell Items",
      paragraphs: [
        "After the box is in, talk to Ginzo and choose the sell line. Routes call it selling the selection, or a stock and sell choice. Use the words on his dialog. The screen lists what he will take.",
        "Select the stack, set the quantity if the row has one, and read the offer. It states the Wen, and some offers also list crafting materials. Confirm only when that summary matches what you meant to lose.",
      ],
      steps: [
        {
          heading: "Reach level 45",
          description: "Ginzo does not open the jewelry box quest below that level.",
        },
        {
          heading: "Accept the Jewelry Box quest",
          description: "Talk to Ginzo at his Mistfall Harbor stall and take the line that names the jewelry box.",
        },
        {
          heading: "Return the box equipped",
          description: "Follow the marker to his house in Hidden Mist Village and carry the box back without swapping it off.",
        },
        {
          heading: "Open the sell menu",
          description: "Talk to Ginzo again. The quest dialog should be gone and the selling inventory should be there.",
        },
        {
          heading: "Confirm the offer",
          description: "Select the items, set the quantity, read the Wen on the summary, and confirm the sale.",
        },
      ],
    },
    {
      id: "what-sells",
      heading: "What Items Can Be Sold",
      paragraphs: [
        "Ginzo buys what his menu lists. The items routes name are Coin, Coin Stack, Coin Pile, and Coin Pouch. They come from Sealed Caches and other chests, and a Coin Pouch is sold, not opened for a weapon. If another spare row is on the list, he is buying that row. If a weapon is missing, he is not buying it.",
        "Some sales pay Wen and also return materials such as refinement ore or silk thread. That bonus is whatever the offer prints. Guide prices for a Coin Pouch moved in September, from 750 Wen to 1,000 Wen in those writeups. Sell from today's offer. These routes do not apply a 2x Wen pass to his menu.",
      ],
    },
    {
      id: "sell-fish",
      heading: "Where to Sell Fish",
      paragraphs: [
        "Fish can be sold from Ginzo's sell menu, and Golden Fish is on that list too. Before you have the Rare Fishing Rod, keep the Golden Fish Fisherman Jeso asks for. Sell extra Golden Fish, and other spare fish, only after that trade is covered.",
        "If a patch moves the price, Ginzo's current sell offer is the Wen value. A fishing NPC who asks for a named fish is a quest turn-in, not a second buyer. The fishing guide covers the permit and rods. The Golden Fish guide covers the Rare rod trade.",
      ],
      links: [
        {
          label: "Golden Fish",
          slug: "golden-fish",
          description: "How the Rare rod trade uses Golden Fish.",
        },
        {
          label: "Fishing",
          slug: "fishing",
          description: "Permit, rods, and the harbor loop.",
        },
      ],
    },
    {
      id: "worth-selling",
      heading: "What Is Worth Selling",
      paragraphs: [
        "Sell coin items first. They have no equip slot. A full bag of them is why players look up where to sell items in Slayers 2. Back out if the offer is a material you still need for a craft. Coins can wait in the bag until the menu unlocks.",
      ],
    },
    {
      id: "keep",
      heading: "What You Should Keep",
      paragraphs: [
        "Keep the weapon you fight with, a Spear or Tanto you still want, and every Sealed Cache until you open it. Keep anything a quest or forge recipe still names, including refinement ore if the craft is short. Keep the Golden Fish Jeso's Rare rod trade still needs, and sell the extras to Ginzo after that.",
      ],
    },
    {
      id: "not-available",
      heading: "Why Ginzo or Selling May Not Be Available",
      paragraphs: [
        "The menu is missing for a short list of reasons. You are under level 45. You never accepted the Jewelry Box quest. The box despawned because it left your hand on the walk back. Or you are talking to the Black Marketer and waiting for a sell tab he does not have.",
        "Read Ginzo's dialog at the harbor stall. A quest line means the box is still outstanding. A sell line means you are in. If the box was lost, follow the marker and carry the new one without a gear swap. An item that will not sell is absent from his list. Select a coin pouch. If the pouch sells, the seller works.",
      ],
      links: [
        {
          label: "Black Market",
          slug: "black-market",
          description: "The Black Marketer, who sells to you. Not Ginzo.",
        },
      ],
    },
  ],
  faq: [
    {
      question: "Where do you sell items in Slayers 2?",
      answer:
        "At Ginzo's stall in Mistfall Harbor. Where to sell items in Slayers 2 is that buyer. The Black Marketer is a different NPC, and you spend Wen at his shop.",
    },
    {
      question: "Who is Ginzo in Slayers 2?",
      answer:
        "Ginzo is the seller in Mistfall Harbor. After level 45 and his Jewelry Box quest, his dialog opens a menu that buys coin items and other loot he lists.",
    },
    {
      question: "How do you unlock selling?",
      answer:
        "Reach level 45, accept the Jewelry Box quest, bring the box back from his house in Hidden Mist Village without dropping it, and talk to him again. The next dialog is the sell menu.",
    },
    {
      question: "Where is the Jewelry Box?",
      answer:
        "In Ginzo's house in Hidden Mist Village. Take the quest first so the marker leads you there. Routes show a glowing box inside the house. Carry it back equipped.",
    },
    {
      question: "Can you sell fish to Ginzo?",
      answer:
        "Yes. Ginzo's sell menu buys fish, and Golden Fish can be sold there too. Keep the Golden Fish Fisherman Jeso needs for the Rare Fishing Rod before you sell extras. The Wen is the number on his current offer.",
    },
    {
      question: "Why can't I sell to Ginzo?",
      answer:
        "You are under level 45, the Jewelry Box quest is unfinished, the box was lost on the way back, or you are talking to the Black Marketer. A missing item row means he does not buy that item.",
    },
  ],
} satisfies SeoPageDefinition;
