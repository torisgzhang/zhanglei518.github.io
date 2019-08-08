import React, { PureComponent } from 'react';
import logoImg from '@/statics/imgs/blog-logo.jpg';
import { Icon } from 'antd';
import { NavLink } from 'react-router-dom';
import {
  // SideTagWrapper,
  SideInfoWrapper,
  // Span
} from './style';
import { connect } from 'react-redux';
import { actionCreators } from './store';

class Side extends PureComponent {
  render() {
    const {
      // tagLists, 
      listTotalNum
    } = this.props;
    return (
      <div>
        {/* <SideTagWrapper className="clearfix">
          {
            tagLists.size ?
            tagLists.map((item, index) => {
              return (
                <Span background={item.get('color')} key={index} className="tag-lists fl">{item.get('tagName')}</Span>
              );
            }) :
            null
          }
        </SideTagWrapper> */}
        <SideInfoWrapper>
          <div className="header-icon">
            <img src={logoImg} alt=""/>
          </div>
          <p className="user-name">Torisg</p>
          <p className="desc">认真且怂，从一而终</p>
          <div className="num-list">
            <div className="lists">
              <span>26</span>
              <br />
              日志
            </div>
            <div className="lists">
              <span>2</span>
              <br />
              分类
            </div>
            <div className="lists">
              <NavLink to='/tag'>
                <span>{listTotalNum}</span>
                <br />
                标签
              </NavLink>
            </div>
          </div>
          <div className="recommend-link">
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/zhanglei518">
              <Icon type="github" style={{color: '#787878'}} />
            </a>
          </div>
        </SideInfoWrapper>
      </div>
      
    );
  }
  componentDidMount() {
    this.props.getTag();
  }
}

const mapState = (state) => ({
  tagLists: state.getIn(['side', 'tagLists']),
  listTotalNum: state.getIn(['side', 'listTotalNum'])
});
const mapDispatch = (dispatch) => ({
  getTag() {
    dispatch(actionCreators.getTagsFromNet());
  }
});

export default connect(mapState, mapDispatch)(Side);