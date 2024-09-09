import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./components/layout";
import EmailHosting from "./pages/EmailHosting";
import Home from "./pages/Home";
import Hosting from "./pages/Hosting";
import Login from "./pages/login";
import RegistrationPage from "./pages/Registerations";
const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<RegistrationPage />} />
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/hosting" element={<Hosting />} />
                    <Route path="/email-hosting" element={<EmailHosting />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default App;
