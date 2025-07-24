import { ReactNode } from "react";

export interface CardProps{
    title: string;
    content: string;
}

//All size buttton interface is here
export interface ButtonProps {
  text: string;
  size?: 'small' | 'medium' | 'large';
  shape?: 'rounded-sm' | 'rounded-md' | 'rounded-full';
  onClick?: () => void;
}

//for posts
export interface PostProps {
  userId: number;
  title: string;
  content: string;
}

//user cards
export interface UserProps {
  name: string;
  email: string;
  address: {
    street: string;
    city: string;
  };
}

