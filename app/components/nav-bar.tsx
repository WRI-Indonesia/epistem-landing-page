"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { MenuIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export const NavBar = () => {
  const [open, setOpen] = useState(true);

  const handleMouseOver = () => {
    // setOpen(true);
  };
  const handleMouseOut = () => {
    // setOpen(false);
  };

  return (
    // <AnimatePresence>
    <div
      className={cn(
        "fixed top-3 px-3 lg:px-3 w-full block max-w-360 left-1/2 -translate-x-1/2 z-50",
        // "fixed top-3 px-3 w-full hidden lg:block max-w-360 left-1/2 -translate-x-1/2 z-50",
        {},
      )}
      onMouseOut={handleMouseOut}
    >
      <AnimatePresence>
        <motion.div
          layout
          className={cn(
            "bg-white rounded-2xl shadow px-5 py-3 flex flex-row items-center gap-x-5 lg:gap-x-10",
            {
              "justify-end ml-auto w-fit py-5": !open,
            },
          )}
          onMouseOver={handleMouseOver}
        >
          {open && (
            <motion.div
              className={cn(
                "flex flex-row items-center justify-between w-full",
              )}
              transition={{
                visualDuration: 2,
                bounce: 0,
              }}
              initial={{
                x: "+100%",
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
              }}
              exit={{
                x: "+100%",
                width: 0,
                opacity: 0,
                height: 0,
                transition: {
                  visualDuration: 0.1,
                },
              }}
            >
              <div className="flex flex-row items-center gap-x-2">
                {/* <Image
                  src="/images/epistem-logo.webp"
                  alt="epistem logo"
                  width={270}
                  height={265}
                  className="size-8 lg:size-16 pt-1.25 pr-1.25"
                />
                <p className="text-black font-inter text-sm lg:text-2xl font-bold">
                  Epistem
                </p> */}
                <Image
                  src="/images/epistem-logos.webp"
                  alt="epistem logo"
                  width={500}
                  height={216}
                  className="h-9 lg:h-16 w-auto pt-1.25 pr-1.25"
                />
              </div>

              <div className="flex flex-row items-center space-x-1.5">
                <Button variant={"ghost"} className="p-1">
                  <p className="font-inter text-sm lg:text-2xl font-bold text-primary-pink">
                    EN
                  </p>
                </Button>
                <Separator
                  orientation="vertical"
                  className="data-[orientation=vertical]:min-h-6 bg-muted"
                />
                <Button variant={"ghost"} className="p-1">
                  <p className="font-inter text-sm lg:text-2xl font-regular text-muted">
                    ID
                  </p>
                </Button>
              </div>
            </motion.div>
          )}
          <Button
            variant="ghost"
            size="icon-lg"
            className="p-6 rounded-full ml-auto bg-white"
          >
            <MenuIcon className="text-primary-pink size-9 lg:size-10" />
          </Button>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
