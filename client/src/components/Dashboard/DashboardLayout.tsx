import { ReactNode } from 'react';
import Sidebar from '../SideBar';
import { UserButton } from '@clerk/clerk-react';
import { UserCircleIcon, BellIcon } from '@heroicons/react/16/solid'; // Import de l'icône de notification BellIcon
import logo from '../../assets/logo.png';

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 h-screen p-8 ml-64 overflow-y-auto bg-gray-100">
        <div className="flex items-center justify-between gap-5 mb-6">
          <img src={logo} alt="Logo" className="w-16 h-16 rounded-full" />
          <div className="relative flex items-center ">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-pink-600"
            />
            <div className="absolute right-0 pr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </div>
          </div>
          <div className="relative flex items-center">
            <BellIcon className="w-6 h-6 mr-4 text-gray-400 cursor-pointer" />
            <UserButton>
              <UserCircleIcon className="w-6 h-6 mr-2 text-gray-400" />
            </UserButton>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
