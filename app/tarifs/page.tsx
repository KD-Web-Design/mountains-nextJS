import React from "react";
import { Spacing } from "../sommets/components/Spacing";
import Pricing from "./components/Pricing";
import HeroPricing from "./components/HeroPricing";
import { MarqueeCountry } from "./components/MarqueeCountry";

export default function page() {
  return (
    <main>
      <Spacing size="sm" />
      <HeroPricing />
      <Pricing />
      <MarqueeCountry />
    </main>
  );
}
