import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full h-32 lg:h-24 bg-custom_black-light border-t-2 border-t-custom_primary">
      <div className="container h-full">
        <div className="w-full h-full flex flex-row justify-center items-center gap-8">
          <Image
            priority
            src="/logo/logo.svg"
            alt="Logo of Mario Lima's Brand"
            height={71}
            width={71}
          />
          <div>
            <p className="font-body_two text-custom_white-dark text-center">
              © {currentYear} | Portfolio website designed and developed by
              Mario Augusto de Lima
            </p>
            <a
              href="#"
              className="block font-body_three font-bold text-custom_primary-light text-center lg:text-left mt-2"
            >
              CNPJ: 57.996.361/0001-57
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
