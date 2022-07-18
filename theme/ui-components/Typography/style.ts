import styled, { css } from "styled-components";

import { IProps, TVariant } from "./interface";

const detectVariant = (variant: TVariant) => {
  const cssObjMap = {
    XLargeTitleBold: () => css`
      font-size: 22px;
      font-weight: bold;
      line-height: 1.73;
    `,
    XLargeTitleRegular: () => css`
      font-size: 22px;
      font-weight: normal;
      line-height: 1.73;
    `,
    LargeTitleBold: () => css`
      font-size: 18px;
      font-weight: bold;
      line-height: 1.72;
    `,
    LargeTitleRegular: () => css`
      font-size: 18px;
      font-weight: normal;
      line-height: 1.72;
    `,
    LargeTitleLight: () => css`
      font-size: 18px;
      font-weight: 300;
      line-height: 1.72;
    `,
    TitleRegular: () => css`
      font-size: 16px;
      font-weight: normal;
      line-height: 1.75;
    `,
    TitleBold: () => css`
      font-size: 16px;
      font-weight: bold;
      line-height: 1.75;
    `,
    BodyBold: () => css`
      font-size: 14px;
      font-weight: bold;
      line-height: 1.79;
    `,
    BodyRegular: () => css`
      font-size: 14px;
      font-weight: normal;
      line-height: 1.79;
    `,
    BodyLight: () => css`
      font-size: 14px;
      font-weight: 300;
      line-height: 1.2;
    `,
    CaptionBold: () => css`
      font-size: 12px;
      font-weight: bold;
      line-height: 1.75;
    `,
    CaptionRegular: () => css`
      font-size: 12px;
      font-weight: normal;
      line-height: 1.75;
    `,
    CaptionLight: () => css`
      font-size: 12px;
      font-weight: 300;
      line-height: 1.75;
    `,
    textBold: () => css`
      font-size: 10px;
      font-weight: bold;
      line-height: 1.75;
    `,
    textRegular: () => css`
      font-size: 10px;
      font-weight: normal;
      line-height: 1.75;
    `,
    textLight: () => css`
      font-size: 10px;
      font-weight: 300;
      line-height: 1.75;
    `,
  };
  return cssObjMap[variant];
};

export const Typography = styled.span<IProps>`
  display: ${({ display }) => display || "inline-block"};
  color: ${({ theme, color = "darkGray" }) => theme.colors[color]};
  margin-left: ${({ ml }) => ml};
  margin-right: ${({ mr }) => mr};
  margin-bottom: ${({ mb }) => mb};
  margin-top: ${({ mt }) => mt};
  ${({ variant = "BodyRegular" }) => detectVariant(variant)};
  text-align: justify;
  text-align: ${({ textAlign }) => textAlign};
  direction: ${({ direction }) => direction};
`;


