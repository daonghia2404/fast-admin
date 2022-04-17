import React, { useCallback, useRef, useState } from 'react';
import classNames from 'classnames';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { CKEditor } from '@ckeditor/ckeditor5-react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import ClassicEditor from 'ckeditor5-custom-build/build/ckeditor';

import { TCkEditorProps } from '@/components/CkEditor/CkEditor.types';
import MyUploadAdapter from '@/components/CkEditor/AdapterCkEditor';

import './CkEditor.scss';

export const CkEditor: React.FC<TCkEditorProps> = ({ className, value, focusOnMount, onBlur, onFocus, onChange }) => {
  const [, setCkEditor] = useState<CKEditor | null>(null);
  const ckEditorRef = useRef<HTMLDivElement>(null);

  function customCkEditorAdapter(editor: any): any {
    // eslint-disable-next-line no-param-reassign
    editor.plugins.get('FileRepository').createUploadAdapter = (loader: any): any => {
      return new MyUploadAdapter(loader);
    };
  }

  const config = {
    toolbar: {
      items: [
        'heading',
        '|',
        'bold',
        'italic',
        'underline',
        'strikethrough',
        'link',
        'bulletedList',
        'numberedList',
        'superscript',
        'subscript',
        '|',
        'imageInsert',
        'mediaEmbed',
        '|',
        'alignment',
        'fontFamily',
        'fontBackgroundColor',
        'fontColor',
        'fontSize',
        'highlight',
        'removeFormat',
        '-',
        'blockQuote',
        'insertTable',
        'horizontalLine',
        '|',
        'code',
        'codeBlock',
        '|',
        'outdent',
        'indent',
        '|',
        'undo',
        'redo',
        '|',
        'findAndReplace',
      ],
      shouldNotGroupWhenFull: true,
    },
    language: 'en',
    image: {
      toolbar: ['imageTextAlternative', 'imageStyle:inline', 'imageStyle:block', 'imageStyle:side'],
      upload: {
        types: ['png', 'jpeg', 'jpg'],
      },
    },
    heading: {
      options: [
        { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
        { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
        { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' },
        { model: 'heading3', view: 'h3', title: 'Heading 3', class: 'ck-heading_heading3' },
        { model: 'heading4', view: 'h4', title: 'Heading 4', class: 'ck-heading_heading4' },
        { model: 'heading5', view: 'h5', title: 'Heading 5', class: 'ck-heading_heading5' },
        { model: 'heading6', view: 'h6', title: 'Heading 6', class: 'ck-heading_heading6' },
      ],
    },
    extraPlugins: [customCkEditorAdapter],
  };

  const handleEditorReady = (editor: CKEditor): void => {
    setCkEditor(editor);
    if (editor) {
      if (focusOnMount) editor.editing.view.focus();
    }
  };

  const handleEditorChange = (event: any, editor: CKEditor): void => {
    const data = editor.getData();
    onChange?.(data);
  };

  const handleEditorBlur = useCallback((): void => {
    onBlur?.();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleEditorFocus = (event: any, editor: CKEditor): void => {
    onFocus?.(event, editor);
  };

  return (
    <div className={classNames('CkEditor', className)} ref={ckEditorRef}>
      <CKEditor
        config={config}
        editor={ClassicEditor}
        data={value}
        onReady={handleEditorReady}
        onChange={handleEditorChange}
        onFocus={handleEditorFocus}
        onBlur={handleEditorBlur}
      />
    </div>
  );
};

export default CkEditor;
