"use client";

import React, { useEffect } from "react";
import Parallax from "./components/Parallax";
import Lenis from "lenis";
import { Spacing } from "./components/Spacing";
import Chart from "./components/Barchart";
import { Piechart } from "./components/Piechart";
import ChartHeader from "./components/ChartHeader";
import Stats from "./components/Stats";

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
      <Spacing size="sm" />
      <Parallax />
      <Spacing size="md" />
      <ChartHeader />
      <div className="max-lg:flex-col flex max-w-screen-xl mx-auto items-center justify-center gap-16 p-8">
        <Chart />
        <Piechart />
      </div>
      <Spacing size="sm" />
      <Stats />
      <Spacing size="sm" />
    </main>
  );
}
