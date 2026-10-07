import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { CustomCursor } from "@/components/design-explode/custom-cursor";
import { LoadingScreen } from "@/components/design-explode/loading-screen";
import { Providers } from "@/components/design-explode/providers";
import { SiteFooter } from "@/components/design-explode/site-footer";
import { SiteHeader } from "@/components/design-explode/site-header";
import "./globals.css";

export const metadata: Metadata = {
  title: "DESIGN EXPLODE — Experimental Design Festival",
  description:
    "A fictional creative festival exploring design, motion, typography, digital art and interactive experiences. Visually inspired by Design Bomb; not affiliated.",
  openGraph: {
    title: "DESIGN EXPLODE — Experimental Design Festival",
    description:
      "A fictional creative festival exploring design, motion, typography, digital art and interactive experiences.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0b0b14",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body id="top">
        <Providers>
          <LoadingScreen />
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
          <CustomCursor />
        </Providers>
      </body>
    </html>
  );
}
