/* eslint-disable react/no-danger */
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { navigate } from '@reach/router';

import { getServiceAction } from '@/redux/actions';
import { TRootState } from '@/redux/reducers';
import { EArticleControllerAction } from '@/redux/actions/article-controller/constants';
import Loading from '@/containers/Loading';
import HomeBanner from '@/containers/HomeBanner';
import ServiceBox from '@/components/ServiceBox';
import { getFullPathFile } from '@/utils/functions';
import { Paths } from '@/pages/routers';
import { TArticleResponse } from '@/services/api/article-controller/types';

import './Services.scss';

const Service: React.FC = () => {
  const dispatch = useDispatch();

  const servicesState = useSelector((state: TRootState) => state.articleReducer.service);
  const getServicesLoading = useSelector(
    (state: TRootState) => state.loadingReducer[EArticleControllerAction.GET_SERVICE],
  );

  const servicesData = servicesState?.data?.ListArticle || [];

  const handleClickService = (data: TArticleResponse): void => {
    navigate(Paths.ServiceDetail(String(data.articleId)));
  };

  const getContentData = useCallback(() => {
    dispatch(getServiceAction.request());
  }, [dispatch]);

  useEffect(() => {
    getContentData();
  }, [getContentData]);

  // <div className="Service-wrapper">
  //   <div
  //     className="Service-content ck-content style-content-editable"
  //     dangerouslySetInnerHTML={{ __html: content || '' }}
  //   />
  // </div>;

  return (
    <div className="Service">
      <HomeBanner />

      <div className="container">
        <div className="Services-wrapper">
          <div className="Services-title">Dịch Vụ</div>
          <div className="Services-description">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industrys standard dummy text ever since the 1500s,
          </div>

          {getServicesLoading ? (
            <Loading />
          ) : (
            <>
              <div className="Services-list flex flex-wrap">
                {servicesData.map((item) => (
                  <div className="Services-list-item">
                    <ServiceBox
                      title={item.title}
                      description={item.description}
                      image={getFullPathFile(item.thumbnail)}
                      onClick={(): void => handleClickService(item)}
                    />
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Service;
