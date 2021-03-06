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
    showNotification(ETypeNotification.SUCCESS, `${isCreateModal ? 'T???o m???i' : 'C???p nh???t'} nh??n vi??n th??nh c??ng`);
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
      <div className="Modal-title">{isCreateModal ? 'Th??m m???i' : 'C???p nh???t'} nh??n vi??n</div>
      <Form form={form} onFinish={handleSubmit}>
        <div className="MemberConfigModal-form style-table-form">
          <table>
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
              <td className="text">Ph??n quy???n</td>
              <td>
                <Form.Item name="listRole" rules={[validationRules.required()]}>
                  <MultipleSelect
                    adminStyle
                    size="large"
                    placeholder="Ch???n quy???n truy c???p"
                    options={rolesOptions || []}
                  />
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

export default MemberConfigModal;
