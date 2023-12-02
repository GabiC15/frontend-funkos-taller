import Producto from "@/components/home/producto";
import { data } from "@/components/home/recientes";

export default function Relacionados() {
  return (
    <>
      <div className="max-w-[52rem] flex flex-col mx-4 md:mx-auto">
        <h3 className="text-xl md:text-2xl font-black mt-14">
          PRODUCTOS RELACIONADOS
        </h3>
        <div className="grid grid-cols-2 md:flex gap-4 mt-6">
          {data.slice(0, 4).map((p) => (
            <Producto producto={p} key={p.productId} />
          ))}
        </div>
      </div>
    </>
  );
}
