import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import {
  ListItem,
  LoadMore
} from './style';
import { connect } from 'react-redux';
import { actionCreators } from '../../store/index';
import { Icon } from 'antd';

class List extends PureComponent {
  render() {
    const { handleLoadMore, listPage } = this.props;
    return (
      <div>
        {
          this.props.articleList.map((item, index) => {
            return ( 
              <Link style={{textDecoration: 'none'}} key={index} to={"/detail/" + item.get('id')} >
                <ListItem className="clearfix hover">
                    <div className="text-info">
                      <h3 className="title">{item.get("title")}</h3>
                      <p className="abstract">{item.get("desc")}</p>
                      <div className="article-info clearfix">
                        <div className="infos time fl">
                          <Icon type="clock-circle" theme="filled" />
                          2019-03-12
                        </div>
                        <div className="infos page-view fl">
                          <Icon type="eye" theme="filled" />
                          1920
                        </div>
                        <div className="infos tag fl">
                          <Icon type="pushpin" theme="filled" />
                          <span className="tags">Java</span>
                          <span className="tags">前端</span>
                          <span className="tags">Node.js</span>
                          <span className="tags">Javasdsds</span>
                        </div>
                      </div>
                    </div>
                </ListItem>
              </Link>
            )
          })
        }
        <LoadMore onClick={() => handleLoadMore(listPage)}>加载更多</LoadMore>
      </div>
    );
  }
}
const mapState = (state) => {
  return {
    articleList: state.getIn(["home", "articleList"]),
    listPage:  state.getIn(["home", "listPage"])
  }
}
const mapDispatch = (dispatch) => ({
  handleLoadMore(page) {
    dispatch(actionCreators.loadHomeMore(page));
  }
});
export default connect(mapState, mapDispatch)(List);