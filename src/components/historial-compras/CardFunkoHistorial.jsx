import Image from "next/image";

export default function CardFunkoHistorial({compra}){
    return(
        
        <>
        <div className="bg-black/20 mt-2 p-4 flex flex-row rounded-[8px] justify-between align-center mx-4 border-[1px] border-[#282828]">
            
            
            {compra.map((producto) => {
                
                return(
                    <>
                        <div className="flex flex-row">
                        <div className="bg-white/20 px-6 md:h-32 md:p-6 rounded-[18px] flex items-center">
                            <Image
                                src={producto.images[0]}
                                width={0}
                                height={0}
                                sizes="100vh"
                                className="cursor-pointer w-12 md:w-20 mx-auto scale-[1.6] md:scale-[1.7] hover:scale-[1.87] transition-all drop-shadow-lg hover:drop-shadow-2xl"
                                alt={producto.title}
                            />
                        </div>
            
                        <div className="ml-4">
                            <div>
                                <a href="#">
                                    <h3 className="font-bold text-[0.9rem] max-w-[11.5rem]  sm:max-w-lg md:max-w-none md:text-xl uppercase">{producto.title}</h3>
                                </a>
            
                                <div className="text-xs mr-3 md:text-sm lg:text-base max-w-[16rem] sm:max-w-md md:max-w-lg lg:max-w-4xl">
                                    <p className="text-slate-300 line-clamp-2">{producto.description}</p>
                                </div>
                            
                                <div>
                                    <p className="mt-2 text-lg sm:text-xl md:text-2xl"><b>{producto.price}</b></p>
                                </div>
                            </div>
                        </div>
            
                    </div>
            
                    <div className="flex flex-col">
                        <button className="text-xs bg-chineseBlack rounded px-2">
                            Detalles
                        </button>
            
                        <button className="text-xs bg-palatinateBlue rounded px-2">
                            Volver a comprar
                        </button>
            
                    </div>
                </>    
                )})}
        
                

        </div>
       </>



    )
}