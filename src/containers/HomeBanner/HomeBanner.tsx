import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Icon, { EIconColor, EIconName } from '@/components/Icon';
import Carousels from '@/components/Carousels';
import { getBannerAction } from '@/redux/actions';
import { TRootState } from '@/redux/reducers';
import { EBannerControllerAction } from '@/redux/actions/banner-controller/constants';
import { getFullPathFile } from '@/utils/functions';
import { EArticleControllerAction } from '@/redux/actions/article-controller/constants';

import './HomeBanner.scss';
import DropdownCustom from '@/components/DropdownCustom';

const HomeBanner: React.FC = () => {
  const dispatch = useDispatch();

  const bannerState = useSelector((state: TRootState) => state.bannerReducer.banner);
  const getBannerLoading = useSelector((state: TRootState) => state.loadingReducer[EBannerControllerAction.GET_BANNER]);
  const getServicesLoading = useSelector(
    (state: TRootState) => state.loadingReducer[EArticleControllerAction.GET_SERVICE],
  );

  const loading = getBannerLoading || getServicesLoading;

  const renderContactInfo = (): React.ReactElement => {
    return (
      <div className="HomeBanner-contact-body">
        <div className="HomeBanner-contact-body-item flex items-start">
          <div className="HomeBanner-contact-body-item-icon">
            <Icon name={EIconName.Phone} color={EIconColor.SHAMROCK} />
          </div>
          <div className="HomeBanner-contact-body-item-info">
            <div className="HomeBanner-contact-body-item-info-title">Điện thoại</div>
            <div className="HomeBanner-contact-body-item-info-description">0123 456 789</div>
          </div>
        </div>

        <div className="HomeBanner-contact-body-item flex items-start">
          <div className="HomeBanner-contact-body-item-icon">
            <Icon name={EIconName.Facebook} color={EIconColor.SHAMROCK} />
          </div>
          <div className="HomeBanner-contact-body-item-info">
            <div className="HomeBanner-contact-body-item-info-title">Facebook</div>
            <div className="HomeBanner-contact-body-item-info-description">G.O.C Express Facebook</div>
          </div>
        </div>

        <div className="HomeBanner-contact-body-item flex items-start">
          <div className="HomeBanner-contact-body-item-icon">
            <Icon name={EIconName.Wechat} color={EIconColor.SHAMROCK} />
          </div>
          <div className="HomeBanner-contact-body-item-info">
            <div className="HomeBanner-contact-body-item-info-title">Wechat</div>
            <div className="HomeBanner-contact-body-item-info-description">G.O.C Express Wechat</div>
          </div>
        </div>
      </div>
    );
  };

  const getBannersData = useCallback(() => {
    dispatch(getBannerAction.request());
  }, [dispatch]);

  useEffect(() => {
    getBannersData();
  }, [getBannersData]);

  return (
    <div className="HomeBanner">
      <div className="HomeBanner-contact">
        <DropdownCustom
          overlay={renderContactInfo()}
          overlayClassName="HomeBanner-contact-wrapper"
          getPopupContainer={(trigger: any): any => trigger?.parentNode}
          placement="topLeft"
        >
          <div className="HomeBanner-contact-item flex flex-col items-center justify-center">
            <div className="HomeBanner-contact-item-icon">
              <Icon name={EIconName.Headset} color={EIconColor.WHITE} />
            </div>
          </div>
        </DropdownCustom>
      </div>

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
