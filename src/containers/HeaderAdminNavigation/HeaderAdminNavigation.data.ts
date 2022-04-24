import { EIconName } from '@/components/Icon';
import { LayoutPaths, Paths } from '@/pages/routers';

export const dataHeaderAdminNavigation = [
  { icon: EIconName.Dashboard, disabled: true, title: 'Dashboard', link: `${LayoutPaths.Admin}${Paths.Dashboard}` },
  { icon: EIconName.Grid, disabled: true, title: 'QL chung', link: `${LayoutPaths.Admin}${Paths.Dashboard}` },
  {
    icon: EIconName.Members,
    disabled: false,
    title: 'QL nhân viên',
    link: `${LayoutPaths.Admin}${Paths.Members}`,
  },
  {
    icon: EIconName.Users,
    disabled: false,
    title: 'QL khách hàng',
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
    disabled: false,
    title: 'QL banner',
    link: `${LayoutPaths.Admin}${Paths.Banners}`,
  },
  { icon: EIconName.Blog, disabled: false, title: 'Bài viết', link: `${LayoutPaths.Admin}${Paths.Blogs}` },
  {
    icon: EIconName.Settings,
    disabled: true,
    title: 'Cài đặt hệ thống',
    link: `${LayoutPaths.Admin}${Paths.Dashboard}`,
  },
];
