import React from 'react';
import { useAccess } from './index';

export default function(code: string) {
  return function (WrappedComponent: React.ComponentClass): any {
    return function (props: any) {
      const acc = useAccess();
      const pageAccess = acc.PAGE_ACCESS[code]?.buttons || {};
      return (
        <>
          <WrappedComponent {...props} access={pageAccess} />
        </>
      );
    };
  };
}