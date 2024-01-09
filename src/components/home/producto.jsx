import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Producto({ producto }) {
  return (
    <div className="bg-black/20 lg:w-[14.5rem] h-[23.5rem] md:h-[25rem] flex flex-col text-start items-start p-4 border-[1px] border-[#282828] rounded-[18px] shadow-sm">
      <div className="bg-white/20 w-full rounded-[18px] py-8 px-6 md:px-10">
        <Image
          src={producto.images[0].path}
          width={0}
          height={0}
          sizes="100vw"
          className="w-full md:w-36 mx-auto scale-[1.6] md:scale-[1.7] hover:scale-[1.87] transition-all drop-shadow-lg hover:drop-shadow-2xl"
          alt="Funko Star Wars"
        />
      </div>
      <div className="bg-palatinateBlue rounded-full mt-4">
        <p className="my-0.5 mx-3 font-extrabold text-xs text-start whitespace-nowrap overflow-clip text-ellipsis	max-w-[8rem] md:max-w-[11rem]">
          {producto.license}
        </p>
      </div>
      <p className="font-medium text-md md:text-lg/tight mt-2 md:mt-3 line-clamp-2">
        {producto.title}
      </p>
      <p className="font-light text-lg md:text-xl mt-auto">${15000}</p>
      <Link
        href=""
        className="bg-chineseBlack w-full flex items-center justify-between gap-5 px-4 py-2 rounded-full mt-2"
      >
        <FontAwesomeIcon icon={faCartShopping} />
        <p>Comprar</p>
        <div className="w-3"></div>
      </Link>
    </div>
  );
}
