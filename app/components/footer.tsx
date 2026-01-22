"use client";

import Image from "next/image";
// import { useRef, useState } from "react";
// import { useInView } from "motion/react";

export const Footer = () => {
  // const [isOpen, setIsOpen] = useState(false);

  // const imageComp = useRef(null);
  // const imageMobile = useRef(null);
  // const textComp = useRef(null);

  // const imageIsInView = useInView(imageComp, { once: true });
  // const imageMobileIsInView = useInView(imageMobile, { once: true });
  // const textIsInView = useInView(textComp, { once: true });

  return (
    <>
      <div className="w-full py-6 lg:py-17 px-1 lg:px-28 bg-primary-pink-light-hover">
        <div className="flex flex-col items-center justify-start w-full max-w-360 px-3">
          <div className="flex flex-col w-full gap-y-4 lg:gap-y-10">
            <Image
              src="/images/restore-logo.webp"
              alt="restore-log"
              width={982}
              height={254}
              className="w-22.5 lg:w-50 mr-auto"
            />
            <div className="flex flex-row justify-between items-start gap-x-9">
              <div className="flex flex-col lg:flex-row gap-x-15 gap-y-5">
                <Image
                  src="/images/bundes-logo.webp"
                  alt="bundes logo"
                  width={277}
                  height={169}
                  className="w-35 lg:w-62 h-auto object-contain"
                />
                <Image
                  src="/images/iki-logo.webp"
                  alt="iki logo"
                  width={900}
                  height={208}
                  className="w-25 lg:w-70 h-auto object-contain"
                />
              </div>
              <div className="space-y-5">
                <p className="text-xs lg:text-sm font-inter font-regular text-black">
                  Initiated by:
                </p>
                <div className="flex flex-row gap-x-5 lg:gap-x-15">
                  <Image
                    src="/images/iiasa-logo.webp"
                    alt="iiasa logo"
                    width={201}
                    height={282}
                    className="w-7 lg:w-17"
                  />
                  <Image
                    src="/images/cifor-logo.webp"
                    alt="cifor logo"
                    width={678}
                    height={285}
                    className="w-24 lg:w-56"
                  />
                </div>

                <Image
                  src="/images/wri-logo.webp"
                  alt="wri logo"
                  width={1024}
                  height={207}
                  className="w-38 lg:w-70"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-10 w-full bg-primary-red-pink-light-active"></div>
    </>
  );
};
