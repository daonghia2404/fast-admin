import React from 'react';

import Tabs from '@/components/Tabs';
import MembersTable from '@/pages/Members/MembersTable';

import './Members.scss';

const Members: React.FC = () => {
  const dataTabs = [
    {
      key: '1',
      title: 'Tab 1',
      content: <MembersTable />,
    },
    {
      key: '2',
      title: 'Tab 2',
      content: <></>,
    },
    {
      key: '3',
      title: 'Tab 3',
      content: <></>,
    },
  ];

  return (
    <div className="Members">
      <div className="Members-tab">
        <Tabs dataTabs={dataTabs} />
      </div>
    </div>
  );
};

export default Members;
