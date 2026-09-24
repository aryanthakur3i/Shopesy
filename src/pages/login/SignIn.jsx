import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignin = (e) => {
    e.preventDefault();

    const savedUser = localStorage.getItem("user");

    if (!savedUser) {
      alert("No account found. please sign up first");
      return;
    }

    const user = JSON.parse(savedUser);

    if (password !== user.password) {
      alert("Password wrong");
      return;
    }
    if (email !== user.email) {
      alert("Email wrong");
      return;
    }

    localStorage.setItem(
      "currentUser",
      JSON.stringify({
        
        name: user.name,
        email: user.email,
      }),
    );

    alert("Sign IN successfully!");
    navigate("/");
    window.location.reload()
  };

  return (
    <>
      <div className="min-h-screen flex item-center justify-center bg-gradient-to-br from-green-300 to-gray-300">
        <form
          onSubmit={handleSignin}
          className="bg-gradient-to-br from-gray-100 to-green-200 h-125 w-130 mx-auto mt-15 rounded-3xl"
        >
          <div className="m-auto p-0">
            <h1 className=" font-stretch-100% font-semibold text-2xl p-5">
              {" "}
              Welcome to <span className="text-red-500">S</span>hopesy,<br></br>
              <span className=" font-stretch-70%  font-sans ml-5 mb-0 text-lg">
                Shop Easy / Shop more
              </span>
            </h1>
          </div>

          <h1 className="font-semibold text-3xl text-center p-4 mb-6">
            Account Login{" "}
          </h1>

          <div>
            {/*email*/}
            <input
              type="email"
              placeholder="Enter Your Email "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-95 border p-3 rounded-lg mb-5 m-auto ml-15"
              required
            ></input>

            {/*password*/}
            <input
              type="password"
              placeholder="Enter Your Password "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-95 border p-3 rounded-lg mb-4 mt-1 m-auto ml-15"
              required
            ></input>

            {/* button */}

            <button
              type="submit"
              className="w-80 bg-[#434341] text-white py-3 mt-3 rounded-b-lg ml-25"
            >
              {" "}
              Sign In
            </button>

            <p className="text-center mt-5 ">
              Don't have an account ?{" "}
              <a href="/signup" className="font-semibold">
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
