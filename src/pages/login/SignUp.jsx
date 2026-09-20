import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate()
  const [ name , setName ] = useState("")
  const [ email , setEmail ] = useState("")
  const [ password , setPassword ] = useState("")
  const [ confirmPassword , setConfirmPassword ] = useState("")

  const handleSignup = (e) =>{
    e.preventDefault();

    if( password !== confirmPassword){
      alert("Password do not match");
      return;
    }
    const user = {
      name,
      email,
      password
    };
    localStorage.setItem("user",JSON.stringify(user));
    alert("Account created successfuly !")
    navigate("/")
    
    
  };
  return (
    <>
      <div className="min-h-screen flex item-center justify-center bg-gradient-to-br from-green-300 to-gray-300">
        <form onSubmit={handleSignup} className="bg-gradient-to-br from-gray-100 to-green-200 h-135 w-130 mx-auto mt-10 rounded-3xl">
          <div className="m-auto p-0">
          <h1 className=" font-stretch-100% font-semibold text-2xl p-5">
            {" "}
            Welcome to <span className="text-red-500">S</span>hopesy,<br></br>
            <span className=" font-stretch-70%  font-sans ml-5 mb-0 text-lg">
              Shop Easy / Shop more
            </span>
          </h1>
          </div>

          <h1 className="font-semibold text-3xl text-center mb-6">Create Account </h1>

          <div>
            {/*name*/}
            <input type="text" placeholder="Enter Your Name " value={name} onChange={(e) =>
              setName(e.target.value)
            } className="w-95 border p-3 rounded-lg mb-4 m-auto ml-15" required></input>

             {/*email*/}
            <input type="email" placeholder="Enter Your Email " value={email} onChange={(e) =>
              setEmail(e.target.value)
            } className="w-95 border p-3 rounded-lg mb-4 m-auto ml-15" required></input>

            {/*password*/}
            <input type="password" placeholder="Enter Your Password " value={password} onChange={(e) =>
              setPassword(e.target.value)
            } className="w-95 border p-3 rounded-lg mb-4 m-auto ml-15" required></input>

            {/* confirm password*/}
            <input type="confirmpassword" placeholder="Confirm Password " value={confirmPassword} onChange={(e) =>
              setConfirmPassword(e.target.value)
            } className="w-95 border p-3 rounded-lg mb-4 m-auto ml-15" required></input>

            {/* button */}

            <button type="submit" className="w-80 bg-[#434341] text-white py-3 rounded-b-lg ml-25"> Sign Up</button>

            <p className="text-center mt-5">Already have an account ? { " " }
              <a href="/signin" className="font-semibold">Sign In</a>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUp;
