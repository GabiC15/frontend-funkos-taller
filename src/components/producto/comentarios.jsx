import Comentario from "@/components/producto/comentario";

export default function Comentarios() {
  return (
    <>
      <div className="max-w-[52rem] flex flex-col mx-4 md:mx-auto">
        <h3 className="text-xl md:text-2xl font-black mt-14">COMENTARIOS</h3>
        <Comentario />
        <Comentario />
        <Comentario />
        <Comentario />
      </div>
    </>
  );
}
