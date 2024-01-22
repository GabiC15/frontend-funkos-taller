import { useEffect } from "react";
import { NetworkStatus, useQuery } from "@apollo/client";
import { GET_CATEGORIAS } from "@/services/apollo/queries/categoria";
import List from "@/components/common/list";

const ListCategorySubCategory = ({ dataList }) => {
  const { data, error, loading } = useQuery(GET_CATEGORIAS);
  useEffect(() => {
    // if (loading) return 'Loading...';
    // if (error) return `No data! ${error.message}`;
    // console.log(data);
  }, [data, error, loading]);

  if (loading) return "Loading...";
  if (error) return `No data! ${error.message}`;

  
  const optionsCategoria = data.categorias;

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
          dataName={dataList.categoriaName}
          dataId={dataList.categoriaId}
          optionsServerSide={optionsCategoria}
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
          dataName={dataList.subcategoriaName}
          dataId={dataList.subcategoriaId}
          optionsServerSide={dataList.categoriaId ? optionsCategoria : null}
        />
      </div>
    </>
  );
};

export default ListCategorySubCategory;
