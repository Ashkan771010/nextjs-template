import React from "react";

import HttpService from "@config/api-service";

import priceFormatter from "@utils/priceFormatter";

import { PunchSVG } from "@components/AfterPaymentBoxData/style";

import { Divider, Row, Typography } from "@theme/ui-components";

import { Box, BeforePaymentDetailsCard, PriceWrapper } from "./style";
import Spinner from "@components/shared/Spinner";

const BeforePaymentBoxData: React.FC<any> = data => {
  const { fullName, installmentNumber, paymentLink, totalPrice } = data.data;
  const handleInstallmentNumber = () => {
    switch (installmentNumber) {
      case 1:
        return "قسط اول";
      case 2:
        return "قسط دوم";
      case 3:
        return "قسط سوم";
      case 4:
        return "چهقسط ارم";
      case 5:
        return "پقسط نجم";
      case 6:
        return "قسط ششم";
    }
  };

  return (
    <Box>
      <PunchSVG top src="/images/after-payment/white-punch.svg" alt="" />
      <BeforePaymentDetailsCard>
        <Row
          justifyContent="space-between"
          alignItems="center"
          className="mb-16"
        >
          <Typography variant="BodyRegular" color="gray">
            وام گیرنده:
          </Typography>
          <Typography variant="BodyRegular" color="gray">
            {fullName !== null && fullName !== undefined ? fullName : <Spinner size={25} />}
          </Typography>
        </Row>
        {installmentNumber ? (
          <Row
            justifyContent="space-between"
            alignItems="center"
            className="mb-16"
          >
            <Typography variant="BodyRegular" color="gray">
              شماره قسط:
            </Typography>
            <Typography variant="BodyRegular" color="gray">
              {handleInstallmentNumber() ? handleInstallmentNumber() : <Spinner size={25} />}
            </Typography>
          </Row>
        ) : (
          (
            <Row
              justifyContent="space-between"
              alignItems="center"
              className="mb-16"
            >
              <Typography variant="BodyRegular" color="gray">
                کارمزد:
              </Typography>
              <Typography variant="CaptionRegular" color="gray">
                هزینه کارمزد با قسط اول محاسبه می‌شود
              </Typography>
            </Row>
          ) || <Spinner size={25} />
        )}
        <Divider className="mb-16" />
        <Row justifyContent="space-between" alignItems="center">
          <Typography variant="BodyRegular" color="gray">
            مجموع پرداختی:
          </Typography>
          <PriceWrapper>
            <Typography variant="BodyRegular" color="gray">
              {totalPrice !== null && totalPrice !== undefined ? priceFormatter(totalPrice) : (
                <Spinner size={25} />
              )}
            </Typography>
            <Typography variant="BodyRegular" color="gray">
              تومان
            </Typography>
          </PriceWrapper>
        </Row>
      </BeforePaymentDetailsCard>
      <PunchSVG src="/images/after-payment/white-punch.svg" alt="" />
    </Box>
  );
};

export default BeforePaymentBoxData;
