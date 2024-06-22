import React from 'react';
import Layout from '../components/layout/Layout';
import Hero from '../components/landingPage/Hero';
import TrendingNFTs from '../components/landingPage/TrendingNFTs';

function LandingPage() {
  return (
    <Layout>
      <Hero />
      <TrendingNFTs />
    </Layout>
  );
}

export default LandingPage;
