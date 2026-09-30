import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/productsSlice";
import ProductCard from "../Components/ProductCard";
import { useSearch } from "../context/SearchContext";

const Product = ({ limit, products: productList }) => {
  // get the current search
  const { search } = useSearch();
  const dispatch = useDispatch();

  // get product sata and loading state from redux
  const data = useSelector((state) => state.products);

  // fetch product only when redux does not already contain products
  useEffect(() => {
    if (data.data.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, data.data.length]);

  const products = productList || data.data;

  // filtered product according to user search
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase()),
  );

  // limit the number of product
  const displayedProduct = limit
    ? filteredProducts.slice(0, limit)
    : filteredProducts;

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4 sm:gap-5 md:gap-6 lg:p-8 p-6 bg-gray-100">
        {data.isLoading ? (
          <h1>.....loading</h1>
        ) : data.error ?(
          //show erroe message when api request fail
          <div className="col-span-full text-center py-10">
            <h1 className="text-xl sm:text-2xl font-semibold text-red-500">
              Something went wrong
            </h1>
            <p className="text-gray-600 mt-2">
              We could'not load the products. Please try again later.
            </p>
          </div>
        ) : (
          displayedProduct.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })
        )}
      </div>
    </>
  );
};

export default Product;
