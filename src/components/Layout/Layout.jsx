import React from 'react';
import Header from '@/components/Header/Header.jsx';
import Side from '@/components/Side/Side.jsx';
import ScrollTop from "@/components/ScrollTop/ScrollTop.jsx";
import {
  LayoutWrapper
} from './style';
import { Row, Col } from 'antd';

const Layout = (props) => {
  return (
    <div id="wrapper">
        <Header />
        <ScrollTop />
        <LayoutWrapper>
          <Row>
            <Col className="left-col" md={5}>
              <Side></Side>
            </Col>
            <Col className="right-col" md={19}>
              { props.children }
            </Col>
          </Row>
        </LayoutWrapper>
    </div>
  );
} 

export default Layout;