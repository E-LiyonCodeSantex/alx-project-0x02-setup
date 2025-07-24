import React from "react";
import UserCard from "@/components/common/UserCard";
import { type UserProps } from "@/interfaces";
import Header from "@/components/layout/Header";

interface UsersPageProps {
  users: UserProps[];
}

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users?_limit=6");
  const data = await res.json();

  const users: UserProps[] = data.map((user: any) => ({
    name: user.name,
    email: user.email,
    address: {
      street: user.address.street,
      city: user.address.city,
    },
  }));

  return {
    props: { users },
  };
};

const UsersPage: React.FC<UsersPageProps> = ({ users }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">User Directory</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {users.map((user, index) => (
            <UserCard
              key={index}
              name={user.name}
              email={user.email}
              address={user.address}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UsersPage;
