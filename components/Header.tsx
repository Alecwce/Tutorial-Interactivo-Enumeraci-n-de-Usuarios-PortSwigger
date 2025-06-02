
import React from 'react';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="bg-gray-800 shadow-md p-4 rounded-t-lg">
      <h1 className="text-2xl font-bold text-center text-sky-400">{title}</h1>
    </header>
  );
};

export default Header;
