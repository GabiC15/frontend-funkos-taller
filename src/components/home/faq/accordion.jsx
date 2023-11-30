import { useState } from "react";

export default function AccordionFaq() {
  const [openAnswer, setOpenAnswer] = useState(null);

  return (
    <>
      <div
        id="accordion-collapse"
        data-accordion="collapse"
        className="mt-2 md:mt-8 w-full md:w-[40rem]"
      >
        <h2 id="accordion-collapse-heading-1">
          <button
            type="button"
            className="flex items-center text-start justify-between w-full px-3 py-3 font-medium rtl:text-right text-white border-b-[1px] border-gray-200 gap-3"
            data-accordion-target="#accordion-collapse-body-1"
            aria-expanded="true"
            aria-controls="accordion-collapse-body-1"
            onClick={() => setOpenAnswer(openAnswer == 0 ? null : 0)}
          >
            <span className="text-xs md:text-sm">
              ¿Cuál es la política de envío y tiempo de entrega de los funkos?
            </span>
            <svg
              data-accordion-icon=""
              className={`w-3 h-3 shrink-0 ${
                openAnswer == 0 ? "rotate-0" : "rotate-180"
              }`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-1"
          className={`${openAnswer == 0 ? "" : "hidden"}`}
          aria-labelledby="accordion-collapse-heading-1"
        >
          <div className="px-3 py-3 border-b-[1px] border-gray-200">
            <p className="mb-2 text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              aliquet orci nibh, et fermentum tellus molestie sed. Pellentesque
              sapien lectus, elementum eu nunc in, laoreet gravida augue. Cras
              congue lobortis leo ac egestas.
            </p>
          </div>
        </div>

        <h2 id="accordion-collapse-heading-2">
          <button
            type="button"
            className="flex items-center text-start justify-between w-full px-3 py-3 font-medium rtl:text-right text-white border-b-[1px] border-gray-200 gap-3"
            data-accordion-target="#accordion-collapse-body-2"
            aria-expanded="false"
            aria-controls="accordion-collapse-body-2"
            onClick={() => setOpenAnswer(openAnswer == 1 ? null : 1)}
          >
            <span className="text-xs md:text-sm">
              ¿Tienen algún tipo de garantía en los funkos comprados?
            </span>
            <svg
              data-accordion-icon=""
              className={`w-3 h-3 shrink-0 ${
                openAnswer == 1 ? "rotate-0" : "-rotate-180"
              }`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-2"
          className={`${openAnswer == 1 ? "" : "hidden"}`}
          aria-labelledby="accordion-collapse-heading-2"
        >
          <div className="px-3 py-3 border-b-[1px] border-gray-200">
            <p className="mb-2 text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              aliquet orci nibh, et fermentum tellus molestie sed. Pellentesque
              sapien lectus, elementum eu nunc in, laoreet gravida augue. Cras
              congue lobortis leo ac egestas.
            </p>
          </div>
        </div>

        <h2 id="accordion-collapse-heading-3">
          <button
            type="button"
            className="flex items-center text-start justify-between w-full px-3 py-3 font-medium rtl:text-right text-white border-b-[1px] border-gray-200 gap-3"
            data-accordion-target="#accordion-collapse-body-3"
            aria-expanded="false"
            aria-controls="accordion-collapse-body-3"
            onClick={() => setOpenAnswer(openAnswer == 2 ? null : 2)}
          >
            <span className="text-xs md:text-sm">
              ¿Cómo puedo realizar el seguimiento de mi pedido?
            </span>
            <svg
              data-accordion-icon=""
              className={`w-3 h-3 shrink-0 ${
                openAnswer == 2 ? "rotate-0" : "-rotate-180"
              }`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-3"
          className={`${openAnswer == 2 ? "" : "hidden"}`}
          aria-labelledby="accordion-collapse-heading-3"
        >
          <div className="px-3 py-3 border-b-[1px] border-t-0 border-gray-200">
            <p className="mb-2 text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              aliquet orci nibh, et fermentum tellus molestie sed. Pellentesque
              sapien lectus, elementum eu nunc in, laoreet gravida augue. Cras
              congue lobortis leo ac egestas.
            </p>
          </div>
        </div>

        <h2 id="accordion-collapse-heading-4">
          <button
            type="button"
            className="flex items-center text-start justify-between w-full px-3 py-3 font-medium rtl:text-right text-white border-b-[1px] border-gray-200 gap-3"
            data-accordion-target="#accordion-collapse-body-4"
            aria-expanded="false"
            aria-controls="accordion-collapse-body-4"
            onClick={() => setOpenAnswer(openAnswer == 3 ? null : 3)}
          >
            <span className="text-xs md:text-sm">
              ¿Cuál es la política de devolución y reembolso?
            </span>
            <svg
              data-accordion-icon=""
              className={`w-3 h-3 shrink-0 ${
                openAnswer == 3 ? "rotate-0" : "-rotate-180"
              }`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-4"
          className={`${openAnswer == 3 ? "" : "hidden"}`}
          aria-labelledby="accordion-collapse-heading-4"
        >
          <div className="px-3 py-3 border-b-[1px] border-t-0 border-gray-200">
            <p className="mb-2 text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              aliquet orci nibh, et fermentum tellus molestie sed. Pellentesque
              sapien lectus, elementum eu nunc in, laoreet gravida augue. Cras
              congue lobortis leo ac egestas.
            </p>
          </div>
        </div>

        <h2 id="accordion-collapse-heading-5">
          <button
            type="button"
            className="flex items-center text-start justify-between w-full px-3 py-3 font-medium rtl:text-right text-white border-b-[1px] border-gray-200 gap-3"
            data-accordion-target="#accordion-collapse-body-5"
            aria-expanded="false"
            aria-controls="accordion-collapse-body-5"
            onClick={() => setOpenAnswer(openAnswer == 4 ? null : 4)}
          >
            <span className="text-xs md:text-sm">
              ¿Tienen algún tipo de garantía en los funkos comprados?
            </span>
            <svg
              data-accordion-icon=""
              className={`w-3 h-3 shrink-0 ${
                openAnswer == 4 ? "rotate-0" : "-rotate-180"
              }`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-5"
          className={`${openAnswer == 4 ? "" : "hidden"}`}
          aria-labelledby="accordion-collapse-heading-5"
        >
          <div className="px-3 py-3 border-b-[1px] border-t-0 border-gray-200">
            <p className="mb-2 text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              aliquet orci nibh, et fermentum tellus molestie sed. Pellentesque
              sapien lectus, elementum eu nunc in, laoreet gravida augue. Cras
              congue lobortis leo ac egestas.
            </p>
          </div>
        </div>

        <h2 id="accordion-collapse-heading-6">
          <button
            type="button"
            className="flex items-center text-start justify-between w-full px-3 py-3 font-medium rtl:text-right text-white border-b-[1px] border-gray-200 gap-3"
            data-accordion-target="#accordion-collapse-body-6"
            aria-expanded="false"
            aria-controls="accordion-collapse-body-6"
            onClick={() => setOpenAnswer(openAnswer == 5 ? null : 5)}
          >
            <span className="text-xs md:text-sm">
              ¿Cómo puedo realizar el seguimiento de mi pedido?
            </span>
            <svg
              data-accordion-icon=""
              className={`w-3 h-3 shrink-0 ${
                openAnswer == 5 ? "rotate-0" : "-rotate-180"
              }`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-6"
          className={`${openAnswer == 5 ? "" : "hidden"}`}
          aria-labelledby="accordion-collapse-heading-6"
        >
          <div className="px-3 py-3 border-b-[1px] border-t-0 border-gray-200">
            <p className="mb-2 text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              aliquet orci nibh, et fermentum tellus molestie sed. Pellentesque
              sapien lectus, elementum eu nunc in, laoreet gravida augue. Cras
              congue lobortis leo ac egestas.
            </p>
          </div>
        </div>

        <h2 id="accordion-collapse-heading-7">
          <button
            type="button"
            className="flex items-center text-start justify-between w-full px-3 py-3 font-medium rtl:text-right text-white border-b-[1px] border-gray-200 gap-3"
            data-accordion-target="#accordion-collapse-body-7"
            aria-expanded="false"
            aria-controls="accordion-collapse-body-7"
            onClick={() => setOpenAnswer(openAnswer == 6 ? null : 6)}
          >
            <span className="text-xs md:text-sm">
              ¿Cuál es la política de devolución y reembolso?
            </span>
            <svg
              data-accordion-icon=""
              className={`w-3 h-3 shrink-0 ${
                openAnswer == 6 ? "rotate-0" : "-rotate-180"
              }`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-7"
          className={`${openAnswer == 6 ? "" : "hidden"}`}
          aria-labelledby="accordion-collapse-heading-7"
        >
          <div className="px-3 py-3 border-b-[1px] border-t-0 border-gray-200">
            <p className="mb-2 text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              aliquet orci nibh, et fermentum tellus molestie sed. Pellentesque
              sapien lectus, elementum eu nunc in, laoreet gravida augue. Cras
              congue lobortis leo ac egestas.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
