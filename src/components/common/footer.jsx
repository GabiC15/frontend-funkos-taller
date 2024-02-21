import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="bg-chineseBlack">
        <div className="mx-auto w-full max-w-screen-2xl p-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <Link href="/" className="flex items-center">
                <Image
                  src="/logo.svg"
                  width={0}
                  height={0}
                  className="h-5 w-full me-3"
                  alt="Logo"
                  priority
                />
              </Link>
            </div>
            <div className="flex gap-1 md:gap-10 justify-around items-center">
              <Link
                className="mb-4 md:mb-0 text-sm font-semibold text-white uppercase"
                href="/"
              >
                Home
              </Link>
              <Link
                className="mb-4 md:mb-0 text-sm font-semibold text-white uppercase"
                href="/productos"
              >
                Productos
              </Link>
              <Link
                className="mb-4 md:mb-0 text-sm font-semibold text-white uppercase"
                href="/#contacto"
              >
                Contacto
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-palatinateBlue flex items-center justify-center py-5">
          <span className="text-sm text-slate-200 text-center">
            © 2024{" "}
            <a href="https://funkoplanet.online" className="hover:underline">
              FunkoPlanet™
            </a>
            . Todos los derechos reservados.
          </span>
        </div>
      </footer>
    </>
  );
}
