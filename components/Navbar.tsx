import React from "react";
import { ModeToggle } from "./ModeToggle";
import { Inter } from "next/font/google";
import MyPopover from "./MyPopover";

export const inter = Inter({
  subsets: ["latin"],
  weight: ["700"],
});

export default function Navbar() {
  return (
    <nav className="w-full h-20 flex justify-end gap-4 items-center relative p-8">
      <h1 className={`${inter.className} absolute left-8 text-xl`}>
        summitSeekers
      </h1>
      <ModeToggle />
      <div className="">
        <MyPopover />
      </div>
    </nav>
  );
}
