import Image from 'next/image'
import Link from "next/link";
import Cadastro from './pages/cadastro';
import Login from './pages/login';
import MenuLateral from './components/Menu-lateral/menu-lateral';

export default function Home() {
    return(
      <main>
        <MenuLateral/>
      </main>
    )
}
