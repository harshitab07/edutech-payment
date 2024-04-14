import React, { useState } from "react";
import { database } from "../auth/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";


const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    try {
      signInWithEmailAndPassword(database, email, password)
      .then(() => 
        {
          toast.success('Sign In successful!');
          setTimeout(() => navigate('/payment'), 2000);
        })
        .catch(toast.error('Sign In failed!'));
    } catch (err) {
      toast.error('Sign In failed!')
    }
  }

  return (
    <div className="overflow-hidden">
      <ToastContainer />
      <div className="flex flex-col items-start gap-1 mt-4 mx-8">
        <h1 className="text-2xl xl:text-4xl font-bold">EduNation</h1>
        <h1 className="text-2xl xl:text-4xl font-bold ml-10">
          Your Study Partner
        </h1>
      </div>
      <div className="w-screen flex justify-center mt-4">
        <div className="w-11/12 md:w-7/12 bg-[#E2E7F1] pt-4 px-2 rounded-xl">
        <h3 className="text-center text-xl font-bold">Sign In</h3>
        <div className="px-2 flex flex-col items-center gap-2">
          <div className="flex w-9/12 flex-col gap-1">
            <label className="text-lg">Email:</label>
            <input className="py-2 px-4 rounded-md focus:outline-none" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="flex w-9/12 flex-col gap-1">
            <label className="text-lg">Password:</label>
            <input className="py-2 px-4 rounded-md focus:outline-none" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button className="p-3 rounded-md bg-[#AEBFFA] text-center w-40" onClick={handleSignIn}>Sign In</button>
          <p className="mb-3">Not a member? <Link to="/sign-up" className="underline cursor-pointer">Sign Up</Link></p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
