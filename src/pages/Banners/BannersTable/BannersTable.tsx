import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from 'antd';

import Table from '@/components/Table';
import { EEmpty, ETypeNotification } from '@/common/enums';
import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE, statusOptions } from '@/common/constants';
import Button from '@/components/Button';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import BannerConfigModal from '@/containers/BannerConfigModal';
import { deleteBannerAction, getBannerCategoryAction, getBannersAction } from '@/redux/actions';
import { TBannerResponse, TGetBannersBody } from '@/services/api/banner-controller/types';
import Input from '@/components/Input';
import { TRootState } from '@/redux/reducers';
import { EBannerControllerAction } from '@/redux/actions/banner-controller/constants';
import { ETypeBannerConfigModal } from '@/containers/BannerConfigModal/BannerConfigModal.enums';
import Select, { TSelectOption } from '@/components/Select';
import ModalConfirm from '@/containers/ModalConfirm';
import { getFullPathFile, showNotification } from '@/utils/functions';

import { TBannersTableProps } from './BannersTable.types';
import './BannersTable.scss';

const BannersTable: React.FC<TBannersTableProps> = () => {
  const dispatch = useDispatch();

  const bannersState = useSelector((state: TRootState) => state.bannerReducer.banners?.data);
  const getBannersLoading = useSelector(
    (state: TRootState) => state.loadingReducer[EBannerControllerAction.GET_BANNERS],
  );
  const deleteBannerLoading = useSelector(
    (state: TRootState) => state.loadingReducer[EBannerControllerAction.DELETE_BANNER],
  );
  const bannersCategoryState = useSelector((state: TRootState) => state.bannerReducer?.bannerCategory?.data) || [];
  const bannersCategoryOptions = bannersCategoryState.map((item) => ({
    label: item.categoryName,
    value: item.identityType,
  }));

  const [getParamsRequest, setGetParamsRequest] = useState<TGetBannersBody>({
    pageIndex: DEFAULT_PAGE,
    pageSize: DEFAULT_PAGE_SIZE,
    getCount: true,
  });

  const [bannerConfigModalState, setBannerConfigModalState] = useState<{
    visible: boolean;
    data?: TBannerResponse;
    type?: ETypeBannerConfigModal;
  }>({
    visible: false,
  });

  const [filtersRenderValue, setFiltersRenderValue] = useState<{
    search?: string;
    identity?: TSelectOption;
  }>({
    search: undefined,
    identity: undefined,
  });

  const [deleteModalState, setDeleteModalState] = useState<{
    visible: boolean;
    data?: TBannerResponse[];
  }>({
    visible: false,
  });

  const [bannersTableCheckedValue, setBannersTableCheckedValue] = useState<TBannerResponse[]>([]);

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

  const handleOpenBannerConfigModal = (type?: ETypeBannerConfigModal, data?: TBannerResponse): void => {
    setBannerConfigModalState({ visible: true, type, data });
  };
  const handleCloseBannerConfigModal = (): void => {
    setBannerConfigModalState({ visible: false });
  };
  const handleSubmitSuccessBannerConfigModal = (): void => {
    handleCloseBannerConfigModal();
    getBannersData();
  };

  const handleOpenDeleteModal = (data?: TBannerResponse[]): void => {
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
      const ids = deleteModalState.data.map((item) => item.imageId).join(',');
      dispatch(deleteBannerAction.request({ ids }, handleDeleteBannerSuccess));
    }
  };

  const handleDeleteBannerSuccess = (): void => {
    showNotification(ETypeNotification.SUCCESS, 'Xo?? Banner th??nh c??ng');
    handleCloseDeleteModal();
    getBannersData();
  };

  const filtersRender = (): React.ReactNode => {
    return (
      <Form className="flex items-center" onFinish={(): void => handleSearchSubmit()}>
        <div className="Table-main-header-item-control">
          <Select
            placeholder="V??? tr??"
            adminStyle
            value={filtersRenderValue.identity}
            options={bannersCategoryOptions}
            onChange={(value): void => handleChangeFiltersRenderValue('identity', value)}
          />
        </div>
        <div className="Table-main-header-item-control">
          <Input
            placeholder="T??m ki???m"
            adminStyle
            value={filtersRenderValue.search}
            onChange={(value): void => handleChangeFiltersRenderValue('search', value)}
          />
        </div>
        <div className="Table-main-header-item-control">
          <Button
            icon={<Icon name={EIconName.Search} color={EIconColor.WHITE} />}
            type="primary"
            htmlType="submit"
            disabled={getBannersLoading}
          />
        </div>
      </Form>
    );
  };

  const handleCheckboxChange = (selectedRowKeys: React.Key[], selectedRows: any[]): void => {
    setBannersTableCheckedValue(selectedRows);
  };

  const columns = [
    {
      key: 'categoryName',
      title: 'V??? tr??',
      dataIndex: 'categoryName',
    },
    {
      key: 'description',
      title: 'M?? t???',
      dataIndex: 'description',
    },
    {
      key: 'filePath',
      title: 'H??nh ???nh',
      dataIndex: 'filePath',
      render: (value: string): React.ReactElement =>
        value ? (
          <div className="Table-image">
            <img src={getFullPathFile(value)} alt="" />
          </div>
        ) : (
          <>{EEmpty.STRIKE_THROUGH}</>
        ),
    },
    {
      key: 'status',
      title: 'Tr???ng th??i',
      className: 'nowrap',
      dataIndex: 'status',
      render: (value: string): React.ReactElement => {
        const status = statusOptions.find((item) => String(item.value) === String(value));
        return <span style={{ color: status?.color }}>{status?.label}</span>;
      },
    },
    {
      key: 'actions',
      title: 'Thao t??c',
      dataIndex: 'actions',
      render: (_: string, record: TBannerResponse): React.ReactElement => (
        <div className="Table-actions">
          <div className="Table-actions-item">
            <Button
              adminStyle
              type="primary"
              icon={<Icon name={EIconName.Pencil} color={EIconColor.WHITE} />}
              onClick={(): void => handleOpenBannerConfigModal(ETypeBannerConfigModal.UPDATE, record)}
            />
          </div>
          <div className="Table-actions-item">
            <Button
              adminStyle
              danger
              icon={<Icon name={EIconName.Trash} color={EIconColor.WHITE} />}
              onClick={(): void => handleOpenDeleteModal([record])}
            />
          </div>
        </div>
      ),
    },
  ];

  const getBannersData = useCallback(() => {
    setBannersTableCheckedValue([]);
    dispatch(
      getBannersAction.request({
        ...getParamsRequest,
        identity: getParamsRequest?.identity?.value,
      }),
    );
  }, [dispatch, getParamsRequest]);

  const getBannersCategory = useCallback(() => {
    dispatch(getBannerCategoryAction.request());
  }, [dispatch]);

  useEffect(() => {
    getBannersData();
  }, [getBannersData]);

  useEffect(() => {
    getBannersCategory();
  }, [getBannersCategory]);

  return (
    <div className="BannersTable">
      <Table
        rowKey="imageId"
        showOrder
        columns={columns}
        dataSources={bannersState?.ListImage || []}
        checkedValue={bannersTableCheckedValue}
        page={getParamsRequest.pageIndex}
        pageSize={getParamsRequest.pageSize}
        total={bannersState?.Total}
        onPaginationChange={handlePageChange}
        onReload={handleReloadData}
        filtersRender={filtersRender()}
        onJumpingPage={handleJumpingPage}
        loading={getBannersLoading}
        onAdd={(): void => handleOpenBannerConfigModal(ETypeBannerConfigModal.CREATE)}
        onCheckboxChange={handleCheckboxChange}
        onDeletes={(): void => handleOpenDeleteModal(bannersTableCheckedValue)}
      />

      <BannerConfigModal
        {...bannerConfigModalState}
        onClose={handleCloseBannerConfigModal}
        onSubmit={handleSubmitSuccessBannerConfigModal}
      />

      <ModalConfirm
        visible={deleteModalState.visible}
        title="Xo?? banner"
        description="B???n c?? ch???c ch???n mu???n xo?? banner n??y? D??? li???u ???? xo?? ??i kh??ng th??? l???y l???i"
        onClose={handleCloseDeleteModal}
        onSubmit={handleSubmitDeleteModal}
        loading={deleteBannerLoading}
      />
    </div>
  );
};

export default BannersTable;
