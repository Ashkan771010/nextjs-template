import styled from "styled-components";

export const AfterPaymentWrapper = styled.div`
  position: relative;
  /* height: calc(100vh - 72px); */
`;

export const DetailsWrapper = styled.div<any>`
  padding: 12px 16px;
  border-radius: 15px;
  background-color: ${({ theme, isSuccess }) =>
    isSuccess ? theme.colors.green2 : theme.colors.lightRed};
  margin-top: 16px;
`;

export const PriceWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const TraceButton = styled.button`
  cursor: pointer;
  display: block;
  margin: 12px auto 4px;
  width: 176px;
  padding: 2px;
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  background-color: ${({ theme }) => theme.colors.white};
`;

export const PageFooter = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 32px;
  margin-right: 4px;
`;
