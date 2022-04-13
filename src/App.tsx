import React, { useEffect } from 'react';
import { Redirect, Router } from '@reach/router';
import { useDispatch } from 'react-redux';

import { AuthRoute, LayoutPaths, Pages, Paths, ProtectedRoute, PublicRoute } from '@/pages/routers';
import Guest from '@/layouts/Guest';
import Auth from '@/layouts/Auth';
import Admin from '@/layouts/Admin';
import { uiActions } from '@/redux/actions';

import './App.scss';

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const updateSize = (): void => {
      dispatch(uiActions.setDevice(window.innerWidth));
    };
    window.addEventListener('resize', updateSize);
    return (): void => window.removeEventListener('resize', updateSize);
  }, [dispatch]);

  return (
    <div className="App">
      <Router primary={false}>
        <Guest path={LayoutPaths.Guest}>
          <PublicRoute path={Paths.Home} component={Pages.Home} />
          <PublicRoute path={Paths.Services} component={Pages.Services} />
          <PublicRoute path={Paths.Orders} component={Pages.Orders} />
          <PublicRoute path={Paths.ServiceDetail()} component={Pages.ServiceDetail} />
          <Redirect noThrow from={Paths.Rest} to={`${LayoutPaths.Guest}${Paths.Home}`} />
        </Guest>

        <Auth path={LayoutPaths.Auth}>
          <AuthRoute path={Paths.Login} component={Pages.Login} />
          <Redirect noThrow from={Paths.Rest} to={`${LayoutPaths.Auth}${Paths.Login}`} />
        </Auth>

        <Admin path={LayoutPaths.Admin}>
          {/* <ProtectedRoute path={Paths.Dashboard} component={Pages.Dashboard} /> */}
          <ProtectedRoute path={Paths.Members} component={Pages.Members} />
          <ProtectedRoute path={Paths.Users} component={Pages.Users} />
          <ProtectedRoute path={Paths.Settings} component={Pages.Settings} />
          <ProtectedRoute path={Paths.Banners} component={Pages.Banners} />
          <ProtectedRoute path={Paths.Blogs} component={Pages.Blogs} />
          <Redirect noThrow from={Paths.Rest} to={`${LayoutPaths.Admin}${Paths.Members}`} />
        </Admin>
      </Router>
    </div>
  );
};

export default App;
