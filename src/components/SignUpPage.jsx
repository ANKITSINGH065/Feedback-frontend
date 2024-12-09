import React from "react";
import { SignUp } from "@clerk/clerk-react";

const SignUpPage = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center text-gray-700">
          Create Your Account
        </h1>
        
        <SignUp
          path="/sign-up"
          routing="path"
          signInUrl="/sign-in"
          afterSignUpUrl="/inbox" 
        />
      </div>
    </div>
  );
};

export default SignUpPage;
