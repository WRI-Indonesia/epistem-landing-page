"use client";
import { motion } from "motion/react";

export const Hero = () => {
  return (
    <main className="flex lg:min-h-screen w-full flex-col items-center justify-center">
      <div
        className="lg:h-screen w-full flex flex-col items-center justify-center px-4 max-lg:pt-32"
        style={{
          background: "linear-gradient(180deg, #FFE9F1 0%, #FFF 100%)",
        }}
      >
        <motion.p
          layout
          initial={{
            y: "100%",
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              bounce: 0,
              visualDuration: 1,
            },
          }}
          className="font-pjs text-4xl lg:text-8xl font-semibold text-primary-pink leading-normal lg:leading-25"
        >
          Together,{" "}
        </motion.p>
        <motion.p
          layout
          initial={{
            y: "100%",
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              bounce: 0,
              visualDuration: 1,
              delay: 0,
            },
          }}
          className="font-pjs text-4xl lg:text-8xl font-semibold text-primary-pink leading-normal mb-3"
        >
          we map change
        </motion.p>
        <motion.p
          layout
          initial={{
            y: "100%",
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              bounce: 0,
              visualDuration: 1,
              delay: 1,
            },
          }}
          className="font-pjs text-sm lg:text-2xl font-semibold text-primary-pink mb-8 text-center leading-normal"
        >
          Scaling nature-based solutions with participatory
          <br />
          land use and cover mapping platform
        </motion.p>
        {/* <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            visibility: "visible",
            transition: {
              delay: 3,
            },
          }}
        >
          <Button className="rounded-lg">
            <p className="font-aptos text-lg font-bold">Try Epistem - X</p>
          </Button>
        </motion.div> */}
      </div>
    </main>
  );
};
