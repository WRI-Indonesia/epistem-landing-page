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

export const Section4 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const imageComp = useRef(null);
  const imageMobile = useRef(null);
  const textComp = useRef(null);

  const imageIsInView = useInView(imageComp, { once: true });
  const imageMobileIsInView = useInView(imageMobile, { once: true });
  const textIsInView = useInView(textComp, { once: true });

  return (
    <div className="flex flex-col items-center justify-start w-full max-w-360 px-3">
      <div className="w-full relative">
        <div className="grid grid-cols-4 grid-rows-1 md:grid-rows-1 md:grid-cols-12 py-8 md:py-20 gap-y-4 gap-x-4 h-fit relative">
          <motion.div
            ref={imageComp}
            initial={{ x: "0%", opacity: 0 }}
            animate={{
              x: 0,
              opacity: imageIsInView ? 1 : 0,
              transition: { bounce: 0, visualDuration: 2, delay: 0.1 },
            }}
            className="max-md:hidden col-span-4 relative z-11"
          >
            <div
              className={cn(
                // "max-h-160 rounded-2xl overflow-hidden",
                // isOpen && "max-h-250",
                'bg-[url("/images/collage.webp")] bg-cover bg-top bg-no-repeat rounded-2xl',
                "h-full",
              )}
            >
              {/* <Image
                src="/images/collage.webp"
                width={459}
                height={1922}
                alt="collage landsat"
                // objectFit="contain"
                className="object-top object-cover"
              /> */}
            </div>
          </motion.div>
          <motion.div
            ref={textComp}
            initial={{ y: "100%", opacity: 0 }}
            animate={{
              y: 0,
              opacity: textIsInView ? 1 : 0,
              transition: { bounce: 0, visualDuration: 2, delay: 0.2 },
            }}
            className="col-span-4 md:col-span-8 flex flex-col justify-between relative z-10"
          >
            <p className="font-pjs font-bold text-xl md:text-6xl text-text-icons-base-main">
              About Us
            </p>
            <div className="space-y-2 md:space-y-12 mt-2 md:mt-44">
              <p className="text-[13px] md:text-5xl font-pjs font-semibold text-text-icons-base-main">
                Supporting change-makers with data-driven solutions built for
                their sustainable restoration goals.
              </p>
              <p className="font-pjs text-[11px] md:text-2xl font-regular text-text-icons-base-main">
                Epistem is a consortium-led initiative combining global research
                expertise with local knowledge to bridge the gap between
                science, data, and implementation of nature-based solutions.
                Convened by IIASA, in partnership with CIFOR-ICRAF and WRI
                Indonesia, Epistem delivers practical tools for real-world
                impact.
              </p>
              <Button
                variant={"link"}
                className="p-0"
                onClick={() => {
                  setIsOpen((val) => !val);
                }}
              >
                <p className="font-pjs text-[10px] md:text-xl font-bold text-primary-pink">
                  Read {isOpen ? "Less" : "More"}
                </p>
                <motion.div animate={{ rotate: isOpen ? 180 : 0 }} className="">
                  <ChevronDownIcon className="text-primary-pink size-4 stroke-3" />
                </motion.div>
              </Button>
              {isOpen && (
                <div className="space-y-2 md:space-y-8 font-pjs text-[11px] md:text-2xl font-medium text-text-icons-base-main">
                  <div className="">
                    <p className="text-primary-pink">The Team</p>
                    <p className="">
                      Epistem is initiated by a consortium led by the
                      International Institute for Applied Systems Analysis
                      (IIASA), in partnership with The Center for International
                      Forestry Research and World Agroforestry (CIFOR-ICRAF) and
                      World Resources Institute Indonesia (WRI Indonesia).
                    </p>
                  </div>

                  <div className="">
                    <p className="">
                      The initiative combines global research expertise with
                      deep local knowledge to bridge the gap between science,
                      data, and real-world nature-based solutions.
                    </p>
                  </div>

                  <div className="">
                    <p className="text-primary-pink">The Challenge</p>
                    <p className="">
                      NbS actors often face technical barriers to accessing
                      reliable, high-quality data that reflects diverse
                      landscape realities. Effective NbS depend heavily on land
                      use and land cover (LULC) data to guide planning, mobilize
                      financial and institutional resources, and monitor
                      implementation.
                    </p>
                  </div>

                  <div className="">
                    <p className="">
                      Providing LULC data that is timely, accurate, and
                      thematically detailed can significantly enhance the
                      effectiveness, accountability, and impact of NbS
                      interventions.
                    </p>
                  </div>

                  <div className="">
                    <p className="text-primary-pink">The Purpose</p>
                    <p className="">
                      Epistem strives to eliminate data barriers by providing
                      thematically relevant, high-resolution, and accessible
                      data tailored to diverse user needs, enabling NbS actors
                      to focus on driving real change.
                    </p>
                  </div>

                  <div className="">
                    <p className="">
                      Through a participatory approach, Epistem empowers
                      stakeholders across the NbS delivery chain to use data
                      that enhances planning, implementation, and monitoring
                      throughout Indonesia and Southeast Asia.
                    </p>
                  </div>

                  <div className="">
                    <p className="text-primary-pink">The Impact</p>
                    <p className="">
                      This data empowerment enables more sustainable and
                      equitable land management, delivering multiple co-benefits
                      such as:
                    </p>
                    <ul className="list-disc pl-7">
                      <li>
                        <p className="">
                          Climate change adaptation and mitigation
                        </p>
                      </li>
                      <li>
                        <p className="">
                          Biodiversity conservation and enhancement
                        </p>
                      </li>
                      <li>
                        <p className="">
                          Improved livelihoods for indigenous peoples and local
                          communities
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
          <motion.div
            ref={imageMobile}
            initial={{ x: "0%", opacity: 0 }}
            animate={{
              x: 0,
              opacity: imageMobileIsInView ? 1 : 0,
              transition: { bounce: 0, visualDuration: 2, delay: 0.1 },
            }}
            className="md:hidden col-span-4 relative z-11 h-fit"
          >
            <div className={cn("rounded-2xl overflow-hidden")}>
              <Image
                src="/images/collage-mobile.webp"
                width={722}
                height={258}
                alt="collage landsat"
                // objectFit="contain"
                className="object-top object-cover w-full h-32"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
