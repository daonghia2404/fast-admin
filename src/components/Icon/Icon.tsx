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
import ArrowRight from './ArrowRight';
import CaretDown from './CaretDown';
import Search from './Search';
import CalendarGrid from './CalendarGrid';
import Filter from './Filter';
import Blog from './Blog';
import Dashboard from './Dashboard';
import DocumentReward from './DocumentReward';
import DocumentSigned from './DocumentSigned';
import Grid from './Grid';
import Members from './Members';
import Settings from './Settings';
import Users from './Users';
import House from './House';
import Bell from './Bell';
import Mail from './Mail';
import Reload from './Reload';
import Pencil from './Pencil';
import Trash from './Trash';
import SettingCheck from './SettingCheck';
import Plus from './Plus';
import StatusRunning from './StatusRunning';
import ClockRevert from './ClockRevert';

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
      case EIconName.ArrowRight:
        return <ArrowRight color={color} />;
      case EIconName.CaretDown:
        return <CaretDown color={color} />;
      case EIconName.Search:
        return <Search color={color} />;
      case EIconName.CalendarGrid:
        return <CalendarGrid color={color} />;
      case EIconName.Filter:
        return <Filter color={color} />;
      case EIconName.Blog:
        return <Blog color={color} />;
      case EIconName.Dashboard:
        return <Dashboard color={color} />;
      case EIconName.DocumentReward:
        return <DocumentReward color={color} />;
      case EIconName.DocumentSigned:
        return <DocumentSigned color={color} />;
      case EIconName.Grid:
        return <Grid color={color} />;
      case EIconName.Members:
        return <Members color={color} />;
      case EIconName.Settings:
        return <Settings color={color} />;
      case EIconName.Users:
        return <Users color={color} />;
      case EIconName.House:
        return <House color={color} />;
      case EIconName.Bell:
        return <Bell color={color} />;
      case EIconName.Mail:
        return <Mail color={color} />;
      case EIconName.Reload:
        return <Reload color={color} />;
      case EIconName.Pencil:
        return <Pencil color={color} />;
      case EIconName.Trash:
        return <Trash color={color} />;
      case EIconName.SettingCheck:
        return <SettingCheck color={color} />;
      case EIconName.Plus:
        return <Plus color={color} />;
      case EIconName.StatusRunning:
        return <StatusRunning color={color} />;
      case EIconName.ClockRevert:
        return <ClockRevert color={color} />;

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
