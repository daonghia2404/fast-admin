import React from 'react';

import Header from '@/containers/Header';
import Footer from '@/containers/Footer';
import { TGuestProps } from './Guest.types';
import ContactElement from '@/containers/ContactElement';

import './Guest.scss';

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

      <ContactElement />
    </div>
  );
};

export default Guest;
