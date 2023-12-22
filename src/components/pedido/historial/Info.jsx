import Item from "./Item";

const items = [
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
];

export default function Info() {
  return (
    <>
      <div className="flex flex-col gap-4">
        {items.map((producto) => (
          <Item producto={producto} key={producto.id} />
        ))}
      </div>
    </>
  );
}
