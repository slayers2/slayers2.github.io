import type { SeoPageDefinition } from "@/config/types";

export const dungeonsPage = {
  enabled: true,
  slug: "dungeons",
  pageType: "guide",
  navLabel: "Dungeons",
  title: "Slayers 2 Dungeons Guide: How to Unlock & Progress",
  description: "Learn how Slayers 2 dungeons work, how to access them, what to prepare before a run, how progression works and which rewards are worth targeting.",
  keywords: ["dungeon slayers 2", "slayers 2 dungeon", "slayers 2 dungeons", "slayers 2 dungeon guide"],
  primaryKeyword: "dungeon slayers 2",
  secondaryKeywords: ["slayers 2 dungeon", "slayers 2 dungeons", "slayers 2 dungeon guide"],
  searchIntent: "Unlock the Slayers 2 dungeon, register the portal, and spend Dungeon Points on the later weapon forge.",
  priority: "P0",
  navVisible: true,
  factsStatus: "verified",
  wordCountTarget: 1100,
  hero: {
    heading: "Slayers 2 Dungeons Guide",
    lead: "The Slayers 2 dungeon is Ouwigahara. Reach level 65, take Blacksmith Togane's other-forge quest in Hidden Mist Village, and register the purple portal once. After that, queue the run from the hub and spend Dungeon Points on the later weapon forge.",
  },
  lastReviewed: "2026-09-26",
  relatedSlugs: ["weapons", "final-selection"],
  sections: [
    {
      id: "quick-answer",
      heading: "Slayers 2 Dungeon Quick Answer",
      paragraphs: [
        "Ouwigahara is the endgame dungeon players are queueing. The gate is level 65. The unlock is a second forge quest from Blacksmith Togane in Hidden Mist Village. Follow that quest to a purple portal, interact with it once, and the hub menu gains Ouwigahara Normal beside the other modes.",
        "A clear pays Dungeon Points. Those points are what the later V2 weapon forge spends, and the same shop line also sells chests, refinement ore, and mastery. Final Selection is a separate level 45 exam, not this dungeon. An open-world raid chest is a chest, not an Ouwigahara run.",
      ],
      table: {
        caption: "The dungeon in one pass. Read the forge screen for the exact point cost.",
        columns: ["Question", "Answer"],
        rows: [
          ["Dungeon", "Ouwigahara"],
          ["Level", "65"],
          ["Quest", "Blacksmith Togane, Hidden Mist Village, his other forge"],
          ["Portal", "Purple rift. Register it once, then queue from the hub."],
          ["Why you run it", "Dungeon Points for the V2 forge, plus the dungeon shop"],
        ],
      },
    },
    {
      id: "how-to-unlock",
      heading: "How to Unlock the Dungeon",
      paragraphs: [
        "Level 65 is the point where Togane offers the forge line that sends you to Ouwigahara. Talk to him in Hidden Mist Village and take the option for his other forge. The wording on the button can differ by a few words. Press the line that names that forge, or the line marked level 65.",
        "If you are already past 65 and the option is missing, you are not in the dialogue state the quest expects. Finish the forge lines he does offer, leave the menu, and speak to him again. The portal does not appear as a free map icon before that quest.",
      ],
      steps: [
        { heading: "Reach level 65", description: "The other-forge option is the level 65 line at Blacksmith Togane. Final Selection's level 45 gate does not open this dungeon." },
        { heading: "Talk to Togane in Hidden Mist Village", description: "He is the forge NPC. Take the option for his other forge. Use the label on his menu." },
        { heading: "Follow the quest to the purple portal", description: "The quest marker is the route. Interact with the rift once so it registers." },
        { heading: "Queue from the hub", description: "After registration, Ouwigahara Normal shows in the hub menu next to the other modes. You do not walk the portal path for every later run." },
      ],
    },
    {
      id: "togane-forge",
      heading: "Blacksmith Togane and the Second Forge Quest",
      paragraphs: [
        "Togane handles more than one forge job. The early work, including the Crude Iron Ingot from Final Selection, is not the dungeon unlock. The dungeon starts when he offers the second forge, the one players call his other forge.",
        "Accept that quest before you go looking for a rift. The quest is what flags the portal. A character who can already see Hidden Mist Village, but has never taken the forge line, is still locked out of the queue.",
        "Nightfall and the other later recipes stay on his forge list. Ouwigahara is how you earn the points those later recipes spend. Open the recipe after you have a run banked, and pay the cost the screen shows.",
      ],
    },
    {
      id: "portal",
      heading: "How to Reach the Dungeon Portal",
      paragraphs: [
        "The first visit is a walk. After you accept Togane's forge quest, follow the objective to a purple portal and interact with it. That single interaction registers Ouwigahara. The hub then lists Ouwigahara Normal with the other modes, including PvP and Zenith.",
        "Use the quest marker for that first walk. Later runs start from the hub menu, not from a second hike. If the rift will not register, go back to Togane and confirm the other-forge quest is the active step.",
      ],
    },
    {
      id: "how-runs-work",
      heading: "How Dungeon Runs Work",
      paragraphs: [
        "Queue Ouwigahara and clear the floors. Between floors you pick a card. The card changes the rest of that run, including how many points the clear is worth. Stay for the floors you can actually finish. A wiped run is a weak way to fill the point bank.",
        "Any Breathing Style or Blood Demon Art can enter. Bring the kit you already use, plus healing items. A character who only has basic attacks is undergeared for the floors people are farming. The style or art does not change the door. It changes whether you live long enough to pick the good cards.",
      ],
    },
    {
      id: "cards",
      heading: "Dungeon Cards and Point Multipliers",
      paragraphs: [
        "Take cards that raise your points for the rest of the run first. After those, farming routes take Damage, then HP. Lucky Draw is the multiplier name those routes keep picking when it shows up.",
        "The numbers on a card belong to that draw. Read the three choices on screen and take the one that raises the score you are about to spend. A damage card is the right pick when no point card is offered and the next floors are still dangerous. An HP card is the safety pick after damage is already covered.",
      ],
    },
    {
      id: "points",
      heading: "Dungeon Points and Rewards",
      paragraphs: [
        "Dungeon Points are the payout. Current forge routes treat about 90,000 points from one run as the score that covers the V2 cost they are using. Pay the number on the forge screen. If your run finished under that, queue again before you spend the pile on something else.",
        "The same points buy chests, refinement ore, and mastery from the dungeon shop. Buy the line that matches the craft you already opened. A chest is worth it when you are not one purchase away from the weapon recipe. Ore and mastery are worth it when the recipe or the skill you are using asks for them.",
      ],
    },
    {
      id: "v2-weapons",
      heading: "V2 Weapons and Dungeon Progression",
      paragraphs: [
        "V2 is the later forge, not the reward from Final Selection. The exam pays a Slayer uniform, a Crude Iron Ingot, and a Kasugai Crow. Ouwigahara points are what the second forge spends on the later set.",
        "Run the dungeon until the recipe you opened is paid. Nightfall and the other named forge weapons still belong to Togane's list. The weapons guide covers which blade to chase. This page is the point route that feeds that forge.",
      ],
      links: [
        { label: "Weapons", slug: "weapons", description: "Nightfall, War Fans, and what to forge first." },
        { label: "Final Selection", slug: "final-selection", description: "The level 45 exam. It is not Ouwigahara." },
      ],
    },
    {
      id: "preparation",
      heading: "Solo vs Group Preparation",
      paragraphs: [
        "You can queue alone or with other players. The floors are the same either way. Solo is a clean way to learn the card picks. A group is the faster clear when everyone already has a style or an art and brings healing.",
        "Do not enter on starter swings and expect the cards to carry the run. Finish a Breathing Style or a Blood Demon Art first, and bring the healing you already use in the open world. If you are still inside Final Selection, clear that exam before you chase this portal. It is an earlier activity, and it does not register Ouwigahara.",
      ],
    },
    {
      id: "mistakes",
      heading: "Common Dungeon Mistakes",
      paragraphs: [
        "Calling Final Selection the dungeon. That exam is level 45, with its own gate and its own rewards. Ouwigahara is the level 65 run.",
        "Opening a raid chest and treating it as a dungeon clear. Loot the chest if you want the item. It does not register the portal and it does not pay Dungeon Points.",
        "Searching the map for the rift before Togane's other-forge quest is active. The quest is the unlock. The portal is the last step of that quest.",
        "Walking back to the rift after it is already registered. Use the hub queue.",
        "Spending the point bank before you read the forge cost. The V2 line is the reason most players are in the dungeon. Confirm that price, then decide whether a chest is the better buy.",
        "Following a queue name from the first game. Ouwigahara in Slayers 2 is this portal and this hub entry. An old map name will not open it.",
      ],
    },
  ],
  faq: [
    {
      question: "What level is the Slayers 2 dungeon?",
      answer: "Level 65. Ouwigahara opens after you take Blacksmith Togane's other-forge quest in Hidden Mist Village. Final Selection at level 45 is a different activity.",
    },
    {
      question: "How do you unlock the dungeon in Slayers 2?",
      answer: "Talk to Blacksmith Togane at level 65, take the option for his other forge, follow the quest to the purple portal, and interact with it once. Ouwigahara Normal then appears in the hub menu.",
    },
    {
      question: "Where is the Ouwigahara portal?",
      answer: "At the end of Togane's other-forge quest. It is a purple rift. Register it once. Later runs start from the hub, in the same menu as the other modes.",
    },
    {
      question: "What are Dungeon Points used for?",
      answer: "The later V2 weapon forge, plus chests, refinement ore, and mastery on the dungeon shop. Routes this week treat about 90,000 points in one run as the score for the V2 cost they are using. Pay the number on the forge screen.",
    },
    {
      question: "Is Final Selection the Slayers 2 dungeon?",
      answer: "No. Final Selection is the level 45 Slayer exam. The dungeon players mean by a Slayers 2 dungeon search is Ouwigahara, the level 65 run unlocked through Togane.",
    },
  ],
} satisfies SeoPageDefinition;
