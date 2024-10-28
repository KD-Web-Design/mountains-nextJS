import React from "react";
import { Spacing } from "../sommets/components/Spacing";
import Pricing from "./components/Pricing";

export default function page() {
  return (
    <main>
      <Spacing size="sm" />
      <Pricing />
      <Spacing size="md" />
    </main>
  );
}
