import type { Metadata } from "next";
import { ShopSection } from "@/components/design-explode/shop-section";

export const metadata: Metadata = { title: "Shop — DESIGN EXPLODE" };

export default function ShopPage() {
  return (
    <div className="pt-28">
      <ShopSection standalone />
    </div>
  );
}
