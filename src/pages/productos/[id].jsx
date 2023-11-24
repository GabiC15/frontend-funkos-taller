import { useRouter } from "next/router";

export default function DetalleProducto() {
  const router = useRouter();

  return <div>DetalleProducto: {router.query.id}</div>;
}
