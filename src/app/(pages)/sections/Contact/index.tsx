"use client";

import { motion } from "framer-motion";

import { FaDiscord } from "react-icons/fa";
import { FiGithub, FiLinkedin } from "react-icons/fi";

import { ContactForm } from "./components/ContactForm";

import { Spotlight } from "@/app/components/ui/Spotlight";
import { Button } from "@/app/components/ui/button";

import { scrollVariants } from "@/app/lib/framer-motion/scrollVariants";

export function ContactSection() {
  return (
    <section className="min-h-screen w-full relative py-20 bg-black/[0.96] antialiased bg-grid-white/[0.02] overflow-hidden">
      <motion.div
        variants={scrollVariants}
        initial="hidden"
        whileInView="visible"
        custom={1}
        viewport={{ once: false }}
      >
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
      </motion.div>
      <div className="container">
        <div className="flex flex-row justify-around">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-12">
              <motion.h3
                className="font-headline_two text-custom_white-light"
                variants={scrollVariants}
                initial="hidden"
                whileInView="visible"
                custom={2}
                viewport={{ once: false }}
              >
                Say Hello!
              </motion.h3>
              <motion.div
                className="max-w-[384px]"
                variants={scrollVariants}
                initial="hidden"
                whileInView="visible"
                custom={3}
                viewport={{ once: false }}
              >
                <p className="font_body-two text-custom_white-dark">
                  If you have any inquiries or simply want to reach out, feel
                  free to fill out the form or get in touch via social media
                  below.
                </p>
                <p className="font_body-two text-custom_white-dark mt-4">
                  I&apos;m enthusiastic about building connections, exchanging
                  insights, and exploring potential collaborations. Don&apos;t
                  hesitate to reach out, let&apos;s start a conversation!
                </p>
              </motion.div>
            </div>
            <motion.div
              className="flex flex-col gap-8 max-w-[292px]"
              variants={scrollVariants}
              initial="hidden"
              whileInView="visible"
              custom={4}
              viewport={{ once: false }}
            >
              <Button
                className="rounded-[27px] border-custom_secondary hover:brightness-[0.8] transition"
                variant="outline"
              >
                <FiLinkedin
                  size={24}
                  className="text-custom_secondary-dark mr-4"
                />
                <span className="font-headline_five text-custom_white">
                  Chat with me in Linkedin
                </span>
              </Button>
              <Button
                className="rounded-[27px] border-custom_secondary hover:brightness-[0.8] transition"
                variant="outline"
              >
                <FaDiscord
                  size={24}
                  className="text-custom_secondary-dark mr-4"
                />
                <span className="font-headline_five text-custom_white">
                  Chat with me in Discord
                </span>
              </Button>
              <Button
                className="rounded-[27px] border-custom_secondary hover:brightness-[0.8] transition"
                variant="outline"
              >
                <FiGithub
                  size={24}
                  className="text-custom_secondary-dark mr-4"
                />
                <span className="font-headline_five text-custom_white">
                  See my Github
                </span>
              </Button>
            </motion.div>
          </div>
          <div className="flex flex-col gap-12">
            <motion.h2
              className="font-headline_two text-custom_secondary-light"
              variants={scrollVariants}
              initial="hidden"
              whileInView="visible"
              custom={5}
              viewport={{ once: false }}
            >
              Get in touch
            </motion.h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
