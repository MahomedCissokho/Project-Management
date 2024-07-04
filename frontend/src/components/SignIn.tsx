import { SignedOut, SignInButton } from "@clerk/clerk-react";
import background from '../assets/background.jpg';
// import { useEffect } from "react";
// import { useNavigate } from "react-router";

function SignIn() {

  // const user = useUser()
  // const navigate = useNavigate()
  
  // useEffect(() => {
  //     if(user.user) {
  //       navigate('/dashboard');
  //     }
  // }, [])

  
  return (
    <div className="flex justify-between w-screen h-screen ">
      <div className="relative w-screen">
        <img src={background} alt="background" className="object-cover w-full h-screen"/>
      </div>      
      <div className="absolute flex flex-col items-center justify-center w-full gap-5 top-32">
        <h1 className="text-4xl font-bold text-pink-600">Welcome to your dashboard</h1>
        <p className="text-lg font-semibold text-white">Sign in to access your dashboard</p>
      <SignedOut>
        <div className="flex items-center justify-center w-full gap-5 ju ">
          <div className="py-2.5 rounded-sm text-white bg-pink-500 px-10 hover:text-pink-500 hover:bg-white  transition-all duration-400 cursor-pointer ">
            <SignInButton forceRedirectUrl="/dashboard"/>
                        
          </div>
        </div>
      </SignedOut>
      </div>
    </div>
  );
}

export default SignIn;