import React, { useEffect, useState } from 'react';
import { Form } from 'antd';
import { useDispatch } from 'react-redux';

import Modal from '@/components/Modal';
import Input from '@/components/Input';
import Button from '@/components/Button';
import { showNotification, validationRules } from '@/utils/functions';
import { ETypeMemberConfigModal } from '@/containers/MemberConfigModal/MemberConfigModal.enums';
import { createUpdateAccountAction } from '@/redux/actions';
import { ETypeNotification } from '@/common/enums';

import { TMemberConfigModalProps } from './MemberConfigModal.types';
import './MemberConfigModal.scss';

const MemberConfigModal: React.FC<TMemberConfigModalProps> = ({ visible, data, type, onSubmit, onClose }) => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const isCreateModal = type === ETypeMemberConfigModal.CREATE;

  const [password, setPassword] = useState<string>('');

  const handleChangePassword = (passwordValue: string): void => {
    setPassword(passwordValue);
  };

  const handleSubmit = (values: any): void => {
    const body = {
      ...data,
      username: values.username,
      email: values.email,
      phone: values.phone,
      password: values.password || undefined,
      confirmPassword: values.confirmPassword || undefined,
    };

    dispatch(createUpdateAccountAction.request(body, handleCreateUpdateClientSuccess));
  };

  const handleCreateUpdateClientSuccess = (): void => {
    showNotification(ETypeNotification.SUCCESS, `${isCreateModal ? 'Tạo mới' : 'Cập nhật'} nhân viên thành công`);
    onSubmit?.();
  };

  useEffect(() => {
    if (data) {
      form.setFieldsValue({
        ...data,
      });
    } else {
      form.resetFields();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form, visible, data]);

  return (
    <Modal visible={visible} onClose={onClose} maxWidth="104rem" wrapClassName="MemberConfigModal-wrapper">
      <div className="Modal-title">{isCreateModal ? 'Thêm mới' : 'Cập nhật'} nhân viên</div>
      <Form form={form} onFinish={handleSubmit}>
        <div className="MemberConfigModal-form style-table-form">
          <table>
            <tr>
              <td className="text">Họ tên</td>
              <td>
                <Form.Item name="username" rules={[validationRules.required()]}>
                  <Input adminStyle size="large" placeholder="Nhập tên" />
                </Form.Item>
              </td>
            </tr>
            <tr>
              <td className="text">Email</td>
              <td>
                <Form.Item name="email" rules={[validationRules.required(), validationRules.email()]}>
                  <Input adminStyle size="large" placeholder="Nhập email" />
                </Form.Item>
              </td>
            </tr>
            <tr>
              <td className="text">Số điện thoại</td>
              <td>
                <Form.Item name="phone" rules={[validationRules.required(), validationRules.onlyNumeric()]}>
                  <Input adminStyle size="large" placeholder="Nhập số điện thoại" />
                </Form.Item>
              </td>
            </tr>
            <tr>
              <td className="text">Mật khẩu</td>
              <td>
                <Form.Item name="password" rules={isCreateModal ? [validationRules.required()] : undefined}>
                  <Input
                    type="password"
                    adminStyle
                    size="large"
                    placeholder="Nhập mật khẩu"
                    onChange={handleChangePassword}
                  />
                </Form.Item>
              </td>
            </tr>
            <tr>
              <td className="text">Nhập lại mật khẩu</td>
              <td>
                <Form.Item
                  name="confirmPassword"
                  rules={
                    isCreateModal ? [validationRules.required(), validationRules.confirmPassword(password)] : undefined
                  }
                >
                  <Input type="password" adminStyle size="large" placeholder="Nhập lại mật khẩu" />
                </Form.Item>
              </td>
            </tr>
            <tr>
              <td>
                <div className="Modal-submit flex">
                  <Button
                    title={`${isCreateModal ? 'Thêm mới' : 'Cập nhật'}`}
                    type="primary"
                    adminStyle
                    htmlType="submit"
                  />
                  <Button title="Làm lại" adminStyle htmlType="reset" />
                </div>
              </td>
              <td />
            </tr>
          </table>
        </div>
      </Form>
    </Modal>
  );
};

export default MemberConfigModal;
