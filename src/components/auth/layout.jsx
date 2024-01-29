import Image from "next/image";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <>
      <div className="bg-gradient h-screen flex items-center justify-center">
        <Link href="/">
          <Image
            src="/logo.svg"
            width={200}
            height={8}
            className="h-8 absolute top-0 left-0 mt-5 ml-7"
            alt="Logo"
          />
        </Link>

        <div className="w-[55rem] h-[35rem] md:h-[33rem] bg-cover flex rounded-xl px-7 md:px-0">
          <div className="max-w-[27.5rem] bg-[url(/home/formulario-bg.png)] w-full bg-center hidden md:flex flex-col justify-center items-center rounded-l-xl px-20">
            <div className="self-start">
              <h3 className="text-2xl font-normal">Bienvenidos a</h3>
              <h1 className="text-3xl font-bold leading-tight">FunkoPlanet!</h1>
            </div>
            <Image
              src="/home/funkos/anime.png"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full drop-shadow-lg"
              alt="Funko Star Wars"
            />
          </div>
          <div className="max-w-[27.5rem] bg-lightSilver w-full flex flex-col items-center rounded-xl md:rounded-l-none md:rounded-r-xl px-16 md:px-24 justify-center relative">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
