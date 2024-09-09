import React from "react";
import { Outlet } from "react-router-dom";
import ScrollToTopButton from "../../utils/topButtons";
import Footer from "../footer";
import Navbar from "../header/navbar";

const Layout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <ScrollToTopButton />
            <Footer />
        </>
    );
};

export default Layout;
