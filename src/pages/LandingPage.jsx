import React from 'react';
import Layout from '../components/layout/Layout';

function LandingPage() {
  return (
    <Layout>
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-blue-500">Welcome to the Landing Page</h1>
            <p className="mt-4 text-lg text-gray-700">This is the landing page of your application.</p>
          </div>
        </div>
    </Layout>
  );
}

export default LandingPage;
