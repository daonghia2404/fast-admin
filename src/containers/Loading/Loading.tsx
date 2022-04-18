import React from 'react';
import { Spin } from 'antd';
import classNames from 'classnames';

import { TLoadingProps } from './Loading.types';
import './Loading.scss';

const Loading: React.FC<TLoadingProps> = ({ absolute, minHeight = '30rem' }) => {
  return (
    <div className={classNames('Loading flex items-center justify-center', { absolute })} style={{ minHeight }}>
      <Spin />
    </div>
  );
};

export default Loading;
