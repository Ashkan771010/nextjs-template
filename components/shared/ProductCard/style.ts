import styled from "styled-components";

export const ProductCardWrapper = styled.div`
  box-sizing: border-box;
  height: 108px;
  background-color: ${({ theme }) => theme.colors.paleGrey2};
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  padding: 8px;
  border-radius: 15px;
  display: flex;
  margin: 8px 0;
  position: relative;
`;

export const ProductImageWrapper = styled.div`
  border-radius: 15px;
  width: 92px;
  height: 92px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto 0 auto 8px;

  img {
    border-radius: 15px;
    height: 100%;
    width: auto;
    object-fit: cover;
  }
`;

export const ProductDetailsWrapper = styled.div`
  width: calc(100% - 92px);
  /* display: flex;
  flex-direction: column;
  justify-content: space-around; */
  position: relative;
`;

export const Price = styled.div`
  display: flex;
  margin-top: 4px;
  .money-unit {
    padding-top: 2px;
  }
`;

export const SeeProductButton = styled.button`
  box-sizing: border-box;
  width: 118px;
  margin-right: auto;
  padding: 2px;
  border-radius: 16px;
  border: 0;
  outline: 0;
  background-color: ${({ theme }) => theme.colors.blueBerry};
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  position: absolute;
  left: 0;
  margin-top: auto;
  bottom: 0;
`;

export const SpinnerWrapper = styled.div`
  /* padding-top: 4px; */
  display: flex;
  justify-content: center;
`;
