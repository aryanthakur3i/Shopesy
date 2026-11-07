import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Product from "../pages/Product";
import About from "../pages/About";
import { IoCartOutline , IoSearchOutline , IoMenu , IoClose} from "react-icons/io5";
import { useSelector } from "react-redux";
import WishlistIcon from "./WishlistIcon";
import SearchBar from "./SearchBar";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  //get cart item from the redux store
  const CartItem = useSelector((state) => state.cart.items);

  // calculate the total quantity of products in the cart
  const cartCount = CartItem.reduce((total, item) => total + item.quantity, 0);

  // get the currently user loggin from the local storage
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  // manage the mobile menu and search bar visibility
  const [isMenuOpen , setIsMenuOpen ] = useState(false)
  const [isSearchOpen , setIsSearchOpen ] = useState(false)

  // share styling  for deskyop navigation link
  const navLinkClass = ({isActive}) => 
    `whitespace-nowrap transition-colors ${isActive
      ? "border-b-2 border-red-500 font-semibold"
      : "text-black hover:text-red-700"
    }`;

    const CartIcon = ({ mobile = false }) => (
    <Link
      to="/cart"
      className="relative inline-flex shrink-0 items-center"
      aria-label={`Shopping cart with ${cartCount} items`}
    >
      <IoCartOutline className={mobile ? "h-6 w-6" : "h-7 w-7"} />
      <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1 text-xs text-white">
        {cartCount}
      </span>
    </Link>
  );
  return (
    <nav className="sticky top-0 z-50 w-full">
      <div className="bg-[#c8ac3ff6] shadow-md">

        {/* main navbar row */}
        <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  ">
        <div className=" flex  items-center justify-between gap-3 py-3">

            {/* logo section*/}   
            <Link to="/" className="shrink-0"
              onClick={() => {
                setIsMenuOpen(false)
                setIsSearchOpen(false)
              }}
            >
             
              <h1 className="font-bold text-2xl md:text-3xl">
                <span className="text-red-500">S</span>hopesy
              </h1>
            </Link>
          

          {/* desktop searchbar  section */}
          <div className=" hidden xl:block xl:w-56  2xl:w-64 shrink-0 xl:ml-75">
            <SearchBar />
          </div>

          {/* desktop navigation section*/}
          <div className=" hidden ml-auto shrink-0 items-center gap-4 xl:flex 2xl:gap-6 ">
            
              {/* home navigation link */}
              <NavLink
                to={"/"}
                className={navLinkClass}
              >
                Home
              </NavLink>

              {/* product navigation link */}
              <NavLink
                to={"/products"}
                className={navLinkClass}
              >
                Products
              </NavLink>

              {/* about navigation link */}
              <NavLink
                to={"/about"}
                className={navLinkClass}
              >
                About
              </NavLink>

              {/* contact navigation link */}
              <NavLink
                to={"/contact"}
                className={navLinkClass}
              >
               Contact
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
                  className={navLinkClass}
                >
                  SignUP
                </NavLink>
              )}
              
              </div>

            {/* search , wishlist , cart and menu icons */}
            <div className="ml-auto flex shrink-0 items-center gap-3 xl:hidden">

              {/* mobile search toogle */}
              <button 
                type="button"
                className="shrink-0 text-2xl "
                aria-label={isSearchOpen ? " Close search" : "Open search"}
                aria-expanded={isSearchOpen}
                onClick={() => {setIsSearchOpen((open) => !open)
                  setIsMenuOpen(false)
                }}
              >
                {isSearchOpen ? <IoClose /> : <IoSearchOutline />}
              </button>
            </div>

            {/* whishlist icon */}
            <WishlistIcon />

            <CartIcon mobile />

            {/* Mobile humburger toogle */}
            <button
             type="button"
             className="shrink-0 text-2xl xl:hidden"
             aria-label={isMenuOpen ? "Close menu " : "Open menu"}
             aria-expanded={isMenuOpen}
             onClick={() => {setIsMenuOpen((open) => !open)
              setIsSearchOpen(false)
             }}
            >
              {isMenuOpen ? <IoClose /> : <IoMenu />}
            </button>
          </div>
        </div>

        {/* expandable mobile search */}
        {isSearchOpen && (
          <div className="xl:hidden pb-3">
            <SearchBar/>
            </div>
        )}
      </div>

      {/* Mobile navigation menu */}
      <div className="xl:hidden">
      <MobileMenu
      isOpen={isMenuOpen}
      onClose={() => setIsMenuOpen(false)}
      currentUser={currentUser}
      />
      </div>
    </nav>
  );
};

export default Navbar;
