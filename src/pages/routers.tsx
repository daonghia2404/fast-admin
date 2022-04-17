import React, { lazy, Suspense } from 'react';
import { Redirect, RouteComponentProps } from '@reach/router';

import authHelpers from '@/services/helpers';

const retryLoadComponent = (fn: () => Promise<unknown>, retriesLeft = 5, interval = 1000): any =>
  new Promise((resolve, reject) => {
    fn()
      .then(resolve)
      .catch((error) => {
        setTimeout(() => {
          if (retriesLeft === 1) {
            reject(error);
            return;
          }

          retryLoadComponent(fn, retriesLeft - 1, interval).then(resolve, reject);
        }, interval);
      });
  });

const Home = lazy(() => retryLoadComponent(() => import('@/pages/Home')));
const Services = lazy(() => retryLoadComponent(() => import('@/pages/Services')));
const ServiceDetail = lazy(() => retryLoadComponent(() => import('@/pages/ServiceDetail')));
const Orders = lazy(() => retryLoadComponent(() => import('@/pages/Orders')));

const Login = lazy(() => retryLoadComponent(() => import('@/pages/Login')));

const Dashboard = lazy(() => retryLoadComponent(() => import('@/pages/Dashboard')));
const Users = lazy(() => retryLoadComponent(() => import('@/pages/Users')));
const Members = lazy(() => retryLoadComponent(() => import('@/pages/Members')));
const Banners = lazy(() => retryLoadComponent(() => import('@/pages/Banners')));
const Blogs = lazy(() => retryLoadComponent(() => import('@/pages/Blogs')));
const BlogDetailCreate = lazy(() => retryLoadComponent(() => import('@/pages/BlogDetailCreate')));
const BlogDetailUpdate = lazy(() => retryLoadComponent(() => import('@/pages/BlogDetailUpdate')));
const Settings = lazy(() => retryLoadComponent(() => import('@/pages/Settings')));

export const LayoutPaths = {
  Guest: '/',
  Auth: '/auth',
  Admin: '/quan-ly',
};

export const ModulePaths = {
  Services: '/dich-vu',
  Settings: '/cai-dat',
  Users: '/khach-hang',
  Members: '/nhan-vien',
  Banners: '/banners',
  Blogs: '/bai-viet',
};

export const Paths = {
  Home: '/',
  Services: ModulePaths.Services,
  ServiceDetail: (id?: string): string => `${ModulePaths.Services}/chi-tiet/${id || ':id'}`,
  Orders: '/tra-van-don',

  Login: '/',

  Dashboard: '/',
  Users: ModulePaths.Users,
  Members: ModulePaths.Members,
  Settings: ModulePaths.Settings,
  Banners: ModulePaths.Banners,
  Blogs: ModulePaths.Blogs,
  BlogDetailCreate: `${ModulePaths.Blogs}/tao-moi`,
  BlogDetailUpdate: `${ModulePaths.Blogs}/cap-nhat`,

  Rest: '*',
};

export const Pages = {
  Home,
  Services,
  ServiceDetail,
  Orders,

  Login,

  Dashboard,
  Users,
  Members,
  Settings,
  Banners,
  Blogs,
  BlogDetailCreate,
  BlogDetailUpdate,
};

interface IRouteProps extends RouteComponentProps {
  component: React.FC;
}

export const AuthRoute: React.FC<IRouteProps> = ({ component: Component, ...rest }) => {
  const loggedIn: string | any = authHelpers.getAccessToken();

  return loggedIn ? (
    <Redirect noThrow from={Paths.Rest} to={LayoutPaths.Admin} />
  ) : (
    <Suspense fallback={<div className="DOM-loading" />}>
      <Component {...rest} />
    </Suspense>
  );
};

export const ProtectedRoute: React.FC<IRouteProps> = ({ component: Component, ...rest }) => {
  const loggedIn: string | any = authHelpers.getAccessToken();

  return loggedIn ? (
    <Suspense fallback={<div className="DOM-loading" />}>
      <Component {...rest} />
    </Suspense>
  ) : (
    <Redirect noThrow from={Paths.Rest} to={LayoutPaths.Guest} />
  );
};

export const PublicRoute: React.FC<IRouteProps> = ({ component: Component, ...rest }) => (
  <Suspense fallback={<div className="DOM-loading" />}>
    <Component {...rest} />
  </Suspense>
);
