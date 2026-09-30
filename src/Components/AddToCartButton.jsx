import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/CartSlice";

const AddToCartButton = ({product}) => {
  // used to dispatch redux action
  const dispatch = useDispatch();

  // add the selected product to the cart
  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <>
    {/* add to cart button triger after user click */}
      <button
        onClick={handleAddToCart}
        className="w-full mt-3 sm:mt-4  bg-green-900 text-white py-2 sm:py-3 px-4  rounded-xl  text-sm sm:text-base
        font-medium
      hover:bg-gray-800 transition"
      >
        Add to Cart
      </button>
    </>
  );
};

export default AddToCartButton;
