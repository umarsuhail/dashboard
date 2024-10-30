import React, { ReactNode } from 'react';
import Sidebar from '../components/Sidebar';
import BreadCrumbs from '../components/BreadCrumbs';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen w-full bg-secondary_bg">
      <Sidebar />
      <div className="flex-1 p-4 text-white overflow-scroll max-h-screen">
        <header className="text-2xl font-bold text-gray-950 mb-4">
          <h1>Dashboard</h1>
        <BreadCrumbs></BreadCrumbs>

        </header>
        <main className="bg-white  rounded-lg shadow-md mx-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
