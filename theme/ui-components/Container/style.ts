import styled from "styled-components";

const Container = styled.div<any>`
  padding-left: 12px;
  padding-right: 12px;
  padding-bottom: 12px;
  margin-top: 8px;
  background-color: ${({ theme }) => theme.colors.white};
  /* min-height: calc(100vh - 80px);
  max-height: 100vh; */
  overflow-y: scroll;
  height: 100%;
  position: relative;

  @media (min-width: ${({ theme }) => theme.breakPoints.MD}px) {
    width: 748px;
    margin: 0 auto;
  }

  @media (min-width: ${({ theme }) => theme.breakPoints.LG}px) {
    width: 962px;
    margin: 0 auto;
  }

  @media (min-width: ${({ theme }) => theme.breakPoints.XL}px) {
    width: 100%;
    max-width: 1170px;
    margin: 0 auto;
  }

  @media (min-width: ${({ theme }) => theme.breakPoints.XXL}px) {
    width: 100%;
    max-width: 1676px;
    margin: 0 auto;
  }
`;

export default Container;
