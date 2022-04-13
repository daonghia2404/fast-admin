import React, { useState } from 'react';
import { Form } from 'antd';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';

import Button from '@/components/Button';
import Input from '@/components/Input';
import { showNotification, validationRules } from '@/utils/functions';
import CountdownTime from '@/components/CountdownTime';
import { confirmEmailOtpAction, resendEmailOtpAction } from '@/redux/actions';
import { ETypeNotification } from '@/common/enums';
import { EKeyTabAuthModal } from '@/containers/AuthModal/AuthModal.enums';
import { TRootState } from '@/redux/reducers';
import { EAuthControllerAction } from '@/redux/actions/auth-controller/constants';

import { TVetifyAccountProps } from './VetifyAccount.types';

const VetifyAccount: React.FC<TVetifyAccountProps> = ({
  prevKey,
  data,
  onConfirmOtpSignIn,
  onConfirmOtpForgotPassword,
}) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const [isAvaiableResend, setIsAvaiableResend] = useState(false);

  const confirmEmailOtpLoading = useSelector(
    (state: TRootState) => state.loadingReducer[EAuthControllerAction.CONFIRM_EMAIL_OTP],
  );
  const resendEmailOtpLoading = useSelector(
    (state: TRootState) => state.loadingReducer[EAuthControllerAction.RESEND_EMAIL_OTP],
  );

  const handleFinishCountDownTime = (): void => {
    setIsAvaiableResend(true);
  };

  const handleSubmit = (values: any): void => {
    dispatch(
      confirmEmailOtpAction.request(
        {
          email: data.email,
          otp: values.otp,
        },
        (): void => handleConfirmEmailOtpSuccess(values),
      ),
    );
  };

  const handleConfirmEmailOtpSuccess = (values: any): void => {
    switch (prevKey) {
      case EKeyTabAuthModal.SIGN_UP:
        onConfirmOtpSignIn?.(values);
        break;
      case EKeyTabAuthModal.FIND_ACCOUNT:
        onConfirmOtpForgotPassword?.(values);
        break;
      default:
        break;
    }
  };

  const handleResendEmailOtp = (): void => {
    if (isAvaiableResend && !resendEmailOtpLoading) {
      dispatch(resendEmailOtpAction.request({ email: data.email }, handleResendEmailOtpSuccess));
    }
  };

  const handleResendEmailOtpSuccess = (): void => {
    showNotification(ETypeNotification.SUCCESS, 'Gửi lại mã xác thực thành công. Vui lòng kiểm tra hộp thư của bạn');
    setIsAvaiableResend(false);
  };

  return (
    <>
      <div className="AuthModal-herotitle">Xác thực tài khoản</div>
      <div className="AuthModal-description text-center">
        Xin vui lòng nhập mã OTP được gửi đến Email:
        <br />
        <span>{data.email}</span>
      </div>
      <Form className="AuthModal-form" form={form} onFinish={handleSubmit}>
        <Form.Item name="otp" rules={[validationRules.required()]}>
          <Input placeholder="Nhập Mã OTP" />
        </Form.Item>

        <Form.Item className="AuthModal-submit">
          <Button type="primary" htmlType="submit" title="Hoàn Thành" loading={confirmEmailOtpLoading} />
        </Form.Item>

        <div className="AuthModal-resend">
          <div className="AuthModal-resend-title">Chưa nhận được mã? </div>
          <div className={classNames('AuthModal-resend-action', { disabled: !isAvaiableResend })}>
            <span onClick={handleResendEmailOtp}>Gửi lại </span>

            {!isAvaiableResend && (
              <>
                (<CountdownTime defaultValue="01:00" onFinish={handleFinishCountDownTime} />)
              </>
            )}
          </div>
        </div>
      </Form>
    </>
  );
};

export default VetifyAccount;
