import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import { BuyHeaderWrapper } from "./style";

const BuyHeaderRoot: React.FC = () => {
  const router = useRouter();
  return (
    <BuyHeaderWrapper>
      <Image
        src="/images/general/setare-logo.svg"
        alt="setare-logo"
        width={69}
        height={16}
        onClick={() =>
          router.push(`/?token=${localStorage.getItem("access_token_loan_sim")}`)
        }
      />
    </BuyHeaderWrapper>
  );
};

export default BuyHeaderRoot;
