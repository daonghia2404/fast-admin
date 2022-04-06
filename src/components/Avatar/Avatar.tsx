import React from 'react';
import { Avatar as AntdAvatar } from 'antd';
import classNames from 'classnames';

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

  const isShowImg = !forceContent && image;
  const isShowDefault = forceContent || fullname;

  return (
    <div className={classNames('Avatar', className)} onClick={handleClickAvatar} style={style}>
      <AntdAvatar src={!forceContent ? image : ''} size={size}>
        {isShowImg && <AntdAvatar src={image} size={size} />}
        {isShowDefault && (
          <AntdAvatar size={size}>{forceContent || formatAbbreviationsName(fullname || '')}</AntdAvatar>
        )}
      </AntdAvatar>
    </div>
  );
};

export default Avatar;
