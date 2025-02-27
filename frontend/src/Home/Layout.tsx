import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Home from "./Home";
import Choose from "./Choose";
import Process from "./Process";
import Withus from "./Withus";
import Footer from "./Components/Footer";
import Loader from "./Components/Loader";

const Layout: React.FC = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <>
            {/* Loader */}
            {!isLoaded && <Loader onLoadComplete={() => setIsLoaded(true)} />}

            {/* Main Content */}
            <div className={`${isLoaded ? "block" : "hidden"}`}>
                <div className="">
                    <Navbar />
                    <hr />
                    <Home />
                </div>
                <Choose />
                <Process />
                <Withus />
                <Footer />
            </div>
        </>
    );
};

export default Layout;