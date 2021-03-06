import { Drawer, Spin, Space, Button } from 'antd';
import BaseInteractiveCls, { BaseInteractiveClsProps, BaseInteractiveClsStates } from '@/templates/base-interactive-cls';

export interface BaseDrawerProps extends BaseInteractiveClsProps {
  
}

export interface BaseDrawerStates extends BaseInteractiveClsStates {
  
}

class BaseDrawer extends BaseInteractiveCls<BaseDrawerProps, BaseDrawerStates> {

  renderFooter() {
    const { loading } = this.state;
    return (
      <Space className="w-full justify-end">
        <Button onClick={() => this.close()}>{this.cancelText}</Button>
        <Button loading={loading} type="primary" onClick={() => this.onOk()}>{this.okText}</Button>
      </Space>
    )
  }
  
  render() {
    const { visible, loading } = this.state;
    return (
      <Drawer
        destroyOnClose={this.destroyOnClose}
        title={this.getTitle()}
        visible={visible}
        width={this.width}
        footer={this.renderFooter()}
        onClose={this.close}
      >
        <Spin spinning={loading}>
          {this.renderContent()}
        </Spin>
      </Drawer>
    )
  }
}
 
export default BaseDrawer;
