import styled from "styled-components";
import { motion } from "framer-motion";

export const BottomSheet = styled(motion.div)<any>`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 12px 0 28px 0;
  position: fixed;
  right: 0;
  left: 0;
  max-width: 576px;
  min-height: ${({ maxHeight }) => maxHeight ? maxHeight : "none"};
  bottom: 0;
  border-radius: 20px 20px 0 0;
  box-sizing: border-box;
  z-index: 1300;
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.white};
  overflow: hidden;
  color: black;
`;

export const BluredContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9;
`;

export const Bar = styled.span`
  width: 60px;
  height: 5px;
  margin: 0 auto 16px auto;
  border-radius: 100px;
  display: block;
  background-color: ${({ theme }) => theme.colors.lightGray};
`;

export const ChildrenContainer = styled.div`
  padding: 0 20px;
  max-height: calc(100vh - 170px);
  overflow-y: auto;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CloseIconWrapper = styled.div<any>`
  position: absolute;
  right: 20px;
  bottom: 4px;
  ${({ theme, title }) => title && "top: -16px;"}
`;

export const HeaderWRapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
