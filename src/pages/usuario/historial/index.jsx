import Layout from "@/components/common/layout";
import CardFunkoHistorial from "@/components/historial-compras/CardFunkoHistorial";

const compras = [
  [{
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
    ]
  }],

  [{
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
    ]
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
    ]
  }],
  [{
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
    ]
  }]
]


export default function HistorialPedidos() {
  return (
    <>
      <Layout>
        <div className="bg-gradient min-h-screen">
            <div className="container mx-auto flex flex-col">
              <h1 className="text-3xl md:text-4xl font-black mt-12 mb-4 mx-4 uppercase">Historial de compras</h1>
              <div className="grid grid-cols-1 gap-1 md:gap-5 mb-16">
                {compras.map((compra, i) => (
                  <CardFunkoHistorial compra={compra} key={i} />
                ))}
              </div>
            </div>
        </div>
      </Layout>
    </>
  );
}
