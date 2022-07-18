import styled from "styled-components";

export const LoanAfterPaymentWrapper = styled.div`
  margin-top: 4px;
  position: relative;
  height: calc(100vh - 76px);
`;

export const LoanAfterPaymentFooter = styled.div`
  position: fixed;
  bottom: 12px;
  right: auto;
  width: calc(100% - 38px);
  z-index: 100;
  left: 50%;
  transform: translate(-50%, 0);
`;