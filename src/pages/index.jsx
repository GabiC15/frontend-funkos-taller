import Layout from "@/components/common/layout";
import Destacados from "@/components/home/destacados";
import Faq from "@/components/home/faq";
import Formulario from "@/components/home/formulario";
import Recientes from "@/components/home/recientes";

export default function Home() {
  return (
    <Layout>
      <Destacados />
      <Recientes />
      <Faq />
      <Formulario />
    </Layout>
  );
}
