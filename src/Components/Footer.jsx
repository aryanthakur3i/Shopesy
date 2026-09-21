import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            {/* Shopesy */}
            <div>
              <h2 className="text-2xl font-bold mb-4">
                <span className="text-red-500 text-3xl">S</span>hopesy
              </h2>
              <p className="text-gray-400 leading-6">
                Discover quality at amazing prices. Shop your favorite products
                with <span className="text-red-500">S</span>hopesy
              </p>
            </div>

            {/*Quicks Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="hover:text-white cursor-pointer">Home</li>
                <li className="hover:text-white cursor-pointer">Products</li>
                <li className="hover:text-white cursor-pointer">About Us</li>
                <li className="hover:text-white cursor-pointer">Contact</li>
              </ul>
            </div>

            {/* Customer Service */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="hover:text-white cursor-pointer">Help Center</li>
                <li className="hover:text-white cursor-pointer">Shipping</li>
                <li className="hover:text-white cursor-pointer">Returns</li>
                <li className="hover:text-white cursor-pointer">
                  Privacy Policy
                </li>
              </ul>
            </div>

            {/*Contact us */}

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <p className="text-gray-300 mb-3">💌 support@shopesy.com</p>
              <p className="text-gray-300 mb-3">📞 + 91 8899933457</p>
              <p className="text-gray-300 mb-3">📍 Nagpur,India</p>
            </div>
          </div>

          {/* Bottom */}

          <div className="border-t border-gray-700 mt-10 pt-6 text-center">
            <p className="text-white ">© 2026 Shopesy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
