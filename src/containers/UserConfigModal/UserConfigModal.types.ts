import { ETypeUserConfigModal } from '@/containers/UserConfigModal/UserConfigModal.enums';
import { TClientResponse } from '@/services/api/client-controller/types';

export type TUserConfigModalProps = {
  visible: boolean;
  type?: ETypeUserConfigModal;
  data?: TClientResponse;
  onClose?: () => void;
  onSubmit?: () => void;
};
