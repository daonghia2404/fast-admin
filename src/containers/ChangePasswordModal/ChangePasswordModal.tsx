import React, { useEffect, useState } from 'react';
import { Form } from 'antd';

import Modal from '@/components/Modal';
import Input from '@/components/Input';
import Button from '@/components/Button';
import { TChangePasswordModalProps } from './ChangePasswordModal.types';
import { validationRules } from '@/utils/functions';

import './ChangePasswordModal.scss';

const ChangePasswordModal: React.FC<TChangePasswordModalProps> = ({ visible, onClose }) => {
  const [form] = Form.useForm();
  const [password, setPassword] = useState<string>('');

  const handleChangePassword = (passwordValue: string): void => {
    setPassword(passwordValue);
  };

  useEffect(() => {
    if (visible) {
      form.resetFields();
    }
  }, [visible, form]);

  return (
    <Modal visible={visible} onClose={onClose} maxWidth="84rem" radius wrapClassName="ChangePasswordModal-wrapper">
      <div className="ChangePasswordModal-title">Đổi Mật Khẩu</div>

      <Form form={form}>
        <div className="ChangePasswordModal-control flex justify-between items-start">
          <div className="ChangePasswordModal-control-item">Mật khẩu Cũ</div>
          <div className="ChangePasswordModal-control-item">
            <Form.Item name="oldPassword" rules={[validationRules.required()]}>
              <Input type="password" placeholder="Nhập Mật Khẩu Cũ" />
            </Form.Item>
          </div>
        </div>

        <div className="ChangePasswordModal-control flex justify-between items-start">
          <div className="ChangePasswordModal-control-item">Mật khẩu Mới</div>
          <div className="ChangePasswordModal-control-item">
            <Form.Item name="password" rules={[validationRules.required()]}>
              <Input type="password" placeholder="Nhập Mật Khẩu Mới" onChange={handleChangePassword} />
            </Form.Item>
          </div>
        </div>

        <div className="ChangePasswordModal-control flex justify-between items-start">
          <div className="ChangePasswordModal-control-item">Nhập Lại Mật khẩu Mới</div>
          <div className="ChangePasswordModal-control-item">
            <Form.Item
              name="newPassword"
              rules={[validationRules.required(), validationRules.confirmPassword(password)]}
            >
              <Input type="password" placeholder="Nhập Lại Mật khẩu Mới" />
            </Form.Item>
          </div>
        </div>

        <Form.Item className="ChangePasswordModal-submit">
          <Button title="Xác Nhận" type="primary" htmlType="submit" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ChangePasswordModal;
