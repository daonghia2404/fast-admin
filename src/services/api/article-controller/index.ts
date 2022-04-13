import Service from '@/services/api';
import {
  TGetHomeContentResponse,
  TGetServiceResponse,
  TGetPolicyResponse,
  TGetRuleResponse,
  TGetContactResponse,
  TGetAboutUsResponse,
} from '@/services/api/article-controller/types';

class Controller {
  getHomeContent = async (): Promise<TGetHomeContentResponse> => {
    const response = await Service.get('/api/Article/getHomeContent');
    return response.data;
  };

  getService = async (): Promise<TGetServiceResponse> => {
    const response = await Service.get('/api/Article/getService');
    return response.data;
  };

  getPolicy = async (): Promise<TGetPolicyResponse> => {
    const response = await Service.get('/api/Article/getPolicy');
    return response.data;
  };

  getRule = async (): Promise<TGetRuleResponse> => {
    const response = await Service.get('/api/Article/getRule');
    return response.data;
  };

  getContact = async (): Promise<TGetContactResponse> => {
    const response = await Service.get('/api/Article/getContact');
    return response.data;
  };

  getAboutUs = async (): Promise<TGetAboutUsResponse> => {
    const response = await Service.get('/api/Article/getAboutUs');
    return response.data;
  };
}

const ControllerInstance = new Controller();

export default ControllerInstance;
