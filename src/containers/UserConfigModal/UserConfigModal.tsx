import React from 'react';
import { Form } from 'antd';

import Modal from '@/components/Modal';
import Input from '@/components/Input';
import Button from '@/components/Button';
import { validationRules } from '@/utils/functions';
import Select from '@/components/Select';
import { dataGenderOptions } from '@/common/constants';

import { TUserConfigModalProps } from './UserConfigModal.types';
import './UserConfigModal.scss';

const UserConfigModal: React.FC<TUserConfigModalProps> = ({ visible, onClose }) => {
  const [form] = Form.useForm();

  return (
    <Modal visible={visible} onClose={onClose} maxWidth="104rem" wrapClassName="UserConfigModal-wrapper">
      <div className="Modal-title">Thêm mới khách hàng</div>
      <Form form={form}>
        <div className="UserConfigModal-form style-table-form">
          <table>
            <tr>
              <td className="text">Họ tên</td>
              <td>
                <Form.Item name="name" rules={[validationRules.required()]}>
                  <Input adminStyle size="large" placeholder="Nhập tên" />
                </Form.Item>
              </td>
            </tr>
            <tr>
              <td className="text">Email</td>
              <td>
                <Form.Item name="email" rules={[validationRules.required()]}>
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
              <td className="text">Giới tính</td>
              <td>
                <Form.Item name="gender" rules={[validationRules.required()]}>
                  <Select adminStyle options={dataGenderOptions} size="large" placeholder="Chọn giới tính" />
                </Form.Item>
              </td>
            </tr>
            <tr>
              <td className="text">Tỉnh thành</td>
              <td>
                <Form.Item name="city" rules={[validationRules.required()]}>
                  <Input adminStyle size="large" placeholder="Chọn tỉnh thành" />
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
                <Form.Item name="password">
                  <Input type="password" adminStyle size="large" placeholder="Nhập mật khẩu" />
                </Form.Item>
              </td>
            </tr>
            <tr>
              <td className="text">Nhập lại mật khẩu</td>
              <td>
                <Form.Item name="confirmPassword">
                  <Input type="password" adminStyle size="large" placeholder="Nhập lại mật khẩu" />
                </Form.Item>
              </td>
            </tr>
            <tr>
              <td className="text">Trạng thái</td>
              <td>
                <Form.Item name="status" rules={[validationRules.required()]}>
                  <Select adminStyle size="large" placeholder="Chọn trạng thái" />
                </Form.Item>
              </td>
            </tr>
            <tr>
              <td className="text">Nhân viên phụ trách</td>
              <td>
                <Form.Item name="ownerResponsibility" rules={[validationRules.required()]}>
                  <Select adminStyle size="large" placeholder="Chọn nhân viên phụ trách" />
                </Form.Item>
              </td>
            </tr>
            <tr>
              <td>
                <div className="Modal-submit flex">
                  <Button title="Thêm mới" type="primary" adminStyle htmlType="submit" />
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
