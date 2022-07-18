import styled, { css } from "styled-components";
import {
  FocusedProps,
  IProps,
  THelperType,
  IHelperTextVariant,
  TSize,
  IInput,
} from "./textField.interface";

const detectTextFieldSize = (size: TSize) => {
  const cssObjMap = {
    small: () => css``,
    medium: () => css`
      height: 46px;
      padding: 0 20px;
    `,
    large: () => css`
      padding: 8px 20px;
      height: 70px;

      @media (min-width: 768px) {
        padding: 12px 20px;
      }
    `,
  };

  return cssObjMap[size];
};
export const Fieldset = styled.fieldset<FocusedProps>`
  position: absolute;
  border: 1px solid ${({ theme }) => theme.colors?.lightGray};
  border-color: ${({ focused, theme }) =>
    focused ? theme.colors.darkGray : theme.colors.lightGray};
  top: -5px;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0;
  padding: 0 8px;
  overflow: hidden;
  border-style: solid;
  border-radius: inherit;
  pointer-events: none;
`;

export const HelperText = styled.p<IHelperTextVariant>`
  margin: 0;
  font-size: 0.75rem;
  margin-top: 3px;
  font-weight: 400;
  line-height: 1.66;
  letter-spacing: 0.03333em;
  color: ${({ error, theme }) =>
    error ? theme.colors.red : theme.colors.darkGray};
  margin-left: 14px;
  margin-right: 14px;
`;

const detectHelperType = (
  helperType?: THelperType,
  helperText?: string | undefined | false
) => {
  if (!helperType || !helperText) {
    return;
  }

  const cssObjMap = {
    success: () => css``,
    warning: () => css``,
    error: () => css`
      ${Fieldset} {
        border-color: ${({ theme }) => theme.colors.red} !important;
      }

      ${HelperText} {
        color: ${({ theme }) => theme.colors.red};
      }
    `,
  };

  return cssObjMap[helperType];
};

export const FormControlRoot = styled.div<IProps>`
  border: 0;
  margin: 0;
  display: inline-flex;
  padding: 0;
  position: relative;
  min-width: 0;
  flex-direction: column;
  vertical-align: top;
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};

  ${({ helperType, helperText }) => detectHelperType(helperType, helperText)}
`;

export const InputWrapper = styled.div`
  cursor: text;
  display: inline-flex;
  position: relative;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.darkGray};
  box-sizing: border-box;
  align-items: center;
  border-radius: 15px;
  line-height: 1.1876em;
  letter-spacing: 0.00938em;
  overflow: hidden;
  border: /* 1px solid ${({ theme }) => theme.colors.gray}; */ 0;

  &:hover {
    ${Fieldset} {
      border-color: ${({ theme }) => theme.colors.darkGray};
    }
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.brownGray};
  }
`;

export const Legend = styled.legend<FocusedProps>`
  width: auto;
  height: 11px;
  display: block;
  padding: 0;
  font-size: 14px;
  transition: max-width 50ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  visibility: hidden;

  ${({ focused }) =>
    focused
      ? css`
          max-width: 1000px;
          transition: max-width 100ms cubic-bezier(0, 0, 0.2, 1) 50ms;
        `
      : css`
          max-width: 0;
          transition: max-width 50ms cubic-bezier(0, 0, 0.2, 1) 0ms;
        `}

  span {
    display: inline-block;
    padding-left: 8px;
    padding-right: 8px;
  }
`;

export const Input = styled.input<IInput>`
  color: currentColor;
  width: 100%;
  border: 0;
  height: 20px;
  margin: 0;
  display: block;
  min-width: 0;
  background: none;
  box-sizing: content-box;
  letter-spacing: inherit;
  -webkit-tap-highlight-color: transparent;
  text-align: ${({ textAlign }) => textAlign};

  :focus {
    outline: none;
  }

  ::placeholder {
    transition: opacity 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    text-align: right;
  }

  ${({ _size = "large" }) => detectTextFieldSize(_size)};

  ${({ shrink }) =>
    shrink &&
    css`
      ::placeholder {
        opacity: 0;
      }

      :focus::placeholder {
        opacity: 1;
      }
    `};
`;

export const Label = styled.label<FocusedProps>`
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.71;
  color: ${({ theme }) => theme.colors.darkGray};
  position: absolute;
  top: 1px;
  right: 0;
  z-index: 1;
  pointer-events: none;
  transform-origin: top left;
  transition: color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms,
    transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;

  transform: ${({ focused, hasValue }) =>
    hasValue || focused
      ? "translate(-20px, -10px) scale(0.85)"
      : "translate(-20px, 8px) scale(1)"};

  @media (min-width: 768px) {
    transform: ${({ focused, hasValue }) =>
      hasValue || focused
        ? "translate(-20px, -10px) scale(0.85)"
        : "translate(-20px, 12px) scale(1)"};
  }
`;
