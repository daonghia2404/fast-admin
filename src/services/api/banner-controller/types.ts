export type TGetBannersBody = {
  pageIndex: number;
  pageSize: number;
  skip: number;
  getCount: boolean;
  search: string;
  categoryId: number;
  status: boolean;
  identity: string;
};

export type TGetBannersResponse = unknown;

export type TGetBannerParams = { id: string };
export type TGetBannerResponse = unknown;
export type TGetHomeBannerResponse = unknown;
export type TGetBannerCategoryResponse = unknown;
export type TCreateUpdateBannersBody = {
  imageId: number;
  categoryId: number;
  filePath: string;
  description: string;
  status: boolean;
  categoryName: string;
};
export type TCreateUpdateBannerResponse = unknown;
export type TDeleteBannerParams = { id: string };
export type TDeleteBannerResponse = unknown;
