import React from 'react';

export interface BasicPageProps extends React.HTMLAttributes<HTMLDivElement> {
  
}

class BasicPage<P extends BasicPageProps = BasicPageProps> extends React.PureComponent<P> {
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