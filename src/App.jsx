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
import Checkout from "./pages/Checkout";
import OrderSucces from "./pages/OrderSucces";
import ScrollToTop from "./Components/ScrollToTop";
import PaymentMethod from "./Components/checkout/PaymentMethod";

const App = () => {
  return (
    <>
      {/* provides search state to the entire application */}
      <SearchProvider>
        {/* handle client-side routing */}
        <BrowserRouter>
          {/* top bar */}
          <TopBar />

          {/* Main navigation bar */}
          <Navbar />

          {/* Automatically scroll to the top when route chnage */}
          <ScrollToTop />

          {/* Application routes */}
          <Routes>
            {/* Home page */}
            <Route path="/" element={<Home />}></Route>

            {/* Product page */}
            <Route path="/products" element={<Product />}></Route>

            {/* About page */}
            <Route path="/about" element={<About />}></Route>

            {/* Contact page */}
            <Route path="/contact" element={<Contact />}></Route>

            {/* Cart page */}
            <Route path="/cart" element={<Cart />}></Route>

            {/* SignUp page */}
            <Route path="/signup" element={<SignUp />}></Route>

            {/* SignIn page */}
            <Route path="/signin" element={<SignIn />}></Route>

            {/* Wishlist page */}
            <Route path="/wishlist" element={<Wishlist />}></Route>

            {/* product detail page using product id */}
            <Route path="/product/:id" element={<ProductsDetail />}></Route>

            {/* category page using category name */}
            <Route path="/category/:category" element={<Category />}></Route>

            {/* Search result page */}
            <Route path="/search" element={<Search />}></Route>

            {/* Checkout page */}
            <Route path="/checkout" element={<Checkout />}></Route>

            {/* Order success page */}
            <Route path="/order-success" element={<OrderSucces />}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </SearchProvider>
    </>
  );
};

export default App;
