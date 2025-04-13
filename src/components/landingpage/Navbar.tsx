"use client";
import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Navbar = () => {
  const { setTheme } = useTheme();
  return (
    <section className="flex items-center justify-between mt-4 mx-30">
      <div className="flex">
        <Image src="/synex_logo.svg" alt="synex_logo" width={25} height={25} />
        <h1>UI</h1>
      </div>

      <ul className="flex gap-20">
        <li>
          <Link href={"/components"}>Components</Link>
        </li>
        <li>
          <Link href={"/docs"}>Docs</Link>
        </li>
        <li>
          <Link href={"/review"}>Feedback</Link>
        </li>
      </ul>
      <div className="flex gap-10">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setTheme("dark")}
          className="dark:hidden"
        >
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() => setTheme("light")}
          className="hidden dark:flex"
        >
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </Button>
        <Button>Book A Call</Button>
      </div>
    </section>
  );
};

export default Navbar;
