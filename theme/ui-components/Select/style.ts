import styled from "styled-components";

export const SelectWrapper = styled.div<any>`
  background-color: transparent;
  box-sizing: border-box;
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  border-radius: 15px;
  width: 100%;
  height: 48px;
  padding: 12px 20px 12px 16px;
  display: flex;
  align-items: center;
  position: relative;

  .label {
    background-color: ${({ theme }) => theme.colors.white};
    position: absolute;
    top: -10px;
    right: 10px;
    padding: 0 8px;
  }

  .select-wrapper {
    display: flex;
    margin-bottom: 36px;
  }

  span:nth-child(3) {
    background: red;
    margin-right: auto !important;
    transform: rotate(-90deg);
  }
`;
