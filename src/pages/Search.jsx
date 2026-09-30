import React from "react";
import { useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import ProductCard from "../Components/ProductCard";
import Product from "./Product";

const Search = () => {
  // get the search query from URL
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query") || "";

  // get all product from redux store
  const products = useSelector((state) => state.products.data);

  // filtered product according search queery
  const filteredProduct = products.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase()),
  );
  return (
    <>
      <div className="max-w-7xl mx-auto p-6">
        {/* search result heading */}
        <h1 className="text-3xl font-bold mb-8">
          Search results for "{query}"
        </h1>
        {/* show message when no product found */}
        {filteredProduct.length === 0 ? (
          <p className="text-gray-800">No product found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* render each matching product */}
            {filteredProduct.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Search;
