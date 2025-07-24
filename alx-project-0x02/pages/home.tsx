// pages/home.tsx
import React, { useState } from 'react';
import Card from '@/components/common/Card';
import PostModal from '@/components/common/PostModal';
import { CARDLISTINGSAMPLE } from '@/constants/index';
import { CardProps } from '@/interfaces';
import Header from '@/components/layout/Header';

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [posts, setPosts] = useState<CardProps[]>(CARDLISTINGSAMPLE);

  const handleAddPost = (newPost: CardProps) => {
    setPosts((prev) => [newPost, ...prev]);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="p-6">
        <button
          onClick={() => setShowModal(true)}
          className="mb-6 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition duration-300"
        >
          Add New Post
        </button>

        {showModal && (
          <PostModal onClose={() => setShowModal(false)} onSubmit={handleAddPost} />
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {posts.map((card, index) => (
            <Card key={index} title={card.title} content={card.content} />
          ))}
        </div>
      </div>
    </div>
  );
}
