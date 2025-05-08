import { Hero } from "./hero";
import about from "../../../public/about-1.png"
import about2 from "../../../public/about-2.png"
import Image from "next/image";

export default function About(){
    return(
        <main>
            <section className="bg-amber-100 py-16" >
                <div className="container mx-auto grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                   
                   
                   
                   
                    <div className="relative">
                        
                        <div className="relative w-full h-[400px] overflow-hidden rounded 3x1">
                                <Image
                                src={about}
                                quality={100}
                                className="object-cover hover:scale-110 duration-300"
                                alt="animais"
                                fill/>
                        </div>
                        
                        <div className="absolute w-40 h-40 right-4 -bottom-8 border-4 overflow-hidden rounded-lg border-white">
                                <Image
                                src={about2}
                                quality={100}

                                alt="animais"
                                fill/>
                        </div>
                    </div>
                    <div className="space-y-6">
                        <h2 className="text4x1 font-bold">Sobre</h2>

                    </div>
                
                </div>   
            </section>
        </main>
    )
}