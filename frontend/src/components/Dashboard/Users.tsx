
import React, { useState } from 'react';
import { users } from '../../data/users';
import { motion } from 'framer-motion';

const Users: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  return (
    <div className="p-4 bg-white rounded shadow-md">
      <h1 className="mb-4 text-2xl font-bold text-pink-500">Users</h1>
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {currentUsers.map((user) => (
          <motion.div
            key={user.id}
            className="p-4 rounded shadow cursor-pointer bg-gray-50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="mb-2 text-xl font-semibold text-blue-700">{user.fullName}</h2>
            <p className="mb-1 font-semibold text-neutral-700">Username:<span className="text-lg text-neutral-400">{user.username}</span></p>
            <p className="mb-1 font-semibold text-neutral-700">Email: <span>{user.email}</span></p>
            <p className="font-semibold text-neutral-700">Title: <span>{user.title}</span></p>
          </motion.div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        {Array.from({ length: Math.ceil(users.length / usersPerPage) }, (_, i) => (
          <button
            key={i}
            onClick={() => handlePageChange(i + 1)}
            className={`mx-1 px-3 py-1 rounded ${
              currentPage === i + 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Users;
