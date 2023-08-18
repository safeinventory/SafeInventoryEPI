import Link from "next/link"
import MenuLateral from "@/app/components/Menu-lateral/menu-lateral"

export default function Dashboard() {
    return(
      <main>
        <div>
            <MenuLateral />
            <div className="breadcrumb">
                <div className="">
                    <Link className="text-black text-lg font-medium relative bottom-[1150px] left-[450px]" href='/pages/dashboard'>Dashboard</Link>
                </div>
            </div>
        </div>
      </main>
    )
}