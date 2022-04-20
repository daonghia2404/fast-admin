import { TDepotOrderResponse } from '@/services/api/depot-controller/types';

export type TQuickOrderModalProps = {
  visible?: boolean;
  data?: TDepotOrderResponse[];
  onClose?: () => void;
};
