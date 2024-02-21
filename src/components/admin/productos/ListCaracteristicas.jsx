import { useState, useEffect } from "react";
import { IoAdd } from "react-icons/io5";
import List from "@/components/common/list";
import { useQuery } from "@apollo/client";
import { GET_CARACTERISTICAS } from "@/services/apollo/queries/caracteristica";

const ListCaracteristicas = ({ dataList, handleChange, clearTrue }) => {
  const {
    data: dataCaracteristicas,
    error: errorCaracteristicas,
    loading: loadingCaracteristicas,
    refetch,
  } = useQuery(GET_CARACTERISTICAS);

  const caracteristicas = dataCaracteristicas?.caracteristicas;

  const [selectedOptionCaracteristica, setSelectedOptionCaracteristica] =
    useState({
      id: parseInt(dataList.caracteristicaId),
      nombre: dataList.caracteristicaName,
    });

  useEffect(() => {
    setSelectedOptionCaracteristica({
      id: parseInt(dataList.caracteristicaId),
      nombre: dataList.caracteristicaName,
    });
  }, [dataList]);

  useEffect(() => {
    if (clearTrue) handleClearCaracteristica();
    // console.log("clearTrue", clearTrue);
  }, [clearTrue]);


  const handleClearCaracteristica = () => {
    setSelectedOptionCaracteristica({
      id: "",
      nombre: "",
    });
    handleChange(null);
  };

  if (loadingCaracteristicas) return "Loading...";

  if (errorCaracteristicas) return `No data! ${errorCaracteristicas.message}`;

  return (
    <>
      <List
        selectedOption={selectedOptionCaracteristica}
        setSelectedOption={setSelectedOptionCaracteristica}
        handleChange={handleChange}
        optionsServerSide={caracteristicas}
      />
      <IoAdd className="w-5 h-5 rotate-45 absolute" />
    </>
  );
};

export default ListCaracteristicas;
