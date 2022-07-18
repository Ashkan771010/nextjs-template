import styled from "styled-components";

export const PriceWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const PriceBox = styled.div`
  padding: 4px;
  border-radius: 15px;
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  margin-top: 8px;
`;

export const BoxPriceWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PageFooter = styled.div`
  position: absolute;
  bottom: 12px;
  width: calc(100% - 24px);
`;

export const CTAButtonWrapper = styled.div`
  width: 100%;
  margin-top: 36px;
`;