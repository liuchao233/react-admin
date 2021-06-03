import React from 'react';
import BasePage, { BasePageProps, BasePageStates } from '@/templates/base-page';
import { Table, Modal, Space, Button, Form, Row, Col, message } from 'antd';
import { FormInstance } from 'antd/lib/form';
import { ColumnsType, TablePaginationConfig, TableRowSelection } from 'antd/lib/table/interface';
import { PaginationProps } from 'antd/lib/pagination';
import request from '@/utils/request';

export interface BaseListPageProps extends BasePageProps {
  
}

export interface BaseListPageStates extends BasePageStates {
  loading: boolean;
  list: any[],
  selectedRowKeys: React.Key[],
}

class BaseListPage extends BasePage<BaseListPageProps, BaseListPageStates> {
  rowKey = 'id';
  bordered = true;
  columns: ColumnsType<any>= []
  showPagination = true;

  pagination: PaginationProps = {
    current: 1,
    pageSize: 20,
    total: 0,
  }

  urls: Urls = {}

  searchFormRef = React.createRef<FormInstance>();
  searchFormInitialValues = {};
  searchFormValues = {};

  selectedRows: any[] = [];

  state: BaseListPageStates = {
    loading: false,
    list: [],
    selectedRowKeys: [],
  }

  constructor(props: BaseListPageProps) {
    super(props);

    this.getSearchParams = this.getSearchParams.bind(this);
    this.loadData = this.loadData.bind(this);
    this.reloadData = this.reloadData.bind(this);
    this.onAdd = this.onAdd.bind(this);
    this.onEdit = this.onEdit.bind(this);
    this.onView = this.onView.bind(this);
    this.remove = this.remove.bind(this);
    this.onRemove = this.onRemove.bind(this);
    this.onRowSelectionChange = this.onRowSelectionChange.bind(this);
    this.onTableChange = this.onTableChange.bind(this);
    this.onSearchFormSubmit = this.onSearchFormSubmit.bind(this);
    this.onResetSearchForm = this.onResetSearchForm.bind(this);
    this.renderSearchFormItems = this.renderSearchFormItems.bind(this);
    this.renderSearchForm = this.renderSearchForm.bind(this);
    this.renderActionItems = this.renderActionItems.bind(this);
    this.renderActions = this.renderActions.bind(this);
    this.renderOperation = this.renderOperation.bind(this);
    this.renderFormModal = this.renderFormModal.bind(this);
    this.renderTable = this.renderTable.bind(this);
  }

  componentDidMount() {
    this.getSearchParams = this.getSearchParams.bind(this);
    this.loadData = this.loadData.bind(this);
  }

  getSearchParams(): any {
    const pagination = this.pagination;
    const params = {
      ...this.searchFormValues,
      current: pagination.current,
      size: pagination.pageSize,
    }
    return params;
  } 

  loadData() {
    if (!this.urls.list) {
      console.warn('please set urls.list');
      return;
    }

    const params = this.getSearchParams();

    this.setState({
      loading: true,
    })    

    request.get<any, Responses>(this.urls.list, {
      params: params,
    })
    .then(res => {
      if (res && res.success) {
        var data = res.data;
        if (Array.isArray(data)) {
          this.setState({
            list: data,
            loading: false,
          })
        } else {
          this.pagination = {
            current: data.current,
            pageSize: data.size,
            total: data.total,
          }
          this.setState({
            loading: false,
            list: data,
          })
        }
      }
    })
    .catch(_ => {
      this.setState({
        loading: false,
      })
    })
  }

  reloadData() {
    this.pagination.current = 1;
    this.selectedRows = [];
    this.setState({
      list: [],
      selectedRowKeys: [],
    })
    this.loadData();
  }

  onAdd() {
    // this.formModalRef.current?.add();
  }

  onEdit(record: any) {
    // this.formModalRef.current?.edit(data);
  }

  onView() {
    
  }

  remove(ids: React.Key[]) {
    if (!this.urls.remove) {
      console.warn('please add urls.list');
      return;
    }

    request.post<any, Responses>(this.urls.remove, {
      data: { ids: ids.join(',') }
    })
    .then((res) => {
      message.success(res.message);
      this.reloadData();    
    })
    .catch(_ => {
      
    })
  }

  onRemove(ids: React.Key[]) {
    Modal.confirm({
      title: '删除确认',
      content: '是否删除选中记录?',
      okText: '确认',
      okType: 'danger',
      okButtonProps: {
        type: 'primary',
      },
      cancelText: '取消',
      onOk: () => this.remove(ids),
    });
  }

  onRowSelectionChange(selectedRowKeys: React.Key[], selectedRows: any[]) {
    this.selectedRows = selectedRows
    this.setState({
      selectedRowKeys,
    });
  }

  onTableChange(pagination: TablePaginationConfig) {
    this.pagination.current = pagination.current;
    this.pagination.pageSize = pagination.pageSize;
    this.loadData()
  }

  onSearchFormSubmit(values: any) {
    this.searchFormValues = values;
    this.loadData();
  }

  onResetSearchForm() {
    this.searchFormValues = {};
    this.searchFormRef.current?.resetFields();
    this.reloadData();
  }

  renderSearchFormItems(): React.ReactNode {
    return null
  }

  renderSearchForm() {
    return (
      <Form
        ref={this.searchFormRef}
        layout="inline"
        className="mb-6"
        initialValues={this.searchFormInitialValues}
        onFinish={this.onSearchFormSubmit}
      >
        <Row gutter={24} className="w-full">
          {this.renderSearchFormItems()}
          <Col md={6}>
            <Form.Item>
              <Space>
                <Button type="primary" htmlType="submit">查询</Button>
                <Button onClick={this.onResetSearchForm}>重置</Button>
              </Space>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    )
  }

  renderActionItems(): React.ReactNode  {
    const { selectedRowKeys } = this.state;
    const disabled = selectedRowKeys.length == 0;
    return (
      <Space>
        <Button 
          type="primary"
          onClick={this.onAdd}
        >
          新增
        </Button>
        <Button 
          type="primary" 
          danger 
          disabled={disabled}
          onClick={() => this.onRemove(selectedRowKeys)}
        >
          删除
        </Button>
      </Space>
    )
  }

  renderActions(): React.ReactNode  {
    return (
      <section className="mb-6">
        {this.renderActionItems()}
      </section>
    )
  }

  renderOperation(text: string, record: any): React.ReactNode  {
    return (
      <Space>
        <a  onClick={() => this.onEdit(record)}>修改</a>
        <a onClick={() => this.onRemove([record.id])}>删除</a>
      </Space>
    )
  }

  renderFormModal() {
    
  }

  renderTable(): React.ReactNode {
    return (
      <Table 
        rowKey={this.rowKey}
        bordered={this.bordered}
        columns={this.columns}
        onChange={this.onTableChange}
      />        
    )
  }

  renderContent() {
    return (
      <>
        {this.renderFormModal()}
        {this.renderSearchForm()}
        {this.renderActions()}
        {this.renderTable()}
      </>
    )
  }
}

export default BaseListPage;