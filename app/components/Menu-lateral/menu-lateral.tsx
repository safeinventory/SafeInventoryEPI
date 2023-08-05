import Image from "next/image";
import Link from "next/link";


export default function MenuLateral() {
    
    return(
        <main>
            <div className="menuLateral">
                <div className="bg-azul justify-start items-start inline-flex pb-[45.3%]">
                    <div className="flex relative top-24 left-16">
                        <Image className="" src={"/../public/Ellipse4.png"} width={70} height={70} alt=""/>
                        <h3 className="pt-3 pl-2 font-semibold text-lg">Jorge Miguel</h3>
                        <p className="relative top-8 right-[115px] font-light text-base">RH</p>
                    </div>

                    <div>
                        <div className="relative right-[150px] top-[300px] pb-10">
                            <Link className="gap-2 flex flex-row" href='/../pages/caixa-de-entrada/caixa-de-entrada'>                                                           
                                <Image src={"/../public/icons/caixa-de-entrada.png"} width={40} height={40} alt=""/>
                                <h3 className="pt-1 font-semibold text-lg">Caixa de Entrada</h3>                            
                            </Link>
                        </div>

                        <div className="relative right-[150px] top-[300px] pb-10">
                            <a className="gap-2 flex flex-row" href="">
                                <Image className="" src={"/../public/icons/lines.png"} width={40} height={40} alt=""/>
                                <h3 className="pt-2 font-semibold text-lg ">Estatística</h3>
                            </a>
                        </div>

                        <div className="relative right-[150px] top-[300px] pb-10">
                            <a className="gap-2 flex flex-row" href="">
                                <Image className="" src={"/../public/icons/calendar.png"} width={40} height={40} alt=""/>
                                <h3 className="pt-1 font-semibold text-lg">Calendário</h3>
                            </a>
                        </div>

                        <div className="relative right-[150px] top-[300px]">
                            <a className="gap-2 flex flex-row" href="">
                                <Image className="" src={"/../public/icons/rh.png"} width={40} height={40} alt=""/>
                                <h3 className="pt-1 font-semibold text-lg">RH</h3>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}