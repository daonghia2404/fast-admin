import Service from '@/services/api';
import {
  TGetHomeContentResponse,
  TGetServiceResponse,
  TGetPolicyResponse,
  TGetRuleResponse,
  TGetContactResponse,
  TGetAboutUsResponse,
  TCreateUpdateArticleBody,
  TDeleteArticlesResponse,
  TGetArticleCategoryResponse,
  TGetArticlesParams,
  TGetArticlesResponse,
  TCreateUpdateArticleResponse,
  TGetArticleResponse,
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

  getArticleCategory = async (): Promise<TGetArticleCategoryResponse> => {
    const response = await Service.get('/api/admin/Article/getArticleCategory');
    return response.data;
  };

  createUpdateArticle = async (body: TCreateUpdateArticleBody): Promise<TCreateUpdateArticleResponse> => {
    const response = await Service.post('/api/admin/Article/createUpdate', body);
    return response.data;
  };

  getArticles = async (params: TGetArticlesParams): Promise<TGetArticlesResponse> => {
    const response = await Service.post('/api/admin/Article/getListArticle', params);
    return response.data;
  };

  getArticle = async (id: string): Promise<TGetArticleResponse> => {
    const response = await Service.get(`/api/admin/Article/getDetail`, { params: { id } });
    return response.data;
  };

  deleteArticles = async (ids: string): Promise<TDeleteArticlesResponse> => {
    const response = await Service.post('/api/admin/Article/deletes', {}, { params: { ids } });
    return response.data;
  };
}

const ControllerInstance = new Controller();

export default ControllerInstance;
