import styled from "styled-components";
import lessVariables from '@/common/styles/variable-less.js';

export const AboutWrapper = styled.div`
  width: 100%;
  margin-top: 20px;
  padding: 20px;
  background: #fff;
  box-shadow: ${lessVariables.LESS_VARIABLES.boxShadowBase};
  .ant-input:focus  {
    box-shadow: none;
  }
`;