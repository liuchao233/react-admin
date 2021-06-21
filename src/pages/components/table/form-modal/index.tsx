import { Form, Input } from 'antd';
import BaseFormDrawer from '@/templates/base-form-drawer';

class FormModal extends BaseFormDrawer {
  renderFormItems() {
    return (
      <>
        <Form.Item label="标题">
          <Input placeholder="请输入" />
        </Form.Item>
        <Form.Item label="">
          <Input placeholder="请输入" />
        </Form.Item>
      </>
    )
  }
}

export default FormModal;