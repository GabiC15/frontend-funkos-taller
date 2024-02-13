import { useState, useEffect } from 'react';
import Modal from '../../productos/Modal'
import ErrorMessageForm from '../../productos/ErrorMessageForm'

const CargarCupon = () => {

  //* nombre: String!
  //* porcentaje: Int!
  //* validoDesde: String!
  //* validoHasta: String!

  const [formData, setFormData] = useState({
    nombre:"",
    porcentaje: "",
    validoDesde: "",
    validoHasta: "",
  });

  const [open, setOpen] = useState(false);
  const [errorMessageForm, setErrorMessageForm] = useState("");
  const [progress, setProgress] = useState(1);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    console.log("formData", formData);
  }, [formData]);

  return (
    <>
      <div className="bg-gradient min-h-screen py-12 flex justify-center flex-col md:flex-row">
        <h1 className="text-3xl md:text-4xl font-black mb-4 mx-4 uppercase text-center ml-20 md:ml-24 md:pt-12">
          Cargar
          <br /> cupón
        </h1>

        <form
          className="w-full px-20 md:w-1/3 md:px-0 ml-8 md:ml-12"
          method="POST"
          encType="multipart/form-data"
          // onSubmit={handleSubmit}
        >
          {/* <div className="md:mr-2">
            <CargarImagenes
              dataImages={dataImages}
              submitImages={submitImages}
              formData={formData}
              imagesFile={imagesFile}
              setImagesFile={setImagesFile}
            />
          </div> */}
          <div className="flex flex-col pt-4 mx-auto">
            <label
              htmlFor="title"
              className="block text-bold font-medium text-white"
            >
              Nombre
            </label>{" "}
            <input
              className="bg-transparent border-2 pl-1 border-slate-300/90 focus:border-slate-200 rounded-lg outline-none"
              type="text"
              name="nombre"
              onChange={handleChange}
              value={formData.nombre ? formData.nombre : ""}
            ></input>
          </div>
          <div className="flex flex-col pt-1 mx-auto">
            <label
              htmlFor="title"
              className="block text-bold font-medium text-white"
            >
              Porcentaje
            </label>
            {/* <textarea
              className="bg-transparent border-2 pl-1 h-40 border-slate-300/90 py-2.5 focus:border-slate-200 rounded-lg outline-none"
              type="textarea"
              name="porcentaje"
              onChange={handleChange}
              value={formData.porcentaje ? formData.porcentaje : ""}
            ></textarea> */}
            <input
              className="bg-transparent border-2 pl-1 border-slate-300/90 focus:border-slate-200 rounded-lg outline-none"
              type="text"
              name="porcentaje"
              onChange={handleChange}
              value={formData.porcentaje ? formData.porcentaje : ""}
            ></input>
          </div>
          {/* <div>
            <ListCategorySubCategory
              dataList={dataList}
              handleChange={handleCategoryChange}
            />
          </div> */}
          <div className="flex flex-col pt-1 mx-auto">
            <label
              htmlFor="title"
              className="block text-bold font-medium text-white"
            >
              Válido Desde
            </label>
            <input
              className="bg-transparent border-2 pl-1 border-slate-300/90 focus:border-slate-200 rounded-lg outline-none"
              type="date"
              name="validoDesde"
              onChange={handleChange}
              value={formData.validoDesde ? formData.validoDesde : ""}
            ></input>
          </div>
          <div className="flex flex-col pt-1 mx-auto">
            <label
              htmlFor="title"
              className="block text-bold font-medium text-white"
            >
              Válido Hasta
            </label>
            <input
              className="bg-transparent border-2 pl-1 border-slate-300/90 focus:border-slate-200 rounded-lg outline-none"
              type="date"
              name="validoHasta"
              onChange={handleChange}
              value={formData.validoHasta ? formData.validoHasta : ""}
            ></input>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-chineseBlack mt-5 mb-3 py-2 rounded-xl w-full"
              onClick={handleSubmit}
            >
              Publicar
            </button>{" "}
            <div className="h-8">
              {errorMessageForm !== "" && <ErrorMessageForm
                message={errorMessageForm}
              />}
            </div>
          </div>
        </form>
      </div>
      {open && <Modal
        open={open}
        onClose={() => setOpen(false)}
        producto_id={formData.producto_id || dataImages.maxProductoId}
        progress={progress}
        word="cupón"
      >
        <div className="text-center md:w-72 md:mx-12 py-2 mx-4 w-72">
          {/* <CheckCircle size={56} className="mx-auto text-green-500" /> */}
          <div className="mx-auto my-4 w-72 ">
            <h3 className="text-lg font-black text-gray-800">
              ¡Producto cargado con exito!
            </h3>
            <p className="text-sm text-gray-500 pt-5">
              ¿Desea seguir agregando productos o ver el producto cargado?
            </p>
          </div>
        </div>
      </Modal>}
    </>
)}

export default CargarCupon