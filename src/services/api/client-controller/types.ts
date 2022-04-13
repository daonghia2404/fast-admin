export type TGetClientsBody = {
  pageIndex: number;
  pageSize: number;
  skip: number;
  getCount: boolean;
  search: string;
  categoryId: number;
  status: boolean;
  identity: string;
};

export type TGetClientsResponse = unknown;

export type TGetClientParams = { id: string };
export type TGetClientResponse = unknown;
export type TGetClientEmployeeResponse = unknown;
export type TCreateUpdateClientsBody = {
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
export type TCreateUpdateClientResponse = unknown;
export type TDeleteClientParams = { id: string };
export type TDeleteClientResponse = unknown;
