import Image from "next/image";
import AccordionFaq from "@/components/home/faq/accordion";

export default function Faq() {
  return (
    <>
      <div className="bg-faqGradient">
        <div className="container mx-auto flex flex-col md:flex-row justify-center items-center md:items-start gap-10 md:gap-36 py-12 md:py-20">
          <Image
            src="/home/funkos/wish-king.png"
            width={0}
            height={0}
            sizes="100vw"
            className="w-1/3 md:w-[15%] my-auto -order-1 md:order-1 drop-shadow-lg"
            alt="Funko Star Wars"
          />
          <div className="flex flex-col px-4 order-2">
            <h3 className="text-xl md:text-3xl font-semibold">
              Preguntas frecuentes
            </h3>
            <AccordionFaq />
          </div>
        </div>
      </div>
    </>
  );
}
