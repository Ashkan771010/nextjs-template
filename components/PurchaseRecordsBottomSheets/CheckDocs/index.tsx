import React from "react";
import Image from "next/image";

import { IProps } from "../Ambassador/interface";

import BottomSheetRoot from "@components/shared/BottomSheet";

import { Typography } from "@theme/ui-components";

import { CheckDocsBody, CheckDocsImgWrapper, UnderstoodButton } from "./style";

const CheckDocs: React.FC<IProps> = ({ isOpen = false, onClose }) => {
  return (
    <BottomSheetRoot
      isOpen={isOpen}
      onClose={onClose}
      title="بررسی مدارک"
      hasCloseIcon
    >
      <CheckDocsBody>
        <Typography variant="CaptionRegular" color="gray" textAlign="center">
          کاربر گرامی درخواست خرید شما ثبت شد. کارشناسان در حال بررسی اطلاعات
          هویتی و قیمت سیم کارت شما هستند. این مرحله ۳ الی ۵ روز کاری زمان نیاز
          دارد.
        </Typography>
        <CheckDocsImgWrapper>
          <Image
            src="/images/services/check-docs-icon.svg"
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
      </CheckDocsBody>
    </BottomSheetRoot>
  );
};

export default CheckDocs;
