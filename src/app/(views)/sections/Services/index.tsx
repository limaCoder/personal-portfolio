"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion";

import { GridBackground } from "@/app/components/ui/grid-and-dot-background";

import { FiGlobe, FiSmartphone } from "react-icons/fi";
import { BsCursorFill } from "react-icons/bs";

import Spline from "@splinetool/react-spline";

import { scrollVariants } from "@/app/lib/framer-motion/scrollVariants";
import { scrollTransition } from "@/app/lib/framer-motion/client/scrollTransition";
import {
  MotionDiv,
  MotionHeadlineTwo,
} from "@/app/lib/framer-motion/MotionComponents";

export function ServicesSection() {
  return (
    <section id="services">
      <GridBackground>
        <div className="container min-h-full w-full z-10">
          <div className="flex flex-col-reverse lg:flex-row gap-6 lg:gap-0 w-full h-full justify-around">
            <div className="flex flex-col h-full gap-14">
              <MotionHeadlineTwo
                className="font-headline_two text-custom_secondary-light hidden lg:block"
                variants={scrollVariants}
                initial="hidden"
                whileInView="visible"
                transition={scrollTransition(1)}
                viewport={{ once: false }}
              >
                Services
              </MotionHeadlineTwo>
              <MotionDiv
                variants={scrollVariants}
                initial="hidden"
                whileInView="visible"
                transition={scrollTransition(2)}
                viewport={{ once: false }}
              >
                <Accordion
                  className="flex flex-col h-full justify-center gap-16 max-w-[379px]"
                  type="multiple"
                  defaultValue={["item-1"]}
                >
                  <AccordionItem className="border-0" value="item-1">
                    <AccordionTrigger className="relative flex flex-row gap-4 after:content-normal after:absolute after:bottom-0 after:w-14 after:h-[2px] after:rounded-lg after:bg-custom_secondary">
                      <FiGlobe
                        size={24}
                        className="text-custom_primary-light"
                      />
                      <h3 className="font-headline_three text-custom_white-light">
                        Web Development
                      </h3>
                    </AccordionTrigger>
                    <AccordionContent className="font-body_two text-custom_white-dark pt-6">
                      Specializing in crafting custom web solutions, bringing
                      ideas to life with dynamic and responsive designs that
                      ensure superior user experiences. Utilizing cutting-edge
                      technologies like ReactJS, Next.js, and TypeScript to
                      create visually appealing, performance-optimized websites.
                      From captivating landing pages to complex web systems, the
                      focus is on delivering projects that stand out for both
                      aesthetics and functionality, tailored to enhance digital
                      footprints.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem className="border-0" value="item-2">
                    <AccordionTrigger className="relative flex flex-row gap-4 after:content-normal after:absolute after:bottom-0 after:w-14 after:h-[2px] after:rounded-lg after:bg-custom_secondary">
                      <FiSmartphone
                        size={24}
                        className="text-custom_primary-light"
                      />
                      <h3 className="text-start font-headline_three text-custom_white-light">
                        Mobile Development
                      </h3>
                    </AccordionTrigger>
                    <AccordionContent className="font-body_two text-custom_white-dark pt-6">
                      Focused on developing mobile applications that impress
                      with their smoothness and innovation, dedicated to
                      creating interactive and intuitive user experiences using
                      React Native. Designed for iOS and Android, these apps
                      prioritize efficiency and adaptability, ensuring
                      user-friendly interfaces and top-notch performance.
                      Understanding the distinct challenges each mobile project
                      presents, committed to crafting tailored solutions that
                      align with the target audience and business goals.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </MotionDiv>
            </div>
            <MotionDiv
              className="flex flex-col justify-end items-center gap-8"
              variants={scrollVariants}
              initial="hidden"
              whileInView="visible"
              transition={scrollTransition(3)}
              viewport={{ once: false }}
            >
              <MotionHeadlineTwo
                className="font-headline_two text-custom_secondary-light block lg:hidden"
                variants={scrollVariants}
                initial="hidden"
                whileInView="visible"
                transition={scrollTransition(1)}
                viewport={{ once: false }}
              >
                Services
              </MotionHeadlineTwo>
              <div className="max-w-[649px] min-h-[32rem] lg:min-h-[643px]">
                <Spline scene="https://prod.spline.design/3rF4AvPEaLv2Spbq/scene.splinecode" />
              </div>
              <div className="flex flex-col lg:flex-row justify-center items-center gap-8 -mt-36">
                <BsCursorFill size={58} className="text-custom_primary-light" />
                <p className="font-body_two text-custom_primary-light max-w-[470px] text-center lg:text-start">
                  Hello, to interact, just click and drag on computers; and
                  2-finger clicking on smartphones.
                </p>
              </div>
            </MotionDiv>
          </div>
        </div>
      </GridBackground>
    </section>
  );
}
