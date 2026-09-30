import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../Components/CartItem";
import CartSummary from "../Components/CartSummary";

const Cart = () => {
  // get all cart items fromm redux store
  const CartItems = useSelector((state) => state.cart.items);
  return (
    <>
      <div className="min-h-screen bg-gray-100 p-4 sm:5 md:p-6 lg:p-8">
        <div className="max-w-7xl mx-auto">
          {/* shopping cart heading */}
          <h1 className=" text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">
            Shopping Cart
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6  lg:gap-8">
            {/*Cart Items */}

            <div className="lg:col-span-2 space-y-4 sm:space-y-5">
              {CartItems.length > 0 ? (
                CartItems.map((product) => (
                  <CartItem key={product.id} product={product} />
                ))
              ) : (
                <p className="text-gray-500 text-sm sm:text-base">
                  Your Cart is Empty.
                </p>
              )}
            </div>

            {/*Summuray */}
            <div>
              <CartSummary />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
