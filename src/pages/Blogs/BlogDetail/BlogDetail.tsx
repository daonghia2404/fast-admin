import React, { useCallback, useEffect } from 'react';
import { Form } from 'antd';
import { navigate, useLocation } from '@reach/router';
import { useDispatch, useSelector } from 'react-redux';

import Tabs from '@/components/Tabs';
import { formatISODateToDateTime, showNotification, validationRules } from '@/utils/functions';
import Input from '@/components/Input';
import CkEditor from '@/components/CkEditor';
import Select from '@/components/Select';
import UploadSingleImage from '@/components/UploadSingleImage';
import Icon, { EIconName } from '@/components/Icon';
import { statusOptions } from '@/common/constants';
import Button from '@/components/Button';
import { ETypeBlogDetail } from '@/pages/Blogs/BlogDetail/BlogDetail.enums';
import { LayoutPaths, Paths } from '@/pages/routers';
import { createUpdateArticleAction, getArticleCategoryAction } from '@/redux/actions';
import { TRootState } from '@/redux/reducers';
import { ETypeNotification } from '@/common/enums';
import { EArticleControllerAction } from '@/redux/actions/article-controller/constants';

import { TBlogDetailProps } from './BlogDetail.types';
import './BlogDetail.scss';

const BlogDetail: React.FC<TBlogDetailProps> = ({ type }) => {
  const dispatch = useDispatch();

  const [form] = Form.useForm();
  const isUpdateBlog = type === ETypeBlogDetail.UPDATE;
  const location: any = useLocation();
  const data = location?.state?.blog;

  const articleCategoryState = useSelector((state: TRootState) => state.articleReducer.articleCategory);

  const createUpdateArticleLoading = useSelector(
    (state: TRootState) => state.loadingReducer[EArticleControllerAction.CREATE_UPDATE_ARTICLE],
  );

  const articleCategoryOptions = articleCategoryState?.data?.map((item) => ({
    label: item.categoryName,
    value: item.categoryId,
  }));

  const handleSubmit = (values: any): void => {
    const body = {
      ...data,
      title: values.title,
      content: values.content,
      status: values.status?.value,
      categoryId: values.categoryId?.value,
      thumbnail: values.thumbnail,
    };

    dispatch(createUpdateArticleAction.request(body, handleCreateUpdateArticleSuccess));
  };

  const handleCreateUpdateArticleSuccess = (): void => {
    showNotification(ETypeNotification.SUCCESS, `${isUpdateBlog ? 'Cập nhật' : 'Tạo mới'} bài viết thành công`);
    navigate(`${LayoutPaths.Admin}${Paths.Blogs}`);
  };

  const dataTabsEditor = [
    {
      key: '1',
      title: `${isUpdateBlog ? 'Sửa' : 'Thêm'} bài viết`,
      content: (
        <div className="BlogDetail-editor">
          <Form.Item name="title" label="Tiêu đề bài viết" rules={[validationRules.required()]}>
            <Input size="large" adminStyle placeholder="Nhập tiêu đề bài viết" />
          </Form.Item>
          <Form.Item name="content" label="Nội dung bài viết">
            <CkEditor />
          </Form.Item>
        </div>
      ),
    },
  ];

  const dataTabsConfig = [
    {
      key: '1',
      title: 'Cấu hình bài viết',
      content: (
        <div className="BlogDetail-config">
          <Form.Item name="categoryId" label="Danh mục bài viết" rules={[validationRules.required()]}>
            <Select size="large" adminStyle placeholder="Chọn danh mục bài viết" options={articleCategoryOptions} />
          </Form.Item>
          <Form.Item name="thumbnail" label="Hỉnh ảnh">
            <UploadSingleImage />
          </Form.Item>
          {isUpdateBlog && (
            <div className="BlogDetail-config-row flex items-center">
              <div className="BlogDetail-config-icon">
                <Icon name={EIconName.ClockRevert} />
              </div>
              <div className="BlogDetail-config-text">
                Cập nhật lần cuối: {formatISODateToDateTime(data?.modifiedDate)}
              </div>
            </div>
          )}

          <div className="BlogDetail-config-row flex items-center">
            <div className="BlogDetail-config-icon">
              <Icon name={EIconName.StatusRunning} />
            </div>
            <div className="BlogDetail-config-text">Trạng thái</div>
            <Form.Item name="status">
              <Select adminStyle size="large" placeholder="Chọn trạng thái" options={statusOptions} />
            </Form.Item>
          </div>
          <Form.Item style={{ marginBottom: 0, marginTop: '4rem' }}>
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              adminStyle
              title="Đăng bài viết"
              loading={createUpdateArticleLoading}
            />
          </Form.Item>
        </div>
      ),
    },
  ];

  const getArticleCategoryData = useCallback(() => {
    dispatch(getArticleCategoryAction.request());
  }, [dispatch]);

  useEffect(() => {
    getArticleCategoryData();
  }, [getArticleCategoryData]);

  useEffect(() => {
    if (isUpdateBlog) {
      if (data) {
        form.setFieldsValue({
          ...data,
          categoryId: articleCategoryOptions?.find((item) => item.value === data.categoryId),
          status: statusOptions?.find((item) => item.value === data.status),
        });
      } else {
        navigate(`${LayoutPaths.Admin}${Paths.Blogs}`);
      }
    } else {
      form.setFieldsValue({
        status: statusOptions[0],
      });
    }

    return (): void => {
      form.resetFields();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form, type, articleCategoryOptions, data]);

  return (
    <div className="BlogDetail">
      <Form form={form} layout="vertical" className="BlogDetail-form flex" onFinish={handleSubmit}>
        <div className="BlogDetail-col">
          <Tabs dataTabs={dataTabsEditor} />
        </div>
        <div className="BlogDetail-col">
          <Tabs dataTabs={dataTabsConfig} />
        </div>
      </Form>
    </div>
  );
};

export default BlogDetail;
