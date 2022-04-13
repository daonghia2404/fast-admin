import React, { useEffect, useState } from 'react';
import { Form } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import Modal from '@/components/Modal';
import Input from '@/components/Input';
import Button from '@/components/Button';
import { TChangePasswordModalProps } from './ChangePasswordModal.types';
import { showNotification, validationRules } from '@/utils/functions';
import { TRootState } from '@/redux/reducers';
import { EAccountControllerAction } from '@/redux/actions/account-controller/constants';
import { changePasswordAccountAction } from '@/redux/actions';
import { ETypeNotification } from '@/common/enums';

import './ChangePasswordModal.scss';

const ChangePasswordModal: React.FC<TChangePasswordModalProps> = ({ visible, onClose }) => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [password, setPassword] = useState<string>('');

  const changePasswordLoading = useSelector(
    (state: TRootState) => state.loadingReducer[EAccountControllerAction.CHANGE_PASSWORD_ACCOUNT],
  );

  const handleChangePassword = (passwordValue: string): void => {
    setPassword(passwordValue);
  };

  const handleSubmit = (values: any): void => {
    const body = {
      currentPassword: values.oldPassword,
      newPassword: values.newPassword,
    };
    dispatch(changePasswordAccountAction.request(body, handleChangePasswordAccountSuccess));
  };

  const handleChangePasswordAccountSuccess = (): void => {
    showNotification(ETypeNotification.SUCCESS, 'Đổi mật khẩu thành công');
    onClose?.();
  };

  useEffect(() => {
    if (visible) {
      form.resetFields();
    }
  }, [visible, form]);

  return (
    <Modal visible={visible} onClose={onClose} maxWidth="84rem" radius wrapClassName="ChangePasswordModal-wrapper">
      <div className="ChangePasswordModal-title">Đổi Mật Khẩu</div>

      <Form form={form} onFinish={handleSubmit}>
        <div className="ChangePasswordModal-control flex justify-between items-start">
          <div className="ChangePasswordModal-control-item">Mật khẩu Cũ</div>
          <div className="ChangePasswordModal-control-item">
            <Form.Item name="oldPassword" rules={[validationRules.required()]}>
              <Input type="password" placeholder="Nhập Mật Khẩu Cũ" />
            </Form.Item>
          </div>
        </div>

        <div className="ChangePasswordModal-control flex justify-between items-start">
          <div className="ChangePasswordModal-control-item">Mật khẩu Mới</div>
          <div className="ChangePasswordModal-control-item">
            <Form.Item name="password" rules={[validationRules.required()]}>
              <Input type="password" placeholder="Nhập Mật Khẩu Mới" onChange={handleChangePassword} />
            </Form.Item>
          </div>
        </div>

        <div className="ChangePasswordModal-control flex justify-between items-start">
          <div className="ChangePasswordModal-control-item">Nhập Lại Mật khẩu Mới</div>
          <div className="ChangePasswordModal-control-item">
            <Form.Item
              name="newPassword"
              rules={[validationRules.required(), validationRules.confirmPassword(password)]}
            >
              <Input type="password" placeholder="Nhập Lại Mật khẩu Mới" />
            </Form.Item>
          </div>
        </div>

        <Form.Item className="ChangePasswordModal-submit">
          <Button title="Xác Nhận" type="primary" htmlType="submit" loading={changePasswordLoading} />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ChangePasswordModal;
