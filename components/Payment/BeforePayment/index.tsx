import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import { IProps } from "../BeforePayment/interface";

import Box from "@components/shared/Box";

import {
  Button,
  Divider,
  Row,
  Step,
  Switch,
  Typography,
} from "@theme/ui-components";

import priceFormatter from "@utils/priceFormatter";

import { BeforePaymentWrapper, FooterWrapper, WalletWrapper } from "./style";
import { PriceWrapper } from "../AfterPayment/style";
import services from "src/services";
import Spinner from "@components/shared/Spinner";
import { CTAButtonWrapper } from "@components/IdentityInformation/style";

const STEPDATACASHANDSIM = [
  { isComplete: true, isActive: false, textStep: "شماره سیمکارت" },
  { isComplete: true, isActive: false, textStep: "اطلاعات هویتی" },
  { isComplete: false, isActive: true, textStep: "پیش‌پرداخت" },
];

const STEPDATACHECK = [
  { isComplete: true, isActive: false, textStep: "تسهیلات" },
  { isComplete: true, isActive: false, textStep: "اطلاعات هویتی" },
  { isComplete: true, isActive: false, textStep: "اطلاعات مالی" },
  { isComplete: false, isActive: true, textStep: "پیش‌پرداخت" },
];

interface IResponseFactor {
  authenticationTotalAmount?: number;
  paymentLink?: string;
  validationTotalAmount?: number;
}

