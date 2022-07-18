import styled from "styled-components";


export const TimerSpan = styled.span`
  width: 36px;
  height: 36px;
  padding: 5px 0px;
  text-align: center;
  border: 1px solid ${({ theme }) => theme.colors.brownGray};
  border-radius: 10px;
`;


export const ResendButton = styled.button`
  width: 176px;
  height: 36px;
  text-align: center;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.brownGray};
  background-color: white;
`;