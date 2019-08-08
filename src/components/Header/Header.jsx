import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { actionCreators as loginActionCreators } from '@/pages/login/store';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink  } from 'react-router-dom';
import {
  HeaderWrapper,
  HeaderWrapperInner,
  Logo
} from './style.js';

class Header extends PureComponent {
  render() {
    return (
      <HeaderWrapper>
        <HeaderWrapperInner>
          <Navbar collapseOnSelect expand="lg" >
            <NavLink to="/">
              <Logo></Logo>
            </NavLink>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto">
                <NavLink activeClassName="selected" to="/home">HOME</NavLink >
                <NavLink activeClassName="selected" to="/tag">TAG</NavLink >
                <NavLink activeClassName="selected" to="/about">ABOUT</NavLink >
              </Nav>
            </Navbar.Collapse>
          </Navbar>
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
    //下面两种方等价的  state.getIn([a, b])表示获取a模块（store）里面的b这个值
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    activeIndex: state.getIn(['header', 'activeIndex']),
    loginState: state.getIn(['login', 'loginState']),
    userInfo: state.getIn(['login', 'userInfo']),
    isMobile: state.getIn(['app', 'isMobile']),
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus(list) { //这个list是fromJS转换后的immutable对象 里面的size表示长度
      (list.size === 0) && dispatch(actionCreators.getList());
      dispatch(actionCreators.searchFocuse());
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur());
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter());
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave());
    },
    handleClickChange(page, totalPage, spin) {
      let originAngle = spin.style.transform.replace(/[^0-9]/ig, ''); //去除所有非数字的字符
      if (originAngle) {
        originAngle = parseInt(originAngle);
      } else {
        originAngle = 0;
      }
      spin.style.transform = "rotate(" + (originAngle + 360) + "deg)";
      if (page < totalPage) {
        dispatch(actionCreators.changePage(page + 1));
      } else {
        dispatch(actionCreators.changePage(1));
      }
    },
    logOut() {
      dispatch(loginActionCreators.Logout());
    },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);