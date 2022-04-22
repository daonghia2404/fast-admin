import React from 'react';

import Loading from '@/containers/Loading';

import './PageLoading.scss';

const PageLoading: React.FC = () => {
  return (
    <div className="PageLoading flex items-center justify-center">
      <Loading />
    </div>
  );
};

export default PageLoading;
