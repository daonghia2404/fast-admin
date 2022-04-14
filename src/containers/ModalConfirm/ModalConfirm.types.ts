export type TModalConfirmProps = {
  visible: boolean;
  title: string;
  description: string;
  loading?: boolean;
  onClose?: () => void;
  onSubmit?: () => void;
};
