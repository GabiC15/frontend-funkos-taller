import { useRouter } from "next/router";

export default function Pedido() {
  const router = useRouter();

  return <div>Pedido: {router.query.id}</div>;
}
