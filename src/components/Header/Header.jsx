import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { NavLink  } from 'react-router-dom';
import { Icon  } from 'antd';
import {
  HeaderWrapper,
  HeaderWrapperInner
} from './style.js';

class Header extends PureComponent {
  render() {
    const { showMobileNavItem, handleNavItem } = this.props;
    return (
      <HeaderWrapper>
        <HeaderWrapperInner className="clearfix">
          <NavLink className="fl logo" to="/home">Torisg Blog</NavLink>
          <div className="fr nav">
            <NavLink activeClassName="selected" to="/home">HOME</NavLink>
            <NavLink activeClassName="selected" to="/tag">TAG</NavLink>
            <NavLink activeClassName="selected" to="/about">ABOUT</NavLink>
          </div>
          <div onClick={() => handleNavItem(showMobileNavItem)} className="fr little-nav menu">
            <Icon type="menu" className="head-menu" />
          </div>
        </HeaderWrapperInner>
      </HeaderWrapper>
    );
  }
  hancleClickNav(path) {
    this.props.navItemAvtive(path)
  }
}

const mapStateToProps = (state) => {
  return {
    showMobileNavItem: state.getIn(['header', 'showMobileNavItem']),
    isMobile: state.getIn(['app', 'isMobile'])
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleNavItem(showMobileNavItem) {
      dispatch(actionCreators.mobileNavItem(!showMobileNavItem));
    },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);