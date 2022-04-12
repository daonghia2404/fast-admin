import React from 'react';

import Tabs from '@/components/Tabs';
import UsersTable from '@/pages/Users/UsersTable';

import './Users.scss';

const Users: React.FC = () => {
  const dataTabs = [
    {
      key: '1',
      title: 'Tab 1',
      content: <UsersTable />,
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
    <div className="Users">
      <div className="Users-tab">
        <Tabs dataTabs={dataTabs} />
      </div>
    </div>
  );
};

export default Users;
