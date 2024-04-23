import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "../Pages/Main";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home";
import About from "../Pages/About";



const MainRoute = () => {
  return (
    <Router>
    <Routes>
        <Route path="/" element={<Main />}>
            <Route path="" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            
        </Route>
    </Routes>
</Router>

  )
}

export default MainRoute
