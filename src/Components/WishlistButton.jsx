import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { addTOWhishlist, removeFromWishlist } from "../redux/WishlistSlice";

const WishlistButton = ({ product }) => {
  // used to disptach wishlist item
  const dispatch = useDispatch();

  //get all wishlist item from the redux store
  const wishlistItems = useSelector((state) => state.wishlist.items);

  //check the product is already in the wishlist
  const iswishlisted = wishlistItems.some((item) => item.id === product.id);

  // add or remove the product from the wishlist
  const handleWishlist = () => {
    if (iswishlisted) {
      dispatch(removeFromWishlist(product.id));
    } else {
      dispatch(addTOWhishlist(product));
    }
  };
  return (
    <>
      <button onClick={handleWishlist} className="text-2xl">
        {/* show a filled heart for wishlist product */}
        {iswishlisted ? <FaHeart className="text-red-500" /> : <FaRegHeart />}
      </button>
    </>
  );
};

export default WishlistButton;
