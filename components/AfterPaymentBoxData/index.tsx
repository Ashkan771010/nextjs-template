import React from "react";

import { Row, Typography } from "@theme/ui-components";

import {
  Box,
  PunchSVG,
  PaymentDetailsCard,
  AmountWrapper,
} from "./style";

const AfterPaymentBox: React.FC = () => {
  return (
    <Box>
      <PunchSVG top src="/images/after-payment/palegray-punch.svg" alt="" />
      <Typography
        variant="CaptionRegular"
        color="gray"
        display="block"
        textAlign="center"
      >
        پرداخت قسط شما با موفقیت انجام شد.
      </Typography>
      <PaymentDetailsCard>
        <Row
          justifyContent="space-between"
          alignItems="center"
          className="mb-4"
        >
          <Typography variant="CaptionRegular" color="gray">
            مبلغ تراکنش:
          </Typography>
          <AmountWrapper>
            <Typography variant="BodyBold" color="gray">
              ۲۵۰,۰۰۰
            </Typography>
            <Typography variant="CaptionRegular" color="gray" className="mr-4">
              ریال
            </Typography>
          </AmountWrapper>
        </Row>
        <Row
          justifyContent="space-between"
          alignItems="center"
          className="mb-4"
        >
          <Typography variant="CaptionRegular" color="gray">
            سرویس تراکنش:
          </Typography>
          <Typography variant="CaptionRegular" color="gray" className="mr-4">
            خرید اقساطی
          </Typography>
        </Row>
        <Row
          justifyContent="space-between"
          alignItems="center"
          className="mb-4"
        >
          <Typography variant="CaptionRegular" color="gray">
            نحوه پرداخت:
          </Typography>
          <Typography variant="CaptionRegular" color="gray" className="mr-4">
            کیف پول
          </Typography>
        </Row>
        <Row
          justifyContent="space-between"
          alignItems="center"
          className="mb-4"
        >
          <Typography variant="CaptionRegular" color="gray">
            تاریخ تراکنش:
          </Typography>
          <Typography variant="CaptionRegular" color="gray" className="mr-4">
            سه‌شنبه ۹۹/۰۵/۰۶
          </Typography>
        </Row>
        <Row justifyContent="space-between" alignItems="center">
          <Typography variant="CaptionRegular" color="gray">
            زمان تراکنش:
          </Typography>
          <Typography variant="CaptionRegular" color="gray" className="mr-4">
            ۲۲:۱۵
          </Typography>
        </Row>
      </PaymentDetailsCard>
      <PunchSVG src="/images/after-payment/palegray-punch.svg" alt="" />
    </Box>
  );
};

export default AfterPaymentBox;
