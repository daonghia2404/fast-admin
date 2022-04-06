import React, { useEffect } from 'react';
import { Form } from 'antd';

import Modal from '@/components/Modal';
import Input from '@/components/Input';
import Button from '@/components/Button';
import { TUpdateInfoAccountModalProps } from './UpdateInfoAccountModal.types';
import { validationRules } from '@/utils/functions';
import Avatar from '@/components/Avatar';

import './UpdateInfoAccountModal.scss';
import DatePicker from '@/components/DatePicker';

const UpdateInfoAccountModal: React.FC<TUpdateInfoAccountModalProps> = ({ visible, onClose }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (visible) {
      form.resetFields();
    }
  }, [visible, form]);

  return (
    <Modal visible={visible} onClose={onClose} maxWidth="84rem" radius wrapClassName="UpdateInfoAccountModal-wrapper">
      <div className="UpdateInfoAccountModal-avatar flex justify-center items-center">
        <Avatar size={120} />
      </div>
      <div className="UpdateInfoAccountModal-name">Admin</div>

      <Form form={form} className="UpdateInfoAccountModal-form">
        <div className="UpdateInfoAccountModal-control flex justify-between items-start">
          <div className="UpdateInfoAccountModal-control-item">Tên Của Bạn</div>
          <div className="UpdateInfoAccountModal-control-item">
            <Form.Item name="name" rules={[validationRules.required()]}>
              <Input placeholder="Nhập Tên Của Bạn" />
            </Form.Item>
          </div>
        </div>

        <div className="UpdateInfoAccountModal-control flex justify-between items-start">
          <div className="UpdateInfoAccountModal-control-item">Số Điện Thoại</div>
          <div className="UpdateInfoAccountModal-control-item">
            <Form.Item name="phone" rules={[validationRules.required(), validationRules.onlyNumeric()]}>
              <Input placeholder="Nhập Số Điện Thoại" />
            </Form.Item>
          </div>
        </div>

        <div className="UpdateInfoAccountModal-control flex justify-between items-start">
          <div className="UpdateInfoAccountModal-control-item">Email</div>
          <div className="UpdateInfoAccountModal-control-item">
            <Form.Item name="email" rules={[validationRules.required(), validationRules.email()]}>
              <Input placeholder="Nhập Email" />
            </Form.Item>
          </div>
        </div>

        <div className="UpdateInfoAccountModal-control flex justify-between items-start">
          <div className="UpdateInfoAccountModal-control-item">Địa Chỉ</div>
          <div className="UpdateInfoAccountModal-control-item">
            <Form.Item name="address" rules={[validationRules.required(), validationRules.email()]}>
              <Input placeholder="Nhập Địa Chỉ" />
            </Form.Item>
          </div>
        </div>

        <div className="UpdateInfoAccountModal-control flex justify-between items-start">
          <div className="UpdateInfoAccountModal-control-item">Sinh Nhật</div>
          <div className="UpdateInfoAccountModal-control-item">
            <Form.Item name="birthDay" rules={[validationRules.required()]}>
              <DatePicker placeholder="Nhập Sinh Nhật" allowClear={false} />
            </Form.Item>
          </div>
        </div>

        <Form.Item className="UpdateInfoAccountModal-submit">
          <Button title="Xác Nhận" type="primary" htmlType="submit" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default UpdateInfoAccountModal;
