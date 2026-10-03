import type { SeoPageDefinition } from "@/config/types";

export const zenithPage = {
  enabled: true,
  slug: "zenith",
  pageType: "guide",
  navLabel: "Zenith",
  title: "Slayers 2 Zenith Guide: Ranks & Requirements",
  description: "Learn Slayers 2 Zenith progression: how to queue, same-style rankings, seasonal Hashira and Upper Moon titles, and what to prepare before climbing.",
  keywords: ["slayers 2 zenith", "zenith slayers 2", "slayers 2 zenith guide", "slayers 2 zenith rank"],
  primaryKeyword: "slayers 2 zenith",
  secondaryKeywords: ["zenith slayers 2", "slayers 2 zenith guide", "slayers 2 zenith rank", "slayers 2 hashira", "slayers 2 upper moon"],
  searchIntent: "Enter Zenith and understand the ability-specific ranked climb towards seasonal Hashira or Upper Moon titles.",
  priority: "P0",
  navVisible: false,
  factsStatus: "verified",
  wordCountTarget: 1100,
  lastReviewed: "2026-10-03",
  sourceNotes: [
    "Official game and developer identity: https://www.roblox.com/games/16205713724/Slayers-2",
    "Queue UI, ability-specific boards and placement evidence: https://slayers2guide.wiki/zenith",
    "Developer message screenshot inspected: https://slayers2guide.wiki/img/zn-dev-titles-1280w.webp",
    "V0.18 reward rule screenshot inspected: https://slayers2guide.wiki/img/zn-v018-1280w.webp",
    "Independent September 29 walkthrough: https://allthings.how/slayers-2-how-to-get-the-hashira-or-upper-moon-rank-in-zenith/",
    "No universal level gate, fixed rating gain, title stat bonus or current season deadline asserted. Preparation paragraphs are gameplay advice.",
  ],
  hero: {
    heading: "Slayers 2 Zenith Guide",
    lead: "Slayers 2 Zenith is ranked PvP against players using your Breathing Style or Blood Demon Art. Open the main menu, select Hub, choose Zenith and press Queue. You need an active style or art to compete on its board; any additional access restriction appears on the queue screen. Zenith is the seasonal route to Hashira titles for Slayers and Upper Moon titles for demons. The published ranked reward rule guarantees the top 100 and scales to the top 1%, so a win starts the climb rather than immediately awarding a title.",
  },
  relatedSlugs: ["breathing-styles", "blood-demon-arts", "weapons"],
  sections: [
    {
      id: "quick-answer",
      heading: "Slayers 2 Zenith Quick Answer",
      paragraphs: [
        "Go to the Zenith card in Hub when you want to compete for your ability's seasonal standing. The important distinction is the board you enter: ordinary ranked matches and the Zenith title race are separate choices. Select the named mode before starting matchmaking.",
        "Treat the leaderboard position and the season clock as your two progress checks. Your next practical goal is to improve your standing with the kit you can play consistently. A title target is a finish position, so check it again near the end of the season rather than relying on an earlier screenshot.",
      ],
      table: {
        caption: "Zenith progression at a glance",
        columns: ["Question", "Answer"],
        rows: [
          ["What is Zenith?", "An ability-specific ranked PvP mode."],
          ["Where do I start?", "Main menu → Hub → Zenith → Queue."],
          ["Slayer title path", "Your Breathing Style's Hashira competition."],
          ["Demon title path", "Your Blood Demon Art's Upper Moon competition."],
          ["Reward threshold", "Top 100 guaranteed, scaling to the top 1% under the published ranked rule."],
        ],
      },
    },
    {
      id: "what-is-zenith",
      heading: "What Is Zenith in Slayers 2?",
      paragraphs: [
        "The same-ability matchup is what makes this climb different. You are learning how another player uses the tools you already have, rather than only learning an unfamiliar opponent's moves. Watch how they create an opening, hold a defensive option and recover after a missed attack.",
        "Use that information in the next round. If an opponent repeatedly punishes one opener, change the setup instead of repeating it faster. After a loss, identify a single decision you can improve. That gives a training session a purpose even when the result does not move you up the board.",
      ],
    },
    {
      id: "unlock",
      heading: "How to Unlock and Enter Zenith",
      paragraphs: [
        "Start from the Hub menu rather than looking for a world-map NPC called Zenith. Select its own card, then read any access message before queueing. If the button is unavailable, resolve the reason shown there; buying forge materials or registering a dungeon portal is a different progression task.",
      ],
      steps: [
        { heading: "Choose the ability you want to compete with", description: "Check your active Breathing Style or Blood Demon Art and equip a compatible weapon. Decide on the kit before looking for a match." },
        { heading: "Open Hub and select Zenith", description: "Use the main menu to reach the match cards. Confirm the selected card says Zenith rather than an ordinary 1v1 or team mode." },
        { heading: "Read the queue screen", description: "Check your displayed standing, the season information and any access restriction. Follow the message on your account if entry is blocked." },
        { heading: "Queue and review the result", description: "Start the queue when you can play the match through. Afterwards, check the Zenith record and note one combat decision to improve." },
      ],
    },
    {
      id: "requirements",
      heading: "Zenith Requirements and Readiness",
      paragraphs: [
        "Separate entry requirements from competitive readiness. The queue decides whether your character can enter. Readiness means that your equipped items, unlocked moves and controls work together well enough to fight another player. A character can have access to a mode and still need practice before a serious ranking push.",
        "Run a short preparation check: can you use your main moves without searching for the buttons, recognise their recovery, and keep track of the opponent after movement? If not, work on those tasks first. Do not buy a reset solely because a clip makes another kit look effortless.",
      ],
    },
    {
      id: "ranks",
      heading: "Zenith Rank Progression",
      paragraphs: [
        "The mode has its own placements, rating and standing. Read the Zenith card rather than assuming progress from another ranked mode carries across. Rating is useful for following the climb, while leaderboard position tells you where you sit among the other competitors on that board.",
        "Plan manageable sessions. Record your starting standing, play while you can concentrate, and compare the ending result. Stop to practise if the same mistake keeps costing matches. More queue time is useful only when it produces better decisions or a stronger position.",
      ],
      subsections: [
        { heading: "Hashira path", paragraphs: ["For a Slayer, focus on the board associated with your Breathing Style. The seasonal title is tied to that ability, so learning its mirror matchup is a more useful immediate goal than chasing unrelated PvE milestones. Keep your practice centred on the moves you actually take into Zenith."] },
        { heading: "Upper Moon path", paragraphs: ["For a demon, the competition follows your Blood Demon Art. Work on spacing, resource use and the sequence that creates your reliable damage window. Choose an art you can commit to learning; a quieter board does not automatically make you capable of beating its strongest players."] },
      ],
    },
    {
      id: "prepare",
      heading: "What to Prepare Before Zenith",
      paragraphs: [
        "Equip your intended weapon and accessories before starting. Read their descriptions and make sure the loadout supports your ability. Keep a note of the setup you tested, so an equipment change does not leave you wondering whether a different result came from your play or your gear.",
        "Practise on the device and controls you will use for the climb. On a phone, position the buttons where you can reach them during movement. On a desktop, check the keys you use together. A comfortable, repeatable control layout is more valuable than copying somebody else's settings without testing them.",
      ],
      links: [
        { label: "Breathing Styles", slug: "breathing-styles", description: "Check the Slayer ability you plan to take into ranked matches." },
        { label: "Blood Demon Arts", slug: "blood-demon-arts", description: "Review the demon kit behind your Zenith board." },
      ],
    },
    {
      id: "mistakes",
      heading: "Common Zenith Progression Mistakes",
      paragraphs: [
        "Confusing a tier badge with a seasonal title is the first mistake. Keep the match rating, board position and title goal separate. Another is checking the wrong mode's record after a match; return to the Zenith card for the climb you are tracking.",
        "Switching builds after every loss makes practice hard to evaluate. Give a working loadout enough time to learn its matchups. Also avoid starting a competitive session when you expect interruptions. Leaving before a match is complete cannot help you build a dependable record.",
      ],
    },
    {
      id: "after-climb",
      heading: "What to Do After Your Zenith Climb",
      paragraphs: [
        "If you reach your target standing, check the remaining season time and the board again before considering the push finished. Other players continue competing. Keep practising the situations that were hardest rather than changing everything just because you had a strong session.",
        "After the season closes, read the reward announcement and your title menu. Check the actual item or title description before building around it. For the next climb, keep the loadout notes and the two or three matchups that need work; they give you a clear starting point.",
      ],
    },
  ],
  faq: [
    { question: "Is Zenith a quest or a PvP mode?", answer: "Zenith is the ability-specific ranked PvP mode in Hub. You enter from its match card, rather than completing a world quest named Zenith." },
    { question: "How do I get a Hashira or Upper Moon title?", answer: "Compete in Zenith on your Breathing Style or Blood Demon Art board and qualify at the seasonal finish. The published ranked reward rule guarantees the top 100 and scales to the top 1%." },
    { question: "Does an ordinary ranked win count as a Zenith win?", answer: "Check the mode you selected. Zenith has its own record and standing; an ordinary ranked queue is a separate match choice." },
    { question: "What should I do if Zenith will not let me queue?", answer: "Read the access message on the Zenith card and follow its instructions for your account. Check your active ability and selected mode before changing your character build." },
  ],
} satisfies SeoPageDefinition;
