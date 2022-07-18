import styled from "styled-components";

export const TitleSectionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 16px;
`;

export const ContinueButtonWrapper = styled.div`
  position: absolute;
  bottom: 12px;
  padding: 0 12px;
  right: 0;
  width: 100%;
`;

export const GuaranteeTypeWrapper = styled.div<any>`
  display: flex;
  gap: 16px;
  margin-top: ${({ secondRow }) => (secondRow ? "16px" : "20px")};
`;
