import {
  Router,
  Switch,
  Route,
  RouteComponentProps,
} from "react-router-dom";
import { createBrowserHistory } from 'history';
import BlankLayout from '@/layouts/blank-layout';
import UserLayout from '@/layouts/user-layout';
import Login from '@/pages/user/login';
import BasicLayout from '@/layouts/basic-layout';
import Home from '@/pages/home';
import Icon from '@/pages/components/icon';
import Table from '@/pages/components/table';
import Exception404 from "@/pages/exception/404";

const history = createBrowserHistory({
  basename: '/',
});

export interface IRouter {
  title?: string;
  path?: string;
  exact?: boolean;
  component?: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>
  routes?: IRoutes,
}

export type IRoutes = IRouter[]

export const routes: IRoutes = [
  {
    path: '/user',
    component: UserLayout,
    routes: [
      {
        path: "/user/login",
        component: Login,
      }
    ]
  },
  {
    path: '/',
    component: BasicLayout,
    routes: [
      {
        path: '/',
        exact: true,
        component: Home,
      },
      {
        path: '/components',
        routes: [
          {
            path: '/components/icon',
            component: Icon,
          },
          {
            path: '/components/table',
            component: Table,
          },
          {
            path: '*',
            component: Exception404,
          }
        ]
      },
      {
        path: '*',
        component: Exception404,
      }
    ] 
  },
]

function renderRoutes(routes: IRoutes = []) {
  return (
    <Switch>
      {
        routes.map(r => (
          <Route 
            key={r.path}
            exact={r.exact} 
            path={r.path}
            render={routerProps => {
              let Component = r.component || BlankLayout
              return (
                <Component {...routerProps}>
                  {renderRoutes(r.routes)}
                </Component>
              )
            }} 
          />
        ))
      }
    </Switch>
  )
}

const BaseRouter: React.FC = function() {
  return (
    <Router history={history}>
      {renderRoutes(routes)}
    </Router>
  )
}

export default BaseRouter;

export { history };
