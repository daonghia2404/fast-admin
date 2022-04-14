import React from 'react';

import Tabs from '@/components/Tabs';
import UsersTable from '@/pages/Users/UsersTable';

import './Users.scss';

const Users: React.FC = () => {
  const dataTabs = [
    {
      key: '1',
      title: 'Khách hàng',
      content: <UsersTable />,
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
