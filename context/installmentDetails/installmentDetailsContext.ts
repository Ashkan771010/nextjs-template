import React, { createContext } from "react";

const installmentDetailsContext = createContext({
  productId: 0 || null,
  setProductDetails: (id: number, installmentPeriod: number) => {},
});

export default installmentDetailsContext;
