import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";
import { AdBannerSlot } from "@/components/integrations/ad-slot";

export const metadata: Metadata = {
  title: { absolute: "Page Not Found" },
  description: "That address is not a page on the Slayers 2 wiki.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="site-container flex min-h-[65vh] flex-col justify-center py-20 text-center">
      <div>
        <p className="eyebrow">404</p>
        <h1>Page not found</h1>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
          That address is not on this Slayers 2 wiki. Use the guides linked from the home page.
        </p>
        <Link href="/" className="button-primary mt-8"><ArrowLeft size={18} />Return to the wiki</Link>
      </div>
      <AdBannerSlot />
    </main>
  );
}
