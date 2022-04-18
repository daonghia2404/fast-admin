export type TGetDepotStoresParams = {
  pageIndex: number;
  pageSize: number;
  skip?: number;
  getCount: boolean;
  day?: number;
  month?: number;
  year?: number;
  status?: boolean;
  search?: string;
};
export type TGetDepotStoresResponse = unknown;
export type TGetDepotOrdersParams = {
  pageIndex: number;
  pageSize: number;
  skip?: number;
  getCount: boolean;
  day?: number;
  month?: number;
  year?: number;
  status?: boolean;
  search?: string;
};
export type TGetDepotOrdersResponse = unknown;
export type TGetDepotOrdersReturnResponse = unknown;
