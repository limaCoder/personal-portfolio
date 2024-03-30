import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { WavyBackground } from "@/app/components/ui/wavy-background";

import { scrollVariants } from "@/app/lib/framer-motion/scrollVariants";
import {
  MotionDiv,
  MotionHeadlineOne,
  MotionParagraph,
} from "@/app/lib/framer-motion/MotionComponents";
import { scrollTransition } from "@/app/lib/framer-motion/server/scrollTransition";

export async function HeroSection() {
  return (
    <section id="hero">
      <WavyBackground className="container">
        <div className="w-full h-full flex flex-col-reverse lg:flex-row justify-around items-center gap-12 lg:gap-0 z-20 relative">
          <div className="max-w-[372px]">
            <MotionParagraph
              className="font-body_one text-custom_white-dark"
              variants={scrollVariants}
              initial="hidden"
              whileInView="visible"
              transition={await scrollTransition(1)}
              viewport={{ once: false }}
            >
              Hi, there!
              <strong className="text-custom_white-light ml-1">
                I’m Mario Lima
              </strong>
            </MotionParagraph>
            <MotionHeadlineOne
              className="font-headline_one text-custom_secondary-light mt-2 mb-6"
              variants={scrollVariants}
              initial="hidden"
              whileInView="visible"
              transition={await scrollTransition(2)}
              viewport={{ once: false }}
            >
              Front-end Developer
            </MotionHeadlineOne>
            <MotionParagraph
              className="font-body_one text-custom_white-dark"
              variants={scrollVariants}
              initial="hidden"
              whileInView="visible"
              transition={await scrollTransition(3)}
              viewport={{ once: false }}
            >
              My journey is crafting digital experiences that captivate and
              engage both you and your audience.
            </MotionParagraph>
            <MotionDiv
              className="flex flex-column lg:flex-row gap-7 mt-8 items-center"
              variants={scrollVariants}
              initial="hidden"
              whileInView="visible"
              transition={await scrollTransition(4)}
              viewport={{ once: false }}
            >
              <a
                role="button"
                className="hover:brightness-150 inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-gradient_primary bg-[length:200%_100%] px-6 font-medium text-custom_white-light transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                href="#contact"
              >
                Contact me
              </a>
              <div className="flex flex-row gap-4">
                <a
                  aria-label="Link of Mario Github's profile"
                  href="https://github.com/limaCoder"
                >
                  <FaGithub
                    size={24}
                    className="text-custom_secondary-dark hover:brightness-150 transition"
                  />
                </a>
                <a
                  aria-label="Link of Mario Linkedin's profile"
                  href="https://www.linkedin.com/in/marioaulima/"
                >
                  <FaLinkedin
                    size={24}
                    className="text-custom_secondary-dark hover:brightness-150 transition"
                  />
                </a>
              </div>
            </MotionDiv>
          </div>
          <MotionDiv
            className="relative w-min-auto min-h-auto lg:min-w-[521px] lg:min-h-[677]"
            variants={scrollVariants}
            initial="hidden"
            whileInView="visible"
            transition={await scrollTransition(5)}
            viewport={{ once: false }}
          >
            <Image
              src="/pages/home/hero/avatar-image.webp"
              priority
              alt="Representation of Mario Lima in avatar"
              width={506}
              height={678}
            />
          </MotionDiv>
        </div>
      </WavyBackground>
    </section>
  );
}
