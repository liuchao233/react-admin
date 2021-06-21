import React from 'react';
import { Form, message } from 'antd';
import BaseInteractiveCls, { BaseInteractiveClsProps, BaseInteractiveClsStates } from '@/templates/base-interactive-cls';
import { FormInstance } from 'antd/lib/form';
import request from '@/utils/request';

export interface BaseFormInteractiveClsProps extends BaseInteractiveClsProps {
  
}

export interface BaseFormInteractiveClsStates extends BaseInteractiveClsStates {
  id?: React.Key;
}

class BaseFormInteractiveCls extends BaseInteractiveCls<BaseFormInteractiveClsProps, BaseFormInteractiveClsStates> {
  pk = 'id';
  initialValues: any = undefined;
  urls: FormUrls = {};

  formLayout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };

  formAllItemLayout = {
    labelCol: {
      span: 4,
    },
    wrapperCol: {
      span: 20,
    },
  };

  formRef = React.createRef<FormInstance>();

  constructor(props: BaseFormInteractiveClsProps) {
    super(props);
    this.getInitialValues = this.getInitialValues.bind(this);
  }
  
  getInitialValues() {
    return this.initialValues;
  }

  isEdit(): boolean {
    return Boolean(this.state.id);
  }

  add(values: any = {}) {
    const initialValues = this.getInitialValues();
    if (initialValues) {
      this.edit({
        ...initialValues,
        ...values,
      })
    } else {
      this.edit(values)
    }
  }

  edit(values: any) {
    // loadData
    const pk = values[this.pk as keyof typeof values]
    if (pk && this.urls.detail) {
      request.get<any, http.DetailResponse>(this.urls.detail, {
        params: { [this.pk]: pk }
      })
      .then(data => {
        this.setState({
          id: data[this.pk],
          data: values,
          visible: true,
        }, () => this.afterEditShow(values))
      })
      .catch()
    } else {
      this.setState({
        visible: true,
        id: values[this.pk] as any,
        data: values,
      }, () => this.afterEditShow(values))
    }
  }

  afterEditShow(data: any) {
    this.formRef.current?.setFieldsValue(data);
  }

  beforeSubmit(data: any): any {
    return data;
  }

  submit(values: any) {
    let url = this.urls.submit;
    if (!url) {
      url = this.isEdit() ? this.urls.update : this.urls.add;
    }

    if (!url) return;

    this.setState({
      loading: true,
    })

    const formData = this.beforeSubmit(values);

    request.post(url, {
      data: formData,
    }).then(_ => {
      message.success(
        this.urls.submit
        ? '提交成功'
        : this.isEdit()
        ? '修改成功'
        : '添加成功',
      );
      this.close();
      this.props.reloadData?.();
    }).catch(_ => {
      this.setState({
        loading: false,
      })
    })
  }
  
  onSubmit() {
    this.formRef.current?.submit();
  }

  renderFormItems(): React.ReactNode {
    return null
  }

  renderContent() {
    return (
      <Form {...this.formLayout} ref={this.formRef} onFinish={this.submit}>
        {this.renderFormItems()}
      </Form>
    );
  }
}

export default BaseFormInteractiveCls