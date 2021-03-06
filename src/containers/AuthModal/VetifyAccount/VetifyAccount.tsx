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
    showNotification(ETypeNotification.SUCCESS, 'G???i l???i m?? x??c th???c th??nh c??ng. Vui l??ng ki???m tra h???p th?? c???a b???n');
    setIsAvaiableResend(false);
  };

  return (
    <>
      <div className="AuthModal-herotitle">X??c th???c t??i kho???n</div>
      <div className="AuthModal-description text-center">
        Xin vui l??ng nh???p m?? OTP ???????c g???i ?????n Email:
        <br />
        <span>{data.email}</span>
      </div>
      <Form className="AuthModal-form" form={form} onFinish={handleSubmit}>
        <Form.Item name="otp" rules={[validationRules.required()]}>
          <Input placeholder="Nh???p M?? OTP" />
        </Form.Item>

        <Form.Item className="AuthModal-submit">
          <Button type="primary" htmlType="submit" title="Ho??n Th??nh" loading={confirmEmailOtpLoading} />
        </Form.Item>

        <div className="AuthModal-resend">
          <div className="AuthModal-resend-title">Ch??a nh???n ???????c m??? </div>
          <div className={classNames('AuthModal-resend-action', { disabled: !isAvaiableResend })}>
            <span onClick={handleResendEmailOtp}>G???i l???i </span>

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
