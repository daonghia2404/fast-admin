/* eslint-disable react/no-danger */
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getContactAction } from '@/redux/actions';
import { TRootState } from '@/redux/reducers';
import { EArticleControllerAction } from '@/redux/actions/article-controller/constants';
import PageLoading from '@/containers/PageLoading';

import './Contact.scss';

const Contact: React.FC = () => {
  const dispatch = useDispatch();

  const aboutUsData = useSelector((state: TRootState) => state.articleReducer.contact);
  const getContentLoading = useSelector(
    (state: TRootState) => state.loadingReducer[EArticleControllerAction.GET_CONTACT],
  );

  const content = aboutUsData?.data?.ListArticle?.[0]?.content;

  const getContentData = useCallback(() => {
    dispatch(getContactAction.request());
  }, [dispatch]);

  useEffect(() => {
    getContentData();
  }, [getContentData]);

  return (
    <div className="Contact">
      <div className="container">
        {getContentLoading ? (
          <PageLoading />
        ) : (
          <div className="Contact-wrapper">
            <div className="Contact-card">
              <div className="Contact-title">Liên hệ</div>

              <div
                className="Contact-content ck-content style-content-editable"
                dangerouslySetInnerHTML={{ __html: content || '' }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
