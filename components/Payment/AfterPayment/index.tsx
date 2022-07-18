import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import priceFormatter from "@utils/priceFormatter";

import status from "src/constants/enum";

import { Button, Row, Step, Typography } from "@theme/ui-components";

import Box from "@components/shared/Box";

import {
  AfterPaymentWrapper,
  DetailsWrapper,
  PriceWrapper,
  TraceButton,
  PageFooter,
  IconWrapper,
  HeaderWrapper,
} from "./style";
import statusEnum from "src/constants/enum";
import { SpinnerWrapper } from "@components/shared/ProductCard/style";
import Spinner from "@components/shared/Spinner";

const STEPDATACHECK = [
  { isComplete: true, isActive: false, textStep: "تسهیلات" },
  { isComplete: true, isActive: false, textStep: "اطلاعات هویتی" },
  { isComplete: true, isActive: false, textStep: "اطلاعات مالی" },
  { isComplete: true, isActive: true, textStep: "پیش‌پرداخت" },
];

const STEPDATACASHANDSIM = [
  { isComplete: true, isActive: false, textStep: "تسهیلات" },
  { isComplete: true, isActive: false, textStep: "اطلاعات هویتی" },
  { isComplete: true, isActive: true, textStep: "پیش‌پرداخت" },
];
const AfterPayment: React.FC<any> = (afterPaymentData) => {
  const {
    amount,
    date,
    installmentNumber,
    isSuccess,
    serviceName,
    serviceType,
    time,
    loanId,
    loanType,
  } = afterPaymentData?.afterPaymentData;

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();

  const handleChangeRoute = () => {
    setIsLoading(true);
    if(isSuccess) {
      router.push(`/purchase-records?loanId=${loanId}`);
      if(localStorage.getItem("userInformation")) {
        localStorage.removeItem("userInformation")
      }
      if(localStorage.getItem("financialinformation")) {
        localStorage.removeItem("financialinformation")
      }
    }else {
      const guaranteeType = localStorage.getItem("beforPayment")
      router.push(`${guaranteeType}`)
    }
    
  };

  const handleInstallmentNumber = () => {
    switch (installmentNumber) {
      case 1:
        return "اول";
      case 2:
        return "دوم";
      case 3:
        return "سوم";
      case 4:
        return "چهارم";
      case 5:
        return "پنجم";
      case 6:
        return "ششم";
    }
  };

  return (
    <AfterPaymentWrapper>
      {!installmentNumber &&
        serviceType === status.ServiceTypeEnum?.AuthorizePayment && (
          <Step
            stepData={
              serviceType === statusEnum.LoanTypes.Check
                ? STEPDATACHECK
                : STEPDATACASHANDSIM
            }
          />
        )}
      <HeaderWrapper>
        <Typography
          variant="BodyRegular"
          color="gray"
          className="mt-32"
          textAlign="center"
          display="block"
        >
          {isSuccess ? "تراکنش موفق" : "تراکنش ناموفق"}
        </Typography>
        <IconWrapper>
          <Image
            src={
              isSuccess ? "/images/general/yes.svg" : "/images/general/no.svg"
            }
            alt="yes-icon"
            width={16}
            height={16}
          />
        </IconWrapper>
      </HeaderWrapper>
      <Box bgColor="paleGrey2" isInstallment>
        <Typography variant="CaptionRegular" textAlign="center">
          {isSuccess
            ? !installmentNumber && !serviceType
              ? "پرداخت شما برای بررسی احراز هویت و اعتبارسنجی با مشخصات زیر انجام شد"
              : "پرداخت قسط شما با موفقیت انجام شد"
            : null}
        </Typography>
        <DetailsWrapper isSuccess={isSuccess}>
          <Row
            justifyContent="space-between"
            alignItems="center"
            className="mb-4"
          >
            <Typography variant="CaptionRegular" color="gray">
              مبلغ تراکنش
            </Typography>
            <PriceWrapper>
              <Typography variant="BodyBold" color="gray">
                {priceFormatter(amount)}
              </Typography>
              <Typography
                variant="CaptionRegular"
                color="gray"
                className="mr-4"
              >
                تومان
              </Typography>
            </PriceWrapper>
          </Row>
          <Row
            justifyContent="space-between"
            alignItems="center"
            className="mb-4"
          >
            <Typography variant="CaptionRegular" color="gray">
              سرویس تراکنش
            </Typography>
            <Typography variant="CaptionRegular" color="gray">
              {serviceName}
            </Typography>
          </Row>
          {installmentNumber !== 0 && (
            <Row
              justifyContent="space-between"
              alignItems="center"
              className="mb-4"
            >
              <Typography variant="CaptionRegular" color="gray">
                شماره قسط:
              </Typography>
              <Typography variant="CaptionRegular" color="gray">
                قسط {handleInstallmentNumber()}
              </Typography>
            </Row>
          )}
          <Row
            justifyContent="space-between"
            alignItems="center"
            className="mb-4"
          >
            <Typography variant="CaptionRegular" color="gray">
              تاریخ تراکنش:
            </Typography>
            <Typography variant="CaptionRegular" color="gray">
              {date}
            </Typography>
          </Row>
          <Row justifyContent="space-between" alignItems="center">
            <Typography variant="CaptionRegular" color="gray">
              زمان تراکنش:
            </Typography>
            <Typography variant="CaptionRegular" color="gray">
              {time}
            </Typography>
          </Row>
        </DetailsWrapper>
          <TraceButton onClick={handleChangeRoute}>
            {isLoading ? (
              <SpinnerWrapper>
                <Spinner size={24} />
              </SpinnerWrapper>
            ) : (
              <Typography variant="BodyRegular" color="gray">
                {isSuccess ? "پیگیری و سوابق خرید" : "تلاش مجدد"}
              </Typography>
            )}
          </TraceButton>
      </Box>
    </AfterPaymentWrapper>
  );
};

export default AfterPayment;
