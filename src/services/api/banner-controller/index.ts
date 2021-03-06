import Service from '@/services/api';

import {
  TCreateUpdateBannerResponse,
  TCreateUpdateBannersBody,
  TDeleteBannerParams,
  TDeleteBannerResponse,
  TGetBannerResponse,
  TGetBannersBody,
  TGetHomeBannerResponse,
  TGetBannersResponse,
  TGetBannerCategoryResponse,
  TGetLogoResponse,
} from '@/services/api/banner-controller/types';

class Controller {
  getBanners = async (body: TGetBannersBody): Promise<TGetBannersResponse> => {
    const response = await Service.post('/api/admin/Image/getListImage', body);
    return response.data;
  };

  getBanner = async (): Promise<TGetBannerResponse> => {
    const response = await Service.get('/api/Image/getBanner');
    return response.data;
  };

  getLogo = async (): Promise<TGetLogoResponse> => {
    const response = await Service.get('/api/Image/getLogo');
    return response.data;
  };

  getHomeBanner = async (): Promise<TGetHomeBannerResponse> => {
    const response = await Service.get('/api/Image/getHomeImage');
    return response.data;
  };

  getBannerCategory = async (): Promise<TGetBannerCategoryResponse> => {
    const response = await Service.get('/api/admin/Image/getImageCategory');
    return response.data;
  };

  createUpdateBanner = async (body: TCreateUpdateBannersBody): Promise<TCreateUpdateBannerResponse> => {
    const response = await Service.post('/api/admin/Image/createUpdate', body);
    return response.data;
  };

  deleteBanner = async (params: TDeleteBannerParams): Promise<TDeleteBannerResponse> => {
    const response = await Service.post('/api/admin/Image/deletes', {}, { params });
    return response.data;
  };
}

const ControllerInstance = new Controller();

export default ControllerInstance;
