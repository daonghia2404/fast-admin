import React from 'react';

import HomeBanner from '@/containers/HomeBanner';
import Services from '@/containers/Services';
import RegisterNow from '@/containers/RegisterNow';
import About from '@/containers/About';

const Home: React.FC = () => {
  return (
    <div className="Home">
      <HomeBanner />
      <Services />
      <RegisterNow />
      <About />
    </div>
  );
};

export default Home;
