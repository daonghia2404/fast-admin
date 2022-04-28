import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from 'antd';

import Table from '@/components/Table';
import { EEmpty, ETypeNotification } from '@/common/enums';
import { customerStatusOptions, DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from '@/common/constants';
import Button from '@/components/Button';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import UserConfigModal from '@/containers/UserConfigModal';
import { deleteClientAction, getClientEmployeeAction, getClientsAction } from '@/redux/actions';
import { TClientResponse, TGetClientsBody } from '@/services/api/client-controller/types';
import { TRootState } from '@/redux/reducers';
import { EClientControllerAction } from '@/redux/actions/client-controller/constants';
import Input from '@/components/Input';
import Select, { TSelectOption } from '@/components/Select';
import { ETypeUserConfigModal } from '@/containers/UserConfigModal/UserConfigModal.enums';
import ModalConfirm from '@/containers/ModalConfirm';
import { showNotification } from '@/utils/functions';

import { TUsersTableProps } from './UsersTable.types';
import './UsersTable.scss';

const UsersTable: React.FC<TUsersTableProps> = () => {
  const dispatch = useDispatch();

  const getClientsLoading = useSelector(
    (state: TRootState) => state.loadingReducer[EClientControllerAction.GET_CLIENTS],
  );
  const deleteClientLoading = useSelector(
    (state: TRootState) => state.loadingReducer[EClientControllerAction.DELETE_CLIENT],
  );
  const [getParamsRequest, setGetParamsRequest] = useState<TGetClientsBody>({
    pageIndex: DEFAULT_PAGE,
    pageSize: DEFAULT_PAGE_SIZE,
    getCount: true,
  });
  const clientsState = useSelector((state: TRootState) => state.clientReducer.clients?.data);
  const clientsEmployeeState = useSelector((state: TRootState) => state.clientReducer.clientEmployee?.data) || [];
  const clientsEmployeeOptions = clientsEmployeeState?.map((item) => ({ label: item.employeeName, value: item.id }));

  const [deleteModalState, setDeleteModalState] = useState<{
    visible: boolean;
    data?: TClientResponse;
  }>({
    visible: false,
  });

  const [filtersRenderValue, setFiltersRenderValue] = useState<{
    search?: string;
    status?: TSelectOption;
    employeeId?: TSelectOption;
  }>({
    search: undefined,
    status: undefined,
    employeeId: undefined,
  });

  const [userConfigModalState, setUserConfigModalState] = useState<{
    visible: boolean;
    type?: ETypeUserConfigModal;
    data?: TClientResponse;
  }>({
    visible: false,
  });

  const handleOpenUserConfigModal = (type: ETypeUserConfigModal, data?: TClientResponse): void => {
    setUserConfigModalState({ visible: true, type, data });
  };

  const handleCloseUserConfigModal = (): void => {
    setUserConfigModalState({ visible: false });
  };

  const handleChangeFiltersRenderValue = (key: string, value: any): void => {
    const newFilterValue = {
      ...filtersRenderValue,
      [key]: value || undefined,
    };
    setFiltersRenderValue(newFilterValue);

    if (key !== 'search') {
      handleSearchSubmit(newFilterValue);
    }
  };

  const handlePageChange = (page: number, pageSize?: number): void => {
    setGetParamsRequest({
      ...getParamsRequest,
      pageIndex: page,
      pageSize: pageSize || getParamsRequest.pageSize,
    });
  };

  const handleReloadData = (): void => {
    setFiltersRenderValue({
      search: undefined,
      status: undefined,
      employeeId: undefined,
    });
    setGetParamsRequest({ pageIndex: DEFAULT_PAGE, pageSize: DEFAULT_PAGE_SIZE, getCount: true });
  };

  const handleSearchSubmit = (newFilterValue?: any): void => {
    setGetParamsRequest({
      ...getParamsRequest,
      ...(newFilterValue || filtersRenderValue),
      pageIndex: DEFAULT_PAGE,
    });
  };

  const handleJumpingPage = (page: string): void => {
    setGetParamsRequest({
      ...getParamsRequest,
      pageIndex: Number(page),
    });
  };

  const handleOpenDeleteModal = (data?: TClientResponse): void => {
    setDeleteModalState({
      visible: true,
      data,
    });
  };

  const handleCloseDeleteModal = (): void => {
    setDeleteModalState({
      visible: false,
    });
  };

  const handleSubmitDeleteModal = (): void => {
    if (deleteModalState.data) {
      dispatch(deleteClientAction.request({ id: String(deleteModalState.data.id) }, handleDeleteClientSuccess));
    }
  };

  const handleDeleteClientSuccess = (): void => {
    showNotification(ETypeNotification.SUCCESS, 'Xoá khách hàng thành công');
    handleCloseDeleteModal();
    getClientsData();
  };

  const handleSubmitSuccessUserConfigModal = (): void => {
    handleCloseUserConfigModal();
    getClientsData();
  };

  const filtersRender = (): React.ReactNode => {
    return (
      <Form className="flex items-center" onFinish={(): void => handleSearchSubmit()}>
        <div className="Table-main-header-item-control">
          <Select
            placeholder="Người phụ trách"
            adminStyle
            options={clientsEmployeeOptions}
            value={filtersRenderValue.employeeId}
            onChange={(value): void => handleChangeFiltersRenderValue('employeeId', value)}
          />
        </div>
        <div className="Table-main-header-item-control">
          <Select
            placeholder="Trạng thái"
            options={customerStatusOptions}
            value={filtersRenderValue.status}
            onChange={(option): void => handleChangeFiltersRenderValue('status', option)}
          />
        </div>
        <div className="Table-main-header-item-control">
          <Input
            placeholder="Tìm kiếm"
            adminStyle
            value={filtersRenderValue.search}
            onChange={(value): void => handleChangeFiltersRenderValue('search', value)}
          />
        </div>
        <div className="Table-main-header-item-control">
          <Button icon={<Icon name={EIconName.Search} color={EIconColor.WHITE} />} type="primary" htmlType="submit" />
        </div>
      </Form>
    );
  };

  const columns = [
    {
      key: 'id',
      title: 'ID',
      dataIndex: 'id',
    },
    {
      key: 'code',
      title: 'Code',
      dataIndex: 'code',
    },
    {
      key: 'username',
      title: 'Username',
      dataIndex: 'username',
    },
    {
      key: 'email',
      title: 'Email',
      dataIndex: 'email',
      render: (value: string): string => value || EEmpty.STRIKE_THROUGH,
    },
    {
      key: 'phone',
      title: 'Số điện thoại',
      dataIndex: 'phone',
    },
    {
      key: 'employeeId',
      title: 'Người phụ trách',
      dataIndex: 'employeeId',
      render: (value: string): string => {
        const employee = clientsEmployeeState.find((item) => String(item.id) === String(value));
        return employee?.employeeName || EEmpty.STRIKE_THROUGH;
      },
    },
    {
      key: 'customerStatus',
      title: 'Trạng thái',
      dataIndex: 'customerStatus',
      render: (value: string): React.ReactElement => {
        const status = customerStatusOptions.find((item) => String(item.value) === String(value));
        return <span style={{ color: status?.color }}>{status?.label}</span>;
      },
    },
    {
      key: 'actions',
      title: 'Thao tác',
      dataIndex: 'actions',
      render: (_: string, record: TClientResponse): React.ReactElement => (
        <div className="Table-actions">
          <div
            className="Table-actions-item"
            onClick={(): void => handleOpenUserConfigModal(ETypeUserConfigModal.UPDATE, record)}
          >
            <Button adminStyle type="primary" icon={<Icon name={EIconName.Pencil} color={EIconColor.WHITE} />} />
          </div>
          <div className="Table-actions-item" onClick={(): void => handleOpenDeleteModal(record)}>
            <Button adminStyle danger icon={<Icon name={EIconName.Trash} color={EIconColor.WHITE} />} />
          </div>
        </div>
      ),
    },
  ];

  const getClientsData = useCallback(() => {
    dispatch(
      getClientsAction.request({
        ...getParamsRequest,
        status: getParamsRequest?.status?.value,
        employeeId: getParamsRequest?.employeeId?.value,
      }),
    );
  }, [dispatch, getParamsRequest]);

  const getClientEmployeeData = useCallback(() => {
    dispatch(getClientEmployeeAction.request());
  }, [dispatch]);

  useEffect(() => {
    getClientsData();
  }, [getClientsData]);

  useEffect(() => {
    getClientEmployeeData();
  }, [getClientEmployeeData]);

  return (
    <div className="UsersTable">
      <Table
        columns={columns}
        loading={getClientsLoading}
        dataSources={clientsState?.ListClient || []}
        page={getParamsRequest.pageIndex}
        pageSize={getParamsRequest.pageSize}
        showOrder
        total={clientsState?.Total}
        onPaginationChange={handlePageChange}
        onReload={handleReloadData}
        filtersRender={filtersRender()}
        onJumpingPage={handleJumpingPage}
        onAdd={(): void => handleOpenUserConfigModal(ETypeUserConfigModal.CREATE)}
      />

      <UserConfigModal
        {...userConfigModalState}
        onClose={handleCloseUserConfigModal}
        onSubmit={handleSubmitSuccessUserConfigModal}
      />

      <ModalConfirm
        visible={deleteModalState.visible}
        title="Xoá khách hàng"
        description="Bạn có chắc chắn muốn xoá khách hàng này? Dữ liệu đã xoá đi không thể lấy lại"
        onClose={handleCloseDeleteModal}
        onSubmit={handleSubmitDeleteModal}
        loading={deleteClientLoading}
      />
    </div>
  );
};

export default UsersTable;
