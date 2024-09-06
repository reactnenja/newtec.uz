import React from "react";
import About from "./about";
import Blogs from "./blog";
import Contact from "./contact";
import Prices from "./prices";
import Teams from "./teams";

const Main = () => {
    return (
        <main>
            <About />
            <Blogs />
            <Prices />
            <Teams />
            <Contact />
        </main>
    );
};

export default Main;
