import React from 'react';
import { useSelector } from 'react-redux';

import HomeBanner from '@/containers/HomeBanner';
import Services from '@/containers/Services';
import RegisterNow from '@/containers/RegisterNow';
import About from '@/containers/About';
import { EBannerControllerAction } from '@/redux/actions/banner-controller/constants';
import { TRootState } from '@/redux/reducers';
import { EArticleControllerAction } from '@/redux/actions/article-controller/constants';
import PageLoading from '@/containers/PageLoading';

const Home: React.FC = () => {
  const getBannerLoading = useSelector((state: TRootState) => state.loadingReducer[EBannerControllerAction.GET_BANNER]);
  const getHomeContentLoading = useSelector(
    (state: TRootState) => state.loadingReducer[EArticleControllerAction.GET_HOME_CONTENT],
  );
  const getContentLoading = useSelector(
    (state: TRootState) => state.loadingReducer[EArticleControllerAction.GET_ABOUT_US],
  );
  const getMiddleBandLoading = useSelector(
    (state: TRootState) => state.loadingReducer[EArticleControllerAction.GET_MIDDLE_BAND],
  );

  const loading = getBannerLoading || getHomeContentLoading || getContentLoading || getMiddleBandLoading;

  return (
    <div className="Home">
      {loading && <PageLoading />}
      <HomeBanner />
      <Services />
      <RegisterNow />
      <About />
    </div>
  );
};

export default Home;
