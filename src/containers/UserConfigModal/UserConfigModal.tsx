import React, { useEffect, useState } from 'react';
import { Form } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import Modal from '@/components/Modal';
import Input from '@/components/Input';
import Button from '@/components/Button';
import { showNotification, validationRules } from '@/utils/functions';
import Select from '@/components/Select';
import { customerStatusOptions } from '@/common/constants';
import { ETypeUserConfigModal } from '@/containers/UserConfigModal/UserConfigModal.enums';
import { TRootState } from '@/redux/reducers';
import { createUpdateClientAction } from '@/redux/actions';
import { ETypeNotification } from '@/common/enums';

import { TUserConfigModalProps } from './UserConfigModal.types';
import './UserConfigModal.scss';

const UserConfigModal: React.FC<TUserConfigModalProps> = ({ visible, data, type, onSubmit, onClose }) => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const isCreateModal = type === ETypeUserConfigModal.CREATE;

  const clientsEmployeeState = useSelector((state: TRootState) => state.clientReducer.clientEmployee?.data) || [];
  const clientsEmployeeOptions = clientsEmployeeState.map((item) => ({ label: item.employeeName, value: item.id }));

  const [password, setPassword] = useState<string>('');

  const handleChangePassword = (passwordValue: string): void => {
    setPassword(passwordValue);
  };

  const handleSubmit = (values: any): void => {
    const body = {
      ...data,
      code: values.code,
      username: values.username,
      email: values.email,
      phone: values.phone,
      address: values.address,
      password: values.password || undefined,
      confirmPassword: values.confirmPassword || undefined,
      customerStatus: values.customerStatus?.value,
      employeeId: values.employeeId?.value,
    };

    dispatch(createUpdateClientAction.request(body, handleCreateUpdateClientSuccess));
  };

  const handleCreateUpdateClientSuccess = (): void => {
    showNotification(ETypeNotification.SUCCESS, `${isCreateModal ? 'Tạo mới' : 'Cập nhật'} khách hàng thành công`);
    onSubmit?.();
  };

  useEffect(() => {
    if (data) {
      form.setFieldsValue({
        ...data,
        customerStatus: customerStatusOptions.find((option) => option.value === data.customerStatus),
        employeeId: clientsEmployeeOptions.find((item) => item.value === data.employeeId),
      });
    } else {
      form.resetFields();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form, visible, data]);

  return (
    <Modal visible={visible} onClose={onClose} maxWidth="104rem" wrapClassName="UserConfigModal-wrapper">
      <div className="Modal-title">{isCreateModal ? 'Thêm mới' : 'Cập nhật'} khách hàng</div>
      <Form form={form} onFinish={handleSubmit}>
        <div className="UserConfigModal-form style-table-form">
          <table>
            <tr>
              <td className="text">Mã khách hàng</td>
              <td>
                <Form.Item name="code" rules={[validationRules.required()]}>
                  <Input adminStyle size="large" placeholder="Nhập mã khách hàng" disabled={!isCreateModal} />
                </Form.Item>
              </td>
            </tr>
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
              <td className="text">Địa chỉ</td>
              <td>
                <Form.Item name="address" rules={[validationRules.required()]}>
                  <Input adminStyle size="large" placeholder="Nhập địa chỉ" />
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
              <td className="text">Trạng thái</td>
              <td>
                <Form.Item name="customerStatus" rules={[validationRules.required()]}>
                  <Select adminStyle size="large" placeholder="Chọn trạng thái" options={customerStatusOptions} />
                </Form.Item>
              </td>
            </tr>
            <tr>
              <td className="text">Nhân viên phụ trách</td>
              <td>
                <Form.Item name="employeeId" rules={[validationRules.required()]}>
                  <Select
                    adminStyle
                    size="large"
                    placeholder="Chọn nhân viên phụ trách"
                    options={clientsEmployeeOptions}
                  />
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

export default UserConfigModal;
