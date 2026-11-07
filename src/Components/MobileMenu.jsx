import React from "react";
import { NavLink } from "react-router-dom";

const MobileMenu = ({ isOpen , onClose , currentUser }) => {
    if(!isOpen) return null;

    const menuLinkClass = ({ isActive}) => 
        `block rounded-lg px-3 py-2 transition-colors ${
            isActive
            ? "bg-gray-100 font-semibold text-red-600"
            : "text-black hover:bg-gray-100"
        }`;

    return (
        <>
        <div className="xl:hidden absolute right-4 top-full z-50 w-56  rounded-xl border border-gray-200 bg-gray-100 shadow-lg ">
            <div className="px-4 py-4 space-y-2">

                {/* home */}
                <NavLink
                to="/"
                onClick={onClose}
                className={menuLinkClass}
                >
                    Home
                </NavLink>

                {/* products */}
                <NavLink
                to="/products"
                onClick={onClose}
                className={menuLinkClass}
                >
                    Products
                </NavLink>

                {/* about */}
                <NavLink
                to="/about"
                onClick={onClose}
                className={menuLinkClass}
                >
                    About
                </NavLink>

                {/* contact */}
                <NavLink
                to="/contact"
                onClick={onClose}
                className={menuLinkClass}
                >
                    Contact
                </NavLink>

                {/* login / current user */}
                {currentUser ? (
                    <div className=" break-words px-3 py-2 font-semibold">
                        {currentUser.name}
                        </div>
                ):(
                <NavLink
                to="/signup"
                onClick={onClose}
                className={menuLinkClass}
                >
                    SignUp
                </NavLink>
                )}
            </div>
        </div>

        </>
    )
}

export default MobileMenu;

