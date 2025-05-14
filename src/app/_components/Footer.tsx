import img1 from '../../../public/golden.png'
import img2 from '../../../public/natural.png'
import img3 from '../../../public/primier.png'
import img4 from '../../../public/whiskas.png'
import img5 from '../../../public/royal.png'
import img6 from '../../../public/.png'

import Image from 'next/image'


const marcas = [ 
    {
        name:'Golden', 
        logo: img1
    },
    {
        name:'Fórmula Natural', 
        logo: img2
    },
    {
        name:'Primier', 
        logo: img3
    },
    {
        name:'Whiskas', 
        logo: img4
    },
     {
        name:'Royal Canin', 
        logo: img5
    }
]
export default function Footer(){
    return(
        <section className='bg-[#E84c3D] py-16 text-white'>
            <div className='container mx-auto px-4'>

                <div className='border border-white/20 pb-8'>
                <h4 className='text-xl font-semibold mb-8 text-center'>Marcas que trabalhamos</h4>
                
                <div className='grid grid-cols-2 lg:grid-cols-6 gap-8'>
                    {marcas.map((item,index)=>(
                        <div key={index} className='bg-white p-4 rounded- flex items-center justify-center' >
                          
                        
                            <Image
                            alt={item.name}
                            src={item.logo}
                            width={100}
                            height={50}
                            quality={100}
                            style={{
                                width:'auto',
                                height: 'auto'

                            }}
                            className='object-contain'
                            />
                        </div>

                    ))}
                </div>


                </div>
               <footer className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap:8 mb-12 mt-5'>
                <div>
                    <h3 className='text-2x1 font-semibold mb-2'>Pet Shop Dev</h3>
                    <p className='mb-4'>Cuidando do seu melhor amigo com dedicação</p>
                    <a href="#"
                    className='bg-green-500 px-4 py-2 rounded-md'>Contato via WhatsApp

                    </a>
                </div>
                   
                   <div>
                    <h3 className='text-2x1 font-semibold mb-4 mt-2'>Contatos</h3>
                    <p >Email: email@email.com</p>
                    <p> Telefone: (34)XXXXXXXX</p>
                    <p >Endereço: Rua X, 354 email@email.com</p>
                   
                </div>
                
                <div>
                    <h3 className='text-2x1 font-semibold mb-4 mt-2'>Redes Sociais</h3>
                    <div className='flex gap-4'></div>
                   
                </div>
               
               </footer>

            </div>

        </section>
    )
}