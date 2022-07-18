import styled from "styled-components";

export const ProductImagesWrapper = styled.div`
  margin: 12px 0 8px;
  
  img {
    width: 200px;
    height: auto;
  }
`;

export const OtherImages = styled.div`
  white-space: nowrap;
  position: relative;
  overflow-x: scroll;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  margin-top: 8px;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none;
  
  img {
    width: 54px;
  }
`;

export const ImageWrapper = styled.div<any>`
  border-radius: 15px;
  display: inline-block;
  margin-left: 8px;
  background: white;
  overflow: hidden;
  padding: 2px;
`;

export const PriceWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const DetailsWrapper = styled.div`
  box-sizing: border-box;
  padding: 12px 12px 16px 12px;
  background-color: ${({ theme }) => theme.colors.paleGray};
  border-radius: 15px;
  margin-top: 12px;
  margin-bottom: 70px;

  .product-title {
    margin-bottom: 12px;
  }
`;

export const CTAButtonWrapper = styled.div`
  width: calc(100% - 24px);
  margin-top: 20px;
  position: fixed;
  bottom: 15px;
`;

export const ProductContentWrapper = styled.div`
  /* padding-bottom: 80px; */
`;
