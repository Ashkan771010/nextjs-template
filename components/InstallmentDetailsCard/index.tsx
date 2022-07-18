import React from "react";

import priceFormatter from "@utils/priceFormatter";

import { Row, Typography } from "@theme/ui-components";

import { Card, PriceWrapper } from "./style";

const InstallmentDetailsCard: React.FC<any> = ({ detail }) => {
  if (!detail) {
    return <></>
  }
  const { endDate, remainCount, startDate, totalAmount, totalCount } = detail;
  return (
    <Card>
      <Row alignItems="center">
        <Typography variant="BodyRegular" color="gray">
          تسهیلات دریافتی:
        </Typography>
        <PriceWrapper>
          <Typography variant="BodyBold" color="gray">
            {priceFormatter(totalAmount)}
          </Typography>
          <Typography variant="CaptionLight" color="gray" className="mr-4">
            تومان
          </Typography>
        </PriceWrapper>
      </Row>
      <Row alignItems="center" className="mt-8 mb-4">
        <Typography variant="textRegular" color="gray">
          تعداد اقساط:
        </Typography>
        <Typography variant="textRegular" color="gray" className="mr-4">
          {totalCount} ماهه
        </Typography>
      </Row>
      <Row alignItems="center" className="mb-4">
        <Typography variant="textRegular" color="gray">
          تعداد اقساط باقی‌مانده:
        </Typography>
        <Typography variant="textRegular" color="gray" className="mr-4">
          {remainCount} ماهه
        </Typography>
      </Row>
      <Row alignItems="center" className="mb-4">
        <Typography variant="textRegular" color="gray">
          شروع اقساط:
        </Typography>
        <Typography variant="textRegular" color="gray" className="mr-4">
          {startDate}
        </Typography>
      </Row>
      <Row alignItems="center" className="mb-4">
        <Typography variant="textRegular" color="gray">
          پایان اقساط:
        </Typography>
        <Typography variant="textRegular" color="gray" className="mr-4">
          {endDate}
        </Typography>
      </Row>
    </Card>
  );
};

export default InstallmentDetailsCard;
