import React, { useState } from "react";
import { EnvelopeOpenIcon, UserIcon, PhoneIcon, LockClosedIcon, CalendarIcon, IdentificationIcon } from "@heroicons/react/16/solid";
import DashboardLayout from "../Dashboard/DashboardLayout";

const CreateUser = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [title, setTitle] = useState("Chercheur permanent");
  const [password, setPassword] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [changePasswordOnLogin, setChangePasswordOnLogin] = useState(false);

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log({
      email,
      firstName,
      lastName,
      phone,
      title,
      password,
      expiryDate,
      changePasswordOnLogin,
    });
    // Reset form fields after submission if needed
    // setEmail("");
    // setFirstName("");
    // setLastName("");
    // setPhone("");
    // setTitle("Chercheur permanent");
    // setPassword("");
    // setExpiryDate("");
    // setChangePasswordOnLogin(false);
  };

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-md shadow-md">
        <h1 className="mb-6 text-3xl font-bold text-center">Create New User</h1>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700">Email</label>
            <div className="relative">
              <input
                type="email"
                className="w-full p-3 pl-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <EnvelopeOpenIcon className="h-5 w-5 text-blue-500" />
              </div>
            </div>
          </div>
          <div>
            <label className="block text-gray-700">First Name</label>
            <div className="relative">
              <input
                type="text"
                className="w-full p-3 pl-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <UserIcon className="h-5 w-5 text-green-500" />
              </div>
            </div>
          </div>
          <div>
            <label className="block text-gray-700">Last Name</label>
            <div className="relative">
              <input
                type="text"
                className="w-full p-3 pl-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <UserIcon className="h-5 w-5 text-green-500" />
              </div>
            </div>
          </div>
          <div>
            <label className="block text-gray-700">Phone</label>
            <div className="relative">
              <input
                type="text"
                className="w-full p-3 pl-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <PhoneIcon className="h-5 w-5 text-yellow-500" />
              </div>
            </div>
          </div>
          <div>
            <label className="block text-gray-700">Title</label>
            <div className="relative">
              <select
                className="w-full p-3 pl-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              >
                <option value="Chercheur permanent">Chercheur permanent</option>
                <option value="Chercheur associé">Chercheur associé</option>
                <option value="Thésard">Thésard</option>
                <option value="Étudiant">Étudiant</option>
                <option value="Administrateur">Administrateur</option>
                <option value="Stagiaire">Stagiaire</option>
                <option value="Bailleur">Bailleur</option>
                <option value="Responsable projet">Responsable projet</option>
              </select>
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <IdentificationIcon className="h-5 w-5 text-purple-500" />
              </div>
            </div>
          </div>
          <div>
            <label className="block text-gray-700">Password</label>
            <div className="relative">
              <input
                type="password"
                className="w-full p-3 pl-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <LockClosedIcon className="h-5 w-5 text-red-500" />
              </div>
            </div>
          </div>
          <div>
            <label className="block text-gray-700">Account Expiry Date</label>
            <div className="relative">
              <input
                type="date"
                className="w-full p-3 pl-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <CalendarIcon className="h-5 w-5 text-gray-500" />
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              checked={changePasswordOnLogin}
              onChange={(e) => setChangePasswordOnLogin(e.target.checked)}
            />
            <label className="ml-2 block text-gray-700">Change password on login</label>
          </div>
          <button
            type="submit"
            className="w-full py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            Create User
          </button>
        </form>
      </div>
    </DashboardLayout>
  );
};

export default CreateUser;
