import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/CartSlice";

const AddToCartButton = ({product}) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <>
      <button
        onClick={handleAddToCart}
        className="w-full  mt-4 bg-green-900 text-white py-2 rounded-xl
      hover:bg-gray-800 transition"
      >
        Add to Cart
      </button>
    </>
  );
};

export default AddToCartButton;
