import React from "react";

const PaymentMethod = ({ paymentMethod, setPaymentMethod, error }) => {
  // update selected payment method
  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
  };
  return (
    <>
      {/* payment method selection */}
      <div className=" w-full bg-white rounded-2xl shadow mt-4 sm:mt-6 p-4 md:p-8">
        <h2 className=" text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-5">
          Payment Method
        </h2>

        {/* available payment option */}
        <div className="space-y-3">
          {/* cash on delivery */}
          <label className="flex items-center gap-3 border border-gray-300 p-3 sm:p-4  rounded-lg cursor-pointer hover:border-black transition">
            <input
              type="radio"
              name="payment"
              value="cod"
              checked={paymentMethod === "cod"}
              onChange={handlePaymentChange}
              className="w-4 h-4 shrink-0"
            />

            <span className="font-medium text-sm sm:text-base">
              Cash on Delivery
            </span>
          </label>

          {/* upi */}
          <label className="flex items-center gap-3 border border-gray-300 p-3 sm:p-4  rounded-lg cursor-pointer hover:border-black transition">
            <input
              type="radio"
              name="payment"
              value="upi"
              checked={paymentMethod === "upi"}
              onChange={handlePaymentChange}
              className="w-4 h-4 shrink-0"
            />

            <span className="font-medium text-sm sm:text-base">UPI</span>
          </label>

          {/* card */}
          <label className="flex items-center gap-3 border border-gray-300 p-3 sm:p-4  rounded-lg cursor-pointer hover:border-black transition">
            <input
              type="radio"
              name="payment"
              value="card"
              checked={paymentMethod === "card"}
              onChange={handlePaymentChange}
              className="w-4 h-4 shrink-0"
            />

            <span className="font-medium text-sm sm:text-base">
              Credit / Debit Card
            </span>
          </label>
        </div>

        {/* display paymeent validation error */}
        {error && <p className="text-red-500 text-sm mt-3">{error}</p>}
      </div>
    </>
  );
};

export default PaymentMethod;
