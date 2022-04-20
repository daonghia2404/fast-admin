import { Paths } from '@/pages/routers';

export const dataHeaderMenu = [
  { link: Paths.Home, title: 'Trang chủ' },
  { link: Paths.AboutUs, title: 'Về chúng tôi' },
  { link: Paths.Contact, title: 'Liên hệ' },
  { link: Paths.Services, title: 'Dịch vụ' },
  { link: Paths.Orders, title: 'Tra vận đơn', checkAuth: true },
];
