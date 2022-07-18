import React from "react";
import Image from "next/image";

import AfterPaymentBoxData from "@components/AfterPaymentBoxData";

import { Button, Typography } from "@theme/ui-components";

import { LoanAfterPaymentWrapper, LoanAfterPaymentFooter } from "./style";

const LoanAfterPayment: React.FC = () => {
  return (
    <LoanAfterPaymentWrapper>
      <Typography variant="BodyRegular" color="gray" className="mt-4 mb-16">
        تراکنش موفق
      </Typography>
      <AfterPaymentBoxData />
    </LoanAfterPaymentWrapper>
  );
};

export default LoanAfterPayment;
