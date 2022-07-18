import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import priceFormatter from "@utils/priceFormatter";

import BeforePaymentBoxData from "@components/BeforePaymentBoxData";

import { Button, Row, Typography } from "@theme/ui-components";

import { LoabBeforePaymentWrapper } from "./style";
import { LoanAfterPaymentFooter } from "../AfterPayement/style";
import { AmountWrapper } from "@components/AfterPaymentBoxData/style";
import statusEnum from "src/constants/enum";
import services from "src/services";
import Spinner from "@components/shared/Spinner";

const BeforePayment: React.FC<any> = () => {
  const router = useRouter();

  const [installmentId, setInstallmentId] = useState<number | null>(null);
  const [installmentDetails, setInstallmentDetails] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleChangeRoute = () => {
    setIsLoading(true);
    router.push(installmentDetails?.paymentLink);
  };

  useEffect(() => {
    if (router.query?.installmentId) {
      setInstallmentId(Number(router.query?.installmentId));
    }
    if (Number(router?.query?.loanType) === statusEnum?.LoanTypes?.CashAndSim) {
    }
  }, [router]);

  useEffect(() => {
    if (installmentId && router?.query?.installmentId) {
      services
        .installmentBeforePaymentFactorService(
          Number(router.query.installmentId)
        )
        .then(response => setInstallmentDetails(response?.data?.result));
    }
    if (Number(router?.query?.loanType) === statusEnum?.LoanTypes?.CashAndSim) {
      const data = {
        loanId: Number(router?.query?.loanId),
        loanPeriod: Number(router?.query?.loanPeriod),
      };
      services
        .cashBeforePaymentFactorService(data)
        .then(response => setInstallmentDetails(response?.data?.result));
    }
  }, [installmentId, router]);

  useEffect(() => {
    if(router.isReady) {
      localStorage.setItem("beforPayment", `${router.pathname}?installmentId=${router?.query?.installmentId}`)
    }
  })

  return (
    <LoabBeforePaymentWrapper>
      <Typography variant="BodyRegular" color="gray" className="mt-4 mb-16">
        رسید و پرداخت
      </Typography>
      <BeforePaymentBoxData data={installmentDetails} />
      <LoanAfterPaymentFooter>
        <Row
          justifyContent="space-between"
          alignItems="center"
          className="mb-32"
        >
          <Typography variant="LargeTitleRegular" color="gray">
            مبلغ قابل پرداخت:
          </Typography>
          <AmountWrapper>
            <Typography variant="XLargeTitleBold" color="gray">
              {installmentDetails?.totalPrice !== null && installmentDetails?.totalPrice !== undefined ? priceFormatter(installmentDetails?.totalPrice) : (
                <Spinner size={25} />
              )}
            </Typography>
            <Typography
              variant="BodyRegular"
              color="gray"
              className="mr-4 mb-4"
            >
              تومان
            </Typography>
          </AmountWrapper>
        </Row>
        <Button
          onClick={handleChangeRoute}
          variant="contained"
          fullWidth
          height="48px"
          _size="XXL"
          color="success"
          isLoading={isLoading}
        >
          <Typography variant="LargeTitleBold" color="white">
            پرداخت
          </Typography>
        </Button>
      </LoanAfterPaymentFooter>
    </LoabBeforePaymentWrapper>
  );
};

export default BeforePayment;
