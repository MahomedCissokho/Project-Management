import { useUser, SignOutButton, UserButton } from "@clerk/clerk-react";
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
} from "@heroicons/react/24/solid";
import { DeviceTabletIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const Sidebar = () => {
  const location = useLocation();
  const { user } = useUser();
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [isUsersOpen, setIsUsersOpen] = useState(false);
  const [isExpensesOpen, setIsExpensesOpen] = useState(false);
  const [isTasksOpen, setIsTasksOpen] = useState(false);

  useEffect(() => {
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

  const isActive = (path: string) => {
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
          {user?.username}
        </motion.div>
      </div>
      <nav className="flex-1 p-4 pt-5">
        <ul>
          <li className="mb-4">
            <Link
              to="/dashboard"
              className={`flex items-center px-4 py-2 rounded ${isActive("/dashboard")}`}
            >
              <HomeIcon className="w-5 h-5 mr-3" />
              Dashboard
            </Link>
          </li>
          <li className="mb-4">
            <div
              onClick={handleProjectsClick}
              className={`flex items-center px-4 py-2 cursor-pointer rounded ${isActive("/projects")}`}
            >
              <FolderIcon className="w-5 h-5 mr-3" />
              Projects
            </div>
            {isProjectsOpen && (
              <ul className="mt-2 ml-8">
                <li key="new-project" className="mb-2">
                  <Link
                    to="/createProject"
                    className={`flex items-center px-4 py-2 rounded ${isActive("/createProject")}`}
                  >
                    <PlusIcon className="w-5 h-5 mr-3" />
                    New Project
                  </Link>
                </li>
                <li key="list-projects" className="mb-2">
                  <Link
                    to="/projects"
                    className={`flex items-center px-4 py-2 rounded ${isActive("/projects")}`}
                  >
                    <FolderIcon className="w-5 h-5 mr-3" />
                    List Projects
                  </Link>
                </li>
                <li key="archived-projects" className="mb-2">
                  <Link
                    to="/projects"
                    className={`flex items-center px-4 py-2 rounded ${isActive("/projects/archived")}`}
                  >
                    <ArchiveBoxIcon className="w-5 h-5 mr-3" />
                    Archived Projects
                  </Link>
                </li>
                <li key="last-projects" className="mb-2">
                  <Link
                    to="/projects"
                    className={`flex items-center px-4 py-2 rounded ${isActive("/projects/last")}`}
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
              className={`flex items-center px-4 py-2 cursor-pointer rounded gap-3 ${isActive("/users")}`}
            >
              <UsersIcon className="w-5 h-5 mr-3" />
              Users
            </div>
            {isUsersOpen && (
              <ul className="mt-2 ml-8">
                <li key="list-users" className="mb-2">
                  <Link
                    to="/Userslist"
                    className={`flex items-center px-4 py-2 rounded ${isActive("/Userslist")}`}
                  >
                    <UsersIcon className="w-5 h-5 mr-3" />
                    List Users
                  </Link>
                </li>
                <li key="new-user" className="mb-2">
                  <Link
                    to="/CreateUser"
                    className={`flex items-center px-4 py-2 rounded ${isActive("/CreateUser")}`}
                  >
                    <PlusIcon className="w-5 h-5 mr-3" />
                    New User
                  </Link>
                </li>
                <li key="teams" className="mb-2">
                  <Link
                    to="/teams"
                    className={`flex items-center px-4 py-2 rounded gap-3 ${isActive("Teams")}`}
                  >
                    <DeviceTabletIcon className="w-5 h-5 mr-3" />
                    Teams
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li className="mb-4">
            <div
              onClick={handleExpensesClick}
              className={`flex items-center px-4 py-2 cursor-pointer rounded ${isActive("/expenses")}`}
            >
              <CurrencyEuroIcon className="w-5 h-5 mr-3" />
              Expenses
            </div>
            {isExpensesOpen && (
              <ul className="mt-2 ml-8">
                <li key="request-expense" className="mb-2">
                  <Link
                    to="/dashboadExpenses"
                    className={`flex items-center px-4 py-2 rounded ${isActive("/dashboadExpenses")}`}
                  >
                    <PlusIcon className="w-5 h-5 mr-3" />
                    Request Expense
                  </Link>
                </li>
                <li key="list-expenses" className="mb-2">
                  <Link
                    to="/ExpensesList"
                    className={`flex items-center px-4 py-2 rounded ${isActive("/ExpensesList")}`}
                  >
                    <ArchiveBoxIcon className="w-5 h-5 mr-3" />
                    List Expenses
                  </Link>
                </li>
                <li key="expenses-approvement" className="mb-2">
                  <Link
                    to="/expenses/approvement"
                    className={`flex items-center px-4 py-2 rounded ${isActive("/expenses/approvement")}`}
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
              className={`flex items-center px-4 py-2 cursor-pointer rounded ${isActive("/tasks")}`}
            >
              <TableCellsIcon className="w-5 h-5 mr-3" />
              Tasks
            </div>
            {isTasksOpen && (
              <ul className="mt-2 ml-8">
                <li key="my-tasks" className="mb-2">
                  <Link
                    to="/taskIndex"
                    className={`flex items-center px-4 py-2 rounded ${isActive("/taskIndex")}`}
                  >
                    <TableCellsIcon className="w-5 h-5 mr-3" />
                    My Tasks
                  </Link>
                </li>
                <li key="task-create" className="mb-2">
                  <Link
                    to="/tasks"
                    className={`flex items-center px-4 py-2 rounded ${isActive("/tasks")}`}
                  >
                    <PlusIcon className="w-5 h-5 mr-3" />
                    Create Task
                  </Link>
                  </li>
                <li key="task-assign" className="mb-2">
                  <Link
                    to="/tasksAssign"
                    className={`flex items-center px-4 py-2 rounded ${isActive("/taskAssign")}`}
                  >
                    <TableCellsIcon className="w-5 h-5 mr-3" />
                    Task Assign
                  </Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
     
      <div className="p-4 border-t">
        <div className="flex items-center justify-center gap-3">
          <UserButton afterSignOutUrl="/" />
          <SignOutButton>
            <button className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600">
              Sign Out
            </button>
          </SignOutButton>
        </div>
      </div> </nav>
    </div>
  );
};

export default Sidebar;
