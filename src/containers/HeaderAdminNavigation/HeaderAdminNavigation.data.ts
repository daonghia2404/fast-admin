import { EIconName } from '@/components/Icon';
import { LayoutPaths, Paths } from '@/pages/routers';

export const dataHeaderAdminNavigation = [
  { icon: EIconName.Dashboard, disabled: true, title: 'Dashboard', link: `${LayoutPaths.Admin}${Paths.Dashboard}` },
  { icon: EIconName.Grid, disabled: true, title: 'Quản lý chung', link: `${LayoutPaths.Admin}${Paths.Dashboard}` },
  {
    icon: EIconName.Members,
    disabled: true,
    title: 'Quản lý nhân viên',
    link: `${LayoutPaths.Admin}${Paths.Dashboard}`,
  },
  {
    icon: EIconName.Users,
    disabled: false,
    title: 'Quản lý khách hàng',
    link: `${LayoutPaths.Admin}${Paths.Users}`,
  },
  {
    icon: EIconName.DocumentSigned,
    disabled: true,
    title: 'Phân quyền',
    link: `${LayoutPaths.Admin}${Paths.Dashboard}`,
  },
  { icon: EIconName.DocumentReward, disabled: true, title: 'Dịch vụ', link: `${LayoutPaths.Admin}${Paths.Dashboard}` },
  {
    icon: EIconName.DocumentSigned,
    disabled: true,
    title: 'Quản lý banner',
    link: `${LayoutPaths.Admin}${Paths.Dashboard}`,
  },
  { icon: EIconName.Blog, disabled: true, title: 'Bài viết', link: `${LayoutPaths.Admin}${Paths.Dashboard}` },
  {
    icon: EIconName.Settings,
    disabled: true,
    title: 'Cài đặt hệ thống',
    link: `${LayoutPaths.Admin}${Paths.Dashboard}`,
  },
];
