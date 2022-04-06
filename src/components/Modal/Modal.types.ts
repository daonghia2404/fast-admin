export type TModalProps = {
  className?: string;
  wrapClassName?: string;
  title?: string;
  visible?: boolean;
  maxWidth?: string;
  radius?: boolean;
  closeable?: boolean;
  onClose?: () => void;
  onClickClose?: () => void;
};
