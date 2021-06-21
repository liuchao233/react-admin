import React from 'react';
import AccessContext from './context';

const AccessProvider: React.FC = function(props) {
  const { children } = props;

  // TODO：init access
  const access = {};

  return React.createElement(
    AccessContext.Provider,
    { value: access },
    children,
  )
}

export default AccessProvider;