import React from "react";
import { Link } from "react-router-dom";
import WishlistButton from "./WishlistButton";
import AddToCartButton from "./AddToCartButton";


const ProductCard = ({ product }) => {

  
  
  return (
    <>
    <div className="bg-white rounded-2xl shadow-md p-3 sm:p-4 hover:shadow-2xl transition  flex flex-col">
      <Link to={`/product/${product.id}`} className="flex-1">
        
          {/*Image */}

          <div className="h-48 sm:h-52 md:h-56 lg:h-60  flex items-center justify-center">
            <img
              src={product.image}
              alt={product.title}
              className="h-full w-full object-contain"
            />
          </div>

          {/*Title */}
          <div className=" min-h-[56px] flex justify-between  items-start gap-2 mt-4">
          <h1 className="font-semibold text-base sm:text-lg line-clamp-2">
            {product.title}
          </h1>

          {/*wishlist */}

          <WishlistButton product={product}/>
          </div>

          {/*Descricption] */}

          <p className="text-gray-500 text-sm  mt-auto line-clamp-2 min-h-[40px]">
            {product.description}
          </p>

          {/*Price & Rating */}
          <div className="flex justify-between items-center gap-2 mt-4 min-h-[28px]">
            <span className="font-bold text-lg sm:text-xl">${product.price}</span>

            <span className="text-yellow-500 text-sm sm:text-base ">⭐{product.rating?.rate}</span>
          </div>

          {/*Button */}

         
        {/* add to cart button */}
      </Link>

      <AddToCartButton product={product}/>
      </div>
    </>
  );
};

export default ProductCard;
