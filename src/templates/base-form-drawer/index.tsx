import { Space, Button, Drawer, Spin } from 'antd';
import BaseFormInteractiveCls from '../base-form-interactive-cls';

class BaseFormDrawer extends BaseFormInteractiveCls {

  renderFooter() {
    const { loading } = this.state;
    return (
      <Space className="w-full justify-end">
        <Button onClick={() => this.close()}>{this.cancelText}</Button>
        <Button loading={loading} type="primary" onClick={() => this.onSubmit()}>{this.okText}</Button>
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


export default BaseFormDrawer
