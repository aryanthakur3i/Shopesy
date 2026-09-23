import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Contact, MapPin } from "lucide-react";
import { FaCaretDown } from "react-icons/fa";
import Product from "../pages/Product";
import About from "../pages/About";
import { IoCartOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import WishlistIcon from "./WishlistIcon";


const Navbar = () => {

  const CartItem = useSelector((state) => state.cart.items)

  const cartCount = CartItem.reduce(
     (total,item) => total + item.quantity, 0
  );
  const Location = false;
  return (
    <nav className="sticky top-0 z-50">
      <div className="bg-[#a5cfbb] py-3  shadow-3xl">
        <div className=" max-w-6xl mx-auto flex justify-between items-center">
          {/* logo section*/}
          <div className=" flex gap-7 items-center">
            <Link to={"/"}>
              <h1 className="font-bold text-3xl">
                <span className="text-red-500">S</span>hopesy
              </h1>
            </Link>
            <div className=" flex gap-1 cursor-pointer text-gray-700 items-center">
              <MapPin className="text-red-500" />
              <span className="font-semibold">
                {Location ? <div></div> : "Add Address"}
              </span>
              <FaCaretDown />
            </div>
          </div>
          {/* menu section*/}
          <nav className="flex gap-7 items-center">
            <ul className="flex gap-7 items-center ">
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  `${isActive ? " border-b-3 transition-all border-red-500" : "text-black"} cursor-pointer`
                }
              >
                <li>Home</li>
              </NavLink>
              <NavLink
                to={"/products"}
                className={({ isActive }) =>
                  `${isActive ? " border-b-3 transition-all border-red-500" : "text-black"} cursor-pointer`
                }
              >
                <li>Products</li>
              </NavLink>
              <NavLink
                to={"/about"}
                className={({ isActive }) =>
                  `${isActive ? " border-b-3 transition-all border-red-500" : "text-black"} cursor-pointer`
                }
              >
                <li>About</li>
              </NavLink>
              <NavLink
                to={"/contact"}
                className={({ isActive }) =>
                  `${isActive ? " border-b-3 transition-all border-red-500" : "text-black"} cursor-pointer`
                }
              >
                <li>Contact</li>
              </NavLink>

              <NavLink
                to={"/signup"}
                className={({ isActive }) =>
                  `${isActive ? " border-b-3 transition-all border-red-500" : "text-black"} cursor-pointer`
                }
              >
                <li>SignUP</li>
              </NavLink>
            </ul>

            <WishlistIcon/>

            

            <Link to={'/cart'} className="relative">
            <IoCartOutline className=' h-7 w-7'/>
            <span className=" bg-red-500 px-2 rounded-full absolute -top-3 -right-3 text-white">{cartCount}</span>
            </Link>
          </nav>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
