import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Cookies from "js-cookie";


import { Col, Row, Typography } from "../../../../theme/ui-components";

import {
  HeaderWrapper,
  ActionArea,
  ImageWrapper,
  NavIconWrapper,
  Button,
} from "./style";
import CustomLinkWrapper from "../../../../components/shared/CustomLinkWrapper";
import Spinner from "../../../../components/shared/Spinner";

const DefaultHeaderRoot: React.FC<any> = ({ hasInstallment, loanId }) => {
  const router = useRouter();

  const [isShowPurchaseRecords, setIsShowPurchaseRecords] =
    useState<boolean>(false);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleTransactionDetails = () => {
    if(Cookies.get("token")){
      setIsLoading(true);
      if (token && hasInstallment) {
        router.push(`/purchase-records?loanId=${loanId}`);
      } else {
        setIsShowPurchaseRecords(true);
        setIsLoading(false);
      }
    }else {
      router.push('/login')
    }
  };

  useEffect(() => {
    setToken(localStorage.getItem("access_token_loan_sim"));
  }, []);

  return (
    <HeaderWrapper>
      <Row>
        <Col xs={3}>
          <ImageWrapper>
            <Image
              src="/images/general/setare-logo.svg"
              alt="setare-logo"
              width={69}
              height={16}
              onClick={() => router.push(`/?token=${token}`)}
            />
          </ImageWrapper>
        </Col>
        <Col xs={9}>
          <ActionArea>
            <NavIconWrapper>
              <Link href="/guide" passHref>
                <CustomLinkWrapper display="flex">
                  <Image
                    src="/images/general/info.svg"
                    alt="setare-logo"
                    width={16}
                    height={16}
                  />
                </CustomLinkWrapper>
              </Link>
            </NavIconWrapper>
            {/* <NavIconWrapper>
              <Link href="/search" passHref>
                <Image
                  src="/images/general/search.svg"
                  alt="setare-logo"
                  width={16}
                  height={16}
                />
              </Link>
            </NavIconWrapper>
            <NavIconWrapper>
              <Image
                src="/images/general/profile.svg"
                alt="setare-logo"
                width={16}
                height={16}
              />
            </NavIconWrapper> */}
            <Button
              onClick={
                /* () => setIsShowPurchaseRecords(true) */ handleTransactionDetails
              }
            >
              {isLoading ? (
                  <Spinner size={24}/>
              ) : (
                <>
                  <Typography
                    variant="textRegular"
                    color="gray"
                    className="transaction-title"
                  >
                    سوابق خرید
                  </Typography>
                  <Image
                    src="/images/services/tracker.svg"
                    alt="setare-logo"
                    width={16}
                    height={16}
                  />
                </>
              )}
            </Button>
          </ActionArea>
        </Col>
      </Row>
    </HeaderWrapper>
  );
};

export default DefaultHeaderRoot;
