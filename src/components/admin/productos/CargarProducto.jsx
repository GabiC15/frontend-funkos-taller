import { useState, useEffect } from "react";
import {
  ADD_PRODUCTO,
  UPDATE_PRODUCTO,
} from "@/services/apollo/mutations/carga_producto";
import { useMutation } from "@apollo/client";
import ListCategorySubCategory from "./ListCategorySubCategory";
import ListCaracteristicas from "./ListCaracteristicas";
import { storage } from "@/services/firebase/firebase";
import {
  ref,
  getDownloadURL,
  getStorage,
  deleteObject,
} from "firebase/storage";
import { uploadBytesResumable } from "firebase/storage";
import CargarImagenes from "./CargarImagenes";
import {
  ADD_IMAGES_PRODUCTO,
  UPDATE_IMAGES_PRODUCTO_BY_PATH,
} from "@/services/apollo/mutations/carga_producto";
import Modal from "./ProgressModal";
import ErrorMessageForm from "./ErrorMessageForm";
import { v4 as uuidv4 } from "uuid";

const CargarProducto = ({ producto }) => {
  const [open, setOpen] = useState(false);
  const [errorMessageForm, setErrorMessageForm] = useState("");
  const [progress, setProgress] = useState(1);
  const [productoId, setProductoId] = useState(producto?.id);
  const [clearTrue, setClearTrue] = useState(false);
  const [updateImages, setUpdateImages] = useState({
    picture_1: false,
    picture_2: false,
    picture_3: false,
    picture_4: false,
  });
  const [imagesBackup, setImagesBackup] = useState({});

  const handleUpdateImages = (e) => {
    setUpdateImages({
      ...updateImages,
      [e.target.name]: true,
    });
  };

  const [
    createProducto,
    { data: dataProducto, loading: loadingProducto, error: errorProducto },
  ] = useMutation(ADD_PRODUCTO, {
    onCompleted: (data) => {
      handleFinishSubmit(data);
    },
  });
  const [
    updateProducto,
    {
      data: dataProductoActualizar,
      loading: loadingProductoActualizar,
      error: errorProductoActualizar,
    },
  ] = useMutation(UPDATE_PRODUCTO, {
    onCompleted: (data) => {
      handleFinishSubmit(data);
    },
  });

  const [
    createImagenProducto,
    {
      data: dataImagenProducto,
      loading: loadingImagenProducto,
      error: errorLoadingImagenProducto,
    },
  ] = useMutation(ADD_IMAGES_PRODUCTO);

  const [
    updateImagenProductoByPath,
    {
      data: dataImagenUpdateByPath,
      loading: loadingImagenUpdateByPath,
      error: errorLoadingImagenUpdateByPath,
    },
  ] = useMutation(UPDATE_IMAGES_PRODUCTO_BY_PATH);

  const [categoryId, setCategoryId] = useState(
    parseInt(producto?.categoria?.padre?.id)
  );
  const [subcategoryId, setSubcategoryId] = useState(
    parseInt(producto?.categoria?.id)
  );
  // console.log("producto", producto);

  const [caracteristicaId, setCaracteristicaId] = useState(
    parseInt(producto?.caracteristica?.id)
  );

  useEffect(() => {
    setCategoryId(parseInt(producto?.categoria?.padre?.id));
    setSubcategoryId(parseInt(producto?.categoria?.id));
    setCaracteristicaId(parseInt(producto?.caracteristica?.id));
  }, [producto]);

  const [formData, setFormData] = useState({
    id: producto?.id,
    titulo: producto?.titulo,
    descripcion: producto?.descripcion,
    categoriaId: categoryId,
    subcategoriaId: subcategoryId,
    caracteristicaId: caracteristicaId,
    stock: producto?.stock,
    precio: producto?.precio,
  });

  const [imagesFile, setImagesFile] = useState({});

  useEffect(() => {
    setImagesFile({
      picture_1: producto?.imagenes[0]?.path,
      picture_2: producto?.imagenes[1]?.path,
      picture_3: producto?.imagenes[2]?.path,
      picture_4: producto?.imagenes[3]?.path,
    });
    setImagesBackup({
      picture_1: producto?.imagenes[0]?.path,
      picture_2: producto?.imagenes[1]?.path,
      picture_3: producto?.imagenes[2]?.path,
      picture_4: producto?.imagenes[3]?.path,
    });
  }, [producto]);

  const [dataListCategorySubcategory, setDataListCategorySubcategory] =
    useState({});
  const [dataListCaracteristicas, setDataListCaracteristicas] = useState({});

  useEffect(() => {
    setDataListCategorySubcategory({
      categoriaId: categoryId,
      categoriaName: producto?.categoria?.padre?.nombre,
      subcategoriaId: subcategoryId,
      subcategoriaName: producto?.categoria?.nombre,
    });
  }, []);

  useEffect(() => {
    setDataListCaracteristicas({
      caracteristicaId: caracteristicaId,
      caracteristicaName: producto?.caracteristica?.nombre,
    });
  }, []);

  const handleClearForm = () => {
    setClearTrue(true);
    setFormData({
      id: "",
      titulo: "",
      descripcion: "",
      categoriaId: "",
      subcategoriaId: "",
      caracteristicas: "",
      stock: "",
      precio: "",
    });
    handleClearCategory();
    handleClearCaracteristicas();
    handleClearImages();
    setErrorMessageForm("");
  };

  const handleClearCategory = () => {
    setDataListCategorySubcategory({
      categoriaId: "",
      categoriaName: "",
      subcategoriaId: "",
      subcategoriaName: "",
    });
  };

  const handleClearImages = () => {
    setImagesFile({
      picture_1: "",
      picture_2: "",
      picture_3: "",
      picture_4: "",
    });
  };

  const handleFormComplete = (e) => {
    e.preventDefault();
    if (
      !formData.titulo ||
      !formData.descripcion ||
      !formData.stock ||
      !formData.precio ||
      !formData.categoriaId ||
      !formData.subcategoriaId
    ) {
      setErrorMessageForm(
        "Por favor complete todos los campos antes de continuar"
      );
      return false;
    } else if (
      !imagesFile.picture_1 &&
      !imagesFile.picture_2 &&
      !imagesFile.picture_3 &&
      !imagesFile.picture_4
    ) {
      setErrorMessageForm("Por favor cargue al menos una imagen del producto");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const correct = handleFormComplete(e);
    if (correct) {
      try {
        setProgress(32);
        setOpen(true);
        formData.id
          ? await handleUpdateProducto(formData)
          : await handleCreateProducto(formData);
        setProgress(100);
        console.log(
          "producto",
          dataProducto,
          dataProductoActualizar?.updateProducto
        );
      } catch (error) {
        console.log(error);
        setProgress(0);
      }
    }
  };

  const handleFinishSubmit = async (data) => {
    formData.id
      ? (setProductoId(formData.id), handleImagesUpdate(data))
      : (setProductoId(data.createProducto.id), handleImagesSubmit(data));
  };

  useEffect(() => {
    setTimeout(() => {
      setErrorMessageForm("");
    }, 8000);
  }, [handleSubmit]);

  const handleUploadDbImages = async (
    imageUrl,
    formData,
    dataProducto
  ) => {

    try {
      await createImagenProducto(
        {
          variables: {
            input: {
              path: imageUrl,
              producto_id: formData.id ? formData.id : await dataProducto.createProducto.id,
            },
          },
        }
      );
    } catch (error) {
      console.error("Error in handleUploadDbImages:", error);
    }
  };

  const handleUpdateDbImages = async (
    imageBackupUrl,
    imageUrl,
    formData,
  ) => {

    try {
      await updateImagenProductoByPath(
        {
          variables: {
            productoId: formData.id,
            path: imageBackupUrl.toString(),
            input: {
              path: imageUrl.toString(),
            },
          },
        }
      );
    } catch (error) {
      console.error("Error in handleUpdateDbImages:", error);
    }
  };

  const handleImagesSubmit = async (dataProducto) => {

    const { id: producto_id, titulo: producto_titulo } = formData;
    const idProducto = producto_id || (await dataProducto.createProducto.id);
    const tituloFixed = producto_titulo.split(" ").join("_");

    for (let i = 1; i <= 4; i++) {
      if (imagesFile[`picture_${i}`]) {
        const storageRef = ref(
          storage,
          `/images/products/${idProducto}:${tituloFixed}:image_${i}_${uuidv4()}`
        );
        const uploadTask = uploadBytesResumable(
          storageRef,
          imagesFile[`picture_${i}`]
        );

        try {
          const snapshot = await uploadTask;
          const progressFirebase =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`Upload ${i} is ${progressFirebase}% done`);
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          console.log(`File ${i} available at`, downloadURL);
          setProgress((prevProgress) => prevProgress + 7 * i);
          await handleUploadDbImages(
            downloadURL,
            formData,
            dataProducto
          );

          setProgress(100);
        } catch (error) {
          console.log(`Error uploading ${i}:`, error);
        }
      }
    }
  };

  const handleImagesUpdate = async (dataProducto) => {
    console.log("Submited succesfully");
    const storage = getStorage();
    const { id: producto_id, titulo: producto_titulo } = formData;
    const idProducto = producto_id;
    const tituloFixed = producto_titulo.split(" ").join("_");
    for (let i = 1; i <= 4; i++) {
      if (imagesFile[`picture_${i}`] && updateImages[`picture_${i}`]) {
        if (imagesBackup[`picture_${i}`] !== imagesFile[`picture_${i}`]) {

          const desertRef = ref(storage, `${imagesBackup[`picture_${i}`]}`);

          // Delete the file
          deleteObject(desertRef)
            .then(() => {
              console.log("File deleted successfully");
              // File deleted successfully
            })
            .catch((error) => {
              console.log("Error deleting file:", error);
              // Uh-oh, an error occurred!
            });
        }
        const storageRef = ref(
          storage,
          `/images/products/${idProducto}:${tituloFixed}:image_${i}_${uuidv4()}`
        );
        const uploadTask = uploadBytesResumable(
          storageRef,
          imagesFile[`picture_${i}`]
        );
        try {
          const snapshot = await uploadTask;
          const progressFirebase =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`Upload ${i} is ${progressFirebase}% done`);
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          const imagesBackupURL = imagesBackup[`picture_${i}`];
          console.log(`File ${i} available at`, downloadURL);
          setProgress((prevProgress) => prevProgress + 7 * i);
          if (imagesFile[`picture_${i}`] && !imagesBackupURL) {
            await handleUploadDbImages(
              downloadURL,
              formData,
              dataProducto
            );
          } else {
            await handleUpdateDbImages(
              imagesBackupURL,
              downloadURL,
              formData,
            );
          }
          setProgress(100);
        } catch (error) {
          console.log(`Error uploading ${i}:`, error);
        }
      }
    }
  };

  const handleCreateProducto = async (formData) => {
    try {
      await createProducto({
        variables: {
          input: {
            titulo: formData.titulo,
            descripcion: formData.descripcion,
            stock: parseInt(formData.stock),
            precio: parseFloat(formData.precio),
            categoriaId: formData.subcategoriaId,
            caracteristicaId: formData.caracteristicaId,
          },
        },
      });
      setProgress(45);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdateProducto = async (formData) => {
    await updateProducto({
      variables: {
        id: parseInt(formData.id),
        input: {
          titulo: formData.titulo,
          descripcion: formData.descripcion,
          stock: parseInt(formData.stock),
          precio: parseFloat(formData.precio),
          categoriaId: formData.subcategoriaId,
          caracteristicaId: formData.caracteristicaId,
        },
      },
    });
    setProgress(45);
  };

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

  useEffect(() => {
    setFormData({
      ...formData,
      ["caracteristicaId"]: parseInt(caracteristicaId),
    });
  }, [caracteristicaId]);

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
  };

  const handleCaracteristicaChange = (value) => {
    setCaracteristicaId(value);
  };

  if (errorProducto || errorProductoActualizar || errorLoadingImagenProducto)
    return (
      <p>
        Error: {errorProducto?.message}, {errorProductoActualizar?.message} ,
        {errorLoadingImagenProducto?.message}
      </p>
    );
  if (dataProducto && dataImagenProducto)
    console.log("Producto added successfully!", dataProducto);
  if (dataProductoActualizar && dataImagenUpdateByPath)
    console.log(
      "Product updated successfully!",
      dataProductoActualizar,
      dataImagenUpdateByPath
    );

  return (
    <>
      <div className="bg-gradient min-h-screen py-12 flex justify-center flex-col md:flex-row">
        <h1 className="text-3xl md:text-4xl font-black mb-4 mx-4 uppercase text-center ml-20 md:ml-24 md:pt-12">
          {formData.id ? "Actualizar" : "Cargar"}
          <br /> producto
        </h1>

        <form
          className="w-full px-20 md:w-1/3 md:px-0 ml-8 md:ml-12"
          method="POST"
          encType="multipart/form-data"
        >
          <div className="md:mr-2">
            <CargarImagenes
              dataImages={imagesFile}
              setImagesFile={setImagesFile}
              clearTrue={clearTrue}
              handleUpdateImages={handleUpdateImages}
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
              dataList={dataListCategorySubcategory}
              handleChange={handleCategoryChange}
              clearTrue={clearTrue}
            />
          </div>
          <div className="flex flex-col pt-1 mx-auto">
            <label
              htmlFor="title"
              className="block text-bold font-medium text-white"
            >
              Característica especial
            </label>
            <ListCaracteristicas
              dataList={dataListCaracteristicas}
              handleChange={handleCaracteristicaChange}
              clearTrue={clearTrue}
            />
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
              {producto?.id ? "Actualizar" : "Publicar"}
            </button>{" "}
            <div className="h-8">
              {errorMessageForm !== "" && (
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
          id={productoId}
          progress={progress}
          word="productos"
          routeNew="/admin/carga_producto/nuevo"
          routeView="/admin/productos/"
          handleClearForm={handleClearForm}
        >
          <div className="text-center md:w-72 md:mx-12 py-2 mx-4 w-72">
            <div className="mx-auto my-4 w-72 ">
              <h3 className="text-lg font-black text-gray-800">
                {producto?.id
                  ? "¡Producto actualizado con exito!"
                  : "¡Producto cargado con exito!"}
              </h3>
              <p className="text-sm text-gray-500 pt-5">
                ¿Desea seguir agregando productos o ver el producto cargado?
              </p>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default CargarProducto;
