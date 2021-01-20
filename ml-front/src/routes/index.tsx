/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import {
  Switch,
  Route,
  BrowserRouter,
  RouteProps,
  RouteComponentProps,
} from 'react-router-dom';
import { routes } from './routes-list';

declare global {
  interface RoutesCustom extends RouteProps {
    hidden?: boolean;
    exact: boolean;
    path: string;
    component:
      | React.ComponentType<RouteComponentProps<any>>
      | React.ComponentType<any>;
  }
}

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map(({ hidden, ...rest }: RoutesCustom) => {
          if (hidden) {
            return null;
          }
          return <Route {...rest} key={rest.path} />;
        })}
      </Switch>
    </BrowserRouter>
  );
};
