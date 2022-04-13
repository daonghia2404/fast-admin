import { TForgotPasswordBody } from '@/services/api/auth-controller/types';

export type TFindAccountProps = {
  onSubmit?: (data: TForgotPasswordBody) => void;
};
