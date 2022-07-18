import styled from "styled-components";

export const TextFieldWrapper = styled.div<any>`
  width: ${({ fullWidth, width }) => (fullWidth ? "100%;" : width ? width : "132px")};
  background-color: ${({ theme }) => theme.colors.white};
  border: 0;
  outline: 0;
  position: relative;
  height: 48px;

  @media (min-width: 360px) {
    width: ${({ fullWidth, width }) => (fullWidth ? "100%;" : width ? width : "160px")};
  }

  .close-icon {
    width: 16px;
    height: 16px;
    position: absolute;
    right: 17px;
    bottom: 17px;
  }
`;

export const ErrorM = styled.div`
  margin-top: 2px;
  display: flex;
  align-items: center;
`;

export const Label = styled.span<any>`
  font-size: 12px;
  font-weight: normal;
  line-height: 1.75;
  color: ${({ theme }) => theme.colors.gray};
  padding: 0 8px;
  background-color: ${({ theme }) => theme.colors.white};
  transition: all 0.3s;
  position: absolute;

  transform: ${({ focused, hasValue }) =>
    hasValue || focused
      ? "translate(-12px, -12px) scale(0.90)"
      : "translate(-8px, 12px) scale(1)"};
`;

export const TextField = styled.input<any>`
  width: 100%;
  outline: 0;
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  border-radius: 15px;
  padding: 12px 20px;
  transition: all 0.5s;
  height: 100%;
  text-align: ${({ textAlign }) => textAlign};
  direction: ${({ direction }) => direction};

  &::placeholder {
    text-align: ${({ placeholderAlignment }) => placeholderAlignment};
    color: ${({ placeholderColor }) => placeholderColor};
  }

  &:focus {
    border: 1px solid black;
  }
`;
