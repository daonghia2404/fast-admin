/* eslint-disable react/no-danger */
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { navigate } from '@reach/router';

import { getServiceAction } from '@/redux/actions';
import { TRootState } from '@/redux/reducers';
import { EArticleControllerAction } from '@/redux/actions/article-controller/constants';
import HomeBanner from '@/containers/HomeBanner';
import ServiceBox from '@/components/ServiceBox';
import { getFullPathFile } from '@/utils/functions';
import { Paths } from '@/pages/routers';
import { TArticleResponse } from '@/services/api/article-controller/types';
import { EBannerControllerAction } from '@/redux/actions/banner-controller/constants';
import PageLoading from '@/containers/PageLoading';

import './Services.scss';

const Service: React.FC = () => {
  const dispatch = useDispatch();

  const servicesState = useSelector((state: TRootState) => state.articleReducer.service);
  const getServicesLoading = useSelector(
    (state: TRootState) => state.loadingReducer[EArticleControllerAction.GET_SERVICE],
  );
  const getBannerLoading = useSelector((state: TRootState) => state.loadingReducer[EBannerControllerAction.GET_BANNER]);

  const loading = getServicesLoading || getBannerLoading;

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

  return (
    <div className="Service">
      <HomeBanner />

      <>
        {loading ? (
          <PageLoading />
        ) : (
          <div className="container">
            <div className="Services-wrapper">
              <div className="Services-title">Dịch Vụ</div>
              <div className="Services-description">
                Chuyên cung cấp dịch vụ vận tải hàng hoá bằng đường bộ từ Trung Quốc về Việt Nam. Chúng tôi luôn mang
                đến dịch vụ vận chuyển tốt nhất, an toàn và đảm bảo.
              </div>

              <div className="Services-list flex flex-wrap">
                {servicesData.map((item) => (
                  <div className="Services-list-item">
                    <ServiceBox
                      title={item.title}
                      description={item.description}
                      image={getFullPathFile(item.thumbnail || item.imageDetail)}
                      onClick={(): void => handleClickService(item)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </>
    </div>
  );
};

export default Service;
