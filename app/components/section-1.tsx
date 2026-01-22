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
import { AnimatePresence, motion, useInView } from "motion/react";
import { cn } from "@/lib/utils";

const demoArray = [
  {
    image: "/images/demo-2.webp",
    alt: "demo-1",
    height: 1000,
    width: 1000,
    caption: "Create your own map",
    description:
      "With Epistem, mapping your landscape becomes simple and powerful. Focus on the land use and land cover classes that matter most and create your own maps with user-friendly tools (no coding needed!) from publicly available satellite data.",
  },
  {
    image: "/images/demo-2.webp",
    alt: "demo-2",
    height: 1000,
    width: 1000,
    caption: "Identify Changes in your landscape",
    description:
      "Creating your own land use and land cover maps is just the start. Discover how your landscape changes with Epistem’s tools, providing transparent data and a consistent approach for planning and monitoring sustainable interventions.",
  },
  {
    image: "/images/demo-2.webp",
    alt: "demo-3",
    height: 1000,
    width: 1000,
    caption: "Access high-quality data",
    description:
      "High-quality land use and land cover maps rely on robust training and validation data. Through Epistem, you can access expert-annotated satellite imagery and field datasets sourced from a community of mapping enthusiasts and nature-based solutions practitioners.",
  },
  {
    image: "/images/demo-2.webp",
    alt: "demo-4",
    height: 1000,
    width: 1000,
    caption: "Contribute to a growing open-source community",
    description:
      "Epistem platforms are built with transparent and scalable, open-source approaches. Contribute by adding or improving datasets and mapping solutions and benefit from the community’s collective power to overcome map data barriers.",
  },
];

