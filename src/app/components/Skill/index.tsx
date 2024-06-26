import Image from "next/image";

import { BackgroundGradient } from "../ui/background-gradient";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

import { ISkillProps } from "./types";

export function Skill({
  name,
  image,
  alternativeText,
  description,
}: ISkillProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <BackgroundGradient className="flex flex-row pl-2 gap-4 items-center w-[202px] min-h-16 bg-custom_black-light shadow-[0_15px_20px_4px_rgba(0,0,0,0.25)]">
            <div className="flex justify-center items-center bg-gradient_dark_vertical w-10 h-10 rounded-sm">
              <Image
                className="p-[2px]"
                src={image}
                alt={alternativeText}
                width={32}
                height={32}
              />
            </div>
            <span className="font-body_two text-custom_white-light max-w-[108px] text-left">
              {name}
            </span>
          </BackgroundGradient>
        </TooltipTrigger>
        <TooltipContent className="max-w-64 bg-custom_primary text-custom_white-light">
          <p>{description}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
