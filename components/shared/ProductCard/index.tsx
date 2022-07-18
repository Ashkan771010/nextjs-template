import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { Typography } from "@theme/ui-components";
import { IProps } from "./interface";
import priceFormatter from "@utils/priceFormatter";
import {
  Price,
  ProductCardWrapper,
  ProductDetailsWrapper,
  ProductImageWrapper,
  SeeProductButton,
  SpinnerWrapper,
} from "./style";
import CustomLinkWrapper from "../CustomLinkWrapper";
import LayoutContext from "src/context/layout/layoutContext";
import Spinner from "../Spinner";

const ProductCard: React.FC<IProps> = props => {
  const { productId, title, isExist, price, image, hasInstallment } = props;
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleText = () => {
    if (hasInstallment || !isExist) {
      return "مشاهده کالا";
    }
    return "خرید اقساطی";
  };

  return (
    <ProductCardWrapper>
      <ProductImageWrapper>
        <img src={image} alt="data" />
      </ProductImageWrapper>
      <ProductDetailsWrapper>
        <Typography
          variant="CaptionRegular"
          color="gray"
          textAlign="right"
          direction="ltr"
        >
          {title}
        </Typography>
        {isExist ? (
          <Price>
            <Typography variant="BodyBold" color="gray">
              {priceFormatter(price)}
            </Typography>
            <Typography
              variant="CaptionLight"
              color="gray"
              className="mr-4 money-unit"
            >
              تومان
            </Typography>
          </Price>
        ) : (
          <Typography variant="BodyBold" color="red">
            ناموجود
          </Typography>
        )}
        <Link href={`/products/${productId}`} passHref>
          <CustomLinkWrapper
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
          >
            <SeeProductButton onClick={() => setIsLoading(true)}>
              {isLoading ? (
                <SpinnerWrapper>
                  <Spinner size={24} isWhite={true}/>
                </SpinnerWrapper>
              ) : (
                <Typography variant="BodyRegular" color="white">
                  {handleText()}
                </Typography>
              )}
            </SeeProductButton>
          </CustomLinkWrapper>
        </Link>
      </ProductDetailsWrapper>
    </ProductCardWrapper>
  );
};

export default ProductCard;
