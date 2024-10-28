"use client";

import Link from "next/link";
import { ThemeToggle } from "./button-theme";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuItem,
} from "./ui/dropdown-menu";
import Sidebar from "./Sidebar";
import navItem from "@/lib/navItem";

const Navbar = () => {
  return (
    <nav className="fixed left-0 top-0 z-50 w-full px-5">
      <div className="z-50 mx-auto mt-5 sm:h-[120px] md:h-[105px] w-full rounded-base border-2 border-border bg-main px-5 text-text dark:border-darkBorder  ">
        <div className="flex items-center justify-between border-b-border border-b-2">
          <div className="my-1 flex">
            <p className="mx-1">3</p>
            <p className="mx-1">2</p>
            <p className="mx-1">1</p>
          </div>
          <div className="my-1 flex">
            {navItem.iconNav &&
              navItem.iconNav.map((item, i) => (
                <a key={i} href={item.href} className="mx-1">
                  {" "}
                  {item.icon}
                </a>
              ))}
          </div>
        </div>
        <div className="flex items-center justify-between my-1">
          <a href="/">
            <h3 className="text-3xl font-bold hidden lg:block">
              Palang Merah Remaja
            </h3>
            <h3 className="text-3xl font-bold block lg:hidden">PMR Wira</h3>
            <p>SMK Negeri 2 Sukabumi</p>
            {/* <p>SMEA</p> */}
          </a>

          <div className="flex items-center text-lg w500:text-base w400:text-sm">
            <div className="hidden lg:block">
              {navItem.links &&
                navItem.links.map((link, i) =>
                  link.isDropdown ? (
                    <DropdownMenu key={i}>
                      <DropdownMenuTrigger className="mr-10">
                        {link.label}
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>{link.label}</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        {link.dropdownItems &&  
                          link.dropdownItems.map((item, i) => (
                            <Link href={item.href} key={i}>
                              <DropdownMenuItem>{item.title}</DropdownMenuItem>
                            </Link>
                          ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  ) : (
                    <Link key={i} className="mr-10" href={link.href}>
                      {link.label}
                    </Link>
                  )
                )}
            </div>

            <ThemeToggle />
            <Sidebar />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
