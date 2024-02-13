import React from 'react';
import NavBar from "../component/NavBar";
// import Outlet from '../Outlet';
import Hero from "../component/hero";
import Paygate from "../component/paygate";
import Footer from "../component/footer";

const Layout = () => {
    return (
        <>
            <NavBar />
            {/* <Outlet/> */}
            <Hero />
            <Paygate />
            <Footer />
        </>
    );
}

export default Layout;
