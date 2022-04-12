import React from 'react';
import classNames from 'classnames';
import { useLocation } from '@reach/router';

import Icon, { EIconColor } from '@/components/Icon';

import { THeaderAdminNavigationProps } from './HeaderAdminNavigation.types';
import { dataHeaderAdminNavigation } from './HeaderAdminNavigation.data';
import './HeaderAdminNavigation.scss';

const HeaderAdminNavigation: React.FC<THeaderAdminNavigationProps> = () => {
  const { pathname } = useLocation();

  return (
    <div className="HeaderAdminNavigation flex items-center">
      {dataHeaderAdminNavigation.map((item) => (
        <div
          className={classNames('HeaderAdminNavigation-item flex items-center', {
            disabled: item.disabled,
            active: pathname.includes(item.link),
          })}
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
