import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import {
  WelcomeWrapperPc,
  WelcomeWrapperMobile
} from './style';

class Welcome extends PureComponent {
  render() {
    const { isMobile } = this.props;
    if(isMobile) {
      return (
        <div>
          <WelcomeWrapperMobile isMobile={isMobile}>
            <div className="mask">
              <div className="info">
                <img src="http://res-1258329261.picgz.myqcloud.com/usericon/b8362e15-3659-4cd6-8ab0-69ffa6df9698.jpg!usericon200_200" alt=""/>
                <p>认真且怂，从一而终</p>
                <div>
                  <Link to='/home'>BLOG</Link>
                  <Link to='/home'>RESUME</Link>
                </div>
              </div>
            </div>
          </WelcomeWrapperMobile>
        </div>
      );
    } else {
      return (
        <WelcomeWrapperPc isMobile={isMobile}>
          <div className="mask">
            <div className="info">
              <img src="http://res-1258329261.picgz.myqcloud.com/usericon/b8362e15-3659-4cd6-8ab0-69ffa6df9698.jpg!usericon200_200" alt=""/>
              <p>认真且怂，从一而终</p>
              <div>
                <Link to="/home">BLOG</Link>
                <Link to="/home">RESUME</Link>
              </div>
            </div>
          </div>
        </WelcomeWrapperPc>
      );
    }
  }
}
const mapState = (state) => ({
  isMobile: state.getIn(['app', 'isMobile'])
});

export default connect(mapState)(Welcome);