import React from "react";
import { MountainIcon } from "./Navbar";
import Link from "next/link";
import GithubIcon from "@/icons/GithubIcon";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import LinkedInIcon from "@/icons/LinkedInIcon";

export default function Footer() {
  return (
    <footer className="bg-gray-100 rounded-lg shadow dark:bg-gray-900 m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="#"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <MountainIcon />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              summitSeekers
            </span>
          </a>
          <ul className="flex items-center gap-4 justify-end">
            <Link
              href="https://github.com/KD-Web-Design"
              target="_blank"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "size-6 p-0"
              )}
            >
              <GithubIcon size={24} className="text-foreground" />
            </Link>

            <Link
              href="https://www.linkedin.com/in/kd-web-design-64b496315/"
              target="_blank"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "size-6 p-0"
              )}
            >
              <LinkedInIcon size={24} className="text-foreground" />
            </Link>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{" "}
          <a href="#" className="hover:underline">
            summitSeekers™.
          </a>
          <br />
          Made with ❤️ by KD Web Design.
        </span>
      </div>
    </footer>
  );
}
