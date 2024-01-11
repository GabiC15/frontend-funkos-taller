import Producto from "@/components/home/producto";
import { GET_PRODUCTOS } from "@/services/apollo/queries/producto";
import { useQuery } from "@apollo/client";

export default function Relacionados({categoriaId}) {
  const { data, error, loading } = useQuery(GET_PRODUCTOS, {
    variables: {
      input: {
        // limite: 4,
        categoriaId: Number.parseInt(categoriaId),
      },
    },
  });

  return (
    <>
      <div className="max-w-[52rem] flex flex-col mx-4 md:mx-auto">
        <h3 className="text-xl md:text-2xl font-black mt-14">
          PRODUCTOS RELACIONADOS
        </h3>
        <div className="grid grid-cols-2 md:flex gap-4 mt-6">
          {loading && "Cargando..."}
          {data && data.productos.slice(0, 4).map((producto) => (
            <Producto producto={producto} key={producto.id} />
          ))}
        </div>
      </div>
    </>
  );
}
