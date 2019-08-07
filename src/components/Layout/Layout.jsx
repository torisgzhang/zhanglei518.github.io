import React, { PureComponent } from 'react';
import Header from '@/components/Header/Header.jsx';
import ScrollTop from "@/components/ScrollTop/ScrollTop.jsx";

class Layout extends PureComponent {
  render(){
    return (
      <div id="wrapper">
          <Header />
          <ScrollTop />
          <div>side</div>
          { this.props.children }
      </div>
    );
  }
}

export default Layout;