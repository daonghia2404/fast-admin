import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from 'antd';
import { TRootState } from '@/redux/reducers';

import Modal from '@/components/Modal';
import Button from '@/components/Button';
import { showNotification, validationRules } from '@/utils/functions';
import Select from '@/components/Select';
import { statusOptions } from '@/common/constants';
import UploadSingleImage from '@/components/UploadSingleImage';
import { createUpdateBannerAction } from '@/redux/actions';
import { ETypeNotification } from '@/common/enums';
import TextArea from '@/components/TextArea';
import { ETypeBannerConfigModal } from '@/containers/BannerConfigModal/BannerConfigModal.enums';
import { EBannerControllerAction } from '@/redux/actions/banner-controller/constants';

import { TBannerConfigModalProps } from './BannerConfigModal.types';
import './BannerConfigModal.scss';

const BannerConfigModal: React.FC<TBannerConfigModalProps> = ({ visible, type, data, onClose, onSubmit }) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const isCreateModal = type === ETypeBannerConfigModal.CREATE;

  const bannersCategoryState = useSelector((state: TRootState) => state.bannerReducer?.bannerCategory?.data) || [];
  const bannersCategoryOptions = bannersCategoryState.map((item) => ({
    label: item.categoryName,
    value: item.categoryId,
  }));

  const createUpdateBannerLoading = useSelector(
    (state: TRootState) => state.loadingReducer[EBannerControllerAction.CREATE_UPDATE_BANNER],
  );

  const handleSubmit = (values: any): void => {
    const body = {
      ...data,
      filePath: values.filePath,
      description: values.description,
      categoryId: values.categoryId?.value,
      status: values.status?.value,
      // categoryName: values.categoryName,
    };

    dispatch(createUpdateBannerAction.request(body, handleCreateUpdateBannerSuccess));
  };

  const handleCreateUpdateBannerSuccess = (): void => {
    showNotification(ETypeNotification.SUCCESS, `${isCreateModal ? 'Th??m m???i' : 'C???p nh???t'} banner th??nh c??ng`);
    onSubmit?.();
  };

  useEffect(() => {
    if (visible && data) {
      form.setFieldsValue({
        ...data,
        categoryId: bannersCategoryOptions.find((item) => item.value === data?.categoryId),
        status: statusOptions.find((item) => item.value === data.status),
      });
    } else {
      form.resetFields();
    }
  }, [form, data, visible, bannersCategoryOptions]);

  return (
    <Modal visible={visible} onClose={onClose} maxWidth="104rem" wrapClassName="BannerConfigModal-wrapper">
      <div className="Modal-title">{`${isCreateModal ? 'Th??m m???i' : 'C???p nh???t'}`} banner</div>
      <Form form={form} onFinish={handleSubmit}>
        <div className="BannerConfigModal-form style-table-form">
          <table>
            {/* <tr>
              <td className="text">Ti??u ????? banner</td>
              <td>
                <Form.Item name="categoryName" rules={[validationRules.required()]}>
                  <Input adminStyle size="large" placeholder="Nh???p ti??u ????? banner" />
                </Form.Item>
              </td>
            </tr> */}
            <tr>
              <td className="text">M?? t??? banner</td>
              <td>
                <Form.Item name="description" rules={[validationRules.required()]}>
                  <TextArea adminStyle placeholder="Nh???p m?? t??? banner" />
                </Form.Item>
              </td>
            </tr>
            <tr>
              <td className="text">V??? tr?? hi???n th???</td>
              <td>
                <Form.Item name="categoryId" rules={[validationRules.required()]}>
                  <Select adminStyle options={bannersCategoryOptions} size="large" placeholder="Ch???n v??? tr?? hi???n th???" />
                </Form.Item>
              </td>
            </tr>
            <tr>
              <td className="text">Tr???ng th??i</td>
              <td>
                <Form.Item name="status" rules={[validationRules.required()]}>
                  <Select adminStyle size="large" placeholder="Ch???n tr???ng th??i" options={statusOptions} />
                </Form.Item>
              </td>
            </tr>
            <tr>
              <td className="text">???nh banner</td>
              <td>
                <Form.Item name="filePath" rules={[validationRules.required()]}>
                  <UploadSingleImage />
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
                    loading={createUpdateBannerLoading}
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

export default BannerConfigModal;
