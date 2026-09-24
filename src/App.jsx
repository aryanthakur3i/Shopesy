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
import ProductsDetail from "./pages/ProductsDetail";
import Category from "./pages/Category";
import Wishlist from "./pages/Wishlist";
import { SearchProvider } from "./context/SearchContext";
import Search from "./pages/Search";

const App = () => {
  return (
    <>
      <SearchProvider>
        <BrowserRouter>
          <TopBar />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/products" element={<Product />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="/signin" element={<SignIn />}></Route>
            <Route path="/wishlist" element={<Wishlist />}></Route>
            <Route path="/product/:id" element={<ProductsDetail />}></Route>
            <Route path="/category/:category" element={<Category />}></Route>
             <Route path="/search" element={<Search />}></Route>
          </Routes>
        </BrowserRouter>

        <Footer />
      </SearchProvider>
    </>
  );
};

export default App;
