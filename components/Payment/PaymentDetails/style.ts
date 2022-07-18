import styled from "styled-components";

export const PaymentDetailsWrapper = styled.div`
  margin-top: 4px;
  position: relative;
  /* height: calc(100vh - 76px); */
`;

export const Box = styled.div`
  background-color: ${({ theme }) => theme.colors.paleGrey2};
  position: relative;
  margin-top: 16px;
  box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.12);
  padding: 8px 16px;
`;

export const PunchSVG = styled.img<any>`
  position: absolute;
  ${({ top }) => top && "transform: rotate(180deg)"};
  ${({ top }) => top && "top: -12px;"}
  width: 100%;
  right: 0;
  filter: drop-shadow(0px 4px 4px #00000009);
`;

export const PaymentDetailsCard = styled.div`
  background-color: ${({ theme }) => theme.colors.green2};
  padding: 12px 16px;
  border-radius: 15px;
`;

export const AmountWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const LoanAfterPaymentFooter = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
`;
