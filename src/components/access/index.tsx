import React, { useContext } from 'react';
import AccessContext from './context';

export const useAccess = function() {
  const access = useContext(AccessContext);
  return access;
}

export interface AccessProps {
  accessible: boolean;
  fallback?: React.ReactNode;
}

const Access: React.FC<AccessProps> = function(props) {
  const { children, accessible, fallback } = props;
  return (
    <>
      {accessible ? children : fallback }
    </>
  )
}

export default Access;
