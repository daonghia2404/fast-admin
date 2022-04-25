import { TDepotOrderReturnResponse } from '@/services/api/depot-controller/types';

export type TInputOrderSearchModalProps = {
  visible?: boolean;
  data?: TDepotOrderReturnResponse[];
  onClose?: () => void;
  pageIndex?: number;
  pageSize?: number;
  onPaginationChange?: (page: number, pageSize?: number) => void;
};
