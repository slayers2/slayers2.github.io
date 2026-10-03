import type { SeoPageDefinition } from "@/config/types";

export const bdaPage = {
  enabled: true,
  slug: "blood-demon-arts",
  pageType: "guide",
  navLabel: "BDA",
  title: "Slayers 2 Blood Demon Arts (BDA): Unlocks & Shockwave",
  description: "Learn how Slayers 2 Blood Demon Arts work, how BDA unlocks are obtained, what current arts do, and where Shockwave fits into Demon builds.",
  keywords: ["slayers 2 bda", "slayers 2 blood demon arts", "slayers 2 demon art", "slayers 2 shockwave", "shockwave slayers 2"],
  primaryKeyword: "slayers 2 bda",
  secondaryKeywords: ["slayers 2 blood demon arts", "slayers 2 demon art", "slayers 2 shockwave", "shockwave slayers 2"],
  searchIntent: "Understand Slayers 2 Blood Demon Arts, how a BDA unlocks, and what Shockwave means for a Demon build.",
  priority: "P0",
  navVisible: true,
  factsStatus: "verified",
  wordCountTarget: 1100,
  hero: {
    heading: "Slayers 2 Blood Demon Arts (BDA)",
    lead: "Blood Demon Arts are the Demon combat system in Slayers 2. Players shorten that to BDA or Demon Art. The code reward calls the reset an Evil Art. Shockwave is the art name those players are hunting. You confirm it on your move list after a roll, then you finish that art's quest.",
  },
  lastReviewed: "2026-09-26",
  relatedSlugs: ["breathing-styles", "final-selection"],
  sections: [
    {
      id: "quick-answer",
      heading: "Slayers 2 BDA Quick Answer",
      paragraphs: [
        "Demon arts are a different path from Breathing and from Final Selection. The exam is the Slayer route. A breathing trainer checks the Slayer path. If your quest log is already on the Demon side, stay there and roll an art instead of climbing to Zentaro or Rengu.",
        "The unlock is three steps: take the demon quest, roll an art, then finish the quest that belongs to the art you rolled. The roll does not print a chance. ARTRESET is one Evil Art Reset. It lets you leave an art. It does not choose the next one.",
      ],
      table: {
        caption: "The art on your move list is the one you have. Shockwave is the name players search.",
        columns: ["BDA", "How obtained", "Role", "Major requirement", "Notes"],
        rows: [
          ["Rolled art", "Demon quest, then a roll, then that art's quest", "The moves you were given", "Demon path, not a breathing trainer", "Finish the quest before you judge the kit."],
          ["Shockwave", "A roll result, not a village trainer", "Keep it when the moves match your fights", "The quest attached to that roll", "Routes through the first game's villages are the wrong map."],
        ],
      },
    },
    {
      id: "how-bda-works",
      heading: "How Blood Demon Arts Work",
      paragraphs: [
        "A Blood Demon Art is the kit your Demon uses the way a Slayer uses breathing forms. The first time the name appears in a code list it may say Evil Art. That is the same family of reset. Later menus may say Demon Art or BDA. Search all three and you are still in this system.",
        "The art you roll is the art you have. Read the move list and finish that art's quest. Spins from ANIM4L and SPINS50 buy more rolls. They do not select Shockwave. Keep a reset in reserve before you burn a pile of spins on a kit you have not tested.",
        "Demon weapons, including the War Fans players search for, are the gear question beside the art. An art does not equip a fan by itself. The weapons guide covers why the fan source is disputed. Read the source line before you buy a weapon your art cannot support, and do not buy a Slayer katana you cannot hold.",
      ],
    },
    {
      id: "how-to-unlock",
      heading: "How to Unlock a BDA",
      paragraphs: [
        "The order is the useful part, because players skip the middle. They roll, see a name, and never start the quest attached to it. The art is not finished at the roll. It is finished when that quest is off the log. Some arts will ask you to travel, fight, or turn in a material. The text of the art you rolled is the assignment. A guide for a different art will send you to the wrong NPC.",
        "You can be locked into a bad roll if you have no Evil Art Reset. That is the real cost. ARTRESET is one. Use it when the art's quest is something you will not finish, or when the moves are a kit you have tested and dislike. Do not reset because a tier list from the first weekend called a different name stronger.",
      ],
      steps: [
        { heading: "Take the Demon path quest", description: "Follow the demon quest log. Final Selection and the breathing trainers are the Slayer route. If a trainer refuses you, you are probably on this path already." },
        { heading: "Roll an art", description: "Use the spin or roll control your Demon menu shows. The result name is your art. Write it down before you close the window." },
        { heading: "Open that art's quest", description: "The follow-up quest belongs to the art you received. Complete its steps. A quest guide for a different art does not transfer." },
        { heading: "Read the move text", description: "Range, a slam, a dash, or a zone will be described on the moves you were given. Practice those moves on a normal target before you take them into a crowd." },
        { heading: "Reset only to leave", description: "Redeem ARTRESET if you need one Evil Art Reset. Spend it to drop the art, then roll again. The code does not upgrade Shockwave or any other name." },
      ],
    },
    {
      id: "current-arts",
      heading: "Current Blood Demon Arts",
      paragraphs: [
        "The current art is the one on your character. If the move list names it, finish its quest and learn the range. If the list does not name it, you do not have it.",
        "Judge an art with four questions after the quest is done. Can you hit the content you are actually playing, which might be a large boss or a single duelist? Can you finish the art's own quest with the gear you have? Do the moves need a weapon you have not earned? Do you have a reset if the answer to the first question is no?",
        "Boss farmers want moves that connect on a large body. Duel players want movement they can land on a person. Keep the art that matches the fights you are actually taking.",
        "A reset is scarcer than a spin bundle. Fifty spins and one Evil Art Reset are not equal. Spins buy attempts. The reset buys an exit. If you are still on your first art and the quest is unfinished, finish the quest before you decide the art is bad. An unfinished quest feels weak because the moves are not fully in your hands yet.",
      ],
    },
    {
      id: "shockwave",
      heading: "Shockwave in Slayers 2",
      paragraphs: [
        "Shockwave is the Blood Demon Art players type into search when they want a specific Demon kit. Treat it as a named result of the roll, not as a trainer you can walk to. If the roll grants Shockwave, the move list will say so. Read those move descriptions in the game. They tell you the range and the kind of hit. A copied damage value from a pre-release page does not.",
        "Older Shockwave pages send people to villages, NPCs, and numbers from the first Project Slayers. That map is the wrong game. Slayers 2 does not inherit that village route just because the art name survived in the community's vocabulary. If a guide mentions the first game's dungeon or a boss from that map as the Shockwave unlock, it is the wrong document.",
        "Where Shockwave fits is the same criterion as any other art. It is worth keeping when you rolled it, you can finish its quest, and the moves match the fights you are taking. It is worth a reset when you have used it and it does not. It is not worth a stack of spins you cannot replace if this is your only roll and you have not read the moves yet.",
        "Demon builds that pair an art with War Fans still have to solve the fan source separately. Shockwave does not print a fan into your inventory. Get a weapon your Demon can equip, then practice the art's moves with that weapon. The Black Market sometimes stocks Demon gear. The price in that window is the price, and the stock rotates.",
      ],
      links: [
        { label: "Breathing Styles", slug: "breathing-styles", description: "The Slayer kit, if you are not on the Demon path." },
        { label: "Final Selection", slug: "final-selection", description: "The Slayer exam. It is not the BDA unlock." },
      ],
    },
    {
      id: "choosing-a-bda",
      heading: "Choosing a BDA",
      paragraphs: [
        "Choose after the roll, not before it. You do not pick Shockwave off a menu the way you pick Flame by walking to Rengu. You accept a random result and then decide whether to keep it. The decision gets better if you still have ARTRESET and worse if you do not.",
        "Keep an art that you can use on your next real fight. A boss farmer wants moves that connect on a large body. A duel player wants movement they can actually land on a person. If you do not know which of those you play, finish the art quest and run both kinds of fight once before you reset. One evening is cheaper than a code you have already redeemed.",
        "Leave an art that blocks the path you care about. If you wanted the Slayer exam and a breathing style, a Demon roll was the wrong path to start. Read the quest log. If it still offers the Slayer route, you may not be locked. If it does not, finish the art quest you have instead of climbing to a trainer who will refuse you.",
        "Codes help at the edges. ARTRESET is the exit. Spin codes are attempts. Neither code is a map to Shockwave. Final Selection rewards are Slayer rewards. They do not include an art. Fishing does not include an art. Spend your session on the roll and the art quest, then go back to weapons only for a piece the Demon can hold.",
      ],
    },
  ],
  faq: [
    {
      question: "What does BDA mean in Slayers 2?",
      answer: "BDA means Blood Demon Arts. Players also say Demon Art. The September 26 code list calls the reset an Evil Art. All three names are the Demon kit. Breathing Styles are the Slayer kit and use a different reset.",
    },
    {
      question: "How do you get a Blood Demon Art?",
      answer: "Follow the demon quest, roll an art, and finish the quest for the art you received. The roll is not the last step. Odds are not listed here. ARTRESET is one Evil Art Reset if you need to leave the result and roll again.",
    },
    {
      question: "How do you get Shockwave in Slayers 2?",
      answer: "Shockwave is a roll result, not a trainer on the map. If your move list names it, finish that art's quest and read the move text. Routes that send you through the first game's villages are the wrong map.",
    },
    {
      question: "Can you use breathing and a BDA together?",
      answer: "They are different paths. Breathing trainers start at level 25 on the Slayer side. Final Selection is the Slayer exam. Blood Demon Arts follow the Demon quest and a roll. If a trainer will not teach you, check which path the log has you on before you spend a reset.",
    },
    {
      question: "What does ARTRESET do?",
      answer: "The code ARTRESET is listed for one Evil Art Reset as of September 26, 2026. It is the item you use to leave a Blood Demon Art. It does not grant Shockwave, it does not reset breathing, and it does not refund the spins you already used.",
    },
  ],
} satisfies SeoPageDefinition;
