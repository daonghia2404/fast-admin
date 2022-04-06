import React from 'react';
import { Form } from 'antd';

import Button from '@/components/Button';
import Input from '@/components/Input';
import { validationRules } from '@/utils/functions';
import { TFindAccountProps } from '@/containers/AuthModal/FindAccount/FindAccount.types';

const FindAccount: React.FC<TFindAccountProps> = ({ onSubmit }) => {
  const [form] = Form.useForm();

  const handleSubmit = (values: any): void => {
    onSubmit?.();
  };

  return (
    <>
      <div className="AuthModal-herotitle">Tìm tài khoản</div>
      <div className="AuthModal-description text-center">
        Bạn cần nhập thông tin Email để chúng tôi tìm kiếm tài khoản của bạn
      </div>
      <Form className="AuthModal-form" form={form} onFinish={handleSubmit}>
        <Form.Item name="email" rules={[validationRules.required(), validationRules.email()]}>
          <Input placeholder="Nhập Email" />
        </Form.Item>

        <Form.Item className="AuthModal-submit">
          <Button type="primary" htmlType="submit" title="Tiếp Theo" />
        </Form.Item>
      </Form>
    </>
  );
};

export default FindAccount;
