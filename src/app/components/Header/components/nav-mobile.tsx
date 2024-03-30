"use client";

import { useState, useRef } from "react";
import { useClickAway } from "react-use";

import { AnimatePresence } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";

import { routes } from "../routes";
import {
  MotionDiv,
  MotionListItem,
} from "@/app/lib/framer-motion/MotionComponents";

export const NavMobile = () => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => setOpen(false));

  return (
    <div ref={ref} className="lg:hidden">
      <Hamburger
        label="Hamburger menu"
        color="#fff"
        toggled={isOpen}
        size={20}
        toggle={setOpen}
      />
      <AnimatePresence>
        {isOpen && (
          <MotionDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed left-0 shadow-4xl right-0 h-full top-24 p-5 bg-neutral-950 border-b border-b-white/20"
          >
            <ul className="grid gap-2">
              {routes.map((route, idx) => {
                return (
                  <MotionListItem
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.1 + idx / 10,
                    }}
                    key={route.title}
                    className="w-full p-[0.08rem] rounded-xl bg-gradient-to-tr from-neutral-800 via-neutral-950 to-neutral-700"
                  >
                    <a
                      onClick={() => setOpen((prev) => !prev)}
                      className={
                        "flex items-center justify-between w-full p-5 rounded-xl bg-neutral-950"
                      }
                      href={route.href}
                    >
                      <span className="flex gap-1 text-lg text-custom_white-dark">
                        {route.title}
                      </span>
                    </a>
                  </MotionListItem>
                );
              })}
            </ul>
          </MotionDiv>
        )}
      </AnimatePresence>
    </div>
  );
};
