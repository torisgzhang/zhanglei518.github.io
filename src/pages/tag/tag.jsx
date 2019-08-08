import React, { PureComponent } from 'react';
import {
  TagWrapper,
  TagList,
  ArticleList
} from './style';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Input, Icon, List } from 'antd';
const { Search } = Input;

class Tag extends PureComponent {
  render() {
    const { tagLists, articleList } = this.props;
    return (
      <TagWrapper>
        <Search
          placeholder="search something..."
          onSearch={value => console.log(value)}
          enterButton
        />
        <TagList>
          <Link className="all" to='/'>
            <span>全部</span>
            <span className="num">99</span>
          </Link>
          {
            tagLists.map((item, index) => {
              return (
                <Link className="hover" key={item.get('tagId')} to='/'>
                  <span>{item.get('tagName')}</span>
                  <span className="num">{item.get('num')}</span>
                </Link>
              );
            })
          }
        </TagList>
        <ArticleList>
          <List
            dataSource={articleList}
            renderItem={(item, index) => (
              <List.Item>
                <Link className="hover" style={{textDecoration: 'none'}} key={index} to={"/detail/" + item.get('id')} >
                  <h3 className="title">{item.get("title")}</h3>
                  <div className="article-info clearfix">
                    <div className="infos time fl">
                      <Icon type="clock-circle" theme="filled" />
                      2019-03-12
                    </div>
                    <div className="infos tag fl">
                      <Icon type="pushpin" theme="filled" />
                      <span className="tags">Java</span>
                      <span className="tags">前端</span>
                      <span className="tags">Node.js</span>
                      <span className="tags">Javasdsds</span>
                    </div>
                  </div>
                </Link>
              </List.Item>
            )}
          />
        </ArticleList>
      </TagWrapper>
    );
  }
}

const mapState = (state) => ({
  tagLists: state.getIn(['side', 'tagLists']),
  articleList: state.getIn(["home", "articleList"])
});
export default connect(mapState, null)(Tag);