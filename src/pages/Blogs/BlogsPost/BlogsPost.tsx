import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { navigate } from '@reach/router';
import { Form } from 'antd';

import Table from '@/components/Table';
import { EEmpty, ETypeNotification } from '@/common/enums';
import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE, statusOptions } from '@/common/constants';
import Button from '@/components/Button';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import { TArticleResponse, TGetArticlesParams } from '@/services/api/article-controller/types';
import { deleteArticlesAction, getArticleCategoryAction, getArticlesAction } from '@/redux/actions';
import { TRootState } from '@/redux/reducers';
import { EArticleControllerAction } from '@/redux/actions/article-controller/constants';
import { formatISODateToDateTime, getFullPathFile, showNotification } from '@/utils/functions';
import Select, { TSelectOption } from '@/components/Select';
import Input from '@/components/Input';
import { LayoutPaths, Paths } from '@/pages/routers';

import { TBlogsPostProps } from './BlogsPost.types';
import './BlogsPost.scss';
import ModalConfirm from '@/containers/ModalConfirm';

const BlogsPost: React.FC<TBlogsPostProps> = () => {
  const dispatch = useDispatch();

  const articlesState = useSelector((state: TRootState) => state.articleReducer.articles);
  const articleCategoryState = useSelector((state: TRootState) => state.articleReducer.articleCategory);
  const getArticlesLoading = useSelector(
    (state: TRootState) => state.loadingReducer[EArticleControllerAction.GET_ARTICLES],
  );
  const deleteArticlesLoading = useSelector(
    (state: TRootState) => state.loadingReducer[EArticleControllerAction.DELETE_ARTICLES],
  );

  const [filtersRenderValue, setFiltersRenderValue] = useState<{
    search?: string;
    status?: TSelectOption;
    categoryId?: TSelectOption;
  }>({
    search: undefined,
    status: undefined,
    categoryId: undefined,
  });

  const [getParamsRequest, setGetParamsRequest] = useState<TGetArticlesParams>({
    pageIndex: DEFAULT_PAGE,
    pageSize: DEFAULT_PAGE_SIZE,
    getCount: true,
  });

  const [deleteModalState, setDeleteModalState] = useState<{
    visible: boolean;
    data?: TArticleResponse[];
  }>({
    visible: false,
  });

  const [blogsTableCheckedValue, setBlogsTableCheckedValue] = useState<TArticleResponse[]>([]);

  const articleCategoryOptions = articleCategoryState?.data?.map((item) => ({
    label: item.categoryName,
    value: item.categoryId,
  }));

  const handleReloadData = (): void => {
    setFiltersRenderValue({
      search: undefined,
      status: undefined,
      categoryId: undefined,
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

  const handleNavigateAddBlog = (): void => {
    navigate(`${LayoutPaths.Admin}${Paths.BlogDetailCreate}`);
  };

  const handleOpenDeleteModal = (data?: TArticleResponse[]): void => {
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

  const handleNavigateBlogDetail = (data: TArticleResponse): void => {
    navigate(`${LayoutPaths.Admin}${Paths.BlogDetailUpdate(String(data.articleId))}`);
  };

  const handleSubmitDeleteModal = (): void => {
    if (deleteModalState.data) {
      const ids = deleteModalState.data.map((item) => item.articleId).join(',');
      dispatch(deleteArticlesAction.request(ids, handleDeleteArticlesSuccess));
    }
  };

  const handleCheckboxChange = (selectedRowKeys: React.Key[], selectedRows: any[]): void => {
    setBlogsTableCheckedValue(selectedRows);
  };

  const handleDeleteArticlesSuccess = (): void => {
    showNotification(ETypeNotification.SUCCESS, 'Xoá bài viết thành công');
    handleCloseDeleteModal();
    getArticlesData();
  };

  const columns = [
    {
      key: 'categoryName',
      title: 'Chuyên mục',
      dataIndex: 'categoryName',
    },
    {
      key: 'title',
      title: 'Tiêu đề',
      dataIndex: 'title',
    },
    {
      key: 'thumbnail',
      title: 'Hình ảnh',
      dataIndex: 'thumbnail',
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
      title: 'Trạng thái',
      dataIndex: 'status',
      render: (value: string): React.ReactElement => {
        const status = statusOptions.find((item) => String(item.value) === String(value));
        return <span style={{ color: status?.color }}>{status?.label}</span>;
      },
    },
    {
      key: 'createdDate',
      title: 'Ngày tạo',
      dataIndex: 'createdDate',
      render: (value: string): string => (value ? formatISODateToDateTime(value) : EEmpty.STRIKE_THROUGH),
    },
    {
      key: 'actions',
      title: 'Thao tác',
      dataIndex: 'actions',
      render: (_: string, record: TArticleResponse): React.ReactElement => (
        <div className="Table-actions">
          <div className="Table-actions-item" onClick={(): void => handleNavigateBlogDetail(record)}>
            <Button adminStyle type="primary" icon={<Icon name={EIconName.Pencil} color={EIconColor.WHITE} />} />
          </div>
          <div className="Table-actions-item" onClick={(): void => handleOpenDeleteModal([record])}>
            <Button adminStyle danger icon={<Icon name={EIconName.Trash} color={EIconColor.WHITE} />} />
          </div>
        </div>
      ),
    },
  ];

  const filtersRender = (): React.ReactNode => {
    return (
      <Form className="flex items-center" onFinish={(): void => handleSearchSubmit()}>
        <div className="Table-main-header-item-control">
          <Select
            placeholder="Chọn danh mục"
            adminStyle
            value={filtersRenderValue.categoryId}
            options={articleCategoryOptions}
            onChange={(value): void => handleChangeFiltersRenderValue('categoryId', value)}
          />
        </div>
        <div className="Table-main-header-item-control">
          <Select
            placeholder="Chọn trạng thái"
            options={statusOptions}
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

  const handlePageChange = (page: number, pageSize?: number): void => {
    setGetParamsRequest({
      ...getParamsRequest,
      pageIndex: page,
      pageSize: pageSize || getParamsRequest.pageSize,
    });
  };

  const getArticlesData = useCallback(() => {
    setBlogsTableCheckedValue([]);
    dispatch(
      getArticlesAction.request({
        ...getParamsRequest,
        status: getParamsRequest?.status?.value,
        categoryId: getParamsRequest?.categoryId?.value,
      }),
    );
  }, [dispatch, getParamsRequest]);

  const getArticleCategoryData = useCallback(() => {
    dispatch(getArticleCategoryAction.request());
  }, [dispatch]);

  useEffect(() => {
    getArticleCategoryData();
  }, [getArticleCategoryData]);

  useEffect(() => {
    getArticlesData();
  }, [getArticlesData]);

  return (
    <div className="BlogsPost">
      <Table
        rowKey="articleId"
        showOrder
        columns={columns}
        dataSources={articlesState?.data?.ListArticle || []}
        checkedValue={blogsTableCheckedValue}
        page={getParamsRequest.pageIndex}
        pageSize={getParamsRequest.pageSize}
        loading={getArticlesLoading}
        total={articlesState?.data?.Total}
        onPaginationChange={handlePageChange}
        onReload={handleReloadData}
        filtersRender={filtersRender()}
        onJumpingPage={handleJumpingPage}
        onAdd={handleNavigateAddBlog}
        onCheckboxChange={handleCheckboxChange}
        onDeletes={(): void => handleOpenDeleteModal(blogsTableCheckedValue)}
      />

      <ModalConfirm
        visible={deleteModalState.visible}
        title="Xoá bài viết"
        description="Bạn có chắc chắn muốn xoá bài viết này? Dữ liệu đã xoá đi không thể lấy lại"
        onClose={handleCloseDeleteModal}
        onSubmit={handleSubmitDeleteModal}
        loading={deleteArticlesLoading}
      />
    </div>
  );
};

export default BlogsPost;
