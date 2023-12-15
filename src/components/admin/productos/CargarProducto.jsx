import { useState } from "react";
import { IoAdd } from "react-icons/io5";

const CargarProducto = () => {
  const [formData, setFormData] = useState({
    picture_1: "",
    picture_2: "",
    picture_3: "",
    picture_4: "",
    title: "",
    description: "",
    colection: "",
    features: "",
    number: "",
    stock: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageUpload = (e) => {
    // const file = e.target.files[0];
    // const reader = new FileReader();
    // reader.onloadend = () => {
    //   setFormData({
    //     ...formData,
    //     [e.target.name]: reader.result,
    //   });
    // };
    // reader.readAsDataURL(file);

    setFormData({
      ...formData,
      [e.target.name]: "file submitted",
    });
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);

    // Submit function
  };

  return (
    <>
      <div className="bg-gradient min-h-screen py-12 flex justify-center flex-col md:flex-row">
        <h1 className="text-3xl md:text-4xl font-black mb-4 mx-4 uppercase text-center ml-20 md:ml-24 md:pt-12">
          Cargar
          <br /> productos
        </h1>

        <form
          className="w-full px-20 md:w-1/3 md:px-0 ml-8 md:ml-12"
          onSubmit={handleSubmit}
        >
          <div className="flex-col w-full ml-5">
            <div className="flex justify-end">
              <button className="pt-2">
                <IoAdd className="w-6 h-6 text-slate-200 rotate-45 hover:text-slate-300" />
              </button>
            </div>
          </div>
          <div className="text-center flex justify-center pt-2">
            <label
              htmlFor="imageInput_1"
              className="group w-24 h-20 md:h-24 rounded-3xl bg-white/40 flex items-center justify-center mx-1 hover:bg-white/30"
            >
              <IoAdd className="w-8 h-8 md:w-10 md:h-10 text-slate-200/90 group-hover:text-slate-300/90" />
            </label>
            <input
              type="file"
              className="hidden"
              id="imageInput_1"
              name="picture_1"
              onChange={handleImageUpload}
              multiple
            />
            <label
              htmlFor="imageInput_2"
              className="group w-24 h-20 md:h-24 rounded-3xl bg-white/40 flex items-center justify-center mx-1 hover:bg-white/30"
            >
              <IoAdd className="w-8 h-8 md:w-10 md:h-10 text-slate-200/90 group-hover:text-slate-300/90" />
            </label>
            <input
              type="file"
              className="hidden"
              id="imageInput_2"
              name="picture_2"
              onChange={handleImageUpload}
              multiple
            />
            <label
              htmlFor="imageInput_3"
              className="group w-24 h-20 md:h-24 rounded-3xl bg-white/40 flex items-center justify-center mx-1 hover:bg-white/30"
            >
              <IoAdd className="w-8 h-8 md:w-10 md:h-10 text-slate-200/90 group-hover:text-slate-300/90" />
            </label>
            <input
              type="file"
              className="hidden"
              id="imageInput_3"
              name="picture_3"
              onChange={handleImageUpload}
              multiple
            />
            <label
              htmlFor="imageInput_4"
              className="group w-24 h-20 md:h-24 rounded-3xl bg-white/40 flex items-center justify-center mx-1 hover:bg-white/30"
            >
              <IoAdd className="w-8 h-8 md:w-10 md:h-10 text-slate-200/90 group-hover:text-slate-300/90" />
            </label>
            <input
              type="file"
              className="hidden"
              id="imageInput_4"
              name="picture_4"
              onChange={handleImageUpload}
              multiple
            />
            {/* <button
              className="group w-24 h-20 md:h-24 rounded-3xl bg-white/40 flex items-center justify-center mx-1 hover:bg-white/30"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              <IoAdd className="w-8 h-8 md:w-10 md:h-10 text-slate-200/90 group-hover:text-slate-300/90" />
            </button> */}
          </div>
          <div className="flex flex-col pt-4 mx-auto">
            <label
              htmlFor="title"
              className="block text-bold font-medium text-white"
            >
              Título
            </label>{" "}
            <input
              className="bg-transparent border-2 pl-1 border-slate-300/90 focus:border-slate-200 rounded-lg outline-none"
              type="text"
              name="title"
              onChange={handleChange}
            ></input>
          </div>
          <div className="flex flex-col pt-1 mx-auto">
            <label
              htmlFor="title"
              className="block text-bold font-medium text-white"
            >
              Descripición
            </label>
            <textarea
              className="bg-transparent border-2 pl-1 border-slate-300/90 py-2.5 focus:border-slate-200 rounded-lg outline-none"
              type="textarea"
              name="description"
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="flex flex-col pt-1 mx-auto">
            <label
              htmlFor="title"
              className="block text-bold font-medium text-white"
            >
              Colección
            </label>
            <input
              className="bg-transparent border-2 pl-1 border-slate-300/90 focus:border-slate-200 rounded-lg outline-none"
              type="text"
              name="colection"
              onChange={handleChange}
            ></input>
          </div>
          <div className="flex flex-col pt-1 mx-auto">
            <label
              htmlFor="title"
              className="block text-bold font-medium text-white"
            >
              Características
            </label>
            <input
              className="bg-transparent border-2 pl-1 border-slate-300/90 focus:border-slate-200 rounded-lg outline-none"
              type="text"
              name="features"
              onChange={handleChange}
            ></input>
          </div>
          <div className="flex flex-col pt-1 mx-auto">
            <label
              htmlFor="title"
              className="block text-bold font-medium text-white"
            >
              Número
            </label>
            <input
              className="bg-transparent border-2 pl-1 border-slate-300/90 focus:border-slate-200 rounded-lg outline-none"
              type="text"
              name="number"
              onChange={handleChange}
            ></input>
          </div>
          <div className="flex flex-col pt-1 mx-auto">
            <label
              htmlFor="title"
              className="block text-bold font-medium text-white"
            >
              Stock
            </label>
            <input
              className="bg-transparent border-2 pl-1 border-slate-300/90 focus:border-slate-200 rounded-lg outline-none"
              type="text"
              name="stock"
              onChange={handleChange}
            ></input>
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
