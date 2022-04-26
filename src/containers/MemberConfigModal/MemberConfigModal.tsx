import React, { useCallback, useEffect, useState } from 'react';
import { Form } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import Modal from '@/components/Modal';
import Input from '@/components/Input';
import Button from '@/components/Button';
import { showNotification, validationRules } from '@/utils/functions';
import { ETypeMemberConfigModal } from '@/containers/MemberConfigModal/MemberConfigModal.enums';
import { createUpdateAccountAction, getAccountAction, getAllRolesAction } from '@/redux/actions';
import { ETypeNotification } from '@/common/enums';
import { TRootState } from '@/redux/reducers';
import MultipleSelect from '@/components/MultipleSelect';
import { TSelectOption } from '@/components/Select';

import { TMemberConfigModalProps } from './MemberConfigModal.types';
import './MemberConfigModal.scss';

const MemberConfigModal: React.FC<TMemberConfigModalProps> = ({ visible, data, type, onSubmit, onClose }) => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const isCreateModal = type === ETypeMemberConfigModal.CREATE;

  const rolesState = useSelector((state: TRootState) => state.accountReducer.roles);
  const rolesOptions = rolesState?.data?.ListRole?.map((item) => ({ label: item.roleName, value: item.roleId }));
  const accountState = useSelector((state: TRootState) => state.accountReducer.account?.data);

  const [password, setPassword] = useState<string>('');

  const handleChangePassword = (passwordValue: string): void => {
    setPassword(passwordValue);
  };

  const handleSubmit = (values: any): void => {
    const body = {
      ...accountState,
      username: values.username,
      email: values.email,
      phone: values.phone,
      listRole: values?.listRole?.map((item: TSelectOption) => item.value),
      password: values.password || undefined,
      confirmPassword: values.confirmPassword || undefined,
    };

    dispatch(createUpdateAccountAction.request(body, handleCreateUpdateClientSuccess));
  };

  const handleCreateUpdateClientSuccess = (): void => {
    showNotification(ETypeNotification.SUCCESS, `${isCreateModal ? 'Tạo mới' : 'Cập nhật'} nhân viên thành công`);
    onSubmit?.();
  };

  const getAccountData = useCallback(
    (userId: string) => {
      dispatch(getAccountAction.request({ userId }));

      // eslint-disable-next-line react-hooks/exhaustive-deps
    },
    [dispatch],
  );

  const getRolesData = useCallback(() => {
    if (visible) dispatch(getAllRolesAction.request());
  }, [visible, dispatch]);

  useEffect(() => {
    getRolesData();
  }, [getRolesData]);

  useEffect(() => {
    if (visible) {
      if (data?.id) {
        getAccountData(String(data?.id));
      }
    } else {
      form.resetFields();
    }
  }, [visible, data, form, getAccountData]);

  useEffect(() => {
    if (!isCreateModal && visible && accountState) {
      form.setFieldsValue({
        ...accountState,
        listRole: rolesOptions?.filter((role) => accountState?.listRole?.includes(role.value)),
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form, visible, accountState, rolesState]);

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
              <td className="text">Phân quyền</td>
              <td>
                <Form.Item name="listRole" rules={[validationRules.required()]}>
                  <MultipleSelect
                    adminStyle
                    size="large"
                    placeholder="Chọn quyền truy cập"
                    options={rolesOptions || []}
                  />
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
