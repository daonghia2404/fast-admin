import { TRegisterBody } from '@/services/api/auth-controller/types';

export type TSignUpProps = {
  onSubmit?: (data: TRegisterBody) => void;
};
