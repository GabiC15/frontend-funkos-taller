import { useEffect, useState } from "react";

const List = ({ selectedOption, setSelectedOption, optionsServerSide, handleChange, category }) => {

  const [options, setOptions ] = useState("");

  const changeSelectOptionHandler = (event) => {
    const value = event.target.value.split(',');
    setSelectedOption({id:  parseInt(value[0]), nombre: value[1]});
    // console.log(category, value[0])
    handleChange(category, value[0]);
  };
  
  useEffect(() => {
    
    const excludedCategoryId = selectedOption.id;
    const filteredCategoryData = optionsServerSide ? optionsServerSide.filter(categoria => categoria.id !== excludedCategoryId) : null;
    
    const optionsFiltered = filteredCategoryData;
    
    const optionsList = optionsFiltered?.map((option, id) => (
      <option key={option.id} value={`${option.id}, ${option.nombre}`}>
        {option.nombre}
      </option>
    ));
    
    setOptions(optionsList); 
    
  }, [])
  
  
    useEffect(() => {
      const excludedCategoryId = selectedOption.id;
    const filteredCategoryData = optionsServerSide ? optionsServerSide.filter(categoria => categoria.id !== excludedCategoryId) : null;
    
    const optionsFiltered = filteredCategoryData;
    
    const optionsList = optionsFiltered?.map((option, id) => (
      <option key={option.id} value={`${option.id}, ${option.nombre}`}>
        {option.nombre}
      </option>
    ));
    
    setOptions(optionsList); 
    
  }, [selectedOption])
  
  
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
          defaultValue={`${selectedOption.nombre ? selectedOption.nombre : "Seleccione una"}`}
        >{`${selectedOption.nombre ? selectedOption.nombre : "Seleccione una"}`}</option>
        {
          options
        }
      </select>
    </>
  );
};

export default List;
