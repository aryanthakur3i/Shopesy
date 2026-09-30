import React from "react";
import { Link } from "react-router-dom";

const OrderSucces = () => {
  return (
    <>
      {/* order success section */}
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
        <div className="bg-white rounded-2xl shadow-md p-10 text-center max-w-md w-full">
          {/*  success icon */}
          <div className="text-6xl mb-5">🎉</div>
          {/* order success heading */}
          <h1 className="text-3xl font-bold text-green-700">
            Order Placed Successfully !!
          </h1>
          <p className="text-gray-600 mt-4">
            Thank you for shoping with Shopesy. Your order has been placed
            Successfully.
          </p>
          {/* navigation option after placing order */}
          <div className="mt-6 space-y-3">
            {/* navigate back to home page */}
            <Link
              to="/"
              className="block w-full bg-green-900 text-white py-3 rounded-xl hover:bg-gray-900 transition"
            >
              Continue Shopping
            </Link>
            {/* navigate back to product page */}
            <Link
              to="/products"
              className="block w-full border border-gray-300 py-3 rounded-xl hover:bg-gray-100 transition"
            >
              View Products
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderSucces;
