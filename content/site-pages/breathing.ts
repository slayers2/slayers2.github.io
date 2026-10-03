import type { SeoPageDefinition } from "@/config/types";

export const breathingPage = {
  enabled: true,
  slug: "breathing-styles",
  pageType: "guide",
  navLabel: "Breathing",
  title: "Slayers 2 Breathing Styles: Trainers, Unlocks & Best Picks",
  description: "Compare Slayers 2 Breathing Styles, trainer and unlock requirements, and practical strengths for progression, PvE and PvP before choosing your build.",
  keywords: ["slayers 2 breathing", "slayers 2 best breathing", "breathing styles slayers 2", "slayers 2 breathing styles", "slayers 2 breathing trainer"],
  primaryKeyword: "slayers 2 breathing",
  secondaryKeywords: ["slayers 2 best breathing", "breathing styles slayers 2", "slayers 2 breathing styles", "slayers 2 breathing trainer"],
  searchIntent: "See the Slayers 2 breathing styles, how trainers unlock them, and how to choose one without a fake tier list.",
  priority: "P0",
  navVisible: true,
  factsStatus: "verified",
  wordCountTarget: 1200,
  hero: {
    heading: "Slayers 2 Breathing Styles",
    lead: "Slayers 2 breathing opens at level 25 on the Slayer path. Eight styles have named trainers. Talking to the trainer does not unlock the style. You finish the quest the dialog starts, and you pay the materials that dialog lists.",
  },
  lastReviewed: "2026-09-26",
  relatedSlugs: ["final-selection", "blood-demon-arts"],
  sections: [
    {
      id: "quick-list",
      heading: "Slayers 2 Breathing Styles Quick List",
      intro: "Eight styles. Level 25. Pay whatever the trainer prompt lists.",
      paragraphs: [
        "Wind's trainer on this list is Saneri. Stone's trainer is Gyorei. Farm the materials on the NPC's own line. Horn, core, and Wen counts change between prompts, so the dialog is the shopping list.",
      ],
      table: {
        caption: "Launch trainers. The marker beats a shortcut if the map shifts.",
        columns: ["Style", "Trainer", "Location", "Level", "Material / Wen", "Notes"],
        rows: [
          ["Flame", "Rengu", "House or roof by the red bridge out of Mistfall", "25", "Trainer prompt", "Often off the ground. A common first trip from Mistfall."],
          ["Insect", "Shinora", "Butterfly Estate, roof or rear building", "25", "Trainer prompt", "Climb the building. The estate shrine also serves Final Selection."],
          ["Stone", "Gyorei", "Lower route from the bear area, temple or shrine side", "25", "Trainer prompt", "Several routes also want Axe and Mace unlocked."],
          ["Thunder", "Zentaro", "High mountain past the bear area", "25", "Trainer prompt", "Wall climb. Fast styles are what duel players ask about."],
          ["Water", "Urokodaki", "Water passage near Bamboo Grove and an island house", "25", "Trainer prompt", "Go through the water. Players use it as a broad PvE kit."],
          ["Wind", "Saneri", "Snow region, a platform or frozen water", "25", "Trainer prompt", "Bring healing. Snow routes mention the cold."],
          ["Sound", "Tengai", "High cliffs in the snow region", "25", "Trainer prompt", "Wall climb, same region as Wind if you can reach both."],
          ["Serpent", "Obari", "Cliffs above the starting side", "25", "Trainer prompt", "A climb from the early hills. Duel players mention the movement."],
        ],
      },
    },
    {
      id: "how-to-unlock",
      heading: "How to Unlock a Breathing Style",
      paragraphs: [
        "Level 25 is the gate the trainer guides agree on. Reaching the cliff at level 20 still leaves you short. Demon-path characters are in a different system. Blood Demon Arts are that system. A breathing trainer is the Slayer desk.",
        "The quest after the first conversation is the actual unlock. Community footage describes drills, parkour, and trainee fights, and not every style uses the same one. If the log names a trainee, that fight is required. Leaving after the handshake is the usual reason a player thinks the style is bugged.",
      ],
      steps: [
        { heading: "Hit level 25 on the Slayer path", description: "Trainer prompts use this level. Do the trip on the character who will keep the style through Final Selection." },
        { heading: "Unlock the movement the route needs", description: "Double jump shows up on almost every approach. Wall climb shows up on Thunder, Sound, and several ledges. Unlock those movement skills before the climb." },
        { heading: "Read the trainer's materials", description: "Horns, cores, Wen, or a weapon requirement such as Axe and Mace for Stone belong to that prompt. Do not farm a universal stack for all eight." },
        { heading: "Finish the training quest", description: "Complete the drill, the parkour, or the trainee fight on the log. The style is yours when the log says the training is done, not when the NPC first spoke." },
        { heading: "Spend a reset only to leave", description: "BREATHRESET is one Breathing Reset from the codes list. Use it when you are abandoning a style, not to sample every trainer in a weekend." },
      ],
    },
    {
      id: "trainers",
      heading: "Breathing Trainers and Requirements",
      paragraphs: [
        "These are search areas. A roof versus a roadside, or a summit versus a lower ledge, is why players walk past a trainer who is ten meters above them.",
        "Flame and Rengu sit by the long red bridge associated with Mistfall. Check the roof of the house on the far side. Insect and Shinora are at Butterfly Estate, and the consistent detail is height: a roof or the rear building, not the medic on the ground floor. The estate also comes up in Final Selection travel, so the shrine unlock there serves both trips.",
        "Stone and Gyorei are on the lower path out of the bear area toward a temple or shrine. His prompt can ask for Axe and Mace before the quest starts. If it does, unlock those weapons first. Thunder and Zentaro are the long vertical route past the bears toward a summit. Wall climb is the skill that route needs.",
        "Water and Urokodaki use a passage near Bamboo Grove, often described as underwater or under an island house. Wind and Saneri are in the snow, on water or a platform. Sound and Tengai are the high cliffs of that same cold region, so the snow trip can cover two trainers if you can climb. Serpent and Obari are up the cliffs on the starting side of the map. Bring healing for the snow. The cold chip is something those routes mention, and a food item from your normal shop is enough planning.",
        "Horn, core, and Wen costs belong to the trainer in front of you. Flame, Water, Wind, and Serpent each ask for their own stack, and some prompts add Wen. Open the trainer, read his line, and farm that.",
      ],
    },
    {
      id: "best-breathing",
      heading: "What Is the Best Breathing in Slayers 2?",
      paragraphs: [
        "There is no official best breathing. The Roblox description does not rank styles. Tier letters on fan sites, including any Thunder-over-Flame ordering, are player opinions from the first week. They are already moving. This section uses three criteria instead of a medal.",
      ],
      subsections: [
        {
          heading: "Best for beginners",
          paragraphs: [
            "The beginner criterion is the trainer you can reach and afford at level 25, with a quest you can finish, and a kit you will still use in Final Selection. Flame comes up often because the bridge route is close to Mistfall and the material line in several guides is the smaller one. That is a travel fact, not a damage fact. If Stone is blocked on Axe and Mace you do not have, it is a bad first pick even if a tier list likes it. If Thunder's climb is still impossible, it is a bad first pick this week.",
          ],
        },
        {
          heading: "Best for PvE",
          paragraphs: [
            "For bosses, the Hand Demon, and the packs inside the exam, use a kit you can land on a large target. Flame is the name boss-farming players keep bringing up. Water is the name players use when they want one style for more than a single boss. Pick the one whose moves you can already hit.",
          ],
        },
        {
          heading: "Best for PvP",
          paragraphs: [
            "The PvP criterion is mobility and whether duel players are actually queuing the style. Fast styles, Thunder especially, are the ones those players name. Serpent and Insect show up when the conversation turns to awkward movement rather than raw range. A week-one ranking is not a balance patch. If your goal is the exam and the story bosses, copy a duelist only if you enjoy that kit and can reach the trainer.",
          ],
        },
      ],
    },
    {
      id: "how-to-choose",
      heading: "How to Choose a Breathing Style",
      paragraphs: [
        "Pick with three checks. Can you stand in front of the trainer today? Can you pay the prompt without skipping the weapon you need for the quest? Will you keep the style through Final Selection, which starts at level 45 and does not require a style but punishes a character with no tools?",
        "Train one style and learn its forms on real targets. Mastery talk in the guides is about using the techniques and spending skill points when a threshold opens. SkillTreeReset on the codes page is the skill-point reset. BREATHRESET is the style reset. They are different items. Resetting skills inside a style you like is not the same decision as throwing the style away.",
        "Switch only when the kit is the problem. A missed trainee fight is not a reason to burn BREATHRESET. A style you cannot stand in PvE or in duels, after you have actually used it, is the reason. You get one reset from that code. A second style means a second farm unless another reset exists later.",
        "If you are on the Demon path, stop. Breathing trainers are the wrong unlock. Read the Blood Demon Arts guide, roll there, and use ARTRESET when you leave an art. Final Selection is the Slayer exam. Doing both systems on one character is a good way to spend two resets and finish neither quest line.",
      ],
      links: [
        { label: "Final Selection", slug: "final-selection", description: "The exam that a finished style makes less brittle." },
        { label: "Blood Demon Arts", slug: "blood-demon-arts", description: "The other path, if the trainer will not teach you." },
      ],
    },
  ],
  faq: [
    {
      question: "What level do you need for breathing in Slayers 2?",
      answer: "Level 25, on the Slayer path. Final Selection is a separate level 45 gate. You can enter the exam without a finished style. You will feel the difference if the fights start before you have forms.",
    },
    {
      question: "How many breathing styles are in Slayers 2?",
      answer: "Eight trainers are the launch list: Flame Rengu, Insect Shinora, Stone Gyorei, Thunder Zentaro, Water Urokodaki, Wind Saneri, Sound Tengai, and Serpent Obari. Each one has a quest after the conversation. The dialog, not a wiki table, lists the materials.",
    },
    {
      question: "What is the best breathing in Slayers 2?",
      answer: "No official best exists. For a first style, take the trainer you can reach and pay for at level 25. For bosses and the exam, players lean toward kits that land on large targets. For duels, they lean toward faster styles such as Thunder. Those are player preferences from the first weeks, not a studio ranking.",
    },
    {
      question: "Where is the Thunder breathing trainer?",
      answer: "Zentaro is on a high mountain route past the bear area. Wall climb is the movement skill those routes require. Level 25 still applies. His material line is on the prompt, and published Wen costs for him do not match, so read it on the spot.",
    },
    {
      question: "How do you reset a breathing style?",
      answer: "BREATHRESET is the code listed on September 26, 2026 for one Breathing Reset. Redeem it from the main menu, then use it when you are leaving a style. It does not pick the next trainer for you, and it is not the skill-tree reset.",
    },
  ],
} satisfies SeoPageDefinition;
