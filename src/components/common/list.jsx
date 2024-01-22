import { useEffect, useState } from "react";

const List = ({ dataName, dataId, optionsServerSide }) => {
  /** "selected" here is state variable which will hold the
   * value of currently selected dropdown.
   */
  const [selected, setSelected] = useState("");

  /** Function that will set different values to state variable
   * based on which dropdown is selected
   */
  const changeSelectOptionHandler = (event) => {
    setSelected(event.target.value);
  };

  const excludedCategoryId = dataId;
  const filteredCategoryData = optionsServerSide ? optionsServerSide.filter(categoria => categoria.id !== excludedCategoryId) : null;
  
  const optionsFiltered = filteredCategoryData;

  useEffect(() => {

    const excludedCategoryId = dataId;
    const filteredCategoryData = optionsServerSide ? optionsServerSide.filter(categoria => categoria.id !== excludedCategoryId) : null;
    const optionsFiltered = filteredCategoryData
    return () => {optionsFiltered}
  
  }, [selected])
  console.log(selected);

  /** Different arrays for different dropdowns */
  const algorithm = [
    "Searching Algorithm",
    "Sorting Algorithm",
    "Graph Algorithm",
  ];
  const language = ["C++", "Java", "Python", "C#"];
  const dataStructure = ["Arrays", "LinkedList", "Stack", "Queue"];

  /** Type variable to store different array for different dropdown */
  let type = null;

  /** This will be used to create set of options that user will see */
  let options = null;

  /** Setting Type variable according to dropdown */
  // if (select === "Algorithm") {
  //   type = algorithm;
  // } else if (select === "Language") {
  //   type = language;
  // } else if (select === "Data Structure") {
  //   type = dataStructure;
  // }

  /** If "Type" is null or undefined then options will be null,
   * otherwise it will create a options iterable based on our array
   */
  if (type) {
    options = type.map((el) => <option key={el}>{el}</option>);
  }
  options = optionsFiltered?.map((option, id) => (
    <option key={id} value={option.id}>
      {option.nombre}
    </option>
  ));
  //  return (
  //    <div
  //      style={{
  //        padding: "16px",
  //        margin: "16px",
  //      }}
  //    >
  //      <form>
  //        <div>
  //          {/** Bind changeSelectOptionHandler to onChange method of select.
  //           * This method will trigger every time different
  //           * option is selected.
  //           */}
  //          <select onChange={changeSelectOptionHandler}>
  //            <option>Choose...</option>
  //            <option>Algorithm</option>
  //            <option>Language</option>
  //            <option>Data Structure</option>
  //          </select>
  //        </div>
  //        <div>
  //          <select>
  //            {
  //              /** This is where we have used our options variable */
  //              options
  //            }
  //          </select>
  //        </div>
  //      </form>
  //    </div>
  //  );

  return (
    <>
      <label htmlFor="underline_select" class="sr-only">
        Underline select
      </label>
      <select
        id="underline_select"
        className="bg-transparent border-2 pl-1 border-slate-300/90 focus:border-slate-200 rounded-lg outline-none"
        value={selected}
        onChange={changeSelectOptionHandler}
      >
        <option
          value={dataId}
          defaultValue={`${dataName ? dataName : "Seleccione una"}`}
        >{`${dataName ? dataName : "Seleccione una"}`}</option>
        {/* {options.map((option, i) => {
          <options key={i} value={options.id}>{option.nombre}</options>
        })} */}
        {/* <option value="US">United States</option>
        <option value="CA">Canada</option>
        <option value="FR">France</option>
        <option value="DE">Germany</option> */}
        {
          //              /** This is where we have used our options variable */
          options
        }
      </select>
    </>
  );
};

export default List;
