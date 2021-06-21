import { Form, Input } from 'antd';
import BaseFormDrawer from '@/templates/base-form-drawer';
import ActionSelect from '@/components/action-select';

class FormModal extends BaseFormDrawer {
  title = '简单列表'

  formLayout = {
    labelCol: {
      span: 4,
    },
    wrapperCol: {
      span: 20,
    },
  }

  renderFormItems() {
    return (
      <>
        <Form.Item label="标题">
          <Input placeholder="请输入" />
        </Form.Item>
        <Form.Item label="作者">
          <ActionSelect action="/dict/user"  />
        </Form.Item>
      </>
    )
  }
}

export default FormModal;