import React, { useCallback, useEffect } from 'react';
import { Form } from 'antd';
import { navigate, useParams } from '@reach/router';
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
import { createUpdateArticleAction, getArticleAction, getArticleCategoryAction } from '@/redux/actions';
import { TRootState } from '@/redux/reducers';
import { ETypeNotification } from '@/common/enums';
import { EArticleControllerAction } from '@/redux/actions/article-controller/constants';
import Loading from '@/containers/Loading';

import { TBlogDetailProps } from './BlogDetail.types';
import './BlogDetail.scss';
import TextArea from '@/components/TextArea';

const BlogDetail: React.FC<TBlogDetailProps> = ({ type }) => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const [form] = Form.useForm();
  const isUpdateBlog = type === ETypeBlogDetail.UPDATE;

  const articleCategoryState = useSelector((state: TRootState) => state.articleReducer.articleCategory);
  const getArticleLoading = useSelector(
    (state: TRootState) => state.loadingReducer[EArticleControllerAction.GET_ARTICLE],
  );
  const articleState = useSelector((state: TRootState) => state.articleReducer.article?.data);

  const createUpdateArticleLoading = useSelector(
    (state: TRootState) => state.loadingReducer[EArticleControllerAction.CREATE_UPDATE_ARTICLE],
  );

  const articleCategoryOptions = articleCategoryState?.data?.map((item) => ({
    label: item.categoryName,
    value: item.categoryId,
  }));

  const handleSubmit = (values: any): void => {
    const body = {
      ...articleState,
      title: values.title,
      content: values.content,
      status: values.status?.value,
      categoryId: values.categoryId?.value,
      thumbnail: values.thumbnail,
      imageDetail: values.imageDetail,
      description: values.description,
      articleId: isUpdateBlog ? articleState?.articleId : undefined,
    };

    dispatch(createUpdateArticleAction.request(body, handleCreateUpdateArticleSuccess));
  };

  const handleCreateUpdateArticleSuccess = (): void => {
    showNotification(ETypeNotification.SUCCESS, `${isUpdateBlog ? 'C???p nh???t' : 'T???o m???i'} b??i vi???t th??nh c??ng`);
    navigate(`${LayoutPaths.Admin}${Paths.Blogs}`);
  };

  const getArticleData = useCallback(() => {
    if (id) {
      dispatch(getArticleAction.request(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    getArticleData();
  }, [getArticleData]);

  const dataTabsEditor = [
    {
      key: '1',
      title: `${isUpdateBlog ? 'S???a' : 'Th??m'} b??i vi???t`,
      content: (
        <div className="BlogDetail-editor">
          <Form.Item name="title" label="Ti??u ????? b??i vi???t" rules={[validationRules.required()]}>
            <Input size="large" adminStyle placeholder="Nh???p ti??u ????? b??i vi???t" />
          </Form.Item>
          <Form.Item name="description" label="M?? t??? b??i vi???t" rules={[validationRules.required()]}>
            <TextArea adminStyle placeholder="Nh???p m?? t??? b??i vi???t" />
          </Form.Item>
          <Form.Item name="content" label="N???i dung b??i vi???t">
            <CkEditor />
          </Form.Item>
        </div>
      ),
    },
  ];

  const dataTabsConfig = [
    {
      key: '1',
      title: 'C???u h??nh b??i vi???t',
      content: (
        <div className="BlogDetail-config">
          <Form.Item name="categoryId" label="Danh m???c b??i vi???t" rules={[validationRules.required()]}>
            <Select size="large" adminStyle placeholder="Ch???n danh m???c b??i vi???t" options={articleCategoryOptions} />
          </Form.Item>
          <Form.Item name="thumbnail" label="???nh ?????i di???n">
            <UploadSingleImage />
          </Form.Item>
          <Form.Item name="imageDetail" label="???nh chi ti???t">
            <UploadSingleImage />
          </Form.Item>
          {isUpdateBlog && (
            <div className="BlogDetail-config-row flex items-center">
              <div className="BlogDetail-config-icon">
                <Icon name={EIconName.ClockRevert} />
              </div>
              <div className="BlogDetail-config-text">
                C???p nh???t l???n cu???i:{'  '}
                {articleState?.modifiedDate ? formatISODateToDateTime(articleState?.modifiedDate) : ''}
              </div>
            </div>
          )}

          <div className="BlogDetail-config-row flex items-center">
            <div className="BlogDetail-config-icon">
              <Icon name={EIconName.StatusRunning} />
            </div>
            <div className="BlogDetail-config-text">Tr???ng th??i</div>
            <Form.Item name="status">
              <Select adminStyle size="large" placeholder="Ch???n tr???ng th??i" options={statusOptions} />
            </Form.Item>
          </div>
          <Form.Item style={{ marginBottom: 0, marginTop: '4rem' }}>
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              adminStyle
              title="????ng b??i vi???t"
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
      form.setFieldsValue({
        ...articleState,
        categoryId: articleCategoryOptions?.find((item) => item.value === articleState?.categoryId),
        status: statusOptions?.find((item) => item.value === articleState?.status),
      });
    } else {
      form.setFieldsValue({
        status: statusOptions[0],
      });
    }

    return (): void => {
      form.resetFields();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form, type, articleState, articleCategoryOptions]);

  return (
    <div className="BlogDetail">
      {getArticleLoading ? (
        <Loading />
      ) : (
        <Form form={form} layout="vertical" className="BlogDetail-form flex" onFinish={handleSubmit}>
          <div className="BlogDetail-col">
            <Tabs dataTabs={dataTabsEditor} />
          </div>
          <div className="BlogDetail-col">
            <Tabs dataTabs={dataTabsConfig} />
          </div>
        </Form>
      )}
    </div>
  );
};

export default BlogDetail;
