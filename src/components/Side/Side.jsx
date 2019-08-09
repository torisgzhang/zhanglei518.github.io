import React, { PureComponent } from 'react';
import logoImg from '@/statics/imgs/blog-logo.jpg';
import { Icon } from 'antd';
import { NavLink } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import {
  SideInfoWrapper,
} from './style';
import { connect } from 'react-redux';
import { actionCreators } from './store';

class Side extends PureComponent {
  render() {
    const {
      listTotalNum,
      showMobileNavItem
    } = this.props;
    return (
      <CSSTransition
        timeout={200}
        in={showMobileNavItem}
        classNames="slide"
      >
        <SideInfoWrapper className={showMobileNavItem ? 'SideInfoWrapper isShow' : 'SideInfoWrapper'}>
          <div className="header-icon">
            <NavLink to='/home'>
              <img src={logoImg} alt=""/>
            </NavLink>
          </div>
          <p className="user-name">Torisg</p>
          <p className="desc">认真且怂，从一而终</p>
          <div className="num-list">
            <div className="lists">
              <NavLink to='/home'>
                <span>{listTotalNum}</span>
                <br />
                HOME
              </NavLink>
            </div>
            <div className="lists">
              <NavLink to='/tag'>
                <span>{listTotalNum}</span>
                <br />
                TAG
              </NavLink>
            </div>
            <div className="lists">
              <NavLink to='/about'>
                <span>{listTotalNum}</span>
                <br />
                ABOUT
              </NavLink>
            </div>
          </div>
          <div className="recommend-link">
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/zhanglei518">
              <Icon type="github" style={{color: '#787878'}} />
            </a>
          </div>
        </SideInfoWrapper>
      </CSSTransition>
    );
  }
  componentDidMount() {
    this.props.getTag();
  }
}

const mapState = (state) => ({
  showMobileNavItem: state.getIn(['header', 'showMobileNavItem']),
  listTotalNum: state.getIn(['side', 'listTotalNum'])
});
const mapDispatch = (dispatch) => ({
  getTag() {
    dispatch(actionCreators.getTagsFromNet());
  }
});

export default connect(mapState, mapDispatch)(Side);