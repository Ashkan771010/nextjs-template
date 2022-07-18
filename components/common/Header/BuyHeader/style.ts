import styled from "styled-components";

export const BuyHeaderWrapper = styled.div`
  height: 52px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.12);
  background-color: ${({ theme }) => theme.colors.white};
  padding: 12px;
`;
