import Image from 'next/image'

import Link from "next/link";

export default function Login() {
    return(
        <main>
            <div className='cadastro'>
                <div className='bg-azul'>
                    <Image src={'/../public/images/epi-fundo.png'} width={900} height={1000} alt=''/>
                    <div className='relative bottom-20'>
                        <Image className='relative left-[1340px] bottom-[720px]' src={'/../public/icons/card.png'} width={55} height={60} alt=''/>
                        <h2 className='text-4xl font-semibold relative left-[1315px] bottom-[700px]'>Login</h2>

                        <input className='bg-amareloI text-black relative left-[1200px] bottom-[650px] p-4 rounded-md' placeholder='Digite seu Email...'/>

                        <input className='bg-amareloI text-black relative left-[875px] bottom-[580px] p-4 rounded-md' placeholder='Digite sua Senha...'/>
                        
                        <button className='bg-amarelo text-black relative left-[547px] bottom-[517px] py-2 px-[140px] rounded-md'>Entrar</button>
                    </div>
                    <div>
                        <p className='relative left-[1250px] bottom-[360px]'>Não tem Conta? <a className='text-amarelo' href="">Criar Conta</a></p>
                    </div>
                </div>
            </div>
        </main>
    )
}
