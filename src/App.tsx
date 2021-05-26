import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import UserLayout from '@/layouts/user-layout';
import HomeLayout from '@/layouts/home-layout';
import Login from '@/pages/user/login';
import Home from '@/pages/home'; 
import './App.less';

const App: React.FC = function() {
  return (
    <Router>
      <Switch>
      <Route exact path="/">
        <HomeLayout>
          <Home />
        </HomeLayout>
      </Route>
      <Route path="/user">
        <UserLayout>
          <Login />
        </UserLayout>
      </Route>
    </Switch>
    </Router>
  )
}

export default App;
