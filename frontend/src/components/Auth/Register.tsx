import { useState } from "react";
import { useNavigate } from "react-router";
import Button from "../Button";
import { Input } from "../Input";
import logo from "../../assets/logo.png";
import background from "../../assets/background.jpg";
import { Link } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    placeOfBirth: "",
    email: "",
    username: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignUpSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    navigate("/dashboard");
  };

  return (
    <div className="flex flex-col w-screen h-screen overflow-x-hidden md:flex-row font-primary">
      <img
        src={background}
        alt="management"
        className="hidden object-cover h-full md:block md:w-1/2"
      />
      <div className="flex flex-col items-center justify-center w-full h-full gap-5 px-2 py-3 md:w-1/2">
        <img src={logo} alt="img" className="object-contain w-32 h-32 rounded-full translate-y-7 " />
        <h2 className="text-2xl font-bold text-gray-600 translate-y-3">Create an account</h2>
        <p className="text-center text-gray-400">
          Please fill in the information below
        </p>
        <form
          className="flex flex-col items-center gap-5 -translate-y-5 trw-full md:w-2/3"
          method="post"
          onSubmit={handleSignUpSubmit}
        >
          <div className="flex flex-col items-center justify-center w-full gap-4">
            <div className="flex flex-col w-full gap-4 md:flex-row">
              <Input
                label="First Name"
                type="text"
                value={formData.firstName}
                onChange={handleChange}
                width="w-full md:w-1/2"
              />
              <Input
                label="Last Name"
                type="text"
                value={formData.lastName}
                onChange={handleChange}
                width="w-full md:w-1/2"
              />
            </div>
            <div className="flex flex-col w-full gap-4 md:flex-row">
              <Input
                label="Date of Birth"
                type="date"
                value={formData.dateOfBirth}
                onChange={handleChange}
                width="w-full md:w-1/2"
              />
              <Input
                label="Place of Birth"
                type="text"
                value={formData.placeOfBirth}
                onChange={handleChange}
                width="w-full md:w-1/2"
              />
            </div>
            <Input
              label="Email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              width="w-full"
            />
            <div className="flex flex-col w-full gap-4 md:flex-row">
              <Input
                label="Username"
                type="text"
                value={formData.username}
                onChange={handleChange}
                width="w-full md:w-1/2"
              />
              <Input
                label="Password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                width="w-full md:w-1/2"
              />
            </div>
          </div>
          <div className="flex items-center justify-center mt-2">
            <Button
              label="Sign Up"
              className="text-white transition-all ease-out bg-blue-600 px-[7.5rem] hover:bg-blue-600/90"
            />
          </div>
        </form>
        <p className="text-gray-400 -translate-y-7">
          Already have an account?{" "}
          <Link to="/" className="text-blue-600 hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
