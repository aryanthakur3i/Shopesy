import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/productsSlice";
import ProductCard from "../Components/ProductCard";


const Product = ({ limit , products: productList }) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.products);
  useEffect(() => {
    if(data.data.length === 0){
    dispatch(fetchProducts());
    }
  }, [ dispatch, data.data.length]);

  const products = productList || data.data;

  const displayedProduct = limit ? products.slice(0,limit) : products;
 

  return (
    <>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 bg-gray-100">
      {data.isLoading ? (
        <h1>.....loading</h1>
      ) : (
       displayedProduct.map((product) => {
          return (
           <ProductCard key={Product.id}
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
