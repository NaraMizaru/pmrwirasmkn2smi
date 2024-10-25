import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";

import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
  SheetHeader,
  SheetDescription,
} from "./ui/sheet";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import Link from "next/link";
import navItem from "@/lib/navItem";

const Sidebar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant={"default"} className="ml-4 block lg:hidden">
          <HamburgerMenuIcon width={"25"} height={"25"} />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>PMR Wira</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when youre done.
          </SheetDescription>
        </SheetHeader>
        <div className="mx-2 my-4">
          {navItem.links &&
            navItem.links.map((link, i) =>
              link.isDropdown ? (
                <Accordion
                  key={i}
                  className="w-full lg:w-[unset] my-4"
                  type="single"
                  collapsible
                >
                  <AccordionItem
                    className="lg:w-[500px] max-w-full"
                    value="item-1"
                  >
                    <AccordionTrigger>{link.label}</AccordionTrigger>
                    <AccordionContent>
                      {link.dropdownItems &&
                        link.dropdownItems.map((item, i) => (
                          <Link
                            key={i}
                            href={item.href}
                            className="mx-1 text-base"
                          >
                            <h3>{item.title}</h3>
                          </Link>
                        ))}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              ) : (
                <Button
                  key={i}
                  variant={"default"}
                  size={"lg"}
                  className="w-full text-lg font-semibold justify-start p-0 px-3"
                >
                  <Link href={link.href} className="text-left">
                    {link.label}
                  </Link>
                </Button>
              )
            )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
