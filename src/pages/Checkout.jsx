import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import CheckoutForm from "../Components/checkout/CheckoutForm";
import PaymentMethod from "../Components/checkout/PaymentMethod";
import OrderSummary from "../Components/checkout/OrderSummary";

const Checkout = () => {
  const navigate = useNavigate();

  // get cart item from redux
  const cartItems = useSelector((state) => state.cart.items);

  // store selected payment method
  const [paymentMethod, setPaymentMethod] = useState("");

  // store paayment validation error
  const [paymentError, setPaymentError] = useState("");

  // function call when user click place order
  const handlePlaceOrder = () => {
    // check whether cart has product

    if (cartItems.length === 0) {
      alert("Your cart is empty ! please add product before place order");
      return;
    }
    // check payment method is selected
    if (!paymentMethod) {
      setPaymentError("Please select a payment method");
    }

    //clear payment error when validation succes
    setPaymentError("");

    // redirect to order succes page
    navigate("/order-success");
  };
  return (
    <>
      <div className="min-h-screen bg-gray-100 p-4 sm:p-6">
        <div className="max-w-6xl mx-auto">
          {/* checkout page heading */}
          <h1 className=" text-2xl sm:text-3xl font-bold mb-8 sm:mb-8">Checkout</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* customer delivery information */}
            <div className="lg:col-span-2 space-y-6">
            <CheckoutForm />
            {/* available payment methods */}
            <PaymentMethod 
            paymentMethod = {paymentMethod}
            setPaymentMethod = {(value) => {
              setPaymentMethod(value)
              setPaymentError("")
            }}
            error={paymentError}
            />
          </div>

          {/*Right Side order summary*/}
          <div className="w-full">
          <OrderSummary onPlaceOrder = { handlePlaceOrder} />
        </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
