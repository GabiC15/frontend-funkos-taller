import Image from "next/image";

export default function Formulario() {
  return (
    <>
      <div className="bg-[url(/home/formulario-bg.png)] bg-cover w-full">
        <div className="container mx-auto flex flex-col md:flex-row justify-center items-center md:items-between py-12 md:py-20 px-4 md:px-0 gap-10 md:gap-40">
          <form>
            <div className="flex flex-col w-full md:w-[30rem]">
              <h4 className="text-xl font-bold">ESCRIBENOS POR CONSULTAS!</h4>
              <label
                htmlFor="first_name"
                className="block mb-2 text-sm font-normal text-white mt-2"
              >
                Nombre
              </label>
              <input
                type="text"
                id="first_name"
                className="bg-transparent border-2 border-white text-white text-sm rounded-lg focus:ring-white block w-full p-2.5"
                placeholder="Ingrese su nombre"
                required
              />
              <label
                htmlFor="mail"
                className="block mb-2 text-sm font-normal text-white mt-2"
              >
                Email
              </label>
              <input
                type="text"
                id="mail"
                className="bg-transparent border-2 border-white text-white text-sm rounded-lg focus:ring-white block w-full p-2.5"
                placeholder="Ingrese su email"
                required
              />
              <label
                htmlFor="mensaje"
                className="block mb-2 text-sm font-normal text-white mt-2"
              >
                Mensaje
              </label>
              <textarea
                id="mensaje"
                rows="5"
                cols="33"
                className="bg-transparent border-2 border-white text-white text-sm rounded-lg focus:ring-white block w-full p-2.5 max-h-36"
                placeholder="Ingrese su consulta"
                required
              ></textarea>
              <button
                type="submit"
                className="bg-chineseBlack my-6 py-2 w-full rounded-xl"
              >
                Enviar
              </button>
            </div>
          </form>
          <Image
            src="/home/funkos/anime.png"
            width={0}
            height={0}
            sizes="100vw"
            className="w-2/3 md:w-1/4 my-auto -order-1 md:order-1 drop-shadow-lg"
            alt="Funko Star Wars"
          />
        </div>
      </div>
    </>
  );
}
