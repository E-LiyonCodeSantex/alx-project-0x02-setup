import React from "react";
import { type PostProps } from "@/interfaces";

const PostCard: React.FC<PostProps> = ({ userId, title, content }) => {
  return (
    <div className="bg-white p-4 rounded shadow-md hover:shadow-lg transition duration-300">
      <h2 className="text-lg font-bold text-blue-700 mb-2">{title}</h2>
      <p className="text-gray-700 mb-2">{content}</p>
      <span className="text-sm text-gray-500">User ID: {userId}</span>
    </div>
  );
};

export default PostCard;
