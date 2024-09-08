import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import Header from "./components/header";
import Main from "./components/main";
import "./i18n.jsx";
import ScrollToTopButton from "./utils/topButtons.jsx";
const App = () => {
    return (
        <>
            <ToastContainer />
            <Header />
            <Main />
            <Footer />
            <ScrollToTopButton />
        </>
    );
};

export default App;
