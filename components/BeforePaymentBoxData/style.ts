import styled from "styled-components";

export const Box = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  position: relative;
  margin-top: 16px;
  box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.12);
  padding: 8px 16px;
`;

export const BeforePaymentDetailsCard = styled.div``;

export const PriceWrapper = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
`;