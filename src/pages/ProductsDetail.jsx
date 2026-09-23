import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import WishlistButton from "../Components/WishlistButton";
import AddToCartButton from "../Components/AddToCartButton";

const ProductDetail = () => {
  const { id } = useParams();

  const { data, isLoading } = useSelector(
    (state) => state.products
  );

  // URL ki id ke according product find karo
  const product = data.find(
    (item) => item.id === Number(id)
  );

  if (isLoading) {
    return (
      <h1 className="text-center text-2xl mt-20">
        Loading...
      </h1>
    );
  }

  if (!product) {
    return (
      <h1 className="text-center text-2xl mt-20">
        Product not found
      </h1>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* Product Image */}
        <div className="bg-gray-100 rounded-xl flex items-center justify-center p-10">
          <img
            src={product.image}
            alt={product.title}
            className="h-[450px] w-full object-contain"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-center">

          {/* Category */}
          <p className="text-gray-500 capitalize mb-3">
            {product.category}
          </p>

          {/* Title */}
          <h1 className="text-4xl font-bold leading-tight">
            {product.title}
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-2 mt-5">
            <span className="text-yellow-500 text-lg">
              ⭐ {product.rating?.rate}
            </span>

            <span className="text-gray-500">
              ({product.rating?.count} reviews)
            </span>
          </div>
          <WishlistButton product={product}/>


          {/* Price */}
          <p className="text-3xl font-bold text-green-700 mt-6">
            ${product.price}
          </p>

          {/* Description */}
          <p className="text-gray-600 leading-7 mt-6">
            {product.description}
          </p>
          
          {/* Add to Cart */}
          <AddToCartButton product={product}/>

         

        </div>
      </div>

    </section>
  );
};

export default ProductDetail;