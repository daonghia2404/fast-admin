export type TModalConfirmProps = {
  visible: boolean;
  title: string;
  description: string;
  onClose?: () => void;
  onSubmit?: () => void;
};
