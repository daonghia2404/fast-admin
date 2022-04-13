import Service from '@/services/api';

import {
  TCreateUpdateClientResponse,
  TCreateUpdateClientsBody,
  TDeleteClientParams,
  TDeleteClientResponse,
  TGetClientParams,
  TGetClientResponse,
  TGetClientsBody,
  TGetClientsResponse,
  TGetClientEmployeeResponse,
} from '@/services/api/client-controller/types';

class Controller {
  getClients = async (body: TGetClientsBody): Promise<TGetClientsResponse> => {
    const response = await Service.post('/api/Client/getList', body);
    return response.data;
  };

  getClient = async (params: TGetClientParams): Promise<TGetClientResponse> => {
    const response = await Service.post('/api/Client/getDetail', { params });
    return response.data;
  };

  getClientEmployee = async (): Promise<TGetClientEmployeeResponse> => {
    const response = await Service.get('/api/Client/getEmployee');
    return response.data;
  };

  createUpdateClient = async (body: TCreateUpdateClientsBody): Promise<TCreateUpdateClientResponse> => {
    const response = await Service.post('/api/Client/createUpdate', body);
    return response.data;
  };

  deleteClient = async (params: TDeleteClientParams): Promise<TDeleteClientResponse> => {
    const response = await Service.post('/api/Client/getList', {}, { params });
    return response.data;
  };
}

const ControllerInstance = new Controller();

export default ControllerInstance;
