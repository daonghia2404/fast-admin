import React, { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import HomeBanner from '@/containers/HomeBanner';
import Services from '@/containers/Services';
import RegisterNow from '@/containers/RegisterNow';
import About from '@/containers/About';
import { getHomeContentAction } from '@/redux/actions';

const Home: React.FC = () => {
  const dispatch = useDispatch();

  const getHomeContent = useCallback(() => {
    dispatch(getHomeContentAction.request());
  }, [dispatch]);

  useEffect(() => {
    getHomeContent();
  }, [getHomeContent]);

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
