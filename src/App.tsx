import React from 'react';
import Provider from '@/store';
import Router from '@/routes'
import './App.less';

const App: React.FC = function() {
  return (
    <Provider>
      <Router />
    </Provider>
  )
}

export default App;
