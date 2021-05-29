import React from 'react';
import { Layout, Menu } from 'antd';
import TextLogo from '@/components/text-logo';
import Icon from '@/components/icon';

export interface SiderProps {
    
}

const Sider: React.FC<SiderProps> = function() {
  return (
    <Layout.Sider width="240" className="basic-layout-sider">
      <TextLogo />
      <Menu
        theme="dark"
        mode="inline"
      >
        <Menu.SubMenu
          icon={<Icon name="home" />}
          title="首页"
        >
          <Menu.Item>首页</Menu.Item>
          <Menu.Item>工作台</Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu
          icon={<Icon name="code" />}
          title="组件"
        >
          <Menu.ItemGroup title="图标">
            <Menu.Item>小清新图标</Menu.Item>
            <Menu.Item>图标选择器</Menu.Item>
          </Menu.ItemGroup>
        </Menu.SubMenu>
      </Menu>
    </Layout.Sider>
  )  
}

export default Sider;