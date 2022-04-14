import React from 'react';

import Modal from '@/components/Modal';
import Button from '@/components/Button';

import { TModalConfirmProps } from './ModalConfirm.types';
import './ModalConfirm.scss';

const ModalConfirm: React.FC<TModalConfirmProps> = ({ visible, loading, title, description, onSubmit, onClose }) => {
  return (
    <Modal visible={visible} onClose={onClose} wrapClassName="ModalConfirm-wrapper" maxWidth="60rem">
      <div className="ModalConfirm-title">{title}</div>
      <div className="ModalConfirm-description">{description}</div>
      <div className="ModalConfirm-actions flex justify-between">
        <Button type="primary" title="Đồng ý" onClick={onSubmit} loading={loading} />
        <Button className="outline-primary" title="Huỷ bỏ" onClick={onClose} disabled={loading} />
      </div>
    </Modal>
  );
};

export default ModalConfirm;
