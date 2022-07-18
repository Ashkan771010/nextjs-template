import styled from "styled-components";

export const CheckDocsBody = styled.div`
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CheckDocsImgWrapper = styled.div`
  width: 243px;
  height: 144px;
  margin: 40px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.paleGrey2};
  border-radius: 20px;
  border: 2px dashed ${({ theme }) => theme.colors.lightGray};
`;

export const UnderstoodButton = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 15px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  height: 48px;
  margin-bottom: 12px;
`;
