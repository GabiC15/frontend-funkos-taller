import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Destacados() {
  return (
    <>
      <div className="bg-[url('/home/destacados-bg.png')] bg-cover w-full py-10 md:py-20">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-10 lg:px-20 xl:px-28 my-auto">
          <div>
            <h1 className="text-3xl/relaxed md:text-5xl/normal font-black mb-3">
              LLEVA TUS HECHICEROS
              <br />
              FAVORITOS A CASA
            </h1>
            <p className="text-xl md:text-2xl mb-6">
              ¡En FunkoMania comienzas tu increíble
              <br className="hidden md:block" /> colección de Funkos!
            </p>
            <Link
              href={{
                pathname: "productos",
                query: {
                  categoria: 3,
                  subcategoria: 68,
                },
              }}
              className="bg-chineseBlack py-2 px-14 mt-20 rounded-full hover:bg-white/20 transition-colors text-lg font-semibold"
            >
              Comprar
            </Link>
          </div>
          <Image
            src="/home/funko-harrypotter.png"
            width={0}
            height={0}
            sizes="100vw"
            priority
            className="w-56 md:w-80 mt-7 mx-auto md:my-auto"
            alt="Imagen Harry Poter"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-6 bg-chineseBlack py-6 px-7 md:px-36 gap-6">
        <Link
          href={{
            pathname: "productos/",
            query: {
              categoria: 3,
              subcategoria: 50,
            },
          }}
        >
          <Image
            src="/home/brands/disney.png"
            width={0}
            height={80}
            sizes="100vw"
            className="w-32 md:w-36 m-auto transition-transform hover:scale-110"
            alt="Disney"
          />
        </Link>
        <Link
          href={{
            pathname: "productos/",
            query: {
              categoria: 3,
              subcategoria: 68,
            },
          }}
        >
          <Image
            src="/home/brands/hp.png"
            width={0}
            height={0}
            sizes="100vw"
            className="w-36 md:w-44 m-auto transition-transform hover:scale-110"
            alt="Harry Potter"
          />
        </Link>
        <Link
          href={{
            pathname: "productos/",
            query: {
              categoria: 9,
              subcategoria: 240,
            },
          }}
        >
          <Image
            src="/home/brands/marvel.png"
            width={0}
            height={0}
            sizes="100vw"
            className="w-32 md:w-36 m-auto transition-transform hover:scale-110"
            alt="Marvel"
          />
        </Link>
        <Link
          href={{
            pathname: "productos/",
            query: {
              categoria: 2,
              subcategoria: 43,
            },
          }}
        >
          <Image
            src="/home/brands/star-wars.png"
            width={0}
            height={0}
            sizes="100vw"
            className="w-32 md:w-36 m-auto transition-transform hover:scale-110"
            alt="Star Wars"
          />
        </Link>
        <Link
          href={{
            pathname: "productos/",
            query: {
              categoria: 9,
              subcategoria: 241,
            },
          }}
        >
          <Image
            src="/home/brands/dc.png"
            width={0}
            height={0}
            sizes="100vw"
            className="w-16 md:w-16 m-auto transition-transform hover:scale-110"
            alt="DC Comics"
          />
        </Link>
        <Link
          href={{
            pathname: "productos/",
            query: {
              categoria: 6,
              subcategoria: 156,
            },
          }}
        >
          <Image
            src="/home/brands/nba.png"
            width={0}
            height={0}
            sizes="100vw"
            className="w-32 md:w-36 m-auto transition-transform hover:scale-110"
            alt="NBA"
          />
        </Link>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="bg-[url('/home/backgrounds/star-warse.jpg')] bg-cover w-full md:w-1/2 flex justify-between items-end py-12 px-8 md:px-24">
          <Image
            src="/home/funkos/star-wars.png"
            width={0}
            height={0}
            sizes="100vw"
            className="w-[10rem] md:w-[13rem]"
            alt="Funko Star Wars"
          />
          <div>
            <h3 className="text-3xl md:text-5xl font-bold whitespace-nowrap">
              Star Wars
            </h3>
            <Link
              href={{
                pathname: "/productos",
                query: { categoria: 2, subcategoria: 43 },
              }}
              className="text-2xl font-normal underline"
            >
              Ver más
            </Link>
          </div>
        </div>
        <div className="bg-[url('/home/backgrounds/frozene.jpg')] bg-cover w-full md:w-1/2 flex justify-between items-end py-12 px-8 md:px-24">
          <Image
            src="/home/funkos/frozen.png"
            width={0}
            height={0}
            sizes="100vw"
            className="w-[10rem] md:w-[13rem]"
            alt="Funko Frozen"
          />
          <div>
            <h3 className="text-3xl md:text-5xl font-bold whitespace-nowrap">
              Frozen 2
            </h3>
            <Link
              href={{
                pathname: "/productos",
                query: { busqueda: "elsa", categoria: 8 },
              }}
              className="text-2xl font-normal underline"
            >
              Ver más
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
