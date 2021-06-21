import React from 'react';
import { Layout, Menu } from 'antd';
import { observer, inject } from 'mobx-react';
import { useHistory } from 'react-router';
import { IStores } from '@/store';
import TextLogo from '@/components/text-logo';
import Icon from '@/components/icon';
import { SelectInfo } from 'rc-menu/lib/interface'

export interface SiderProps {
  collapsed?: boolean;
}

const Sider: React.FC<SiderProps> = function(props) {
  const { collapsed } = props;
  const history = useHistory();

  function onSelect(info: SelectInfo) {
    const path = info.key;
    history.push(path);
  }

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
        onSelect={onSelect}
      >
        <Menu.SubMenu
          key="sub-/"
          icon={<Icon name="home" />}
          title="首页"
        >
          <Menu.Item key="/">首页</Menu.Item>
          <Menu.Item key="/workbench">工作台</Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu
          key="sub-/component"
          icon={<Icon name="code" />}
          title="组件"
        >
          <Menu.Item key="/components/table">表格demo</Menu.Item>
          {/* <Menu.ItemGroup key="group-/components/icon" title="图标">
            <Menu.Item key="/components/icons">小清新图标</Menu.Item>
            <Menu.Item key="/components/icon-selector">图标选择器</Menu.Item>
          </Menu.ItemGroup> */}
        </Menu.SubMenu>
      </Menu>
    </Layout.Sider>
  )  
}

const LinkedSider = inject((stores: IStores) => ({
  collapsed: stores.global.siderCollapsed
}))(observer(Sider))

export default LinkedSider;