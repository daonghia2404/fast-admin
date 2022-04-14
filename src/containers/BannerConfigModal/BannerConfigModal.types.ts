import { ETypeBannerConfigModal } from '@/containers/BannerConfigModal/BannerConfigModal.enums';
import { TBannerResponse } from '@/services/api/banner-controller/types';

export type TBannerConfigModalProps = {
  visible: boolean;
  type?: ETypeBannerConfigModal;
  data?: TBannerResponse;
  onClose?: () => void;
  onSubmit?: () => void;
};
