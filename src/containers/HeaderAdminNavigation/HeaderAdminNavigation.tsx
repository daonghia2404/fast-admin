import React from 'react';
import classNames from 'classnames';
import { navigate, useLocation } from '@reach/router';

import Icon, { EIconColor } from '@/components/Icon';

import { THeaderAdminNavigationItem, THeaderAdminNavigationProps } from './HeaderAdminNavigation.types';
import { dataHeaderAdminNavigation } from './HeaderAdminNavigation.data';
import './HeaderAdminNavigation.scss';

const HeaderAdminNavigation: React.FC<THeaderAdminNavigationProps> = () => {
  const { pathname } = useLocation();

  const handleClickNavigation = (data: THeaderAdminNavigationItem): void => {
    if (!data.disabled && data.link) {
      navigate(data.link);
    }
  };

  return (
    <div className="HeaderAdminNavigation flex items-center">
      {dataHeaderAdminNavigation.map((item, index) => (
        <div
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          className={classNames('HeaderAdminNavigation-item flex items-center', {
            disabled: item.disabled,
            active: pathname.includes(item.link),
          })}
          onClick={(): void => handleClickNavigation(item)}
        >
          <div className="HeaderAdminNavigation-item-icon">
            <Icon name={item.icon} color={EIconColor.GRAY} />
          </div>
          <div className="HeaderAdminNavigation-item-title">{item.title}</div>
        </div>
      ))}
    </div>
  );
};

export default HeaderAdminNavigation;
