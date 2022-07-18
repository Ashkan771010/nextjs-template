import styled, { css } from "styled-components";

import { IProps, TSize, TRadius, TVariant, TColor } from "./interface";

const detectButtonSize = (size: TSize) => {
  const cssObjMap = {
    XXL: () => css`
      padding: 8px;
      width: 335px;
    `,
    XL: () => css`
      padding: 8px;
      width: 255px;
    `,
    large: () => css`
      padding: 6px;
      width: 160px;
    `,
    pair: () => css`
      padding: 8px;
      width: 227px;
    `,
    pair2: () => css`
      padding: 8px;
      width: 96px;
    `,
    small: () => css`
      padding: 2px;
      width: 104px !important;
    `,
    selected: () => css`
      padding: 2px;
    `,
    unSelected: () => css`
      padding: 2px;
    `,
  };
  return cssObjMap[size];
};

const detectButtonRadius = (radius: TRadius) => {
  const cssObjMap = {
    sm: () => css`
      ${({ theme }) => theme.borderRadiuses[0]}px
    `,
    md: () => css`
      ${({ theme }) => theme.borderRadiuses[1]}px
    `,
    lg: () => css`
      ${({ theme }) => theme.borderRadiuses[2]}px
    `,
    xlg: () => css`
      ${({ theme }) => theme.borderRadiuses[3]}px
    `,
    xxlg: () => css`
    ${({ theme }) => theme.borderRadiuses[4]}px
  `
  };
  return cssObjMap[radius];
};

const detectButtonColors = (
  variant: TVariant,
  disabled: boolean,
  color: TColor
) => {
  if (disabled)
    return css`
      background-color: ${({ theme }) => theme.colors.disableBlueBerry};
      color: ${({ theme }) => theme.colors.white};
    `;

  const cssobjMap = {
    ghost: () => css`
      background-color: transparent;
      ${detectColor(variant, color)};
    `,
    contained: () => css`
      ${detectColor(variant, color)};
    `,
  };
  return cssobjMap[variant];
};

const detectColor = (variant: TVariant, color: TColor) => {
  const cssObjMap = {
    default: () => css`
      color: ${({ theme }) => theme.colors.gray};
      border: 1px solid ${({ theme }) => theme.colors.gray};
    `,
    primary: () => css`
      background-color: ${variant === "ghost"
        ? ({ theme }) => theme.colors.white
        : ({ theme }) => theme.colors.blueBerry};
      color: ${variant === "ghost"
        ? ({ theme }) => theme.colors.blueBerry
        : ({ theme }) => theme.colors.white};
      /* border: 1px solid
        ${variant === "ghost"
          ? ({ theme }) => theme.colors.blueBerry
          : ({ theme }) => theme.colors.white}; */
    `,
    success: () => css`
      background-color: ${variant === "ghost"
        ? ({ theme }) => theme.colors.white
        : ({ theme }) => theme.colors.green};
      color: ${({ theme }) => theme.colors.white};
      border: 0;
    `,
    failure: () => css`
      color: ${variant === "ghost"
        ? ({ theme }) => theme.colors.white
        : ({ theme }) => theme.colors.red};
      border: 1px solid ${({ theme }) => theme.colors.red};
    `,
    dark: () => css`
      color: ${variant === "ghost"
        ? ({ theme }) => theme.colors.brownGray
        : ({ theme }) => theme.colors.white};
      border: 1px solid
        ${variant === "ghost" ? ({ theme }) => theme.colors.brownGray : 0};
    `,
    orange: () => css`
      background-color: ${({ theme }) => theme.colors.orange};
    `,
  };
  return cssObjMap[color];
};

export const Button = styled.button<IProps>`
  transition: all 0.3s;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.white};
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};
  ${({ _size = "small", fullWidth }) => fullWidth ? '100%' : detectButtonSize(_size)};
  height: ${({ height }) => height};
  pointer-events: ${({ isLoading }) => !isLoading ? "all" : "none"};
  display: inline-flex;
  outline: 0;
  align-items: center;
  user-select: none;
  vertical-align: middle;
  appearance: none;
  justify-content: center;
  text-decoration: none;
  text-align: center;
  min-width: 64px;
  border: 0;
  border-radius: ${({ radius = "sm" }) => detectButtonRadius(radius)};
  ${({ variant = "contained", disabled = false, color = "default" }) =>
    detectButtonColors(variant, disabled, color)};

  &:not([disabled]) {
    cursor: pointer;
  }
  &[disabled] {
    cursor: not-allowed;
    pointer-events: none;
  }
`;

export const ButtonLabel = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
`;
