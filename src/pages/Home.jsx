import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../redux/productsSlice";
import Product from "./Product";
import { Link } from "react-router-dom";
import Category from "./Category";

const Home = () => {
  const dispatch = useDispatch();

  const { data, isLoading, error } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  console.log("DATA:", data);
  console.log("LOADING:", isLoading);
  console.log("ERROR:", error);

  const categories = [
    ...new Set(data.map((product) => product.category)),
  ];


  return (
    <>
      {/* hero */}
      <section className="mib-h-[500px] bg-gray-100 flex item-center px-10">
        <div className="max-w-7xl mx-auto w-full">
          <p className="text-gray-500 mb-3">
            Welcome to <span className="text-red-500 font-bold text-lg">S</span>
            hopesy
          </p>
          <h1 className="text-5xl font-bold max-w-xl">
            Discover Products you'll Love
          </h1>
          <p className="text-gray-600 mt-5 max-w-lg">
            Explore our collection of quality products at amazing prices.
          </p>
          <button className="mt-7 bg-green-900 text-white px-7 py-3 rounded-xl hover:bg-gray-900">
            Shop Now
          </button>
        </div>
      </section >

      {/*Categories*/}

      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-8">Shop by Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {categories.map((category) => ( 
            <Link 
            key={category}
            to={`/category/${encodeURIComponent(category)}`}
            >
            <div key={category} className="bg-gray-100 p-8 rounded-xl text-center hover:shadow-lg transition cursor-pointer">
              <h3 className="font-semibold capitalize">{category}</h3>
            </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured products */}

      <section >
        <h2 className="font-medium capitalize">
          Featured Products
        </h2>
      <Product limit={4}/>
      </section>
    </>
  );
};

export default Home;
