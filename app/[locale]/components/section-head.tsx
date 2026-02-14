import { motion, useInView } from "motion/react";
import { useRef } from "react";

interface Props {
  title: string;
  caption: string;
}

export const SectionHead = ({ title, caption }: Props) => {
  const titleComp = useRef(null);
  const titleIsInView = useInView(titleComp, { once: true });

  return (
    <div className="grid grid-cols-12 w-full gap-y-3 px-0">
      <motion.div
        ref={titleComp}
        initial={{ y: "100%" }}
        animate={{
          y: titleIsInView ? 0 : "100%",
          transition: {
            visualDuration: 2,
          },
        }}
        className="col-span-12 lg:col-span-6 flex flex-row items-center"
      >
        <p className="w-full font-lp-headline-xxs-bold lg:font-lp-headline-xl-bold text-center lg:text-left text-gray-700">
          {title}
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
        className="max-lg:col-span-12 lg:col-span-6 flex flex-row items-center justify-end"
      >
        <p className="w-full font-lp-text-xs-regular lg:font-lp-text-xl-regular text-text-icons-base-main text-center lg:text-justify">
          {caption}
        </p>
      </motion.div>
    </div>
  );
};
