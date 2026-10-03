import type { SeoPageDefinition } from "@/config/types";

export const weaponsPage = {
  enabled: true,
  slug: "weapons",
  pageType: "guide",
  navLabel: "Weapons",
  title: "Slayers 2 Weapons: Nightfall Katana, War Fans & More",
  description: "Explore Slayers 2 weapons, where they come from, how upgrades work, and what players should know about Nightfall Katana, War Fans and other key weapons.",
  keywords: ["slayers 2 weapons", "nightfall katana slayers 2", "war fans slayers 2", "slayers 2 nightfall katana", "slayers 2 war fans"],
  primaryKeyword: "slayers 2 weapons",
  secondaryKeywords: ["nightfall katana slayers 2", "war fans slayers 2", "slayers 2 nightfall katana", "slayers 2 war fans"],
  searchIntent: "See where Slayers 2 weapons come from, especially Nightfall Katana and War Fans, and what to chase first.",
  priority: "P0",
  navVisible: true,
  factsStatus: "verified",
  wordCountTarget: 1100,
  hero: {
    heading: "Slayers 2 Weapons",
    lead: "Buy a weapon your path can equip, then chase Nightfall Katana or War Fans when the source in front of you matches. Slayer steel and Demon gear do not share one shopping list.",
  },
  lastReviewed: "2026-09-26",
  relatedSlugs: ["black-market", "dungeons", "fishing"],
  sections: [
    {
      id: "quick-list",
      heading: "Slayers 2 Weapons Quick List",
      intro: "Use the source column, then read the price or recipe on the NPC.",
      table: {
        caption: "Weapons players actually ask how to get. Damage and drop rates stay on the item.",
        columns: ["Weapon", "Type", "How to get", "Key requirement", "Notes"],
        rows: [
          ["Regular katana", "Slayer", "Raze, Windy Peak shop", "Wen on the shop line", "First blade so early quests have a weapon."],
          ["Nightfall Katana", "Slayer forge", "Blacksmith Togane, Hidden Mist Village", "Matching schematic", "Not a Final Selection reward."],
          ["Nightfall Gauntlets", "Slayer forge", "Stonemason Tobei, Hidden Mist Village", "His statue errand", "A separate craft from the katana."],
          ["Nightfall serpent, claws, sickles", "Slayer forge", "Togane, when that schematic is listed", "The schematic for that weapon", "Separate recipes, not nicknames for the katana."],
          ["War Fans", "Demon", "The source line on the item", "A Demon character who can equip them", "Published routes do not share one NPC. Follow the line in your session."],
          ["Black Market weapon", "Depends on the stock", "Black Marketer, while the notice is up", "Wen in his window", "Stock rotates. Leave gear for the other path."],
        ],
      },
    },
    {
      id: "nightfall-katana",
      heading: "Nightfall Katana",
      paragraphs: [
        "Nightfall Katana is the Slayer forge blade players search once the starter shop is done. Craft it with Blacksmith Togane in Hidden Mist Village. The recipe wants the matching schematic. Open that schematic, not a different Nightfall name.",
        "Final Selection pays a Crude Iron Ingot, a uniform, and a Kasugai Crow. It does not hand you the katana. The ingot is an early forge material. The later V2 line is a dungeon-point craft. Read the cost Togane shows before you farm another boss for a blade the forge is already selling as a recipe.",
        "Nightfall Gauntlets are a different stop. Stonemason Tobei, also in Hidden Mist Village, ties them to a statue errand. Follow his quest text. Serpent, claws, and sickles are further recipes if Togane lists those schematics. They are not alternate names for the katana.",
      ],
    },
    {
      id: "war-fans",
      heading: "War Fans",
      paragraphs: [
        "War Fans are the Demon weapon players search the way Slayers search Nightfall. The source is the messy part. Some routes point at a snow-village NPC. Others point at a boss or a chest. Pages that still use the first game's dungeon names are the wrong map.",
        "Read the source line on the fans, or talk to the NPC who is actually offering them. If your Demon quest already names a boss or a chest, that name is the farm. A shop upgrade that asks you to already own War Fans is a second craft. Do it after the base fans are in the inventory.",
        "A fan you cannot equip is a bad purchase. So is a Slayer katana on a Demon who cannot hold it. The Black Market sometimes stocks Demon gear while the notice is up. The price in that window is the price.",
      ],
    },
    {
      id: "slayer-weapons",
      heading: "Slayer Weapons",
      paragraphs: [
        "The regular katana from Raze in Windy Peak is the first Slayer weapon. Pay the figure on his shop line and use it for the starter quests and weapon practice. Replace it when a drop's source line, or a forge recipe, is actually in front of you.",
        "The Nightfall family is the later Slayer set: the katana at Togane, the gauntlets at Tobei, and any other Nightfall schematic Togane lists. Stay on the Slayer path to equip them. A breathing style is the combat kit that goes with these weapons. It is not a substitute for the schematic.",
      ],
    },
    {
      id: "demon-weapons",
      heading: "Demon Weapons",
      paragraphs: [
        "Demon weapons follow the Demon path. War Fans are the pair players ask for. Other pieces show up in the Black Market rotation and on quest source lines. Buy or farm the one your character can equip.",
        "A Blood Demon Art does not put a fan in your inventory. Roll the art, finish its quest, and solve the weapon source separately. ARTRESET leaves an art. It does not craft a weapon.",
      ],
    },
    {
      id: "forge-v2",
      heading: "Forge / V2 Progression",
      paragraphs: [
        "Upgrades happen at a forge prompt or a shop prompt. Togane is the named forge for the Slayer craft line. Early recipes can take the Crude Iron Ingot from Final Selection. The later V2 set spends Dungeon Points from Ouwigahara. Run that dungeon until the recipe you opened is paid, then confirm the cost on the forge screen.",
        "Refinement Ore is the material those upgrade lines ask for. Spend it when a recipe is open. A code reward can include one ore. Do not burn it on a guess.",
      ],
      steps: [
        { heading: "Confirm the path", description: "Slayer characters buy and forge Slayer steel. Demon characters buy Demon gear. Skip the other path's weapon." },
        { heading: "Buy the starter in Windy Peak", description: "Raze sells the regular katana. Pay his shop line so early quests have a weapon." },
        { heading: "Check the Black Market only while the notice is up", description: "If he stocks a weapon for your path, his window is the price. If he stocks the other path, leave it." },
        { heading: "Bring the schematic to Togane", description: "Hidden Mist Village is the forge stop for Nightfall. The exam ingot is an early material, not the finished katana." },
        { heading: "Pay the V2 line with dungeon points", description: "Ouwigahara is the point route for the later forge. Open the recipe, read the cost, and spend points on that line." },
      ],
      links: [
        { label: "Dungeons", slug: "dungeons", description: "Level 65 Ouwigahara unlock and Dungeon Points." },
        { label: "Black Market", slug: "black-market", description: "Rotating stock, including weapons when the window has them." },
      ],
    },
    {
      id: "which-weapon-first",
      heading: "Which Weapon Should You Chase First?",
      paragraphs: [
        "There is no universal best weapon. The right chase depends on the job in front of you.",
      ],
      subsections: [
        {
          heading: "Beginner",
          paragraphs: [
            "Buy the regular katana from Raze in Windy Peak. It is the weapon the starter village actually sells, and it gives early fights something to level. Nightfall and War Fans wait until you can reach their source.",
          ],
        },
        {
          heading: "Farming",
          paragraphs: [
            "Farm the boss or chest your quest marker names. A local Windy Peak fight is the early farm. A Nightfall schematic is a forge trip, not another hour at the wrong camp. War Fans follow the source line on the item, not a map from the first game.",
          ],
        },
        {
          heading: "PvE",
          paragraphs: [
            "For story fights and the exam, use the weapon you can already equip and land. Nightfall Katana is the Slayer forge project players move to once Togane and the schematic are available. It is a later PvE craft, not the blade you need for the first village.",
          ],
        },
        {
          heading: "PvP",
          paragraphs: [
            "Use the weapon your path can equip and whose moves you can already land on a person. No official ranking names a duel winner. A fan or a katana you have not practiced is a worse queue than the weapon you cleared the last fight with.",
          ],
        },
        {
          heading: "Progression",
          paragraphs: [
            "The order is shop katana, then the exam ingot, then Togane's recipes, then Ouwigahara points for the V2 forge. War Fans sit on the Demon side of that same idea: get a pair you can equip, then look at the upgrade that already requires them. Do not skip a trainer, the fishing permit, or the exam bandage to pay for a weapon you cannot hold yet.",
          ],
        },
      ],
    },
  ],
  faq: [
    {
      question: "How do you get the Nightfall Katana in Slayers 2?",
      answer: "Craft it at Blacksmith Togane in Hidden Mist Village with the matching schematic. Final Selection pays a Crude Iron Ingot, not the katana. The later forge line spends Dungeon Points from Ouwigahara. Read the cost on the forge screen.",
    },
    {
      question: "How do you get War Fans in Slayers 2?",
      answer: "War Fans are Demon-side. Use the source line in your session. Some players are sent to a snow-village NPC, others to a boss or a chest. Ignore routes that use the first game's dungeon names. Upgrade recipes that already require the fans come after you own a pair.",
    },
    {
      question: "What weapon should a new player buy?",
      answer: "The regular katana from Raze in Windy Peak, at the price on his shop line. Nightfall is a later Slayer forge project. War Fans are a Demon question.",
    },
    {
      question: "What is the best weapon in Slayers 2?",
      answer: "There is no universal best. Beginners buy Raze's katana. Slayer PvE players work toward Nightfall once they can reach Togane. Demon players chase War Fans from the source line they can see. PvP is the weapon you can already land. Progression runs from the shop blade to the V2 forge.",
    },
    {
      question: "What is Refinement Ore used for?",
      answer: "Weapon and rod upgrade lines ask for it. Spend ore when a recipe is open. A code reward can include one Refinement Ore. There is no shared ore table that replaces the forge prompt.",
    },
  ],
} satisfies SeoPageDefinition;
