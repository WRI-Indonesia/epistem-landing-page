"use client";

import { Button } from "@/components/ui/button";
import {
  // ArrowLeftIcon,
  // ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { cn } from "@/lib/utils";

const demoArray = [
  {
    image: "/images/demo-2.webp",
    alt: "demo-1",
    height: 1000,
    width: 1000,
    caption: "Generate the maps you need",
  },
  {
    image: "/images/demo-2.webp",
    alt: "demo-2",
    height: 1000,
    width: 1000,
    caption: "Identify Changes in your landscape",
  },
  {
    image: "/images/demo-2.webp",
    alt: "demo-3",
    height: 1000,
    width: 1000,
    caption: "Access high-quality data",
  },
  {
    image: "/images/demo-2.webp",
    alt: "demo-4",
    height: 1000,
    width: 1000,
    caption: "Contribute to a growing open-source community",
  },
];

export const Section1 = () => {
  const [selected, setSelected] = useState(0);

  const titleComp = useRef(null);
  // const demoComp = useRef(null);

  const titleIsInView = useInView(titleComp, { once: true });
  // const demoIsInView = useInView(demoComp, { once: true });

  return (
    <div className="flex flex-col items-center justify-start w-full max-w-360 px-3">
      <div className="grid grid-cols-4 w-full pt-12 pb-6">
        <motion.div
          ref={titleComp}
          initial={{ y: "100%" }}
          animate={{
            y: titleIsInView ? 0 : "100%",
            transition: {
              visualDuration: 2,
            },
          }}
          className="col-span-2 flex flex-row items-center"
        >
          <p className="font-pjs text-xl lg:text-6xl font-bold text-text-icons-base-main leading-normal">
            Overcoming Map Data Barriers
          </p>
        </motion.div>
        <motion.div
          initial={{ y: "100%" }}
          animate={{
            y: titleIsInView ? 0 : "100%",
            transition: {
              visualDuration: 2,
            },
          }}
          className="col-start-3 lg:col-start-4 col-end-5 flex flex-row items-center justify-end"
        >
          <p className="font-pjs text-xs lg:text-xl font-regular text-text-icons-base-main leading-normal text-right">
            Empower land use and land cover (LULC) planning and monitoring with
            intuitive tools that turn complex data into actionable maps.
          </p>
        </motion.div>
      </div>
      <div
        className="rounded-2xl px-2.5 lg:px-25 max-lg:pb-8 py-13 lg:py-16 space-y-5 lg:space-y-16 w-full"
        style={{
          background: "linear-gradient(120deg, #CC4778 41.94%, #A62555 89.53%)",
        }}
      >
        <div className="flex flex-col items-center">
          <div className="hidden lg:block ml-auto space-x-4 mb-6">
            <Button
              disabled={selected === 0}
              className="rounded-full"
              size={"icon-lg"}
              onClick={() => {
                setSelected(selected - 1);
              }}
            >
              <ChevronLeftIcon className="size-6" />
            </Button>
            <Button
              disabled={selected === 3}
              className="rounded-full"
              size={"icon-lg"}
              onClick={() => {
                setSelected(selected + 1);
              }}
            >
              <ChevronRightIcon className="size-6" />
            </Button>
          </div>
          {/*  */}

          <motion.div
            layout
            initial={{ y: "100%" }}
            animate={{
              y: 0,
              transition: {
                visualDuration: 2,
              },
            }}
            className="grid grid-cols-11 lg:grid-cols-11 gap-x-2 grid-rows-1 w-full mb-8 lg:mb-12 rounded-xl lg:rounded-[45px] shadow-2xl"
            // style={{
            //   boxShadow: "2.487px 2.487px 4.974px 0 rgba(0, 0, 0, 0.25);",
            // }}
          >
            {demoArray.map((item, index) => {
              const isSelected = index === selected;
              return (
                <motion.div
                  className={cn(
                    "row-start-1 row-end-2 relative rounded-xl lg:rounded-[45px] overflow-hidden border-8 lg:border-16 border-black w-full",
                    // `col-start-${1 + 2 * index} col-end-${6 + 2 * index}`,
                    `lg:col-start-${1 + 2 * index} lg:col-end-${5 + 2 * index}`,

                    // index !== selected && "brightness-50",
                  )}
                  initial={{ opacity: 0 }}
                  key={`demo-arr-${index}`}
                  style={{
                    gridColumnStart: 1 + 2 * index,
                    gridColumnEnd: 6 + 2 * index,
                  }}
                  animate={{
                    opacity: 1,
                    zIndex: 20 - Math.abs(selected - index),
                    filter: isSelected ? "brightness(1)" : "brightness(0.5)",
                    transition: {
                      visualDuration: 2,
                    },
                  }}
                  onClick={() => {
                    setSelected(index);
                  }}
                >
                  <Image
                    key={`demo-arr-${index}-img`}
                    src={item.image}
                    alt={item.alt}
                    height={item.height}
                    width={item.width}
                    className={cn("aspect-square w-full z-21 min-w-25")}
                  />
                  <motion.p
                    layout
                    className={cn(
                      "font-pjs text-[6px] lg:text-lg font-bold leading-normal text-text-icons-on-color bg-transparent z-23 absolute bottom-1.5 lg:bottom-3 left-1.5 lg:left-3 w-[90%]",
                      // "font-pjs text-lg font-bold leading-normal text-text-icons-on-color bg-transparent z-23 absolute bottom-3 left-3 w-full",
                      !isSelected &&
                        (index > selected
                          ? "left-auto lg:left-auto right-1.5 lg:right-3 text-right w-1/2"
                          : "left-1.5 lg:left-3 text-left w-1/2"),
                    )}
                  >
                    {item.caption}
                  </motion.p>
                  {isSelected && (
                    <motion.div
                      className="h-full w-full absolute top-0 z-22"
                      initial={{ y: "100%" }}
                      animate={{
                        y: 0,
                        transition: {
                          visualDuration: 2,
                        },
                      }}
                      style={{
                        background:
                          "linear-gradient(180deg,rgba(0,0,0,0) 0%, rgba(204, 71, 120, 0.3) 77%, rgba(204, 71, 120, 0.6) 90%, rgba(204, 71, 120, 0.8) 100%)",
                      }}
                    ></motion.div>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
          {/*  */}
          <div className="space-y-4">
            <p className="text-center font-pjs text-xl lg:text-5xl font-bold text-text-icons-on-color leading-normal">
              Create your own map
            </p>
            <p className="text-center font-pjs text-xs lg:text-2xl font-medium text-text-icons-on-color leading-normal">
              With Epistem, mapping your landscape becomes simple and powerful.
              Focus on the land use and land cover classes that matter most and
              create your own maps with user-friendly tools (no coding needed!)
              from publicly available satellite data.
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col items-center">
          <Button className="">
            <p className="font-aptos text-xs lg:text-lg font-semibold lg:font-bold text-text-icons-on-color">
              Generate Map with Luma
            </p>
          </Button>
        </div>
      </div>
      {/* <h1 className="text-4xl font-bold">Section 1</h1> */}
    </div>
  );
};
