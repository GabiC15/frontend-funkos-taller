export default function Paginationa({ nPages, currentPage, setCurrentPage }) {
  const nextPage = (e) => {
    e.preventDefault();
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
  };
  const prevPage = (e) => {
    e.preventDefault();
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

  return (
    <>
      <nav aria-label="Page navigation">
        <ul className="flex items-center -space-x-px h-8 text-sm mt-8 bg-black/20 rounded-lg">
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-white border border-e-0 border-chineseBlack rounded-s-lg hover:bg-gray-100 hover:text-gray-700"
              onClick={prevPage}
            >
              <span className="sr-only">Previous</span>
              <svg
                className="w-2.5 h-2.5 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 1 1 5l4 4"
                />
              </svg>
            </a>
          </li>
          {pageNumbers.map((pgNumber) => (
            <li key={pgNumber}>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight text-white border border-chineseBlack hover:bg-gray-100 hover:text-gray-700"
                onClick={(e) => {e.preventDefault(); setCurrentPage(pgNumber)}}
              >
                {pgNumber}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-3 h-8 leading-tight text-white border border-chineseBlack rounded-e-lg hover:bg-gray-100 hover:text-gray-700"
              onClick={nextPage}
            >
              <span className="sr-only">Next</span>
              <svg
                className="w-2.5 h-2.5 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m1 9 4-4-4-4"
                />
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
