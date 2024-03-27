"use client";

import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

import { WavyBackground } from "@/app/components/ui/wavy-background";
import { scrollVariants } from "@/app/lib/framer-motion/scrollVariants";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="h-screen w-full bg-gradient_dark relative py-40"
    >
      <WavyBackground>
        <div className="container h-full flex lg:flex-row justify-around items-center z-20 relative">
          <div className="max-w-[372px]">
            <motion.p
              className="font-body_one text-custom_white-dark"
              variants={scrollVariants}
              initial="hidden"
              whileInView="visible"
              custom={1}
              viewport={{ once: false }}
            >
              Hi, there!
              <strong className="text-custom_white-light ml-1">
                I’m Mario Lima
              </strong>
            </motion.p>
            <motion.h1
              className="font-headline_one text-custom_secondary-light mt-2 mb-6"
              variants={scrollVariants}
              initial="hidden"
              whileInView="visible"
              custom={2}
              viewport={{ once: false }}
            >
              Front-end Developer
            </motion.h1>
            <motion.p
              className="font-body_one text-custom_white-dark"
              variants={scrollVariants}
              initial="hidden"
              whileInView="visible"
              custom={3}
              viewport={{ once: false }}
            >
              My journey is crafting digital experiences that captivate and
              engage both you and your audience.
            </motion.p>
            <motion.div
              className="flex flex-row gap-7 mt-8 items-center"
              variants={scrollVariants}
              initial="hidden"
              whileInView="visible"
              custom={4}
              viewport={{ once: false }}
            >
              <button className="hover:brightness-150 transition inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-gradient_primary bg-[length:200%_100%] px-6 font-medium text-custom_white-light transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                Contact me
              </button>
              <div className="flex flex-row gap-4">
                <button>
                  <FaGithub
                    size={24}
                    className="text-custom_secondary-dark hover:brightness-150 transition"
                  />
                </button>
                <button>
                  <FaLinkedin
                    size={24}
                    className="text-custom_secondary-dark hover:brightness-150 transition"
                  />
                </button>
              </div>
            </motion.div>
          </div>
          <motion.div
            className="relative"
            variants={scrollVariants}
            initial="hidden"
            whileInView="visible"
            custom={5}
            viewport={{ once: false }}
          >
            <Image
              src="/pages/home/hero/avatar-image.png"
              alt="Representation of Mario Lima in avatar"
              width={521}
              height={677}
            />
          </motion.div>
        </div>
      </WavyBackground>
    </section>
  );
}
