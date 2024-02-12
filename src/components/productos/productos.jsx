import Producto from "@/components/home/producto";
import Sidebar from "@/components/productos/sidebar";
import Loading from "../producto/loading";
import InfiniteScroll from "react-infinite-scroll-component";
import { useLazyQuery, useQuery } from "@apollo/client";
import { GET_PRODUCTOS } from "@/services/apollo/queries/producto";
import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function Productos() {
  const params = useSearchParams();
  const [pagina, setPagina] = useState(1);
  const [productos, setProductos] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  /* eslint-disable */
  const productosInput = {
    limite: 20,
    order: params.get("order"),
    precioMaximo: params.get("max") ? Number.parseInt(params.get("max")) : null,
    precioMinimo: params.get("min") ? Number.parseInt(params.get("min")) : null,
    categoriaId: params.get("categoria")
      ? Number.parseInt(params.get("categoria"))
      : null,
    subcategoriaId: params.get("subcategoria")
      ? Number.parseInt(params.get("subcategoria"))
      : null,
    busqueda: params.get("busqueda"),
    pagina: pagina,
  };
  const [
    getProductos,
    { data: productosData, loading: productosLoading, refetch },
  ] = useLazyQuery(GET_PRODUCTOS);

  useEffect(() => {
    getProductos({ variables: { input: productosInput } });
  }, []);

  useEffect(() => {
    setPagina(1);
    refetch({ input: productosInput });
  }, [params]);

  useEffect(() => {
    refetch({ input: productosInput });
  }, [pagina, refetch]);

  useEffect(() => {
    if (productosData?.productos) {
      if (productosData.productos.length === 0) setHasMore(false);
      else setHasMore(true);

      setProductos([
        ...(pagina > 1 ? productos : []),
        ...productosData.productos,
      ]);
    }
  }, [productosData]);

  return (
    <>
      <div className="bg-gradient">
        <div className="container max-w-screen-xl mx-auto flex flex-col items-center py-6 md:py-10 md:pb-24">
          <h2 className="text-2xl md:text-4xl font-bold md:font-black">
            NUESTROS PRODUCTOS
          </h2>

          <p className="text-lg md:text-xl leading-tight md:leading-normal font-normal md:font-medium">
            {params.get("busqueda")
              ? `Has buscado: ${params.get("busqueda")}`
              : "Todos los funkos del mercado!"}
          </p>

          <div className="flex flex-col w-full md:flex-row justify-start px-4 mt-3 md:mt-10 gap-1 md:gap-4">
            <Sidebar />
            <div className="flex w-full flex-col items-start">
              <InfiniteScroll
                dataLength={productos}
                next={() => setPagina(pagina + 1)}
                hasMore={hasMore}
              >
                <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-2">
                  {productos.map((p, i) => (
                    <Producto producto={p} key={i} />
                  ))}
                </div>
              </InfiniteScroll>
              {productosLoading && (
                <div className="mx-auto mt-16">
                  <Loading />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
