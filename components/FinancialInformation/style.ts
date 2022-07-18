import styled from "styled-components";

export const FinancialInformationWrapper = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors.white}
  /* height: calc(100vh - 72px); */
`;

export const FormWrapper = styled.div`
  padding: 0 8px;
  margin-top: 24px;
`;

export const TextFieldWrapper = styled.div`
  height: 48px;
  display: flex;
  width: 100%;
`;

export const HintTextWrapper = styled.div<any>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin-top: 4px;
  margin-bottom: ${({ mb }) => mb ? mb : "0px"};
`;

export const PageFooter = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
`;

export const BottomSheetInputWrapper = styled.div`
  display: flex;
  position: relative;
  margin-top: 16px;

  .search-icon {
    position: absolute;
    left: 12px;
    top: 7px;
  }
`;

export const BottomSheetInput = styled.input`
  outline: 0;
  width: 100%;
  border-radius: 24px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.brownGray};
  padding: 8px 16px;
`;

export const BottomSheetBody = styled.div`
  margin-top: 16px;
`;

export const BottomSheetItem = styled.div`
  padding: 8px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
`;

export const UploadAreaWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  border-radius: 15px;
  height: 48px;

  .label-holder {
    padding: 0 8px;
    background-color: ${({ theme }) => theme.colors.white};
    position: absolute;
    right: 12px;
    top: -10px;
  }
`;

export const RealFileInput = styled.input``;

export const CheckUploadButton = styled.button<any>`
  width: 102px;
  padding: ${({ bgColor }) => bgColor !== "green" && "0px 16px 0 8px"};
  background-color: ${({ theme, bgColor }) =>
    bgColor !== "green" ? theme.colors.blueBerry : theme.colors.green};
  border: 0;
  border-radius: 12px;
  height: 40px;
  display: flex;
  position: absolute;
  left: 4px;
  top: 3px;
  align-items: center;
  justify-content: center;
  z-index: 5;
`;

export const FileNameHolder = styled.span`
  position: absolute;
  top: 18px;
  left: 118px;
`;
