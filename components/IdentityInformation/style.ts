import styled from "styled-components";

export const IdentityInformationWrapper = styled.div`
  position: relative;
  min-height: 100%;
  height: calc(100vh - 72px);
  background-color: ${({ theme }) => theme.colors.white};
`;

export const CTAButtonWrapper = styled.div`
  position: fixed;
  bottom: 15px;
  right: auto;
  width: calc(100% - 38px);
  z-index: 100;
  left: 50%;
  transform: translate(-50%, 0);
`;

export const FormWrapper = styled.form`
  padding: 8px;
  padding-bottom: 80px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const TextAreaWapper = styled.div`
  position: relative;
  width: 100%;
  height: 90px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 100%;
  outline: 0;
  border-radius: 15px;
  padding: 12px 20px;
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  transition: all 0.5s;
  resize: none;

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.black};
  }
`;

export const TextAreaLabel = styled.span`
  font-size: 12px;
  font-weight: normal;
  line-height: 1.75;
  color: ${({ theme }) => theme.colors.gray};
  background-color: ${({ theme }) => theme.colors.white};
  transition: all 0.3s;
  position: absolute;
  top: 12px;
  right: 12px;
`;

export const InputsWrapper = styled.div`

`;
