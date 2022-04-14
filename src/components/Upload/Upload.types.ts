import { EUploadType } from '@/components/Upload/Upload.enums';

export type TUploadProps = {
  className?: string;
  value?: string;
  type: EUploadType;
  accept?: string;
  useCrop?: boolean;
  useFile?: boolean;
  multiple?: boolean;
  isUser?: boolean;
  videoUpload?: boolean;
  disabled?: boolean;
  onChange?: (data: string) => void;
  onChangeFile?: (data: FileList | null) => void;
};
