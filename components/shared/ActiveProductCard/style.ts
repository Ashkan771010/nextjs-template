import styled from "styled-components";

export const ActiveProductCardWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors?.darkBlueBerry};
  color: ${({ theme }) => theme.colors.white};
  padding: 12px;
  border-radius: 20px;
`;

export const ActionWrapper = styled.div`
  height: 102px !important;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
`;

export const DetailsWrapper = styled.div`
  text-align: left;
  margin-bottom: 4px;
  .second-item {
    margin-top: 4px;
  }
`;

export const TrackOrderButton = styled.button`
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.white};
  width: 104px;
  height: 28px;
  float: left;
  border-radius: 20px;
  outline: 0;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  cursor: pointer !important;
`;

export const DetailItem = styled.div`
  text-align: right;
`;