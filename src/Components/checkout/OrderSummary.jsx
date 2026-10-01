import React from "react";
import { useSelector } from "react-redux";


const OrderSummary = ({ onPlaceOrder}) => {
  

  // get cart items from the redux store
  const cartItems = useSelector((state) => state.cart.items);

  // calculate the subtotal base on product price and quantity
  const subTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  // delivery fee
  const deliveryFee = subTotal > 0 ? 50 : 0;

  // final total
  const total = subTotal + deliveryFee;

 
  
  return (
    <>
      {/* order summary card */}
      <div className=" w-full bg-white p-4 sm:p-6 md:p-7 rounded-2xl shadow h-fit">
        <h2 className="text-xl sm:text-2xl md:text-3xl  font-semibold  mb-5 sm:mb-6">
          Order Summary
        </h2>

        {/* display all product added to the cart  */}
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-start justify-between gap-3 sm:gap-4 "
            >
              {/* product information */}
              <div className="min-w-0">
                <p className="font-medium text-sm sm:text-base break-words">
                  {item.title}
                </p>

                {/* display quantity of product */}
                <p className="text-gray-700 text-sm mt-1">
                  Qty : {item.quantity}
                </p>
              </div>

              {/* display price of the product */}
              <p className="font-semibold text-sm sm:text-base whitespace-nowrap shrink-0">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
          ))}
        </div>

        <hr className="my-5" />

        {/* display final total  */}
        <div className="flex justify-between items-center text-lg sm:text-xl font-bold">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>

        {/* place order button */}
        <button
          onClick={onPlaceOrder}
          className="w-full bg-green-700 text-white py-3 sm:p-3.5 rounded-lg  mt-5 sm:mt-6  hover:bg-green-900"
        >
          Place Order
        </button>
      </div>
    </>
  );
};

export default OrderSummary;
