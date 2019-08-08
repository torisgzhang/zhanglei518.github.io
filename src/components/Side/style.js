import styled from 'styled-components';
import lessVariables from '@/common/styles/variable-less.js';

export const SideTagWrapper = styled.div`
  width: 100%;
  padding: 20px;
  margin-top: 20px;
  box-sizing: border-box;
  box-shadow: ${lessVariables.LESS_VARIABLES.boxShadowBase};
  background: #fff;
`;
export const Span = styled.span`
  margin: 0 10px 10px 0;
  color: #fff;
  font-size: 12px;
  padding: 2px 5px;
  border-radius: 3px;
  border: 1px solid #ccc;
  background: ${props => props.background}
`;
export const SideInfoWrapper = styled.div`
  padding: 20px;
  margin-top: 20px;
  box-sizing: border-box;
  box-shadow: ${lessVariables.LESS_VARIABLES.boxShadowBase};
  text-align: center;
  background: #fff;
  .header-icon {
    width: 100px;
    height: 100px;
    border-radius: 100%;
    overflow: hidden;
    margin: 0 auto;
    box-shadow: ${lessVariables.LESS_VARIABLES.boxShadowBase};
    img {
      width: 100px;
      height: 100px;
    }
  }
  .user-name {
    margin-top: 10px;
    margin-bottom: 5px;
    font-size: 18px;
    font-weight: 600;
  }
  .desc {
    margin-bottom: 15px;
    font-size: 12px;
    color: #aaa;
  }
  .num-list {
    display: flex;
    display: -webkit-flex;
    justify-content: space-around;
    .lists {
      font-size: 12px;
      color: #aaa;
      a {
        color: #aaa;
        text-decoration: none;
      }
      span {
        font-size: 16px;
        color: #333;
        font-weight: 600; 
      }
    }
  }
  .recommend-link {
    a {
      font-size: 30px;
    }
  }
`;