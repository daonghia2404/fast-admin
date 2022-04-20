import { TCommonResponse } from '@/common/types';
import { TSelectOption } from '@/components/Select';

export type TGetBannersBody = {
  pageIndex: number;
  pageSize: number;
  skip?: number;
  getCount: boolean;
  search?: string;
  categoryId?: number;
  status?: boolean;
  identity?: TSelectOption;
};

export type TGetBannersResponse = TCommonResponse & {
  data: {
    ListImage: TBannerResponse[];
    Total: number;
  };
};

export type TGetBannerParams = { id: string };
export type TGetBannerResponse = TCommonResponse & {
  data: {
    ListImage: TBannerResponse[];
  };
};
export type TGetHomeBannerResponse = unknown;
export type TGetBannerCategoryResponse = TCommonResponse & {
  data: TBannerCategoryResponse[];
};
export type TCreateUpdateBannersBody = {
  imageId?: number;
  categoryId?: number;
  filePath?: string;
  description?: string;
  status?: string;
  categoryName?: string;
};
export type TCreateUpdateBannerResponse = unknown;
export type TDeleteBannerParams = { ids: string };
export type TDeleteBannerResponse = unknown;

export type TBannerResponse = {
  categoryId: number;
  categoryName: string;
  description: string;
  filePath: string;
  imageId: number;
  status: boolean;
};

export type TBannerCategoryResponse = {
  categoryId: number;
  categoryName: string;
  identityType: string;
  typeId: number;
};
