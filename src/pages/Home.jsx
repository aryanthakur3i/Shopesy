import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../redux/productsSlice";
import Product from "./Product";
import { Link } from "react-router-dom";
import Category from "./Category";
import heroimg from "../assets/heroimg.jpeg";
import FAQ from "../Components/FAQ";

const Home = () => {
  const dispatch = useDispatch();
  // get prduct data aand loading error states from redux
  const { data, isLoading, error } = useSelector((state) => state.products);
  // fetch product when the  home page is loaded
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  //create a unique list of category from the fetched product

  const categories = [...new Set(data.map((product) => product.category))];

  return (
    <>
      {/* hero */}
      <section
        className="min-h-[400px] md:min-h-[500px] bg-cover bg-center bg-no-repeat  flex item-center px-5 sm:px-8 md:px-10 py-12 relative"
        style={{ backgroundImage: `url(${heroimg})` }}
      >
        <div className="max-w-7xl mx-auto w-full">
          <p className="text-gray-500 mb-3 text-sm md:text-base">
            Welcome to <span className="text-red-500 font-bold text-lg">S</span>
            hopesy
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold max-w-xl">
            Discover Products you'll Love
          </h1>
          <p className="text-gray-600 mt-5 max-w-lg text-sm md:text-base">
            Explore our collection of quality products at amazing prices.
          </p>
          <Link
            to="/products"
            className=" inline-block mt-7 bg-[#564500] text-white px-7 py-3 rounded-xl hover:bg-gray-900"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/*Categories*/}

      <section className="max-w-7xl mx-auto px-5 md:px-6 py-10 md:py-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          Shop by Categories
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          {categories.map((category) => (
            <Link
              key={category}
              to={`/category/${encodeURIComponent(category)}`}
            >
              <div
                key={category}
                className="bg-gray-100 p-8 rounded-xl text-center hover:shadow-lg transition cursor-pointer"
              >
                <h3 className="font-semibold capitalize text-sm md:text-base">
                  {category}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured products */}

      <section className="max-w-7xl mx-auto px-5 md:px-6 pb-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Featured Products
        </h2>
        <Product limit={4} />
      </section>
          <FAQ/>
   
    </>
  );
};

export default Home;
