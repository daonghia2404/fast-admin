import React, { useState } from 'react';
import { Form, Slider } from 'antd';

import Button from '@/components/Button';
import Checkbox from '@/components/Checkbox';
import Input from '@/components/Input';
import { validationRules } from '@/utils/functions';

import { TSignInProps } from './SignIn.types';

const SignIn: React.FC<TSignInProps> = ({ onClickForgotPassword, onSubmit }) => {
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
      <Form.Item name="phone" rules={[validationRules.required()]}>
        <Input placeholder="Số Điện Thoại" />
      </Form.Item>
      <Form.Item name="password" rules={[validationRules.required()]}>
        <Input type="password" placeholder="Mật Khẩu" />
      </Form.Item>
      <div className="AuthModal-row flex-wrap remember flex justify-between items-center">
        <Form.Item name="remember">
          <Checkbox label="Duy Trì Đăng Nhập" />
        </Form.Item>
        <div className="AuthModal-link" onClick={onClickForgotPassword}>
          Quên mật khẩu
        </div>
      </div>

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
        <Button type="primary" htmlType="submit" title="Đăng Nhập" disabled={isDisabledSubmit} />
      </Form.Item>
    </Form>
  );
};

export default SignIn;
