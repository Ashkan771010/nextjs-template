import React from "react";
import Image from "next/image";

import { IProps } from "./interface";

import BottomSheetRoot from "@components/shared/BottomSheet";

import { Typography } from "@theme/ui-components";

import { AmbassadorWrapper } from "./style";
import { CheckDocsImgWrapper, UnderstoodButton } from "../CheckDocs/style";

const Ambassador: React.FC<IProps> = ({ isOpen = false, onClose }) => {
  return (
    <BottomSheetRoot
      isOpen={isOpen}
      onClose={onClose}
      title="اعزام سفیر"
      hasCloseIcon
    >
      <AmbassadorWrapper>
        <Typography variant="CaptionRegular" color="gray" textAlign="center">
          در این مرحله همکاران ما جهت هماهنگی برای اعزام سفیر و دریافت چک ضمانت
          با شما تماس خواهند گرفت.
        </Typography>
        <CheckDocsImgWrapper>
          <Image
            src="/images/services/ambassor-icon.svg"
            alt="check-docs"
            width={120}
            height={80}
          />
        </CheckDocsImgWrapper>
        <UnderstoodButton onClick={onClose}>
          <Typography variant="LargeTitleBold" color="gray">
            متوجه شدم
          </Typography>
        </UnderstoodButton>
      </AmbassadorWrapper>
    </BottomSheetRoot>
  );
};

export default Ambassador;
