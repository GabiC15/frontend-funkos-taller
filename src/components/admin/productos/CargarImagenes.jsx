import { useEffect, useState } from "react";
import { IoAdd } from "react-icons/io5";

const CargarImagenes = ({
  dataImages,
  setImagesFile,
  clearTrue,
  handleUpdateImages,
}) => {

  const [imagesBox, setImagesBox] = useState({});

  useEffect(() => {
    setImagesBox({
      picture_1: dataImages.picture_1,
      picture_2: dataImages.picture_2,
      picture_3: dataImages.picture_3,
      picture_4: dataImages.picture_4,
    });
  }, [dataImages]);

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
    handleUpdateImages(e);
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
      ...dataImages,
      [e.target.name]: e.target.files[0],
    });
  };

  const handleImagesFile = (e) => {
    setImagesFile({
      ...dataImages,
      [e.target.name]: e.target.files[0],
    });
  };

  useEffect(() => {
    handleImagesRemove();
  }, [clearTrue]);

  const handleImagesRemove = (e) => {
    if (e) e.preventDefault();
    setImagesBox({
      ...imagesBox,
      ["picture_1"]: null,
      ["picture_2"]: null,
      ["picture_3"]: null,
      ["picture_4"]: null,
    });
    setImagesFile({
      ...dataImages,
      ["picture_1"]: null,
      ["picture_2"]: null,
      ["picture_3"]: null,
      ["picture_4"]: null,
    });
  };

  // if (loading) console.log("Submitting...");
  // if (error) console.log(`Error: ${error.message}`);
  // if (data) console.log("Images added successfully!");

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
    </>
  );
};

export default CargarImagenes;
