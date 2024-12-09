// src/components/GoogleLoginButton.jsx
import React from "react";
import { useSignIn } from "@clerk/clerk-react";

const GoogleLoginButton = ({ onSuccess }) => {
  const { signIn } = useSignIn();

  const handleGoogleSignIn = async () => {
    try {
      const result = await signIn.authenticateWithRedirect({
        strategy: "oauth_google",
        redirectUrl: "/dashboard",
      });
      // Assuming result.user contains the user information
      onSuccess(result.user);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <button
      onClick={handleGoogleSignIn}
      className="bg-blue-500 text-white px-4 py-2 rounded"
    >
      Login with Google
    </button>
  );
};

export default GoogleLoginButton;
