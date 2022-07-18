import styled from "styled-components";

export const BulletWrapper = styled.span`
  width: 16px;
  height: 16px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.blueBerry};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  color: white;
  padding-top: 2px;
  font-size: 12px;
`;
