import type { SeoPageDefinition } from "@/config/types";

export const codesPage = {
  enabled: true,
  slug: "codes",
  pageType: "codes",
  navLabel: "Codes",
  title: "Slayers 2 Codes (September 2026) & How to Redeem",
  description: "Find current Slayers 2 codes, how to redeem them, and what each reward does. Updated for the latest Roblox build with source-checked code status.",
  keywords: ["slayers 2 codes", "slayers 2 code", "project slayers 2 codes", "slayers 2 roblox codes"],
  primaryKeyword: "slayers 2 codes",
  secondaryKeywords: ["slayers 2 code", "project slayers 2 codes", "slayers 2 roblox codes"],
  searchIntent: "Redeem the Slayers 2 codes that are still active, and see which reward each one pays.",
  priority: "P0",
  navVisible: true,
  factsStatus: "verified",
  wordCountTarget: 900,
  hero: {
    heading: "Slayers 2 Codes",
    lead: "Last checked September 26, 2026. Five Slayers 2 codes are active. Release26 is disputed and may have expired. Redeem from the code field on the main menu.",
  },
  lastReviewed: "2026-09-26",
  relatedSlugs: ["final-selection", "breathing-styles"],
  sections: [
    {
      id: "working-codes",
      heading: "Working Slayers 2 Codes",
      intro: "Last checked September 26, 2026. Copy the code exactly.",
      paragraphs: [
        "Try SkillTreeReset first. If that string is rejected, submit SKILLTREERESET once. Spins are the roll currency. BREATHRESET is one Breathing Reset. ARTRESET is one Evil Art Reset, the reset for a Blood Demon Art.",
      ],
      table: {
        caption: "Active codes. Last checked September 26, 2026.",
        columns: ["Code", "Reward", "Status"],
        rows: [
          ["ANIM4L", "50 Spins and 5 Ores", "Active"],
          ["BREATHRESET", "1 Breathing Reset", "Active"],
          ["ARTRESET", "1 Evil Art Reset", "Active"],
          ["SPINS50", "50 Spins", "Active"],
          ["SkillTreeReset", "Skill tree reset. If rejected, try SKILLTREERESET.", "Active"],
        ],
      },
    },
    {
      id: "release26",
      heading: "Release26",
      paragraphs: [
        "Release26 is listed for 30 Spins, 100 Wen, and 1 Refinement Ore. Same-day lists do not agree on whether it still pays. Try it once. If the game rejects it, stop and use the active table above.",
      ],
      table: {
        caption: "Check this code in game. Do not treat it as a confirmed active code.",
        columns: ["Code", "Reward", "Status"],
        rows: [
          ["Release26", "30 Spins, 100 Wen, 1 Refinement Ore", "Disputed — may have expired"],
        ],
      },
    },
    {
      id: "how-to-redeem",
      heading: "How to Redeem Slayers 2 Codes",
      paragraphs: [
        "The code field sits on the main menu, along the bottom, after Slayers 2 has loaded. Join the Ouw Productions community before you redeem, then reopen the experience if a code does nothing or the field never appears. Release26 is the code most often blocked by a missing membership.",
      ],
      steps: [
        { heading: "Open the official experience", description: "Launch Slayers 2 from https://www.roblox.com/games/16205713724/Slayers-2 and wait until the main menu is on screen." },
        { heading: "Join the studio community", description: "Join https://www.roblox.com/communities/12851171/Ouw-Productions, then reopen the experience so the membership is on the session." },
        { heading: "Paste one code", description: "Use the code box along the bottom of the main menu. No spaces, and no codes from the older Project Slayers game." },
        { heading: "Redeem and read the result", description: "Press the redeem control. A success line names the reward. If the field is missing, rejoin after the community step and look again." },
        { heading: "Retry the skill reset only once", description: "Use SkillTreeReset first. If that exact string is rejected, submit SKILLTREERESET once." },
      ],
    },
    {
      id: "why-codes-fail",
      heading: "Why a Slayers 2 Code May Not Work",
      paragraphs: [
        "An extra space, a swapped character, or a code from the first Project Slayers game will be rejected. That older game has its own list. A code already redeemed on the account will not pay twice.",
        "Expired names fail even when an old screenshot still shows a reward. Release26 fails when the lists are right that it has expired, and it also fails when the account is not in the Ouw Productions community. ANIM4L is easy to mistype. Use the letters and the digit in the table.",
      ],
    },
    {
      id: "expired-codes",
      heading: "Expired Codes",
      paragraphs: [
        "These names are expired as of September 26, 2026. Do not redeem them expecting a payout.",
      ],
      table: {
        caption: "Expired Slayers 2 codes. Last checked September 26, 2026.",
        columns: ["Code", "Status"],
        rows: [
          ["READTHECHAPTERS", "Expired"],
          ["REWRITEFATE", "Expired"],
          ["EVILARTSPINS", "Expired"],
          ["POINTSRESET", "Expired"],
          ["SORRYFORSHUTDOWN", "Expired"],
          ["WEBNOVEL", "Expired"],
          ["FINALDRAFT", "Expired"],
          ["BEYONDTHEWALL", "Expired"],
        ],
      },
    },
    {
      id: "where-rewards-go",
      heading: "Where the Rewards Matter",
      paragraphs: [
        "BREATHRESET is the item you spend when you leave a Breathing Style. ARTRESET is the Evil Art Reset for a Blood Demon Art. Neither code picks the next style or the next art. Spend the reset after you have used the kit, not as a sample of every trainer.",
        "Spins from ANIM4L and SPINS50 go to the roll menus already in your build. If Release26 still redeems, its Refinement Ore is a crafting material for a recipe that asks for one. Final Selection does not ask for a code.",
      ],
      links: [
        { label: "Breathing Styles", slug: "breathing-styles", description: "Where a Breathing Reset is spent." },
        { label: "Blood Demon Arts", slug: "blood-demon-arts", description: "Where an Evil Art Reset is spent." },
      ],
    },
    {
      id: "how-we-check",
      heading: "How We Check New Codes",
      paragraphs: [
        "Last checked September 26, 2026. ANIM4L, BREATHRESET, ARTRESET, SPINS50, and SkillTreeReset are the codes that still line up as active. Release26 sits on its own row because current lists disagree.",
        "Rewards on this page are spins, resets, ores, and Wen. A code moves to the expired table when it stops redeeming, and a new code is added only after the same date check.",
      ],
    },
  ],
  faq: [
    {
      question: "What are the newest Slayers 2 codes?",
      answer: "On September 26, 2026 the newest active code is ANIM4L, for 50 Spins and 5 Ores. The same check still has BREATHRESET, ARTRESET, SPINS50, and SkillTreeReset. Release26 is disputed and may have expired.",
    },
    {
      question: "How do I redeem codes in Slayers 2?",
      answer: "Load Slayers 2 to the main menu, paste one code into the field along the bottom, and press redeem. Join the Ouw Productions community first, then reopen the game if the field is missing or the code does nothing.",
    },
    {
      question: "Why is my Slayers 2 code not working?",
      answer: "Check the spelling, including SkillTreeReset versus SKILLTREERESET, and check that you have not already redeemed it. Expired names on this page will fail. Project Slayers codes belong to the older game. Release26 can fail because it may have expired, or because the account is not in the Ouw Productions community.",
    },
    {
      question: "Do I need to join a Roblox group before redeeming?",
      answer: "Join the Ouw Productions community, then reopen Slayers 2 if a code is rejected or the box is missing. The community page is https://www.roblox.com/communities/12851171/Ouw-Productions. Release26 is the code most often tied to that membership.",
    },
    {
      question: "Is Release26 still working?",
      answer: "It is disputed as of September 26, 2026. Some lists still print 30 Spins, 100 Wen, and 1 Refinement Ore. Another current list marks it expired. Try it once. If the game rejects it, use the five active codes instead.",
    },
  ],
} satisfies SeoPageDefinition;
