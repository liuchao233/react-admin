import React from 'react';
import BaseListPage, { BaseListPageProps } from '@/templates/base-list-page';
import { ColumnsType } from 'antd/lib/table';
import { AlignType } from 'rc-table/lib/interface';

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
      title: '头像',
      dataIndex: 'avatar',
    },
    {
      title: '点击量',
      dataIndex: 'clickCount',
    },
    {
      title: '开关',
      dataIndex: 'switch',
    },
    {
      title: '状态',
      dataIndex: 'status',
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
}

export default TablePage;