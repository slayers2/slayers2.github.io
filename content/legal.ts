import { integrations } from "@/config/integrations";
import { siteConfig } from "@/config/site";
import type { SeoPageDefinition } from "@/config/types";

const reviewed = "2026-09-26";
const contactEmail = siteConfig.contact.email?.trim() || null;
const contactUrl = siteConfig.contact.url;

const privacyIntegrationParagraphs: string[] = [];

if (integrations.analytics.provider === "google-analytics") {
  privacyIntegrationParagraphs.push(
    "Google Analytics 4 is enabled to understand aggregate page usage. Google may process technical visit information under its own privacy terms.",
  );
}

if (integrations.ads.provider === "adsterra-native") {
  privacyIntegrationParagraphs.push(
    "Adsterra Native advertising is enabled. Adsterra may process technical request information and applies its own privacy policy.",
  );
}

export const legalPages: SeoPageDefinition[] = [
  {
    enabled: true,
    slug: "about",
    pageType: "legal",
    navLabel: "About",
    title: "About This Fan Guide",
    description: "About this independent Slayers 2 fan guide: who maintains the pages, how corrections work, and why it is separate from Ouw Productions.",
    keywords: ["about this fan guide"],
    primaryKeyword: "about this fan guide",
    secondaryKeywords: [],
    searchIntent: "Learn who maintains this independent fan guide",
    priority: "P2",
    navVisible: false,
    factsStatus: "verified",
    hero: {
      heading: "About this fan guide",
      lead: "An independent Slayers 2 guide for Roblox players. It is not run by the studio or the platform.",
    },
    sections: [
      {
        id: "what-this-is",
        heading: "What this site is",
        paragraphs: [
          "This is a fan-made English guide to Slayers 2, the Roblox experience from Ouw Productions. It collects codes, fishing, weapons, the Black Market, Breathing Styles, Blood Demon Arts, Final Selection, and dungeons on separate pages so each search has one place to land.",
          "The live game changes quickly. A code, a shop price, or a spawn window can move between updates. Pages show the date they were last reviewed, and the in-game dialog wins when a written line and the current build disagree.",
        ],
      },
      {
        id: "independence",
        heading: "Not an official site",
        paragraphs: [
          "This guide is not affiliated with Ouw Productions or Roblox, and it is not endorsed by either of them. Game names, characters, and the Roblox experience belong to their owners. Play Slayers 2 from the official Roblox page linked in the footer.",
        ],
      },
      {
        id: "corrections",
        heading: "Corrections",
        paragraphs: [
          contactEmail
            ? `Send a correction to ${contactEmail}. Include the page address, the line that looks wrong, and what the game currently shows.`
            : contactUrl
              ? `Send a correction through ${contactUrl}. Include the page address, the line that looks wrong, and what the game currently shows.`
              : "Use the contact link in the footer. Include the page address, the line that looks wrong, and what the game currently shows.",
        ],
      },
    ],
    relatedSlugs: ["contact", "copyright"],
    lastReviewed: reviewed,
  },
  {
    enabled: true,
    slug: "contact",
    pageType: "legal",
    navLabel: "Contact",
    title: "Contact",
    description: contactEmail
      ? `Contact this Slayers 2 fan guide at ${contactEmail} to report a wrong code, reward, location, or broken page.`
      : "Contact this Slayers 2 fan guide to report a wrong code, reward, location, or broken page through the public GitHub Issues board.",
    keywords: ["contact this fan guide"],
    primaryKeyword: "contact",
    secondaryKeywords: [],
    searchIntent: "Report a correction or a site problem",
    priority: "P2",
    navVisible: false,
    factsStatus: "verified",
    hero: {
      heading: "Contact",
      lead: contactEmail
        ? "Email the address on this page to report a wrong fact or a broken page."
        : "Use the public issues board to report a wrong fact or a broken page.",
    },
    sections: [
      {
        id: "contact-method",
        heading: "How to reach this guide",
        paragraphs: [
          contactEmail
            ? `Email ${contactEmail}. Include the page address, the line that looks wrong, and what the game currently shows.`
            : contactUrl
              ? `Open ${contactUrl} and file an issue. That board is the public correction desk for this site. There is no email inbox on this version.`
              : "Use the contact link in the footer and include the page address with the correction.",
        ],
      },
      {
        id: "useful-report",
        heading: "What to include",
        paragraphs: [
          "Name the page, quote the line that looks wrong, and say what the current game shows. A code that stopped redeeming, a moved trainer, or a changed shop price is enough. Screenshots of the in-game line help.",
        ],
      },
    ],
    relatedSlugs: ["about", "copyright"],
    lastReviewed: reviewed,
  },
  {
    enabled: true,
    slug: "privacy",
    pageType: "legal",
    navLabel: "Privacy",
    title: "Privacy Policy",
    description: "Privacy policy for this static Slayers 2 fan guide. This version stores no accounts and uses Google Analytics 4 for aggregate page usage.",
    keywords: ["privacy policy"],
    primaryKeyword: "privacy policy",
    secondaryKeywords: [],
    searchIntent: "Read how this static site handles visitor data",
    priority: "P2",
    navVisible: false,
    factsStatus: "verified",
    hero: {
      heading: "Privacy Policy",
      lead: "This version is a static guide with no accounts and no ads. Google Analytics 4 measures aggregate page usage.",
    },
    sections: [
      {
        id: "site-data",
        heading: "Data this site collects",
        paragraphs: [
          contactEmail
            ? "The site does not offer accounts, comments, or a form that stores what you submit. Pages are static files. A correction sent by email is not stored on this site."
            : "The site does not offer accounts, comments, or a form that stores what you submit. Pages are static files. A correction sent through GitHub Issues is handled by GitHub under GitHub's own terms.",
        ],
      },
      {
        id: "integrations",
        heading: "Measurement and advertising",
        paragraphs: privacyIntegrationParagraphs.length
          ? privacyIntegrationParagraphs
          : ["No audience measurement and no advertising integration are enabled on this version. No analytics ID and no ad script are shipped with these pages."],
      },
      {
        id: "external-links",
        heading: "External links",
        paragraphs: [
          contactEmail
            ? "Links to Roblox leave this site. That site applies its own privacy terms. This guide does not control what it collects after you follow a link."
            : "Links to Roblox or GitHub leave this site. Those sites apply their own privacy terms. This guide does not control what they collect after you follow a link.",
        ],
      },
      {
        id: "changes",
        heading: "If this policy changes",
        paragraphs: [
          "Measurement is limited to Google Analytics 4. If a later version turns on advertising or changes how usage is measured, this page and its review date will be updated before that change ships.",
        ],
      },
    ],
    relatedSlugs: ["terms", "contact"],
    lastReviewed: "2026-09-27",
  },
  {
    enabled: true,
    slug: "terms",
    pageType: "legal",
    navLabel: "Terms",
    title: "Terms of Use",
    description: "Terms of use for this independent Slayers 2 fan guide, including changing game information and the rules for using the pages.",
    keywords: ["terms of use"],
    primaryKeyword: "terms of use",
    secondaryKeywords: [],
    searchIntent: "Read the terms for using this fan guide",
    priority: "P2",
    navVisible: false,
    factsStatus: "verified",
    hero: {
      heading: "Terms of Use",
      lead: "These pages are a fan guide. Game details can change, and the site can be wrong until a correction lands.",
    },
    sections: [
      {
        id: "informational",
        heading: "Informational use",
        paragraphs: [
          "The guides are general information for people playing Slayers 2 on Roblox. They are not official instructions from Ouw Productions. Read the in-game dialog before you spend Wen or use a reset item.",
        ],
      },
      {
        id: "accuracy",
        heading: "Accuracy and availability",
        paragraphs: [
          "Codes expire, shops rotate, and quest text moves. Reasonable care goes into each review date, and complete accuracy or uninterrupted availability is not guaranteed. Check the date on the page, then check the game.",
        ],
      },
      {
        id: "acceptable-use",
        heading: "Acceptable use",
        paragraphs: [
          "Do not misuse the site or interfere with access to it. Do not copy substantial original writing from these pages without permission. Game names and Roblox assets stay with their owners.",
        ],
      },
    ],
    relatedSlugs: ["privacy", "copyright"],
    lastReviewed: reviewed,
  },
  {
    enabled: true,
    slug: "copyright",
    pageType: "legal",
    navLabel: "Copyright",
    title: "Copyright and Attribution",
    description: "Copyright and attribution for this fan-made Slayers 2 guide, covering original writing, game trademarks, and how to report a rights concern.",
    keywords: ["copyright and attribution"],
    primaryKeyword: "copyright and attribution",
    secondaryKeywords: [],
    searchIntent: "Understand rights and how to report a concern",
    priority: "P2",
    navVisible: false,
    factsStatus: "verified",
    hero: {
      heading: "Copyright and Attribution",
      lead: "Original guide text is ours. The game, the studio name, and Roblox are not.",
    },
    sections: [
      {
        id: "editorial",
        heading: "Original writing",
        paragraphs: [
          "The explanations, tables, and page structure written for this guide are original text. Ask before republishing a substantial part of it. Short quotations with a link back are the usual way to cite a page.",
        ],
      },
      {
        id: "game-rights",
        heading: "Game and platform rights",
        paragraphs: [
          "Slayers 2, Ouw Productions, Roblox, and the related names and assets belong to their respective owners. Using those names to describe the game does not mean this site is official or endorsed.",
        ],
      },
      {
        id: "report",
        heading: "Report a concern",
        paragraphs: [
          contactEmail
            ? `Send the page address, the work you believe is affected, and a way to confirm ownership to ${contactEmail}.`
            : contactUrl
              ? `Send the page address, the work you believe is affected, and a way to confirm ownership through ${contactUrl}.`
              : "Use the contact link in the footer and include the page address plus a way to confirm ownership.",
        ],
      },
    ],
    relatedSlugs: ["contact", "terms"],
    lastReviewed: reviewed,
  },
];
