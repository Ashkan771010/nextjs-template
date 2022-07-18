import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import HttpService from "@config/api-service";

import { IProps } from "./interface";

import statusEnum from "src/constants/enum";

import priceFormatter from "@utils/priceFormatter";
import CheckDocs from "@components/PurchaseRecordsBottomSheets/CheckDocs";
import GuaranteeCheck from "@components/PurchaseRecordsBottomSheets/GuaranteeCheck";
import Ambassador from "@components/PurchaseRecordsBottomSheets/Ambassador";
import PostCoordination from "@components/PurchaseRecordsBottomSheets/Delivery/PostCoordiantion";
import Sending from "@components/PurchaseRecordsBottomSheets/Delivery/Sending";
import DeliveryToCustomer from "@components/PurchaseRecordsBottomSheets/Delivery/DeliveryToCustomer";

import { Divider, Row, Step, Typography } from "@theme/ui-components";

import {
  PurchaseRecordCardWrapper,
  ImageWrapper,
  DetailsWrapper,
  PriceWrapper,
  OrderDateWrapper,
  CTAButtonsWrapper,
  LoanPaymentsButton,
  SeeDetailsButton,
} from "./style";
import services from "src/services";
import { SpinnerWrapper } from "@components/shared/ProductCard/style";
import Spinner from "@components/shared/Spinner";

