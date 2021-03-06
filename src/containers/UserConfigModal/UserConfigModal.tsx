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
    showNotification(ETypeNotification.SUCCESS, `${isCreateModal ? 'T???o m???i' : 'C???p nh???t'} kh??ch h??ng th??nh c??ng`);
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
      <div className="Modal-title">{isCreateModal ? 'Th??m m???i' : 'C???p nh???t'} kh??ch h??ng</div>
      <Form form={form} onFinish={handleSubmit}>
        <div className="UserConfigModal-form style-table-form">
          <table>
            <tr>
              <td className="text">M?? kh??ch h??ng</td>
              <td>
                <Form.Item name="code" rules={[validationRules.required()]}>
                  <Input adminStyle size="large" placeholder="Nh???p m?? kh??ch h??ng" disabled={!isCreateModal} />
                </Form.Item>
              </td>
            </tr>
            <tr>
              <td className="text">H??? t??n</td>
              <td>
                <Form.Item name="username" rules={[validationRules.required()]}>
                  <Input adminStyle size="large" placeholder="Nh???p t??n" />
                </Form.Item>
              </td>
            </tr>
            <tr>
              <td className="text">Email</td>
              <td>
                <Form.Item name="email" rules={[validationRules.required(), validationRules.email()]}>
                  <Input adminStyle size="large" placeholder="Nh???p email" />
                </Form.Item>
              </td>
            </tr>
            <tr>
              <td className="text">S??? ??i???n tho???i</td>
              <td>
                <Form.Item name="phone" rules={[validationRules.required(), validationRules.onlyNumeric()]}>
                  <Input adminStyle size="large" placeholder="Nh???p s??? ??i???n tho???i" />
                </Form.Item>
              </td>
            </tr>
            <tr>
              <td className="text">?????a ch???</td>
              <td>
                <Form.Item name="address" rules={[validationRules.required()]}>
                  <Input adminStyle size="large" placeholder="Nh???p ?????a ch???" />
                </Form.Item>
              </td>
            </tr>
            <tr>
              <td className="text">M???t kh???u</td>
              <td>
                <Form.Item name="password" rules={isCreateModal ? [validationRules.required()] : undefined}>
                  <Input
                    type="password"
                    adminStyle
                    size="large"
                    placeholder="Nh???p m???t kh???u"
                    onChange={handleChangePassword}
                  />
                </Form.Item>
              </td>
            </tr>
            <tr>
              <td className="text">Nh???p l???i m???t kh???u</td>
              <td>
                <Form.Item
                  name="confirmPassword"
                  rules={
                    isCreateModal ? [validationRules.required(), validationRules.confirmPassword(password)] : undefined
                  }
                >
                  <Input type="password" adminStyle size="large" placeholder="Nh???p l???i m???t kh???u" />
                </Form.Item>
              </td>
            </tr>
            <tr>
              <td className="text">Tr???ng th??i</td>
              <td>
                <Form.Item name="customerStatus" rules={[validationRules.required()]}>
                  <Select adminStyle size="large" placeholder="Ch???n tr???ng th??i" options={customerStatusOptions} />
                </Form.Item>
              </td>
            </tr>
            <tr>
              <td className="text">Nh??n vi??n ph??? tr??ch</td>
              <td>
                <Form.Item name="employeeId" rules={[validationRules.required()]}>
                  <Select
                    adminStyle
                    size="large"
                    placeholder="Ch???n nh??n vi??n ph??? tr??ch"
                    options={clientsEmployeeOptions}
                  />
                </Form.Item>
              </td>
            </tr>
            <tr>
              <td>
                <div className="Modal-submit flex">
                  <Button
                    title={`${isCreateModal ? 'Th??m m???i' : 'C???p nh???t'}`}
                    type="primary"
                    adminStyle
                    htmlType="submit"
                  />
                  <Button title="L??m l???i" adminStyle htmlType="reset" />
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
