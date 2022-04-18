import Service from '@/services/api';
import {
  TGetDepotStoresParams,
  TGetDepotStoresResponse,
  TGetDepotOrdersParams,
  TGetDepotOrdersResponse,
  TGetDepotOrdersReturnResponse,
} from '@/services/api/depot-controller/types';

class Controller {
  getDepotStores = async (params: TGetDepotStoresParams): Promise<TGetDepotStoresResponse> => {
    const response = await Service.post('/api/SearchDepot/tranhapkho', params);
    return response.data;
  };

  getDepotOrders = async (params: TGetDepotOrdersParams): Promise<TGetDepotOrdersResponse> => {
    const response = await Service.post('/api/SearchDepot/travandon', params);
    return response.data;
  };

  getDepotOrdersReturn = async (ladingCode: string): Promise<TGetDepotOrdersReturnResponse> => {
    const response = await Service.post(`/api/SearchDepot/travandon/${ladingCode}`);
    return response.data;
  };
}

const ControllerInstance = new Controller();

export default ControllerInstance;
