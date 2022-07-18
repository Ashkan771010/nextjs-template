import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { TitleIcon } from "@theme/ui-components/Title-icon/style";
import BottomSheetRoot from "@components/shared/BottomSheet";
import GuranteeTypeBox from "@components/GuaranteeTypeBox";

import { Col, Row, Typography, Checkbox, Button } from "@theme/ui-components";

import {
  TitleSectionWrapper,
  ContinueButtonWrapper,
  GuaranteeTypeWrapper,
} from "./style";

const Rule: React.FC = () => {
  const router = useRouter();

  const [acceptContractFlag, setAcceptContractFlag] = useState(false);
  const [guaranteeType, setGuranteeType] = useState<number>(-1);
  const [isShowGuaranteeTypeBottomSheet, setIsShowGuaranteeTypeBottomSheet] =
    useState(false);

  const handleChangeFlag = () => {
    setAcceptContractFlag(!acceptContractFlag);
  };

  const handleChangeGuaranteeType = (gType: number) => {
    setGuranteeType(gType);
    setIsShowGuaranteeTypeBottomSheet(false);
  };

  const handleOnContinue = () => {
    setIsShowGuaranteeTypeBottomSheet(true)
    if(localStorage.getItem("userInformation")) {
      localStorage.removeItem("userInformation")
    }
    if(localStorage.getItem("financialinformation")) {
      localStorage.removeItem("financialinformation")
    }
  }

  useEffect(() => {
    // FOR CHECK => guranteeType = 0
    // FOR CASH AND SIM => guranteeType = 1
    if (guaranteeType === 0) {
      router.push(`/buy/Facilities?guaranteeType=${guaranteeType}`);
    } else if (guaranteeType === 1) {
      router.push(`/sim-number?guaranteeType=${guaranteeType}`);
    }
    localStorage.setItem("guaranteeType", String(guaranteeType))
  }, [guaranteeType, router]);

  return (
    <>
      <Typography variant="BodyRegular" color="gray" mt="16px">
        لطفا به دقت مطالعه فرمائید
      </Typography>
      <Row>
        <Col xs={12}>
          <TitleSectionWrapper>
            <TitleIcon className="ml-4" />
            <Typography variant="BodyBold" color="gray">
              فقط چک
            </Typography>
          </TitleSectionWrapper>
          <Typography variant="CaptionRegular" color="gray" className="mt-8">
            در این حالت فقط چک به عنوان ضمانت وام دریافتی استفاده می‌شود. چک
            می‌بایست متعلق به شخص وام گیرنده و یا اقوام درجه یک (خانواده) ایشان
            باشد.
          </Typography>
          <TitleSectionWrapper>
            <TitleIcon className="ml-4" />
            <Typography variant="BodyBold" color="gray">
              نقد + سیمکارت
            </Typography>
          </TitleSectionWrapper>
          <Typography variant="CaptionRegular" color="gray" className="mt-8">
            در این حالت نیز سیم‌کارت توسط مجموعه ستاره اول قیمت‌گذاری می‌شود و
            در صورت تایید قیمت توسط کاربر نهایتا تا ۵۰ درصد قیمت کالا را ضمانت
            خواهد کرد. مابقی قیمت کالا به صورت نقدی از طریق درگاه بانکی پرداخت
            خواهد شد.
          </Typography>
          <TitleSectionWrapper className="mt-32">
            <Checkbox
              checked={acceptContractFlag}
              onChange={handleChangeFlag}
            />
            <Typography variant="BodyRegular" color="gray" className="mr-4">
              موارد فوق مورد تائید می‌باشد
            </Typography>
          </TitleSectionWrapper>
          <ContinueButtonWrapper>
            <Button
              disabled={!acceptContractFlag}
              variant="contained"
              fullWidth
              height="48px"
              _size="XXL"
              color="primary"
              onClick={handleOnContinue}
            >
              <Typography variant="LargeTitleBold" color="white">
                ادامه فرآیند خرید
              </Typography>
            </Button>
          </ContinueButtonWrapper>
        </Col>
      </Row>
      <BottomSheetRoot
        isOpen={isShowGuaranteeTypeBottomSheet}
        onClose={() => setIsShowGuaranteeTypeBottomSheet(false)}
        title="نوع ضمانت"
      >
        <GuaranteeTypeWrapper>
          <GuranteeTypeBox
            icon="/images/services/Chek.svg"
            title="فقط چک"
            onClick={guaranteeType => handleChangeGuaranteeType(guaranteeType)}
            // FOR CHECK => guranteeType = 0
            guranteeType={0}
          />
          <GuranteeTypeBox
            icon="/images/services/Cash-sim.svg"
            title="نقد + سیمکارت"
            onClick={guaranteeType => handleChangeGuaranteeType(guaranteeType)}
            // FOR CASH AND SIM => guranteeType = 1
            guranteeType={1}
            // isCommingSoon
          />
        </GuaranteeTypeWrapper>
        <GuaranteeTypeWrapper secondRow>
          <GuranteeTypeBox
            icon="/images/services/Chek-SIM.svg"
            title="چک + سیمکارت"
            // onClick={guaranteeType => handleChangeGuaranteeType(guaranteeType)}
            // FOR CHECK => guranteeType = 2
            guranteeType={2}
            isAlone
            isCommingSoon
          />
        </GuaranteeTypeWrapper>
      </BottomSheetRoot>
    </>
  );
};

export default Rule;
