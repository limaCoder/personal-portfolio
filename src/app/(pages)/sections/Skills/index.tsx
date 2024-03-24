"use client";

import { BackgroundGradient } from "@/app/components/ui/background-gradient";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/app/components/ui/collapsible";

import Image from "next/image";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

export function SkillsSection() {
  return (
    <section className="min-h-screen w-full relative py-20 bg-gradient_dark">
      <div className="container h-full w-full">
        <div className="flex flex-col gap-14">
          <div className="flex flex-col justify-center items-center gap-8">
            <h2 className="font-headline_two text-custom_secondary-light">
              Techs and uses
            </h2>
            <p className="font-body_one text-custom_white-dark text-center max-w-[1025px]">
              Discover the array of technologies and tools that drive my
              development journey. Each carefully selected tool is utilized to
              craft robust, efficient, and user-centric solutions, ensuring
              excellence in every project.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Collapsible className="flex flex-col justify-center items-center gap-12">
              <CollapsibleTrigger className="flex flex-row gap-3 hover:brightness-150 active:backdrop-brightness-200 transition">
                <h3 className="font-headline_three text-custom_white-light">
                  Front-end
                </h3>
                <div className="flex flex-col">
                  <FiChevronUp size={24} className="text-custom_primary" />
                  <FiChevronDown size={24} className="text-custom_primary" />
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent className="flex flex-row justify-center items-center flex-wrap gap-6 max-w-[920px] gap-y-10">
                <BackgroundGradient className="flex flex-row pl-2 gap-4 items-center w-[202px] min-h-16 bg-custom_black-light shadow-[0_15px_20px_4px_rgba(0,0,0,0.25)]">
                  <div className="flex justify-center items-center bg-gradient_dark_vertical w-10 h-10 rounded-sm">
                    <Image
                      className="p-[2px]"
                      src="/techs-logo/html-logo.svg"
                      alt="HTML logo"
                      width={32}
                      height={32}
                    />
                  </div>
                  <span className="font-body_two text-custom_white-light">
                    HTML
                  </span>
                </BackgroundGradient>
                <BackgroundGradient className="flex flex-row pl-2 gap-4 items-center w-[202px] min-h-16 bg-custom_black-light shadow-[0_15px_20px_4px_rgba(0,0,0,0.25)]">
                  <div className="flex justify-center items-center bg-gradient_dark_vertical w-10 h-10 rounded-sm">
                    <Image
                      className="p-[2px]"
                      src="/techs-logo/html-logo.svg"
                      alt="HTML logo"
                      width={32}
                      height={32}
                    />
                  </div>
                  <span className="font-body_two text-custom_white-light">
                    HTML
                  </span>
                </BackgroundGradient>
                <BackgroundGradient className="flex flex-row pl-2 gap-4 items-center w-[202px] min-h-16 bg-custom_black-light shadow-[0_15px_20px_4px_rgba(0,0,0,0.25)]">
                  <div className="flex justify-center items-center bg-gradient_dark_vertical w-10 h-10 rounded-sm">
                    <Image
                      className="p-[2px]"
                      src="/techs-logo/html-logo.svg"
                      alt="HTML logo"
                      width={32}
                      height={32}
                    />
                  </div>
                  <span className="font-body_two text-custom_white-light">
                    HTML
                  </span>
                </BackgroundGradient>
                <BackgroundGradient className="flex flex-row pl-2 gap-4 items-center w-[202px] min-h-16 bg-custom_black-light shadow-[0_15px_20px_4px_rgba(0,0,0,0.25)]">
                  <div className="flex justify-center items-center bg-gradient_dark_vertical w-10 h-10 rounded-sm">
                    <Image
                      className="p-[2px]"
                      src="/techs-logo/html-logo.svg"
                      alt="HTML logo"
                      width={32}
                      height={32}
                    />
                  </div>
                  <span className="font-body_two text-custom_white-light">
                    HTML
                  </span>
                </BackgroundGradient>
                <BackgroundGradient className="flex flex-row pl-2 gap-4 items-center w-[202px] min-h-16 bg-custom_black-light shadow-[0_15px_20px_4px_rgba(0,0,0,0.25)]">
                  <div className="flex justify-center items-center bg-gradient_dark_vertical w-10 h-10 rounded-sm">
                    <Image
                      className="p-[2px]"
                      src="/techs-logo/html-logo.svg"
                      alt="HTML logo"
                      width={32}
                      height={32}
                    />
                  </div>
                  <span className="font-body_two text-custom_white-light">
                    HTML
                  </span>
                </BackgroundGradient>
                <BackgroundGradient className="flex flex-row pl-2 gap-4 items-center w-[202px] min-h-16 bg-custom_black-light shadow-[0_15px_20px_4px_rgba(0,0,0,0.25)]">
                  <div className="flex justify-center items-center bg-gradient_dark_vertical w-10 h-10 rounded-sm">
                    <Image
                      className="p-[2px]"
                      src="/techs-logo/html-logo.svg"
                      alt="HTML logo"
                      width={32}
                      height={32}
                    />
                  </div>
                  <span className="font-body_two text-custom_white-light">
                    HTML
                  </span>
                </BackgroundGradient>
                <BackgroundGradient className="flex flex-row pl-2 gap-4 items-center w-[202px] min-h-16 bg-custom_black-light shadow-[0_15px_20px_4px_rgba(0,0,0,0.25)]">
                  <div className="flex justify-center items-center bg-gradient_dark_vertical w-10 h-10 rounded-sm">
                    <Image
                      className="p-[2px]"
                      src="/techs-logo/html-logo.svg"
                      alt="HTML logo"
                      width={32}
                      height={32}
                    />
                  </div>
                  <span className="font-body_two text-custom_white-light">
                    HTML
                  </span>
                </BackgroundGradient>
                <BackgroundGradient className="flex flex-row pl-2 gap-4 items-center w-[202px] min-h-16 bg-custom_black-light shadow-[0_15px_20px_4px_rgba(0,0,0,0.25)]">
                  <div className="flex justify-center items-center bg-gradient_dark_vertical w-10 h-10 rounded-sm">
                    <Image
                      className="p-[2px]"
                      src="/techs-logo/html-logo.svg"
                      alt="HTML logo"
                      width={32}
                      height={32}
                    />
                  </div>
                  <span className="font-body_two text-custom_white-light">
                    HTML
                  </span>
                </BackgroundGradient>
                <BackgroundGradient className="flex flex-row pl-2 gap-4 items-center w-[202px] min-h-16 bg-custom_black-light shadow-[0_15px_20px_4px_rgba(0,0,0,0.25)]">
                  <div className="flex justify-center items-center bg-gradient_dark_vertical w-10 h-10 rounded-sm">
                    <Image
                      className="p-[2px]"
                      src="/techs-logo/html-logo.svg"
                      alt="HTML logo"
                      width={32}
                      height={32}
                    />
                  </div>
                  <span className="font-body_two text-custom_white-light">
                    HTML
                  </span>
                </BackgroundGradient>
                <BackgroundGradient className="flex flex-row pl-2 gap-4 items-center w-[202px] min-h-16 bg-custom_black-light shadow-[0_15px_20px_4px_rgba(0,0,0,0.25)]">
                  <div className="flex justify-center items-center bg-gradient_dark_vertical w-10 h-10 rounded-sm">
                    <Image
                      className="p-[2px]"
                      src="/techs-logo/html-logo.svg"
                      alt="HTML logo"
                      width={32}
                      height={32}
                    />
                  </div>
                  <span className="font-body_two text-custom_white-light">
                    HTML
                  </span>
                </BackgroundGradient>
                <BackgroundGradient className="flex flex-row pl-2 gap-4 items-center w-[202px] min-h-16 bg-custom_black-light shadow-[0_15px_20px_4px_rgba(0,0,0,0.25)]">
                  <div className="flex justify-center items-center bg-gradient_dark_vertical w-10 h-10 rounded-sm">
                    <Image
                      className="p-[2px]"
                      src="/techs-logo/html-logo.svg"
                      alt="HTML logo"
                      width={32}
                      height={32}
                    />
                  </div>
                  <span className="font-body_two text-custom_white-light">
                    HTML
                  </span>
                </BackgroundGradient>
                <BackgroundGradient className="flex flex-row pl-2 gap-4 items-center w-[202px] min-h-16 bg-custom_black-light shadow-[0_15px_20px_4px_rgba(0,0,0,0.25)]">
                  <div className="flex justify-center items-center bg-gradient_dark_vertical w-10 h-10 rounded-sm">
                    <Image
                      className="p-[2px]"
                      src="/techs-logo/html-logo.svg"
                      alt="HTML logo"
                      width={32}
                      height={32}
                    />
                  </div>
                  <span className="font-body_two text-custom_white-light">
                    HTML
                  </span>
                </BackgroundGradient>
                <BackgroundGradient className="flex flex-row pl-2 gap-4 items-center w-[202px] min-h-16 bg-custom_black-light shadow-[0_15px_20px_4px_rgba(0,0,0,0.25)]">
                  <div className="flex justify-center items-center bg-gradient_dark_vertical w-10 h-10 rounded-sm">
                    <Image
                      className="p-[2px]"
                      src="/techs-logo/html-logo.svg"
                      alt="HTML logo"
                      width={32}
                      height={32}
                    />
                  </div>
                  <span className="font-body_two text-custom_white-light">
                    HTML
                  </span>
                </BackgroundGradient>
                <BackgroundGradient className="flex flex-row pl-2 gap-4 items-center w-[202px] min-h-16 bg-custom_black-light shadow-[0_15px_20px_4px_rgba(0,0,0,0.25)]">
                  <div className="flex justify-center items-center bg-gradient_dark_vertical w-10 h-10 rounded-sm">
                    <Image
                      className="p-[2px]"
                      src="/techs-logo/html-logo.svg"
                      alt="HTML logo"
                      width={32}
                      height={32}
                    />
                  </div>
                  <span className="font-body_two text-custom_white-light">
                    HTML
                  </span>
                </BackgroundGradient>
                <BackgroundGradient className="flex flex-row pl-2 gap-4 items-center w-[202px] min-h-16 bg-custom_black-light shadow-[0_15px_20px_4px_rgba(0,0,0,0.25)]">
                  <div className="flex justify-center items-center bg-gradient_dark_vertical w-10 h-10 rounded-sm">
                    <Image
                      className="p-[2px]"
                      src="/techs-logo/html-logo.svg"
                      alt="HTML logo"
                      width={32}
                      height={32}
                    />
                  </div>
                  <span className="font-body_two text-custom_white-light">
                    HTML
                  </span>
                </BackgroundGradient>
                <BackgroundGradient className="flex flex-row pl-2 gap-4 items-center w-[202px] min-h-16 bg-custom_black-light shadow-[0_15px_20px_4px_rgba(0,0,0,0.25)]">
                  <div className="flex justify-center items-center bg-gradient_dark_vertical w-10 h-10 rounded-sm">
                    <Image
                      className="p-[2px]"
                      src="/techs-logo/html-logo.svg"
                      alt="HTML logo"
                      width={32}
                      height={32}
                    />
                  </div>
                  <span className="font-body_two text-custom_white-light">
                    HTML
                  </span>
                </BackgroundGradient>
                <BackgroundGradient className="flex flex-row pl-2 gap-4 items-center w-[202px] min-h-16 bg-custom_black-light shadow-[0_15px_20px_4px_rgba(0,0,0,0.25)]">
                  <div className="flex justify-center items-center bg-gradient_dark_vertical w-10 h-10 rounded-sm">
                    <Image
                      className="p-[2px]"
                      src="/techs-logo/html-logo.svg"
                      alt="HTML logo"
                      width={32}
                      height={32}
                    />
                  </div>
                  <span className="font-body_two text-custom_white-light">
                    HTML
                  </span>
                </BackgroundGradient>
                <BackgroundGradient className="flex flex-row pl-2 gap-4 items-center w-[202px] min-h-16 bg-custom_black-light shadow-[0_15px_20px_4px_rgba(0,0,0,0.25)]">
                  <div className="flex justify-center items-center bg-gradient_dark_vertical w-10 h-10 rounded-sm">
                    <Image
                      className="p-[2px]"
                      src="/techs-logo/html-logo.svg"
                      alt="HTML logo"
                      width={32}
                      height={32}
                    />
                  </div>
                  <span className="font-body_two text-custom_white-light">
                    HTML
                  </span>
                </BackgroundGradient>
                <BackgroundGradient className="flex flex-row pl-2 gap-4 items-center w-[202px] min-h-16 bg-custom_black-light shadow-[0_15px_20px_4px_rgba(0,0,0,0.25)]">
                  <div className="flex justify-center items-center bg-gradient_dark_vertical w-10 h-10 rounded-sm">
                    <Image
                      className="p-[2px]"
                      src="/techs-logo/html-logo.svg"
                      alt="HTML logo"
                      width={32}
                      height={32}
                    />
                  </div>
                  <span className="font-body_two text-custom_white-light">
                    HTML
                  </span>
                </BackgroundGradient>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </div>
      </div>
    </section>
  );
}
