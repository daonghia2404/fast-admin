// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { CKEditor } from '@ckeditor/ckeditor5-react';

export type TCkEditorProps = {
  className?: string;
  focusOnMount?: boolean;
  value?: string;
  onChange?: (value: string) => void;
  onFocus?: (event: any, editor: CKEditor) => void;
  onBlur?: () => void;
};
