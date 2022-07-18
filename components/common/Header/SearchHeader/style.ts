import styled from "styled-components";

export const SearchHeaderWrapper = styled.div`
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.12);
  background-color: ${({ theme }) => theme.colors.white};
  padding: 12px;

  img.back-icon {
    cursor: pointer;
  }
`;

export const TextFieldWrapper = styled.div`
  width: 90%;
  position: relative;
  display: flex;
  height: 36px;
`;

export const SearchIconWrapper = styled.div`
  position: absolute;
  left: 8px;
  top: 6px;
`;
