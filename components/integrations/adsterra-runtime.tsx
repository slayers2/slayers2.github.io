"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { clearPageAds, mountNativeBanner, mountResponsiveBanner } from "./adsterra-load";

export function AdsterraRuntime() {
  const pathname = usePathname();

  useEffect(() => {
    const banners = [...document.querySelectorAll<HTMLElement>("[data-ad-banner-frame]")];
    const natives = [...document.querySelectorAll<HTMLElement>("[data-ad-native-frame]")];
    const banner = banners[0];
    const native = natives[0];
    banners.slice(1).forEach((node) => node.replaceChildren());
    natives.slice(1).forEach((node) => node.replaceChildren());
    clearPageAds();
    if (banner) mountResponsiveBanner(banner);
    if (native) mountNativeBanner(native);

    return () => {
      banner?.replaceChildren();
      if (banner) delete banner.dataset.adBannerSize;
      native?.replaceChildren();
      clearPageAds();
    };
  }, [pathname]);

  return null;
}
