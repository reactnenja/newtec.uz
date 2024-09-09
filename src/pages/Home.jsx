import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../components/header";
import Main from "../components/main";
import "../i18n.jsx";
const Home = () => {
    return (
        <>
            <ToastContainer />
            <Header />
            <Main />
        </>
    );
};

export default Home;
