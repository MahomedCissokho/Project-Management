import React from 'react';
import { Link } from 'react-router-dom';
import { FolderIcon, HomeIcon, UsersIcon } from '@heroicons/react/16/solid';
import { ArrowLongLeftIcon } from '@heroicons/react/16/solid';
const Sidebar: React.FC = () => {
  return (
    <div className="flex flex-col w-64 h-screen text-white bg-gray-800">
      <div className="flex items-center justify-center h-16 bg-gray-900">
        <h1>Administrateur</h1>
      </div>
      <nav className="flex-1 p-4">
        <ul>
          <li className="mb-4">
            <Link to="/dashboard" className="flex items-center px-4 py-2 text-gray-400 hover:bg-gray-700 hover:text-white">
              <HomeIcon className="w-5 h-5 mr-3" />
              Dashboard
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/projects" className="flex items-center px-4 py-2 text-gray-400 hover:bg-gray-700 hover:text-white">
              <FolderIcon className="w-5 h-5 mr-3" />
              Projects
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/teams" className="flex items-center px-4 py-2 text-gray-400 hover:bg-gray-700 hover:text-white">
              <UsersIcon className="w-5 h-5 mr-3" />
              Teams
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/" className="flex items-center px-4 py-2 text-gray-400 hover:bg-gray-700 hover:text-white">
              <ArrowLongLeftIcon className="w-5 h-5 mr-3" />
              Logout
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
