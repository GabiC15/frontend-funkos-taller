import Item from "./Item";

export default function Info({ pedido }) {
  return (
    <>
      <div className="flex flex-col gap-4">
        {pedido.itemsPedido.map((item) => (
          <Item
            item={item}
            key={item.id}
            aprobado={pedido.pago?.status === "approved"}
          />
        ))}
      </div>
    </>
  );
}
