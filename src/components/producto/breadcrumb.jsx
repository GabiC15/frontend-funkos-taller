import Link from "next/link";

export default function Breadcrumb({ producto }) {
  console.log(producto);
  return (
    <>
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center">
            <Link
              href="/productos"
              className="inline-flex items-center text-sm font-medium text-white"
            >
              Funkos
            </Link>
          </li>
          <li>
            <div className="flex items-center">
              <svg
                className="rtl:rotate-180 w-3 h-3 text-white mx-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <Link
                href={`/productos?categoria=${producto.categoria.padre.id}`}
                className="ms-1 text-sm font-medium text-white md:ms-2 whitespace-nowrap"
              >
                {producto.categoria.padre.nombre}
              </Link>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <svg
                className="rtl:rotate-180 w-3 h-3 text-white mx-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <Link
                className="ms-1 text-sm font-medium text-white md:ms-2 whitespace-nowrap"
                href={`/productos?categoria=${producto.categoria.padre.id}&subcategoria=${producto.categoria.id}`}
              >
                {producto.categoria.nombre}
              </Link>
            </div>
          </li>
        </ol>
      </nav>
    </>
  );
}
