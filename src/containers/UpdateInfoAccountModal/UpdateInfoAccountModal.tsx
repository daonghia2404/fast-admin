import React, { useEffect } from 'react';
import { Form } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import Modal from '@/components/Modal';
import Input from '@/components/Input';
import Button from '@/components/Button';
import { TUpdateInfoAccountModalProps } from './UpdateInfoAccountModal.types';
import { showNotification, validationRules } from '@/utils/functions';
import Avatar from '@/components/Avatar';
import { TRootState } from '@/redux/reducers';
import { EAuthControllerAction } from '@/redux/actions/auth-controller/constants';
import { updateUserInfoAction } from '@/redux/actions';
import { ETypeNotification } from '@/common/enums';

import './UpdateInfoAccountModal.scss';

const UpdateInfoAccountModal: React.FC<TUpdateInfoAccountModalProps> = ({ visible, onSubmit, onClose }) => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const userInfoState = useSelector((state: TRootState) => state.authReducer.user);
  const updateUserInfoLoading = useSelector(
    (state: TRootState) => state.loadingReducer[EAuthControllerAction.UPDATE_USER_INFO],
  );
  const { data } = userInfoState || {};

  const handleSubmit = (values: any): void => {
    const body = {
      username: values.username,
      address: values.address,
      phone: values.phone,
    };
    dispatch(updateUserInfoAction.request(body, handleUpdateUserInfoSuccess));
  };

  const handleUpdateUserInfoSuccess = (): void => {
    showNotification(ETypeNotification.SUCCESS, 'Cập nhật thông tin thành công');
    onClose?.();
    onSubmit?.();
  };

  useEffect(() => {
    if (visible && data) {
      form.setFieldsValue({
        address: data.address,
        username: data.username,
        phone: data.phone,
        email: data.email,
      });
    } else {
      form.resetFields();
    }
  }, [visible, form, data]);

  return (
    <Modal visible={visible} onClose={onClose} maxWidth="84rem" radius wrapClassName="UpdateInfoAccountModal-wrapper">
      <div className="UpdateInfoAccountModal-avatar flex justify-center items-center">
        <Avatar size={120} />
      </div>
      <div className="UpdateInfoAccountModal-name">{data?.username}</div>

      <Form form={form} className="UpdateInfoAccountModal-form" onFinish={handleSubmit}>
        <div className="UpdateInfoAccountModal-control flex justify-between items-start">
          <div className="UpdateInfoAccountModal-control-item">Tên Của Bạn</div>
          <div className="UpdateInfoAccountModal-control-item">
            <Form.Item name="username" rules={[validationRules.required()]}>
              <Input placeholder="Nhập Tên Của Bạn" />
            </Form.Item>
          </div>
        </div>

        <div className="UpdateInfoAccountModal-control flex justify-between items-start">
          <div className="UpdateInfoAccountModal-control-item">Số Điện Thoại</div>
          <div className="UpdateInfoAccountModal-control-item">
            <Form.Item name="phone" rules={[validationRules.required(), validationRules.onlyNumeric()]}>
              <Input placeholder="Nhập Số Điện Thoại" />
            </Form.Item>
          </div>
        </div>

        <div className="UpdateInfoAccountModal-control flex justify-between items-start">
          <div className="UpdateInfoAccountModal-control-item">Email</div>
          <div className="UpdateInfoAccountModal-control-item">
            <Form.Item name="email" rules={[validationRules.required(), validationRules.email()]}>
              <Input placeholder="Nhập Email" disabled />
            </Form.Item>
          </div>
        </div>

        <div className="UpdateInfoAccountModal-control flex justify-between items-start">
          <div className="UpdateInfoAccountModal-control-item">Địa Chỉ</div>
          <div className="UpdateInfoAccountModal-control-item">
            <Form.Item name="address" rules={[validationRules.required()]}>
              <Input placeholder="Nhập Địa Chỉ" />
            </Form.Item>
          </div>
        </div>

        {/* <div className="UpdateInfoAccountModal-control flex justify-between items-start">
          <div className="UpdateInfoAccountModal-control-item">Sinh Nhật</div>
          <div className="UpdateInfoAccountModal-control-item">
            <Form.Item name="birthDay" rules={[validationRules.required()]}>
              <DatePicker placeholder="Nhập Sinh Nhật" allowClear={false} />
            </Form.Item>
          </div>
        </div> */}

        <Form.Item className="UpdateInfoAccountModal-submit">
          <Button title="Xác Nhận" type="primary" htmlType="submit" loading={updateUserInfoLoading} />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default UpdateInfoAccountModal;
