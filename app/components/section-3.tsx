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

  const titleIsInView = useInView(titleComp, { once: true });
  const approachIsInView = useInView(approachComp, { once: true });

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
          className="col-start-3 lg:col-start-4 col-end-5 flex flex-row items-center justify-end"
        >
          <p className="font-pjs text-xs lg:text-xl font-regular text-text-icons-base-main leading-normal text-right">
            Epistem integrates scientific rigor with real-world usability,
            making mapping and monitoring easier, smarter, and more inclusive.
          </p>
        </motion.div>
      </div>
      <div className="w-full relative">
        <div
          ref={approachComp}
          className="grid grid-cols-4 lg:grid-cols-12 py-0 lg:py-20 gap-y-4 gap-x-4 h-fit"
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
                className={`col-span-4 pt-4 ${item.background} rounded-2xl h-fit`}
              >
                <div className="flex flex-col items-center justify-start">
                  <p className="px-6 font-pjs text-lg lg:text-3xl font-extrabold text-text-icons-on-color text-center min-h-10 lg:min-h-20">
                    {item.title}
                  </p>
                  <div className="px-6 mt-8 lg:mt-15">
                    <Image
                      src={item.url}
                      alt={item.title}
                      width={220}
                      height={220}
                      className="h-24 lg:h-55 w-auto"
                    />
                  </div>
                  <motion.p
                    layout="size"
                    className={cn(
                      "px-6 font-pjs text-md lg:text-2xl font-medium text-text-icons-on-color mt-8 lg:mt-19 text-ellipsis",
                      // index !== selected && "line-clamp-3",
                    )}
                    animate={{
                      display: isSelected ? "" : "-webkit-box",
                      webkitLineClamp: isSelected ? "unset" : 3,
                      overflow: isSelected ? "" : "hidden",
                      maxHeight: isSelected ? "400px" : "100px",
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
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
