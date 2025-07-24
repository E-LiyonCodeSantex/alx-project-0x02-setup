import React from "react";
import { type UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
  return (
    <div className="bg-white p-4 rounded shadow hover:shadow-lg transition duration-300">
      <h2 className="text-lg font-semibold text-blue-700 mb-1">{name}</h2>
      <p className="text-gray-700 mb-1">{email}</p>
      <p className="text-sm text-gray-500">
        {address.street}, {address.city}
      </p>
    </div>
  );
};

export default UserCard;
