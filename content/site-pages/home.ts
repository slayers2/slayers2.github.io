import type { HomePageDefinition } from "@/config/types";

export const homePage = {
  enabled: true,
  slug: "",
  pageType: "home",
  title: "Slayers 2 Wiki: Codes, Fishing, Weapons & Guides",
  description: "Slayers 2 Wiki with current codes, fishing, weapons, Black Market, Breathing Styles, Blood Demon Arts, Final Selection and dungeon guides for Roblox players.",
  keywords: ["slayers 2 wiki", "slayers 2", "slayers 2 guide", "slayers 2 roblox", "project slayers 2"],
  primaryKeyword: "slayers 2 wiki",
  secondaryKeywords: ["slayers 2", "slayers 2 guide", "slayers 2 roblox", "project slayers 2"],
  searchIntent: "Find the current Slayers 2 codes, systems, and the guide that matches the job in front of you.",
  priority: "P0",
  navVisible: true,
  factsStatus: "verified",
  wordCountTarget: 1600,
  hero: {
    eyebrow: "Roblox RPG",
    heading: "Slayers 2 Wiki",
    lead: "Slayers 2 is the live Roblox RPG from Ouw Productions.",
    supportingText: "This Slayers 2 wiki is the short route to codes, fishing, weapons, the Black Market, Breathing Styles, Blood Demon Arts, Final Selection, and dungeons.",
    primaryLink: { label: "Slayers 2 codes", slug: "codes", description: "Active codes and the redeem steps." },
    secondaryLink: { label: "Play on Roblox", url: "https://www.roblox.com/games/16205713724/Slayers-2" },
  },
  screenshots: [
    { src: "/images/slayers-2-cover.webp", alt: "Slayers 2 artwork", caption: "Slayers 2" },
  ],
  lastReviewed: "2026-09-26",
  sections: [
    {
      id: "start-here",
      heading: "Start Here",
      intro: "Pick the job you are stuck on. Each card is a separate guide.",
      paragraphs: [
        "New characters start in Windy Peak. Redeem codes from the main menu before you spend the Wen you earn on the first quests. Breathing training opens at level 25. Fishing and Final Selection both name level 45, and they are different trips.",
      ],
      links: [
        { label: "Codes", slug: "codes", description: "Active codes, rewards, and the redeem field." },
        { label: "Fishing", slug: "fishing", description: "Level 45 permit, rods, and the Legendary Fishing Rod." },
        { label: "Weapons", slug: "weapons", description: "Shop katana, Nightfall, and War Fans." },
        { label: "Black Market", slug: "black-market", description: "Even-hour notice, clusters, and what to buy." },
        { label: "Breathing Styles", slug: "breathing-styles", description: "Eight trainers, level 25, and how a style unlocks." },
        { label: "Blood Demon Arts", slug: "blood-demon-arts", description: "Demon arts, the Evil Art reset, and Shockwave." },
        { label: "Final Selection", slug: "final-selection", description: "Level 45 exam, the gate, and the Hand Demon." },
        { label: "Dungeons", slug: "dungeons", description: "Level 65 Ouwigahara unlock, Togane, and dungeon points." },
      ],
    },
    {
      id: "quick-facts",
      heading: "Slayers 2 Quick Facts",
      paragraphs: [
        "The playable experience is Slayers 2 by Ouw Productions: https://www.roblox.com/games/16205713724/Slayers-2. The Roblox page files it as an Open World and Survival RPG, maturity Mild Violence, with voice chat and camera not supported. The listing showed an update on September 24, 2026.",
        "The studio's release event is dated September 18, 2026: https://www.roblox.com/events/7918644252966519363. Older posts still say Project Slayers 2. That name points at this release, not at the first Project Slayers experience and not at lookalike places run by other groups.",
        "On mobile, set aim assist, toggle shift lock from the top right, and change button size in settings.",
      ],
      table: {
        caption: "Facts taken from the public Roblox listing and the release event, reviewed September 26, 2026.",
        columns: ["Fact", "Current reading"],
        rows: [
          ["Game", "Slayers 2"],
          ["Developer", "Ouw Productions"],
          ["Platform", "Roblox"],
          ["Genre", "RPG, Open World & Survival RPG"],
          ["Release", "September 18, 2026 release event"],
          ["Listing update", "September 24, 2026"],
          ["Voice chat / camera", "Not supported"],
        ],
      },
    },
    {
      id: "progression",
      heading: "Slayers 2 Progression",
      paragraphs: [
        "The first hour is Windy Peak: the starter quests, a weapon from the village shop, and the Book of Guidance or Lost Pages quest if your map and fast travel are still locked. Shrines are bought with Wen, either by holding the prompt under the torii or from the map. The confirmation shows that shrine's price. Bamboo Grove is 10,000 Wen. Other gates can differ, so read the prompt.",
        "Level 25 is the shared gate for Breathing trainers. Reaching the NPC is not the unlock. The trainer dialog lists the materials, and the quest after that can be a drill, a climb, or a trainee fight. Do this before Final Selection if you plan to stay on the Slayer path. The exam does not require a finished style, and a style makes the fights less brittle.",
        "Level 45 is the number both fishing guides and Final Selection guides repeat. They are not the same errand. Fishing is Dock Master Sofen and Fisherman Jeso at Mistfall Harbor. Final Selection is a timed gate, usually approached from the Butterfly Estate shrine, then south toward the plains. Solo players often wait until the high 50s or about 60 for the exam. That higher number is comfort, not a second requirement.",
        "After the exam, the payout guides agree on a Slayer uniform, a Crude Iron Ingot, and a Kasugai Crow. Rank progress follows in the Slayer menu. The ingot feeds the forge. Blacksmith Togane in Hidden Mist Village is the forge NPC named for that work. Nightfall weapons are later recipes on the forge, not the item the exam hands you.",
      ],
      links: [
        { label: "Final Selection guide", slug: "final-selection", description: "Requirements, the even-hour gate, and the trial." },
        { label: "Breathing Styles", slug: "breathing-styles", description: "Trainers to clear before the exam." },
        { label: "Dungeons", slug: "dungeons", description: "Level 65 Ouwigahara, after the exam." },
      ],
    },
    {
      id: "gear-and-farming",
      heading: "Gear and Farming",
      paragraphs: [
        "Spend Wen in an order. A weapon you can equip comes first, because combat practice needs one. Trainer materials and the fishing permit come next if you are at the level for them. The Black Market is a rotating NPC, not a shop that is open on every server. Buy there when the on-screen notice is up and the item matches the path you are on.",
        "Fishing starts at Mistfall Harbor once you are level 45. Sofen sends you for the permit paperwork. Jeso sells rods. The Legendary Fishing Rod is a later chain built around the Drowned Lure and a ghost fisherman named Isao near the red bridge, then a second spot with the lure equipped. People searching for a fishing macro want the minigame automated. This site does not host scripts. The manual route is the one written up.",
        "Weapons split by path. Slayer katanas and Demon weapons such as War Fans do not share one shopping list. Nightfall Katana is a forge project at Hidden Mist Village. For War Fans, follow the source line in your own build. Refinement Ore is a crafting material. Spend it when a recipe asks for it. The later V2 forge spends Dungeon Points from Ouwigahara.",
      ],
      links: [
        { label: "Fishing guide", slug: "fishing", description: "Permit, Jeso's rods, and the legendary chain." },
        { label: "Weapons", slug: "weapons", description: "What to buy first and what to leave for the forge." },
        { label: "Black Market", slug: "black-market", description: "Even-hour notice, search clusters, and what is worth the Wen." },
      ],
    },
    {
      id: "combat-systems",
      heading: "Combat Systems",
      paragraphs: [
        "Slayers 2 has two combat identities that players keep separate. Breathing Styles are trained from level 25 on the Slayer path. Blood Demon Arts, also called BDA or Demon Art, belong to the Demon path. The code item for a demon-art reset is worded Evil Art. Final Selection is the Slayer exam. If your quest log is on the Demon path, a breathing trainer is the wrong desk.",
        "Eight breathing styles have a named trainer: Flame with Rengu, Insect with Shinora, Stone with Gyorei, Thunder with Zentaro, Water with Urokodaki, Wind with Saneri, Sound with Tengai, and Serpent with Obari. Farm the material count shown on that trainer's prompt. Thunder and Sound are the routes that keep asking for a climb.",
        "A beginner style is the trainer you can reach and pay for at level 25. Boss fights favor a kit you can land on a large target. Duels favor the faster styles players are already queuing. There is no official ranking.",
        "Shockwave is the Blood Demon Art name players are searching. Confirm it on the move list after you roll, and read that art's quest. Routes copied from the first game's villages are the wrong map. ARTRESET is one Evil Art Reset. BREATHRESET is one Breathing Reset. Use a reset to leave a style or an art, not as a free sample of every kit.",
      ],
      links: [
        { label: "Breathing Styles", slug: "breathing-styles", description: "Trainers, unlock steps, and how to choose." },
        { label: "Blood Demon Arts", slug: "blood-demon-arts", description: "How a BDA unlocks, and where Shockwave fits." },
      ],
    },
  ],
  faq: [
    {
      question: "What is Slayers 2?",
      answer: "Slayers 2 is a Roblox RPG by Ouw Productions, filed on the official page as an Open World & Survival RPG. It went out through a release event dated September 18, 2026. You make a character, take quests from Windy Peak outward, and build either a Slayer kit around Breathing or a Demon kit around Blood Demon Arts.",
    },
    {
      question: "Is Slayers 2 the same as Project Slayers 2?",
      answer: "Project Slayers 2 is the name used before launch and the name many search pages still use. The live Roblox title is Slayers 2, place 16205713724, by Ouw Productions. The older game, Project Slayers, is a different experience. Codes and maps from that game do not carry over. Other Roblox places with similar names are not this release.",
    },
    {
      question: "Where can I play Slayers 2?",
      answer: "Use the official listing: https://www.roblox.com/games/16205713724/Slayers-2. The studio community is https://www.roblox.com/communities/12851171/Ouw-Productions. Mobile players can change aim assist, shift lock, and button size from the settings described on that page.",
    },
    {
      question: "Where should a new Slayers 2 player start?",
      answer: "Redeem current codes from the main menu, finish the starter quests in Windy Peak, and buy a weapon you can equip. Unlock the map if it is still blank. At level 25, pick a Breathing trainer you can actually reach if you are on the Slayer path. At level 45, choose between the fishing permit at Mistfall Harbor and a prepared Final Selection run. Do not treat those as one quest.",
    },
    {
      question: "Does this site cover Slayers 2 codes and guides?",
      answer: "Yes. The codes page lists the active codes checked on September 26, 2026, plus expired names and the redeem steps. Separate guides cover fishing, weapons, the Black Market, Breathing Styles, Blood Demon Arts, Final Selection, and the Ouwigahara dungeon.",
    },
  ],
} satisfies HomePageDefinition;
