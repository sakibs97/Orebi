import { Outlet } from "react-router-dom"
import Header from "../Header"
import Menu from "../Menu"
import Footer from "../Footer"


const RootLayout = () => {
    return (
        <>
            <Header />
            <Menu />
            <Outlet />
            <Footer />
        </>
    )
}

export default RootLayout