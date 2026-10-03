import { BANNER_SLOT_HTML, NATIVE_SLOT_HTML } from "@/lib/fixed-template/ad-slots";

export function AdBannerSlot() {
  return <div className="contents" dangerouslySetInnerHTML={{ __html: BANNER_SLOT_HTML }} />;
}

export function AdNativeSlot() {
  return <div className="contents" dangerouslySetInnerHTML={{ __html: NATIVE_SLOT_HTML }} />;
}
