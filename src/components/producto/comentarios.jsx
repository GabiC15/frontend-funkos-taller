import Comentario from "@/components/producto/comentario";
import { GET_COMENTARIOS } from "@/services/apollo/queries/comentarios";
import { useQuery } from "@apollo/client";

export default function Comentarios({ productoId }) {
  const { data } = useQuery(GET_COMENTARIOS, {
    variables: {
      productoId,
    },
  });

  return (
    <>
      <div className="max-w-[52rem] flex flex-col mx-4 md:mx-auto">
        <h3 className="text-xl md:text-2xl font-black mt-14">COMENTARIOS</h3>

        {data && data?.valoraciones.length > 0 ? (
          data.valoraciones.map((valoracion) => (
            <Comentario valoracion={valoracion} key={valoracion.id} />
          ))
        ) : (
          <div>
            <p className="text-xs md:text-sm">
              No hay comentarios para este producto
            </p>
          </div>
        )}
      </div>
    </>
  );
}
