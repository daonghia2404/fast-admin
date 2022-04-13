import { EKeyTabAuthModal } from '@/containers/AuthModal/AuthModal.enums';

export type TVetifyAccountProps = {
  prevKey?: EKeyTabAuthModal;
  data?: any;
  onConfirmOtpSignIn?: (data: any) => void;
  onConfirmOtpForgotPassword?: (data: any) => void;
};
