import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "../Pages/Main";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home";
import About from "../Pages/About";
import SignUp from "../Pages/SignUp"
import Signin from "../Pages/Signin"
import Forgot from "../Pages/Forgot"
import Reset from "../Pages/Reset"
import Otp from "../Pages/Otp"

const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/otp" element={<Otp />} />



      </Route>
    </Routes>
  );
};

export default MainRoute;
