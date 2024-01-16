const Pagination = ({
  totalPosts,
  setCurrentPage,
  currentPage,
  totalDataLength,
  dataCount,
  currentData,
  dataPerPage,
}) => {
  let pages = [];
  const pagesToShow = 2;
  const totalPages = totalPosts - 1 === 0 ? 1 : totalPosts - 1;
  const startPage =
    currentPage - pagesToShow >= 1 ? currentPage - pagesToShow : 1;
  const endPage =
    currentPage + pagesToShow <= totalPages
      ? currentPage + pagesToShow
      : totalPages;

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return (
    <>
      <div className="flex flex-row items-center justify-between mx-2 md:mx-10 lg:mx-5 my-3">
        <p>{`Showing ${
          currentPage - 1 < 1
            ? 1
            : currentPage + 1 >= totalPosts
            ? dataCount - currentData
            : dataCount - dataPerPage
        } to ${
          currentPage + 1 < totalPosts
            ? dataCount
            : totalDataLength > dataPerPage ? dataCount + currentData : currentData
        } of ${totalDataLength}`}</p>
        <div className="md:mx-3 mx-8">
          <button
            className="hover:bg-gray-600 text-white font-bold py-2 px-4 rounded inline-flex items-center"
            onClick={(e) => {
              e.preventDefault();
              const page = currentPage - 1 >= 1 ? currentPage - 1 : currentPage;
              setCurrentPage(page);
            }}
          >
            Previous
          </button>
          {pages.map((page, index) => {
            return (
              <button
                className={`mx-1  ${
                  currentPage === page ? "text-purple-500" : "bg-transparent"
                } rounded-3xl p-2`}
                key={index}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
            );
          })}
          <button
            className="hover:bg-gray-600 text-white font-bold py-2 px-4 rounded inline-flex items-center"
            onClick={(e) => {
              e.preventDefault();
              const page =
                currentPage + 1 < totalPosts ? currentPage + 1 : currentPage;
              setCurrentPage(page);
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
