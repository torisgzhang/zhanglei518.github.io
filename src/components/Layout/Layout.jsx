import React, { PureComponent } from 'react';
import Header from '@/components/Header/Header.jsx';
import Side from '@/components/Side/Side.jsx';
import ScrollTop from "@/components/ScrollTop/ScrollTop.jsx";
import {
  LayoutWrapper
} from './style';
import { Container, Row, Col } from 'react-bootstrap';
class Layout extends PureComponent {
  render(){
    return (
      <div id="wrapper">
          <Header />
          <ScrollTop />
          <LayoutWrapper>
            <Container>
              <Row>
                <Col sm={3}>
                  <Side></Side>
                </Col>
                <Col sm={9}>
                  { this.props.children }
                </Col>
              </Row>
            </Container>
          </LayoutWrapper>
          
      </div>
    );
  }
}

export default Layout;