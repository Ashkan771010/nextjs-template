import React, { useContext, useEffect, useState, Fragment } from "react";
import { useRouter } from "next/router";
import installmentDetailsContext from "src/context/installmentDetails/installmentDetailsContext";
import {
  BreadCrumb,
  Button,
  Col,
  Row,
  TitleIcon,
  Typography,
} from "@theme/ui-components";
import priceFormatter from "@utils/priceFormatter";
import {
  CTAButtonWrapper,
  DetailsWrapper,
  ImageWrapper,
  OtherImages,
  PriceWrapper,
  ProductContentWrapper,
  ProductImagesWrapper,
} from "./style";
import { SpinnerWrapper } from "@components/shared/ProductCard/style";
import Spinner from "@components/shared/Spinner";
import Cookies from "js-cookie";

interface IProps {
  allowPay?: boolean;
  hasInstallment?: boolean | undefined;
  isExist?: boolean;
  price?: number;
  productId?: number;
  title?: string;
  images?: string[];
  features?: any;
}

const Product: React.FC<IProps> = (props) => {
  const { productId, features, images, isExist, price, title, allowPay } =
    props;
  const router = useRouter();

  const [primaryImage, setPrimaryImage] = useState(
    images && images[0] ? images[0] : ""
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [breadCrumbData, setBreadCrumbData] = useState<string[]>([
    "لیست محصولات",
  ]);
  const { setProductDetails, productId: id } = useContext(
    installmentDetailsContext
  );

  const handleSetProductDetails = async () => {
    if (Cookies.get("token")) {
      setIsLoading(true);
      localStorage.setItem("intallmentDetail", JSON.stringify({ productId }));
      setProductDetails(Number(productId), 3);
      await router.push("/rules");
    } else {
      router.push("/login");
    }
  };

  useEffect(() => {
    setBreadCrumbData((prev: any) => [prev[0], title]);
  }, [title]);

  return (
    <>
      <BreadCrumb data={breadCrumbData} />
      <ProductContentWrapper>
        <ProductImagesWrapper>
          <Row justifyContent="center" alignItems="center">
            {primaryImage && <img src={primaryImage} alt="product image" />}
          </Row>
          <OtherImages>
            {images?.map((image: any, index: number) => {
              return (
                <Fragment key={`${image} ${index}`}>
                  <ImageWrapper onClick={() => setPrimaryImage(image)}>
                    <img
                      src={image}
                      alt="product image"
                      width={54}
                      height={54}
                    />
                  </ImageWrapper>
                </Fragment>
              );
            })}
          </OtherImages>
        </ProductImagesWrapper>
        <Row>
          <Col xs={12}>
            <Typography
              variant="TitleBold"
              color="gray"
              className="mt-16 mb-12"
              direction="ltr"
            >
              {title}
            </Typography>
          </Col>
        </Row>
        <Row justifyContent="space-between" alignItems="center">
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
                {priceFormatter(price)}
              </Typography>
              <Typography variant="BodyLight" color="gray">
                تومان
              </Typography>
            </PriceWrapper>
          </Col>
        </Row>
        <DetailsWrapper>
          <Row
            justifyContent="flex-start"
            alignItems="center"
            className="product-title"
          >
            <TitleIcon />
            <Typography variant="BodyBold" color="gray" className="mr-4">
              مشخصات کالا
            </Typography>
          </Row>
          {features?.map(
            (feature: { title?: string; value?: string }, index: any) => {
              return (
                <Row
                  key={feature.title + index.toString()}
                  justifyContent="flex-start"
                  alignItems="center"
                  className="mt-8"
                >
                  <Typography variant="CaptionLight" color="gray">
                    {feature?.title}
                  </Typography>
                  <Typography
                    variant="CaptionLight"
                    color="gray"
                    className="mr-4"
                  >
                    {feature?.value}
                  </Typography>
                </Row>
              );
            }
          )}
        </DetailsWrapper>
      </ProductContentWrapper>
      {allowPay && isExist && (
        <CTAButtonWrapper>
          <Button
            variant="contained"
            fullWidth
            height="48px"
            _size="XXL"
            color="primary"
            isLoading={isLoading}
            onClick={handleSetProductDetails}
          >
            <Typography variant="LargeTitleBold" color="white">
              پرداخت اقساطی
            </Typography>
          </Button>
        </CTAButtonWrapper>
      )}
    </>
  );
};

export default Product;
