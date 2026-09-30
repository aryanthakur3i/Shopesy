import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  // navigate
  const navigate = useNavigate();

  // Store email and password entered by user
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // handle user signin and validate
  const handleSignin = (e) => {
    e.preventDefault();

    //unnesecary spaces from the email
    const trimmedEmail = email.trim()

    // vaildate email
     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

     if(emailRegex.test(trimmedEmail)){
      alert("please enter a valid email")
     }

     // vailidate password length
     if(password.length < 6){
      alert("password must be contain 6 character.")
     }
    // get the previous register user from local storage
    const savedUser = localStorage.getItem("user");

    // stop login if no account has been register yet
    if (!savedUser) {
      alert("No account found. please sign up first");
      return;
    }

    // convert user data into json
    const user = JSON.parse(savedUser);

    // validate entered password
    if (password !== user.password) {
      alert("Password wrong");
      return;
    }
    // validate entered email
    if (email !== user.email) {
      alert("Email wrong");
      return;
    }

    // store details of currently loggin user
    localStorage.setItem(
      "currentUser",
      JSON.stringify({
        name: user.name,
        email: user.email,
      }),
    );

    // redirect the user to the home page if login successfull
    alert("Sign IN successfully!");
    navigate("/");
    window.location.reload();
  };

  return (
    <>
      <div className="min-h-screen flex item-center justify-center bg-gradient-to-br from-green-300 to-gray-300 px-4 py-8 sm:px-6">
        {/* SignIn form */}
        <form
          onSubmit={handleSignin}
          className=" w-full max-w-md bg-gradient-to-br from-gray-100 to-green-200 h-125 w-130 mx-auto mt-15 rounded-3xl px-5 py-6 sm:px-8 sm:py-8 md:px-10"
        >
          {/* welcome message */}
          <div className="text-center sm:text-left">
            <h1 className=" font-semibold text-xl sm:text-2xl ">
              {" "}
              Welcome to <span className="text-red-500">S</span>hopesy,<br></br>
              <span className=" font-sans text-base sm:text-lg ml-0 sm:ml-5 ">
                Shop Easy / Shop more
              </span>
            </h1>
          </div>

          {/* Account login */}
          <h1 className="font-semibold text-2xl sm:text-3xl text-center p-4 mb-6 sm:mb-6">
            Account Login{" "}
          </h1>

          <div>
            {/*email*/}
            <input
              type="email"
              placeholder="Enter Your Email "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border p-3 rounded-lg mb-4 sm:mb-5 outline-none focus:border-black "
              required
            ></input>

            {/*password*/}
            <input
              type="password"
              placeholder="Enter Your Password "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border p-3 rounded-lg mb-4 outline-none focus:border-black"
              required
            ></input>

            {/* button */}

            <button
              type="submit"
              className="w-80 bg-[#434341] text-white py-3 mt-3 rounded-b-lg ml-15"
            >
              {" "}
              Sign In
            </button>

            {/* Link for SignUp */}
            <p className="text-center mt-5 text-sm sm:text-base">
              Don't have an account ?{" "}
              <a href="/signup" className="font-semibold hover:underline">
                Sign Up
              </a>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignIn;
