import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/CartSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch()

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();

    dispatch(addToCart(product));
  }
  return (
    <>
      <Link to={`/product/${product.id}`} className="block">
        <div className="bg-white rounded-2xl shadow-md p-4 hover:shadow-2xl transition">
          {/*Image */}

          <div className="h-60 flex items-center justify-center">
            <img
              src={product.image}
              alt={product.title}
              className="h-full w-full object-contain"
            />
          </div>

          {/*Title */}

          <h1 className="font-semibold text-lg mt-4 truncate">
            {product.title}
          </h1>

          {/*Descricption] */}

          <p className="text-gray-500 text-sm mt-2 line-clamp-2">
            {product.description}
          </p>

          {/*Price & Rating */}
          <div className="flex justify-between items-center mt-4">
            <span className="font-bold text-xl">${product.price}</span>

            <span className="text-yellow-500 ">⭐{product.rating?.rate}</span>
          </div>

          {/*Button */}

          <button
            onClick={handleAddToCart}
            className="w-full mt-4 bg-green-900 text-white py-2 rounded-r-2xl hover:bg-gray-900"
          >
            Add to Cart
          </button>
        </div>
      </Link>
    </>
  );
};

export default ProductCard;
