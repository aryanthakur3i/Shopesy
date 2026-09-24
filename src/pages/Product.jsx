import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/productsSlice";
import ProductCard from "../Components/ProductCard";
import { useSearch } from "../context/SearchContext";


const Product = ({ limit , products: productList }) => {
  const { search } = useSearch()
  const dispatch = useDispatch();
  const data = useSelector((state) => state.products);
  useEffect(() => {
    if(data.data.length === 0){
    dispatch(fetchProducts());
    }
  }, [ dispatch, data.data.length]);

  const products = productList || data.data;

  const filteredProducts = products.filter((product) => 
  product.title.toLowerCase().includes(search.toLowerCase()))

  const displayedProduct = limit ? filteredProducts.slice(0,limit) : filteredProducts;
 

  return (
    <>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 bg-gray-100">
      {data.isLoading ? (
        <h1>.....loading</h1>
      ) : (
       displayedProduct.map((product) => {
          return (
           <ProductCard key={product.id}
           product={product}
           />
            
          );
        })
      )}
    
   
   </div>
          
          
           
   </>
  );
};

export default Product;
