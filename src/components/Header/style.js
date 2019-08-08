import styled from 'styled-components';
import logoPic from '@/statics/imgs/blog-logo.jpg';

export const HeaderWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 58px;
  background: #fff;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, .1);
`;

export const HeaderWrapperInner = styled.div`
  position: relative;
  max-width: 1080px;
  height: 58px;
  line-height: 58px;
  margin: 0 auto;
  .navbar {
    width: 100%;
    height: 58px;
    padding: 0;
    button {
      padding: 5px;
      margin-right: 10px;
    }
    #responsive-navbar-nav {
      height: 58px;
      .navbar-nav {
        background: #fff;
      }
    }
    a {
      padding: 0;
      margin-left: 10px;
      color: #787878;
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