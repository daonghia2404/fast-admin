import { EKeyTabAuthModal } from '@/containers/AuthModal/AuthModal.enums';

export type TAuthModalProps = {
  visible?: boolean;
  tabKey?: EKeyTabAuthModal;
  onClose?: () => void;
  onSignInSuccess?: () => void;
};
