import React from "react";

import { Typography } from "../../../theme/ui-components";

import { IProps, TStepData } from "./interface";

import { StepperWrapper, StepperItem, Indicator, Tick } from "./style";

const Step: React.FC<any> = ({ stepData, isPurchaseRecord = false }) => {

  return (
    <StepperWrapper data={stepData} isPurchaseRecord={isPurchaseRecord}>
      {stepData?.map((data: TStepData, index: number) => {
        return (
          <StepperItem
            key={`${data?.textStep} ${index}`}
            className={`stepper-item ${data?.isComplete ? "completed" : ""} ${
              data?.isActive ? "active" : ""
            }`}
          >
            <Indicator className="step-counter"></Indicator>
            {data?.isActive ? (
              <Typography
                variant="textBold"
                color={data?.isActive ? "blueBerry" : "brownGray"}
                className="step-name"
              >
                {data?.textStep}
              </Typography>
            ) : (
              <Typography
                variant="textRegular"
                color={data?.isActive ? "blueBerry" : "brownGray"}
                className="step-name"
              >
                {data?.textStep}
              </Typography>
            )}
            {data?.isComplete && <Tick>✓</Tick>}
          </StepperItem>
        );
      })}
    </StepperWrapper>
  );
};

export default Step;
