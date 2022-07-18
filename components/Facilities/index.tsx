import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import installmentDetailsContext from "src/context/installmentDetails/installmentDetailsContext";

import {
  Col,
  Row,
  Step,
  Typography,
  TitleIcon,
  Button,
  Tabbar,
} from "@theme/ui-components";

import priceFormatter from "@utils/priceFormatter";

import {
  PriceWrapper,
  PriceBox,
  BoxPriceWrapper,
  PageFooter,
  CTAButtonWrapper,
} from "./style";
import CustomLinkWrapper from "@components/shared/CustomLinkWrapper";
import services from "src/services";

const STEPDATA = [
  { isComplete: false, isActive: true, textStep: "تسهیلات" },
  { isComplete: false, isActive: false, textStep: "اطلاعات هویتی" },
  { isComplete: false, isActive: false, textStep: "اطلاعات مالی" },
  { isComplete: false, isActive: false, textStep: "پیش‌پرداخت" },
];
const tabItems = [
  {
    key: "3",
    text: "۳ ماهه",
    value: 3,
  },
  {
    key: "6",
    text: "۶ ماهه",
    value: 6,
  },
];

interface IFacilityData {
  installmentAmount?: number;
  productPrice?: number;
  totalAmount?: number;
  wage?: number;
}

const Facilities: React.FC = () => {
  const router = useRouter();
  const { guaranteeType } = router.query;

  const { productId } = useContext(installmentDetailsContext);

  const [facilityDetails, setFacilityDetails] = useState<IFacilityData | null>(
    null
  );
  const [loanPeriod, setLoanPeriod] = useState(3);

  const handleLoanPeriod = (loanPeriodValue: number) => {
    const data = JSON.parse(localStorage.getItem("intallmentDetail") ?? "");
    setLoanPeriod(loanPeriodValue);
    localStorage.setItem(
      "intallmentDetail",
      JSON.stringify({
        productId: productId ?? data?.productId,
        installmentPeriod: loanPeriodValue,
      })
    );

    let mainData = {
      productId: productId ?? data?.productId,
      loanPeriod: loanPeriodValue,
    };
    services
      .computeInstallmentService(mainData)
      .then(res => setFacilityDetails(res.data.result));
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("intallmentDetail") ?? "");

    let mainData = {
      productId: productId ?? data?.productId,
      loanPeriod: loanPeriod,
    };
    services
      .computeInstallmentService(mainData)
      .then(res => setFacilityDetails(res.data.result));
  }, [loanPeriod, productId]);

  return (
    <>
      <Step stepData={STEPDATA} />
      <Row justifyContent="space-between" alignItems="center" className="mt-24">
        <Col xs={6}>
          <Typography variant="TitleBold" color="gray">
            قیمت کالا:
          </Typography>
        </Col>
        <Col xs={6}>
          <PriceWrapper>
            <Typography
              variant="XLargeTitleBold"
              color="green"
              className="ml-4"
            >
              {priceFormatter(facilityDetails?.productPrice)}
            </Typography>
            <Typography variant="BodyLight" color="gray">
              تومان
            </Typography>
          </PriceWrapper>
        </Col>
      </Row>
      <Row alignItems="center" className="mt-40">
        <TitleIcon />
        <Typography variant="BodyBold" color="gray" className="mr-4">
          مبلغ تسهیلات
        </Typography>
      </Row>
      <PriceBox>
        <BoxPriceWrapper>
          <Typography variant="XLargeTitleBold" color="green" className="ml-4">
            {priceFormatter(facilityDetails?.productPrice)}
          </Typography>
          <Typography variant="TitleRegular" color="gray">
            تومان
          </Typography>
        </BoxPriceWrapper>
      </PriceBox>
      <Row alignItems="center" className="mt-40 mb-8">
        <TitleIcon />
        <Typography variant="BodyBold" color="gray" className="mr-4">
          تعداد اقساط
        </Typography>
      </Row>
      <Tabbar
        value={loanPeriod}
        onChange={(loanPeriodValue: number) =>
          handleLoanPeriod(loanPeriodValue)
        }
        options={tabItems}
        className="mt-8"
      />
      <Row justifyContent="space-between" alignItems="center" className="mt-36">
        <Col xs={6}>
          <Typography variant="TitleBold" color="gray">
            مبلغ هر قسط:
          </Typography>
        </Col>
        <Col xs={6}>
          <PriceWrapper>
            <Typography variant="LargeTitleBold" color="gray" className="ml-4">
              {priceFormatter(facilityDetails?.installmentAmount)}
            </Typography>
            <Typography variant="BodyLight" color="gray">
              تومان
            </Typography>
          </PriceWrapper>
        </Col>
      </Row>
      <Row justifyContent="space-between" alignItems="center" className="mt-16">
        <Col xs={6}>
          <Typography variant="TitleBold" color="gray">
            کارمزد:
          </Typography>
        </Col>
        <Col xs={6}>
          <PriceWrapper>
            <Typography variant="LargeTitleBold" color="gray" className="ml-4">
              {priceFormatter(facilityDetails?.wage)}
            </Typography>
            <Typography variant="BodyLight" color="gray">
              تومان
            </Typography>
          </PriceWrapper>
        </Col>
      </Row>
      <PageFooter>
        {/* <Divider />
        <Row
          justifyContent="space-between"
          alignItems="center"
          className="mt-12"
        >
          <Col xs={6}>
            <Typography variant="TitleBold" color="gray">
              قیمت کالا:
            </Typography>
          </Col>
          <Col xs={6}>
            <PriceWrapper>
              <Typography
                variant="XLargeTitleBold"
                color="green"
                className="ml-4"
              >
                ۱۰,۰۰۰,۰۰۰
              </Typography>
              <Typography variant="BodyLight" color="gray">
                تومان
              </Typography>
            </PriceWrapper>
          </Col>
        </Row> */}
        <CTAButtonWrapper>
          <Link
            href={`/buy/Identity-Information?guaranteeType=${guaranteeType}`}
            passHref
          >
            <CustomLinkWrapper>
              <Button variant="contained" fullWidth height="48px" _size="XXL" color="primary">
                <Typography variant="LargeTitleBold" color="white">
                  تایید و ادامه
                </Typography>
              </Button>
            </CustomLinkWrapper>
          </Link>
        </CTAButtonWrapper>
      </PageFooter>
    </>
  );
};

export default Facilities;
