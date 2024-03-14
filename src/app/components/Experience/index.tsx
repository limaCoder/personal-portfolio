"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { IExperienceProps } from "./types";

export function Experience({ company }: IExperienceProps) {
  return (
    <motion.div
      key={company.name}
      className="grid grid-cols-[40px,1fr] gap-4 md:gap-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center gap-4">
        <div className="rounded-lg border border-custom_white-light">
          <Image
            className="rounded-lg"
            src={company.imageUrl}
            alt={`logo ${company.name}`}
            width={74}
            height={74}
          />
        </div>

        <div className="h-full w-[1px] bg-gray-800" />
      </div>

      <div>
        <div className="flex flex-col gap-2 text-sm sm:text-base">
          <a href={company.companyURL} rel="noreferrer">
            <h4 className="font-headline_four text-custom_white-dark">
              @ {company.name}
            </h4>
          </a>
          <h4 className="font-headline_four text-custom_white-light">
            {company.role}
          </h4>
          <span className="font-body_one text-custom_white-dark">
            {company.periodInCompany}
          </span>
          <div className="pb-20">
            <p className="font-body_one text-custom_white-light">
              {company.description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
