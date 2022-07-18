import styled, { css } from "styled-components";
import { IProps } from "./interface";

export const Checkbox = styled.div<IProps>`
  display: inline-flex;
  z-index: 0;
  position: relative;
  box-sizing: border-box;
  flex-shrink: 0;
  border-radius: 5px;
  border: solid 1px ${({ theme }) => theme.colors.brownGray};
  cursor: pointer;
  padding: 1px;

  ${({ _size }) =>
    _size === "small"
      ? css`
          width: 16px;
          height: 16px;
        `
      : css`
          width: 16px;
          height: 16px;
        `}
`;

export const Indicator = styled.span`
  width: 100%;
  height: 100%;
  display: block;
  background-color: ${({ theme }) => theme.colors.white};
  transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 3px;
`;

export const Tick = styled.span`
  display: block;
  position: absolute;
  top: 1px;
  left: 2px;
  color: white;
`;

export const Label = styled.label``;

export const Input = styled.input.attrs({ type: "checkbox" })`
  position: absolute;
  width: 100%;
  cursor: inherit;
  height: 100%;
  margin: 0;
  opacity: 0;
  padding: 0;
  z-index: 1;

  :checked ~ ${Indicator} {
    background-color: ${({ theme }) => theme.colors.blueBerry};
  }
`;
