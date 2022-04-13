import React, { useState } from 'react';
import { Form } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import Button from '@/components/Button';
import Input from '@/components/Input';
import { showNotification, validationRules } from '@/utils/functions';
import { TRootState } from '@/redux/reducers';
import { EAuthControllerAction } from '@/redux/actions/auth-controller/constants';
import { changePasswordByOtpAction } from '@/redux/actions';
import { ETypeNotification } from '@/common/enums';

import { TChangePasswordProps } from './ChangePassword.types';

const ChangePassword: React.FC<TChangePasswordProps> = ({ data, onSubmit }) => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const changePasswordByOtpLoading = useSelector(
    (state: TRootState) => state.loadingReducer[EAuthControllerAction.CHANGE_PASSWORD_BY_OTP],
  );

  const [password, setPassword] = useState<string>('');

  const handleChangePassword = (passwordValue: string): void => {
    setPassword(passwordValue);
  };

  const handleSubmit = (values: any): void => {
    const body = {
      email: data.email,
      otp: values.otp,
      newPassword: values.newPassword,
    };

    dispatch(changePasswordByOtpAction.request(body, handleChangePasswordByOtpSuccess));
  };

  const handleChangePasswordByOtpSuccess = (): void => {
    showNotification(ETypeNotification.SUCCESS, 'Đổi mật khẩu thành công. Vui lòng đăng nhập');
    onSubmit?.();
  };

  return (
    <>
      <div className="AuthModal-herotitle">Đổi mật khẩu</div>
      <div className="AuthModal-description text-center">Xin vui lòng đổi mật khẩu để đăng nhập tài khoản</div>
      <Form className="AuthModal-form" form={form} onFinish={handleSubmit}>
        <Form.Item name="otp" rules={[validationRules.required()]}>
          <Input placeholder="Nhập Mã Xác Thực" />
        </Form.Item>
        <Form.Item name="password" rules={[validationRules.required()]}>
          <Input type="password" placeholder="Nhập Mật Khẩu Mới" onChange={handleChangePassword} />
        </Form.Item>

        <Form.Item name="newPassword" rules={[validationRules.required(), validationRules.confirmPassword(password)]}>
          <Input type="password" placeholder="Nhập Lại Mật khẩu Mới" />
        </Form.Item>

        <Form.Item className="AuthModal-submit">
          <Button type="primary" htmlType="submit" title="Hoàn Thành" loading={changePasswordByOtpLoading} />
        </Form.Item>
      </Form>
    </>
  );
};

export default ChangePassword;
