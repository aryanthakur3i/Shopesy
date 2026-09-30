import React, { useState } from "react";

const CheckoutForm = () => {
  //store all checkout form values
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    house: "",
    street: "",
    city: "",
    pincode: "",
  });

  // store validation error message
  const [error, setError] = useState({});

  // handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    // remove error when user start correcting the feild
    setError({
      ...error,
      [name]: "",
    });
  };

  // validate the checkout form
  const validateForm = () => {
    const newErrors = {};

    // full name validation
    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    }

    // phone number validation
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10 digit number";
    }

    // house / flat validation
    if (!formData.house.trim()) {
      newErrors.house = "House / flat is required";
    }

    // street / area validation
    if (!formData.street.trim()) {
      newErrors.street = "street / area is required";
    }

    // city validation
    if (!formData.city.trim()) {
      newErrors.city = "city is required";
    }

    // pincode validation
    if (!formData.pincode.trim()) {
      newErrors.pincode = "pincode is required";
    } else if (!/^[0-9]{6}$/.test(formData.pincode)) {
      newErrors.pincode = " enter valid 6 digit pincode";
    }

    setError(newErrors);

    // form is valid when there are no error
    return Object.keys(newErrors).length === 0;
  };

  // handle checkout form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    //stop submission if validation fail
    if (!validateForm()) {
      return;
    }
    

    // continue checkout when form is valid
    console.log("Delivery details:", formData);
    alert("Delivewry details saved successfully");
  };

  return (
    <>
      {/* Checkout delivery details */}
      <form
        onSubmit={handleSubmit}
        className=" w-full max-w-3xl mx-auto bg-white sm:p-4 md:p-6 rounded-2xl shadow"
      >
        {/* delivery details heading */}
        <h2 className=" text-xl sm:text-2xl md:text-3xl font-semibold mb-5 sm:mb-6">
          Delivery Details
        </h2>

        {/* grid for checkout forms field */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"></div>

        {/* Customer full name */}
        <div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            className=" w-full  border-gray-300  p-3 sm:p-3.5 focus:border-black rounded-lg outline-none"
          />
          {error.name && (
            <p className="text-red-700 text-sm mt-1">{error.name}</p>
          )}
        </div>

        {/* Customer phone number */}
        <div>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-full  border-gray-300  p-3 sm:p-3.5 focus:border-black rounded-lg outline-none"
          />
          {error.phone && (
            <p className="text-red-700 text-sm mt-1">{error.phone}</p>
          )}
        </div>

        {/* Customer house/flat number*/}
        <div>
          <input
            type="text"
            name="house"
            value={formData.house}
            onChange={handleChange}
            placeholder="House / Flat no-"
            className=" w-full  border-gray-300  p-3 sm:p-3.5 focus:border-black rounded-lg outline-none"
          />
          {error.house && (
            <p className="text-red-700 text-sm mt-1">{error.house}</p>
          )}
        </div>

        {/* Customer area details */}
        <div>
          <input
            type="text"
            name="street"
            value={formData.street}
            onChange={handleChange}
            placeholder="Street / Area"
            className=" w-full  border-gray-300  p-3 sm:p-3.5 focus:border-black rounded-lg outline-none"
          />
          {error.street && (
            <p className="text-red-700 text-sm mt-1">{error.street}</p>
          )}
        </div>
        {/* Customer city details */}
        <div>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="City"
            className=" w-full  border-gray-300  p-3 sm:p-3.5 focus:border-black rounded-lg outline-none"
          />
          {error.city && (
            <p className="text-red-700 text-sm mt-1">{error.city}</p>
          )}
        </div>
        {/* Customer pincode */}
        <div>
          <input
            type="text"
            name="pincode"
            value={formData.pincode}
            onChange={handleChange}
            placeholder="Pincode"
            className=" w-full  border-gray-300  p-3 sm:p-3.5 focus:border-black rounded-lg outline-none"
          />
          {error.pincode && (
            <p className="text-red-700 text-sm mt-1">{error.pincode}</p>
          )}
        </div>

        {/* submit button */}
        <button
          type="submit"
          className="w-full mt-6 bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
        >
          Continue
        </button>
      </form>
    </>
  );
};

export default CheckoutForm;
