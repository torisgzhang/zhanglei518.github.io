import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import {
  WelcomeWrapper
} from './style';

class Welcome extends PureComponent {
  render() {
    return (
      <WelcomeWrapper>
        <div className="mask">
          <div className="info">
            <img src="http://res-1258329261.picgz.myqcloud.com/usericon/b8362e15-3659-4cd6-8ab0-69ffa6df9698.jpg!usericon200_200" alt=""/>
            <p>认真且怂，从一而终</p>
            <div>
              <Link to="/home"><span>HOME</span></Link>
              <Link to="/home"><span>TAG</span></Link>
              <Link to="/home"><span>ABOUT</span></Link>
            </div>
          </div>
        </div>
      </WelcomeWrapper>
    );
  }
}
export default Welcome;