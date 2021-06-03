import React from 'react';
import { Layout, Menu } from 'antd';
import { observer, inject } from 'mobx-react';
import { IStores } from '@/store';
import TextLogo from '@/components/text-logo';
import Icon from '@/components/icon';

export interface SiderProps {
  collapsed?: boolean;
}

const Sider: React.FC<SiderProps> = function(props) {
  const { collapsed } = props;
  return (
    <Layout.Sider 
      width="240" 
      className="basic-layout-sider"
      collapsed={collapsed}
    >
      <TextLogo />
      <Menu
        theme="dark"
        mode="inline"
      >
        <Menu.SubMenu
          key="1"
          icon={<Icon name="home" />}
          title="首页"
        >
          <Menu.Item key="1-1">首页</Menu.Item>
          <Menu.Item key="1-2">工作台</Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu
          key="2"
          icon={<Icon name="code" />}
          title="组件"
        >
          <Menu.ItemGroup title="图标">
            <Menu.Item key="2-1">小清新图标</Menu.Item>
            <Menu.Item key="2-2">图标选择器</Menu.Item>
          </Menu.ItemGroup>
        </Menu.SubMenu>
      </Menu>
    </Layout.Sider>
  )  
}

const LinkedSider = inject((stores: IStores) => ({
  collapsed: stores.global.siderCollapsed
}))(observer(Sider))

export default LinkedSider;