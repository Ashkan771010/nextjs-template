import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";

import priceFormatter from "@utils/priceFormatter";

import { Button, Row, Typography } from "@theme/ui-components";

import {
  Box,
  PunchSVG,
  PaymentDetailsCard,
  AmountWrapper,
  LoanAfterPaymentFooter,
  PaymentDetailsWrapper,
} from "./style";
import HttpService from "@config/api-service";
import services from "src/services";
import LayoutContext from "src/context/layout/layoutContext";
import Spinner from "@components/shared/Spinner";
import { TraceButton } from "../AfterPayment/style";
import { useRouter } from "next/router";

const PaymentDetails: React.FC<any> = ({ data }) => {
  const router = useRouter()
  const [targetId, setTargetId] = useState<number | null>(null);
  const [loanId, setLoanId] = useState<number>();
  const [installmentData, setInstallmentData] = useState<any>([]);

  const handleInstallmentNumber = () => {
    switch (installmentData?.installmentNumber) {
      case 1:
        return "قسط اول";
      case 2:
        return "قسط دوم";
      case 3:
        return "قسط سوم";
      case 4:
        return "قسظ چهارم";
      case 5:
        return "قسط پنجم";
      case 6:
        return "قسط ششم";
    }
  };
  
  const handleChangeRoute = () => {
    loanId
    router.push(`/purchase-records/installments?loanId=${loanId}`)
  }

  useEffect(() => {
    if (data) setTargetId(data);
  }, [data]);

  useEffect(() => {
    if (targetId) {
      services
        .paymentInQueryService(targetId)
        .then(response => setInstallmentData(response?.data?.result));
    }
  }, [targetId]);

  useEffect(() => {
    if(localStorage.getItem("loanId")) {
      const loanId = localStorage.getItem("loanId");
      setLoanId(Number(loanId))
    }
  }, [])

  return (
    <PaymentDetailsWrapper>
      <Typography variant="BodyRegular" color="gray" className="mb-16">
        جزئیات تراکنش
      </Typography>
      <Box>
        <PunchSVG top src="/images/after-payment/palegray-punch.svg" alt="" />
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
                { installmentData?.amount !== null && installmentData?.amount !== undefined ? priceFormatter(installmentData?.amount) : (
                  <Spinner size={16} />
                )}
              </Typography>
              <Typography
                variant="CaptionRegular"
                color="gray"
                className="mr-4"
              >
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
              { installmentData?.serviceName !== null && installmentData?.serviceName !== undefined ? installmentData?.serviceName : (
                <Spinner size={16} />
              )}
            </Typography>
          </Row>
          <Row
            justifyContent="space-between"
            alignItems="center"
            className="mb-4"
          >
            <Typography variant="CaptionRegular" color="gray">
              شماره قسط:
            </Typography>
            <Typography variant="CaptionRegular" color="gray" className="mr-4">
              {handleInstallmentNumber() || <Spinner size={16} />}
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
              { installmentData?.date !== null && installmentData?.date !== undefined ? installmentData?.date : <Spinner size={16} />}
            </Typography>
          </Row>
          <Row justifyContent="space-between" alignItems="center">
            <Typography variant="CaptionRegular" color="gray">
              زمان تراکنش:
            </Typography>
            <Typography variant="CaptionRegular" color="gray" className="mr-4">
              { installmentData?.time !== null && installmentData?.time !== undefined ? installmentData?.time : <Spinner size={16} />}
            </Typography>
          </Row>
        </PaymentDetailsCard>
        <TraceButton onClick={handleChangeRoute}>
            بازگشت
          </TraceButton>
        <PunchSVG src="/images/after-payment/palegray-punch.svg" alt="" />
      </Box>
    </PaymentDetailsWrapper>
  );
};

export default PaymentDetails;
