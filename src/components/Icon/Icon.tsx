import React from 'react';
import classNames from 'classnames';

import { TIconProps } from './Icon.types';
import { EIconName } from './Icon.enums';
import './Icon.scss';

import FacebookCircle from './FacebookCircle';
import ZaloCircle from './ZaloCircle';
import LinkedInCircle from './LinkedInCircle';
import Menu from './Menu';
import AngleRight from './AngleRight';
import CloudDownload from './CloudDownload';
import Video from './Video';
import UserLine from './UserLine';
import Calendar from './Calendar';
import AngleDown from './AngleDown';
import UserSquare from './UserSquare';
import Locked from './Locked';
import Book from './Book';
import Logout from './Logout';
import Phone from './Phone';
import Facebook from './Facebook';
import Wechat from './Wechat';

const Icon: React.FC<TIconProps> = ({ name, className, color, onClick }) => {
  const renderIcon = (): React.ReactElement => {
    switch (name) {
      case EIconName.FacebookCircle:
        return <FacebookCircle color={color} />;
      case EIconName.ZaloCircle:
        return <ZaloCircle color={color} />;
      case EIconName.LinkedInCircle:
        return <LinkedInCircle color={color} />;
      case EIconName.Menu:
        return <Menu color={color} />;
      case EIconName.AngleRight:
        return <AngleRight color={color} />;
      case EIconName.Calendar:
        return <Calendar color={color} />;
      case EIconName.UserLine:
        return <UserLine color={color} />;
      case EIconName.Video:
        return <Video color={color} />;
      case EIconName.CloudDownload:
        return <CloudDownload color={color} />;
      case EIconName.AngleDown:
        return <AngleDown color={color} />;
      case EIconName.UserSquare:
        return <UserSquare color={color} />;
      case EIconName.Locked:
        return <Locked color={color} />;
      case EIconName.Book:
        return <Book color={color} />;
      case EIconName.Logout:
        return <Logout color={color} />;
      case EIconName.Phone:
        return <Phone color={color} />;
      case EIconName.Facebook:
        return <Facebook color={color} />;
      case EIconName.Wechat:
        return <Wechat color={color} />;

      default:
        return <></>;
    }
  };

  return (
    <div className={classNames('Icon', 'flex', 'justify-center', 'items-center', className)} onClick={onClick}>
      {renderIcon()}
    </div>
  );
};

export default Icon;
