import { useEffect, useState } from "react";
import { IoAdd } from "react-icons/io5";

const CargarImagenes = ({ imagesData, submitImages }) => {
  const [images, setImages] = useState({
    picture_1: imagesData.picture_1,
    picture_2: imagesData.picture_2,
    picture_3: imagesData.picture_3,
    picture_4: imagesData.picture_4,
  });

  const handleImageBox = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImages({
        ...images,
        [e.target.name]: reader.result,
      });
      console.log(imagesData);
    };
    reader.readAsDataURL(file);

    // setFormData({
    //   ...images,
    //   [e.target.name]: "file submitted",
    // });
  };

  const handleSubmitImages = () => {
    console.log("Uploading... images...");
  };

  submitImages && handleSubmitImages();

  const handleImagesRemove = (e) => {
    e.preventDefault();
    setImages({
      ...images,
      ["picture_1"]: "",
      ["picture_2"]: "",
      ["picture_3"]: "",
      ["picture_4"]: "",
    });
  };

  return (
    <>
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
              onChange={handleImageBox}
              multiple
            />
            <label
              htmlFor="imageInput_1"
              className={`group ${
                images["picture_1"] ? "hidden" : null
              } w-20 md:w-24 h-20 md:h-24 rounded-3xl hover:cursor-pointer bg-white/40 flex items-center justify-center mx-1 hover:bg-white/30`}
            >
              <IoAdd className="w-8 h-8 md:w-10 md:h-10 text-slate-200/90 group-hover:text-slate-300/90" />
            </label>

            {images["picture_1"] && (
              <img
                className={`group ${
                  !images["picture_1"] ? "hidden" : null
                } w-20 md:w-24 h-20 md:h-24 rounded-3xl hover:cursor-pointer bg-white/10 hover:opacity-90 flex items-center justify-center mx-1`}
                src={images["picture_1"]}
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
              onChange={handleImageBox}
              multiple
            />
            <label
              htmlFor="imageInput_2"
              className={`group ${
                images["picture_2"] ? "hidden" : null
              } w-20 md:w-24 h-20 md:h-24 rounded-3xl hover:cursor-pointer bg-white/40 flex items-center justify-center mx-1 hover:bg-white/30`}
            >
              <IoAdd className="w-8 h-8 md:w-10 md:h-10 text-slate-200/90 group-hover:text-slate-300/90" />
            </label>

            {images["picture_2"] && (
              <img
                className={`group ${
                  !images["picture_2"] ? "hidden" : null
                } w-20 md:w-24 h-20 md:h-24 rounded-3xl hover:cursor-pointer bg-white/10 hover:opacity-90 flex items-center justify-center mx-1`}
                src={images["picture_2"]}
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
              onChange={handleImageBox}
              multiple
            />
            <label
              htmlFor="imageInput_3"
              className={`group ${
                images["picture_3"] ? "hidden" : null
              } w-20 md:w-24 h-20 md:h-24 rounded-3xl hover:cursor-pointer bg-white/40 flex items-center justify-center mx-1 hover:bg-white/30`}
            >
              <IoAdd className="w-8 h-8 md:w-10 md:h-10 text-slate-200/90 group-hover:text-slate-300/90" />
            </label>

            {images["picture_3"] && (
              <img
                className={`group ${
                  !images["picture_3"] ? "hidden" : null
                } w-20 md:w-24 h-20 md:h-24 rounded-3xl hover:cursor-pointer bg-white/10 hover:opacity-90 flex items-center justify-center mx-1`}
                src={images["picture_3"]}
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
              onChange={handleImageBox}
              multiple
            />
            <label
              htmlFor="imageInput_4"
              className={`group ${
                images["picture_4"] ? "hidden" : null
              } w-20 md:w-24 h-20 md:h-24 rounded-3xl hover:cursor-pointer bg-white/40 flex items-center justify-center mx-1 hover:bg-white/30`}
            >
              <IoAdd className="w-8 h-8 md:w-10 md:h-10 text-slate-200/90 group-hover:text-slate-300/90" />
            </label>

            {images["picture_4"] && (
              <img
                className={`group ${
                  !images["picture_4"] ? "hidden" : null
                } w-20 md:w-24 h-20 md:h-24 rounded-3xl hover:cursor-pointer bg-white/10 hover:opacity-90 flex items-center justify-center mx-1`}
                src={images["picture_4"]}
                alt="Preview picture of Funko"
                onClick={() => document.getElementById("imageInput_4").click()}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CargarImagenes;
