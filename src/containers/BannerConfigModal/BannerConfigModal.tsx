import React from 'react';
import { Form } from 'antd';

import Modal from '@/components/Modal';
import Input from '@/components/Input';
import Button from '@/components/Button';
import { validationRules } from '@/utils/functions';
import Select from '@/components/Select';
import { dataGenderOptions } from '@/common/constants';
import UploadSingleImage from '@/components/UploadSingleImage';

import { TBannerConfigModalProps } from './BannerConfigModal.types';
import './BannerConfigModal.scss';

const BannerConfigModal: React.FC<TBannerConfigModalProps> = ({ visible, onClose }) => {
  const [form] = Form.useForm();

  return (
    <Modal visible={visible} onClose={onClose} maxWidth="104rem" wrapClassName="BannerConfigModal-wrapper">
      <div className="Modal-title">Thêm mới banner</div>
      <Form form={form}>
        <div className="BannerConfigModal-form style-table-form">
          <table>
            <tr>
              <td className="text">Tiêu đề banner</td>
              <td>
                <Form.Item name="name" rules={[validationRules.required()]}>
                  <Input adminStyle size="large" placeholder="Nhập tiêu đề banner" />
                </Form.Item>
              </td>
            </tr>
            <tr>
              <td className="text">Vị trí hiển thị</td>
              <td>
                <Form.Item name="gender" rules={[validationRules.required()]}>
                  <Select adminStyle options={dataGenderOptions} size="large" placeholder="Chọn vị trí hiển thị" />
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
              <td className="text">Ảnh banner</td>
              <td>
                <Form.Item name="images" rules={[validationRules.required()]}>
                  <UploadSingleImage />
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

export default BannerConfigModal;
