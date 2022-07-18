import React from "react";

import { IProps } from "../Ambassador/interface";

import priceFormatter from "@utils/priceFormatter";

import BottomSheetRoot from "@components/shared/BottomSheet";

import { Bullet, Row, Typography } from "@theme/ui-components";

import {
  GuaranteeCheckWrapper,
  CheckAmountWrapper,
  PriceWrapper,
  CheckHintsWrapper,
  CheckImage,
} from "./style";
import { UnderstoodButton } from "../CheckDocs/style";

const GuaranteeCheck: React.FC<IProps> = ({
  isOpen = false,
  onClose,
  data,
}) => {
  const { chequeDate, chequeNumericAmount, chequeTextualAmount, payTo } = data;
  return (
    <BottomSheetRoot
      isOpen={isOpen}
      onClose={onClose}
      title="چک ضمانت"
      hasCloseIcon
    >
      <GuaranteeCheckWrapper>
        <Typography variant="CaptionRegular" color="gray">
          کاربر گرام صحت اطلاعات شما تایید شد. قبل از اعزام سفیر، برگ چک را طبق
          مشخصات زیر پر نمونده و منتظر اعزام سفیر باشید.
        </Typography>
        <CheckAmountWrapper>
          <Typography variant="CaptionRegular" color="gray">
            مبلغ چک برای شما:
          </Typography>
          <PriceWrapper>
            <Typography variant="BodyBold" color="gray">
              {priceFormatter(chequeNumericAmount * 10)}
            </Typography>
            <Typography variant="CaptionRegular" color="gray" className="mr-4">
              ریال
            </Typography>
          </PriceWrapper>
        </CheckAmountWrapper>
        <CheckHintsWrapper>
          <Typography variant="CaptionRegular" color="gray" className="mb-4">
            نمونه چک
          </Typography>
          <CheckImage src="/images/services/check-img.png" alt="check image" />
          <Row justifyContent="flex-start" alignItems="center" className="mb-4">
            <Bullet number={1} />
            <Typography variant="CaptionRegular" color="gray" className="mr-4">
              مبلغ چک به حروف:
            </Typography>
            <Typography variant="CaptionRegular" color="gray" className="mr-4">
              {chequeTextualAmount}
            </Typography>
          </Row>
          <Row justifyContent="flex-start" alignItems="center" className="mb-4">
            <Bullet number={2} />
            <Typography variant="CaptionRegular" color="gray" className="mr-4">
              در وجه: شرکت ستاره درخشان همراه کیش
            </Typography>
          </Row>
          <Row justifyContent="flex-start" alignItems="center" className="mb-4">
            <Bullet number={3} />
            <Typography variant="CaptionRegular" color="gray" className="mr-4">
              لطفا در این قسمت چیزی ننویسید
            </Typography>
          </Row>
          <Row justifyContent="flex-start" alignItems="center" className="mb-4">
            <Bullet number={4} />
            <Typography variant="CaptionRegular" color="gray" className="mr-4">
              محل امضا چک
            </Typography>
          </Row>
          <Row justifyContent="flex-start" alignItems="center" className="mb-4">
            <Bullet number={5} />
            <Typography variant="CaptionRegular" color="gray" className="mr-4">
              مبلغ چک به عدد:
            </Typography>
            <Typography variant="CaptionRegular" color="gray" className="mr-4">
              {priceFormatter(chequeNumericAmount * 10)} ریال
            </Typography>
          </Row>
          <Row justifyContent="flex-start" alignItems="center" className="mb-4">
            <Bullet number={6} />
            <Typography variant="CaptionRegular" color="gray" className="mr-4">
              تاریخ چک:
            </Typography>
            <Typography variant="CaptionRegular" color="gray" className="mr-4">
              {chequeDate}
            </Typography>
          </Row>
          <Row justifyContent="flex-start" alignItems="center">
            <Typography variant="CaptionRegular" color="gray" className="mr-20">
              توجه داشته‌باشید که چک دچار خط‌خوردگی نباشد و عینا مطابق موارد ذکر
              شده پر شود.
            </Typography>
          </Row>
        </CheckHintsWrapper>
        <UnderstoodButton onClick={onClose}>
          <Typography variant="LargeTitleBold" color="gray">
            متوجه شدم
          </Typography>
        </UnderstoodButton>
      </GuaranteeCheckWrapper>
    </BottomSheetRoot>
  );
};

export default GuaranteeCheck;
