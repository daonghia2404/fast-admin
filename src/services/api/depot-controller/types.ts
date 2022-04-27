import { TCommonResponse } from '@/common/types';
import { TSelectOption } from '@/components/Select';

export type TGetDepotStoresParams = {
  pageIndex: number;
  pageSize: number;
  skip?: number;
  getCount: boolean;
  day?: TSelectOption;
  month?: TSelectOption;
  year?: any;
  status?: TSelectOption;
  search?: string;
};
export type TDepotStoragesResponse = {
  advanceMoney: string;
  clientCode: string;
  d1: string;
  d2: string;
  d3: string;
  date: string;
  depotName: string;
  kg: string;
  ladingCode: string;
  m3: string;
  modifiedDate: string;
  modifiedUser: string;
  note: string;
  status: string;
};
export type TGetDepotStoresResponse = TCommonResponse & {
  data: {
    Data: TDepotStoragesResponse[];
    Total: number;
    Kg: number;
    M3: number;
  };
};
export type TGetDepotOrdersParams = {
  pageIndex: number;
  pageSize: number;
  skip?: number;
  getCount: boolean;
  day?: TSelectOption;
  month?: TSelectOption;
  year?: any;
  status?: TSelectOption;
  search?: string;
};
export type TGetDepotOrdersResponse = TCommonResponse & {
  data: TDepotOrderResponse[];
};

export type TDepotOrderResponse = {
  clientCode: string;
  dataPlace: string;
  date: string;
  depotName: string;
  kg: string;
  ladingCode: string;
  note: string;
};
export type TDepotOrderReturnResponse = {
  calcByM3: boolean;
  clientCode: string;
  d1: string;
  d2: string;
  d3: string;
  dateReceived: string;
  dateReturned: string;
  kg: string;
  ladingCode: string;
  m3: string;
  money: number;
  note: string;
  payDate: string;
  payStatus: string;
  price: string;
};
export type TGetDepotOrdersReturnResponse = TCommonResponse & {
  data: {
    Data: TDepotOrderReturnResponse[];
    Total: number;
    Kg: number;
    M3: number;
    AdvanceMoney: number;
    GrossMoney: number;
  };
};
