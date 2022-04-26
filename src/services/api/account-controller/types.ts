import { ECustomerStatus } from '@/common/enums';
import { TCommonResponse } from '@/common/types';
import { TSelectOption } from '@/components/Select';

export type TGetAccountsBody = {
  pageIndex: number;
  pageSize: number;
  skip?: number;
  getCount: boolean;
  search?: string;
  categoryId?: number;
  status?: TSelectOption;
  identity?: string;
};

export type TGetAccountsResponse = TCommonResponse & {
  data: {
    ListUser: TAccountResponse[];
    Total: number;
  };
};

export type TGetAccountParams = { userId: string };
export type TGetAccountResponse = {
  data: TAccountResponse;
};
export type TGetAllRolesResponse = {
  data: {
    ListRole: {
      roleId: number;
      roleName: string;
    }[];
  };
};
export type TCreateUpdateAccountsBody = {
  id?: number;
  username?: string;
  fullname?: string;
  phone?: string;
  address?: string;
  code?: string;
  socialLink?: string;
  email?: string;
  customerStatus?: ECustomerStatus;
  employeeId?: number;
  password?: string;
  listRole?: number[];
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

export type TAccountResponse = {
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
