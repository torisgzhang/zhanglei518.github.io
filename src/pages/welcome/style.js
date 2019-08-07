import styled from 'styled-components';
import lessVariables from '@/common/styles/variable-less';
import welcomeBgImg from '@/statics/imgs/bg.jpg';

export const WelcomeWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${welcomeBgImg});
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  .mask {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .5);
    .info {
      padding: 20px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%,-50%);
      width: 300px;
      height: 200px;
      color: #fff;
      background: rgba(255, 255, 255, .1);
      text-align: center;
      img {
        width: 80px;
        height: 80px;
        border-radius: 100%;
        object-fit: cover;
      }
      p {
        margin-top: 20px;
        font-size: 16px;
        color: #787878;
      }
      div {
        margin-top: 40px;
        span {
          font-size: 14px;
          display: inline-block;
          margin: 0 10px;
        }
      }
    }
  }
`;