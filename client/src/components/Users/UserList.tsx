import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { EnvelopeOpenIcon, UserIcon, PhoneIcon, CalendarIcon, PencilIcon, PlusIcon } from "@heroicons/react/16/solid";
import DashboardLayout from '../Dashboard/DashboardLayout';

const users = [
  {
    email: 'mandicou.ba@esp.sn',
    firstName: 'Mandicou',
    lastName: 'Ba',
    phone: '+221 77 344 56 78',
    title: 'Chercheur permanent',
    expiryDate: '-'
  },
  {
    email: 'Alassane.ba@esp.sn',
    firstName: 'Alassane',
    lastName: 'Ba',
    phone: '+221 77 344 56 78',
    title: 'Chercheur permanent',
    expiryDate: '-',
  },
  {
    email: 'Emmannuel.akodegbe@esp.sn',
    firstName: 'Emmannuel',
    lastName: 'Akodegbe',
    phone: '+221 77 344 56 78',
    title: 'Thésard',
    expiryDate: '2024-12-31',
  },
  {
    email: 'Aicha.solofo@esp.sn',
    firstName: 'Aicha',
    lastName: 'Solofo',
    phone: '+221 77 344 56 78',
    title: 'Thésard',
    expiryDate: '2025-12-31',
  },
  {
    email: 'idy.diop@esp.sn',
    firstName: 'Idy',
    lastName: 'Diop',
    phone: '+221 77 344 56 78',
    title: 'Chercheur associé',
    expiryDate: '-',
  },
  {
    email: 'mahomed.cissokho@esp.sn',
    firstName: 'Mahomed',
    lastName: 'Cissokho',
    phone: '+221 77 344 56 78',
    title: 'Administrateur',
    expiryDate: '-',
  },
];

const UserList = () => {
  const [highlightedUser, setHighlightedUser] = useState<number | null>(null);

  const handleMouseEnter = (index: number ) => {
    setHighlightedUser(index);
  };

  const handleMouseLeave = () => {
    setHighlightedUser(null);
  };

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto p-6">
        <div className="flex justify-between items-center mb-6">
          <Link to="/CreateUser">
            <button
              className="flex items-center px-4 py-2 bg-blue-400 text-white rounded-md hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-200"
            >
              <PlusIcon className="h-5 w-5 mr-2" />
              Create New User
            </button>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map((user, index) => (
            <div
              key={index}
              className={`bg-white p-4 rounded-lg shadow-md flex flex-col items-center cursor-pointer 
                ${highlightedUser === index ? 'ring-2 ring-blue-500' : ''}`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex justify-end w-full mb-2">
                <Link to={`/edit-user/${index}`} className="mr-2">
                  <PencilIcon className="h-5 w-5 text-gray-500" />
                </Link>
              </div>
              <h2 className="text-xl font-bold">{`${user.firstName} ${user.lastName}`}</h2>
              <p className="text-gray-600">{user.title}</p>
              <div className="w-full mt-4">
                <div className="flex items-center mb-2">
                  <UserIcon className="h-5 w-5 text-green-500 mr-2" />
                  <span>{user.firstName} {user.lastName}</span>
                </div>
                <div className="flex items-center mb-2">
                  <EnvelopeOpenIcon className="h-5 w-5 text-blue-500 mr-2" />
                  <span>{user.email}</span>
                </div>
                <div className="flex items-center mb-2">
                  <PhoneIcon className="h-5 w-5 text-yellow-500 mr-2" />
                  <span>{user.phone}</span>
                </div>
                <div className="flex items-center mb-2">
                  <CalendarIcon className="h-5 w-5 text-gray-500 mr-2" />
                  <span>{user.expiryDate}</span>
                </div>
              </div>
            </div>
          ))}
          {/* Placeholder for "Show More" card */}
          <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center justify-center text-gray-400 cursor-pointer">
            <PlusIcon className="h-12 w-12 mb-2 text-blue-400" />
            <span className="text-sm">Show More</span>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default UserList;
