import React from 'react';
import Button from '@/components/common/Button';
import Header from '@/components/layout/Header';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 ">
      <Header />
      <h1 className="text-2xl font-bold mb-6">About Us</h1>

      <div className="flex gap-6 flex-wrap p-8">
        <Button text="Small & Rounded" size="small" shape="rounded-sm" />
        <Button text="Medium & Pill" size="medium" shape="rounded-md" />
        <Button text="Large & Rounded" size="large" shape="rounded-full" />
      </div>
    </div>
  );
};

export default About;
