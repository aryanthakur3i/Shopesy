import React from "react";
import { FaHeart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const WishlistIcon = () => {
  // get all wishlist item from the redux store
  const wishlistItems = useSelector((state) => state.wishlist.items);

  // get the total number of item in the wishlist
  const wishlistCount = wishlistItems.length;
  return (
    <>
      {/* navigate to the wishlist page */}
      <Link to="/wishlist" className="relative">
        {/* wishlist heart icon */}
        <FaHeart className="text-2xl text-red-500" />
        {/* display the number of the wishlist item */}
        <span className="bg-red-5 rounded-full absolute -top-3 -right-3 text-white text-sm">
          {wishlistCount}
        </span>
      </Link>
    </>
  );
};

export default WishlistIcon;
