import { TDepotStoragesResponse } from '@/services/api/depot-controller/types';

export type TInputStorageSearchModalProps = {
  visible?: boolean;
  data?: TDepotStoragesResponse[];
  onClose?: () => void;
  pageIndex?: number;
  pageSize?: number;
  onPaginationChange?: (page: number, pageSize?: number) => void;
};
