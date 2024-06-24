import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-[#100E09]">
      <Navbar />
      <main className="flex-grow px-6 lg:px-12 mt-24 lg:mt-36">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
