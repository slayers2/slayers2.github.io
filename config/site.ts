import type { SiteConfig, ThemePresetName } from "./types";
import rawSiteConfig from "../content/generated/site.json";

const environmentTheme = process.env.NEXT_PUBLIC_THEME_PRESET as ThemePresetName | undefined;

const generated = rawSiteConfig as SiteConfig;

function envOrGenerated(envValue: string | undefined, generatedValue: string) {
  const trimmed = envValue?.trim();
  return trimmed ? trimmed : generatedValue;
}

function normalizeBasePath(value: string) {
  if (!value || value === "/") return "";
  return `/${value.replace(/^\/+|\/+$/g, "")}`;
}

const basePath = normalizeBasePath(envOrGenerated(process.env.NEXT_PUBLIC_BASE_PATH, generated.hosting.basePath));
const customDomain = envOrGenerated(process.env.NEXT_PUBLIC_CUSTOM_DOMAIN, generated.hosting.customDomain ?? "");

export const siteConfig: SiteConfig = {
  ...generated,
  theme: { ...generated.theme, preset: environmentTheme || generated.theme.preset },
  hosting: {
    siteUrl: envOrGenerated(process.env.NEXT_PUBLIC_SITE_URL, generated.hosting.siteUrl),
    basePath,
    customDomain: customDomain || null,
  },
};
