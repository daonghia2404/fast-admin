import Service from '@/services/api';
import {
  TLoginBody,
  TLoginResponse,
  TRefreshTokenBody,
  TRefreshTokenResponse,
} from '@/services/api/auth-controller/types';

class Controller {
  login = async (body: TLoginBody): Promise<TLoginResponse> => {
    const response = await Service.post('/admin/login', body);
    return response.data;
  };

  refreshToken = async (body: TRefreshTokenBody): Promise<TRefreshTokenResponse> => {
    const response = await Service.post('/admin/refresh-token', body);
    return response.data;
  };
}

const ControllerInstance = new Controller();

export default ControllerInstance;
