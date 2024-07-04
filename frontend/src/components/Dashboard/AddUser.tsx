// src/components/AddUser.tsx

import React, { useState } from 'react';

const AddUser: React.FC = () => {
  const [user, setUser] = useState({
    fullName: '',
    username: '',
    email: '',
    title: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(user);
    // Add your form submission logic here
  };

  return (
    <div className="max-w-md p-6 mx-auto bg-white rounded-lg shadow-md">
      <h1 className="mb-6 text-3xl font-bold text-pink-500">Add User</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            name="fullName"
            id="fullName"
            value={user.fullName}
            onChange={handleChange}
            className="block w-full p-2 mt-1 border rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="Full Name"
            required
          />
        </div>

        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">
            Username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            value={user.username}
            onChange={handleChange}
            className="block w-full p-2 mt-1 border rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="Username"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={user.email}
            onChange={handleChange}
            className="block w-full p-2 mt-1 border rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="Email"
            required
          />
        </div>

        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <select
            name="title"
            id="title"
            value={user.title}
            onChange={handleChange}
            className="block w-full p-2 mt-1 border rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          >
            <option value="">Select Title</option>
            <option value="Stagiaire">Stagiaire</option>
            <option value="Maitre de Conference">Maitre de Conference</option>
            <option value="Docteur">Docteur</option>
            <option value="Administrateur">Administrateur</option>
            <option value="Enseignant-Chercheur">Enseignant-Chercheur</option>
            <option value="Bailleur">Bailleur</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-blue-600 rounded-md shadow-sm hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Add User
        </button>
      </form>
    </div>
  );
};

export default AddUser;
