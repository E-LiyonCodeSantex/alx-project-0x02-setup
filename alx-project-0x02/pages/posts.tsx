// pages/posts.tsx
import React from "react";
import PostCard from "@/components/common/PostCard";
import { type PostProps } from "@/interfaces";
import Header from "@/components/layout/Header";

interface PostsPageProps {
  posts: PostProps[];
}

export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=6");
  const data = await response.json();

  const posts: PostProps[] = data.map((post: any) => ({
    userId: post.userId,
    title: post.title,
    content: post.body,
  }));

  return {
    props: {
      posts,
    },
  };
};

const PostsPage: React.FC<PostsPageProps> = ({ posts }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Recent Posts</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {posts.map((post, index) => (
            <PostCard
              key={index}
              userId={post.userId}
              title={post.title}
              content={post.content}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostsPage;
