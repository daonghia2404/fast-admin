import React, { useState } from 'react';
import { Form } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import QuickOrderModal from '@/containers/QuickOrderModal';
import { validationRules } from '@/utils/functions';
import Input from '@/components/Input';
import Button from '@/components/Button';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import { TRootState } from '@/redux/reducers';
import { EDepotControllerAction } from '@/redux/actions/depot-controller/constants';
import { getDepotOrdersAction } from '@/redux/actions';
import { TDepotOrderResponse } from '@/services/api/depot-controller/types';

import './SearchOrder.scss';

const SearchOrder: React.FC = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const [quickOrderModalState, setQuickOrderModalState] = useState<{
    visible: boolean;
    data?: TDepotOrderResponse[];
  }>({
    visible: false,
  });

  const getDepotOrderLoading = useSelector(
    (state: TRootState) => state.loadingReducer[EDepotControllerAction.GET_DEPOT_ORDERS],
  );

  const handleSubmit = (values: any): void => {
    const ladingCode = values?.ladingCode;
    dispatch(getDepotOrdersAction.request(ladingCode, handleOpenOrderModalState));
  };

  const handleOpenOrderModalState = (): void => {
    setQuickOrderModalState({ visible: true });
  };

  const handleCloseOrderModalState = (): void => {
    setQuickOrderModalState({ visible: false });
  };
  return (
    <div className="SearchOrder">
      <Form form={form} className="SearchOrder-search flex justify-end" onFinish={handleSubmit}>
        <Form.Item name="ladingCode" rules={[validationRules.required()]}>
          <Input adminStyle placeholder="Nhập mã vận đơn" />
        </Form.Item>
        <Form.Item>
          <Button
            disabled={getDepotOrderLoading}
            type="primary"
            htmlType="submit"
            icon={<Icon name={EIconName.Search} color={EIconColor.WHITE} />}
          />
        </Form.Item>
      </Form>
      <QuickOrderModal {...quickOrderModalState} onClose={handleCloseOrderModalState} />
    </div>
  );
};

export default SearchOrder;
