import React, { useCallback, useEffect, useState } from 'react';
import { Form } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import Table from '@/components/Table';
import { EEmpty, ETypeNotification } from '@/common/enums';
import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from '@/common/constants';
import Button from '@/components/Button';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import MemberConfigModal from '@/containers/MemberConfigModal';
import { deleteAccountAction, getAccountsAction } from '@/redux/actions';
import { TAccountResponse, TGetAccountsBody } from '@/services/api/account-controller/types';
import { TRootState } from '@/redux/reducers';

import Input from '@/components/Input';
import { ETypeMemberConfigModal } from '@/containers/MemberConfigModal/MemberConfigModal.enums';
import ModalConfirm from '@/containers/ModalConfirm';
import { showNotification } from '@/utils/functions';
import { EAccountControllerAction } from '@/redux/actions/account-controller/constants';
import { TMembersTableProps } from './MembersTable.types';
import './MembersTable.scss';

const MembersTable: React.FC<TMembersTableProps> = () => {
  const dispatch = useDispatch();

  const getMembersLoading = useSelector(
    (state: TRootState) => state.loadingReducer[EAccountControllerAction.GET_ACCOUNTS],
  );
  const deleteMemberLoading = useSelector(
    (state: TRootState) => state.loadingReducer[EAccountControllerAction.DELETE_ACCOUNT],
  );
  const [getParamsRequest, setGetParamsRequest] = useState<TGetAccountsBody>({
    pageIndex: DEFAULT_PAGE,
    pageSize: DEFAULT_PAGE_SIZE,
    getCount: true,
  });
  const accountsState = useSelector((state: TRootState) => state.accountReducer.accounts?.data);

  const [deleteModalState, setDeleteModalState] = useState<{
    visible: boolean;
    data?: TAccountResponse;
  }>({
    visible: false,
  });

  const [filtersRenderValue, setFiltersRenderValue] = useState<{
    search?: string;
  }>({
    search: undefined,
  });

  const [memberConfigModalState, setMemberConfigModalState] = useState<{
    visible: boolean;
    type?: ETypeMemberConfigModal;
    data?: TAccountResponse;
  }>({
    visible: false,
  });

  const handleOpenMemberConfigModal = (type: ETypeMemberConfigModal, data?: TAccountResponse): void => {
    setMemberConfigModalState({ visible: true, type, data });
  };

  const handleCloseMemberConfigModal = (): void => {
    setMemberConfigModalState({ visible: false });
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

  const handleOpenDeleteModal = (data?: TAccountResponse): void => {
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
      dispatch(deleteAccountAction.request({ userId: String(deleteModalState.data.id) }, handleDeleteMemberSuccess));
    }
  };

  const handleDeleteMemberSuccess = (): void => {
    showNotification(ETypeNotification.SUCCESS, 'Xo?? nh??n vi??n th??nh c??ng');
    handleCloseDeleteModal();
    getMembersData();
  };

  const handleSubmitSuccessMemberConfigModal = (): void => {
    handleCloseMemberConfigModal();
    getMembersData();
  };

  const filtersRender = (): React.ReactNode => {
    return (
      <Form className="flex items-center" onFinish={(): void => handleSearchSubmit()}>
        <div className="Table-main-header-item-control">
          <Input
            placeholder="T??m ki???m"
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
      key: 'username',
      title: 'T??n nh??n vi??n',
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
      title: 'S??? ??i???n tho???i',
      dataIndex: 'phone',
    },
    {
      key: 'actions',
      title: 'Thao t??c',
      dataIndex: 'actions',
      render: (_: string, record: TAccountResponse): React.ReactElement => (
        <div className="Table-actions">
          <div
            className="Table-actions-item"
            onClick={(): void => handleOpenMemberConfigModal(ETypeMemberConfigModal.UPDATE, record)}
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

  const getMembersData = useCallback(() => {
    dispatch(
      getAccountsAction.request({
        ...getParamsRequest,
        status: getParamsRequest?.status?.value,
      }),
    );
  }, [dispatch, getParamsRequest]);

  useEffect(() => {
    getMembersData();
  }, [getMembersData]);

  return (
    <div className="MembersTable">
      <Table
        columns={columns}
        loading={getMembersLoading}
        dataSources={accountsState?.ListUser || []}
        page={getParamsRequest.pageIndex}
        pageSize={getParamsRequest.pageSize}
        showOrder
        total={accountsState?.Total}
        onPaginationChange={handlePageChange}
        onReload={handleReloadData}
        filtersRender={filtersRender()}
        onJumpingPage={handleJumpingPage}
        onAdd={(): void => handleOpenMemberConfigModal(ETypeMemberConfigModal.CREATE)}
      />

      <MemberConfigModal
        {...memberConfigModalState}
        onClose={handleCloseMemberConfigModal}
        onSubmit={handleSubmitSuccessMemberConfigModal}
      />

      <ModalConfirm
        visible={deleteModalState.visible}
        title="Xo?? nh??n vi??n"
        description="B???n c?? ch???c ch???n mu???n xo?? nh??n vi??n n??y? D??? li???u ???? xo?? ??i kh??ng th??? l???y l???i"
        onClose={handleCloseDeleteModal}
        onSubmit={handleSubmitDeleteModal}
        loading={deleteMemberLoading}
      />
    </div>
  );
};

export default MembersTable;
