import styled from "styled-components";
import { IProps } from "./interface";

export const Switch = styled.div<IProps>`
  width: 46px;
  height: 26px;
  display: inline-flex;
  z-index: 0;
  position: relative;
  box-sizing: border-box;
  flex-shrink: 0;
  vertical-align: middle;
  cursor: pointer;
`;

export const Indicator = styled.span`
  width: 26px;
  height: 26px;
  border: solid 1px ${({ theme }) => theme.colors.brownGray};
  background-color: ${({ theme }) => theme.colors.white};
  position: absolute;
  border-radius: 50%;
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`;

export const SwitchTrack = styled.span`
  margin-top: 2px;
  margin-bottom: 2px;
  border-radius: 12px;
  border: solid 1px ${({ theme }) => theme.colors.brownGray};
  background-color: transparent;
  width: 100%;
  height: 22px;
  z-index: -1;
  transition: border-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`;

export const Input = styled.input.attrs<IProps>({ type: "checkbox" })`
  position: absolute;
  width: 100%;
  cursor: inherit;
  height: 100%;
  margin: 0;
  opacity: 0;
  padding: 0;
  z-index: 1;

  :checked ~ ${SwitchTrack} {
    background-color: ${({ theme }) => theme.colors.blue};
    border-color: ${({ theme }) => theme.colors.blue};
  }

  :checked ~ ${Indicator} {
    transform: translateX(-20px);
  }
`;
