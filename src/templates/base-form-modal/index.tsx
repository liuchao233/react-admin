import { Modal } from 'antd';
import BaseFormInteractiveCls from '../base-form-interactive-cls';

class BaseFormModal extends BaseFormInteractiveCls {
  render() {
    const { visible, loading } = this.state;
    return (
      <Modal
        okText={this.okText}
        cancelText={this.cancelText}
        width={this.width}
        visible={visible}
        title={this.getTitle()}
        onOk={this.onSubmit}
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

export default BaseFormModal;
