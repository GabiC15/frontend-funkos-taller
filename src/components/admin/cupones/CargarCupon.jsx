import { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import {
  ADD_CUPON,
  UPDATE_CUPON,
} from "@/services/apollo/mutations/carga_cupon";
import { GET_CUPONES } from "@/services/apollo/queries/cupon";
import Modal from "../../productos/ProgressModal";
import ErrorMessageForm from "../../productos/ErrorMessageForm";

const CargarCupon = ({ cupon }) => {
  const [formData, setFormData] = useState({
    nombre: cupon?.nombre,
    porcentaje: cupon?.porcentaje,
    validoDesde: cupon?.validoDesde,
    validoHasta: cupon?.validoHasta,
  });

  const handleClearForm = () => {
    setFormData({
      nombre: "",
      porcentaje: "",
      validoDesde: "",
      validoHasta: "",
    });
    setErrorMessageForm("");
  };

  console.log("cupon", cupon);

  const [createCupon, { data, loading, error }] = useMutation(ADD_CUPON, {
    onCompleted: (data) => {
      console.log("dataCupon", data);
      setIdCupon(data.createCupon.id);
    },
    onError: (error) => {
      setErrorMessageForm(`Error: ${error.message}`)
      setOpen(false);
    },
    refetchQueries: [{ query: GET_CUPONES }],
  });

  const [
    updateCupon,
    { data: dataUpdate, loading: loadingUpdate, error: errorUpdate },
  ] = useMutation(UPDATE_CUPON, { refetchQueries: [{ query: GET_CUPONES }] });

  if (errorUpdate) {
    console.log(errorUpdate);
  }

  const [open, setOpen] = useState(false);
  const [errorMessageForm, setErrorMessageForm] = useState("");
  const [progress, setProgress] = useState(1);
  const [idCupon, setIdCupon] = useState(cupon?.id || 0);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormComplete = (e) => {
    e.preventDefault();
    if (
      !formData.nombre ||
      !formData.porcentaje ||
      !formData.validoDesde ||
      !formData.validoHasta
    ) {
      setErrorMessageForm(
        "Por favor complete todos los campos antes de continuar"
      );
      return false;
    }
    return true;
  };

  const handleCreateCupon = async (formData) => {
    try {
      await createCupon({
        variables: {
          input: {
            nombre: formData.nombre,
            porcentaje: parseInt(formData.porcentaje),
            validoDesde: formData.validoDesde,
            validoHasta: formData.validoHasta,
          },
        },
      });
      setProgress(45);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdateCupon = async (formData) => {
    try {
      await updateCupon({
        variables: {
          id: cupon?.id,
          input: {
            nombre: formData.nombre,
            porcentaje: parseInt(formData.porcentaje),
            validoDesde: formData.validoDesde,
            validoHasta: formData.validoHasta,
          },
        },
      });
      setProgress(45);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const correct = handleFormComplete(e);
    if (correct) {
      try {
        setProgress(32);
        setOpen(true);
        cupon?.id
          ? await handleUpdateCupon(formData)
          : await handleCreateCupon(formData);
        setProgress(100);
      } catch (error) {
        console.log(error);
        setProgress(0);
      }
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setErrorMessageForm("");
    }, 8000);
  }, [handleSubmit, error]);

  useEffect(() => {
    console.log("formData", formData);
  }, [formData]);

  if (error) {
    console.log(error);
  }

  if (data) {
    console.log("Cupon added successfully!", data);
  }

  return (
    <>
      <div className="bg-gradient min-h-screen py-12 flex justify-center flex-col md:flex-row">
        <h1 className="text-3xl md:text-4xl font-black mb-4 mx-4 uppercase text-center ml-20 md:ml-24 md:pt-12">
          {cupon?.id ? "Editar" : "Cargar"}
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
              type="number"
              min={1}
              max={100}
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
              max={formData.validoHasta}
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
              min={formData.validoDesde}
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
              {cupon?.id ? "Actualizar" : "Publicar"}
            </button>{" "}
            <div className="h-8">
              {(errorMessageForm !== "" || error) && (
                <ErrorMessageForm message={errorMessageForm} />
              )}
            </div>
          </div>
        </form>
      </div>
      {open && (
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          id={idCupon}
          progress={progress}
          word="cupón"
          routeNew="/admin/carga_cupon/nuevo"
          routeView="/admin/cupones/"
          handleClearForm={handleClearForm}
        >
          <div className="text-center md:w-72 md:mx-12 py-2 mx-4 w-72">
            {/* <CheckCircle size={56} className="mx-auto text-green-500" /> */}
            <div className="mx-auto my-4 w-72 ">
              <h3 className="text-lg font-black text-gray-800">
                ¡Cupón {cupon?.id ? "actualizado" : "cargado"} con exito!
              </h3>
              <p className="text-sm text-gray-500 pt-5">
                ¿Desea seguir agregando cupones o ver el cupón cargado?
              </p>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default CargarCupon;
