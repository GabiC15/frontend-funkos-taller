import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import {
  GET_CATEGORIAS,
  GET_SUBCATEGORIAS,
} from "@/services/apollo/queries/categoria";
import List from "@/components/common/listCategorySubcategory";

const ListCategorySubCategory = ({ dataList, handleChange, clearTrue }) => {
  const [selectedOptionCategory, setSelectedOptionCategory] = useState({
    id: parseInt(dataList.categoriaId),
    nombre: dataList.categoriaName,
  });
  
  const [selectedOptionSubCategory, setSelectedOptionSubCategory] = useState({});

  useEffect(() => {
    setSelectedOptionCategory({
      id: parseInt(dataList.categoriaId),
      nombre: dataList.categoriaName,
    });

  }, [dataList])

  useEffect(() => {
    setSelectedOptionSubCategory({
      id: parseInt(dataList.subcategoriaId),
      nombre: dataList.subcategoriaName,
    });
  }, [dataList])
  

  const {
    data: dataCategory,
    error: errorCategory,
    loading: loadingCategory,
  } = useQuery(GET_CATEGORIAS, {
    refetchQueries: [
      {
        query: GET_SUBCATEGORIAS,
        variables: {
          id: selectedOptionCategory.id ? selectedOptionCategory.id : 0,
        },
      },
    ],
  });

  const optionsCategoria = dataCategory?.categorias;

  useEffect(() => {

    if (dataList.categoriaId !== selectedOptionCategory.id && selectedOptionCategory.id !== "") {
      console.log("refetching...");
      refetchSubcategory();
      setSelectedOptionSubCategory("");
      handleChange("subcategoria", null);
    } else {
      setSelectedOptionSubCategory({
        id: parseInt(dataList.subcategoriaId),
        nombre: dataList.subcategoriaName,
      });
    }
  }, [selectedOptionCategory, selectedOptionCategory]);

  const {
    data: dataSubcategory,
    error: errorSubcategory,
    loading: loadingSubcategory,
    refetch: refetchSubcategory,
  } = useQuery(GET_SUBCATEGORIAS, {
    variables: {
      id: selectedOptionCategory.id ? selectedOptionCategory.id : 0,
    },
    fetchPolicy: "network-only",
  });

  useEffect(() => {
    handleClearCategories()
    // console.log("clearTrue", clearTrue);
  }
  , [clearTrue]);
  

  const handleClearCategories = () => {
    setSelectedOptionCategory({
      id: "",
      nombre: "",
    });
    setSelectedOptionSubCategory({
      id: "",
      nombre: "",
    });
    handleChange("categoria", null);
    handleChange("subcategoria", null);
  };

  const optionsSubcategoria = dataSubcategory?.subcategorias;

  if (loadingCategory || loadingSubcategory) return "Loading...";

  if (errorCategory || errorSubcategory)
    return `No data! ${(errorCategory?.message, errorSubcategory?.message)}`;

  return (
    <> 
      <div className="flex flex-col pt-1 mx-auto">
        <label
          htmlFor="title"
          className="block text-bold font-medium text-white"
        >
          Categoria
        </label>
        <List
          selectedOption={selectedOptionCategory}
          setSelectedOption={setSelectedOptionCategory}
          optionsServerSide={optionsCategoria}
          handleChange={handleChange}
          category={"categoria"}
        />
      </div>
      <div className="flex flex-col pt-1 mx-auto">
        <label
          htmlFor="title"
          className="block text-bold font-medium text-white"
        >
          Subcategoria
        </label>
        <List
          selectedOption={selectedOptionSubCategory}
          setSelectedOption={setSelectedOptionSubCategory}
          optionsServerSide={optionsSubcategoria}
          handleChange={handleChange}
          category={"subcategoria"}
        />
      </div>
    </>
  );
};

export default ListCategorySubCategory;
