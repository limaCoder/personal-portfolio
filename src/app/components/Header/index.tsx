import Image from "next/image";

export function Header() {
  return (
    <header className="w-full m-h-[100px] sticky top-0 z-30 bg-custom_black-dark">
      <div className="container py-5 flex flex-row justify-between items-center lg:max-w-[1216px]">
        <div>
          <Image
            src="/logo/logo.svg"
            alt="Logo of Mario Lima's Brand"
            className="hover:opacity-50 transition cursor-pointer"
            width={71}
            height={68}
          />
        </div>
        <nav>
          <ul className="flex flex-row gap-8 text-custom_white-dark">
            <li>
              <a className="hover:opacity-50 transition" href="">
                About
              </a>
            </li>
            <li>
              <a className="hover:opacity-50 transition" href="">
                Services
              </a>
            </li>
            <li>
              <a className="hover:opacity-50 transition" href="">
                Experiences
              </a>
            </li>
            <li>
              <a className="hover:opacity-50 transition" href="">
                Projects
              </a>
            </li>
            <li>
              <a className="hover:opacity-50 transition" href="">
                Skills
              </a>
            </li>
            <li>
              <a className="hover:opacity-50 transition" href="">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
