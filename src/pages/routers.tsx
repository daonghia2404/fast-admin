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

const Login = lazy(() => retryLoadComponent(() => import('@/pages/Login')));

const Dashboard = lazy(() => retryLoadComponent(() => import('@/pages/Dashboard')));

export const LayoutPaths = {
  Guest: '/',
  Auth: '/auth',
  Admin: '/admin',
};

export const ModulePaths = {
  Services: '/dich-vu',
};

export const Paths = {
  Home: '/',
  Services: ModulePaths.Services,
  ServiceDetail: (id?: string): string => `${ModulePaths.Services}/chi-tiet/${id || ':id'}`,

  Login: '/',

  Dashboard: '/',
  Rest: '*',
};

export const Pages = {
  Home,
  Services,
  ServiceDetail,

  Login,

  Dashboard,
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
    <Redirect noThrow from={Paths.Rest} to={LayoutPaths.Auth} />
  );
};

export const PublicRoute: React.FC<IRouteProps> = ({ component: Component, ...rest }) => (
  <Suspense fallback={<div className="DOM-loading" />}>
    <Component {...rest} />
  </Suspense>
);
