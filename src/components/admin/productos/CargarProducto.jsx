import { useState, useEffect } from "react";
import { ADD_PRODUCTO } from "@/services/apollo/mutations/carga_producto";
import { useMutation } from "@apollo/client";
import ListCategorySubCategory from "./ListCategorySubCategory";
import CargarImagenes from "./CargarImagenes";

const CargarProducto = ({ producto }) => {
  const [createProducto, { data, loading, error }] = useMutation(ADD_PRODUCTO);

  const [categoryId, setCategoryId] = useState(
    parseInt(producto?.categoria?.padre?.id)
  );
  const [subcategoryId, setSubcategoryId] = useState(
    parseInt(producto?.categoria?.id)
  );

  const [submitImages, setSubmitImages] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitImages(true);
    handleAddProducto(formData);
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

  const [formData, setFormData] = useState({
    titulo: producto?.titulo,
    descripcion: producto?.descripcion,
    categoriaId: categoryId,
    subcategoriaId: subcategoryId,
    caracteristicas: producto?.caracteristicas,
    stock: producto?.stock,
    precio: producto?.precio,
  });

  const imagesData = {
    picture_1: producto?.imagenes[0]?.path,
    picture_2: producto?.imagenes[1]?.path,
    picture_3: producto?.imagenes[2]?.path,
    picture_4: producto?.imagenes[3]?.path,
  };

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
          <div className="md:mr-2">
            <CargarImagenes imagesData={imagesData} submitImages={submitImages} />
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
              className="bg-transparent border-2 pl-1 h-40 border-slate-300/90 py-2.5 focus:border-slate-200 rounded-lg outline-none"
              type="textarea"
              name="descripcion"
              onChange={handleChange}
              value={formData.descripcion ? formData.descripcion : ""}
            ></textarea>
          </div>
          <div>
            <ListCategorySubCategory
              dataList={dataList}
              handleChange={handleCategoryChange}
            />
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
