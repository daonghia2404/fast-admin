/* eslint-disable react/no-danger */
import React, { useCallback, useEffect } from 'react';
import { useParams } from '@reach/router';
import { useDispatch, useSelector } from 'react-redux';

import ServicesList from '@/containers/ServicesList';
import { getArticleAction } from '@/redux/actions';
import { TRootState } from '@/redux/reducers';
import { EArticleControllerAction } from '@/redux/actions/article-controller/constants';
import Loading from '@/containers/Loading';
import { getFullPathFile } from '@/utils/functions';

import './ServiceDetail.scss';

const ServiceDetail: React.FC = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const article = useSelector((state: TRootState) => state.articleReducer.article);
  const getArticleLoading = useSelector(
    (state: TRootState) => state.loadingReducer[EArticleControllerAction.GET_ARTICLE],
  );

  const getServiceDetailData = useCallback(() => {
    if (id) dispatch(getArticleAction.request(id));
  }, [dispatch, id]);

  useEffect(() => {
    getServiceDetailData();
  }, [getServiceDetailData]);

  return (
    <div className="ServiceDetail">
      {getArticleLoading ? (
        <Loading />
      ) : (
        <>
          {article?.data?.thumbnail && (
            <div className="ServiceDetail-banner">
              <img src={getFullPathFile(article.data.thumbnail)} alt="" />
            </div>
          )}

          <div className="container">
            <div className="ServiceDetail-wrapper">
              <div className="ServiceDetail-main flex justify-between flex-wrap">
                <div className="ServiceDetail-main-item">
                  <div className="ServiceDetail-card">
                    <div
                      className="ServiceDetail-content ck-content style-content-editable"
                      dangerouslySetInnerHTML={{ __html: article?.data?.content || '' }}
                    />
                  </div>
                </div>
                <div className="ServiceDetail-main-item">
                  <ServicesList />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ServiceDetail;
