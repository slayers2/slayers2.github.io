import { ExternalLink, Mail } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import type { InternalLink } from "@/config/types";
import { enabledMoreGuides } from "@/content/registry";
import { routePath } from "@/lib/urls";

const footerGroups = [
  { title: "Core", slugs: ["codes", "fishing", "weapons", "black-market"] },
  { title: "Combat", slugs: ["breathing-styles", "blood-demon-arts"] },
  { title: "Progression", slugs: ["final-selection", "dungeons"] },
];

export function SiteFooter({ coreLinks, legalLinks }: { coreLinks: InternalLink[]; legalLinks: InternalLink[] }) {
  const contactHref = siteConfig.contact.email
    ? `mailto:${siteConfig.contact.email}`
    : siteConfig.contact.url;
  const bySlug = new Map(coreLinks.map((link) => [link.slug, link]));

  return (
    <footer className="mt-16 border-t border-border bg-card/45">
      <div className="site-container grid gap-8 py-10 sm:grid-cols-2 xl:grid-cols-5">
        <div>
          <p className="mb-3 text-lg font-black text-foreground">{siteConfig.siteName}</p>
          <p className="max-w-md text-sm leading-7 text-muted-foreground">{siteConfig.description}</p>
          <p className="mt-4 text-xs leading-6 text-muted-foreground">
            Independent fan-made guide. Not affiliated with Ouw Productions or Roblox.
          </p>
          {siteConfig.game.officialUrl ? (
            <a className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-primary" href={siteConfig.game.officialUrl} rel="noopener noreferrer">
              <ExternalLink size={16} />Play Slayers 2 on Roblox
            </a>
          ) : null}
        </div>
        {footerGroups.map((group) => (
          <div key={group.title}>
            <p className="mb-3 text-sm font-black uppercase tracking-widest text-foreground">{group.title}</p>
            <ul className="grid gap-2 text-sm text-muted-foreground">
              {group.slugs.map((slug) => {
                const link = bySlug.get(slug);
                return link ? <li key={slug}><Link className="hover:text-primary" href={routePath(slug)}>{link.label}</Link></li> : null;
              })}
            </ul>
          </div>
        ))}
        <div>
          <p className="mb-3 text-sm font-black uppercase tracking-widest text-foreground">More Guides</p>
          <ul className="grid gap-2 text-sm text-muted-foreground">
            {enabledMoreGuides.map((page) => (
              <li key={page.slug}><Link className="hover:text-primary" href={routePath(page.slug)}>{page.navLabel}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-3 text-sm font-black uppercase tracking-widest text-foreground">Legal</p>
          <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground">
            <li><Link className="hover:text-primary" href="/">Home</Link></li>
            {legalLinks.map((link) => (
              <li key={link.slug}><Link className="hover:text-primary" href={routePath(link.slug)}>{link.label}</Link></li>
            ))}
          </ul>
          {contactHref ? (
            <a className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary" href={contactHref} rel="noopener noreferrer">
              {siteConfig.contact.email ? <Mail size={16} /> : <ExternalLink size={16} />}
              {siteConfig.contact.email ?? "Report a correction"}
            </a>
          ) : null}
        </div>
      </div>
    </footer>
  );
}
