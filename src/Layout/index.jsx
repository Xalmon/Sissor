import NavBar from "../components/navBar"
import Footer from "../components/footer"
import { Outlet } from "react-router-dom"

const Layout = () => {
    return (
        <div>
            <NavBar/>
            <Outlet/>
            <Footer/>
        </div>
    )
}
export default Layout
