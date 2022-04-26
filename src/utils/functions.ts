/* eslint-disable no-useless-escape */
import moment from 'moment';
import { notification } from 'antd';
import { Rule } from 'antd/lib/form';

import { EEmpty, ETypeNotification } from '@/common/enums';
import { regex } from '@/common/constants';
import env from '@/env';

export const removeAccents = (str: string): string => {
  let strConverted = str;
  if (strConverted) {
    strConverted = strConverted.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
    strConverted = strConverted.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
    strConverted = strConverted.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
    strConverted = strConverted.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
    strConverted = strConverted.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
    strConverted = strConverted.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
    strConverted = strConverted.replace(/đ/g, 'd');
    strConverted = strConverted.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, 'A');
    strConverted = strConverted.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, 'E');
    strConverted = strConverted.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, 'I');
    strConverted = strConverted.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, 'O');
    strConverted = strConverted.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, 'U');
    strConverted = strConverted.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, 'Y');
    strConverted = strConverted.replace(/Đ/g, 'D');

    strConverted = strConverted.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, '');
    strConverted = strConverted.replace(/\u02C6|\u0306|\u031B/g, '');
    // Remove extra spaces
    strConverted = strConverted.replace(/ + /g, ' ');
    strConverted = strConverted.trim();
    // Remove punctuations
    strConverted = strConverted.replace(
      /!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g,
      ' ',
    );
    return strConverted;
  }

  return '';
};

export const showNotification = (type: ETypeNotification, description: string): void => {
  const options = {
    message: '',
    description,
    className: 'Notification',
  };

  switch (type) {
    case ETypeNotification.SUCCESS:
      notification.success(options);
      break;
    case ETypeNotification.WARNING:
      notification.warning(options);
      break;
    case ETypeNotification.ERROR:
      notification.error(options);
      break;
    case ETypeNotification.INFO:
      notification.info(options);
      break;
    default:
      notification.open(options);
  }
};

export const searchString = (target: string | string[], searchValue: string): boolean => {
  const searchKey = searchValue.toLowerCase();
  const searchTarget = target instanceof Array ? target.map((str) => str.toLowerCase()) : target.toLowerCase();
  const searchResult =
    searchTarget instanceof Array
      ? !!searchTarget.filter((str) => removeAccents(str).includes(removeAccents(searchKey))).length
      : removeAccents(searchTarget).includes(removeAccents(searchKey));
  return searchResult;
};

export const getTotalPage = (totalItem: number, pageSize: number): number => {
  return Math.ceil(totalItem / pageSize);
};

export const scrollToTop = (): void => {
  window.scrollTo(0, 0);
};

export const validationRules = {
  required: (message?: string): Rule => ({
    required: true,
    message: message || 'Vui Lòng Nhập Đầy Đủ Thông Tin Trường',
  }),
  minLength: (message?: string, length = 2): Rule => ({
    min: length,
    message: message || `Enter characters at least ${length}`,
  }),
  maxLength: (message?: string, length = 10): Rule => ({
    max: length,
    message: message || `Enter characters at most ${length}`,
  }),
  email: (message?: string): Rule => ({
    type: 'email',
    message: message || 'Vui lòng nhập email hợp lệ',
  }),
  noSpecialKey: (message?: string): Rule => ({
    validator: (rule: any, value: string): Promise<void> => {
      if (!value || !regex.onlySpecialKey.test(value)) return Promise.resolve();
      return Promise.reject(message || 'Cannot enter special characters');
    },
  }),
  onlyAlphabetic: (message: string): Rule => ({
    validator: (rule: any, value: string): Promise<void> => {
      if (!value || regex.alphabetic.test(removeAccents(value))) return Promise.resolve();
      return Promise.reject(message || 'This is a field where only alphabetic characters are entered');
    },
  }),
  onlyNumeric: (message?: string): Rule => ({
    validator: (rule: any, value: string): Promise<void> => {
      if (!value || regex.numeric.test(value)) return Promise.resolve();
      return Promise.reject(message || 'Vui lòng nhập ký tự là số');
    },
  }),
  onlyAlphanumerial: (message: string): Rule => ({
    validator: (rule: any, value: string): Promise<void> => {
      if (!value || regex.alphanumerial.test(removeAccents(value))) return Promise.resolve();
      return Promise.reject(message || 'This is a field where only alphanumeric characters are entered');
    },
  }),
  domain: (message: string): Rule => ({
    validator: (rule: any, value: string): Promise<void> => {
      if (!value || regex.domain.test(value)) return Promise.resolve();
      return Promise.reject(message || 'Invalid domain');
    },
  }),
  url: (message: string): Rule => ({
    validator: (rule: any, value: string): Promise<void> => {
      if (!value || regex.url.test(value)) return Promise.resolve();
      return Promise.reject(message || 'Invalid URL');
    },
  }),
  confirmPassword: (confirmPasswordValue: string, message?: string): Rule => ({
    validator: (rule: any, value: string): Promise<void> => {
      if (!value || value === confirmPasswordValue) return Promise.resolve();
      return Promise.reject(message || 'Mật khẩu nhập lại không trùng khớp');
    },
  }),
};

export const formatAbbreviationsName = (value: string): string => {
  const arrayString = value.trim().split(' ');
  const onlyOneWord = arrayString.length === 1;

  if (onlyOneWord) {
    const firstLetter = arrayString[0].trim().charAt(0);
    return `${firstLetter}`.toUpperCase();
  }

  const firstLastWordFirstLetter = arrayString[arrayString.length - 2].trim().charAt(0);
  const secondLastWordFirstLetter = arrayString[arrayString.length - 1].trim().charAt(0);

  return `${firstLastWordFirstLetter}${secondLastWordFirstLetter}`.toUpperCase();
};

export const convertImageToBase64File = (file?: File, callback?: (dataBase64: string) => void): void => {
  if (file) {
    const fileData = new FileReader();
    fileData.readAsDataURL(file);
    fileData.onloadend = (): void => {
      callback?.((fileData.result as string) || '');
    };
  }
};

export const getFullPathFile = (path: string): string => {
  return `${env.api.baseUrl.service}${path}`;
};

export const formatISODateToDateTime = (time: string, format?: string): string => {
  if (moment(time).year() < 1970) return EEmpty.STRIKE_THROUGH;
  return moment(time).format(format || 'YYYY-MM-DD - HH:mm');
};

export const formatMoneyVND = (config: {
  amount: number | string;
  uppercaseUnit?: boolean;
  showSuffix?: boolean;
}): string => {
  const separateMoney = Intl.NumberFormat('vi-VN').format(Number(config.amount));
  const unit = config.uppercaseUnit ? 'Đ' : 'đ';
  return `${separateMoney} ${config.showSuffix ? unit : ''}`;
};
