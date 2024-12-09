import React from "react";
import { SignIn } from "@clerk/clerk-react";

const LoginPage = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center text-gray-700">
          Welcome Back!
        </h1>
        
        <SignIn
          path="/sign-in"
          routing="path"
          signUpUrl="/sign-up"
          afterSignInUrl="/inbox"
        />
      </div>
    </div>
  );
};

export default LoginPage;
