import React from 'react';
import { Tag, Switch, Col, Form, Input, Alert } from 'antd';
import BaseListPage from '@/templates/base-list-page';
import { ColumnsType } from 'antd/lib/table';
import { AlignType } from 'rc-table/lib/interface';
import FormModal from './form-modal';

class TablePage extends BaseListPage {
  defaultColumnsAlign: AlignType = 'center';

  columns: ColumnsType<any> = [
    {
      title: '序号',
      render: this.renderRowOrder,
    },
    {
      title: '标题',
      dataIndex: 'title',
    },
    {
      title: '作者',
      dataIndex: 'author',
    },
    {
      title: '评级',
      dataIndex: 'rate',
    },
    {
      title: '点击量',
      dataIndex: 'clickCount',
    },
    {
      title: '开关',
      dataIndex: 'switch',
      render: text => <Switch checked={text} />
    },
    {
      title: '状态',
      dataIndex: 'status',
      render: text => <Tag color={text === 'published' ? 'green' : 'blue'}>{text}</Tag>
    },
    {
      title: '时间',
      dataIndex: 'time',
    },
    {
      title: '操作',
      render: this.renderRowOperation,
    }
  ]

  urls: ListUrls = {
    list: '/components/table/list',
    remove: '/component/table/remove',
  }

  formModalRef = React.createRef<FormModal>();

  renderAlert() {
    return (
      <Alert message="简单表格示例" type="success" showIcon className="mb-6" />
    )
  }

  renderSearchFormItems() {
    return (
      <>
        <Col md={6}>
          <Form.Item label="标题" name="title">
            <Input placeholder="请输入" />
          </Form.Item>
        </Col>
      </>
    )
  }

  renderFormModal() {
    return (
      <>
        <FormModal ref={this.formModalRef} reloadData={this.reloadData} />
      </>
    )
  }
}

export default TablePage;