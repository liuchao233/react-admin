import React from 'react';

export interface BasePageProps extends React.HTMLAttributes<HTMLDivElement> {
  
}

export interface BasePageStates {
  
}

class BasicPage<P extends BasePageProps = BasePageProps, S extends BasePageStates = BasePageStates> extends React.PureComponent<P, S> {

  renderContent(): React.ReactNode {
    return this.props.children;
  }

  render() {
    return (
      <section className="bg-white p-4 h-full">
        {this.renderContent()}
      </section>
    )
  }
}

export default BasicPage;