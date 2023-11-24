import { useRouter } from "next/router";

export default function Producto() {
  const router = useRouter();

  return <div>Producto: {router.query.id}</div>;
}
