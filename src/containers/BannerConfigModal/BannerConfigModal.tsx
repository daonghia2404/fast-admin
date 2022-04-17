import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from 'antd';
import { TRootState } from '@/redux/reducers';

import Modal from '@/components/Modal';
import Input from '@/components/Input';
import Button from '@/components/Button';
import { showNotification, validationRules } from '@/utils/functions';
import Select from '@/components/Select';
import { statusOptions } from '@/common/constants';
import UploadSingleImage from '@/components/UploadSingleImage';
import { createUpdateBannerAction } from '@/redux/actions';
import { ETypeNotification } from '@/common/enums';

import { ETypeBannerConfigModal } from '@/containers/BannerConfigModal/BannerConfigModal.enums';
import { TBannerConfigModalProps } from './BannerConfigModal.types';
import './BannerConfigModal.scss';
import TextArea from '@/components/TextArea';

const BannerConfigModal: React.FC<TBannerConfigModalProps> = ({ visible, type, data, onClose, onSubmit }) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const isCreateModal = type === ETypeBannerConfigModal.CREATE;

  const bannersCategoryState = useSelector((state: TRootState) => state.bannerReducer?.bannerCategory?.data) || [];
  const bannersCategoryOptions = bannersCategoryState.map((item) => ({
    label: item.categoryName,
    value: item.identityType,
  }));

  const handleSubmit = (values: any): void => {
    const body = {
      filePath: values.images,
      description: values.description,
      categoryId: values.categoryId?.value,
      status: values.status?.value,
      categoryName: values.name,
    };

    dispatch(createUpdateBannerAction.request(body, handleCreateUpdateBannerSuccess));
  };

  const handleCreateUpdateBannerSuccess = (): void => {
    showNotification(ETypeNotification.SUCCESS, `${isCreateModal ? 'Thêm mới' : 'Cập nhật'} banner thành công`);
    onSubmit?.();
  };

  useEffect(() => {
    if (visible && data) {
      form.setFieldsValue({
        ...data,
      });
    } else {
      form.resetFields();
    }
  }, [form, data, visible]);

  return (
    <Modal visible={visible} onClose={onClose} maxWidth="104rem" wrapClassName="BannerConfigModal-wrapper">
      <div className="Modal-title">{`${isCreateModal ? 'Thêm mới' : 'Cập nhật'}`} banner</div>
      <Form form={form} onFinish={handleSubmit}>
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
              <td className="text">Mô tả banner</td>
              <td>
                <Form.Item name="description" rules={[validationRules.required()]}>
                  <TextArea adminStyle placeholder="Nhập mô tả banner" />
                </Form.Item>
              </td>
            </tr>
            <tr>
              <td className="text">Vị trí hiển thị</td>
              <td>
                <Form.Item name="categoryId" rules={[validationRules.required()]}>
                  <Select adminStyle options={bannersCategoryOptions} size="large" placeholder="Chọn vị trí hiển thị" />
                </Form.Item>
              </td>
            </tr>
            <tr>
              <td className="text">Trạng thái</td>
              <td>
                <Form.Item name="status" rules={[validationRules.required()]}>
                  <Select adminStyle size="large" placeholder="Chọn trạng thái" options={statusOptions} />
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
