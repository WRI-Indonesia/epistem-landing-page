"use client";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";

export const Hero = () => {
  const t = useTranslations("HomePage.Hero");

  return (
    <main className="flex lg:min-h-screen w-full flex-col items-center justify-center px-0">
      <div
        className="lg:h-screen w-full flex flex-col items-center justify-center px-3 max-lg:pt-45 space-y-0"
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
          className="font-lp-headline-l-semibold lg:font-lp-display-l-semibold text-primary-pink text-center"
        >
          {t("title1")}{" "}
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
          className="font-lp-headline-l-semibold lg:font-lp-display-l-semibold text-primary-pink text-center"
        >
          {t("title2")}
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
          className="font-lp-text-xs-semibold lg:font-lp-headline-xs-semibold text-primary-pink text-center mb-15"
          // dangerouslySetInnerHTML={{ __html: t("caption") }}
        >
          {t.rich("caption", {
            br: () => <br />,
          })}
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
