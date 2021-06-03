import {
  BrowserRouter,
  Switch,
  Route,
  RouteComponentProps,
} from "react-router-dom";
import BlankLayout from '@/layouts/blank-layout';
import UserLayout from '@/layouts/user-layout';
import Login from '@/pages/user/login';
import BasicLayout from '@/layouts/basic-layout';
import Home from '@/pages/home';
import Icons from '@/pages/components/icon';

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
            path: '/components/icons',
            component: Icons,
          }
        ]
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

const Router: React.FC = function() {
  return (
    <BrowserRouter>
      {renderRoutes(routes)}
    </BrowserRouter>
  )
}

export default Router