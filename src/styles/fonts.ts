import { Mukta, Saira } from "next/font/google";

const fontMukta = Mukta({
  weight: ["300", "400"],
  subsets: ["latin"],
  variable: "--font-mukta",
});

const fontSaira = Saira({
  weight: ["300", "400"],
  subsets: ["latin"],
  variable: "--font-saira",
});

export const fontMuktaVariable = fontMukta.variable;
export const fontSairaVariable = fontSaira.variable;
