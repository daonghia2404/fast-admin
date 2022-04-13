import React from 'react';
import { Form } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import Button from '@/components/Button';
import Input from '@/components/Input';
import { validationRules } from '@/utils/functions';
import { TFindAccountProps } from '@/containers/AuthModal/FindAccount/FindAccount.types';
import { TRootState } from '@/redux/reducers';
import { EAuthControllerAction } from '@/redux/actions/auth-controller/constants';
import { forgotPasswordAction } from '@/redux/actions';
import { TForgotPasswordBody } from '@/services/api/auth-controller/types';

const FindAccount: React.FC<TFindAccountProps> = ({ onSubmit }) => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const forgotPasswordLoading = useSelector(
    (state: TRootState) => state.loadingReducer[EAuthControllerAction.FORGOT_PASSWORD],
  );

  const handleSubmit = (values: any): void => {
    const body = {
      email: values.email,
    };

    dispatch(forgotPasswordAction.request(body, (): void => handleForgotPasswordSuccess(body)));
  };

  const handleForgotPasswordSuccess = (body: TForgotPasswordBody): void => {
    onSubmit?.(body);
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
          <Button type="primary" htmlType="submit" title="Tiếp Theo" disabled={forgotPasswordLoading} />
        </Form.Item>
      </Form>
    </>
  );
};

export default FindAccount;
