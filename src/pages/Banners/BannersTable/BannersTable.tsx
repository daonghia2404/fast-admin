import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Table from '@/components/Table';
import { EEmpty, ETypeNotification } from '@/common/enums';
import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from '@/common/constants';
import Button from '@/components/Button';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import BannerConfigModal from '@/containers/BannerConfigModal';
import { deleteBannerAction, getBannerCategoryAction, getBannersAction } from '@/redux/actions';
import { TBannerResponse, TGetBannerResponse, TGetBannersBody } from '@/services/api/banner-controller/types';

import { TBannersTableProps } from './BannersTable.types';
import './BannersTable.scss';
import Input from '@/components/Input';
import { TRootState } from '@/redux/reducers';
import { EBannerControllerAction } from '@/redux/actions/banner-controller/constants';
import { ETypeBannerConfigModal } from '@/containers/BannerConfigModal/BannerConfigModal.enums';
import Select, { TSelectOption } from '@/components/Select';
import ModalConfirm from '@/containers/ModalConfirm';
import { showNotification } from '@/utils/functions';

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
    data?: TGetBannerResponse;
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
    data?: TBannerResponse;
  }>({
    visible: false,
  });

  const [bannersTableCheckedValue, setBannersTableCheckedValue] = useState<TBannerResponse>([]);

  const handleChangeFiltersRenderValue = (key: string, value: any): void => {
    setFiltersRenderValue({
      ...filtersRenderValue,
      [key]: value || undefined,
    });
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
  const handleSearchSubmit = (): void => {
    setGetParamsRequest({
      ...getParamsRequest,
      ...filtersRenderValue,
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

  const filtersRender = (): React.ReactNode => {
    return (
      <>
        <div className="Table-main-header-item-control">
          <Select
            placeholder="Chọn vị trí"
            adminStyle
            value={filtersRenderValue.identity}
            options={bannersCategoryOptions}
            onChange={(value): void => handleChangeFiltersRenderValue('identity', value)}
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
          <Button
            icon={<Icon name={EIconName.Search} color={EIconColor.WHITE} />}
            type="primary"
            onClick={handleSearchSubmit}
          />
        </div>
      </>
    );
  };

  const handleOpenDeleteModal = (data?: TBannerResponse): void => {
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
      dispatch(deleteBannerAction.request({ id: String(deleteModalState.data.id) }, handleDeleteBannerSuccess));
    }
  };

  const handleDeleteBannerSuccess = (): void => {
    showNotification(ETypeNotification.SUCCESS, 'Xoá banner thành công');
    handleCloseDeleteModal();
    getBannersData();
  };

  const columns = [
    {
      key: 'id',
      title: 'ID',
      dataIndex: 'id',
      render: (): string => EEmpty.STRIKE_THROUGH,
    },
    {
      key: 'title',
      title: 'Tiêu đề',
      dataIndex: 'title',
      render: (): string => EEmpty.STRIKE_THROUGH,
    },
    {
      key: 'image',
      title: 'Hình ảnh',
      dataIndex: 'image',
      render: (): string => EEmpty.STRIKE_THROUGH,
    },
    {
      key: 'createdAt',
      title: 'Ngày tạo',
      dataIndex: 'createdAt',
      render: (): string => EEmpty.STRIKE_THROUGH,
    },
    {
      key: 'actions',
      title: 'Thao tác',
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
              onClick={(): void => handleOpenDeleteModal(record)}
            />
          </div>
        </div>
      ),
    },
  ];

  const getBannersData = useCallback(() => {
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
      />

      <BannerConfigModal
        {...bannerConfigModalState}
        onClose={handleCloseBannerConfigModal}
        onSubmit={handleSubmitSuccessBannerConfigModal}
      />

      <ModalConfirm
        visible={deleteModalState.visible}
        title="Xoá banner"
        description="Bạn có chắc chắn muốn xoá banner này? Dữ liệu đã xoá đi không thể lấy lại"
        onClose={handleCloseDeleteModal}
        onSubmit={handleSubmitDeleteModal}
        loading={deleteBannerLoading}
      />
    </div>
  );
};

export default BannersTable;
