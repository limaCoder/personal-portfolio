import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";

import { IProjectProps } from "./types";
import { scrollVariants } from "@/app/lib/framer-motion/scrollVariants";
import { MotionDiv } from "@/app/lib/framer-motion/MotionComponents";
import { scrollTransition } from "@/app/lib/framer-motion/server/scrollTransition";

export async function Project({
  projectName,
  techImage,
  techImageAltText,
  techName,
}: IProjectProps) {
  return (
    <div className="flex flex-row justify-between items-center border-y-2 py-8 pr-8 border-y-custom_white-dark">
      <MotionDiv
        className="flex flex-col gap-6"
        variants={scrollVariants}
        initial="hidden"
        whileInView="visible"
        transition={await scrollTransition(3)}
        viewport={{ once: false }}
      >
        <h3 className="font-headline_two text-custom_white-light">
          {projectName}
        </h3>
        <div className="flex flex-row items-center gap-6">
          <Image
            src={techImage}
            alt={techImageAltText}
            width={54}
            height={54}
          />
          <span className="font-body_one text-custom_secondary-dark">
            {techName}
          </span>
        </div>
      </MotionDiv>
      <MotionDiv
        className="flex flex-col"
        variants={scrollVariants}
        initial="hidden"
        whileInView="visible"
        transition={await scrollTransition(4)}
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
    </div>
  );
}
