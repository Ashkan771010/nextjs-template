import styled from "styled-components";
import { IProps } from "./interface";

// export const VerifyInputWrapper = styled.div<IProps>`

// `;

export const VerifyInput = styled.input<any>`
  border: none;
  border-bottom: 2px solid
    ${({ theme, value, hasError }) =>
     hasError ? theme.colors.brownGray : value.length > 0 ? theme.colors.blueBerry : theme.colors.brownGray };
  width: ${({ width }) => width || "35px"};
  text-align: center;
  font-size: 22px;
  outline: 0;
  color: ${({ theme, hasError }) => hasError ? theme.colors.red : theme.colors.blueBerry};
  margin-right: 20px;
  direction: ltr;

  &:last-child {
    margin-right: 0;
  }
`;

export const Error = styled.div`
  position: absolute;
  margin-top: 8px;
  right: 67px;
  display: flex;
  align-items: center;
`;
