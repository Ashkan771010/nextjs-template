import React from "react";
import Image from "next/image";

import { IProps } from "../../Ambassador/interface";

import { PostCoordinationWrapper } from "./style";
import {
  CheckDocsImgWrapper,
  UnderstoodButton,
} from "@components/PurchaseRecordsBottomSheets/CheckDocs/style";
import { HintWrapper } from "../style";

import BottomSheetRoot from "@components/shared/BottomSheet";

import { Step, Typography } from "@theme/ui-components";

const STEPDATACASHANDSIM = [
  { isComplete: false, isActive: true, textStep: "هماهنگی و ارسال" },
  { isComplete: false, isActive: false, textStep: "در حال ارسال" },
  { isComplete: false, isActive: false, textStep: "تحویل به مشتری" },
];

const PostCoordination: React.FC<IProps> = ({ isOpen = false, onClose }) => {
  return (
    <BottomSheetRoot isOpen={isOpen} onClose={onClose} hasCloseIcon>
      <PostCoordinationWrapper>
        <Step stepData={STEPDATACASHANDSIM} />
        <HintWrapper>
          <Typography
            variant="CaptionRegular"
            color="gray"
            textAlign="center"
            className="mt-20"
          >
            همکاران ما برای تعیین روز و ساعت ارسال کالا با شما تماس خواهند گرفت.
          </Typography>
        </HintWrapper>
        <CheckDocsImgWrapper>
          <Image
            src="/images/services/post-coordination.svg"
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
      </PostCoordinationWrapper>
    </BottomSheetRoot>
  );
};

export default PostCoordination;
