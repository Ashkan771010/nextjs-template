import styled from "styled-components";

export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.paleGrey2};
  border-radius: 15px;
  padding: 12px;
  margin: 12px 0 8px;
`;

export const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 4px;
`;
