import { useState, useEffect } from "react";

const List = ({
  selectedOption,
  setSelectedOption,
  handleChange,
  optionsServerSide,
}) => {
  const [options, setOptions] = useState("");

  const changeSelectOptionHandler = (event) => {
    const value = event.target.value.split(",");
    setSelectedOption({ id: parseInt(value[0]), nombre: value[1] });
    handleChange(value[0] === "0" ? null : parseInt(value[0]));
  };

  useEffect(() => {
    const excludedCaracteristicasId = selectedOption.id;
    const filteredCaracteristicasData = optionsServerSide
      ? optionsServerSide.filter(
          (caracteristica) => caracteristica.id !== excludedCaracteristicasId
        )
      : null;

    const optionsFiltered = filteredCaracteristicasData;

    const optionsList = optionsFiltered?.map((option, id) => (
      <option key={option.id} value={`${option.id}, ${option.nombre}`}>
        {option.nombre}
      </option>
    ));

    if (selectedOption.id !== 0 && selectedOption.id) {
      const optionNinguna = (
        <option
          key={0}
          value={`${0}, ${"Ninguna"}`}
        >
          {"Ninguna"}
        </option>
      );
      const optionsListWihNone = [...optionsList, optionNinguna];
      setOptions(optionsListWihNone);
    } else {
      setOptions(optionsList);
    }
  }, []);

  useEffect(() => {
    const excludedCaracteristicasId = selectedOption.id;
    const filteredCaracteristicasData = optionsServerSide
      ? optionsServerSide.filter(
          (caracteristica) => caracteristica.id !== excludedCaracteristicasId
        )
      : null;

    const optionsFiltered = filteredCaracteristicasData;

    const optionsList = optionsFiltered?.map((option, id) => (
      <option key={option.id} value={`${option.id}, ${option.nombre}`}>
        {option.nombre}
      </option>
    ));
    console.log(selectedOption);

    if (selectedOption.id !== 0 && selectedOption.id) {
      const optionNinguna = (
        <option
          key={0}
          value={`${0}, ${"Ninguna"}`}
          onClick={() => handleChange(null)}
        >
          {"Ninguna"}
        </option>
      );
      const optionsListWihNone = [...optionsList, optionNinguna];
      setOptions(optionsListWihNone);
    } else {
      setOptions(optionsList);
    }
  }, [selectedOption]);

  return (
    <>
      <label htmlFor="underline_select" className="sr-only">
        Underline select
      </label>
      <select
        id="underline_select"
        className="bg-transparent border-2 pl-2 border-slate-300/90 focus:border-slate-200 rounded-lg outline-none"
        key={selectedOption.id}
        value={selectedOption.nombre}
        onChange={changeSelectOptionHandler}
      >
        <option
          key={selectedOption.id}
          value={`${selectedOption.id}, ${selectedOption.nombre}`}
          defaultValue={`${
            selectedOption.nombre ? selectedOption.nombre : "Seleccione una"
          }`}
        >{`${
          selectedOption.nombre ? selectedOption.nombre : "Seleccione una"
        }`}</option>
        {options}
      </select>
    </>
  );
};

export default List;
