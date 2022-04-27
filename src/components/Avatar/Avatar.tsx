import React from 'react';
import { Avatar as AntdAvatar } from 'antd';
import classNames from 'classnames';

import ImageAvatarDefault from '@/assets/images/image-avatar-default.png';

import { formatAbbreviationsName } from '@/utils/functions';
import { TAvatarProps } from './Avatar.types';

import './Avatar.scss';

const Avatar: React.FC<TAvatarProps> = ({
  className,
  image,
  fullname,
  forceContent,
  size = 40,
  style,
  onClickAvatar,
}) => {
  const handleClickAvatar = (): void => {
    onClickAvatar?.();
  };

  return (
    <div className={classNames('Avatar', className)} onClick={handleClickAvatar} style={style}>
      <AntdAvatar src={image || ImageAvatarDefault} size={size}>
        {forceContent || formatAbbreviationsName(fullname || '')}
      </AntdAvatar>
    </div>
  );
};

export default Avatar;
