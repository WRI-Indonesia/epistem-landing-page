"use client";

import { Button } from "@/components/ui/button";
// import {
//   ArrowLeftIcon,
//   ArrowRightIcon,
//   ChevronLeftIcon,
//   ChevronRightIcon,
// } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { cn } from "@/lib/utils";

const featureArray = [
  {
    component: (
      <div className="h-full w-full lg:grid lg:grid-cols-12 lg:grid-rows-1 gap-x-10">
        <motion.div
          initial={{
            opacity: 0,
            scale: 1,
          }}
          animate={{
            opacity: 1,
            scale: 1.6,
            transition: {
              visualDuration: 1,
            },
          }}
          className="pointer-events-none col-span-6 lg:col-span-5 max-lg:w-fit flex flex-col items-center lg:justify-center max-lg:mx-auto"
        >
          <Image
            width={1616}
            height={1238}
            src="/images/luma-display.webp"
            className="max-sm:max-w-50 max-md:max-w-80 max-lg:max-w-100 lg:w-full lg:ml-20 mx-auto max-lg:pl-10 relative lg:right-5"
            alt="luma"
          />
        </motion.div>
        <motion.div
          layout
          initial={{
            opacity: 0,
            x: "100%",
          }}
          animate={{
            opacity: 1,
            x: 0,
            transition: {
              visualDuration: 1,
            },
          }}
          className="space-y-6 flex flex-col justify-end pb-10 col-span-6 lg:col-span-7 max-md:pt-10 max-lg:pt-20 lg:pl-20"
        >
          <p className="font-pjs text-xs lg:text-2xl font-medium text-text-icons-on-color leading-normal">
            Luma
          </p>
          <div className="space-y-4">
            <p className="font-pjs text-xl lg:text-4xl font-bold text-text-icons-on-color leading-normal">
              See past trends, <br />
              plan future action
            </p>
            <p className="font-pjs text-xs lg:text-2xl font-regular text-text-icons-on-color leading-normal">
              Intuitive no-coding interface for creating, analysing, and
              collectively acting of customizable land use and land cover map
              data.
            </p>
          </div>
          <div className="">
            <Button variant={"primary"} size={"lg"} className="">
              <p className="font-aptos text-xs lg:text-lg font-semibold lg:font-bold text-text-icons-on-color">
                Try Luma Mockup
              </p>
            </Button>
          </div>
        </motion.div>
      </div>
    ),
  },
  {
    component: (
      // <div className="h-full w-full grid grid-cols-12 gap-x-10">
      //   <motion.div
      //     layout
      //     initial={{
      //       opacity: 0,
      //       x: "-100%",
      //       y: 0,
      //     }}
      //     animate={{
      //       opacity: 1,
      //       x: 0,
      //       y: 0,
      //       transition: {
      //         visualDuration: 1,
      //       },
      //     }}
      //     className="space-y-6 flex flex-col justify-end pb-10 col-span-7"
      //   >
      //     <p className="font-pjs text-2xl font-medium text-text-icons-on-color leading-normal">
      //       Rona
      //     </p>
      //     <div className="space-y-4">
      //       <p className="font-pjs text-4xl font-bold text-text-icons-on-color leading-normal">
      //         Shared data for shared benefits
      //       </p>
      //       <p className="font-pjs text-2xl font-regular text-text-icons-on-color leading-normal">
      //         Scalable repository of participatory land use and land cover
      //         mapping.
      //       </p>
      //     </div>
      //     <div className="">
      //       <Button variant={"primary"} size={"lg"} className="" disabled>
      //         <p className="font-aptos text-xs lg:text-lg font-semibold lg:font-bold text-text-icons-on-color">
      //           Rona Coming Soon
      //         </p>
      //       </Button>
      //     </div>
      //   </motion.div>
      //   <motion.div
      //     initial={{
      //       opacity: 0,
      //     }}
      //     animate={{
      //       opacity: 1,
      //       scale: 1.2,
      //       transition: {
      //         visualDuration: 1,
      //       },
      //     }}
      //     className="pointer-events-none col-span-5 right-20 relative"
      //   >
      //     <Image
      //       width={1616}
      //       height={1238}
      //       src="/images/display.webp"
      //       className="ml-20"
      //       alt="luma"
      //       style={{
      //         transform: "scale(-1, 1)",
      //       }}
      //     />
      //   </motion.div>
      // </div>
      <div className="h-full w-full lg:grid lg:grid-cols-12 lg:grid-rows-1 gap-x-10 flex flex-col-reverse">
        <motion.div
          layout
          initial={{
            opacity: 0,
            x: "100%",
          }}
          animate={{
            opacity: 1,
            x: 0,
            transition: {
              visualDuration: 1,
            },
          }}
          // exit={{ opacity: 0 }}
          className="space-y-6 flex flex-col justify-end pb-10 col-span-6 lg:col-span-6 max-md:pt-10 max-lg:pt-20"
          // className="space-y-6 flex flex-col justify-end pb-10 col-span-6 lg:col-span-7 max-lg:pt-20 lg:pl-20"
        >
          <p className="font-pjs text-xs lg:text-2xl font-medium text-text-icons-on-color leading-normal">
            Rona
          </p>
          <div className="space-y-4 w-[90%]]">
            <p className="font-pjs text-xl lg:text-4xl font-bold text-text-icons-on-color leading-normal">
              Shared data for shared benefits
            </p>
            <p className="font-pjs text-xs lg:text-2xl font-regular text-text-icons-on-color leading-normal">
              Scalable repository of participatory land use and land cover
              mapping.
            </p>
          </div>
          <div className="">
            <Button variant={"primary"} size={"lg"} className="" disabled>
              <p className="font-aptos text-xs lg:text-lg font-semibold lg:font-bold text-text-icons-on-color">
                Rona Coming Soon
              </p>
            </Button>
          </div>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            scale: 1,
          }}
          animate={{
            opacity: 1,
            scale: 1.6,
            transition: {
              visualDuration: 1,
            },
          }}
          // exit={{ opacity: 0 }}
          className="pointer-events-none col-span-6 lg:col-span-5 max-lg:w-fit flex flex-col items-center max-lg:mx-auto"
        >
          <Image
            width={1616}
            height={1238}
            src="/images/luma-display-left.webp"
            // mx-auto pl-10
            className="max-sm:max-w-50 max-md:max-w-80 max-lg:max-w-100 lg:w-full lg:ml-20 relative right-5 lg:right-20"
            alt="luma"
          />
        </motion.div>
      </div>
    ),
  },
];
export const Section2 = () => {
  const [selected, setSelected] = useState(0);

  const titleComp = useRef(null);
  // const demoComp = useRef(null);

  const titleIsInView = useInView(titleComp, { once: true });
  // const demoIsInView = useInView(demoComp, { once: true });

  return (
    <div className="flex flex-col items-center justify-start w-full max-w-360 px-3 lg:py-20">
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
            Browse Application
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
            Explore Epistem applications to create maps, track changes, access
            high-quality data, and collaborate with an open-source community.
          </p>
        </motion.div>
      </div>
      <div className="mt-2 md:mt-8 lg:mt-16  pt-2 md:pt-8 lg:pt-16 w-full relative">
        <div className="w-full p-5 rounded-lg bg-text-icons-base-main h-fit lg:min-h-120 lg:h-120 flex flex-col gap-y-2 px-8 lg:px-15">
          {featureArray.map((item, index) => {
            const isSelected = index === selected;

            if (isSelected)
              return <div key={`features-${index}`}>{item.component}</div>;

            return null;
          })}

          <div className="flex flex-row w-full justify-end gap-x-2 mt-auto">
            {featureArray.map((_, index) => {
              const isSelected = index === selected;
              return (
                <div
                  key={`feature-button-${index}`}
                  className={cn(
                    "h-1 lg:h-2 w-28 rounded-full hover:cursor-pointer hover:brightness-90 transition-all duration-200",
                    isSelected
                      ? "bg-primary-red-pink-light-active"
                      : "bg-white",
                  )}
                  onClick={() => {
                    if (isSelected) return;

                    setSelected(index);
                  }}
                ></div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
