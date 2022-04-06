import React, { useState } from 'react';
import { Form } from 'antd';

import Button from '@/components/Button';
import Input from '@/components/Input';
import { validationRules } from '@/utils/functions';

import { TChangePasswordProps } from './ChangePassword.types';

const ChangePassword: React.FC<TChangePasswordProps> = ({ onSubmit }) => {
  const [form] = Form.useForm();

  const [password, setPassword] = useState<string>('');

  const handleChangePassword = (passwordValue: string): void => {
    setPassword(passwordValue);
  };

  const handleSubmit = (values: any): void => {
    onSubmit?.();
  };

  return (
    <>
      <div className="AuthModal-herotitle">Đổi mật khẩu</div>
      <div className="AuthModal-description text-center">Xin vui lòng đổi mật khẩu để đăng nhập tài khoản</div>
      <Form className="AuthModal-form" form={form} onFinish={handleSubmit}>
        <Form.Item name="password" rules={[validationRules.required()]}>
          <Input type="password" placeholder="Nhập Mật Khẩu Mới" onChange={handleChangePassword} />
        </Form.Item>

        <Form.Item name="newPassword" rules={[validationRules.required(), validationRules.confirmPassword(password)]}>
          <Input type="password" placeholder="Nhập Lại Mật khẩu Mới" />
        </Form.Item>

        <Form.Item className="AuthModal-submit">
          <Button type="primary" htmlType="submit" title="Hoàn Thành" />
        </Form.Item>
      </Form>
    </>
  );
};

export default ChangePassword;
