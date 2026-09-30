import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Product from "../pages/Product";
import About from "../pages/About";
import { IoCartOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import WishlistIcon from "./WishlistIcon";
import SearchBar from "./SearchBar";

const Navbar = () => {
  //get cart item from the redux store
  const CartItem = useSelector((state) => state.cart.items);

  // calculate the total quantity of products in the cart
  const cartCount = CartItem.reduce((total, item) => total + item.quantity, 0);

  // get the currently user loggin from the local storage
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  return (
    <nav className="sticky top-0 z-50">
      <div className="bg-[#c8ac3ff6] py-3  shadow-3xl">
        <div className=" max-w-6xl mx-auto px-4 flex  flex-wrap justify-between items-center gap-4 ">
          {/* logo section*/}
          <div className=" flex  items-center">
            <Link to={"/"}>
              <h1 className="font-bold md:text-3xl">
                <span className="text-red-500">S</span>hopesy
              </h1>
            </Link>
          </div>

          {/* Searchbar  section */}
          <div className=" w-full  md:w-64 order-3 md:order-none">
            <SearchBar />
          </div>

          {/* menu section*/}
          <nav className=" flex gap-3 md:gap-7 items-center">
            <ul className="flex flex-wrap gap-3 md:gap-7 items-center ytext-sm md:text-base">
              {/* home navigation link */}
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  `${isActive ? " border-b-3 transition-all border-red-500" : "text-black"} cursor-pointer`
                }
              >
                <li>Home</li>
              </NavLink>

              {/* product navigation link */}
              <NavLink
                to={"/products"}
                className={({ isActive }) =>
                  `${isActive ? " border-b-3 transition-all border-red-500" : "text-black"} cursor-pointer`
                }
              >
                <li>Products</li>
              </NavLink>

              {/* about navigation link */}
              <NavLink
                to={"/about"}
                className={({ isActive }) =>
                  `${isActive ? " border-b-3 transition-all border-red-500" : "text-black"} cursor-pointer`
                }
              >
                <li>About</li>
              </NavLink>

              {/* contact navigation link */}
              <NavLink
                to={"/contact"}
                className={({ isActive }) =>
                  `${isActive ? " border-b-3 transition-all border-red-500" : "text-black"} cursor-pointer`
                }
              >
                <li>Contact</li>
              </NavLink>

              {/* show username if login otherwise, show sign up */}
              {currentUser ? (
                <span className="font-semibold cursor-pointer">
                  {" "}
                  {currentUser.name}
                </span>
              ) : (
                <NavLink
                  to={"/signup"}
                  className={({ isActive }) =>
                    `${isActive ? " border-b-3 transition-all border-red-500" : "text-black"} cursor-pointer`
                  }
                >
                  <li>SignUP</li>
                </NavLink>
              )}
            </ul>

            {/* whishlist icon */}
            <WishlistIcon />

            {/* cart icon with item count */}
            <Link to={"/cart"} className="relative">
              <IoCartOutline className=" h-6 w-6 md:h-7 md:w-7" />

              {/* display the total number of cart item */}
              <span className=" bg-red-500 px-2 rounded-full absolute -top-3 -right-3 text-white">
                {cartCount}
              </span>
            </Link>
          </nav>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
