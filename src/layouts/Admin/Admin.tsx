import React from 'react';

import { TAdminProps } from '@/layouts/Admin/Admin.types';
import HeaderAdmin from '@/containers/HeaderAdmin';
import HeaderAdminNavigation from '@/containers/HeaderAdminNavigation';

import './Admin.scss';

const Admin: React.FC<TAdminProps> = ({ children }) => {
  return (
    <div className="Admin">
      <div className="Admin-header">
        <HeaderAdmin />
        <HeaderAdminNavigation />
      </div>
      <div className="Admin-body">{children}</div>
    </div>
  );
};

export default Admin;
