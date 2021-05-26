import React from 'react';
import './styles.less';

const UserLayout: React.FC = function(props) {
  const { children } = props;
  return (
    <section className="user-layout relative flex flex-col items-center justify-center">
      <main className="user-layout-content rounded">
        {children}
      </main>
    </section>
  )
}

export default UserLayout
