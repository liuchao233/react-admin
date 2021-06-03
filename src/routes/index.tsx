import {
  BrowserRouter,
  Switch,
  Route,
  RouteComponentProps,
} from "react-router-dom";
import UserLayout from '@/layouts/user-layout';
import Login from '@/pages/user/login';
import HomeLayout from '@/layouts/basic-layout';
import Home from '@/pages/home'; 

export interface IRouter {
  title?: string;
  path?: string;
  exact?: boolean;
  component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>
  routes?: IRoutes,
}

export type IRoutes = IRouter[]

const routes: IRoutes = [
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
    component: HomeLayout,
    routes: [
      {
        path: '/',
        exact: true,
        component: Home,
      },
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
            render={routerProps => (
              <r.component {...routerProps}>
                {renderRoutes(r.routes)}
              </r.component>
            )} 
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