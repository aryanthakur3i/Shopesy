import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/productsSlice";


const Product = ({ limit }) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  
 

  return (
    <>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 bg-gray-100">
      {data.isLoading ? (
        <h1>.....loading</h1>
      ) : (
        data.data.slice(0,limit || data.data.length).map((products) => {
          return (
            <div
              key={products.id}
              className="bg-white rounded-xl shadow-md p-4 hover:shadow-2xl transition"
            >
              <div className="h-60 flex items-center justify-center">
              <img src={products.image} alt={products.title} className="h-full w-full  object-contain"  />
              </div>
              <h1 className="font-semibold text-lg  mt-4 truncate">{products.title}</h1>
              <p className="text-gray-500 text-sm mt-2 line-clamp-2">{products.description}</p>
              <div className="flex justify-between items-center mt-4">
             <span className="font-bold text-xl"> ${products.price}</span>
             <span className="text-yellow-500">⭐{products.rating?.rate}</span>
              </div>
              <button className="w-full mt-4 bg-green-900 text-white py-2 rounded-r-xl hover:bg-gray-800">Add to Cart</button>
            </div>
          );
        })
      )}
    </div>
   
   
          
          
           
   </>
  );
};

export default Product;
