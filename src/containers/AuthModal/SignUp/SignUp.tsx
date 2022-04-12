import React, { useState } from 'react';
import { Form, Slider } from 'antd';

import Button from '@/components/Button';
import Input from '@/components/Input';
import { validationRules } from '@/utils/functions';

import { TSignUpProps } from './SignUp.types';

const SignUp: React.FC<TSignUpProps> = ({ onSubmit }) => {
  const [form] = Form.useForm();
  const [sliderValue, setSliderValue] = useState(0);
  const isDisabledSubmit = sliderValue !== 100;

  const handleSubmit = (values: any): void => {
    onSubmit?.();
  };

  const handleChangeSliderValue = (value: number): void => {
    setSliderValue(value);
  };

  return (
    <Form className="AuthModal-form" form={form} onFinish={handleSubmit}>
      <div className="AuthModal-row flex-wrap half flex justify-between items-start">
        <Form.Item name="name" rules={[validationRules.required()]}>
          <Input placeholder="Tên Của Bạn" />
        </Form.Item>
        <Form.Item name="phone" rules={[validationRules.required(), validationRules.onlyNumeric()]}>
          <Input placeholder="Số Điện Thoại" />
        </Form.Item>
      </div>

      <div className="AuthModal-row flex-wrap half flex justify-between items-start">
        <Form.Item name="email" rules={[validationRules.required(), validationRules.email()]}>
          <Input placeholder="Email" />
        </Form.Item>
        <Form.Item name="password" rules={[validationRules.required()]}>
          <Input type="password" placeholder="Mật Khẩu" />
        </Form.Item>
      </div>

      <Form.Item name="address" rules={[validationRules.required()]}>
        <Input placeholder="Địa Chỉ" />
      </Form.Item>

      <div className="AuthModal-slider-submit">
        <div className="AuthModal-slider-submit-text">Trượt để gửi</div>
        <Slider
          disabled={!isDisabledSubmit}
          max={100}
          min={0}
          value={sliderValue}
          tooltipVisible={false}
          onChange={handleChangeSliderValue}
        />
      </div>

      <Form.Item className="AuthModal-submit">
        <Button type="primary" htmlType="submit" title="Đăng Ký" disabled={isDisabledSubmit} />
      </Form.Item>
    </Form>
  );
};

export default SignUp;
