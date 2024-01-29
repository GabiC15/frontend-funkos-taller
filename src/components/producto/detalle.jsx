import Breadcrumb from "@/components/producto/breadcrumb";
import Image from "next/image";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const data = {
  productId: "74063",
  title: "Pop! The Witch Mother",
  description:
    "The Original Witch is here to give the gift of magic to the Sanderson sisters! Welcome Pop! The Original Witch into your coven, or this enchantress might just put a spell on you. Brew up some fun with this bewitching, exclusive addition to your Hocus Pocus 2 collection! Vinyl figure is approximately 3.9-inches tall.",
  price: "$15.00",
  fandom: "Movies & TV",
  license: "Disney",
  type: "Pop!",
  images: [
    "https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dwebd2d1d6/images/funko/upload/74063%20The%20Original%20Witch_GLAM-WEB.png?sw=800&sh=800",
    "https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dw089727fc/images/funko/upload/74063-POPDisney-HP2-TheOriginalWitch-Lifestyle-092723.jpg?sw=800&sh=800",
    "https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dw33b789ef/images/funko/upload/74063%20The%20Original%20Witch_FW_GLAM-1-WEB.png?sw=800&sh=800",
  ],
};

export default function Detalle({ funko }) {
  const [image, setImage] = useState(0);

  return (
    <>
      <div className="container mx-auto flex flex-col md:flex-row justify-center gap-8">
        <div className="flex flex-col px-4 md:px-0">
          <div className="md:hidden">
            <Breadcrumb
              fandom={funko.categoria.padre.nombre}
              license={funko.categoria.nombre}
            />
          </div>
          <div className="w-full md:w-96 h-min md:h-96 mt-3 md:mt-0 bg-black/20 rounded-md">
            <Image
              src={funko.imagenes[image].path}
              width={0}
              height={0}
              sizes="100vw"
              className="w-full drop-shadow-lg hover:scale-110 transition-transform rounded-md"
              alt="Imagen Harry Poter"
            />
          </div>
          <div className="flex gap-3 mt-3">
            {funko.imagenes.map((img, i) => (
              <div
                className={`w-20 h-20 rounded-md hover:bg-black/20 transition-colors ${
                  i == image
                    ? "bg-black/20 border border-chineseBlack"
                    : "bg-black/10"
                }`}
                key={i}
                onClick={() => setImage(i)}
              >
                <Image
                  src={img.path}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full drop-shadow-lg hover:scale-110 transition rounded-md"
                  alt="Imagen Harry Poter"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col w-full md:w-[26rem] px-4 md:px-0">
          <div className="hidden md:block">
            <Breadcrumb
              fandom={funko.categoria.padre.nombre}
              license={funko.categoria.nombre}
            />
          </div>

          <h1 className="text-2xl md:text-3xl font-black uppercase md:mt-2">
            {funko.titulo}
          </h1>
          <p className="mt-1 text-sm">{funko.descripcion}</p>
          <div className="flex gap-1 mt-5">
            <FontAwesomeIcon
              icon={faStarSolid}
              className="text-yellow-500 text-2xl"
            />
            <FontAwesomeIcon
              icon={faStarSolid}
              className="text-yellow-500 text-2xl"
            />
            <FontAwesomeIcon
              icon={faStarSolid}
              className="text-yellow-500 text-2xl"
            />
            <FontAwesomeIcon
              icon={faStarSolid}
              className="text-yellow-500 text-2xl"
            />
            <FontAwesomeIcon
              icon={faStarRegular}
              className="text-yellow-500 text-2xl"
            />
          </div>
          <h3 className="text-3xl font-bold mt-5">${funko.precio}</h3>
          <button className="w-full bg-chineseBlack py-2 rounded-lg mt-5">
            Comprar
          </button>
        </div>
      </div>
    </>
  );
}
