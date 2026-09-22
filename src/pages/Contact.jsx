import React from "react";

const Contact = () => {
  return (
    <>
      <div className="bg-gray-200 min-h-screen">
        {/*Header */}
        <section className="bg-gray-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="text-gray-300 mb-3">We'd love to hear from you</p>
            <h1 className="text-4xl md:text-5xl font-bold"> Contact Us</h1>
            <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
              Have a question or need help? Get in touch with the Shopesy team
            </p>
          </div>
        </section>

        {/* Contact section */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-12">
            {/*Contact information */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-gray-600 leading-7 mb-8">
                If you have any question about our products , order or services
                , feel free to contact us.
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg">💌 Email</h3>
                  <p className="text-gray-500 mt-1">support@shopesy.com</p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg">📞 Phone</h3>
                  <p className="text-gray-500 mt-1">+ 91 8899933457</p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg">📍 Address</h3>
                  <p className="text-gray-500 mt-1">
                    Nagpur, Maharashtra, India
                  </p>
                </div>
              </div>
            </div>

            {/* Contact form  */}

            <div className="bg-white rounded-2xl shadow-md p-8">
              <h2 className="text-2xl font-bold mb-6"> Send us a message</h2>
              <form className="space-y-5">
                <div>
                  <label className="block font-medium mb-2">Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-gray-800"
                  />
                </div>
                <div>
                  <label className="block font-medium mb-2">Message</label>
                  <textarea
                    rows="5"
                    placeholder="Enter your Message..."
                    className=" w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring focus:ring-gray-800"
                  ></textarea>
                </div>
                <button type="submit" className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition">Send Message</button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
