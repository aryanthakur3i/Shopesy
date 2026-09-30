import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../Components/ProductCard";
import { removeFromWishlist } from "../redux/WishlistSlice";

const Wishlist = () => {
  // used to dispatch wishlist action from redux
  const dispatch = useDispatch();
  // get all wishlist item from redux store
  const wishlistItems = useSelector((state) => state.wishlist.items);

  // remove a product from wishlist by its id
  const handleRemove = (id) => {
    dispatch(removeFromWishlist(id));
  };
  return (
    <>
      {/* wishlist section main */}
      <div className="min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-8  py-6 sm:py-8 lg:py-10">
        <div className="max-w-7xl mx-auto">
          {/* wishlist page heading */}
          <h1 className="text-3xl font-bold mb-8">My Wishlist</h1>

          {/* show empty wishlist  */}
          {wishlistItems.length === 0 ? (
            <div className="bg-white rounded-xl p-6 sm:p-8 text-center">
              <p className="text-gray-600"> Your Wishlist is empty.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5  lg:gap-6">
              {/* render each wishlist product */}
              {wishlistItems.map((product) => (
                <div key={product.id}>
                  <ProductCard product={product} />
                  {/* remove from wishlist button */}
                  <button
                    onClick={() => handleRemove(product.id)}
                    className="w-full mt-3 bg-red-500 text-white py-2.5  rounded-xl 
                   hover:bg-red-700 transition"
                  >
                    Remove from wishlist
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Wishlist;
