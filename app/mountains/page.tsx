"use client";

import React, { useEffect } from "react";
import Parallax from "./components/Parallax";
import Lenis from "lenis";
import { Spacing } from "./components/Spacing";

import Chart from "./components/Barchart";
import { Piechart } from "./components/Piechart";

export default function Page() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main>
      <Spacing size="md" />
      <Parallax />
      <Spacing size="sm" />

      <Chart />
      <Piechart />
    </main>
  );
}
