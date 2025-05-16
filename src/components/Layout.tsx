import React, { ReactNode } from 'react';
import { ScrollProvider } from '../context/ScrollContext';

interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <ScrollProvider>
      <div className="relative w-full min-h-screen bg-gradient-to-b from-black via-purple-950 to-black text-white">
        {children}
      </div>
    </ScrollProvider>
  );
};