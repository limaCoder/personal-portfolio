import Image from "next/image";

import { NavMobile } from "./components/nav-mobile";
import { NavDesktop } from "./components/nav-desktop";
import { BorderTrail } from "../ui/border-tail";

export function Header() {
  return (
    <header className="w-full min-h-[100px] fixed top-0 lg:top-5 z-30">
      <div className="container py-5 flex flex-row justify-between items-center max-w-[1216px] bg-custom_secondary-dark/10 antialiased lg:rounded-lg backdrop-blur-sm border border-custom_black-dark">
        <BorderTrail
          className="hidden lg:block"
          style={{
            boxShadow:
              "0px 0px 60px 30px rgb(255 255 255 / 50%), 0 0 100px 60px rgb(0 0 0 / 50%), 0 0 140px 90px rgb(0 0 0 / 50%)",
          }}
          size={100}
        />
        <div>
          <a
            className="hover:opacity-50 transition cursor-pointer"
            href="#hero"
          >
            <Image
              priority
              src="/logo/logo.svg"
              alt="Logo of Mario Lima's Brand"
              height={71}
              width={71}
            />
          </a>
        </div>
        <nav>
          <NavDesktop />
          <NavMobile />
        </nav>
      </div>
    </header>
  );
}
