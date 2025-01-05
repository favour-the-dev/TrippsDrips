import Navbar from "./Navbar"
import Footer from "./Footer"
import { Outlet } from "react-router-dom"
function Layout(){
    return (
        <>
        <main className="overflow-x-hidden h-[100dvh]">
            <Navbar/>
                <Outlet/>
            <Footer/>
        </main>
        </>
    )
}

export default Layout