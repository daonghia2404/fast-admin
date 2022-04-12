import React, { useRef, useState } from 'react';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';

import { TUploadProps } from './Upload.types';
import { EUploadType } from './Upload.enums';
import './Upload.scss';
import { convertImageToBase64File } from '@/utils/functions';

export const Upload: React.FC<TUploadProps> = ({
  className,
  type,
  accept = '.jpg, .jpeg, .png',
  multiple,
  children,
  useFile,
  disabled,
  onChange,
  onChangeFile,
}) => {
  const inputFilesRef = useRef<HTMLInputElement>(null);
  const isSingleUpload = !multiple;
  const isMultipleUpload = multiple;

  const isBase64Upload = type === EUploadType.base64;
  const isApiUpload = type === EUploadType.api;

  const handleClickUpload = (): void => {
    if (!disabled) inputFilesRef?.current?.click();
  };

  const handleChangeUpload = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { files } = event.target;

    if (isSingleUpload) {
      const singleFile = files?.[0];

      if (singleFile) {
        if (useFile) {
          onChangeFile?.(files);
        } else if (isBase64Upload) convertImageToBase64File(singleFile, handleConvertImageToBase64FileSuccess);
      }
    }
    if (isMultipleUpload) {
      // ABC
    }

    if (inputFilesRef.current) inputFilesRef.current.value = '';
  };

  const handleConvertImageToBase64FileSuccess = (data: string): void => {
    onChange?.(data);
  };

  return (
    <div className={classNames('Upload', { disabled }, className)}>
      <div className="Upload-wrapper" onClick={handleClickUpload}>
        {children}
      </div>
      <input
        ref={inputFilesRef}
        className="Upload-input"
        accept={accept}
        type="file"
        multiple={multiple}
        onChange={handleChangeUpload}
      />
    </div>
  );
};

export default Upload;
