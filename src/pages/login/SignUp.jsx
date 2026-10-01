import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  //store the value entered by user
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // handle account creation and validation
  const handleSignup = (e) => {
    e.preventDefault();

     // remove unnecessary spaces from user input
    const trimmedName = name.trim()
    const trimmedEmail = email.trim()

    // Validate user name
    if (trimmedName.length < 4){
      alert("Name must contain at least 4 character")
      return
    }

    // vaildate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailRegex.test(trimmedEmail)){
      alert("please enter a valid email address.")
      return
    }

    // validate password length
    if(password.length < 6){
      alert("Password must contain atleast 6 character.")
    }

   

    // check whether both password match
    if (password !== confirmPassword) {
      alert("Password do not match");
      return;
    }
    // check whether the user is already saved in local storage
    const existingUser = localStorage.getItem("user");

    if (existingUser) {
      const user = JSON.parse(existingUser);

      // prevent creating account with same email
      if (user.email === email) {
        alert("Email is already been register !!");
        return;
      }
      // creating a new user using the signup form data
    }
    const user = {
      name,
      email,
      password,
    };
    // saved the registered user in local storage
    localStorage.setItem("user", JSON.stringify(user));
    alert("Account created successfuly !");
    navigate("/signin");
  };
  return (
    <>
      <div className="min-h-screen flex item-center justify-center bg-gradient-to-br from-green-300 to-gray-300 px-4 py-8 sm:px-6">
        {/* SignUp form */}
        <form
          onSubmit={handleSignup}
          className="w-full max-w-md bg-gradient-to-br from-gray-100 to-green-200 h-135 w-130 mx-auto mt-10 rounded-3xl px-5 py-6 sm:px-8 md:px-10"
        >
          {/* welcome message */}
          <div className="text-center sm:text-left">
            <h1 className=" font-semibold text-xl sm:text-2xl ">
              {" "}
              Welcome to <span className="text-red-500">S</span>hopesy,<br></br>
              <span className="text-base  font-sans sm:ml-5 ml-0 sm:text-lg">
                Shop Easy / Shop more
              </span>
            </h1>
          </div>
          {/* SignUP heading */}
          <h1 className="font-semibold text-2xl sm:text-3xl text-center py-4 mb-4  sm:mb-6">
            Create Account{" "}
          </h1>

          <div>
            {/*name*/}
            <input
              type="text"
              placeholder="Enter Your Name "
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border p-3 rounded-lg mb-4 outline-none focus:border-black"
              required
            ></input>

            {/*email*/}
            <input
              type="email"
              placeholder="Enter Your Email "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border p-3 rounded-lg mb-4 outline-none focus:border-black"
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

            {/* confirm password*/}
            <input
              type="confirmpassword"
              placeholder="Confirm Password "
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full border p-3 rounded-lg mb-4 outline-none focus:border-black"
              required
            ></input>

            {/* button */}

            <button
              type="submit"
              className="w-full bg-[#434341] text-white py-3 rounded-lg hover:bg-gray-700 transition"
            >
              {" "}
              Sign Up
            </button>

            <p className="text-center mt-5 text-sm sm:text-base">
              Already have an account ?{" "}
              <a href="/signin" className="font-semibold hover:underline">
                Sign In
              </a>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUp;
