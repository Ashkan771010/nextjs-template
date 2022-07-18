import styled from "styled-components";

export const GuideWRapper = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Button = styled.button`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.white};
  bottom: 12px;
  width: 100%;
  height: 48px;
  box-sizing: border-box;
  border-radius: 15px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
`;
