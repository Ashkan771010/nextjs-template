import styled from "styled-components";

import { IProps } from "./interface";

export const Box = styled.div<IProps>`
  width: ${({ isAlone = false }) => (isAlone ? "48%" : "50%")};
  height: 120px;
  background-color: ${({ theme }) => theme.colors.paleGrey2};
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;

  @media (min-width: 425px) {
    height: 145px;
  }
`;

export const Badge = styled.span`
  width: 28px;
  height: 12px;
  text-align: center;
  padding: 1px 0 0;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.orange};
  position: absolute;
  top: 12px;
  left: 12px;
  font-size: 8px;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.white};
`;
