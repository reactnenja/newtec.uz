import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./components/layout";
import EmailHosting from "./pages/EmailHosting";
import Home from "./pages/Home";
import Hosting from "./pages/Hosting";
import Login from "./pages/Login";
import RegistrationPage from "./pages/Registerations";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/hosting" element={<Hosting />} />
                    <Route path="/email-hosting" element={<EmailHosting />} />
                </Route>
                <Route path="/register" element={<RegistrationPage />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    );
};

export default App;
