import React from 'react';
import classNames from 'classnames';

import ImagePicture from '@/assets/images/image-picture.png';
import Upload from '@/components/Upload/Upload';
import { EUploadType } from '@/components/Upload/Upload.enums';
import { getFullPathFile } from '@/utils/functions';

import { TUploadSingleImageProps } from './UploadSingleImage.types';
import './UploadSingleImage.scss';

export const UploadSingleImage: React.FC<TUploadSingleImageProps> = ({ className, value, onChange }) => {
  return (
    <div className={classNames('UploadSingleImage', className)}>
      <Upload type={EUploadType.api} onChange={onChange}>
        {value ? (
          <div className="UploadSingleImage-preview">
            <img src={getFullPathFile(value)} alt="" />
          </div>
        ) : (
          <div className="UploadSingleImage-control flex flex-col items-center justify-center">
            <div className="UploadSingleImage-control-icon">
              <img src={ImagePicture} alt="" />
            </div>
            Tải ảnh lên
          </div>
        )}
      </Upload>
    </div>
  );
};

export default UploadSingleImage;
