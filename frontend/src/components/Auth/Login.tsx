
import Button from "../Button";
import { Input } from "../Input";
import logo from "../../assets/logo.png";
import background from "../../assets/background.jpg";
import { useNavigate } from "react-router";

function SignIn() {
  const navigate = useNavigate()

  const handleSignInSubmit = (e: { preventDefault: () => void; })=>{
    e.preventDefault();
    navigate("/dashboard")
  }

  return (
    <div className="flex flex-col w-screen h-screen md:flex-row font-primary">
      <img
        src={background}
        alt="management"
        className="hidden object-cover h-full md:block md:w-1/2"
      />
      <div className="flex flex-col items-center justify-center w-full h-full gap-5 px-2 py-3 md:w-1/2">
        <img src={logo} alt="img" className="object-contain w-32 h-32 " />
        <h2 className="text-2xl font-bold text-gray-600">Connect to your account</h2>
        <p className="text-center text-gray-400">
          Please enter your username and password
        </p>
        <form className="flex flex-col items-center w-full gap-5 md:w-1/2" method="post" onSubmit={handleSignInSubmit}>
          <div className="flex flex-col items-center justify-center gap-4 ">
            <div className="flex flex-col justify-center w-full gap-7">
              <Input label="Username" type="text" width="w-72" />
              <Input label="Password" type="password"  width="w-72"/>
            </div>
            <div className="flex items-center justify-center mt-2">
              <Button
                label="Sign In"
                className="text-white transition-all ease-out bg-blue-600 px-[7.5rem] hover:bg-blue-600/90"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
