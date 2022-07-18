import styled from "styled-components";

export const OuterWrapper = styled.div`
  padding: 5px;
  border-radius: 15px;
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  box-sizing: border-box;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white}
`;

export const InnerWrapper = styled.div`
  padding: 8px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.paleGrey2};
  position: relative;
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
`;

export const Indecator = styled.span`
  position: absolute;
  top: 0;
  border-radius: 11px;
  background-color: ${({ theme }) => theme.colors.blueBerry};
  height: 100%;
  z-index: 0;
  transition: all 0.3s;
  min-width: 52% !important;
`;

export const Column = styled.div<any>`
  box-sizing: border-box;
  flex: 1;
  text-align: center;
  position: relative;
  cursor: pointer;
  height: 100%;
`;
