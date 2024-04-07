"use client";

import Lottie from "react-lottie";
import { servicesAnimationOptions } from "../../constants/lottie_services-options";

export function ServiceLottie() {
  return (
    <Lottie options={servicesAnimationOptions} height="100%" width="100%" />
  );
}
