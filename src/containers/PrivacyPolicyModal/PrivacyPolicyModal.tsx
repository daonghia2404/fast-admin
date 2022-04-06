import React from 'react';

import Modal from '@/components/Modal';
import ImagePrivacyPolicy from '@/assets/images/image-privacy-policy.png';

import { TPrivacyPolicyModalProps } from './PrivacyPolicyModal.types';
import './PrivacyPolicyModal.scss';

const PrivacyPolicyModal: React.FC<TPrivacyPolicyModalProps> = ({ visible, onClose }) => {
  return (
    <Modal visible={visible} onClose={onClose} maxWidth="84rem" radius wrapClassName="PrivacyPolicyModal-wrapper">
      <div className="PrivacyPolicyModal-title">Điều khoản chính sách</div>
      <div className="PrivacyPolicyModal-image">
        <img src={ImagePrivacyPolicy} alt="" />
      </div>
      <ul className="PrivacyPolicyModal-list">
        <li className="PrivacyPolicyModal-list-item">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book. It has survived not only five centuries, but also the leap into electronic
        </li>
        <li className="PrivacyPolicyModal-list-item">
          typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
          sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
        </li>
        <li className="PrivacyPolicyModal-list-item">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book. It has survived not only five centuries, but also the leap into electronic{' '}
        </li>
      </ul>
    </Modal>
  );
};

export default PrivacyPolicyModal;
