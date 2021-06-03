import React from 'react';
import { Modal } from 'antd';
import BaseInteractiveCls, { BaseInteractiveClsProps, BaseInteractiveClsStates } from '@/templates/base-interactive-cls';

class BaseModal extends BaseInteractiveCls {
  
  render() {
    const { visible, loading } = this.state;
    return (
      <Modal
        okText={this.okText}
        cancelText={this.cancelText}
        width={this.width}
        visible={visible}
        title={this.getTitle()}
        onOk={this.onOk}
        onCancel={this.onCancel}
        confirmLoading={loading}
        maskClosable={this.maskClosable}
        footer={this.renderFooter()}
      >
        {this.renderContent()}
      </Modal>
    )
  }
}

export default BaseModal