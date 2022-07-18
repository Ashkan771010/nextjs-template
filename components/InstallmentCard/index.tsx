import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import priceFormatter from "@utils/priceFormatter";

import { Row, Typography } from "@theme/ui-components";

import {
  InstallmentCardWrapper,
  ArrivedWrapper,
  WasPaidWrapper,
  PriceWrapper,
  PaymentButton,
  SeeDetailsButton,
} from "./style";
import { SpinnerWrapper } from "@components/shared/ProductCard/style";
import Spinner from "@components/shared/Spinner";

const InstallmentCard: React.FC<any> = ({
  amount,
  date,
  installmentNumber,
  isCurrentInstallment,
  paid,
  paymentId,
  installmentId,
}) => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleChangeRoute = () => {
    setIsLoading(true);
    if (!paid) {
      router.push(
        `/purchase-records/loan-payment/before-payment?installmentId=${installmentId}`
      );
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
    <InstallmentCardWrapper>
      <Row justifyContent="space-between" alignItems="center">
        <ArrivedWrapper>
          <Typography variant="CaptionRegular" color="gray">
            قسط {handleInstallmentNumber()} - سررسید:
          </Typography>
          <Typography variant="CaptionRegular" color="gray" className="mr-4">
            {date}
          </Typography>
        </ArrivedWrapper>
        {paid && (
          <WasPaidWrapper>
            <Typography variant="textRegular" color="gray" className="ml-4">
              پرداخت شد
            </Typography>
            <Image
              src="/images/general/yes.svg"
              alt="yes-icon"
              width={12}
              height={12}
            />
          </WasPaidWrapper>
        )}
      </Row>
      <Row justifyContent="space-between" alignItems="center">
        <PriceWrapper>
          <Typography variant="BodyBold" color="gray">
            {priceFormatter(amount)}
          </Typography>
          <Typography variant="CaptionLight" color="gray" className="mr-4">
            تومان
          </Typography>
        </PriceWrapper>
        {!paid ? (
          <PaymentButton onClick={handleChangeRoute}>
            {isLoading ? (
              <SpinnerWrapper>
                <Spinner size={24} />
              </SpinnerWrapper>
            ) : (
              <Typography variant="BodyRegular" color="white">
                پرداخت
              </Typography>
            )}
          </PaymentButton>
        ) : (
          <SeeDetailsButton
            onClick={() => {
              setIsLoading(true);
              router.push(
                `/purchase-records/loan-payment/transaction-details/${paymentId}`
              );
            }}
          >
            {isLoading ? (
              <SpinnerWrapper>
                <Spinner size={24}/>
              </SpinnerWrapper>
            ) : (
              <Typography variant="BodyRegular" color="gray">
                مشاهده جزئیات
              </Typography>
            )}
          </SeeDetailsButton>
        )}
      </Row>
    </InstallmentCardWrapper>
  );
};

export default InstallmentCard;
