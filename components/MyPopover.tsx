import React from "react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "./ui/button";
import { DotsVerticalIcon } from "@radix-ui/react-icons";

const menu: { title: string }[] = [
  {
    title: "1",
  },
  {
    title: "2",
  },
  {
    title: "3",
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
            <li
              key={index}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors rounded"
            >
              {item.title}
            </li>
          ))}
        </ul>
      </PopoverContent>
    </Popover>
  );
}
