import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import WishlistButton from "../Components/WishlistButton";
import AddToCartButton from "../Components/AddToCartButton";

const ProductDetail = () => {
  // get the product id from URL
  const { id } = useParams();

  const { data, isLoading } = useSelector((state) => state.products);

  // URL ki id ke according product find karo
  const product = data.find((item) => item.id === Number(id));

  // show loading state while product data is been fetch
  if (isLoading) {
    return <h1 className="text-center text-2xl mt-20">Loading...</h1>;
  }

  // handle invalid products id
  if (!product) {
    return <h1 className="text-center text-2xl mt-20">Product not found</h1>;
  }

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {/* Product Image */}
        <div className="bg-gray-100 rounded-xl flex items-center justify-center p-6 sm:p-8 md:p-10">
          <img
            src={product.image}
            alt={product.title}
            className=" h-72 sm:h-80 md:h-[400px] lg:h-[450px] w-full object-contain"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-center">
          {/* Category */}
          <p className="text-gray-500 capitalize mb-2 sm:mb-3 text-sm sm:text-base">
            {product.category}
          </p>

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
            {product.title}
          </h1>

          {/* Rating */}
          <div className="flex flex-wrap items-center gap-2 mt-4 sm:mt-5">
            <span className="text-yellow-500 text-base sm:text-lg">
              ⭐ {product.rating?.rate}
            </span>

            <span className="text-gray-500 text-sm sm:text-base">
              ({product.rating?.count} reviews)
            </span>
          </div>

          <div className="mt-4">
            <WishlistButton product={product} />
          </div>

          {/* Price */}
          <p className="text-2xl sm:text-3xl font-bold text-green-700 mt-5 sm:mt-6">
            ${product.price}
          </p>

          {/* Description */}
          <p className="text-gray-600 leading-6 sm:leading-7 mt-5 sm:mt-6 text-sm sm:text-base">
            {product.description}
          </p>

          {/* Add to Cart */}
          <div className="mt-5 sm:mt-6">
            <AddToCartButton product={product} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
