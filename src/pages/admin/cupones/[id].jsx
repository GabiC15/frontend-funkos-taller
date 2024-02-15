import Layout from "@/components/common/layout";
import { useRouter } from "next/router";

export default function Cupon() {
  const router = useRouter();

  return (
    <>
      <Layout>Cupon: {router.query.id}</Layout>
    </>
  );
}
