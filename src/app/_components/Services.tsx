"use client"

import useEmblaCarousel from 'embla-carousel-react';
import {ChevronLeft, ChevronRight, Scissors, Syringe, CarTaxiFront, Hotel, Clock} from 'lucide-react'
import { WhatsappLogo } from '@phosphor-icons/react/dist/ssr';

const services = [
    {title:"Banho e Tosa",
     description:"Banho com produtos específicos para o ripo de pelagem, corte de unhas, limpeza das orelhas e tosa personalizada (higiênica ou estilizada).",
     duration: "1h",
     price:"R$: 50",
     icon: <Scissors/>,
     linkText: 'Olá vi no site sobre Banho e Tosa e gostaria de mais informações.'
    },
    {title:"Táxi Pet",
     description:"Serviço de transporte para levar e buscar os pets no petshop, clínicas veterinárias ou outros locais.",
     duration: "2h",
     price:"Verificar com o atendimento.",
     icon: <CarTaxiFront/>,
     linkText: 'Olá vi no site sobre Táxi Pet e gostaria de mais informações.'
    },
    {title:"Hotel",
     description:"Serviço de hospedagem para seu pet não se sentir soxzinho quando você não estiver por perto. Temos diárias e planos semanais.",
     duration: "Variável",
     price:"Verificar com o atendimento.",
     icon: <Hotel/>,
     linkText: 'Olá vi no site sobre Hotel e gostaria de mais informações.'
    }, 
    {title:"Vacinação",
     description:"Imunização completa do seu pet para uma saúde de ferro.",
     duration: "1h",
     price:"Verificar com o atendimento.",
     icon: <Hotel/>,
     linkText: 'Olá vi no site sobre a Vacinação e gostaria de mais informações.'
    }
]

export function Services(){

    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop:false,
        align: "start",
        slidesToScroll:1,
        breakpoints: {
            "(min-width: 768px)": {slidesToScroll: 3}
        }
    })

    function scrollPrev(){
        emblaApi?.scrollPrev();
    }
    function scrollNext(){
        emblaApi?.scrollNext();
    }
    return(
        <section className="bg-white py-16">
            <div className="container ms-auto px-4">
                <div>
                    <h2 className="text-4x1 font-bold mb-12">Nossos Serviços</h2>

                    <div className="relative">
                        <div className='overflow-hidden' ref={emblaRef}>
                            <div className='flex'>
                                {services.map((item,index)=>(
                                    <div key = {index} className='flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] px-3'>
                                        <article className='bg-[#1e293b] text-white rounded 2x1 p-6 space-y-4 h-full flex flex-col'>
                                            <div className='flex-1 flex items-start justify-between'>
                                                
                                                <div className='flex gap-3'>
                                                    <span className='text-2x1'>{item.icon}</span>
                                                <div>
                                                <h3 className='font-bold text-x1 my-1'>{item.title}</h3>
                                                <p className='text-sm text-gray-400 select-none'>
                                                    {item.description}
                                                </p>
                                                </div>
                                            </div>    


                                            </div>
                                            
                                            <div className='border-t border-gray-700 pt-4 flex items-center justify-between'>
                                                <div className='flex items-center gap-2 text-sm'>
                                                    <Clock className='w-5 h-5'/>
                                                    <span>{item.duration}</span>                                                
                                                    </div>
                                                    
                                                    <a href="#"
                                                    className='flex items-center justify-center gap-2 hover:bg-red-500 px-4 py-1 rounded-md duration-300'
                                                    >
                                                        <WhatsappLogo className='w-5 h-5'/> Entrar em contato
                                                    </a>
                                                    

                                            </div>

                                        </article>

                                    </div>
                                ))}

                            </div>

                        </div>
                        <button  onClick={scrollPrev} className='bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-1 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10'><ChevronLeft
                        className='w-6 h-6 text-gray-600 bg-white'/>
                        </button>
                        <button  onClick={scrollNext} className='bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute -right-6 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10'><ChevronRight
                        className='w-6 h-6 text-gray-600 bg-white'/>
                        </button>
                    </div>
                </div>

            </div>

        </section>
    )
}