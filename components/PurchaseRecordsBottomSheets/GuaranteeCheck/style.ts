import styled from "styled-components";

export const  GuaranteeCheckWrapper = styled.div`
  margin-top: 12px;
`;

export const CheckAmountWrapper = styled.div`
  width: 100%;
  height: 48px;
  background: ${({theme}) => theme.colors.green2};
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  margin: 16px 0;
`;

export const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const CheckHintsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 40px;
`;

export const CheckImage = styled.img`
  margin-bottom: 20px;
`;