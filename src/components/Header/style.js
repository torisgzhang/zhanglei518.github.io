import styled from 'styled-components';
import lessVariables from '@/common/styles/variable-less.js';
import { device } from '@/common/styles/device';
import logoPic from '@/statics/imgs/blog-logo.jpg';

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 58px;
  background: #fff;
  position: fixed;
  top: 0;
  z-index: 1;
  box-shadow: ${lessVariables.LESS_VARIABLES.boxShadowBase};
  
`;

export const HeaderWrapperInner = styled.div`
  height: 58px;
  line-height: 58px;
  margin: 0 auto;
  padding: 0 15px;
  box-sizing: border-box;
  @media ${device.tablet} {
    max-width: 1080px;
  }
  a {
    color: #787878;
    font-weight: bold;
    font-size: 18px;
  }
  .little-nav {
    cursor: pointer;
    @media ${device.tablet} {
      display: none;
    }
    .head-menu {
      font-size: 30px;
      line-height: 65px;
    }
  }
  .nav {
    display: none;
    @media ${device.tablet} {
      display: block;
    }
    a {
      font-size: 14px;
      margin-left: 10px;
      font-weight: bold;
      &.selected {
        color: #32b67a;
      }
    }
  }
  
`;

export const Logo = styled.div`
  width: 50px;
  height: 48px;
  border-radius: 5px;
  background: url(${logoPic});
  background-size: contain;
`;