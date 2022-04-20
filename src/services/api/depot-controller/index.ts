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

  getDepotOrdersReturn = async (params: TGetDepotOrdersParams): Promise<TGetDepotOrdersReturnResponse> => {
    const response = await Service.post(`/api/SearchDepot/trahangdatra`, params);
    return response.data;
  };

  getDepotOrders = async (ladingCode: string): Promise<TGetDepotOrdersResponse> => {
    const response = await Service.get('/api/SearchDepot/travandon', { params: { ladingCode } });
    return response.data;
  };
}

const ControllerInstance = new Controller();

export default ControllerInstance;
