"use client";

import React, { useEffect } from "react";
import Parallax from "./components/Parallax";
import Navbar from "@/components/Navbar";
import Lenis from "lenis";

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
      <Parallax />
    </main>
  );
}
