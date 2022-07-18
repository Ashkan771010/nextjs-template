import React, { useReducer } from "react";

import InstallmentDetailsContext from "./installmentDetailsContext";
import InstallmentDetailsReducer from "./installmentDetailsReducer";

import { SET_PRODUCT_ID } from "../types";

const InstallmentState: React.FC = (props) => {
  const initialState = {
    productId: null,
    installmentPeriod: 3,
  };

  const [state, dispatch] = useReducer(InstallmentDetailsReducer, initialState);

  const setProductDetails = (id: number, installmentPeriod: number = 3) => {
    localStorage.setItem(
      "intallmentDetail",
      JSON.stringify({ productId: id, installmentPeriod })
    );
    dispatch({ type: SET_PRODUCT_ID, payload: id });
  };

  const { productId } = state;

  return (
    <InstallmentDetailsContext.Provider
      value={{
        productId,
        setProductDetails,
      }}
    >
      {props.children}
    </InstallmentDetailsContext.Provider>
  );
};

export default InstallmentState;
