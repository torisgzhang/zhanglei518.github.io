import styled from "styled-components";
import lessVariables from '@/common/styles/variable-less.js';

export const TagWrapper = styled.div`
  width: 100%;
  margin-top: 20px;
  padding: 20px;
  background: #fff;
  box-shadow: ${lessVariables.LESS_VARIABLES.boxShadowBase};
  .ant-input:focus  {
    box-shadow: none;
  }
`;

export const TagList = styled.div`
  width: 100%;
  margin-top: 20px;
  padding-top: 20px;
  background: #fff;
  overflow: hidden;
  .all {
    color: ${lessVariables.LESS_VARIABLES.primaryColor};
    background: #ebebeb;
    .num {
      color: #fff;
    }
    &:hover {
      background: #ddd;
    }
  }
  a {
    transition-property: all;
    transition-duration: .5s;
    transition-timing-function: ease;
    float: left;
    color: #fff;
    padding: 5px 15px;
    border-radius: 20px;
    font-size: 14px;
    font-weight: bold;
    background: rgba(50, 182, 122, .5);
    text-decoration: none;
    margin-right: 10px;
    margin-bottom: 15px;
    position: relative;
    .num {
      position: absolute;
      right: -5px;
      top: -10px;
      font-size: 10px;
      display: inline-block;
      width: 20px;
      height: 20px;
      line-height: 20px;
      text-align: center;
      border-radius: 100%;
      background: #aaa;
    }
    &.hover:hover {
      background: ${lessVariables.LESS_VARIABLES.primaryColor};
    }
  }
`;

export const ArticleList = styled.div`
  width: 100%;
  padding: 20px 0;
  background: #fff;
  overflow: hidden;
  .ant-list-item {
    padding: 20px 0;
  }
  a {
    display: inline-block;
    width: 100%;
    .title {
      color: #333;
      margin-bottom: 5px;
      font-size: 16px;
    }
    .article-info {
      color: #bbb;
      .infos {
        margin-right: 20px;
        .anticon {
          color: #787878;
          position: relative;
          bottom: 4px;
          margin-right: 3px;
          font-size: 12px;
        }
        .tags {
          color: #fff;
          font-size: 12px;
          padding: 1px 5px;
          margin-right: 5px;
          border-radius: 3px;
          border: 0.5px solid #eaeaea;
          background: rgba(50, 182, 122, .5);
        }
      }
    }
  }
`;