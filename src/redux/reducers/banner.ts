import { createReducer } from 'deox';

import {
  TGetBannerResponse,
  TGetBannersResponse,
  TGetBannerCategoryResponse,
  TGetHomeBannerResponse,
} from '@/services/api/banner-controller/types';
import { getBannerAction, getBannersAction, getBannerCategoryAction } from '@/redux/actions';

export interface IState {
  bannerCategory?: TGetBannerCategoryResponse;
  homeBanner?: TGetHomeBannerResponse;
  banners?: TGetBannersResponse;
  banner?: TGetBannerResponse;
}
const initialState: IState = {
  bannerCategory: undefined,
  banners: undefined,
  homeBanner: undefined,
  banner: undefined,
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
  handleAction(getBannerCategoryAction.success, (state, { payload }) => {
    const { response } = payload;

    return {
      ...state,
      bannerCategory: response,
    };
  }),
]);

export default reducer;
