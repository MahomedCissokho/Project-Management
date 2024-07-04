import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import hand from "../assets/hand.png";
import {
  ArchiveBoxIcon,
  CheckIcon,
  ClockIcon,
  CurrencyEuroIcon,
  FolderIcon,
  HomeIcon,
  PlusIcon,
  TableCellsIcon,
  UsersIcon,
} from "@heroicons/react/16/solid";
import { DeviceTabletIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { useUser } from "@clerk/clerk-react";

const Sidebar = () => {
  const location = useLocation();
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [isUsersOpen, setIsUsersOpen] = useState(false);
  const [isExpensesOpen, setIsExpensesOpen] = useState(false);
  const [isTasksOpen, setIsTasksOpen] = useState(false);

  useEffect(() => {
    // Close submenus when navigating to another main tab
    if (!location.pathname.startsWith("/projects")) setIsProjectsOpen(false);
    if (!location.pathname.startsWith("/users")) setIsUsersOpen(false);
    if (!location.pathname.startsWith("/expenses")) setIsExpensesOpen(false);
    if (!location.pathname.startsWith("/tasks")) setIsTasksOpen(false);
  }, [location]);

  const handleProjectsClick = () => {
    setIsProjectsOpen(!isProjectsOpen);
    setIsUsersOpen(false);
    setIsExpensesOpen(false);
    setIsTasksOpen(false);
  };

  const handleUsersClick = () => {
    setIsUsersOpen(!isUsersOpen);
    setIsProjectsOpen(false);
    setIsExpensesOpen(false);
    setIsTasksOpen(false);
  };

  const handleExpensesClick = () => {
    setIsExpensesOpen(!isExpensesOpen);
    setIsProjectsOpen(false);
    setIsUsersOpen(false);
    setIsTasksOpen(false);
  };

  const handleTasksClick = () => {
    setIsTasksOpen(!isTasksOpen);
    setIsProjectsOpen(false);
    setIsUsersOpen(false);
    setIsExpensesOpen(false);
  };

  const isActive = (path:string) => {
    return location.pathname.startsWith(path)
      ? "bg-blue-600 text-white"
      : "text-gray-400 hover:text-white hover:bg-blue-600";
  };

  return (
    <div className="fixed flex flex-col w-64 h-screen mt-10 text-white shadow-xl">
      <div className="flex items-center justify-between p-4 border-b">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center w-full text-2xl text-center text-neutral-700"
        >
          Welcome <img src={hand} alt="hands" className="w-5 h-5 mr-2" />
          {
            useUser().user?.username
          }
        </motion.div>
      </div>
      <nav className="flex-1 p-4 pt-5">
        <ul>
          <li className="mb-4">
            <Link
              to="/dashboard"
              className={`flex items-center px-4 py-2 rounded ${isActive(
                "/dashboard"
              )}`}
            >
              <HomeIcon className="w-5 h-5 mr-3" />
              Dashboard
            </Link>
          </li>
          <li className="mb-4">
            <div
              onClick={handleProjectsClick}
              className={`flex items-center px-4 py-2 cursor-pointer rounded ${isActive(
                "/projects"
              )}`}
            >
              <FolderIcon className="w-5 h-5 mr-3" />
              Projects
            </div>
            {isProjectsOpen && (
              <ul className="mt-2 ml-8">
                <li className="mb-2">
                  <Link
                    to="/projects/new"
                    className={`flex items-center px-4 py-2 rounded ${isActive(
                      "/projects/new"
                    )}`}
                  >
                    <PlusIcon className="w-5 h-5 mr-3" />
                    New Project
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="/projects"
                    className={`flex items-center px-4 py-2 rounded ${isActive(
                      "/projects"
                    )}`}
                  >
                    <FolderIcon className="w-5 h-5 mr-3" />
                    List Projects
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="/projects/archived"
                    className={`flex items-center px-4 py-2 rounded ${isActive(
                      "/projects/archived"
                    )}`}
                  >
                    <ArchiveBoxIcon className="w-5 h-5 mr-3" />
                    Archived Projects
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="/projects/last"
                    className={`flex items-center px-4 py-2 rounded ${isActive(
                      "/projects/last"
                    )}`}
                  >
                    <ClockIcon className="w-5 h-5 mr-3" />
                    Last Projects
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li className="mb-4">
            <div
              onClick={handleUsersClick}
              className={`flex items-center px-4 py-2 cursor-pointer rounded gap-3 ${isActive(
                "/users"
              )}`}
            >
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21c-2.676 0-5.216-.584-7.499-1.632Z" />
</svg>
              Users
            </div>
            {isUsersOpen && (
              <ul className="mt-2 ml-8">
                <li className="mb-2">
                  <Link
                    to="/users/list"
                    className={`flex items-center px-4 py-2 rounded ${isActive(
                      "/users/list"
                    )}`}
                  >
                    <UsersIcon className="w-5 h-5 mr-3" />
                    List Users
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="/users/new"
                    className={`flex items-center px-4 py-2 rounded ${isActive(
                      "/users/new"
                    )}`}
                  >
                    <PlusIcon className="w-5 h-5 mr-3" />
                    New User
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="/users/teams"
                    className={`flex items-center px-4 py-2 rounded gap-3 ${isActive(
                      "/users/teams"
                    )}`}
                  >
                    <svg className="w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
</svg>
                    Teams
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li className="mb-4">
            <div
              onClick={handleExpensesClick}
              className={`flex items-center px-4 py-2 cursor-pointer rounded ${isActive(
                "/expenses"
              )}`}
            >
              <CurrencyEuroIcon className="w-5 h-5 mr-3" />
              Expenses
            </div>
            {isExpensesOpen && (
              <ul className="mt-2 ml-8">
                <li className="mb-2">
                  <Link
                    to="/expenses/new"
                    className={`flex items-center px-4 py-2 rounded ${isActive(
                      "/expenses/new"
                    )}`}
                  >
                    <PlusIcon className="w-5 h-5 mr-3" />
                    Request Expense
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="/expenses/list"
                    className={`flex items-center px-4 py-2 rounded ${isActive(
                      "/expenses/list"
                    )}`}
                  >
                    <ArchiveBoxIcon className="w-5 h-5 mr-3" />
                    List Expenses
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="/expenses/approvement"
                    className={`flex items-center px-4 py-2 rounded ${isActive(
                      "/expenses/approvement"
                    )}`}
                  >
                    <CheckIcon className="w-5 h-5 mr-3" />
                    Approvement
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li className="mb-4">
            <div
              onClick={handleTasksClick}
              className={`flex items-center px-4 py-2 cursor-pointer rounded ${isActive(
                "/tasks"
              )}`}
            >
              <TableCellsIcon className="w-5 h-5 mr-3" />
              Tasks
            </div>
            {isTasksOpen && (
              <ul className="mt-2 ml-8">
                <li className="mb-2">
                  <Link
                    to="/tasks/view"
                    className={`flex items-center px-4 py-2 rounded ${isActive(
                      "/tasks/view"
                    )}`}
                  >
                    <DeviceTabletIcon className="w-5 h-5 mr-3" />
                    View Tasks
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="/tasks/new"
                    className={`flex items-center px-4 py-2 rounded ${isActive(
                      "/tasks/new"
                    )}`}
                  >
                    <PlusIcon className="w-5 h-5 mr-3" />
                    New Task
                  </Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
