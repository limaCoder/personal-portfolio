import Image from "next/image";

export function Header() {
  return (
    <header className="hidden lg:block w-full min-h-[100px] sticky top-0 z-30 bg-custom_black-dark">
      <div className="container py-5 flex flex-row justify-between items-center lg:max-w-[1216px]">
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
          <ul className="flex flex-row gap-8 text-custom_white-dark">
            <li>
              <a className="hover:opacity-50 transition" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="hover:opacity-50 transition" href="#services">
                Services
              </a>
            </li>
            <li>
              <a className="hover:opacity-50 transition" href="#experiences">
                Experiences
              </a>
            </li>
            <li>
              <a className="hover:opacity-50 transition" href="#projects">
                Projects
              </a>
            </li>
            <li>
              <a className="hover:opacity-50 transition" href="#skills">
                Skills
              </a>
            </li>
            <li>
              <a className="hover:opacity-50 transition" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
