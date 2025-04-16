import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Single from "./pages/Single.jsx";
import Layout from "./pages/Layout.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/details/:type/:uid" element={<Single />} />
                    <Route path="*" element={<h1>Not found!</h1>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
