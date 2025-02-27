import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Home";
import Choose from "./Choose";
import Process from "./Process";
import Withus from "./Withus";
import Footer from "./Components/Footer";


const Layout:React.FC = () => {
    return (
        <>
            <div className="">
                <Navbar />
                <hr/>
                <Home />
            </div>
            <Choose />
            <Process />
            <Withus />
            <Footer />
        </>
    )
}

export default Layout;
