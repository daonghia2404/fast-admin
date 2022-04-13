import React, { useEffect, useState } from 'react';
import { Form, Slider } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import Button from '@/components/Button';
import Checkbox from '@/components/Checkbox';
import Input from '@/components/Input';
import { showNotification, validationRules } from '@/utils/functions';
import { loginAction } from '@/redux/actions';
import AuthHelpers from '@/services/helpers';

import { TSignInProps } from './SignIn.types';
import { ETypeNotification } from '@/common/enums';
import { TRootState } from '@/redux/reducers';
import { EAuthControllerAction } from '@/redux/actions/auth-controller/constants';

const SignIn: React.FC<TSignInProps> = ({ onClickForgotPassword, onSubmit }) => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const [sliderValue, setSliderValue] = useState(0);
  const isDisabledSubmit = sliderValue !== 100;

  const loginLoading = useSelector((state: TRootState) => state.loadingReducer[EAuthControllerAction.LOGIN]);

  const handleSubmit = (values: any): void => {
    if (values.remember) {
      AuthHelpers.storeRememberAccountPhone(values.phone);
      AuthHelpers.storeRememberAccountPassword(values.password);
    } else {
      AuthHelpers.clearRememberAccount();
    }

    const body = {
      phone: values.phone,
      password: values.password,
    };
    dispatch(loginAction.request(body, handleLoginSuccess));
  };

  const handleLoginSuccess = (): void => {
    showNotification(ETypeNotification.SUCCESS, 'Đăng nhập thành công');
    resetFields();
    onSubmit?.();
  };

  const handleChangeSliderValue = (value: number): void => {
    setSliderValue(value);
  };

  const resetFields = (): void => {
    form.resetFields();
    setSliderValue(0);
  };

  useEffect(() => {
    const rmPhone = AuthHelpers.getRememberAccountPhone();
    const rmPassword = AuthHelpers.getRememberAccountPassword();

    if (rmPhone && rmPassword) {
      form.setFieldsValue({
        phone: rmPhone,
        password: rmPassword,
        remember: true,
      });
    }

    return (): void => {
      resetFields();
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form]);

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
        <Button type="primary" htmlType="submit" title="Đăng Nhập" disabled={isDisabledSubmit} loading={loginLoading} />
      </Form.Item>
    </Form>
  );
};

export default SignIn;
