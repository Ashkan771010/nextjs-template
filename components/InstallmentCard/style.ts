import styled from "styled-components";

export const InstallmentCardWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.paleGrey2};
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  border-radius: 15px;
  height: 66px;
  padding: 8px;
  position: relative;
  margin-bottom: 8px;
`;

export const ArrivedWrapper = styled.div``;

export const WasPaidWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
  position: absolute;
  left: 8px;

  span:nth-child(2) {
    margin-bottom: 4px !important;
  }
`;

export const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const PaymentButton = styled.button`
  width: 118px;
  height: 28px;
  border-radius: 17px;
  border: 0;
  background-color: ${({ theme }) => theme.colors.green};
`;

export const SeeDetailsButton = styled.button`
  width: 118px;
  height: 28px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 17px;
`;
