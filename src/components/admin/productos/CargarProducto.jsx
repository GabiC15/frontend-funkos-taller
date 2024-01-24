import { useState, useEffect } from "react";
import { IoAdd } from "react-icons/io5";
import { ADD_PRODUCTO } from "@/services/apollo/mutations/carga_producto";
import { useMutation } from "@apollo/client";
import ListCategorySubCategory from "./ListCategorySubCategory";

const CargarProducto = ({ producto }) => {
  const [createProducto, { data, loading, error }] = useMutation(ADD_PRODUCTO);

  const [categoryId, setCategoryId] = useState(
    parseInt(producto?.categoria?.padre?.id)
  );
  const [subcategoryId, setSubcategoryId] = useState(
    parseInt(producto?.categoria?.id)
  );

  const [formData, setFormData] = useState({
    picture_1: producto?.imagenes[0]?.path,
    picture_2: producto?.imagenes[1]?.path,
    picture_3: producto?.imagenes[2]?.path,
    picture_4: producto?.imagenes[3]?.path,
    titulo: producto?.titulo,
    descripcion: producto?.descripcion,
    categoriaId: categoryId,
    subcategoriaId: subcategoryId,
    caracteristicas: producto?.caracteristicas,
    stock: producto?.stock,
    precio: producto?.precio,
  });

  console.log(formData);

  useEffect(() => {
      setFormData({
        ...formData,
        ["categoriaId"]: parseInt(categoryId),
      });

  }, [categoryId]);

  useEffect(() => {
    setFormData({
      ...formData,
      ["subcategoriaId"]: parseInt(subcategoryId),
    });

}, [subcategoryId]);

  const dataList = {
    categoriaId: categoryId,
    categoriaName: producto?.categoria?.padre?.nombre,
    subcategoriaId: subcategoryId,
    subcategoriaName: producto?.categoria?.nombre,
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCategoryChange = (categoryName, value) => {
    if (categoryName === "categoria") {
      setCategoryId(value);
    }
    if (categoryName === "subcategoria") {
      setSubcategoryId(value);
    }
    console.log(formData);
  };

  const handleImagesRemove = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      ["picture_1"]: "",
      ["picture_2"]: "",
      ["picture_3"]: "",
      ["picture_4"]: "",
    });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData({
        ...formData,
        [e.target.name]: reader.result,
      });
    };
    reader.readAsDataURL(file);

    // setFormData({
    //   ...formData,
    //   [e.target.name]: "file submitted",
    // });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddProducto(formData);
    console.log(formData);
  };

  const handleAddProducto = (formData) => {
    createProducto({
      variables: {
        input: {
          titulo: formData.titulo,
          descripcion: formData.descripcion,
          stock: parseInt(formData.stock),
          precio: parseFloat(formData.precio),
          categoriaId: formData.subcategoriaId,
        },
      },
    });
  };

  if (loading) return <p>Submitting...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (data) return <p>Producto added successfully!</p>;

  return (
    <>
      <div className="bg-gradient min-h-screen py-12 flex justify-center flex-col md:flex-row">
        <h1 className="text-3xl md:text-4xl font-black mb-4 mx-4 uppercase text-center ml-20 md:ml-24 md:pt-12">
          Cargar
          <br /> productos
        </h1>

        <form
          className="w-full px-20 md:w-1/3 md:px-0 ml-8 md:ml-12"
          // onSubmit={handleSubmit}
        >
          <div className="flex-col w-full ml-5">
            <div className="flex justify-end">
              <button className="pt-2" onClick={handleImagesRemove}>
                <IoAdd className="w-6 h-6 text-slate-200 rotate-45 hover:text-slate-300" />
              </button>
            </div>
          </div>
          <div className="text-center md:flex justify-center pt-2 grid grid-cols-2">
            <div className="md:flex">
              <div className="">
                <input
                  type="file"
                  className="hidden"
                  id="imageInput_1"
                  name="picture_1"
                  onChange={handleImageUpload}
                  multiple
                />
                <label
                  htmlFor="imageInput_1"
                  className={`group ${
                    formData["picture_1"] ? "hidden" : null
                  } w-20 md:w-24 h-20 md:h-24 rounded-3xl hover:cursor-pointer bg-white/40 flex items-center justify-center mx-1 hover:bg-white/30`}
                >
                  <IoAdd className="w-8 h-8 md:w-10 md:h-10 text-slate-200/90 group-hover:text-slate-300/90" />
                </label>

                {formData["picture_1"] && (
                  <img
                    className={`group ${
                      !formData["picture_1"] ? "hidden" : null
                    } w-24 h-20 md:h-24 rounded-3xl hover:cursor-pointer bg-white/10 hover:opacity-90 flex items-center justify-center mx-1`}
                    src={formData["picture_1"]}
                    alt="Preview picture of Funko"
                    onClick={() =>
                      document.getElementById("imageInput_1").click()
                    }
                  />
                )}
              </div>
              <div className="pt-2 md:pt-0">
                <input
                  type="file"
                  className="hidden"
                  id="imageInput_2"
                  name="picture_2"
                  onChange={handleImageUpload}
                  multiple
                />
                <label
                  htmlFor="imageInput_2"
                  className={`group ${
                    formData["picture_2"] ? "hidden" : null
                  } w-20 md:w-24 h-20 md:h-24 rounded-3xl hover:cursor-pointer bg-white/40 flex items-center justify-center mx-1 hover:bg-white/30`}
                >
                  <IoAdd className="w-8 h-8 md:w-10 md:h-10 text-slate-200/90 group-hover:text-slate-300/90" />
                </label>

                {formData["picture_2"] && (
                  <img
                    className={`group ${
                      !formData["picture_2"] ? "hidden" : null
                    } w-20 h-20 md:h-24 rounded-3xl hover:cursor-pointer bg-white/10 hover:opacity-90 flex items-center justify-center mx-1`}
                    src={formData["picture_2"]}
                    alt="Preview picture of Funko"
                    onClick={() =>
                      document.getElementById("imageInput_2").click()
                    }
                  />
                )}
              </div>
            </div>
            <div className="md:flex">
              <div className="">
                <input
                  type="file"
                  className="hidden"
                  id="imageInput_3"
                  name="picture_3"
                  onChange={handleImageUpload}
                  multiple
                />
                <label
                  htmlFor="imageInput_3"
                  className={`group ${
                    formData["picture_3"] ? "hidden" : null
                  } w-20 md:w-24 h-20 md:h-24 rounded-3xl hover:cursor-pointer bg-white/40 flex items-center justify-center mx-1 hover:bg-white/30`}
                >
                  <IoAdd className="w-8 h-8 md:w-10 md:h-10 text-slate-200/90 group-hover:text-slate-300/90" />
                </label>

                {formData["picture_3"] && (
                  <img
                    className={`group ${
                      !formData["picture_3"] ? "hidden" : null
                    } w-20 h-20 md:h-24 rounded-3xl hover:cursor-pointer bg-white/10 hover:opacity-90 flex items-center justify-center mx-1`}
                    src={formData["picture_3"]}
                    alt="Preview picture of Funko"
                    onClick={() =>
                      document.getElementById("imageInput_3").click()
                    }
                  />
                )}
              </div>
              <div className="pt-2 md:pt-0">
                <input
                  type="file"
                  className="hidden"
                  id="imageInput_4"
                  name="picture_4"
                  onChange={handleImageUpload}
                  multiple
                />
                <label
                  htmlFor="imageInput_4"
                  className={`group ${
                    formData["picture_4"] ? "hidden" : null
                  } w-20 md:w-24 h-20 md:h-24 rounded-3xl hover:cursor-pointer bg-white/40 flex items-center justify-center mx-1 hover:bg-white/30`}
                >
                  <IoAdd className="w-8 h-8 md:w-10 md:h-10 text-slate-200/90 group-hover:text-slate-300/90" />
                </label>

                {formData["picture_4"] && (
                  <img
                    className={`group ${
                      !formData["picture_4"] ? "hidden" : null
                    } w-24 h-20 md:h-24 rounded-3xl hover:cursor-pointer bg-white/10 hover:opacity-90 flex items-center justify-center mx-1`}
                    src={formData["picture_4"]}
                    alt="Preview picture of Funko"
                    onClick={() =>
                      document.getElementById("imageInput_4").click()
                    }
                  />
                )}
              </div>
            </div>

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
              name="titulo"
              onChange={handleChange}
              value={formData.titulo ? formData.titulo : ""}
            ></input>
          </div>
          <div className="flex flex-col pt-1 mx-auto">
            <label
              htmlFor="title"
              className="block text-bold font-medium text-white"
            >
              Descripción
            </label>
            <textarea
              className="bg-transparent border-2 pl-1 border-slate-300/90 py-2.5 focus:border-slate-200 rounded-lg outline-none"
              type="textarea"
              name="descripcion"
              onChange={handleChange}
              value={formData.descripcion ? formData.descripcion : ""}
            ></textarea>
          </div>
          {/* <div className="flex flex-col pt-1 mx-auto">
            <label
              htmlFor="title"
              className="block text-bold font-medium text-white"
            >
              Categoría
            </label>
            <input
              className="bg-transparent border-2 pl-1 border-slate-300/90 focus:border-slate-200 rounded-lg outline-none"
              type="text"
              name="categoria"
              onChange={handleChange}
              value={formData.categoria ? formData.categoria : ""}
            ></input>
          </div>
          <div className="flex flex-col pt-1 mx-auto">
            <label
              htmlFor="title"
              className="block text-bold font-medium text-white"
            >
              Subcategoría
            </label>
            <input
              className="bg-transparent border-2 pl-1 border-slate-300/90 focus:border-slate-200 rounded-lg outline-none"
              type="text"
              name="subcategoria"
              onChange={handleChange}
              value={formData.subcategoria ? formData.subcategoria : ""}
            ></input>
          </div> */}
          <ListCategorySubCategory
            dataList={dataList}
            handleChange={handleCategoryChange}
          />

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
              name="caracteristicas"
              onChange={handleChange}
              value={formData.caracteristicas ? formData.caracteristicas : ""}
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
              value={formData.stock ? formData.stock : ""}
            ></input>
          </div>
          <div className="flex flex-col pt-1 mx-auto">
            <label
              htmlFor="title"
              className="block text-bold font-medium text-white"
            >
              Precio
            </label>
            <input
              className="bg-transparent border-2 pl-1 border-slate-300/90 focus:border-slate-200 rounded-lg outline-none"
              type="text"
              name="precio"
              onChange={handleChange}
              value={formData.precio ? formData.precio : ""}
            ></input>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-chineseBlack my-5 py-2 rounded-xl w-full"
              onClick={handleSubmit}
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
