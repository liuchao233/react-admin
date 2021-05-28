import React from 'react';
import * as Icons from '@ant-design/icons';
import { camelCase, upperFirst } from 'lodash'

export interface IconProps extends React.HTMLAttributes<HTMLElement> {
  name: string;
  type?: 'outlined' | 'filled' | 'two-tone';
  rotate?: number;
  spin?: boolean;
}

const Icon: React.FC<IconProps> = function(props) {
  const { name, type = 'outlined', children, ...restProps } = props;

  const iconName = upperFirst(camelCase(name)) + upperFirst(camelCase(type)) as keyof typeof Icons;
  const Component = Icons[iconName] as React.FC
  
  return (
    <Component {...restProps} />
  )
}

export default Icon;