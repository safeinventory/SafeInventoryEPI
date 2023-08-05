import Image from 'next/image'

import Link from "next/link";

export default function Cadastro() {
    return(
        <main>
            <div className='cadastro'>
                <div className='bg-azul'>
                    <Image src={'/../public/images/epi-fundo.png'} width={900} height={1000} alt=''/>
                    <div className='relative bottom-20'>
                        <Image className='relative left-[1340px] bottom-[720px]' src={'/../public/icons/card.png'} width={55} height={60} alt=''/>
                        <h2 className='text-4xl font-semibold relative left-[1280px] bottom-[700px]'>Cadastro</h2>

                        <input className='bg-amareloI text-black relative left-[1200px] bottom-[650px] p-4 rounded-md' placeholder='Digite seu Nome...'/>

                        <input className='bg-amareloI text-black relative left-[875px] bottom-[580px] p-4 rounded-md' placeholder='Digite seu Email...'/>

                        <input className='bg-amareloI text-black relative left-[547px] bottom-[510px] p-4 rounded-md' placeholder='Digite sua Senha...'/>

                        <input className='bg-amareloI text-black relative left-[223px] bottom-[440px] p-4 rounded-md' placeholder='Qual é a sua Área?'/>
                        
                        <button className='bg-amarelo relative text-black right-[100px] bottom-[380px] py-2 px-[110px] rounded-md'>Cadastre-se</button>
                    </div>
                    <div>
                        <p className='relative left-[1280px] bottom-[360px]'>Já tem Conta? <a className='text-amarelo' href="">Entrar</a></p>
                    </div>
                </div>
            </div>
        </main>
    )
}
