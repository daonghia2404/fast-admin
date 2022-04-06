import { EKeyTabAuthModal } from '@/containers/AuthModal/AuthModal.enums';

export type TAuthModalProps = {
  visible?: boolean;
  onClose?: () => void;
  tabKey?: EKeyTabAuthModal;
  onSignInSuccess?: () => void;
};
