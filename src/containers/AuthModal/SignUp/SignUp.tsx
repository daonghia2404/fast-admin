import React, { useEffect, useState } from 'react';
import { Form, Slider } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';

import Button from '@/components/Button';
import Input from '@/components/Input';
import { validationRules } from '@/utils/functions';

import { TSignUpProps } from './SignUp.types';
import { TRootState } from '@/redux/reducers';
import { EAuthControllerAction } from '@/redux/actions/auth-controller/constants';
import { registerAction } from '@/redux/actions';
import { TRegisterBody } from '@/services/api/auth-controller/types';

const SignUp: React.FC<TSignUpProps> = ({ onSubmit }) => {
  const dispatch = useDispatch();

  const registerLoading = useSelector((state: TRootState) => state.loadingReducer[EAuthControllerAction.REGISTER]);

  const [form] = Form.useForm();
  const [sliderValue, setSliderValue] = useState(0);
  const isDisabledSubmit = sliderValue === 100;

  const handleSubmit = (values: any): void => {
    const body = {
      clientCode: values.clientCode,
      fullName: values.fullName,
      email: values.email,
      phone: values.phone,
      address: values.address,
      password: values.password,
    };
    dispatch(registerAction.request(body, (): void => handleRegisterSuccess(body)));
  };

  const handleRegisterSuccess = (body: TRegisterBody): void => {
    onSubmit?.(body);
  };

  const handleChangeSliderValue = (value: number): void => {
    setSliderValue(value);
  };

  const resetFields = (): void => {
    form.resetFields();
    setSliderValue(0);
  };

  const handleAfterChangeSliderSubmit = (value: number): void => {
    if (value !== 100) setSliderValue(0);
  };

  useEffect(() => {
    return (): void => {
      resetFields();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Form className="AuthModal-form" form={form} onFinish={handleSubmit}>
      <div className="AuthModal-row flex-wrap half flex justify-between items-start">
        <Form.Item name="fullName" rules={[validationRules.required()]}>
          <Input placeholder="T??n C???a B???n" />
        </Form.Item>
        <Form.Item name="phone" rules={[validationRules.required(), validationRules.onlyNumeric()]}>
          <Input placeholder="S??? ??i???n Tho???i" />
        </Form.Item>
      </div>

      <div className="AuthModal-row flex-wrap half flex justify-between items-start">
        <Form.Item name="email" rules={[validationRules.required(), validationRules.email()]}>
          <Input placeholder="Email" />
        </Form.Item>
        <Form.Item name="password" rules={[validationRules.required()]}>
          <Input type="password" placeholder="M???t Kh???u" />
        </Form.Item>
      </div>

      <Form.Item name="address" rules={[validationRules.required()]}>
        <Input placeholder="?????a Ch???" />
      </Form.Item>

      <Form.Item name="clientCode" rules={[validationRules.required()]}>
        <Input placeholder="M?? Kh??ch H??ng" />
      </Form.Item>

      <div className="AuthModal-slider-submit">
        <div className="AuthModal-slider-submit-text">Tr?????t ????? g???i</div>
        <div className={classNames('AuthModal-slider-submit-btn', { hide: isDisabledSubmit })}>
          <Slider
            disabled={isDisabledSubmit}
            max={100}
            min={0}
            value={sliderValue}
            tooltipVisible={false}
            onChange={handleChangeSliderValue}
            onAfterChange={handleAfterChangeSliderSubmit}
          />
        </div>
      </div>

      <Form.Item className="AuthModal-submit">
        <Button
          type="primary"
          htmlType="submit"
          title="????ng K??"
          disabled={!isDisabledSubmit}
          loading={registerLoading}
        />
      </Form.Item>
    </Form>
  );
};

export default SignUp;
