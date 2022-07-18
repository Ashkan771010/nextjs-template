import React, { useState } from "react";
import { useRouter } from "next/router";

import { Col, Row, Typography } from "@theme/ui-components";

import {
  ActiveProductCardWrapper,
  ActionWrapper,
  DetailsWrapper,
  TrackOrderButton,
  DetailItem,
} from "./style";
import { SpinnerWrapper } from "../ProductCard/style";
import Spinner from "../Spinner";

interface IActiveProductCard {
  data: {
    endDate?: string;
    installmentCount?: number;
    installmentStarted?: boolean;
    loanId?: number;
    title?: string;
  };
}

const ActiveProductCard: React.FC<IActiveProductCard> = ({ data }) => {
  const router = useRouter();

  const { title, installmentCount, endDate, installmentStarted, loanId } = data;

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleChangeRoute = () => {
    setIsLoading(true);
    if (installmentStarted) {
      router.push(`/purchase-records/installments?loanId=${loanId}`);
    } else {
      router.push(`/purchase-records?loanId=${loanId}`);
    }
  };
  return (
    <ActiveProductCardWrapper>
      <Row justifyContent="space-between" alignItems="flex-start">
        <Col xs={6}>
          <Typography variant="CaptionRegular" color="white">
            کالای خریداری شده:
          </Typography>
          <Typography
            variant="CaptionBold"
            color="white"
            textAlign="right"
            direction="ltr"
          >
            {title}
          </Typography>
          <Typography
            variant="textLight"
            color="white"
            className="mt-4"
            textAlign="right"
            direction="ltr"
          >
            تا پایان بازپرداخت اقساط، فقط امکان مشاهده دیگر محصولات وجود دارد
          </Typography>
        </Col>
        <Col xs={6}>
          <ActionWrapper>
            <DetailsWrapper>
              <DetailItem>
                <Typography variant="textLight" color="white">
                  تعداد اقساط:
                </Typography>
                <Typography
                  variant="textRegular"
                  color="white"
                  className="mr-4"
                >
                  {installmentCount} ماهه
                </Typography>
              </DetailItem>
              <DetailItem className="second-item">
                <Typography variant="textLight" color="white">
                  پایان اقساط؛
                </Typography>
                <Typography
                  variant="textRegular"
                  color="white"
                  className="mr-4"
                >
                  {endDate}
                </Typography>
              </DetailItem>
            </DetailsWrapper>
            <TrackOrderButton onClick={handleChangeRoute}>
              {isLoading ? (
                <SpinnerWrapper>
                  <Spinner size={24} />
                </SpinnerWrapper>
              ) : (
                <Typography variant="BodyRegular" color="gray">
                  {installmentStarted ? "پرداخت اقساط" : "پیگیری خرید"}
                </Typography>
              )}
            </TrackOrderButton>
          </ActionWrapper>
        </Col>
      </Row>
    </ActiveProductCardWrapper>
  );
};

export default ActiveProductCard;
