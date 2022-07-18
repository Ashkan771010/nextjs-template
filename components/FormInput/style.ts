import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
`

export const ErrorMessage = styled.div<any>`
  margin-top: 2px;
  /* position: absolute; */
  width: ${({fullWidth}) => fullWidth ? "100%" : "132px"};
  display: flex;
  align-items: center;

  span {
    text-align: start;
  }

  @media(min-width: 360px) {
    width: ${({fullWidth}) => fullWidth ? "100%" : "160px"};
  }
`;