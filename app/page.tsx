import Image from 'next/image'
import Link from "next/link";
import Cadastro from './pages/cadastro/page';
import Login from './pages/login/page';
import MenuLateral from './components/Menu-lateral/menu-lateral';

export default function Home() {
    return(
      <main>
        <MenuLateral/>
      </main>
    )
}
