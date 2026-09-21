import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import TopBar from "./Components/Topbar";
import Home from "./pages/Home";
import Product from "./pages/Product";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Navbar from "./Components/Navbar";
import SignUp from "./pages/login/SignUp";
import SignIn from "./pages/login/SignIn";
import Footer from "./Components/Footer";

const App = () => {
  
  return (
    <>
      

      <BrowserRouter>
      <TopBar />
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/products" element={<Product/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
          <Route path="/signup" element={<SignUp/>}></Route>
          <Route path="/signin" element={<SignIn/>}></Route>
          
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  );
};

export default App;
