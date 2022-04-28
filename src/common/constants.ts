import { ECustomerStatus } from '@/common/enums';
import { EIconColor } from '@/components/Icon';

/* eslint-disable no-useless-escape */
export const regex = {
  email:
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i,
  url: /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i,
  domain: /^[a-zA-Z0-9](?:[a-zA-Z0-9-.]*[a-zA-Z0-9])?$/i,
  alphabetic: /^[a-z\s]+$/i,
  alphanumerial: /^[a-z0-9\s]+$/i,
  numeric: /^\d+$/i,
  onlySpecialKey: /[$&+,:;=?@#|'<>.^*()%`~_!\-"\]\[\\}{'/]/g,
};

export const dataOptionsPageSize = [
  { label: '10', value: '10' },
  { label: '25', value: '25' },
  { label: '50', value: '50' },
  { label: '100', value: '100' },
];

export const dataGenderOptions = [
  { label: 'Nam', value: 'male' },
  { label: 'Nữ', value: 'female' },
];

export const dataDayOptions = [
  { label: '1', value: '1' },
  { label: '2', value: '2' },
  { label: '3', value: '3' },
  { label: '4', value: '4' },
  { label: '5', value: '5' },
  { label: '6', value: '6' },
  { label: '7', value: '7' },
  { label: '8', value: '8' },
  { label: '9', value: '9' },
  { label: '10', value: '10' },
  { label: '11', value: '11' },
  { label: '12', value: '12' },
  { label: '13', value: '13' },
  { label: '14', value: '14' },
  { label: '15', value: '15' },
  { label: '16', value: '16' },
  { label: '17', value: '17' },
  { label: '18', value: '18' },
  { label: '19', value: '19' },
  { label: '20', value: '20' },
  { label: '21', value: '21' },
  { label: '22', value: '22' },
  { label: '23', value: '23' },
  { label: '24', value: '24' },
  { label: '25', value: '25' },
  { label: '26', value: '26' },
  { label: '27', value: '27' },
  { label: '28', value: '28' },
  { label: '29', value: '29' },
  { label: '30', value: '30' },
  { label: '31', value: '31' },
];

export const dataMonthOptions = [
  { label: '1', value: '1' },
  { label: '2', value: '2' },
  { label: '3', value: '3' },
  { label: '4', value: '4' },
  { label: '5', value: '5' },
  { label: '6', value: '6' },
  { label: '7', value: '7' },
  { label: '8', value: '8' },
  { label: '9', value: '9' },
  { label: '10', value: '10' },
  { label: '11', value: '11' },
  { label: '12', value: '12' },
];

export const DEFAULT_PAGE = 1;
export const DEFAULT_PAGE_SIZE = 10;

export const customerStatusOptions = [
  { value: ECustomerStatus.ACTIVE, label: 'Hoạt động', color: EIconColor.SHAMROCK },
  { value: ECustomerStatus.PENDING, label: 'Chờ kích hoạt', color: EIconColor.BUTTERCUP },
  { value: ECustomerStatus.INACTIVE, label: 'Không hoạt động', color: EIconColor.RED },
];

export const statusOptions = [
  { value: true, label: 'Xuất bản', color: EIconColor.SHAMROCK },
  { value: false, label: 'Chưa xuất bản', color: EIconColor.RED },
];

export const depotStatusPaymentOptions = [
  { value: null, label: 'Tất cả' },
  { value: true, label: 'Đã thanh toán', color: EIconColor.SHAMROCK },
  { value: false, label: 'Chưa thanh toán', color: EIconColor.RED },
];

export const depotStatusDeliveryOptions = [
  { value: null, label: 'Tất cả' },
  { value: true, label: 'Đã giao', color: EIconColor.SHAMROCK },
  { value: false, label: 'Chưa giao', color: EIconColor.RED },
];

export const LIMIT_DESCRIPTION_LENGTH = 6;
