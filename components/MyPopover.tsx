import React from "react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "./ui/button";
import { DotsVerticalIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const menu: { title: string; route: string }[] = [
  {
    title: "Accueil",
    route: "/",
  },
  {
    title: "Page 2",
    route: "/2",
  },
  {
    title: "Page 3",
    route: "/3",
  },
];

export default function MyPopover() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="">
          <DotsVerticalIcon />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {menu.map((item, index) => (
            <li key={index}>
              {item.route ? (
                <Link
                  href={item.route}
                  className="block px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors rounded"
                >
                  {item.title}
                </Link>
              ) : (
                <span className="block px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors rounded">
                  {item.title}
                </span>
              )}
            </li>
          ))}
        </ul>
      </PopoverContent>
    </Popover>
  );
}
