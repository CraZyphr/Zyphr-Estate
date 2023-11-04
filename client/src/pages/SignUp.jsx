import React from 'react'
import { Link } from 'react-router-dom'
function SignUp() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div
      className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0"
    >
      
      <div className="flex flex-col justify-center p-8 md:p-14">
        <span className="mb-3 text-4xl font-bold">Sign Up !</span>
        <span className="font-light text-gray-400 mb-8">
          Please enter your details
        </span>
        <div className="py-4">
          <span className="mb-2 text-md">Username</span>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
            id="username"
          />
        </div>
        <div className="py-4">
          <span className="mb-2 text-md">Email</span>
          <input
            type="email"
            className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
            id="email"
          />
        </div>
        <div className="py-4">
          <span className="mb-2 text-md">Password</span>
          <input
            type="password"
            id="passwpord"
            className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
          />
        </div>
        <div className="flex justify-between w-full py-4">
          <div className="mr-24">
            <input type="checkbox" name="ch" id="ch" className="mr-2" />
            <span className="text-md">Remember me</span>
          </div>
          
        </div>
        <button
          className="w-full bg-black text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300"
        >
          Sign Up
        </button>
        <button
          className="w-full border border-gray-300 text-md p-2 rounded-lg mb-6 hover:bg-black hover:text-white"
        >
          <p>Sign in with Google</p>
        </button>
        <div className="text-center text-gray-400">
          Have an account?
          <Link to={"/sign-in"}>
        <span className="font-bold text-slate-600">Sign In</span>
          </Link>
        </div>
      </div>
      
      <div className="relative">
        <img
          src="https://i.postimg.cc/9QkCw3ds/Picsart-23-11-04-13-50-41-249.jpg"
          alt="img"
          className="w-[400px] h-full hidden rounded-r-2xl md:block object-cover"
        />
      </div>
    </div>
  </div>
  )
}

export default SignUp