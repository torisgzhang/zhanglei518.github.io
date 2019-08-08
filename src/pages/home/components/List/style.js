import styled from 'styled-components';
import lessVariables from '@/common/styles/variable-less.js';

export const ListItem = styled.div`
  width: 100%;
  padding: 20px 20px 10px 20px;
  background: #fff;
  margin-bottom: 10px;
  box-sizing: border-box;
  box-shadow: ${lessVariables.LESS_VARIABLES.boxShadowBase};
  .title {
    color: #333;
    margin-bottom: 5px;
    font-size: 18px;
  }
  .abstract {
    font-size: 14px;
    color: #aaa;
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
  p {
    margin-bottom: 0;
  }
  &.hover:hover {
    box-shadow: 0 1px 10px rgba(50, 182, 122, .5);
  }
  
`;
export const LoadMore = styled.div`
  margin-top: 30px;
  cursor: pointer;
  width: 100%;
  height: 30px;
  line-height: 30px;
  text-align: center;
  border-radius: 20px;
  background: #fff;
`;