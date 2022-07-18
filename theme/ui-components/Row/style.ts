import styled, { css } from "styled-components";

import { IProps } from "./interface";

const detectJustifyContent = ({ justifyContent }: IProps) => css`
  ${({ theme }) => {
    if (typeof justifyContent === "string") {
      return `
        justify-content: ${justifyContent};
      `;
    }

    if (typeof justifyContent === "object" && "sm" in justifyContent) {
      return `
        @media (min-width: ${theme.breakPoints.SM}px) {
          justify-content: ${justifyContent.sm};
        }
      `;
    }

    if (typeof justifyContent === "object" && "md" in justifyContent) {
      return `
        @media (min-width: ${theme.breakPoints.MD}px) {
          justify-content: ${justifyContent.md};
        }
      `;
    }

    if (typeof justifyContent === "object" && "lg" in justifyContent) {
      return `
        @media (min-width: ${theme.breakPoints.LG}px) {
          justify-content: ${justifyContent.lg};
        }
      `;
    }

    if (typeof justifyContent === "object" && "xs" in justifyContent) {
      return `
        @media (min-width: ${theme.breakpoints.LG}px) {
          justify-content: ${justifyContent.lg};
        }
      `;
    }
  }}
`;

const detectAlignItems = ({ alignItems }: IProps) => css`
  ${({ theme }) => {
    if (typeof alignItems === "string") {
      return `
        align-items: ${alignItems};
      `;
    }

    if (typeof alignItems === "object" && "sm" in alignItems) {
      return `
        @media (min-width: ${theme.breakpoints.SM}px) {
          align-items: ${alignItems.sm};
        }
    `;
    }

    if (typeof alignItems === "object" && "md" in alignItems) {
      return `
        @media (min-width: ${theme.breakpoints.MD}px) {
          align-items: ${alignItems.md};
        }
    `;
    }

    if (typeof alignItems === "object" && "lg" in alignItems) {
      return `
        @media (min-width: ${theme.breakpoints.LG}px) {
          align-items: ${alignItems.lg};
        }
    `;
    }

    if (typeof alignItems === "object" && "xs" in alignItems) {
      return `
        @media (min-width: ${theme.breakpoints.LG}px) {
          align-items: ${alignItems.lg};
        }
    `;
    }
  }}
`;

const detectFlexDirection = ({ flexDirection }: IProps) => css`
  ${({ theme }) => {
    if (typeof flexDirection === "string") {
      return `
        flex-direction: ${flexDirection};
      `;
    }

    if (typeof flexDirection === "object" && "sm" in flexDirection) {
      return `
        @media (min-width: ${theme.breakpoints.SM}px) {
          flex-direction: ${flexDirection.sm};
        }
    `;
    }

    if (typeof flexDirection === "object" && "md" in flexDirection) {
      return `
        @media (min-width: ${theme.breakpoints.MD}px) {
          flex-direction: ${flexDirection.md};
        }
    `;
    }

    if (typeof flexDirection === "object" && "lg" in flexDirection) {
      return `
        @media (min-width: ${theme.breakpoints.LG}px) {
          flex-direction: ${flexDirection.lg};
        }
    `;
    }

    if (typeof flexDirection === "object" && "xs" in flexDirection) {
      return `
        @media (min-width: ${theme.breakPoints.LG}px) {
          flex-direction: ${flexDirection.lg};
        }
    `;
    }
  }}
`;

const Row = styled.div<IProps>`
  width: 100%;
  display: flex;
  flex-wrap: ${({ wrap }) => wrap || "wrap"};
  ${props => detectJustifyContent(props)};
  ${props => detectAlignItems(props)};
  ${props => detectFlexDirection(props)};
`;

export default Row;
