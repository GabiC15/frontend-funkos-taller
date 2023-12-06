import Producto from "@/components/home/producto";
import Sidebar from "@/components/productos/sidebar";
import { data } from "@/components/home/recientes";
import Pagination from "@/components/productos/pagination";

export default function Productos() {
  return (
    <>
      <div className="bg-gradient">
        <div className="container mx-auto flex flex-col items-center py-6 md:py-10">
          <h2 className="text-2xl md:text-4xl font-bold md:font-black">
            NUESTROS PRODUCTOS
          </h2>
          <p className="text-lg md:text-xl leading-tight md:leading-normal font-normal md:font-medium">
            Todos los funkos del mercado!
          </p>

          <div className="flex flex-col md:flex-row justify-center px-4 mt-3 md:mt-10 gap-1 md:gap-4">
            <Sidebar />
            <div className="flex flex-col items-center">
              <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-2">
                {data.map((p, i) => (
                  <Producto producto={p} key={i} />
                ))}
              </div>
              <Pagination />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
