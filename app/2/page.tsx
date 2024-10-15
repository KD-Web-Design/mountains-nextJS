"use client";

import React, { useEffect } from "react";
import Parallax from "./components/Parallax";
import Navbar from "@/components/Navbar";
import Lenis from "lenis";
import { Spacing } from "./components/Spacing";
import Hero from "./components/Hero";
import Chart from "./components/Chart";

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
      <Navbar />
      <Spacing size="md" />
      <Parallax />
      <Spacing size="sm" />
      <Hero />
      <Spacing size="sm" />
      <Chart />
    </main>
  );
}
