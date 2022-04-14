import React from 'react';

import Tabs from '@/components/Tabs';
import MembersTable from '@/pages/Members/MembersTable';

import './Members.scss';

const Members: React.FC = () => {
  const dataTabs = [
    {
      key: '1',
      title: 'Nhân viên',
      content: <MembersTable />,
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
