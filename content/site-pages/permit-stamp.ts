import type { SeoPageDefinition } from "@/config/types";

export const permitStampPage = {
  enabled: true,
  slug: "permit-stamp",
  pageType: "guide",
  navLabel: "Permit Stamp",
  title: "Slayers 2 Permit Stamp: Location, Use & Lost Stamp Fix",
  description: "Find the Slayers 2 Permit Stamp near Sofen, complete the Fishing Permit hand-in, and check your quest state when the lost stamp is missing.",
  keywords: ["permit stamp slayers 2", "slayers 2 permit stamp", "where is the permit stamp slayers 2", "lost permit stamp slayers 2"],
  primaryKeyword: "permit stamp slayers 2",
  secondaryKeywords: ["slayers 2 permit stamp", "where is the permit stamp slayers 2", "lost permit stamp slayers 2"],
  searchIntent: "Find Sofen's missing Permit Stamp, return it for the Fishing Permit and resolve a pickup or hand-in blockage.",
  priority: "P1",
  navVisible: false,
  factsStatus: "verified",
  wordCountTarget: 1100,
  lastReviewed: "2026-10-03",
  sourceNotes: [
    "September 21 walkthrough, with Doslja and ItzVexo gameplay references: https://allthings.how/project-slayers-2-how-to-get-the-permit-stamp-roblox/",
    "Independent September 25 harbor/crates route: https://entretendoouniverso.com.br/permit-stamp-slayers-2-pesca/",
    "Independent permit-to-rod route: https://pclabs.com.br/guia/slayers-2-como-pescar-conseguir-licenca-todas-varas/",
    "Earlier house/table route differs: https://www.treyexgaming.com/roblox-slayers-2-beginners-guide/ — current objective takes precedence over an older screenshot.",
    "Level 45 corroborated. Exact fee, coordinates, respawn behavior, replacement system and extra reward quantities are intentionally omitted. Troubleshooting is a check sequence, not a guaranteed recovery mechanic.",
  ],
  hero: {
    heading: "Slayers 2 Permit Stamp Guide",
    lead: "The Slayers 2 Permit Stamp is the lost item in Dock Master Sofen's Fishing Permit quest. Start with Sofen at Mistfall Harbor's docks at level 45, accept his errand and cross the water towards the crates against the stone cliff. Collect the stamp and return it to Sofen to receive the Fishing Permit. If it seems missing, check your active objective first: a return-to-Sofen step means you should try the hand-in, while an already earned permit means you should check Jeso's fishing shop rather than repeat the search.",
  },
  relatedSlugs: ["fishing", "fishing-macro"],
  sections: [
    {
      id: "quick-answer",
      heading: "Permit Stamp Quick Answer",
      paragraphs: [
        "Sofen starts the stamp hunt; Fisherman Jeso is the nearby fishing equipment contact after the permit is earned. Begin with the quest giver, then look across the harbor water. The crate stack beside the cliff is the useful landmark for the pickup, rather than an exact coordinate to copy.",
        "The quest item and the final permit have different jobs. You collect the lost stamp for the hand-in. The Fishing Permit is what you check for afterwards. If you are searching because an NPC mentioned a lost stamp, establish which of those stages you are on before leaving the docks.",
      ],
      table: {
        caption: "The stamp route and the checks that matter",
        columns: ["Stage", "Where to check", "Next action"],
        rows: [
          ["Start", "Dock Master Sofen at Mistfall Harbor", "Read and accept the permit errand."],
          ["Search", "Across the water, crates against the stone cliff", "Approach the quest item and interact."],
          ["Return", "Your objective and Sofen's dialogue", "Hand the stamp back."],
          ["Completed", "Fishing Permit and Jeso's shop", "Continue to fishing equipment."],
        ],
      },
    },
    {
      id: "what-is-it",
      heading: "What Is the Permit Stamp?",
      paragraphs: [
        "This item belongs to the fishing permission flow. It is not a forge ingredient or an item you need to farm from dungeon runs. The practical task is to recover Sofen's missing stamp and return it, so keep the quest dialogue open long enough to understand the objective.",
        "Do not treat the missing-stamp wording as proof that you previously owned and lost a permanent permit. It can simply describe the errand you have just accepted. Check the character's current objective and inventory together; they tell you whether you need a pickup, a hand-in or a visit to the equipment seller.",
      ],
    },
    {
      id: "location",
      heading: "Where to Find the Permit Stamp",
      paragraphs: [
        "Use Mistfall Harbor as the area to reach, then locate Sofen on the dock walkway. Speak to him before searching. From the quest area, look across the water towards the stone cliff and the stack of wooden crates. Approach that stack closely enough to see the item interaction.",
        "Keep the cliff and the dock in view when crossing so you can return by the same route. Search at the crates rather than inspecting every building in the harbor. If you are following an older house or table screenshot, compare it with your active objective before continuing that detour.",
        "A landmark is easier to use than a left-or-right instruction without a camera reference. First locate the dock NPC, then the water crossing and the far cliff. If your view is facing inland, turn back towards the water before judging the direction shown in a walkthrough.",
      ],
    },
    {
      id: "get-stamp",
      heading: "How to Get the Permit Stamp",
      paragraphs: [
        "Reach level 45 and bring enough Wen for the fee displayed by Sofen. Read that price before accepting; the permit step and a later rod purchase are different transactions. Once the errand is active, follow the pickup and return sequence rather than buying equipment first.",
      ],
      steps: [
        { heading: "Speak to Dock Master Sofen", description: "Find him at Mistfall Harbor's docks. Read the level and fee requirements on your character, then accept the lost-stamp task." },
        { heading: "Cross towards the cliffside crates", description: "Move across the harbor water from the dock area. Look for the crate stack against the stone wall and use the active quest as your reference." },
        { heading: "Collect the quest item", description: "Get within interaction range and use the pickup prompt. Read the objective afterwards to confirm the next task is returning to Sofen." },
        { heading: "Hand the stamp to Sofen", description: "Return to the quest giver and select the stamp hand-in dialogue. Let the conversation complete before checking your inventory." },
        { heading: "Check the Fishing Permit", description: "Confirm the permit reward and visit Jeso's equipment shop. If you are still blocked, compare the remaining objective with Sofen's current dialogue." },
      ],
    },
    {
      id: "use",
      heading: "What the Permit Stamp Is Used For",
      paragraphs: [
        "The stamp finishes the permission errand that leads to the Fishing Permit. After completing the hand-in, check the fishing equipment available near Jeso. Earning permission and owning a usable rod are separate steps; the stamp itself is not something you equip to cast a line.",
        "Once the permission step is done, move to the ordinary fishing route. That guide covers rod choices and later fishing progression. Keep this page for the specific missing item or hand-in problem, so you do not confuse a rod requirement with a stamp requirement.",
      ],
      links: [
        { label: "Continue with the Fishing guide", slug: "fishing", description: "Rod purchases and fishing progression after Sofen's permission task." },
      ],
    },
    {
      id: "lost-stamp",
      heading: "Lost Permit Stamp: What to Check",
      paragraphs: [
        "Start with the objective text. If it still asks you to find the stamp, check that Sofen's task is active and revisit the pickup landmark. If it asks for a return, try the hand-in before searching again. If the task is completed, inspect the Fishing Permit and the shop conversation.",
        "Next check which character you are playing. Compare its level, quest and inventory rather than relying on what you completed on another character. Take a screenshot of the current objective and Sofen's response if they disagree. That is more useful for a bug report than a screenshot of an empty crate.",
        "Avoid paying again or discarding items simply to test a theory. First close the dialogue, reread the objective and speak to the correct NPC. Those checks let you identify the blocked stage without resetting a working part of your progression.",
      ],
    },
    {
      id: "not-appearing",
      heading: "Why the Permit Stamp May Not Appear",
      paragraphs: [
        "An unavailable prompt can mean you are looking for the wrong stage or standing at the wrong landmark. Move near the crate stack and adjust the view so the target is visible. Check the on-screen interaction before deciding the item is missing; seeing the area from far away is not the same as reaching the pickup.",
        "If manual interaction still does nothing while the search objective is active, record the task state before rejoining. After reconnecting, read the objective again before travelling. Rejoining is a troubleshooting attempt, not a promised stamp respawn or a replacement-permit mechanic.",
        "For a persistent mismatch, report the exact sequence: accepted the task, reached the crates, attempted pickup, and received this objective or dialogue. Include the game version if shown. Avoid treating an old location image as proof of a bug when your current quest points elsewhere.",
      ],
    },
  ],
  faq: [
    { question: "Where is the Permit Stamp in Slayers 2?", answer: "Start Sofen's quest at the Mistfall Harbor docks, then search the crates against the stone cliff across the water. Use your active objective to confirm the pickup stage." },
    { question: "What level starts the Permit Stamp quest?", answer: "Level 45. Speak to Dock Master Sofen and read the current Wen fee before accepting his lost-stamp errand." },
    { question: "Is the Permit Stamp the same as the Fishing Permit?", answer: "They are different stages of the same permission flow: recover and return the stamp, then receive the Fishing Permit used to continue into fishing equipment." },
    { question: "I picked it up, but cannot find it. What next?", answer: "Read your objective. If it asks you to return to Sofen, try the hand-in. If you already completed the task, check the permit and Jeso's shop before searching for another stamp." },
    { question: "Is the Permit Stamp a dungeon or forge requirement?", answer: "This lost stamp belongs to Sofen's fishing permission quest. Follow the forge or dungeon quest dialogue for those separate activities." },
  ],
} satisfies SeoPageDefinition;
