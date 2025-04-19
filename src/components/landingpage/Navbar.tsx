"use client";
import * as React from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Navbar = () => {
  const { setTheme } = useTheme();
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="w-full px-6 md:px-30 py-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/synex_logo.svg"
            alt="synex_logo"
            width={25}
            height={25}
          />
          <h1 className="font-bold text-lg">UI</h1>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-15 text-sm font-medium">
          <li>
            <Link href="/components">Components</Link>
          </li>
          <li>
            <Link href="/template">
              Templates
              <span className="ml-2 rounded-md border border-emerald-400 bg-emerald-200 px-1.5 pb-0.5 text-xs leading-none text-emerald-700 no-underline group-hover:no-underline dark:bg-emerald-300/10 dark:text-emerald-500">
                new
              </span>
            </Link>
          </li>
          <li>
            <Link href="/review">Feedback</Link>
          </li>
          <li>
            <Link href="https://synextech.in" target="_blank">
              About Us
            </Link>
          </li>
        </ul>

        {/* Right Controls */}
        <div className="hidden md:flex items-center gap-4">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setTheme("dark")}
            className="dark:hidden"
          >
            <Sun className="h-[1.2rem] w-[1.2rem]" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setTheme("light")}
            className="hidden dark:flex"
          >
            <Moon className="h-[1.2rem] w-[1.2rem]" />
          </Button>
          <Button>Book A Call</Button>
        </div>

        {/* Hamburger for mobile */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mt-4 flex flex-col gap-4 md:hidden">
          <Link href="/components" onClick={toggleMenu}>
            Components
          </Link>
          <Link href="/docs" onClick={toggleMenu}>
            Docs
          </Link>
          <Link href="/review" onClick={toggleMenu}>
            Feedback
          </Link>
          <Link
            href="https://synextech.in"
            target="_blank"
            onClick={toggleMenu}
          >
            About Us
          </Link>
          <div className="flex gap-4 mt-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setTheme("dark")}
              className="dark:hidden"
            >
              <Sun className="h-[1.2rem] w-[1.2rem]" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setTheme("light")}
              className="hidden dark:flex"
            >
              <Moon className="h-[1.2rem] w-[1.2rem]" />
            </Button>
            <Button className="flex-1">Book A Call</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
