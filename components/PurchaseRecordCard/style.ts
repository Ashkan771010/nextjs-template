import styled, { isStyledComponent } from "styled-components";

export const PurchaseRecordCardWrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.paleGrey2};
  border-radius: 15px;
  padding: 8px 8px 12px;
  margin-bottom: 8px;
  border: solid 1px ${({ theme }) => theme.colors.lightGray};
`;

export const ImageWrapper = styled.div`
  img {
    border-radius: 15px;
    object-fit: cover;
  }
`;

export const DetailsWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  margin-right: 8px;
`;

export const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-top: 4px;
`;

export const OrderDateWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 4px;
  margin-left: auto;
`;

export const CTAButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
`;

export const LoanPaymentsButton = styled.button<any>`
  width: 40%;
  border-radius: 24px;
  border: 0;
  outline: 0;
  background-color: ${({ theme, isActive }) =>
    isActive ? theme.colors.blueBerry2 : theme.colors.blueBerryWidthOpacity};
    pointer-events: ${({ isActive }) =>
    isActive ? "all" : "none"};
  height: 28px;
  cursor: ${({ isActive }) => (isActive ? "pointer" : "not-allowd")};
`;

export const SeeDetailsButton = styled.button`
  width: 57%;
  height: 28px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 24px;
  cursor: pointer;
`;
