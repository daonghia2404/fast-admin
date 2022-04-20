import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Icon, { EIconColor, EIconName } from '@/components/Icon';
import Carousels from '@/components/Carousels';
import { getBannerAction } from '@/redux/actions';
import { TRootState } from '@/redux/reducers';
import { EBannerControllerAction } from '@/redux/actions/banner-controller/constants';
import Loading from '@/containers/Loading';
import { getFullPathFile } from '@/utils/functions';

import './HomeBanner.scss';

const HomeBanner: React.FC = () => {
  const dispatch = useDispatch();

  const bannerState = useSelector((state: TRootState) => state.bannerReducer.banner);
  const getBannerLoading = useSelector((state: TRootState) => state.loadingReducer[EBannerControllerAction.GET_BANNER]);

  const getBannersData = useCallback(() => {
    dispatch(getBannerAction.request());
  }, [dispatch]);

  useEffect(() => {
    getBannersData();
  }, [getBannersData]);

  return (
    <div className="HomeBanner">
      <div className="HomeBanner-contact">
        <div className="HomeBanner-contact-item flex flex-col items-center justify-center">
          <div className="HomeBanner-contact-item-icon">
            <Icon name={EIconName.Phone} color={EIconColor.WHITE} />
          </div>
          Liên Hệ
        </div>
        <div className="HomeBanner-contact-item flex flex-col items-center justify-center">
          <div className="HomeBanner-contact-item-icon">
            <Icon name={EIconName.Facebook} color={EIconColor.WHITE} />
          </div>
          Facebook
        </div>
        <div className="HomeBanner-contact-item flex flex-col items-center justify-center">
          <div className="HomeBanner-contact-item-icon">
            <Icon name={EIconName.Wechat} color={EIconColor.WHITE} />
          </div>
          Wechat
        </div>
      </div>
      {getBannerLoading ? (
        <Loading />
      ) : (
        <>
          <Carousels dots={false} arrows={false} autoplay={false}>
            {bannerState?.data?.ListImage.map((item) => (
              <div>
                <div key={item.imageId} className="HomeBanner-item flex items-center justify-end">
                  <div className="HomeBanner-item-image">
                    <img src={getFullPathFile(item.filePath)} alt="" />
                  </div>
                  <div className="HomeBanner-item-info">
                    <div className="HomeBanner-item-subtitle">Lorem Ipsum is simply dummy</div>
                    <div className="HomeBanner-item-title">{item.description}</div>
                    <div className="HomeBanner-item-link flex items-center justify-center">
                      View more
                      <Icon color={EIconColor.SHAMROCK} name={EIconName.AngleRight} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Carousels>
        </>
      )}
    </div>
  );
};

export default HomeBanner;
