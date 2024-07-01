import { useUser,SignOutButton ,UserButton} from "@clerk/clerk-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  CurrencyDollarIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  UserCircleIcon,
  ClipboardDocumentCheckIcon
} from "@heroicons/react/16/solid";
import { ArrowLongLeftIcon } from "@heroicons/react/16/solid";
const Sidebar: React.FC = () => {
  const { user } = useUser();
  const [expensesOpen, setExpensesOpen] = useState(false);

  const toggleExpensesMenu = () => {
    setExpensesOpen(!expensesOpen);
  };

  return (
    <div className="flex flex-col w-64 h-screen text-white bg-gray-800">
      <div className="flex items-center justify-center h-16 bg-gray-900">
     <UserButton><UserCircleIcon className="w-6 h-6 mr-2 text-gray-400" /></UserButton>  
      <h1 className="text-xl">{user?.username}</h1>
      </div>
      <nav className="flex-1 p-4">
        <ul>
          <li className="mb-4">
            <Link
              to="/dashboard"
              className="flex items-center px-4 py-2 text-gray-400 hover:bg-gray-700 hover:text-white"
            >
              <HomeIcon className="w-5 h-5 mr-3" />
              Dashboard
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to="/projects"
              className="flex items-center px-4 py-2 text-gray-400 hover:bg-gray-700 hover:text-white"
            >
              <FolderIcon className="w-5 h-5 mr-3" />
              Projects
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to="/teams"
              className="flex items-center px-4 py-2 text-gray-400 hover:bg-gray-700 hover:text-white"
            >
              <UsersIcon className="w-5 h-5 mr-3" />
              Teams
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to=""
              className="flex items-center px-4 py-2 text-gray-400 hover:bg-gray-700 hover:text-white"
            >
              <ClipboardDocumentCheckIcon className="w-5 h-5 mr-3" />
              Tasks
            </Link>
          </li>
          <li className="mb-4">
            <button
              onClick={toggleExpensesMenu}
              className="flex items-center px-4 py-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none"
            >
              <CurrencyDollarIcon className="w-5 h-5 mr-3" />
              Expenses
              <svg
                className={`w-4 h-4 ml-auto transition-transform transform ${
                  expensesOpen ? "rotate-90" : ""
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M13.879 8.707a1 1 0 0 0-1.414-1.414L10 10.586 7.536 8.121a1 1 0 0 0-1.414 1.414l3.5 3.5a1 1 0 0 0 1.414 0l3.5-3.5z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <ul className={`ml-4 ${expensesOpen ? "block" : "hidden"}`}>
              <li className="mb-2">
                <Link
                  to="/ExpensesList"
                  className="flex items-center px-4 py-2 text-gray-400 hover:bg-gray-700 hover:text-white"
                >
                  <CurrencyDollarIcon className="w-5 h-5 mr-3" />
                  Dashboard
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/dashboadExpenses"
                  className="flex items-center px-4 py-2 text-gray-400 hover:bg-gray-700 hover:text-white"
                >
                  <FolderIcon className="w-5 h-5 mr-3" /> {/* Nouvelle icône pour Expenses List */}
                  Demande de depenses
                </Link>
              </li>
            </ul>
          </li>
          <li className="mb-4"><SignOutButton>
            <button
              
              className="flex items-center px-4 py-2 text-gray-400 hover:bg-gray-700 hover:text-white"
            >
              <ArrowLongLeftIcon className="w-5 h-5 mr-3" />
                      
                     Logout 
            </button></SignOutButton>
          </li>
           
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
