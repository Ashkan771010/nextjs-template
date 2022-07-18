import styled, { css } from "styled-components";
import { IProps } from "./interface";

export const StepperWrapper = styled.div<IProps>`
  font-family: Arial;
  display: flex;
  height: 68px;
  border-radius: 15px;
  background: ${({ theme, isPurchaseRecord }) =>
    isPurchaseRecord ? theme.colors.white : theme.colors.paleGray};

  .stepper-item {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
  }

  .step-name {
    position: absolute;
    top: 32px;
  }

  .stepper-item::before {
    position: absolute;
    content: "";
    border: 2px solid #c6bfed;
    width: ${({ data }) =>
      data?.length === 3 ? "47vw" : data?.length === 4 ? "36vw" : "30vw"};
    top: 20px;
    left: 20%;
    z-index: 2;
    border-radius: 15px;
  }

  .stepper-item::after {
    position: absolute;
    content: "";
    width: 100%;
    top: 20px;
    left: 0;
    z-index: 2;
  }

  .stepper-item.active .step-counter {
    font-weight: bold;
    display: block;
    background: #5439ac;
    position: absolute;
    left: ${({
      data = [{ isComplete: true, isActive: false, textStep: "نوع ضمانت" }],
    }) => {
      if (data[data?.length - 1]?.isActive) {
        return "15%";
      } else if (data[0]?.isActive) {
        return "70%";
      }
    }}
  }

  .stepper-item.completed .step-counter {
    display: block;
  }

  .stepper-item.completed::after {
    position: absolute;
    content: "";
    border: 2px solid #5439ac;
    background-color: #5439ac;
    width: ${({
      data = [{ isComplete: true, isActive: false, textStep: "نوع ضمانت" }],
    }) => {
      if (data[data?.length - 1]?.isActive) {
        if (data?.length === 3) {
          return "50vw;";
        } else if (data?.length === 4) {
          return "36vw;";
        }
      } else if (data?.length === 3) {
        return "40vw;";
      } else if (data?.length === 4) {
        return "30vw;";
      } else if (data?.length === 5) {
        return "25vw;";
      }
      return "30vw;";
    }}
    top: 20px;
    /* right: 20%; */
    right: ${({
      data = [{ isComplete: true, isActive: false, textStep: "نوع ضمانت" }],
    }) => {
      if (data?.length === 5) {
        return "12%;";
      }
      return "20%;";
    }}
    z-index: 3;
    border-radius: 15px;
  }

  .stepper-item:first-child::before {
    content: none;
  }
  .stepper-item:last-child::after {
    content: none;
  }
`;

export const StepperItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;

  ::before {
    position: absolute;
    content: "";
    border: 2px solid #c6bfed;
    width: 100%;
    top: 20px;
    left: 46%;
    z-index: 2;
    border-radius: 15px;
  }

  ::after {
    position: absolute;
    content: "";
    width: 100%;
    top: 20px;
    left: 0;
    z-index: 2;
  }
`;

export const Indicator = styled.div`
  position: absolute;
  top: 16px;
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: none;
`;

export const Tick = styled.div`
  color: ${({ theme }) => theme.colors.green};
  position: absolute;
  bottom: 2px;
`;
