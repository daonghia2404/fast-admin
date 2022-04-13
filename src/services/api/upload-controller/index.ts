import Service from '@/services/api';
import { TUploadFileResponse } from '@/services/api/upload-controller/types';

class Controller {
  uploadFile = async (body: FormData): Promise<TUploadFileResponse> => {
    const response = await Service.post('/api/File/UploadFile', body);
    return response.data;
  };
}

const ControllerInstance = new Controller();

export default ControllerInstance;
