import { TCommonResponse } from '@/common/types';

export type TGetAccountsBody = {
  pageIndex: number;
  pageSize: number;
  skip: number;
  getCount: boolean;
  search: string;
  categoryId: number;
  status: boolean;
  identity: string;
};

export type TGetAccountsResponse = unknown;

export type TGetAccountParams = { userId: string };
export type TGetAccountResponse = unknown;
export type TGetAllRolesResponse = unknown;
export type TCreateUpdateAccountsBody = {
  id: number;
  username: string;
  fullname: string;
  phone: string;
  address: string;
  createdDate: string;
  modifiedDate: string;
  code: string;
  socialLink: string;
  email: string;
  customerStatus: number;
  employeeId: number;
  password: string;
  listRole: number[];
};
export type TCreateUpdateAccountResponse = unknown;
export type TDeleteAccountParams = { userId: string };
export type TDeleteAccountResponse = unknown;

export type TChangePasswordAccountBody = {
  currentPassword: string;
  newPassword: string;
};
export type TChangePasswordAccountResponse = TCommonResponse & {
  data: {
    token: string;
  };
};
