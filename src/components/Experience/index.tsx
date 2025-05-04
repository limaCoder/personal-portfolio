import Image from "next/image";
import { IExperienceProps } from "./types";
import { MotionDiv } from "@/lib/framer-motion/MotionComponents";

export function Experience({ workExperience }: IExperienceProps) {
  return (
    <MotionDiv
      key={workExperience.companyName}
      className="grid grid-cols-[40px,1fr] gap-4 md:gap-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center gap-4">
        <div className="rounded-lg border border-custom_white-light">
          <Image
            className="rounded-lg"
            src={workExperience.companyImage.url}
            alt={`logo ${workExperience.companyName}`}
            width={74}
            height={74}
          />
        </div>

        <div className="h-full w-[1px] bg-gray-800" />
      </div>

      <div>
        <div className="flex flex-col gap-2 text-sm sm:text-base">
          <a href={workExperience.companyUrl} rel="noreferrer">
            <h3 className="font-headline_four text-custom_white-dark">
              @ {workExperience.companyName}
            </h3>
          </a>
          <h4 className="font-headline_four text-custom_white-light">
            {workExperience.role}
          </h4>
          <span className="font-body_one text-custom_white-dark">
            {workExperience.periodInCompany}
          </span>
          <div className="pb-20">
            <p className="font-body_one text-custom_white-light">
              {workExperience.description}
            </p>
          </div>
        </div>
      </div>
    </MotionDiv>
  );
}
