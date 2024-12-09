import React from "react";
import { SignIn } from "@clerk/clerk-react";

const SignInPage = () => {
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
          afterSignInUrl="/dashboard"
          appearance={{
            elements: {
              rootBox: "flex flex-col gap-4",
              formButtonPrimary: "bg-blue-500 text-white hover:bg-blue-600",
            },
          }}
        />
      </div>
    </div>
  );
};

export default SignInPage;
