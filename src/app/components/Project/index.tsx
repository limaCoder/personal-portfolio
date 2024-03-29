"use client";

import { useState } from "react";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";

import { IProjectProps } from "./types";
import { scrollVariants } from "@/app/lib/framer-motion/scrollVariants";
import { MotionDiv } from "@/app/lib/framer-motion/MotionComponents";
import { scrollTransition } from "@/app/lib/framer-motion/server/scrollTransition";

export function Project({
  projectName,
  projectImage,
  projectImageAltText,
  techImage,
  techImageAltText,
  techName,
}: IProjectProps) {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    setCursorPosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  return (
    <div
      className="flex flex-col lg:flex-row justify-between items-center border-y-2 py-8 pr-8 gap-6 lg:gap-0 border-y-custom_white-dark"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <MotionDiv
        className="flex flex-col gap-6"
        variants={scrollVariants}
        initial="hidden"
        whileInView="visible"
        transition={scrollTransition(3)}
        viewport={{ once: false }}
      >
        <h3 className="font-headline_two text-custom_white-light">
          {projectName}
        </h3>
        <div className="flex flex-row items-center gap-6">
          <div className="relative w-14 h-14">
            <Image
              src={techImage}
              loading="lazy"
              alt={techImageAltText}
              width={54}
              height={54}
            />
          </div>
          <span className="font-body_one text-custom_secondary-dark">
            {techName}
          </span>
        </div>
      </MotionDiv>
      <MotionDiv
        className="flex flex-col self-end lg:self-center"
        variants={scrollVariants}
        initial="hidden"
        whileInView="visible"
        transition={scrollTransition(4)}
        viewport={{ once: false }}
      >
        <a className="cursor-pointer hover:brightness-150 transition" href="#">
          <div className="flex flex-row gap-4">
            <span className="font-body_one text-custom_primary-light">
              View Project
            </span>
            <FiArrowUpRight size={24} className="text-custom_primary-light" />
          </div>
        </a>
      </MotionDiv>
      {isHovering && (
        <MotionDiv
          initial={{ opacity: 0 }}
          animate={{ x: cursorPosition.x, y: cursorPosition.y, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="hidden lg:fixed top-0 left-0 pointer-events-none w-[320px] h-[320px]"
          style={{ translateX: "-50%", translateY: "-50%" }}
        >
          <Image
            className="rounded-sm"
            src={projectImage}
            alt={projectImageAltText}
            width={320}
            height={320}
          />
        </MotionDiv>
      )}
    </div>
  );
}
