import type { SeoPageDefinition } from "@/config/types";

export const finalSelectionPage = {
  enabled: true,
  slug: "final-selection",
  pageType: "guide",
  navLabel: "Final Selection",
  title: "Slayers 2 Final Selection Guide: Requirements & Tips",
  description: "Prepare for Slayers 2 Final Selection with verified requirements, entry steps, trial tips, common failure points and what to do after completing it.",
  keywords: ["slayers 2 final selection", "final selection slayers 2", "slayers 2 final selection guide"],
  primaryKeyword: "slayers 2 final selection",
  secondaryKeywords: ["final selection slayers 2", "slayers 2 final selection guide"],
  searchIntent: "Clear Slayers 2 Final Selection: requirements, how to enter, how the trial works, and what you get after.",
  priority: "P0",
  navVisible: true,
  factsStatus: "verified",
  wordCountTarget: 1200,
  hero: {
    heading: "Slayers 2 Final Selection Guide",
    lead: "Slayers 2 Final Selection opens at level 45 on an even-hour cycle. Be at the gate before the countdown ends. The trial is a quest chain that ends with the Hand Demon, and the payout guides agree on a Slayer uniform, a Crude Iron Ingot, and a Kasugai Crow.",
  },
  lastReviewed: "2026-09-26",
  relatedSlugs: ["breathing-styles", "dungeons"],
  sections: [
    {
      id: "quick-answer",
      heading: "Final Selection Quick Answer",
      table: {
        caption: "Enter on the countdown. About level 60 is comfort for solo players, not a second gate.",
        columns: ["Step", "What to do"],
        rows: [
          ["Level", "45 on the Slayer path. Breathing from level 25 helps and is not required."],
          ["Where", "Butterfly Estate shrine, then south to the plains. From Mistfall Harbor, go toward the estate and continue south."],
          ["Gate", "Every two hours on even hours. Be inside before the countdown ends."],
          ["Trial", "Errands and small fights, Lost and a key, the parkour stage, mountain checks, then the Hand Demon."],
          ["Reward", "Slayer uniform, Crude Iron Ingot, and Kasugai Crow. Rank progress follows in the Slayer menu."],
        ],
      },
      paragraphs: [
        "Stay on the human Slayer path. This exam is not the Blood Demon Art unlock. The fishing Permit Stamp is Sofen's harbor errand, not this trial. Solo players often wait until the high 50s or about 60 because the Hand Demon punishes mistakes. You can still enter at 45.",
      ],
    },
    {
      id: "requirements",
      heading: "Final Selection Requirements",
      paragraphs: [
        "Level 45 and an open gate are the entry line. Double jump and wall climb still fail runs because the chain includes parkour and cliff checks. Bring healing. The chain is several fights, not one boss. Keep Wen for a purchase inside.",
      ],
      table: {
        caption: "Entry requirements. Comfort numbers are labeled as comfort.",
        columns: ["Requirement", "Detail", "How to use it"],
        rows: [
          ["Level", "45 to enter", "Required. About 60 is a solo comfort tip, not a gate."],
          ["Clock", "Every two hours, even hours", "Be inside before the countdown ends. No time zone is published here."],
          ["Path", "Slayer / human exam", "Demon arts are a different system."],
          ["Movement", "Double jump and wall climb", "Needed for parkour and the mountain checks."],
          ["Combat kit", "A weapon you can use. Breathing if you have it.", "Breathing is prep, not an extra lock."],
          ["Wen", "The chain includes buying a bandage", "Keep some Wen. Do not lock a single price."],
          ["Light", "A lantern helps in the fog", "Optional if you can already see the markers."],
        ],
      },
    },
    {
      id: "how-to-start",
      heading: "How to Start Final Selection",
      paragraphs: [
        "Shrines are the travel layer. Hold the prompt under the torii, or buy the shrine from the map. The confirmation shows the price. Bamboo Grove is 10,000 Wen. Butterfly Estate is the shrine this route uses. Buy that one if the prompt is affordable, because the plains sit south of it.",
        "Arrive early. An odd hour is a closed mountain in the way the cycle is described. Standing on the plaza after the countdown hits zero means waiting for the next even hour. The gate is not a menu button in Windy Peak.",
      ],
      steps: [
        { heading: "Reach level 45 on the Slayer path", description: "Confirm the level on the character you are taking in. A breathing style from level 25 is recommended and not required." },
        { heading: "Bring movement, a weapon, and some Wen", description: "Double jump, wall climb, a weapon you can equip, and enough Wen for a bandage purchase. A lantern is useful in the fog." },
        { heading: "Travel to the plains before the window", description: "Butterfly Estate shrine, then south, or the road from Mistfall Harbor toward the estate and on to the gate. Be there before the countdown ends." },
        { heading: "Enter while the gate is open", description: "Even hours, every two hours, using the in-game countdown rather than a converted clock. Accept the first quest as soon as you are inside." },
        { heading: "Follow the log to the end", description: "Clear each objective and any hand-in after the Hand Demon. Leaving when the boss dies is how a clear fails to record." },
      ],
    },
    {
      id: "how-the-trial-works",
      heading: "How the Trial Works",
      paragraphs: [
        "The exam is one continuous chain, not a single arena. Follow the quest log if a name on your screen differs from the names below.",
        "Early tasks are errands and small fights. Rem asks for an apple, a banana, and grapes. Vael sends you after lesser demons. Klien's step is a lost katana, then a bandage purchase and treatment for Rika. The next NPC sends you to defeat Lost and take a key.",
        "The key opens the parkour inside the exam. That parkour is part of Final Selection, not the Ouwigahara dungeon. After it, the chain moves to mountain checkpoints, a rescue or capture step, and then the Hand Demon. Accept the boss objective before you fight so the kill is tied to the quest.",
        "Leave the Hand Demon's slam zones and keep stamina for movement. Surrounding demons can block your damage if the fight runs long. Use breathing forms in the openings if you have them. Do not empty the bar on the first slam.",
        "A forge step can still be active after the boss, tied to Yagane. The Crude Iron Ingot may already be in your inventory. Turn it in if the log still has a forge line.",
      ],
    },
    {
      id: "how-to-prepare",
      heading: "How to Prepare",
      paragraphs: [
        "Do the breathing trainer you can reach before you queue the exam, if you are staying a Slayer. Level 25 is ten levels earlier than the gate. Forms give you something to press during the Hand Demon besides a basic swing. If the trainer's material cost would leave you unable to buy the bandage, pay the trainer only if you can still hold Wen for the exam.",
        "Practice double jump and wall climb on the way to Butterfly Estate, not for the first time inside the parkour. The mountain checkpoints are the same skills. A missed jump in the dungeon is a failed objective, and the exam is on a timer window you already spent.",
        "Eat or carry healing you already use in the open world. The chain has repeated fights before the boss. A lantern helps in the fog. If the quest marker is already clear, the lantern is optional.",
        "A squad is not required. A solo attempt at 45 is allowed. A solo attempt at 45 with no movement skills and no healing is the run that fails.",
      ],
    },
    {
      id: "why-players-fail",
      heading: "Common Reasons Players Fail",
      paragraphs: [
        "They arrive on an odd hour or after the countdown. The gate is not open just because they are level 45. They then wander the plains and assume the exam is broken.",
        "They fight the Hand Demon without the objective. The boss can be present while the quest still wants an earlier NPC. A kill that is not the active step does not pay the uniform. Watch the log, including a hand-in if one is still listed after the body drops.",
        "They skip the key and the parkour. Defeat Lost, take the key, and clear that interior. Skipping it stops the chain in the middle.",
        "They cannot make the jumps. Double jump and wall climb are the prep items for a reason. Food items for the early NPC and the bandage for the injured swordsman are easy to ignore until the marker will not move. Buy the bandage when the step says so.",
        "They leave the Slayer path. A Demon art does not substitute for this exam. If the log is offering demon work instead of the gate, you are in the other system. The breathing page and the Blood Demon Arts page split that choice.",
      ],
    },
    {
      id: "after-the-exam",
      heading: "What Happens After Final Selection",
      paragraphs: [
        "The clear pays a Slayer uniform, a Crude Iron Ingot, and a Kasugai Crow. Rank progress is in the Slayer menu. Read the rank you actually received.",
        "The ingot goes to a forge. Blacksmith Togane in Hidden Mist Village is the forge NPC in the Slayers 2 trainer guide. Nightfall weapons, including the Nightfall Katana, are later recipes that want schematics. They are not the exam drop. Turn the ingot in if a forge step is still on the log, then read the recipe list before you farm a second boss for a blade the forge was going to sell you as a craft.",
        "The crow and the uniform start the Slayer rank work. Use the crow missions your menu lists. The parkour you just finished was one stage of this exam. Ouwigahara and open-world raid chests are a different page.",
      ],
      links: [
        { label: "Breathing Styles", slug: "breathing-styles", description: "Train a style at level 25 before you rely on it in the exam." },
        { label: "Dungeons", slug: "dungeons", description: "Ouwigahara is the level 65 dungeon. This exam is not that run." },
      ],
    },
  ],
  faq: [
    {
      question: "What level is Final Selection in Slayers 2?",
      answer: "Level 45 is the minimum. Solo players often wait until the high 50s or about 60 so the Hand Demon is less punishing. That higher number is not a second requirement. Breathing at level 25 is prep, not a key.",
    },
    {
      question: "How often does Final Selection open?",
      answer: "Every two hours, on even hours. Be at the gate before the countdown ends. Use the countdown in the game.",
    },
    {
      question: "How do you start Final Selection?",
      answer: "Travel from the Butterfly Estate shrine south toward the plains, or from Mistfall Harbor toward the estate and then south. Enter during an open even-hour window on a level 45 Slayer. Accept the quest chain inside. The fishing permit is a different NPC at the harbor.",
    },
    {
      question: "What are the Final Selection rewards?",
      answer: "A Slayer uniform, a Crude Iron Ingot, and a Kasugai Crow are the rewards the clear guides name, with rank progress in the Slayer menu afterward. The ingot feeds the forge at Togane in Hidden Mist Village. Nightfall Katana is a later recipe, not this payout.",
    },
    {
      question: "Why did the Hand Demon not count?",
      answer: "The kill has to be the active objective. Accept the boss step, then finish any hand-in that stays on the log after the fight. Clear the key, the parkour, and the mountain checks first.",
    },
  ],
} satisfies SeoPageDefinition;
