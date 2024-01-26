import React, { useState, useEffect } from "react";

const UserList = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setUsers(data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch users: ", error);
        setLoading(false);
      }
    };
    getUsers();
  }, []);

  if (loading) {
    return (
      <p className="flex justify-center items-center h-screen">Loading...</p>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">
      {users.map((user) => (
        <div
          key={user.id}
          className="shadow-lg rounded-lg overflow-hidden max-w-xs mx-auto my-4"
        >
          <img
            className="w-full"
            src={`https://robohash.org/${user.id}`}
            alt="random photo"
          />
          <div className="px-6 py-4">
            <h2 className="font-bold text-xl mb-2">{user.name}</h2>
            <p className="text-gray-700 text-base">{user.email}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserList;
