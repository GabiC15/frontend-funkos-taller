import Layout from "@/components/common/layout";
import CardProducto from "@/components/admin/productos/CardProducto";
import Sidebar from "@/components/common/sidebar";
import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { GET_PRODUCTOS } from "@/services/apollo/queries/producto";
import { redirectRol } from "@/utils/redirect-rol";
import InfiniteScroll from "react-infinite-scroll-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Loading from "@/components/producto/loading";

export default function Producto() {
  const [pagina, setPagina] = useState(1);
  const [busqueda, setBusqueda] = useState();
  const [productos, setProductos] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  const { data, error, loading, refetch } = useQuery(GET_PRODUCTOS, {
    variables: {
      input: {
        busqueda,
      },
    },
  });
  useEffect(() => {}, [data, error, loading]);

  useEffect(() => {
    refetch({
      input: {
        pagina,
        busqueda,
      },
    });
  }, [pagina, refetch]);

  useEffect(() => {
    setPagina(1);
    refetch({ input: { busqueda } });
  }, [busqueda]);

  useEffect(() => {
    if (data?.productos) {
      if (data.productos.length === 0) setHasMore(false);
      else setHasMore(true);

      setProductos([...(pagina > 1 ? productos : []), ...data.productos]);
    }
  }, [data]);

  return (
    <>
      <Layout>
        <div className="bg-gradient min-h-screen">
          <div className="md:ml-64 ml-12">
            <Sidebar />

            <div className="container mx-auto flex flex-col md:px-10 pt-12 pb-16 px-4">
              <div className="flex items-center gap-6">
                <h1 className="text-3xl md:text-4xl font-black uppercase">
                  Productos
                </h1>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <FontAwesomeIcon
                      size="sm"
                      icon={faSearch}
                      className="text-chineseBlack"
                    />
                  </div>
                  <input
                    type="text"
                    id="search-navbar-2"
                    className="block w-full p-1.5 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Buscar..."
                    value={busqueda}
                    onChange={(e) => setBusqueda(e.target.value)}
                  />
                </div>
              </div>

              <InfiniteScroll
                dataLength={productos}
                next={() => setPagina(pagina + 1)}
                hasMore={hasMore}
              >
                <div className="flex flex-col gap-1 md:gap-3 mt-6">
                  {productos.map((prod, i) => (
                    <CardProducto producto={prod} key={prod["productId"]} />
                  ))}
                </div>
              </InfiniteScroll>
              {loading && <Loading className="mx-auto" />}
              {productos.length === 0 && !loading && (
                <p>No se han encontrado coincidencias</p>
              )}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {},
    redirect: redirectRol(context, ["ADMIN"]),
  };
}
