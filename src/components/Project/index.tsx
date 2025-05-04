import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";

import { IProjectProps } from "./types";
import { MotionDiv } from "@/lib/framer-motion/MotionComponents";
import { childVariants } from "@/lib/framer-motion/childVariants";

export function Project({
  projectName,
  projectImage,
  projectImageAltText,
  techImage,
  techImageAltText,
  techName,
  projectLink,
}: IProjectProps) {
  return (
    <MotionDiv
      className="flex flex-col lg:flex-row justify-between border-y-2 py-8 gap-6 lg:gap-0 border-y-custom_white-dark"
      variants={childVariants}
      initial="hidden"
      whileInView="visible"
    >
      <div className="flex flex-col lg:flex-row gap-5">
        <Image
          className="rounded-lg w-full lg:max-w-64 lg:min-h-[140px]"
          src={projectImage}
          alt={projectImageAltText}
          width={250}
          height={140}
        />
        <div className="flex flex-col gap-6">
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
        </div>
      </div>
      {projectLink ? (
        <div className="flex flex-col self-end lg:self-center">
          <a
            className="cursor-pointer hover:brightness-150 transition"
            href={projectLink}
            target="blank"
          >
            <div className="flex flex-row gap-4">
              <span className="font-body_one text-custom_primary-light">
                View Project
              </span>
              <FiArrowUpRight size={24} className="text-custom_primary-light" />
            </div>
          </a>
        </div>
      ) : (
        <div className="flex flex-col self-end lg:self-center">
          <div className="flex flex-row gap-4">
            <span className="font-body_one text-custom_primary-light">
              In Development
            </span>
          </div>
        </div>
      )}
    </MotionDiv>
  );
}
