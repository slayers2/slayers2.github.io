import type { SeoPageDefinition } from "@/config/types";

export const fishingMacroPage = {
  enabled: true,
  slug: "fishing-macro",
  pageType: "guide",
  navLabel: "Fishing Macro",
  title: "Slayers 2 Fishing Macro Guide & AFK Setup",
  description: "Understand Slayers 2 fishing macro calibration, AFK setup checks, common failures, account risks and when manual fishing is the better option.",
  keywords: ["slayers 2 fishing macro", "fishing macro slayers 2", "slayers 2 macro fishing", "slayers 2 afk fishing"],
  primaryKeyword: "slayers 2 fishing macro",
  secondaryKeywords: ["fishing macro slayers 2", "slayers 2 macro fishing", "slayers 2 afk fishing", "slayers 2 fishing macro setup"],
  searchIntent: "Understand screen-based fishing automation, calibration, AFK limitations and troubleshooting without distributing executable downloads.",
  priority: "P0",
  navVisible: false,
  factsStatus: "verified",
  wordCountTarget: 1100,
  lastReviewed: "2026-10-03",
  sourceNotes: [
    "Current calibration walkthrough, updated October 2: https://riix.fun/guides/fishing-macro",
    "Independent screen detection and interface walkthrough: https://allthings.how/slayers-2-best-afk-farm-macro-setup-for-fishing-roblox/",
    "Roblox policy does not establish macro permission: https://en.help.roblox.com/hc/en-us/articles/203312450-Cheating-and-Exploiting",
    "Generic diagnostic steps are advice, not a tested macro release. No downloads, executors, fixed hotkeys, reward rates or official approval are asserted.",
  ],
  hero: {
    heading: "Slayers 2 Fishing Macro Guide",
    lead: "A Slayers 2 fishing macro repeats fishing inputs and may use screen detection to recognise the catch minigame. Before setup, finish the fishing permit, equip a working rod and complete a manual catch. Then keep the window, camera and detection areas consistent. This page covers automation calibration and failures; the Fishing guide covers rods and progression. AFK fishing can break after a UI update or disconnect, and community availability does not establish permission from Roblox or Ouw Productions. Treat account restrictions and untrusted downloads as real risks.",
  },
  relatedSlugs: ["fishing", "permit-stamp"],
  sections: [
    {
      id: "quick-answer",
      heading: "Slayers 2 Fishing Macro Quick Answer",
      paragraphs: [
        "The first useful test is a complete manual fishing cycle in the exact position you intend to use. If the rod cannot cast, the catch prompt is unfamiliar or collection fails manually, automation settings will not resolve the underlying game problem. Fix that before calibrating anything.",
        "Screen-based setups depend on where the cast lands, where the fishing bar appears and how the catch screen closes. These are separate checkpoints. Watch them in order during a short supervised test so you can identify the first failure instead of changing every setting together.",
      ],
    },
    {
      id: "what-it-does",
      heading: "What a Fishing Macro Does",
      paragraphs: [
        "Community walkthroughs show cast, minigame detection and collection stages. Some tools also offer bait purchases. Those options describe different jobs: detecting a bar does not prove that the collection click works, and a working cast does not prove that a restock interaction can reach its NPC.",
        "A fixed input sequence repeats actions without understanding the game state. A screen-based tool adds visual checks, but those checks still depend on the image it receives. In either case, a changed window or interrupted loop can cause the next input to arrive at the wrong moment.",
      ],
    },
    {
      id: "before-setup",
      heading: "What You Need Before Fishing Macro Setup",
      paragraphs: [
        "Have your permit completed, your rod equipped and any bait required by your chosen fishing setup ready. Leave enough room to handle the catches you intend to keep. Confirm that the game accepts a normal cast from your spot and that you can finish the minigame yourself.",
        "Read the instructions for the exact tool and version you are evaluating. Hotkeys, supported operating systems and calibration controls differ. A shortcut from one creator's video may do something else in another program. Identify the stop control before testing, and keep it within reach.",
      ],
      links: [
        { label: "Fishing guide", slug: "fishing", description: "Use the existing permit and rod guide if manual fishing is not working yet." },
      ],
    },
    {
      id: "setup",
      heading: "Basic Fishing Macro Calibration",
      paragraphs: [
        "The current walkthroughs calibrate a cast point and detection regions for the fishing bar and exit control. Keep those concepts separate from the particular buttons in a macro interface. Choose the calibration commands documented for your version, then measure the parts of your own screen.",
      ],
      steps: [
        { heading: "Fix the game window and camera", description: "Choose the window mode and display scale you will keep. Face open water and make a manual cast without moving the camera afterwards." },
        { heading: "Locate the cast point", description: "Record where the cast actually lands. If your tool supports point calibration, use that observed position rather than coordinates from another player's monitor." },
        { heading: "Locate the minigame and exit regions", description: "During a manual catch, identify the full fishing bar and the relevant close or exit control. Use the region selection method described for your tool." },
        { heading: "Test one complete cycle under supervision", description: "Watch the cast, bite response, minigame, collection and return to the next cast. Stop immediately if the sequence clicks outside the intended game controls." },
        { heading: "Check the second cycle", description: "Confirm the loop returns to the same starting state. A successful first cast does not prove the reset, collection or next cast works." },
      ],
    },
    {
      id: "afk-checklist",
      heading: "AFK Fishing Setup Checklist",
      paragraphs: [
        "Before considering an unattended session, test long enough to see ordinary variations in bite timing and the return to the next cast. Keep the game in the same window position, leave the camera alone and avoid opening a menu over the detection area. Recheck bait and catch handling.",
        "Disable optional restocking until the basic loop works. If you later test it, watch the purchase and the return to fishing separately. Decide in advance when the session should stop: exhausted supplies, a repeated failure or an unexpected screen are reasons to end the run, not keep clicking.",
      ],
    },
    {
      id: "troubleshooting",
      heading: "Why a Fishing Macro Stops Working",
      subsections: [
        { heading: "UI or resolution mismatch", paragraphs: ["Check whether the window moved, display scale changed or the camera zoom shifted. Those changes can put the bar outside a saved detection region. Restore the layout used during calibration, then measure again if needed. Do not widen every scan region blindly; extra scenery may make visual detection less reliable."] },
        { heading: "Timing changes", paragraphs: ["Watch the earliest point where the macro gets ahead of the game. A click before a prompt appears is different from a missed response after it appears. Note which stage fails, change only its documented timing setting and run another short test. Avoid copying a delay tuned for another computer."] },
        { heading: "Game update changes", paragraphs: ["After an update, perform a manual catch before reusing saved settings. Compare the position and appearance of the controls with your earlier setup. If detection no longer recognises the interface, stop and wait for instructions compatible with that update rather than repeatedly launching an old configuration."] },
        { heading: "Inventory, rod or bait issues", paragraphs: ["Stop the macro and inspect the character directly. Confirm the intended rod is still equipped, supplies are available and catches can be handled. If a restock option is enabled, check its NPC interaction manually. A missing prerequisite is a game-state problem; changing screen coordinates cannot supply a rod or bait."] },
      ],
      table: {
        caption: "Find the first broken stage",
        columns: ["Symptom", "First check"],
        rows: [
          ["No cast", "Rod equipped, valid water target and game focus."],
          ["Cast works, catch fails", "Minigame region and prompt timing."],
          ["Catch finishes, loop stops", "Collection and return to the starting screen."],
          ["Works until restocking", "Purchase interaction and return position."],
        ],
      },
    },
    {
      id: "manual-comparison",
      heading: "Fishing Macro vs Manual Fishing",
      paragraphs: [
        "Manual fishing is the useful baseline when learning the minigame, changing rods or visiting a new spot. You can react to prompts and inspect unusual screens immediately. Automation adds a calibration job and a new failure point whenever the display or sequence changes.",
        "Choose manual play when you are following a quest that needs your attention or when you cannot observe a test. For troubleshooting, keep a simple note of what failed and whether the same action works by hand. That separates a setup error from a problem in the game itself.",
      ],
    },
    {
      id: "risks",
      heading: "Account and Update Risks",
      paragraphs: [
        "A community fishing macro is not evidence that the developer allows automated play. Roblox's support policy warns that cheating and exploiting can lead to account deletion. Read the current experience rules and official announcements before deciding whether an automation tool is permitted; avoid claims of undetectability or guaranteed safety.",
        "Do not hand a tool your password, session cookie or recovery codes. Do not disable security protections to run an unknown executable, and do not use an executor to alter the game client. Update compatibility is a separate issue from account permission: a working loop does not establish either trust or approval.",
      ],
    },
  ],
  faq: [
    { question: "Does a Slayers 2 fishing macro unlock fishing?", answer: "No. Complete the normal permit and rod prerequisites first. A macro automates inputs after fishing is already usable." },
    { question: "Why does it work once and then stop?", answer: "Check collection and the return to the starting screen. The first cast can succeed even when the loop's reset stage is misconfigured." },
    { question: "Can I use another player's resolution settings?", answer: "Use your own observed screen positions. Window size, scaling and camera placement can move the controls away from somebody else's saved coordinates." },
    { question: "Is AFK fishing guaranteed safe?", answer: "No. Community tools do not establish official permission, and unattended play can fail after an update or interruption. This guide provides calibration concepts, not an executable download or safety guarantee." },
  ],
} satisfies SeoPageDefinition;
