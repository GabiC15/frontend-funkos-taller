import { useEffect, useState } from "react";
import { IoAdd } from "react-icons/io5";
import { storage } from "@/services/firebase/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { uploadBytesResumable, getUploadTaskSnapshot } from "firebase/storage";
import Modal from "./Modal";
import { projectStorage } from "@/services/firebase/firebase";
import Dialog from "./Modal";
// import { v4 as uuidv4 } from "uuid";

const CargarImagenes = ({ dataImages, submitImages, formData }) => {
  const [open, setOpen] = useState(false)
  const [image1AsUrl, setImage1AsUrl] = useState("");
  const [image2AsUrl, setImage2AsUrl] = useState("");
  const [image3AsUrl, setImage3AsUrl] = useState("");
  const [image4AsUrl, setImage4AsUrl] = useState("");
  const [image1AsFile, setImage1AsFile] = useState("");
  const [image2AsFile, setImage2AsFile] = useState("");
  const [image3AsFile, setImage3AsFile] = useState("");
  const [image4AsFile, setImage4AsFile] = useState("");
  const [imagesFile, setImagesFile] = useState({
    picture_1: dataImages.picture_1,
    picture_2: dataImages.picture_2,
    picture_3: dataImages.picture_3,
    picture_4: dataImages.picture_4,
  });
  const [imagesUrl, setImagesUrl] = useState({
    picture_1: dataImages.picture_1,
    picture_2: dataImages.picture_2,
    picture_3: dataImages.picture_3,
    picture_4: dataImages.picture_4,
  });

  const [imagesBox, setImagesBox] = useState({
    picture_1: dataImages.picture_1,
    picture_2: dataImages.picture_2,
    picture_3: dataImages.picture_3,
    picture_4: dataImages.picture_4,
  });

  // const handleImageBox = (e) => {
  //   const file = e.target.files[0];
  //   const reader = new FileReader();
  //   reader.onloadend = () => {
  //     setImagesBox({
  //       ...imagesBox,
  //       [e.target.name]: reader.result,
  //     });
  //     console.log(imagesBox.picture_1);
  //   };
  //   reader.readAsDataURL(file);
  // };

  const handleImages = (e) => {
    e.preventDefault();
    if (e.target.files[0].type !== "image/png") {
      console.log("File is not an image");
      setImagesBox({
        ...imagesBox,
        [e.target.name]: null,
      });
      return;
    }
    handleImageBox(e);
    handleImagesFile(e);
  };

  const handleImageBox = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    const result = reader.readAsDataURL(file);
    reader.onloadend = () =>
      setImagesBox({ ...imagesBox, [e.target.name]: reader.result });
    setImagesFile({
      ...imagesFile,
      [e.target.name]: e.target.files[0],
    });
  };

  const handleImagesFile = (e) => {
    setImagesFile({
      ...imagesFile,
      [e.target.name]: e.target.files[0],
    });
  };

  // const handleSubmitImages = () => {
  //   console.log("Uploading... imagesBox...");
  //   const image1Ref = ref(storage, `imagesBox/products/${imagesBox.picture_1}`);
  //   // const image2Ref = ref(storage, `imagesBox/products/${imagesBox.picture_2.name}`);
  //   // const image3Ref = ref(storage, `imagesBox/products/${imagesBox.picture_3.name}`);
  //   // const image4Ref = ref(storage, `imagesBox/products/${imagesBox.picture_4.name}`);
  //   uploadBytes(image1Ref, imagesBox.picture_1).then((snapshot) => {
  //     alert("Image 1 uploaded");
  //   });
  // };

  // submitImages && handleSubmitImages();

  const handleImagesRemove = (e) => {
    e.preventDefault();
    setImagesBox({
      ...imagesBox,
      ["picture_1"]: null,
      ["picture_2"]: null,
      ["picture_3"]: null,
      ["picture_4"]: null,
    });
    setImage1AsFile(null);
    setImage2AsFile(null);
    setImage3AsFile(null);
    setImage4AsFile(null);
  };

  const handleFireBaseUpload = (e) => {
    e.preventDefault();
    console.log("start of upload");
    if (
      !imagesFile["picture_1"] &&
      !imagesFile["picture_2"] &&
      !imagesFile["picture_3"] &&
      !imagesFile["picture_4"]
    ) {
      console.error(`not an image, please upload one`);
      return;
    }

    for (let i = 1; i <= 4; i++) {
      if (imagesFile[`picture_${i}`]) {
        const { id: producto_id, titulo: producto_titulo } = formData;
        const tituloFixed = producto_titulo.split(" ").join("_");
        const storageRef = ref(storage, `/images/products/${producto_id}:${tituloFixed}:image_${i}`);
        const uploadTask = uploadBytesResumable(
          storageRef,
          imagesFile[`picture_${i}`]
          );
          
          uploadTask.on(
            "state_changed",
            (snapshot) => {
              const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              console.log(`Upload ${i} is ${progress}% done`);
            },
            (error) => {
              console.log(`Error uploading ${i}:`, error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log(`File ${i} available at`, downloadURL);
            // Handle the download URL as needed
            setImagesUrl({
              ...imagesUrl,
              [`picture_${i}`]: downloadURL,
            });
            setOpen(true);
            // if (result) {
              //   // User clicked "OK" or "Add new product"
              //   // Add your logic here for "Add new product"
              // } else {
                //   // User clicked "Cancel" or "View product"
                //   // Add your logic here for "View product"
                // }
              });
            }
            );
          }
        };
      }
      
      return (
        <>
      <div className="flex-col w-full ml-5">
        <div className="flex justify-end">
          <button className="pt-2" onClick={handleImagesRemove}>
            <IoAdd className="w-6 h-6 text-slate-200 rotate-45 hover:text-slate-300" />
          </button>
        </div>
        {/* <button onClick={(e) => {e.preventDefault(); setOpen(true)}}>Open dialog</button> */}
      </div>
      <div className="text-center md:flex justify-center pt-2 grid grid-cols-2">
        <div className="md:flex">
          <div className="">
            <input
              type="file"
              className="hidden"
              id="imageInput_1"
              name="picture_1"
              onChange={handleImages}
              accept="image/png"
              multiple
            />
            <label
              htmlFor="imageInput_1"
              className={`group ${
                imagesBox["picture_1"] ? "hidden" : null
              } w-20 md:w-24 h-20 md:h-24 rounded-3xl hover:cursor-pointer bg-white/40 flex items-center justify-center mx-1 hover:bg-white/30`}
            >
              <IoAdd className="w-8 h-8 md:w-10 md:h-10 text-slate-200/90 group-hover:text-slate-300/90" />
            </label>

            {imagesBox["picture_1"] && (
              <img
                className={`group ${
                  !imagesBox["picture_1"] ? "hidden" : null
                } w-20 md:w-24 h-20 md:h-24 rounded-3xl hover:cursor-pointer bg-white/10 hover:opacity-90 flex items-center justify-center mx-1`}
                src={imagesBox["picture_1"]}
                alt="Preview picture of Funko"
                onClick={() => document.getElementById("imageInput_1").click()}
              />
            )}
          </div>
          <div className="pt-2 md:pt-0">
            <input
              type="file"
              className="hidden"
              id="imageInput_2"
              name="picture_2"
              onChange={handleImages}
              accept="image/png"
              multiple
            />
            <label
              htmlFor="imageInput_2"
              className={`group ${
                imagesBox["picture_2"] ? "hidden" : null
              } w-20 md:w-24 h-20 md:h-24 rounded-3xl hover:cursor-pointer bg-white/40 flex items-center justify-center mx-1 hover:bg-white/30`}
            >
              <IoAdd className="w-8 h-8 md:w-10 md:h-10 text-slate-200/90 group-hover:text-slate-300/90" />
            </label>

            {imagesBox["picture_2"] && (
              <img
                className={`group ${
                  !imagesBox["picture_2"] ? "hidden" : null
                } w-20 md:w-24 h-20 md:h-24 rounded-3xl hover:cursor-pointer bg-white/10 hover:opacity-90 flex items-center justify-center mx-1`}
                src={imagesBox["picture_2"]}
                alt="Preview picture of Funko"
                onClick={() => document.getElementById("imageInput_2").click()}
              />
            )}
          </div>
        </div>
        <div className="md:flex">
          <div className="mx-1 md:mx-0">
            <input
              type="file"
              className="hidden"
              id="imageInput_3"
              name="picture_3"
              onChange={handleImages}
              accept="image/png"
              multiple
            />
            <label
              htmlFor="imageInput_3"
              className={`group ${
                imagesBox["picture_3"] ? "hidden" : null
              } w-20 md:w-24 h-20 md:h-24 rounded-3xl hover:cursor-pointer bg-white/40 flex items-center justify-center mx-1 hover:bg-white/30`}
            >
              <IoAdd className="w-8 h-8 md:w-10 md:h-10 text-slate-200/90 group-hover:text-slate-300/90" />
            </label>

            {imagesBox["picture_3"] && (
              <img
                className={`group ${
                  !imagesBox["picture_3"] ? "hidden" : null
                } w-20 md:w-24 h-20 md:h-24 rounded-3xl hover:cursor-pointer bg-white/10 hover:opacity-90 flex items-center justify-center mx-1`}
                src={imagesBox["picture_3"]}
                alt="Preview picture of Funko"
                onClick={() => document.getElementById("imageInput_3").click()}
              />
            )}
          </div>
          <div className="pt-2 mx-1 md:mx-0 md:pt-0">
            <input
              type="file"
              className="hidden"
              id="imageInput_4"
              name="picture_4"
              onChange={handleImages}
              accept="image/png"
              multiple
            />
            <label
              htmlFor="imageInput_4"
              className={`group ${
                imagesBox["picture_4"] ? "hidden" : null
              } w-20 md:w-24 h-20 md:h-24 rounded-3xl hover:cursor-pointer bg-white/40 flex items-center justify-center mx-1 hover:bg-white/30`}
            >
              <IoAdd className="w-8 h-8 md:w-10 md:h-10 text-slate-200/90 group-hover:text-slate-300/90" />
            </label>

            {imagesBox["picture_4"] && (
              <img
                className={`group ${
                  !imagesBox["picture_4"] ? "hidden" : null
                } w-20 md:w-24 h-20 md:h-24 rounded-3xl hover:cursor-pointer bg-white/10 hover:opacity-90 flex items-center justify-center mx-1`}
                src={imagesBox["picture_4"]}
                alt="Preview picture of Funko"
                onClick={() => document.getElementById("imageInput_4").click()}
              />
            )}
          </div>
        </div>
      </div>
      <button
        className="bg-black/20 mt-2 p-4 flex flex-row rounded-[8px] justify-center mx-4 border-[1px] border-[#282828]"
        // onClick={handleSubmitImages}
        onClick={handleFireBaseUpload}
      >
        {" "}
        Upload Images
      </button>
        <Modal open={open} onClose={() => setOpen(false)}>
          <div className="text-center md:w-72 md:mx-12 py-2 mx-4 w-72">

            {/* <CheckCircle size={56} className="mx-auto text-green-500" /> */}
            <div className="mx-auto my-4 w-72 ">
              <h3 className="text-lg font-black text-gray-800">¡Producto cargado con exito!</h3>
              <p className="text-sm text-gray-500 pt-5">¿Desea seguir agregando productos o ver el producto cargado?</p>
            </div>
          </div>
        </Modal>
    </>
  );
};

export default CargarImagenes;
