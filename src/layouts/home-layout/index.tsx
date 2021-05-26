import React from 'react';
import './styles.less'

const HomeLayout: React.FC = function(props) {
  const { children } = props;
  return (
    <section className="home-layout">
      <header>
        header
      </header>
      <main>
        {children}
      </main>
      <footer>
        footer
      </footer>
    </section>  
  )
}

export default HomeLayout