export const Section1 = () => {
  const [selected, setSelected] = useState(0);

  const titleComp = useRef(null);
  // const demoComp = useRef(null);

  const titleIsInView = useInView(titleComp, { once: true });
  // const demoIsInView = useInView(demoComp, { once: true });

  const [direction, setDirection] = useState<1 | -1>(1);

  const selectedComp = () => {
    const item = demoArray[selected];
    return (
      <AnimatePresence mode="wait">
        <div className="w-full mb-8 rounded-3xl shadow-2xl">
          <motion.div
            className={cn(
              "relative rounded-3xl overflow-hidden border-10 border-black w-full col-span-11",
              // isSelected && "block",
              // `col-start-${1 + 2 * index} col-end-${6 + 2 * index}`,
              // `lg:col-start-${1 + 2 * index} lg:col-end-${5 + 2 * index}`,

              // index !== selected && "brightness-50",
            )}
            key={`demo-arr-${item.caption}`}
            // key={`demo-arr-${index}`}
            //
            // initial={{ x: "100%" }}
            // animate={{
            //   x: "0%",
            // }}
            // exit={{ x: "-100%" }}
            initial={{ opacity: 0, x: direction * 50 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: {
                // delay: 0.2,
                type: "spring",
                visualDuration: 0.3,
                bounce: 0.4,
              },
            }}
            exit={{ opacity: 0, x: direction * -50 }}
          >
            <Image
              key={`demo-arr-${item.caption}-img`}
              src={item.image}
              alt={item.alt}
              height={item.height}
              width={item.width}
              className={cn("aspect-square w-full z-21 min-w-25")}
            />
            <motion.p
              layout
              className={cn(
                "font-pjs text-[10px] font-bold leading-normal text-text-icons-on-color bg-transparent z-23 absolute bottom-2.5 left-2.5 w-[90%]",
                // "font-pjs text-lg font-bold leading-normal text-text-icons-on-color bg-transparent z-23 absolute bottom-4 left-4 w-full",
              )}
            >
              {item.caption}
            </motion.p>
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
          </motion.div>
        </div>
      </AnimatePresence>
    );
  };

  return (
    <div className="flex flex-col items-center justify-start w-full max-w-360 px-3">
      <div className="grid grid-cols-12 w-full pt-12 pb-6 gap-y-4">
        <motion.div
          ref={titleComp}
          initial={{ y: "100%" }}
          animate={{
            y: titleIsInView ? 0 : "100%",
            transition: {
              visualDuration: 2,
            },
          }}
          className="col-span-12 lg:col-span-5 flex flex-row items-center"
        >
          <p className="w-full font-pjs text-xl lg:text-6xl font-bold text-text-icons-base-main leading-normal text-center lg:text-left">
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
          // className="col-start-3 lg:col-start-4 col-end-5 flex flex-row items-center justify-end"
          className="max-lg:col-span-12 lg:col-start-9 lg:col-end-13 flex flex-row items-center justify-end"
        >
          <p className="w-full font-pjs text-xs lg:text-xl font-regular text-text-icons-base-main leading-normal text-center lg:text-justify">
            Empower land use and land cover (LULC) planning and monitoring with
            intuitive tools that turn complex data into actionable maps.
          </p>
        </motion.div>
      </div>
      <div
        className="rounded-md lg:rounded-2xl max-lg:pb-9 max-lg:px-11.5 lg:px-25 py-13 lg:py-16 space-y-5 lg:space-y-16 w-full"
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
            className=""
          >
            <div>{selectedComp()}</div>
            {/* {demoArray.map((item, index) => {
                const isSelected = index === selected;

                if (!isSelected) {
                  return <div key={`demo-arr-${index}`}></div>;
                }

                return (
                  <motion.div
                    className={cn(
                      "relative rounded-3xl overflow-hidden border-10 border-black w-full col-span-11",
                      // isSelected && "block",
                      // `col-start-${1 + 2 * index} col-end-${6 + 2 * index}`,
                      // `lg:col-start-${1 + 2 * index} lg:col-end-${5 + 2 * index}`,

                      // index !== selected && "brightness-50",
                    )}
                    key={`demo-arr-${index}`}
                    // initial={{ x: "-100%" }}
                    // animate={{
                    //   x: "0%",
                    // }}
                    exit={{ x: "-100%" }}
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
                        "font-pjs text-[10px] font-bold leading-normal text-text-icons-on-color bg-transparent z-23 absolute bottom-2.5 left-2.5 w-[90%]",
                        // "font-pjs text-lg font-bold leading-normal text-text-icons-on-color bg-transparent z-23 absolute bottom-4 left-4 w-full",
                        !isSelected &&
                          (index > selected
                            ? "left-auto right-2.5 text-right w-1/2"
                            : "left-2.5 text-left w-1/2"),
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
              })} */}
          </motion.div>

          <motion.div
            layout
            initial={{ y: "100%" }}
            animate={{
              y: 0,
              transition: {
                visualDuration: 2,
              },
            }}
            className="hidden lg:grid grid-cols-11 lg:grid-cols-11 gap-x-2 grid-rows-1 w-full mb-8 lg:mb-12 rounded-xl lg:rounded-[45px] shadow-2xl"
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
                      "font-pjs text-[6px] lg:text-lg font-bold leading-normal text-text-icons-on-color bg-transparent z-23 absolute bottom-2.5 lg:bottom-4 left-2.5 lg:left-4 w-[90%]",
                      // "font-pjs text-lg font-bold leading-normal text-text-icons-on-color bg-transparent z-23 absolute bottom-4 left-4 w-full",
                      !isSelected &&
                        (index > selected
                          ? "left-auto lg:left-auto right-2.5 lg:right-4 text-right w-1/2"
                          : "left-2.5 lg:left-4 text-left w-1/2"),
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
          <div className="hidden lg:block space-y-4">
            <p className="text-center font-pjs text-xl lg:text-5xl font-bold text-text-icons-on-color leading-normal">
              {demoArray[selected].caption}
            </p>
            <p className="text-center font-pjs text-xs lg:text-2xl font-medium text-text-icons-on-color leading-normal">
              {demoArray[selected].description}
            </p>
          </div>
          <div className="block lg:hidden space-y-4">
            <div className="flex flex-row justify-between items-center gap-x-2">
              <Button
                disabled={selected === 0}
                className="rounded-full p-2 aspect-square h-6"
                // size={"icon"}
                style={{
                  paddingInline: 0,
                }}
                onClick={() => {
                  setSelected(selected - 1);
                  setDirection(-1);
                }}
              >
                <ChevronLeftIcon className="size-3.5" />
              </Button>

              <p className="text-center font-pjs text-xl font-bold text-text-icons-on-color leading-normal">
                {demoArray[selected].caption}
              </p>
              <Button
                disabled={selected === 3}
                className="rounded-full p-2 aspect-square h-6"
                // size={"icon"}
                style={{
                  paddingInline: 0,
                }}
                onClick={() => {
                  setSelected(selected + 1);
                  setDirection(1);
                }}
              >
                <ChevronRightIcon className="size-3.5" />
              </Button>
            </div>
            <p className="text-center font-pjs text-xs font-medium text-text-icons-on-color leading-normal">
              {demoArray[selected].description}
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col items-center">
          <Button className="px-5 py-1 lg:py-3 h-auto rounded-md">
            <p className="font-aptos text-[13px] lg:text-lg font-semibold lg:font-bold text-text-icons-on-color">
              Generate Map with Luma
            </p>
          </Button>
        </div>
      </div>
      {/* <h1 className="text-4xl font-bold">Section 1</h1> */}
    </div>
  );
};
