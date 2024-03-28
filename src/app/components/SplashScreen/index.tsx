"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { AuroraBackground } from "../ui/aurora-background";
import { ISplashScreenProps } from "./types";

export function SplashScreen({ loading }: ISplashScreenProps) {
  const [isExiting, setIsExiting] = useState(false);

  const containerVariants = {
    hidden: { x: 0, opacity: 1 },
    exit: {
      x: "-100vw",
      opacity: 0,
      transition: { ease: "easeInOut", duration: 1 },
    },
  };

  const logoBackground = {
    hidden: { pathLength: 0, fill: "rgba(255, 255, 255, 0)" },
    visible: { pathLength: 1, fill: "#5352ED", transition: { duration: 0.7 } },
  };

  const createPathVariants = (delay: number) => ({
    hidden: { pathLength: 0, fill: "rgba(255, 255, 255, 0)" },
    visible: {
      pathLength: 1,
      fill: "rgba(236, 236, 236, 1)",
      transition: {
        pathLength: {
          delay: 0.2 + delay,
          duration: 0.4,
          ease: [0.67, -0.55, 0.27, 1.55],
        },
        fill: {
          delay: 0.2 + delay,
          duration: 0.4,
          ease: [0.67, -0.55, 0.27, 1.55],
        },
      },
    },
  });

  useEffect(() => {
    if (!loading) {
      setIsExiting(true);
    }
  }, [loading]);

  if (!loading) {
    return null;
  }

  return (
    <AnimatePresence>
      <motion.div variants={containerVariants} initial="hidden" exit="exit">
        <AuroraBackground className="z-50 fixed top-0 left-0 w-full h-full">
          <svg
            width="102"
            height="95"
            viewBox="0 0 102 95"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.rect
              width="102"
              height="95"
              rx="13"
              variants={logoBackground}
              initial="hidden"
              animate="visible"
            />
            <motion.path
              d="M31.5 72L34 55.5L36.5 59.5L34 75H19L28.5 20L54 68.5L61.5 55.5L63 59.5L54 75L30 30L23.5 72H31.5Z"
              variants={createPathVariants(0.5)}
              initial="hidden"
              animate="visible"
            />
            <motion.path
              d="M33 47.5C30.8897 58.4008 30.6154 62.4656 30 70H25.5L31.5 38L51.5 75H47.5L33 47.5Z"
              variants={createPathVariants(1.0)}
              initial="hidden"
              animate="visible"
            />
            <motion.path
              d="M65.5 38L71.5 75H68L64 46.5L54 63L31.5 20H34L54 55.5C58.9546 47.1757 65.5 38 65.5 38Z"
              variants={createPathVariants(1.5)}
              initial="hidden"
              animate="visible"
            />
            <motion.path
              d="M68 20L52.5 48L55.5 50C62.2618 37.6598 68 23 68 23H71.5L78.5 72H77L69.5 28.5L68 32.5C69.9007 48.8605 71.3701 58.2492 74 75H83L74 20H68Z"
              variants={createPathVariants(2.0)}
              initial="hidden"
              animate="visible"
            />
          </svg>
        </AuroraBackground>
      </motion.div>
    </AnimatePresence>
  );
}
