import { useState, useEffect } from "react";
import { ADD_PRODUCTO } from "@/services/apollo/mutations/carga_producto";
import { useMutation, useQuery } from "@apollo/client";
import ListCategorySubCategory from "./ListCategorySubCategory";
import { storage } from "@/services/firebase/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { uploadBytesResumable, getUploadTaskSnapshot } from "firebase/storage";
import CargarImagenes from "./CargarImagenes";
import { GET_MAX_PRODUCTO_ID } from "@/services/apollo/queries/producto";
import { ADD_IMAGES_PRODUCT } from "@/services/apollo/mutations/carga_producto";
import Modal from "./Modal";
import ErrorMessageForm from "./ErrorMessageForm";

const CargarProducto = ({ producto }) => {
  const [open, setOpen] = useState(false);
  const [errorMessageForm, setErrorMessageForm] = useState("");

  const [imagesFile, setImagesFile] = useState({
    picture_1: producto?.imagenes[0]?.path,
    picture_2: producto?.imagenes[1]?.path,
    picture_3: producto?.imagenes[2]?.path,
    picture_4: producto?.imagenes[3]?.path,
  });

  const {
    data: dataMaxId,
    error: errorMaxId,
    loading: loadingMaxId,
  } = useQuery(GET_MAX_PRODUCTO_ID);

  const [createProducto, { data, loading, error }] = useMutation(ADD_PRODUCTO);
  const [
    createImagenProducto,
    {
      data: dataImagenProducto,
      loading: loadingImagenProducto,
      error: errorLoadingImagenProducto,
    },
  ] = useMutation(ADD_IMAGES_PRODUCT);

  const [categoryId, setCategoryId] = useState(
    parseInt(producto?.categoria?.padre?.id)
  );
  const [subcategoryId, setSubcategoryId] = useState(
    parseInt(producto?.categoria?.id)
  );

  const [submitImages, setSubmitImages] = useState(false);

  const [formData, setFormData] = useState({
    titulo: producto?.titulo,
    descripcion: producto?.descripcion,
    categoriaId: categoryId,
    subcategoriaId: subcategoryId,
    caracteristicas: producto?.caracteristicas,
    stock: producto?.stock,
    precio: producto?.precio,
  });

  const handleFormComplete = (e) => {
    e.preventDefault();
    if (!formData.titulo || !formData.descripcion || !formData.stock || !formData.precio || !formData.caracteristicas) {
      setErrorMessageForm("Por favor llene todos los campos antes de continuar") 
      return false;
    }
    else if (!imagesFile.picture_1 && !imagesFile.picture_2 && !imagesFile.picture_3 && !imagesFile.picture_4) {
      setErrorMessageForm("Por favor cargue al menos una imagen del producto") 
      return false;
    }
    return true;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(imagesFile)
    const correct = handleFormComplete(e);
    if (correct) {
      await handleAddProducto(formData);
      await handleImagesSubmit(e);
      setOpen(true);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setErrorMessageForm("")
    }, 8000)
  }, [handleSubmit])

  const handleUploadDbImages = async (imageUrl, dataImages, formData) => {
    const { producto_id } = formData;
    const { maxProductoId } = dataImages;

    try {
      await createImagenProducto(
        {
          variables: {
            input: {
              path: imageUrl,
              producto_id: producto_id || maxProductoId,
            },
          },
        },
        console.log("success", producto_id, maxProductoId)
      );
    } catch (error) {
      console.error("Error in handleUploadDbImages:", error);
    }
  };

  const handleImagesSubmit = async (e) => {
    e.preventDefault();

    // if (
    //   !imagesFile["picture_1"] &&
    //   !imagesFile["picture_2"] &&
    //   !imagesFile["picture_3"] &&
    //   !imagesFile["picture_4"]
    // ) {
    //   console.error(`not an image, please upload one`);
    //   return;
    // }

    for (let i = 1; i <= 4; i++) {
      if (imagesFile[`picture_${i}`]) {
        const { id: producto_id, titulo: producto_titulo } = formData;
        const tituloFixed = producto_titulo.split(" ").join("_");
        const idProducto = producto_id
          ? producto_id
          : dataImages.maxProductoId + 1;
        const storageRef = ref(
          storage,
          `/images/products/${idProducto}:${tituloFixed}:image_${i}`
        );
        const uploadTask = uploadBytesResumable(
          storageRef,
          imagesFile[`picture_${i}`]
        );

        try {
          const snapshot = await uploadTask;
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`Upload ${i} is ${progress}% done`);
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          console.log(`File ${i} available at`, downloadURL);
          await handleUploadDbImages(downloadURL, dataImages, formData);
        } catch (error) {
          console.log(`Error uploading ${i}:`, error);
        }
      }
    }
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

  // console.log(formData);

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

  const dataImages = {
    maxProductoId: dataMaxId?.maxProductoId?.maxId,
    picture_1: producto?.imagenes[0]?.path,
    picture_2: producto?.imagenes[1]?.path,
    picture_3: producto?.imagenes[2]?.path,
    picture_4: producto?.imagenes[3]?.path,
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
    // console.log(formData);
  };

  if (loadingMaxId) return "Loading...";
  if (errorMaxId) return `No data! ${error.message}`;

  if (loading || loadingImagenProducto) return <p>Submitting...</p>;
  if (error || errorLoadingImagenProducto)
    return (
      <p>
        Error: {error?.message}, {errorLoadingImagenProducto?.message}
      </p>
    );
  if (data && dataImagenProducto) console.log("Producto added successfully!");

  return (
    <>
      <div className="bg-gradient min-h-screen py-12 flex justify-center flex-col md:flex-row">
        <h1 className="text-3xl md:text-4xl font-black mb-4 mx-4 uppercase text-center ml-20 md:ml-24 md:pt-12">
          Cargar
          <br /> productos
        </h1>

        <form
          className="w-full px-20 md:w-1/3 md:px-0 ml-8 md:ml-12"
          method="POST"
          encType="multipart/form-data"
          // onSubmit={handleSubmit}
        >
          <div className="md:mr-2">
            <CargarImagenes
              dataImages={dataImages}
              submitImages={submitImages}
              formData={formData}
              imagesFile={imagesFile}
              setImagesFile={setImagesFile}
            />
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
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        producto_id={formData.producto_id || dataImages.maxProductoId}
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
      </Modal>
    </>
  );
};

export default CargarProducto;
