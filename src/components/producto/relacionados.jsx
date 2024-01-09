import Producto from "@/components/home/producto";
import { data as dataa } from "@/components/home/recientes";
import { GET_PRODUCTOS } from "@/services/apollo/queries/producto";
import { useQuery } from "@apollo/client";
import { useEffect } from "react";

export default function Relacionados() {
  const { data, error, loading } = useQuery(GET_PRODUCTOS, {
    variables: {
      input: {},
    },
  });

  useEffect(() => {}, [data, error, loading]);

  return (
    <>
      <div className="max-w-[52rem] flex flex-col mx-4 md:mx-auto">
        <h3 className="text-xl md:text-2xl font-black mt-14">
          PRODUCTOS RELACIONADOS
        </h3>
        <div className="grid grid-cols-2 md:flex gap-4 mt-6">
          {dataa.slice(0, 4).map((p) => (
            <Producto producto={p} key={p.productId} />
          ))}
        </div>
      </div>
    </>
  );
}
