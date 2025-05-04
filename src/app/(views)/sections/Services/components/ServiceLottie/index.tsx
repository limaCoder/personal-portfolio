"use client";

import dynamic from "next/dynamic";
import { servicesAnimationOptions } from "@/app/(views)/sections/Services/constants/lottie_services-options";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export function ServiceLottie() {
  return (
    <Lottie
      animationData={servicesAnimationOptions?.animationData}
      height="100%"
      width="100%"
    />
  );
}
