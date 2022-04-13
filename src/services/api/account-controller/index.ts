import Service from '@/services/api';

import {
  TChangePasswordAccountBody,
  TChangePasswordAccountResponse,
  TCreateUpdateAccountResponse,
  TCreateUpdateAccountsBody,
  TDeleteAccountParams,
  TDeleteAccountResponse,
  TGetAccountParams,
  TGetAccountResponse,
  TGetAccountsBody,
  TGetAccountsResponse,
  TGetAllRolesResponse,
} from '@/services/api/account-controller/types';

class Controller {
  getAccounts = async (body: TGetAccountsBody): Promise<TGetAccountsResponse> => {
    const response = await Service.post('/api/Account/getList', body);
    return response.data;
  };

  getAccount = async (params: TGetAccountParams): Promise<TGetAccountResponse> => {
    const response = await Service.get('/api/Account/getDetail', { params });
    return response.data;
  };

  getAllRoles = async (): Promise<TGetAllRolesResponse> => {
    const response = await Service.get('/api/Account/getAllRole');
    return response.data;
  };

  createUpdateAccount = async (body: TCreateUpdateAccountsBody): Promise<TCreateUpdateAccountResponse> => {
    const response = await Service.post('/api/Account/createUpdate', body);
    return response.data;
  };

  changePasswordAccount = async (body: TChangePasswordAccountBody): Promise<TChangePasswordAccountResponse> => {
    const response = await Service.post('/api/User/changePassword', body);
    return response.data;
  };

  deleteAccount = async (params: TDeleteAccountParams): Promise<TDeleteAccountResponse> => {
    const response = await Service.post('/api/Account/getList', {}, { params });
    return response.data;
  };
}

const ControllerInstance = new Controller();

export default ControllerInstance;
