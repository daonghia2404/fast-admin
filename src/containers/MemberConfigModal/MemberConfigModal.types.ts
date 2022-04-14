import { ETypeMemberConfigModal } from '@/containers/MemberConfigModal/MemberConfigModal.enums';
import { TAccountResponse } from '@/services/api/account-controller/types';

export type TMemberConfigModalProps = {
  visible: boolean;
  type?: ETypeMemberConfigModal;
  data?: TAccountResponse;
  onClose?: () => void;
  onSubmit?: () => void;
};
