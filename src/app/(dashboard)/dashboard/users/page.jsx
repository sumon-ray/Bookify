
import { FaTrashAlt } from 'react-icons/fa';

export default function page() {
  const users = [
    { id: 1, name: "wrong tru", date: "10/6/2024", email: "info@fashionshop.com" },
    { id: 2, name: "harray porter", date: "10/6/2024", email: "info@fashionshop.com" },
    { id: 3, name: "Ribbed Tank Top", date: "10/6/2024", email: "info@fashionshop.com" },
    { id: 4, name: "Oversized Motif T-shirt", date: "10/6/2024", email: "info@fashionshop.com" },
    { id: 5, name: "Jersey thong body", date: "10/6/2024", email: "info@fashionshop.com" },
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="overflow-x-auto">
        <table className="w-full table-auto bg-gray-900 text-gray-100">
          <thead>
            <tr className="text-left">
              <th className="p-4">Name</th>
              <th className="p-4">Date</th>
              <th className="p-4">Email</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-t border-gray-700">
                <td className="p-4">
                  <div className="flex items-center space-x-3">
                    <img
                      className="w-10 h-10 rounded-full"
                      src={`https://via.placeholder.com/150?text=${user.name.split(" ")[0]}`}
                      alt={user.name}
                    />
                    <div>
                      <p className="font-semibold">{user.name}</p>
                     
                    </div>
                  </div>
                </td>
                <td className="p-4">  {new Date(user.date).toLocaleDateString()}</td>
                <td className="p-4">{user.email}</td>
                <td className="p-4">
                  <button className="text-red-500 hover:text-red-700">
                    <FaTrashAlt size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};


import React from 'react';

const page = () => {
    return (
        <div>
         this is user pageeeeee..
        </div>
    );
};

export default page;

