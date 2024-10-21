"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  return (
    <div>
      {theme === "dark" ? (
        <Button
          variant="ghost"
          className="hover:bg-inherit border-zinc-900 bg-[#0c0c0d]"
          size="icon"
          onClick={() => setTheme("light")}
        >
          <MoonIcon className="w-5 h-5" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      ) : (
        <Button
          variant="ghost"
          size="icon"
          className="hover:bg-inherit border-zinc-100 bg-inherit"
          onClick={() => setTheme("dark")}
        >
          <SunIcon className="w-5 h-5" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      )}
    </div>
  );
}
