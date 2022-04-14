import { ECustomerStatus } from '@/common/enums';
import { TCommonResponse } from '@/common/types';
import { TSelectOption } from '@/components/Select';

export type TGetClientsBody = {
  pageIndex: number;
  pageSize: number;
  skip?: number;
  getCount: boolean;
  search?: string;
  categoryId?: string;
  status?: TSelectOption;
  identity?: string;
};

export type TGetClientsResponse = TCommonResponse & {
  data: {
    Total: number;
    ListClient: TClientResponse[];
  };
};

export type TGetClientParams = { id: string };
export type TGetClientResponse = unknown;
export type TGetClientEmployeeResponse = {
  data: TClientEmployee[];
};
export type TCreateUpdateClientsBody = {
  id?: number;
  username?: string;
  fullname?: string;
  phone?: string;
  address?: string;
  code?: string;
  socialLink?: string;
  email?: string;
  customerStatus?: number;
  employeeId?: number;
  password?: string;
  listRole?: number[];
};
export type TCreateUpdateClientResponse = unknown;
export type TDeleteClientParams = { id: string };
export type TDeleteClientResponse = unknown;

export type TClientResponse = {
  address: string;
  code: string;
  createdDate: string;
  customerStatus: ECustomerStatus;
  email: string;
  employeeId: number;
  fullname: string;
  id: number;
  isAdmin: boolean;
  listRole?: number[];
  modifiedDate: string;
  password: string;
  phone: string;
  socialLink: string;
  username: string;
};

export type TClientEmployee = {
  employeeName: string;
  id: number;
};
