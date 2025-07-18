import React from 'react';
import Header from './components/Header';
import Hero3D from './components/Hero3D';
import TechShowcase from './components/TechShowcase';
import MetaverseLab from './components/MetaverseLab';
import FutureTechGrid from './components/FutureTechGrid';
import Mission from './components/Mission';
import FocusAreas from './components/FocusAreas';
import FlagshipResearch from './components/FlagshipResearch';
import EngagementFormats from './components/EngagementFormats';
import Faculty from './components/Faculty';
import Partnership from './components/Partnership';
import LatestInsights from './components/LatestInsights';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#EAEADA]">
      <Header />
      <Hero3D />
      <Mission />
      <FocusAreas />
      <FlagshipResearch />
      <FutureTechGrid />
      {/* <EngagementFormats /> */}
      <Faculty />
      <Partnership />
      <LatestInsights />
      <Footer />
    </div>
  );
}

export default App;