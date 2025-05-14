import { Hero } from "./Hero";
import about from "../../../public/about-1.png";
import about2 from "../../../public/about-2.png";
import Image from "next/image";
import { Check, MapPin, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

export default function About() {
    return (
        <main>
            <section className="bg-amber-100 py-16">
                <div className="container px-4 mx-auto ">
                    <div className=" grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="relative">
                            <div className="relative w-full h-[400px] overflow-hidden rounded 3x1">
                                <Image
                                    src={about}
                                    quality={100}
                                    className="object-cover hover:scale-110 duration-300"
                                    alt="animais"
                                    fill
                                />
                            </div>

                            <div className="absolute w-40 h-40 right-4 -bottom-8 border-4 overflow-hidden rounded-lg border-white">
                                <Image src={about2} quality={100} alt="animais" fill />
                            </div>
                        </div>
                        <div className="space-y-6 mt-10 ">
                            <h2 className="text-4x1 font-bold">Sobre</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                                non hic velit accusamus explicabo? Deleniti, nostrum
                                voluptatibus. Vero error vitae esse blanditiis iusto, impedit,
                                deleniti harum suscipit, aperiam debitis eligendi?
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-2">
                                    <Check className="text-red-500" />
                                    Aberto desde 2006
                                </li>
                                <li className="flex items-center gap-2">
                                    <Check className="text-red-500" />
                                    Modernas Instalações para o conforto do seu Pet.
                                </li>
                                <li className="flex items-center gap-2">
                                    <Check className="text-red-500" />
                                    Mais de 10 profissionais disponíveis.
                                </li>
                            </ul>

                            <div className="flex gap-2">
                                <a
                                    href="#"
                                    className="text-white flex items-center justify-center w-fit gap-2 px-4 py-4 bg-[#E84C3D] rounded-md"
                                >
                                    <WhatsappLogo className="w-5 h-5 text-white" />
                                    Contato via Whatsapp
                                </a>

                                <a
                                    href="#"
                                    className="text-white flex items-center justify-center w-fit gap-2 px-4 py-4 bg-[#f36310] rounded-md"
                                >
                                    <MapPin className="w-5 h-5 text-white" /> Endereço da Loja
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
