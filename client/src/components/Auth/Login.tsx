import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  useAuth,
} from "@clerk/clerk-react";

import logo from "../../assets/logo.png";
import background from "../../assets/background.jpg";

function SignIn() {
  const navigate = useNavigate();
  const { isSignedIn } = useAuth();

  useEffect(() => {
    if (isSignedIn) {
      navigate("/dashboard");
    }
  }, [isSignedIn, navigate]);

  return (
    <div className="flex flex-col w-screen h-screen md:flex-row font-primary">
      <img
        src={background}
        alt="management"
        className="hidden object-cover h-full md:block md:w-1/2"
      />
      <div className="flex flex-col items-center justify-center w-full h-full gap-5 px-2 py-3 md:w-1/2">
        <img src={logo} alt="img" className="object-contain w-32 h-32 " />
        <h2 className="text-2xl font-bold text-gray-600">
          Connect to your account
        </h2>
        <SignedOut>
          <div className="flex gap-3">
          <SignUpButton mode="modal"><button>Sign Up</button></SignUpButton>  
          <SignInButton mode="modal">Sign In</SignInButton>  
          </div>
        </SignedOut>
        <SignedIn>
          <p>You are signed in.</p>
        </SignedIn>
      </div>
    </div>
  );
}

export default SignIn;
