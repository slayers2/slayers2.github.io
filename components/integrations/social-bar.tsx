"use client";

import { useEffect } from "react";
import { mountSocialBar } from "./adsterra-load";

export function SocialBar() {
  useEffect(() => {
    mountSocialBar();
  }, []);

  return null;
}
