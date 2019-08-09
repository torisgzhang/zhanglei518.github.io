import styled from 'styled-components';
import { device } from '@/common/styles/device';
import lessVariables from '@/common/styles/variable-less.js';

export const SideInfoWrapper = styled.div`
  position: fixed;
  top: 57px;
  z-index: 1;
  width: 100%;
  height: 0;
  box-shadow: 0 10px 10px rgba(0,0,0,0.2);
  @media ${device.mobileS} {
    padding: 0;
    height: 0;
    &.isShow {
      height: 252px;
    }
    &.slide-enter {
      transition: all .2s ease-out;
    }
    &.slide-enter-active {
      height: 252px;
    }
    &.slide-exit {
      transition: all .2s ease-out;
    }
    &.slide-exit-active {
      height: 0;
    }
  }
  @media ${device.tablet} {
    position: static;
    height: 282px;
    padding: 20px 0;
    position: none;
    margin-top: 20px;
    box-sizing: border-box;
    box-shadow: ${lessVariables.LESS_VARIABLES.boxShadowBase};
  }
  overflow: hidden;
  text-align: center;
  background: #fff;
  .header-icon {
    width: 50%;
    max-width: 80px;
    border-radius: 100%;
    overflow: hidden;
    margin: 0 auto;
    box-shadow: ${lessVariables.LESS_VARIABLES.boxShadowBase};
    img {
      width: 100%;
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