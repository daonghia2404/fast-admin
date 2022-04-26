import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Carousels from '@/components/Carousels';
import { getBannerAction } from '@/redux/actions';
import { TRootState } from '@/redux/reducers';
import { EBannerControllerAction } from '@/redux/actions/banner-controller/constants';
import { getFullPathFile } from '@/utils/functions';
import { EArticleControllerAction } from '@/redux/actions/article-controller/constants';

import './HomeBanner.scss';

const HomeBanner: React.FC = () => {
  const dispatch = useDispatch();

  const bannerState = useSelector((state: TRootState) => state.bannerReducer.banner);
  const getBannerLoading = useSelector((state: TRootState) => state.loadingReducer[EBannerControllerAction.GET_BANNER]);
  const getServicesLoading = useSelector(
    (state: TRootState) => state.loadingReducer[EArticleControllerAction.GET_SERVICE],
  );

  const loading = getBannerLoading || getServicesLoading;

  const getBannersData = useCallback(() => {
    dispatch(getBannerAction.request());
  }, [dispatch]);

  useEffect(() => {
    getBannersData();
  }, [getBannersData]);

  return (
    <div className="HomeBanner">
      {!loading && (
        <Carousels dots={false} arrows={false} autoplay>
          {bannerState?.data?.ListImage.map((item) => (
            <div>
              <div key={item.imageId} className="HomeBanner-item flex items-center justify-end">
                <div className="HomeBanner-item-image">
                  <img src={getFullPathFile(item.filePath)} alt="" />
                </div>
                {/* <div className="HomeBanner-item-info">
                  <div className="HomeBanner-item-subtitle">Lorem Ipsum is simply dummy</div>
                  <div className="HomeBanner-item-title">{item.description}</div>
                  <div className="HomeBanner-item-link flex items-center justify-center">
                    View more
                    <Icon color={EIconColor.SHAMROCK} name={EIconName.AngleRight} />
                  </div>
                </div> */}
              </div>
            </div>
          ))}
        </Carousels>
      )}
    </div>
  );
};

export default HomeBanner;
