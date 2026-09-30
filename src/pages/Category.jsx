import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Product from "./Product";

const Category = () => {
  // get the category value from URL
  const { category } = useParams();

  // get all value from redux store
  const products = useSelector((state) => state.products.data);

  //decode the category
  const selectedCategory = decodeURIComponent(category);

  // filtered product according to the selecting product
  const filteredProducts = products.filter(
    (product) => product.category === selectedCategory,
  );
  return (
    <>
      <div className="min-h-screen bg-gray-50 px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* display the selected category name */}
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold capitalize p-6">
            {selectedCategory}
          </h1>
          {/* display filtered product by category name */}
          <Product products={filteredProducts} />
        </div>
      </div>
    </>
  );
};

export default Category;
