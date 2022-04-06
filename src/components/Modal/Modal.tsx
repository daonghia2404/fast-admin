import React from 'react';
import { Modal as AntdModal } from 'antd';
import classNames from 'classnames';

import { TModalProps } from '@/components/Modal';
import IconModalClose from '@/assets/icons/icon-close.svg';

import './Modal.scss';

export const Modal: React.FC<TModalProps> = ({
  className,
  wrapClassName,
  maxWidth,
  title,
  visible,
  closeable = true,
  radius,
  onClose,
  onClickClose,
  children,
}) => {
  const handleCloseModal = (): void => {
    onClickClose?.();
    onClose?.();
  };

  const handleCancelModal = (): void => {
    onClose?.();
  };

  return (
    <AntdModal
      className={classNames('Modal', className)}
      visible={visible}
      closable={false}
      width="100% !important"
      title={title}
      style={{ maxWidth }}
      wrapClassName={classNames('Modal-overlay', wrapClassName, { radius })}
      footer={null}
      getContainer={document.body}
      onCancel={handleCancelModal}
    >
      {closeable && (
        <div className="Modal-close" onClick={handleCloseModal}>
          <img src={IconModalClose} alt="" />
        </div>
      )}

      <div className="Modal-body">{children}</div>
    </AntdModal>
  );
};

export default Modal;
