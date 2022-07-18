import styled, { css } from "styled-components";

import { IProps } from "./interface";

const calculateColumnWidth = (size: number) => `${(size / 12) * 100}%`;

const Column = styled.div<IProps>`
  flex: 0 0 auto;
  box-sizing: border-box;
  max-width: ${({ xs = 12 }) => calculateColumnWidth(xs)};
  flex-basis: ${({ xs = 12 }) => calculateColumnWidth(xs)};

  ${({ sm }) =>
    sm &&
    css`
      @media (min-width: ${({ theme }) => theme.breakPoints.SM}px) {
        max-width: ${calculateColumnWidth(sm)};
        flex-basis: ${calculateColumnWidth(sm)};
      }
    `}

  ${({ md }) =>
    md &&
    css`
      @media (min-width: ${({ theme }) => theme.breakPoints.MD}px) {
        max-width: ${calculateColumnWidth(md)};
        flex-basis: ${calculateColumnWidth(md)};
      }
    `};

  ${({ lg }) =>
    lg &&
    css`
      @media (min-width: ${({ theme }) => theme.breakPoints.LG}px) {
        max-width: ${calculateColumnWidth(lg)};
        flex-basis: ${calculateColumnWidth(lg)};
      }
    `}
`;

export default Column;
