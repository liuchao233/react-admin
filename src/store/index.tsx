import React from 'react';
import { makeAutoObservable, configure } from 'mobx';
import { Provider as MobxProvider } from 'mobx-react';

configure({
  enforceActions: 'always',
})

class Global {  
  siderCollapsed = false;
  
  constructor() {
    makeAutoObservable(this);
    this.toggleSiderCollapse = this.toggleSiderCollapse.bind(this);
  }

  toggleSiderCollapse() {
    this.siderCollapsed = !this.siderCollapsed;
  }
}

const global = new Global();

export interface IStores {
  global: Global;
}

const Provider: React.FC = function(props) {
  return (
    <MobxProvider global={global}>
      {props.children}
    </MobxProvider>
  )
}

export default Provider
