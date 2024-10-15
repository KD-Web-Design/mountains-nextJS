import React from "react";

import { Inter } from "next/font/google";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

export const inter = Inter({
  subsets: ["latin"],
  weight: ["700"],
});

const menu: { title: string; route: string }[] = [
  {
    title: "Home",
    route: "/",
  },
  {
    title: "Mountains",
    route: "/mountains",
  },
  {
    title: "Page 3",
    route: "/3",
  },
];

export default function Navbar() {
  return (
    <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6 fixed z-10 bg-background shadow-md">
      {/* MOBILE  */}

      <h2 className="mx-2 text-xl font-bold">summitSeekers</h2>
      <Link href="#" className="mr-6 flex items-center" prefetch={false}>
        <MountainIcon className="h-6 w-6" />
      </Link>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="lg:hidden ml-auto">
            <MenuIcon className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <Link href="#" className="mr-6 flex" prefetch={false}>
            <MountainIcon className="h-6 w-6" />
          </Link>
          <div className="grid gap-2 py-6">
            <ul className="">
              {menu.map((item, index) => (
                <li key={index}>
                  {item.route ? (
                    <Link
                      href={item.route}
                      className="flex w-full items-center py-2 text-lg font-semibold"
                    >
                      {item.title}
                    </Link>
                  ) : (
                    <span className="flex w-full items-center py-2 text-lg font-semibold focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50">
                      {item.title}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex w-full justify-between items-center">
            <h2 className="text-md font-semibold">Switch Theme</h2>
            <ModeToggle />
          </div>
        </SheetContent>
      </Sheet>

      {/* DESKTOP  */}

      <nav className="ml-auto hidden lg:flex gap-6">
        <ul className="flex gap-6">
          {menu.map((item, index) => (
            <li key={index}>
              {item.route ? (
                <Link
                  href={item.route}
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                >
                  {item.title}
                </Link>
              ) : (
                <span className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50">
                  {item.title}
                </span>
              )}
            </li>
          ))}
        </ul>
        <ModeToggle />
      </nav>
    </header>
  );
}

function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

export function MountainIcon({
  width = "24",
  height = "24",
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
