import { IoAdd } from "react-icons/io5";

const CargarProducto = () => {
  return (
    <>
    <div className="bg-gradient min-h-screen py-12 flex justify-center">

      <form className="w-full px-20 md:w-1/3 md:px-0 ml-12">
        <button className="flex pt-2 justify-end w-full ml-5">
          <IoAdd className="w-6 h-6 text-slate-200 rotate-45 hover:text-slate-300" />
        </button>
        <div className="text-center flex justify-center pt-2">
          <button className="group w-24 h-20 md:h-24 rounded-3xl bg-white/40 flex items-center justify-center mx-1 hover:bg-white/30">
            <IoAdd className="w-8 h-8 md:w-10 md:h-10 text-slate-200/90 group-hover:text-slate-300/90" />
          </button>
          <button className="group w-24 h-20 md:h-24 rounded-3xl bg-white/40 flex items-center justify-center mx-1 hover:bg-white/30">
            <IoAdd className="w-8 h-8 md:w-10 md:h-10 text-slate-200/90 group-hover:text-slate-300/90" />
          </button>
          <button className="group w-24 h-20 md:h-24 rounded-3xl bg-white/40 flex items-center justify-center mx-1 hover:bg-white/30">
            <IoAdd className="w-8 h-8 md:w-10 md:h-10 text-slate-200/90 group-hover:text-slate-300/90" />
          </button>
          <button className="group w-24 h-20 md:h-24 rounded-3xl bg-white/40 flex items-center justify-center mx-1 hover:bg-white/30">
            <IoAdd className="w-8 h-8 md:w-10 md:h-10 text-slate-200/90 group-hover:text-slate-300/90" />
          </button>
        </div>
        <div className="flex flex-col pt-4 mx-auto">
          <label
            htmlFor="title"
            className="block text-bold font-medium text-white"
          >
            Título
          </label>{" "}
          <input className="bg-transparent border-2 pl-1 border-slate-300/90 focus:border-slate-200 rounded-lg outline-none"></input>
        </div>
        <div className="flex flex-col pt-1 mx-auto">
        <label
            htmlFor="title"
            className="block text-bold font-medium text-white"
          >
            Descripición
          </label>
          <textarea className="bg-transparent border-2 pl-1 border-slate-300/90 py-2.5 focus:border-slate-200 rounded-lg outline-none"></textarea>
        </div>
        <div className="flex flex-col pt-1 mx-auto">
        <label
            htmlFor="title"
            className="block text-bold font-medium text-white"
          >
            Colección
          </label>
          <input className="bg-transparent border-2 pl-1 border-slate-300/90 focus:border-slate-200 rounded-lg outline-none"></input>
        </div>
        <div className="flex flex-col pt-1 mx-auto">
        <label
            htmlFor="title"
            className="block text-bold font-medium text-white"
          >
            Características
          </label>
          <input className="bg-transparent border-2 pl-1 border-slate-300/90 focus:border-slate-200 rounded-lg outline-none"></input>
        </div>
        <div className="flex flex-col pt-1 mx-auto">
        <label
            htmlFor="title"
            className="block text-bold font-medium text-white"
          >
            Número
          </label>
          <input className="bg-transparent border-2 pl-1 border-slate-300/90 focus:border-slate-200 rounded-lg outline-none"></input>
        </div>
        <div className="flex flex-col pt-1 mx-auto">
        <label
            htmlFor="title"
            className="block text-bold font-medium text-white"
          >
            Stock
          </label>
          <input className="bg-transparent border-2 pl-1 border-slate-300/90 focus:border-slate-200 rounded-lg outline-none"></input>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-chineseBlack my-5 py-2 rounded-xl w-full"
          >
            Publicar
          </button>{" "}
        </div>
      </form>
    </div>
    </>
  );
};

export default CargarProducto;
