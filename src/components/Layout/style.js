import styled from 'styled-components';
import { device } from '@/common/styles/device';

export const LayoutWrapper = styled.div`
  max-width: 1080px;
  margin: 0px auto;
  padding-top: 50px;
  .left-col {
    position: relative;
  }
  @media ${device.mobileL} {
    .left-col {
      padding-left: 0;
    }
  }
  @media ${device.tablet} {
    .left-col {
      padding-left:15px;
    }
  }
  .right-col {
    padding: 0 15px;
  }
`;