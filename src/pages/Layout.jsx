import React from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <Navbar />
            <div className="container my-4">
                <Outlet />
            </div>
            <Footer />
        </>
    );
};

export default Layout;
