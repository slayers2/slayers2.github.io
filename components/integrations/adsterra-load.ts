import {
  DESKTOP_BANNER,
  MOBILE_BANNER,
  NATIVE_BANNER,
  SOCIAL_BAR,
  bannerAtOptionsSource,
  type BannerUnit,
} from "./adsterra-units";

const writeTargets = new WeakMap<HTMLScriptElement, HTMLElement>();
let writeRouterInstalled = false;
let socialBarStarted = false;

function installWriteRouter() {
  if (writeRouterInstalled) return;
  writeRouterInstalled = true;
  const originalWrite = document.write.bind(document);
  const deliver = (...parts: string[]) => {
    const current = document.currentScript;
    const target = current instanceof HTMLScriptElement ? writeTargets.get(current) : undefined;
    if (!target) {
      if (document.readyState === "loading") originalWrite(...parts);
      return;
    }
    const holder = document.createElement("div");
    holder.innerHTML = parts.join("");
    const writtenScripts = [...holder.querySelectorAll("script")];
    target.append(...holder.childNodes);
    for (const previous of writtenScripts) {
      const script = document.createElement("script");
      for (const attr of previous.attributes) script.setAttribute(attr.name, attr.value);
      script.text = previous.text;
      writeTargets.set(script, target);
      previous.replaceWith(script);
    }
  };
  document.write = deliver;
  document.writeln = (...parts: string[]) => deliver(...parts, "\n");
}

function removeScripts(src: string) {
  document.querySelectorAll(`script[src="${src}"]`).forEach((node) => node.remove());
}

export function clearPageAds() {
  removeScripts(DESKTOP_BANNER.src);
  removeScripts(MOBILE_BANNER.src);
  removeScripts(NATIVE_BANNER.src);
  document.getElementById(NATIVE_BANNER.containerId)?.remove();
}

function mountBannerUnit(frame: HTMLElement, unit: BannerUnit) {
  installWriteRouter();
  const options = document.createElement("script");
  options.text = bannerAtOptionsSource(unit);
  const invoke = document.createElement("script");
  invoke.src = unit.src;
  invoke.async = false;
  writeTargets.set(invoke, frame);
  frame.append(options, invoke);
}

export function mountResponsiveBanner(frame: HTMLElement) {
  const desktop = window.matchMedia("(min-width: 768px)").matches;
  const unit = desktop ? DESKTOP_BANNER : MOBILE_BANNER;
  frame.replaceChildren();
  frame.dataset.adBannerSize = desktop ? "728x90" : "320x50";
  try {
    mountBannerUnit(frame, unit);
  } catch {
    frame.replaceChildren();
    delete frame.dataset.adBannerSize;
  }
}

export function mountNativeBanner(frame: HTMLElement) {
  removeScripts(NATIVE_BANNER.src);
  document.getElementById(NATIVE_BANNER.containerId)?.remove();
  frame.replaceChildren();
  const container = document.createElement("div");
  container.id = NATIVE_BANNER.containerId;
  const script = document.createElement("script");
  script.async = true;
  script.setAttribute("data-cfasync", "false");
  script.src = NATIVE_BANNER.src;
  try {
    frame.append(script, container);
  } catch {
    frame.replaceChildren();
  }
}

export function mountSocialBar() {
  if (socialBarStarted) return;
  if (document.querySelector(`script[src="${SOCIAL_BAR.src}"]`)) {
    socialBarStarted = true;
    return;
  }
  socialBarStarted = true;
  try {
    installWriteRouter();
    const script = document.createElement("script");
    script.src = SOCIAL_BAR.src;
    script.async = false;
    writeTargets.set(script, document.body);
    document.body.appendChild(script);
  } catch {
    socialBarStarted = false;
  }
}
