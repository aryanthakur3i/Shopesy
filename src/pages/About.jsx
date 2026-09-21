import React from "react";

const About = () => {
  return (
    <>
      <div className="bg-gray-50">
        {/*Hero */}
        <section className="bg-gray-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="text-gray-400 mb-3">
              Welcome to <span className="text-red-500">S</span>hopesy
            </p>
            <h1 className="text-4xl md:text-5xl font-bold"> About Us </h1>
            <p className="text-gray-300 mt-5 max-w-2xl mx-auto ">
              Your Simple and Trusted destination for discovering quality
              products at amazing prices.
            </p>
          </div>
        </section>

        {/* About Shopesy */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-5">
                About <span className="text-red-500">S</span>hopesy
              </h2>
              <p className="text-gray-600 leading-7">
                Shopesy is an e-commerce platform desigend to make online
                shopping simple, convenient and enjoyable. Exploring a wide
                range of products and discover something you'll love.
              </p>
              <p className="text-gray-600 leading-7 mt-4">
                Our goal is to provide a clean shopping experience with easy
                product discovery secure shopping and a user-friendly interface.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-md-10">
              <h3 className="text-2xl font-bold mb-6">
                Why <span className="text-red-500">S</span>hopesy
              </h3>
              <div className="space-y-5">
                <div>
                <h4 className="font-semibold">
                  Wide product Selection
                </h4>
                <p className="text-gray-500 mt-1">
                  Discover products across different categories.
                </p>
              </div>
              <div>
                 <h4 className="font-semibold">
                  Simple Shopping
                </h4>
                <p className="text-gray-500 mt-1">
                  Find and explore products with ease.
                </p>
              </div>
              <div>
                 <h4 className="font-semibold">
                  Customer Focused
                </h4>
                <p className="text-gray-500 mt-1">
                  Designed with a smooth and enjoyable experience in mind.
                </p>
              </div>
            </div>
            </div>
          </div>
        </section>

        {/*Mission */}

        <section className="bg-white py-16 ml-35 flex ">
          <div >
          <div className="max-w-4xl mx-auto px-6 text-center"></div>
          <h2 className="text-3xl font-bold mb-5 "> Our Mission</h2>
          <p className="text-gray-700 leading-8 ">We want to make online shopping eassier by bringing products ,<br/> conencience and a simple user experience  together in one place.</p>
        </div>
        <div className="ml-50 mt-5">
          <h1 className="text-8xl font-bold"><span className="text-red-500">S</span>hopesy.in</h1>
        </div>
        </section>
        
      </div>
    </>
  );
};

export default About;