const BeforePayment: React.FC<IProps> = () => {
  const router = useRouter();

  const [responseFactor, setResponseFactor] = useState<
    IResponseFactor | undefined
  >(undefined);
  const [guaranteeType, setGuaranteeType] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  //@ts-ignore
  const [totalNumber, setTotalNumber] = useState<number>();

  useEffect(() => {
    if(router.isReady) {
      setGuaranteeType(Number(router?.query?.guaranteeType));
      localStorage.setItem("beforPayment", `${router.pathname}?guaranteeType=${router?.query?.guaranteeType}`)
    }
  }, [guaranteeType, router]);


  console.log("responseFactor", responseFactor)

  useEffect(() => {
    if (typeof guaranteeType !== "number") {
      return;
    } else {
      if (+guaranteeType === 0) {
        const installmentDetailsData = JSON.parse(
          localStorage.getItem("intallmentDetail") ?? ""
        );
        const userInformationData = JSON.parse(
          localStorage.getItem("userInformation") ?? ""
        );
        const financialinformationData = JSON.parse(
          localStorage.getItem("financialinformation") ?? ""
        );
        const dataBody = {
          intallmentDetail: {
            productId: installmentDetailsData?.productId,
            installmentPeriod: installmentDetailsData?.installmentPeriod,
          },
          userInformation: {
            firstName: userInformationData?.firstName,
            lastName: userInformationData?.lastName,
            fatherName: userInformationData?.fatherName,
            nationalCode: userInformationData?.nationalCode,
            birthCertificateNumber: userInformationData?.birthCertificateId,
            cityId: userInformationData?.city,
            stateId: userInformationData?.province,
            postalCode: userInformationData?.postalCode,
            address: userInformationData?.address,
          },
          financialInformation: {
            bankId: financialinformationData?.bankId,
            stateId: financialinformationData?.stateId,
            accountNumber: financialinformationData?.accountNumber,
            nationalCardImageId: financialinformationData?.nationalCardImageId,
            chequeImageId: financialinformationData?.chequeImageId,
          },
        };
        services
          .chequeCreateLoanDemandService(dataBody)
          .then((response) => setResponseFactor(response?.data?.result));
      } else {
        const installmentDetailsData = JSON.parse(
          localStorage.getItem("intallmentDetail") ?? ""
        );
        const userInformationData = JSON.parse(
          localStorage.getItem("userInformation") ?? ""
        );
        const dataBodyCashAndSim = {
          simcardNumber: userInformationData?.simcardNumber,
          productId: installmentDetailsData?.productId,
          userInformation: {
            firstName: userInformationData?.firstName,
            lastName: userInformationData?.lastName,
            fatherName: userInformationData?.fatherName,
            nationalCode: userInformationData?.nationalCode,
            birthCertificateNumber: userInformationData?.birthCertificateId,
            cityId: userInformationData?.city,
            stateId: userInformationData?.province,
            postalCode: userInformationData?.postalCode,
            address: userInformationData?.address,
          },
        };
        services
          .simAndCashCreateLoanDemandService(dataBodyCashAndSim)
          .then((response) => setResponseFactor(response?.data?.result));
      }
    }
  }, [guaranteeType]);

  useEffect(() => {
    if (responseFactor !== undefined) {
      setTotalNumber(
        //@ts-ignore
        responseFactor?.authenticationTotalAmount +
          //@ts-ignore
          responseFactor?.validationTotalAmount
      );
    }
  }, [responseFactor]);

  return (
    <BeforePaymentWrapper>
      <Step
        stepData={guaranteeType === 0 ? STEPDATACHECK : STEPDATACASHANDSIM}
      />
      <Typography variant="BodyRegular" color="gray" className="mt-16">
        رسید و انتخاب نحوه پرداخت
      </Typography>
      <Box bgColor="white" className="mb-32">
        <Row justifyContent="space-between" alignItems="center">
          <Typography variant="BodyRegular" color="gray">
            هزینه احراز هویت
          </Typography>
          <PriceWrapper>
            <Typography variant="BodyBold" color="gray">
              {responseFactor?.authenticationTotalAmount !== null &&
              responseFactor?.authenticationTotalAmount !== undefined ? (
                priceFormatter(responseFactor?.authenticationTotalAmount)
              ) : (
                <Spinner size={24} />
              )}
            </Typography>
            <Typography variant="CaptionRegular" color="gray" className="mr-4">
              تومان
            </Typography>
          </PriceWrapper>
        </Row>
        {guaranteeType === 0 && (
          <Row
            justifyContent="space-between"
            alignItems="center"
            className="mt-16"
          >
            <Typography variant="BodyRegular" color="gray">
              هزینه اعتبارسنجی
            </Typography>
            <PriceWrapper>
              <Typography variant="BodyBold" color="gray">
                {responseFactor?.validationTotalAmount !== null &&
                responseFactor?.validationTotalAmount !== undefined ? (
                  priceFormatter(responseFactor?.validationTotalAmount)
                ) : (
                  <Spinner size={24} />
                )}
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
        )}
        <Divider className="mt-16 mb-16" />
        <Row justifyContent="space-between" alignItems="center">
          <Typography variant="BodyRegular" color="gray">
            مجموع پرداختی:
          </Typography>
          <PriceWrapper>
            <Typography variant="BodyBold" color="gray">
              {priceFormatter(totalNumber) || <Spinner size={24} />}
            </Typography>
            <Typography variant="CaptionRegular" color="gray" className="mr-4">
              تومان
            </Typography>
          </PriceWrapper>
        </Row>
      </Box>
      <CTAButtonWrapper>
        {/* <WalletWrapper>
          <Row alignItems="center" className="mb-16">
            <Image
              src="/images/general/wallet-outline.svg"
              alt="wallet"
              width={24}
              height={24}
            />
            <Typography variant="BodyRegular" color="gray" className="mr-8">
              استفاده از اعتبار کیف پول
            </Typography>
          </Row>
          <Row alignItems="center">
            <Typography variant="BodyRegular" color="gray">
              موجودی:
            </Typography>
            <Typography variant="BodyRegular" color="gray" className="mr-4">
              ۲,۵۰۰,۰۰۰
            </Typography>
            <Typography variant="BodyRegular" color="gray" className="mr-4">
              تومان
            </Typography>
            <Switch className="mr-auto" />
          </Row>
        </WalletWrapper> */}

        {/* http://localhost:3000/buy/after-payment?IsSuccess=True&paymentId=483 */}

        <Row
          justifyContent="space-between"
          alignItems="center"
          className="mt-24 mb-36"
        >
          <Typography
            variant="LargeTitleRegular"
            color="darkBlueBerry"
            className="ml-auto"
          >
            مبلغ قابل پرداخت:
          </Typography>
          <Typography variant="XLargeTitleBold" color="darkBlueBerry">
            {guaranteeType === 0 ? (
              totalNumber !== null && totalNumber !== undefined ? (
                priceFormatter(totalNumber)
              ) : (
                <Spinner size={24} />
              )
            ) : responseFactor?.authenticationTotalAmount !== null &&
              responseFactor?.authenticationTotalAmount !== undefined ? (
              priceFormatter(responseFactor?.authenticationTotalAmount)
            ) : (
              <Spinner size={24} />
            )}
          </Typography>
          <Typography
            variant="BodyRegular"
            color="darkBlueBerry"
            className="mr-8"
          >
            تومان
          </Typography>
        </Row>
        <Button
          onClick={() => {
            setIsLoading(true);
            router.push(responseFactor?.paymentLink ?? "");
          }}
          variant="contained"
          fullWidth
          height="48px"
          _size="XXL"
          color="success"
          isLoading={isLoading}
        >
          <Typography variant="LargeTitleBold" color="white" className="">
            پرداخت
          </Typography>
        </Button>
      </CTAButtonWrapper>
    </BeforePaymentWrapper>
  );
};

export default BeforePayment;
