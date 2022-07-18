import styled from "styled-components";

export const HeaderWrapper = styled.div`
  padding: 12px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.12);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  img {
    cursor: pointer;
  }
`;

export const ActionArea = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  cursor: pointer;
`;

export const NavIconWrapper = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 8px;
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 18px;
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  width: 84px;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  .transaction-title {
    margin-left: 4px;
  }
`;

export const PurchaseBottomSheetBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 12px;

  .no-record-text {
    margin-bottom: 64px;
  }
`;

export const UnderstoodButton = styled.button<any>`
  box-sizing: border-box;
  width: 100%;
  margin-top: 64px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray};
  height: 48px;
  border-radius: 15px;
`;
