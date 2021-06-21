import React, { useState, useEffect } from 'react';
import { Select } from 'antd';
import { SelectProps } from 'antd/lib/select';
import request from '@/utils/request';

const { Option } = Select;

// TODO: 这里单个页面多次请求同一个接口的时候不会进行拦截，需要调整一下
export interface ActionSelectProps extends SelectProps<any> {
  action?: ((params: any) => Promise<any>) | string; 
  actionParams?: string | Record<string, any>;
  labelField?: string;
  valueField?: string;
}

const ActionSelect: React.FC<ActionSelectProps> = function(props) {
  const {
    children,
    action,
    actionParams,
    labelField = 'dictValue',
    valueField = 'dictKey',
    placeholder = '请选择',
    ...restProps
  } = props;
  const [options, setOptions] = useState<any>([]);

  useEffect(() => {
    if (!action) {
      return
    }

    const params = typeof actionParams === 'string' ? { code: actionParams } : actionParams;
    const httpRequest = typeof action === 'string' ? request.get(action, { params }) : action(params);
    httpRequest
      .then(res => {
        setOptions(res)
      })
      .catch(_ => {})
  }, [action, actionParams])

  return (
    <Select placeholder={placeholder} {...restProps}>
      {options.map((o: any) => (
        <Option key={o[valueField]} value={o[valueField]}>
          {o[labelField]}
        </Option>
      ))}
    </Select>
  )
}

export default ActionSelect;