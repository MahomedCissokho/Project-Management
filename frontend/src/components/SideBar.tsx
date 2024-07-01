import React from 'react';
import { Link } from 'react-router-dom';
import { FolderIcon, HomeIcon, UsersIcon, ArrowLongLeftIcon, PlusIcon } from '@heroicons/react/16/solid';

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
            <div>
              <Link to="/projects" className="flex items-center px-4 py-2 text-gray-400 hover:bg-gray-700 hover:text-white">
                <FolderIcon className="w-5 h-5 mr-3" />
                Projects
              </Link>
              <ul className="pl-8 mt-2">
                <li className="mb-2">
                  <Link to="/projects/teams" className="flex items-center px-4 py-2 text-gray-400 hover:bg-gray-700 hover:text-white">
                    <UsersIcon className="w-5 h-5 mr-3" />
                    Teams
                  </Link>
                </li>
                <li>
                  <Link to="/projects/create" className="flex items-center px-4 py-2 text-gray-400 hover:bg-gray-700 hover:text-white">
                    <PlusIcon className="w-5 h-5 mr-3" />
                     New Project
                  </Link>
                </li>
              </ul>
            </div>
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
