import React from 'react';
import { Layout } from 'antd';
import Sider from './sider';
import Header from './header';
import './styles.scss'

const BasicLayout: React.FC = function(props) {
  const { children } = props;
  return (
    <Layout className="basic-layout">
      <Sider />
      <Layout>
        <Header />
        <Layout className="p-6">
          <Layout.Content className="basic-layout-content">
            {children}
          </Layout.Content>
        </Layout>
      </Layout>
    </Layout>  
  )
}

export default BasicLayout