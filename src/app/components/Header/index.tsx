import Image from "next/image";

import { NavMobile } from "./components/nav-mobile";
import { NavDesktop } from "./components/nav-desktop";

export function Header() {
  return (
    <header className="w-full min-h-[100px] sticky top-0 z-30 bg-custom_black-dark">
      <div className="container py-5 flex flex-row justify-between items-center max-w-[1216px]">
        <div>
          <a
            className="hover:opacity-50 transition cursor-pointer"
            href="#hero"
          >
            <Image
              className="h-auto w-auto"
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
