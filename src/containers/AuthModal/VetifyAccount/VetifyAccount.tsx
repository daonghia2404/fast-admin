import React from 'react';
import { Form } from 'antd';

import Button from '@/components/Button';
import Input from '@/components/Input';
import { validationRules } from '@/utils/functions';
import CountdownTime from '@/components/CountdownTime';

import { TVetifyAccountProps } from './VetifyAccount.types';

const VetifyAccount: React.FC<TVetifyAccountProps> = ({ onSubmit }) => {
  const [form] = Form.useForm();

  const handleSubmit = (values: any): void => {
    onSubmit?.();
  };

  return (
    <>
      <div className="AuthModal-herotitle">Xác thực tài khoản</div>
      <div className="AuthModal-description text-center">
        Xin vui lòng nhập mã OTP được gửi đến Email:
        <br />
        <span>admin@gmail.com</span>
      </div>
      <Form className="AuthModal-form" form={form} onFinish={handleSubmit}>
        <Form.Item name="code" rules={[validationRules.required()]}>
          <Input placeholder="Nhập Mã OTP" />
        </Form.Item>

        <Form.Item className="AuthModal-submit">
          <Button type="primary" htmlType="submit" title="Hoàn Thành" />
        </Form.Item>

        <div className="AuthModal-resend">
          <div className="AuthModal-resend-title">Chưa nhận được mã? </div>
          <div className="AuthModal-resend-action">
            Gửi lại (<CountdownTime defaultValue="02:00" />)
          </div>
        </div>
      </Form>
    </>
  );
};

export default VetifyAccount;
