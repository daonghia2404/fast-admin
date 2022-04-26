import { EFooterAction } from '@/containers/Footer/Footer.enums';
import { Paths } from '@/pages/routers';

export const dataMenuFooter = [
  { link: Paths.AboutUs, title: 'Về Chúng Tôi' },
  { link: Paths.Contact, title: 'Liên Hệ' },
  { link: EFooterAction.SIGN_IN, title: 'Đăng Nhập' },
  { link: EFooterAction.SIGN_UP, title: 'Đăng Ký' },
];
