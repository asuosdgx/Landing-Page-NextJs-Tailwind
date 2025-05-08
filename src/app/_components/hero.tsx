import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr"
import dogImg from '../../../public/dog.webp'
import catImg from '../../../public/cat-hero.png'
import Image from "next/image"

export function Hero(){
    return(
    <section className="bg-amber-700 text-white relative overflow-hidden">
        <div>
            <Image
            src={dogImg}
            alt="dog"
            fill
            sizes="100vw"
            priority
            className="object-cover opacity-60 lg:hidden"
            />
            <div className="absolute inset-0 bg-black opacity-40 md:hidden"></div>
        </div>
        
        <div className="container mx-auto pt-16 pb-16 md:pb-0 px-4 relative">
            <article className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                
                <div className="space-y-6 ">
                    <div className="text-3xl md: text4-1 font-bold leading-10">
                        <h1>Seu Pet merece carinho e atenção especial</h1>
                        <p className="lg:text-lg">Aqui temos os melhores serviços para garantir o bem estar e a felicidade do seu amigo.</p>
                    </div>
                    
                    <div >
                    
                    <a href="#"
                    className="bg-green-700 px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit gap-2"
                    >
                    <WhatsappLogo className="w-5 h-5"/>
                        Contato WhatsApp</a>
                
                    </div>
                    <div className="mt-8 ">
                        <p className="text-sm mb-4">
                            <b className="bg-black text-amber-50 px-2 py-1 rounded-md">5%</b> de desconto na primeira compra.
                        </p>
                    </div>
                    
                    <div className="flex mt-4">
                       <div className="hidden w-32 lg:block"> 
                        <Image
                            src={catImg}
                            alt="foto do gato"
                            quality={100}
                            className="object-fill"
                            />
                        </div>
                    </div>
                </div>
                <div className="hidden md:block h-full relative" >
                    <Image src={dogImg}
                    alt="foto do dog"
                    className="object-contain"
                    fill
                    sizes="(max-width: 768px) 0vw, 50vw"/>
                </div>
                
                </article>
            </div>
                
       </section>
    )
}