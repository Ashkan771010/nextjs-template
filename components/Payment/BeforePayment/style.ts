import styled from "styled-components";

export const BeforePaymentWrapper = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors.white}
  /* height: calc(100vh - 72px); */
`;

export const FooterWrapper = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
`;

export const WalletWrapper = styled.div`
  padding: 16px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.paleGray};
`;
