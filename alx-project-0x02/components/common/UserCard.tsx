import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
  return (
    <div className="bg-white p-4 shadow rounded-lg">
      <h2 className="text-lg font-semibold">{name}</h2>
      <p className="text-sm text-gray-600">{email}</p>
      <p className="text-sm text-gray-500">
        {address.street}, {address.city}
      </p>
    </div>
  );
};

export default UserCard;
