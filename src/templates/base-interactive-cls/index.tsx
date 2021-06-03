import React from 'react';

export interface BaseInteractiveClsProps {
  
}

export interface BaseInteractiveClsStates extends Record<string, any> {
  id?: React.Key;
  visible: boolean;
  loading: boolean;
  [x: string]: any;
}

class BaseInteractiveCls<P extends BaseInteractiveClsProps = BaseInteractiveClsProps, S extends BaseInteractiveClsStates = BaseInteractiveClsStates> extends React.PureComponent<P, S | BaseInteractiveClsStates> {
  pk = 'id';
  title = '';
  width: string | number = 500;
  okText = '确认';
  cancelText = '取消';
  footer?: React.ReactNode; 
  maskClosable = true;
  destroyOnClose = false

  state: BaseInteractiveClsStates = {
    id: '',
    visible: false,
    loading: false,
  }

  constructor(props: P) {
    super(props);

    this.close = this.close.bind(this);
    this.show = this.show.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.onOk = this.onOk.bind(this);
    this.getTitle = this.getTitle.bind(this);
    this.isVisible = this.isVisible.bind(this);
    this.isVisible = this.isVisible.bind(this);
  }

  close() {
    this.setState({
      visible: false,
    })
  }

  show() {
    this.setState({
      visible: true,
    })
  }

  onCancel() {
    this.close()
  }

  onOk() {
    this.close();
  }

  getTitle() {
    return this.title;
  }

  isVisible() {
    return this.state.visible;
  }

  renderContent(): React.ReactNode {
    return null;
  }

  renderFooter(): React.ReactNode {
    return this.footer
  }
  
  render(): React.ReactNode {
    return null;
  }
  
}

export default BaseInteractiveCls