const PurchaseRecordCard: React.FC<IProps> = ({
  productDetails,
  isActivePayinstallmentButton = false,
  stepData,
  loanType,
}) => {
  const { productName, productPrice, paymentDate, productImage } =
    productDetails;

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();

  const [isShowDetailsBottomSheet, setIsShowDetailsBottomSheet] =
    useState<number>(0);
  const [status, setStatus] = useState<number | null>(null);
  const [sendStatus, setSendStatus] = useState<number | null>(null);

  const handleSeeDetails = () => {
    if (loanType === statusEnum.LoanTypes.Check) {
      const { InitialInquiry, Guaranty, Courier, Delivery } =
        statusEnum?.ChequeLoanStatusEnum;
      const { BeforeSend, Send, AfterSend } = statusEnum?.SendStatusEnum;
      switch (`${status},${sendStatus}`) {
        case `${InitialInquiry},${BeforeSend}`:
          setIsShowDetailsBottomSheet(1);
          break;
        case `${Guaranty},${BeforeSend}`:
          setIsShowDetailsBottomSheet(2);
          break;
        case `${Courier},${BeforeSend}`:
          setIsShowDetailsBottomSheet(3);
          break;
        case `${Delivery},${BeforeSend}`:
          setIsShowDetailsBottomSheet(4);
          break;
        case `${Delivery},${Send}`:
          setIsShowDetailsBottomSheet(5);
          break;
        case `${Delivery},${AfterSend}`:
          setIsShowDetailsBottomSheet(6);
          break;
      }
    } else if (loanType === statusEnum.LoanTypes?.CashAndSim) {
      // setIsLoading(true);
      const { InitialInquiry, Price, Facilities, Curior, Delivery } =
        statusEnum?.SimAndCashLoanStatusEnum;
      const { BeforeSend, Send, AfterSend } = statusEnum?.SendStatusEnum;
      switch (`${status},${sendStatus}`) {
        case `${InitialInquiry},${BeforeSend}`:
          setIsShowDetailsBottomSheet(1);
          break;
        case `${Price},${BeforeSend}`:
          router.push(
            `/purchase-records/sim-price?loanId=${router.query.loanId}`
          );
          break;
        case `${Facilities},${BeforeSend}`:
          router.push(
            `/purchase-records/facilities?loanId=${router.query.loanId}`
          );
          break;
        case `${Curior},${BeforeSend}`:
          setIsShowDetailsBottomSheet(3);
          break;
        case `${Delivery},${BeforeSend}`:
          setIsShowDetailsBottomSheet(4);
          break;
        case `${Delivery},${Send}`:
          setIsShowDetailsBottomSheet(5);
          break;
        case `${Delivery},${AfterSend}`:
          setIsShowDetailsBottomSheet(6);
          break;
      }
    }
  };

  const handleShowInstallments = () => {
    setIsLoading(true)
    if (loanType === statusEnum.LoanTypes.Check) {
      const { Delivery } = statusEnum?.ChequeLoanStatusEnum;
      const { AfterSend } = statusEnum?.SendStatusEnum;
      if (status === Delivery && sendStatus === AfterSend) {
        router.push(
          `/purchase-records/installments?loanId=${router.query.loanId}`
        );
      }
    } else if (loanType === statusEnum?.LoanTypes?.CashAndSim) {
      const { Delivery } = statusEnum?.SimAndCashLoanStatusEnum;
      const { AfterSend } = statusEnum?.SendStatusEnum;
      if (status === Delivery && sendStatus === AfterSend) {
        router.push(
          `/purchase-records/installments?loanId=${router.query.loanId}`
        );
      }
    }
  };

  const handleCloseCheckBottomSheet = async () => {
    setIsShowDetailsBottomSheet(0);
    await services.chequeSeenService(Number(router.query?.loanId));
    window.location.reload();
  };

  useEffect(() => {
    if (loanType === statusEnum?.LoanTypes?.Check) {
      setSendStatus(productDetails?.chequeLoanDetail?.sendStatus);
      setStatus(productDetails?.chequeLoanDetail?.status);
    } else if (loanType === statusEnum?.LoanTypes?.CashAndSim) {
      setSendStatus(productDetails?.simAndCashLoanDetail?.sendStatus);
      setStatus(productDetails?.simAndCashLoanDetail?.status);
    }
  }, [loanType, productDetails]);

  return (
    <PurchaseRecordCardWrapper>
      <Row justifyContent="flex-start" alignItems="center" wrap="nowrap">
        <ImageWrapper>
          <img src={productImage} alt={productName} width={92} height={92} />
        </ImageWrapper>
        <DetailsWrapper>
          <Typography
            variant="CaptionRegular"
            color="gray"
            textAlign="right"
            direction="ltr"
            className="ml-auto"
          >
            {productName}
          </Typography>
          <PriceWrapper>
            <Typography variant="BodyBold" color="gray">
              {priceFormatter(productPrice)}
            </Typography>
            <Typography variant="CaptionLight" color="gray" className="mr-4">
              تومان
            </Typography>
          </PriceWrapper>
          <OrderDateWrapper>
            <Typography variant="CaptionRegular" color="gray">
              تاریخ ثبت سفارش:
            </Typography>
            <Typography variant="CaptionRegular" color="gray" className="mr-8">
              {paymentDate}
            </Typography>
          </OrderDateWrapper>
        </DetailsWrapper>
      </Row>
      <Divider className="mt-8 mb-8" />
      <Step stepData={stepData} isPurchaseRecord={true} />
      <CTAButtonsWrapper>
        <LoanPaymentsButton
          onClick={handleShowInstallments}
          isActive={isActivePayinstallmentButton}
        >
          {isLoading ? (
            <SpinnerWrapper>
              <Spinner size={24} />
            </SpinnerWrapper>
          ) : (
            <Typography variant="BodyRegular" color="white">
              پرداخت اقساط
            </Typography>
          )}
        </LoanPaymentsButton>
        <SeeDetailsButton onClick={handleSeeDetails}>
          <Typography variant="BodyRegular" color="black">
            مشاهده جزئیات سفارش
          </Typography>
        </SeeDetailsButton>
      </CTAButtonsWrapper>
      <CheckDocs
        isOpen={isShowDetailsBottomSheet === 1}
        onClose={() => setIsShowDetailsBottomSheet(0)}
      />
      {loanType === statusEnum.LoanTypes.Check && (
        <GuaranteeCheck
          isOpen={isShowDetailsBottomSheet === 2}
          onClose={handleCloseCheckBottomSheet}
          data={productDetails?.chequeLoanDetail?.fillCheque}
        />
      )}
      <Ambassador
        isOpen={isShowDetailsBottomSheet === 3}
        onClose={() => setIsShowDetailsBottomSheet(0)}
      />
      <PostCoordination
        isOpen={isShowDetailsBottomSheet === 4}
        onClose={() => setIsShowDetailsBottomSheet(0)}
      />
      <Sending
        isOpen={isShowDetailsBottomSheet === 5}
        onClose={() => setIsShowDetailsBottomSheet(0)}
      />
      <DeliveryToCustomer
        isOpen={isShowDetailsBottomSheet === 6}
        onClose={() => setIsShowDetailsBottomSheet(0)}
      />
    </PurchaseRecordCardWrapper>
  );
};

export default PurchaseRecordCard;
