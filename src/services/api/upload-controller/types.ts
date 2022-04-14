import { TCommonResponse } from '@/common/types';

export type TUploadFileResponse = TCommonResponse & {
  data: { path: string };
};
