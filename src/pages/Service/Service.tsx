/* eslint-disable react/no-danger */
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getServiceAction } from '@/redux/actions';
import { TRootState } from '@/redux/reducers';
import { EArticleControllerAction } from '@/redux/actions/article-controller/constants';
import Loading from '@/containers/Loading';

import './Service.scss';

const Service: React.FC = () => {
  const dispatch = useDispatch();

  const aboutUsData = useSelector((state: TRootState) => state.articleReducer.service);
  const getContentLoading = useSelector(
    (state: TRootState) => state.loadingReducer[EArticleControllerAction.GET_SERVICE],
  );

  const content = aboutUsData?.data?.ListArticle?.[0]?.content;

  const getContentData = useCallback(() => {
    dispatch(getServiceAction.request());
  }, [dispatch]);

  useEffect(() => {
    getContentData();
  }, [getContentData]);

  return (
    <div className="Service">
      <div className="container">
        {getContentLoading ? (
          <Loading />
        ) : (
          <div className="Service-wrapper">
            <div
              className="Service-content ck-content style-content-editable"
              dangerouslySetInnerHTML={{ __html: content || '' }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Service;
