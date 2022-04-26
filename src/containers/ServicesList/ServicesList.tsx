import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { navigate } from '@reach/router';

import { getServiceAction } from '@/redux/actions';
import { TRootState } from '@/redux/reducers';
import { formatISODateToDateTime, getFullPathFile } from '@/utils/functions';
import { EArticleControllerAction } from '@/redux/actions/article-controller/constants';
import { Paths } from '@/pages/routers';

import './ServicesList.scss';

const ServicesList: React.FC = () => {
  const dispatch = useDispatch();
  const servicesState = useSelector((state: TRootState) => state.articleReducer.service);
  const getServicesLoading = useSelector(
    (state: TRootState) => state.loadingReducer[EArticleControllerAction.GET_SERVICE],
  );
  const getServiceDetailLoading = useSelector(
    (state: TRootState) => state.loadingReducer[EArticleControllerAction.GET_SERVICE_DETAIL],
  );
  const servicesData = servicesState?.data?.ListArticle || [];

  const loading = getServicesLoading || getServiceDetailLoading;

  const getContentData = useCallback(() => {
    dispatch(getServiceAction.request());
  }, [dispatch]);

  useEffect(() => {
    getContentData();
  }, [getContentData]);

  return (
    <div className="ServicesList">
      {!loading && (
        <>
          <div className="ServicesList-header flex items-center justify-center">
            <div className="ServicesList-header-title">CÁC DỊCH VỤ KHÁC</div>
          </div>
          <div className="ServicesList-list">
            {servicesData.map((item) => (
              <div
                className="ServicesList-list-item flex items-start"
                onClick={(): void => {
                  navigate(Paths.ServiceDetail(String(item.articleId)));
                }}
              >
                <div className="ServicesList-list-item-image">
                  <img src={getFullPathFile(item.thumbnail)} alt="" />
                </div>
                <div className="ServicesList-list-item-info">
                  <div className="ServicesList-list-item-info-title">{item.title}</div>
                  <div className="ServicesList-list-item-info-description">{item.description}</div>
                  <div className="ServicesList-list-item-info-date">
                    {item.createdDate ? formatISODateToDateTime(item.createdDate) : ''}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* <div className="ServicesList-see-more flex items-center justify-center">
        View More
        <Icon name={EIconName.AngleRight} color={EIconColor.SHAMROCK} />
      </div> */}
    </div>
  );
};

export default ServicesList;
