import React from 'react';

import Header from '@/containers/Header';
import Footer from '@/containers/Footer';
import { TGuestProps } from './Guest.types';

const Guest: React.FC<TGuestProps> = ({ children }) => {
  return (
    <div className="Guest">
      <div className="Guest-header">
        <Header />
      </div>
      <div className="Guest-body">{children}</div>
      <div className="Guest-footer">
        <Footer />
      </div>
    </div>
  );
};

export default Guest;
