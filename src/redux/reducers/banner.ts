import { createReducer } from 'deox';

import {
  TGetBannerResponse,
  TGetBannersResponse,
  TGetBannerCategoryResponse,
  TGetHomeBannerResponse,
  TGetLogoResponse,
} from '@/services/api/banner-controller/types';
import { getBannerAction, getBannersAction, getBannerCategoryAction, getLogoAction } from '@/redux/actions';

export interface IState {
  bannerCategory?: TGetBannerCategoryResponse;
  homeBanner?: TGetHomeBannerResponse;
  banners?: TGetBannersResponse;
  banner?: TGetBannerResponse;
  logo?: TGetLogoResponse;
}
const initialState: IState = {
  bannerCategory: undefined,
  banners: undefined,
  homeBanner: undefined,
  banner: undefined,
  logo: undefined,
};

const reducer = createReducer(initialState, (handleAction) => [
  handleAction(getBannersAction.success, (state, { payload }) => {
    const { response } = payload;

    return {
      ...state,
      banners: response,
    };
  }),
  handleAction(getBannerAction.success, (state, { payload }) => {
    const { response } = payload;

    return {
      ...state,
      banner: response,
    };
  }),
  handleAction(getLogoAction.success, (state, { payload }) => {
    const { response } = payload;

    return {
      ...state,
      logo: response,
    };
  }),
  handleAction(getBannerCategoryAction.success, (state, { payload }) => {
    const { response } = payload;

    return {
      ...state,
      bannerCategory: response,
    };
  }),
]);

export default reducer;
