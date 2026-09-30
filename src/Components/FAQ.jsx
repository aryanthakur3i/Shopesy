import React, { useState } from "react";

const FAQ = () => {
  // store the index of the currently open FAQ
  const [openIndex, setOpenIndex] = useState(null);

  // FAQ questiin and answer

  const faqs = [
    {
      question: "How can i create an account",
      answer:
        "Click on signup , enter yout name , email and password , then submit the form to create your account",
    },
    {
      question: "How can I place an order?",
      answer:
        "Browse the product , add your desired product to the cart , and proceed to checkout to place your order",
    },
    {
      question: "What payment methods are available ?",
      answer:
        "The checkout page currently provides Cash on delivery , UPI and card options",
    },
    {
      question: "Can i remove any product from my cart and wishlist",
      answer:
        "Yes , you can remove any product from cart and wishlist in any time do you want.",
    },
  ];

  // open or close FAQ item
  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <>
      <section className="bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* FAQ heading */}
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
              Frequently Asked Question
            </h2>

            <p className="text-gray-500 mt-2 text-sm sm:text-base ">
              Find answer to common question about Shopesy.
            </p>
          </div>

          {/* FAQ items */}
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border border-gray-300 rounded-xl overflow-hidden"
              >
                {/* FAQ question button */}
                <button
                  type="button"
                  onClick={() => handleToggle(index)}
                  className="w-full flex items-center justify-between gap-4 text-left  p-4 sm:p-5 font-semibold text-sm sm:text-base hover:bg-gray-100 transition"
                >
                  <span>{faq.question}</span>
                  {/* toggle icon */}
                  <span className="text-xl shrink-0">
                    {openIndex === index ? "-" : "+"}
                  </span>
                </button>

                {/* FAQ answer */}
                {openIndex === index && (
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-gray-600 text-sm sm:text-base leading-6">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
