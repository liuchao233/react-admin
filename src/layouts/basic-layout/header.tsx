import React from 'react';
import { observer, inject } from 'mobx-react';
import { Layout, Menu, Dropdown, Avatar } from 'antd';
import { IStores } from '@/store';
import Icon from '@/components/icon';

interface TriggerProps extends React.HTMLAttributes<HTMLSpanElement> {
  collapsed?: boolean;
  toggleCollapsed?: () => void;
}

const Trigger: React.FC<TriggerProps> = function(props) {
  const { collapsed, toggleCollapsed, ...restProps } = props;
  const name = collapsed ? 'menu-fold' : 'menu-unfold';
  return (
    <Icon name={name} {...restProps} onClick={() => toggleCollapsed?.()} />
  )
}

const ObserverTrigger = inject((stores: IStores) => ({ 
  collapsed: stores.global.siderCollapsed,
  toggleCollapsed: stores.global.toggleSiderCollapse,
}))(observer(Trigger))

const menu = (
  <Menu>
    <Menu.Item>设置</Menu.Item>
    <Menu.Divider />
    <Menu.Item>登出</Menu.Item>
  </Menu>
);

const UserDetail: React.FC = function(props) {
  return (
    <Dropdown overlay={menu} placement="bottomRight">
      <div className="flex items-center">
        <Avatar className="inline-block mr-1">U</Avatar>
        <span className="text-sm mr-1.5">admin</span>
        <Icon name="down" />
      </div>
    </Dropdown>
  )
}

const Header: React.FC = function() {
  return (
    <Layout.Header className="basic-layout-header py-4 px-8 justify-between leading-8">
      <ObserverTrigger className="cursor-pointer text-2xl leading-8" />
      <UserDetail />
    </Layout.Header>
  )
}

export default Header;