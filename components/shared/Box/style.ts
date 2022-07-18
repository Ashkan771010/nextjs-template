import styled from "styled-components";

import { IProps, IImageWrapperProps } from "./interface";

export const Box = styled.div<IProps>`
  border-radius: 15px;
  position: relative;
  box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.12);
  padding: 0px 0;
  margin-top: 16px;
  background-color: ${({ theme }) => theme.colors.white};


  .top-punch {
    transform: rotate(180deg);
    position: absolute;
    top: -16px;
    width: 100%;
  }
  .bottom-punch {
    position: absolute;
    bottom: -16px;
    width: 100%;
  }
`;

export const BoxContent = styled.div<IProps>`
  padding: 16px;
  background-color: ${({ theme, bgColor }) =>
    bgColor ? theme.colors[bgColor] : "white"};
    text-align: center;
`;
