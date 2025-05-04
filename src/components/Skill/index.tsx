import Image from "next/image";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { Spotlight } from "../ui/spotlight-border";

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
          <div className="relative flex flex-row pl-2 gap-4 items-center w-[202px] min-h-16 bg-custom_black-light rounded-sm shadow-[0_15px_20px_4px_rgba(0,0,0,0.25)]">
            <Spotlight
              className="from-blue-600 via-blue-500 to-blue-400 blur-3xl dark:from-blue-200 dark:via-blue-300 dark:to-blue-400"
              size={124}
            />
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
          </div>
        </TooltipTrigger>
        <TooltipContent className="max-w-64 bg-custom_primary text-custom_white-light">
          <p>{description}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
