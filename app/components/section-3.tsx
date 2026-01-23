"use client";

import { Button } from "@/components/ui/button";
import {
  // ArrowLeftIcon,
  // ArrowRightIcon,
  ChevronDownIcon,
  // ChevronLeftIcon,
  // ChevronRightIcon,
} from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { cn } from "@/lib/utils";
import { is } from "zod/locales";

const featureArray = [
  {
    title: "Scientifically robust",
    description:
      "Focuses on technical solutions that are scientifically sound, provides reliable, high-resolution data and tools grounded in research and tailored for field implementation.",
    url: "/icons/approach-1.svg",
    background: "bg-primary-pink",
  },
  {
    title: "Participatory and co-created",
    description:
      "Effective solutions emerge only when those implementing change help shape the tools that drive it. Developed collaboratively with local actors and stakeholders, the system is transparent, open-source, and accessible, fostering usability and long-term ownership.",
    url: "/icons/approach-2.svg",
    background: "bg-primary-pink-active",
  },
  {
    title: "Accessible high technology ",
    description:
      "Epistem handles complex coding and data processing behind the scenes, allowing users to generate maps and insights with ease, turning advanced science into actionable solutions.",
    url: "/icons/approach-3.svg",
    background: "bg-primary-pink-dark-hover",
  },
];
export const Section3 = () => {
  const [selected, setSelected] = useState(-1);

  const titleComp = useRef(null);
  const approachComp = useRef(null);
  const approachCompMobile = useRef(null);

  const titleIsInView = useInView(titleComp, { once: true });
  const approachIsInView = useInView(approachComp, { once: true });
  const approachIsInViewMobile = useInView(approachCompMobile, { once: true });

  return (
    <div className="flex flex-col items-center justify-start w-full max-w-360 px-3">
      <div className="grid grid-cols-12 w-full pt-8 lg:pt-12 pb-10 lg:pb-6 gap-y-3">
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
          <p className="font-pjs text-xl lg:text-6xl font-bold text-text-icons-base-main leading-normal text-center lg:text-left w-full">
            The Approach
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
          className="max-lg:col-span-12 lg:col-start-9 lg:col-end-13 flex flex-row items-center justify-end"
        >
          <p className="font-pjs text-xs lg:text-xl font-regular text-text-icons-base-main leading-normal text-center lg:text-justify w-full">
            Epistem integrates scientific rigor with real-world usability,
            making mapping and monitoring easier, smarter, and more inclusive.
          </p>
        </motion.div>
      </div>
      <div className="hidden lg:block w-full relative">
        <div
          ref={approachComp}
          className="grid grid-cols-12 py-20 gap-y-4 gap-x-4 h-fit"
        >
          {featureArray.map((item, index) => {
            const isSelected = index === selected;
            return (
              <motion.div
                // layout
                initial={{
                  opacity: 0,
                  // transition: {
                  // },
                }}
                animate={{
                  opacity: approachIsInView ? 1 : 0,
                  transition: {
                    visualDuration: 3,
                    delay: 0.2 + (index + 1) * 0.1,
                  },
                }}
                key={`approach-features-${index}`}
                className={`col-span-4 ${item.background} rounded-2xl overflow-hidden h-fit`}
              >
                <div
                  className={cn(
                    "flex flex-col items-center justify-between pt-4 h-fit w-full",
                    !isSelected && "aspect-square",
                  )}
                >
                  <div className="flex flex-col items-center">
                    <p className="px-6 font-pjs text-[28px] font-extrabold text-text-icons-on-color text-center min-h-22">
                      {item.title}
                    </p>
                    <div className="">
                      {/* <div className="px-6 mt-8 lg:mt-8"> */}
                    </div>
                  </div>
                  <Image
                    src={item.url}
                    alt={item.title}
                    width={200}
                    height={200}
                    className="h-fit w-full max-w-40 xl:max-w-50 aspect-square pt-5"
                  />
                  <div className={cn("pt-10", item.background)}>
                    <motion.p
                      layout="size"
                      className={cn(
                        "px-6 font-pjs text-2xl font-medium text-text-icons-on-color mt-0 text-ellipsis",
                        // index !== selected && "line-clamp-3",
                      )}
                      animate={{
                        display: isSelected ? "" : "-webkit-box",
                        webkitLineClamp: isSelected ? "unset" : 3,
                        overflow: isSelected ? "" : "hidden",
                        maxHeight: isSelected ? "400px" : "70px",
                        transition: {
                          bounce: 0,
                        },
                      }}
                    >
                      {item.description}
                    </motion.p>
                    <Button
                      className={`text-gray-100 py-4 w-full mt-2 rounded-t-none rounded-b-2xl ${item.background} hover:${item.background} hover:brightness-110`}
                      onClick={() => {
                        if (isSelected) {
                          setSelected(-1);
                          return;
                        }

                        setSelected(index);
                      }}
                      // variant={"ghost"}
                    >
                      <motion.div
                        animate={{ rotate: isSelected ? 180 : 0 }}
                        className=""
                      >
                        <ChevronDownIcon className="mx-auto size-6 " />
                      </motion.div>
                    </Button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      <div className="block lg:hidden w-full relative">
        <div
          ref={approachCompMobile}
          className="grid grid-cols-12 py-0 max-lg:gap-y-2 gap-x-4 h-fit"
        >
          {featureArray.map((item, index) => {
            const isSelected = index === selected;
            return (
              <motion.div
                // layout
                initial={{
                  opacity: 0,
                  // transition: {
                  // },
                }}
                animate={{
                  opacity: approachIsInViewMobile ? 1 : 0,
                  transition: {
                    visualDuration: 3,
                    delay: 0.2 + (index + 1) * 0.1,
                  },
                }}
                key={`approach-features-${index}`}
                className={`col-span-12 ${item.background} rounded-[12px] overflow-hidden h-fit p-4 flex flex-row`}
              >
                <div
                  className={cn(
                    "flex flex-row gap-x-3 items-start w-full justify-start",
                  )}
                >
                  <Image
                    src={item.url}
                    alt={item.title}
                    width={68}
                    height={68}
                    className="aspect-square size-17"
                  />
                  <div className="flex flex-col gap-y-6 items-start">
                    <p className="font-pjs text-sm lg:text-[28px] font-extrabold text-text-icons-on-color text-left">
                      {item.title}
                    </p>
                    <motion.p
                      layout="size"
                      className={cn(
                        "font-pjs text-[11px] font-medium text-text-icons-on-color",
                        // index !== selected && "line-clamp-3",
                      )}
                      animate={{
                        display: isSelected ? "" : "-webkit-box",
                        webkitLineClamp: isSelected ? "unset" : 3,
                        overflow: isSelected ? "" : "hidden",
                        maxHeight: isSelected ? "200px" : "30px",
                        transition: {
                          bounce: 0,
                        },
                      }}
                    >
                      {item.description}
                    </motion.p>
                  </div>
                </div>

                <Button
                  className={`text-gray-100 ${item.background} hover:${item.background} hover:brightness-110 mt-auto h-auto p-1 rounded-full`}
                  onClick={() => {
                    if (isSelected) {
                      setSelected(-1);
                      return;
                    }

                    setSelected(index);
                  }}
                  // variant={"ghost"}
                >
                  <motion.div
                    animate={{ rotate: isSelected ? 180 : 0 }}
                    className=""
                  >
                    <ChevronDownIcon className="mx-auto size-5 " />
                  </motion.div>
                </Button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
