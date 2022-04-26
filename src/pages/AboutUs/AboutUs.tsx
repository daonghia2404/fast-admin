/* eslint-disable react/no-danger */
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getAboutUsAction } from '@/redux/actions';
import { TRootState } from '@/redux/reducers';
import { EArticleControllerAction } from '@/redux/actions/article-controller/constants';
import PageLoading from '@/containers/PageLoading';

import './AboutUs.scss';
import { scrollToTop } from '@/utils/functions';

const AboutUs: React.FC = () => {
  const dispatch = useDispatch();

  const aboutUsData = useSelector((state: TRootState) => state.articleReducer.aboutUs);
  const getContentLoading = useSelector(
    (state: TRootState) => state.loadingReducer[EArticleControllerAction.GET_ABOUT_US],
  );

  const content = aboutUsData?.data?.ListArticle?.[0]?.content;

  const getContentData = useCallback(() => {
    dispatch(getAboutUsAction.request());
  }, [dispatch]);

  useEffect(() => {
    getContentData();
  }, [getContentData]);

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div className="AboutUs">
      <div className="container">
        {getContentLoading ? (
          <PageLoading />
        ) : (
          <div className="AboutUs-wrapper">
            <div className="AboutUs-card">
              <div className="AboutUs-title">Về chúng tôi</div>
              <div
                className="AboutUs-content ck-content style-content-editable"
                dangerouslySetInnerHTML={{ __html: content || '' }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutUs;
