import Layout from "@/components/common/layout";
import CardProducto from "@/components/admin/productos/CardProducto";
import Sidebar from "@/components/common/sidebar";
import { IoAdd } from "react-icons/io5";
import CargarProducto from "@/components/admin/productos/CargarProducto";
import { NetworkStatus, useQuery } from "@apollo/client";
import { useEffect } from "react";
import { GET_PRODUCTOS } from "@/services/apollo/queries/producto";

const data = [
  {
    productId: "74094",
    title: "Pop! Ichigo",
    description:
      "As a Substitute Shinigami, Pop! Ichigo is responsible for shepherding souls to the afterlife and defeating the evil ones seeking to harm humanity. Help him fulfill his duty when you welcome this exclusive Soul Reaper into your Bleach collection. Vinyl figure is approximately 4.45-inches tall. Product will have the 2023 Fall Convention sticker on the box.",
    price: "$15.00",
    fandom: "Anime & Manga",
    license: "Bleach",
    type: "Pop!",
    images: [
      "https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dw3682dac4/images/funko/upload/74094_POPAnimation_Bleach_IchigoInBattle_GLAM-WEB.png?sw=800&sh=800",
      "https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dw6021c805/images/funko/upload/74094_POPAnimation_Bleach_IchigoInBattle_GLAM-1-FW-WEB.png?sw=800&sh=800",
    ],
  },
  {
    productId: "68763",
    title: "Pop! Rob Zombie (Dragula) (Glow)",
    description:
      "Pop! Rob Zombie is going to redecorate the stage of your music collection to suit his macabre taste. Grab front-row seats and expand your Pop! Rocks collection with this exclusive, glow-in-the-dark Pop! Rob Zombie (Dragula). Vinyl figure is approximately 3.75-inches tall. Find more Funko products at Hot Topic.",
    price: "$15.00",
    fandom: "Music",
    license: "Rob Zombie",
    type: "Pop!",
    specialFeature: "Glows In The Dark",
    images: [
      "https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dwb64983ac/images/funko/upload/68763_Music_RobZombieDragulaGW_POP_GLAM-1-WEB.png?sw=800&sh=800",
      "https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dw9d849645/images/funko/upload/68763_Music_RobZombieDragulaGW_POP_GLAM-1-HT-WEB.png?sw=800&sh=800",
      "https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dwabd9a179/images/funko/upload/68763_Music_RobZombieDragulaGW_POP_GLAM-GLOW-1-WEB.png?sw=800&sh=800",
    ],
  },
  {
    productId: "70862",
    title: "Pop! Super Shippo on Horse",
    description:
      "A new member of Kagome and Inuyasha’s team is riding this way! Welcome this exclusive, Super Pop! Shippō on Horse into your <i>InuYasha</i> collection to unite this fox demon with his traveling companions. Vinyl figure is approximately 6.15-inches tall. Product will have the 2023 Fall Convention sticker on the box. Find more Funko products at Hot Topic.",
    price: "$30.00",
    fandom: "Anime & Manga",
    license: "Inuyasha",
    type: "Pop!",
    images: [
      "https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dwcf0e232b/images/funko/upload/70862_InuYasha_ShippoOnHorse_POPSuperGLAM-WEB.png?sw=800&sh=800",
      "https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dw6cdd8b53/images/funko/upload/70862_InuYasha_ShippoOnHorse_POPSuper_FC_GLAM-1-WEB.png?sw=800&sh=800",
    ],
  },
  {
    productId: "68758",
    title: "Pop! Inuyasha (Human Form)",
    description:
      "Having shed his demon powers with the new moon, Pop! Inuyasha is now vulnerable in his human form! Help him protect his traveling companions in your InuYasha collection by welcoming this exclusive half-demon into your home. Vinyl figure is approximately 4.1-inches tall. Product will have the 2023 Fall Convention sticker on the box. Find more Funko products at Toy Tokyo.",
    price: "$15.00",
    fandom: "Anime & Manga",
    license: "Inuyasha",
    type: "Pop!",
    images: [
      "https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dw828b7d78/images/funko/upload/68758_Inuyasha_HumanInuyasha_POP_GLAM-WEB.png?sw=800&sh=800",
      "https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dw42b91c3f/images/funko/upload/68758_Inuyasha_HumanInuyasha_POP_FC_GLAM-1-WEB.png?sw=800&sh=800",
    ],
  },
];

export default function Producto() {

  const { data, error, loading } = useQuery(GET_PRODUCTOS, {variables: { input: {}}});
  useEffect(() => {
    // if (loading) return 'Loading...';
    // if (error) return `No data! ${error.message}`;
    // console.log(data);
  }, [data, error, loading]);

  if (loading) return 'Loading...';
  if (error) return `No data! ${error.message}`;

  return (
    <>
      <Layout>
        <div className="bg-gradient min-h-screen">
          <div className="md:ml-64 ml-12">
            <Sidebar />

            <div className="container mx-auto flex flex-col md:px-10">
              <h1 className="text-3xl md:text-4xl font-black mt-12 mb-4 mx-4 uppercase">
                Productos
              </h1>
              <div className="grid grid-cols-1 gap-1 md:gap-5 mb-16">
                {/* <div className="flex flex-row-reverse mr-6 my-2 md:my-0">
                  <button className="flex flex-row bg-gray-300/30 shadow-md p-2 items-center hover:text-green-500 hover:shadow-sm transition-all duration-200 justify-between rounded-xl">
                    <IoAdd className="h-6 w-6 px-0 ml-1" />
                    <span className="md:text-md text-sm mx-5">Agregar producto</span>
                  </button>
                </div> */}
                {data.productos.map((prod, i) => (
                  <CardProducto producto={prod} key={prod["productId"]} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
