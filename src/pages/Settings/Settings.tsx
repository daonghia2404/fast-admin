import React from 'react';

import Tabs from '@/components/Tabs';
import SystemSetting from '@/pages/Settings/SystemSetting';
import EmailSetting from '@/pages/Settings/EmailSetting';

import './Settings.scss';

const Settings: React.FC = () => {
  const dataTabs = [
    {
      key: '1',
      title: 'Cài đặt chung',
      content: <SystemSetting />,
    },
    {
      key: '2',
      title: 'Máy chủ email',
      content: <EmailSetting />,
    },
    {
      key: '3',
      title: 'Tab 3',
      content: <></>,
    },
  ];

  return (
    <div className="Settings">
      <div className="Settings-tab">
        <Tabs dataTabs={dataTabs} />
      </div>
    </div>
  );
};

export default Settings;
