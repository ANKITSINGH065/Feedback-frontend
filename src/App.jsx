import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import { SignedIn, SignedOut, useUser } from "@clerk/clerk-react";

import LoginPage from "./components/LoginPage";
import InboxPage from "./components/InboxPage";
import SignUpPage from "./components/SignUpPage";
import MessagePage from "./components/MessagePage";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Sign Up Page */}
        <Route
          path="/sign-up"
          element={
            <SignedOut>
              <SignUpPage />
            </SignedOut>
          }
        />

        {/* Login Page */}
        <Route
          path="/sign-in"
          element={
            <SignedOut>
              <LoginPage />
            </SignedOut>
          }
        />

        {/* Inbox Page */}
        <Route
          path="/inbox"
          element={
            <SignedIn>
              <InboxPage />
            </SignedIn>
          }
        />

        <Route
          path="/message"
          element={
            <SignedIn>
              <MessagePage />
            </SignedIn>
          }
        />

        {/* Redirect unknown routes */}
        <Route path="*" element={<Navigate to="/sign-in" />} />
      </Routes>
    </Router>
  );
};

export default App;
