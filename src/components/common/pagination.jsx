const Pagination = ({
  setCurrentPage,
  currentPage,
  totalDataLength,
  dataStartIndex,
  dataLastIndex,
  nPages,
}) => {
  const nextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

  return (
    <>
      <div className="flex md:flex-row flex-col items-center justify-between mx-2 md:mx-10 lg:mx-3 my-3">
        <p>{`Showing ${dataStartIndex == 0 ? 1 : dataStartIndex} to ${dataLastIndex > totalDataLength ? totalDataLength : dataLastIndex} of ${totalDataLength}`}</p>
        <div className="flex flex-wrap mt-2 md:mt-0">
          <button
            className="hover:bg-gray-600 text-white font-bold py-2 md:px-4 px-2 rounded inline-flex items-center"
            onClick={(e) => {
              e.preventDefault();
              prevPage();
            }}
          >
            Previous
          </button>
          {pageNumbers.map((pgNumber) => {
            return (
              <button
                className={`mx-1  ${
                  currentPage === pgNumber
                    ? "text-purple-500"
                    : "bg-transparent"
                } rounded-3xl p-2`}
                key={pgNumber}
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentPage(pgNumber);
                }}
              >
                {pgNumber}
              </button>
            );
          })}
          <button
            className="hover:bg-gray-600 text-white font-bold py-2 md:px-4 px-2 rounded inline-flex items-center"
            onClick={(e) => {
              e.preventDefault();
              nextPage();
            }}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Pagination;
